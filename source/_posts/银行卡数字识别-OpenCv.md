---
title: 银行卡数字识别_OpenCv
date: 2022-07-03 09:32:03
tags: 人工智能
swiper_index: 4
description: 银行卡数字识别，单纯的比较识别
cover: "https://s2.loli.net/2022/11/21/rWoSUxItliEPYHk.webp"
categories: 人工智能
---

# 银行卡数字识别

该程序主要是依靠模板匹配来进行数字识别的

模板图像

![image-20220703102537011](https://s2.loli.net/2022/11/04/3YmEizrnw1KZehS.png)

待匹配的银行卡

![image-20220703102638245](https://s2.loli.net/2022/11/04/vTWnZbxUDtiGVX7.png)

这里银行卡中的数字和我们模板中的数字是同一个类型





## 模板操作

### 首先导入我们所需要的包：

```python
from imutils import contours
import numpy as np
import argparse
import cv2
```

### 配置我们所需要的参数：

```python
ap = argparse.ArgumentParser()
ap.add_argument("-i", "--image", required=True, help="path to input image")
ap.add_argument("-t", "--template", required=True, help="path to template OCR-A image")
# 这里是让参数转换成字典
args = vars(ap.parse_args())
```

### 设置绘图函数

```python
# 绘图展示
def cv_show(name, img):
    cv2.imshow(name, img)
    cv2.waitKey(0)
    cv2.destroyAllWindows()
```

### 模板图像读取：

```python
# 读取模板图像
img = cv2.imread(args["template"])
cv_show("img", img)
```

![image-20220703102537011](https://s2.loli.net/2022/11/04/3YmEizrnw1KZehS.png)

### 模板图像的处理



```python
# 灰度图
ref = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
cv_show("ref", ref)

# 二值图像
ref = cv2.threshold(ref, 10, 255, cv2.THRESH_BINARY_INV)[1]
cv_show("ref", ref)
```

灰度图

![image-20220703102537011](https://s2.loli.net/2022/11/04/3YmEizrnw1KZehS.png)

逆二值图：

![image-20220703102816234](https://s2.loli.net/2022/11/04/VrCi4DMYeWvA7sE.png)

### 计算模板图像轮廓并画出

```python
# 计算轮廓
# cv2.findCounters()函数能够能够接受的参数为二值图，即黑白图(不是灰度图)，
#   cv2.RETR_EXTERNAL,只检测外部轮廓， cv2.CHAIN_APPROX_SIMPLE只保留终点坐标
# 返回的元组中每一个元素都是图像中的一个轮廓
refCnts, hierarchy = cv2.findContours(ref.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

cv2.drawContours(img, refCnts, -1, (0, 255, 0), 3)
cv_show("img", img)
```

画出图像轮廓

![image-20220703102840214](https://s2.loli.net/2022/11/04/KE4dRcBoMkn7hPa.png)

### 模板排序



这里面一共有10个轮廓，每一个轮廓代表一个数字，{% label 但是轮廓的先后位置我么不确定 orange %}，我们需要给轮廓排序之后才能够知道轮廓的先后顺序，排完序之后，0这个轮廓就在第一位，1这个轮廓就在第二位

zip()函数是将两个列表对应位置的元素打包在一起，并组合成一个大列表的操作

sorted()函数有几个参数要注意：

> 首先，sorted 可以对所有可迭代的对象进行排序操作，而不仅仅是列表
>
> 语法：sorted(iterable, cmp=None, key=None, reverse=False)
>
> iterable -- 可迭代对象。
>
> cmp -- 比较的函数，这个具有两个参数，参数的值都是从可迭代对象中取出，此函数必须遵守的规则为，大于则返回 1，小于则返回 - 1，等于则返回 0。
>
> key -- 主要是用来进行比较的元素，只有一个参数，具体的函数的参数就是取自于可迭代对象中，指定可迭代对象中的一个元素来进行排序。
>
> reverse -- 排序规则，reverse = True 降序 ， reverse = False 升序（默认）。

```python
# 排序函数有两个参数
# 参数一：记录轮廓的元组
# 参数二：排序的方向
def sort_contours(cnts, method="left-to-right"):
    reverse = False
    i = 0
    
	# 这里确定排序的方向
    if method == "right-to-left" or method == "bottom-to-top":
        reverse = True
	
    # 这里确定是用x比较还是用y来比较，如果是水平的方向的用x来比较，如果是垂直方向的用y来比较
    if method == "top-to-bottom" or method == "bottom-to-top":
        i = 1
    
    # 用一个最小的矩形，把找到的形状包起来x,y,h,w
    # cv2.boudingRect(轮廓) 返回值为：轮廓近似的坐标数据， x, y, h, w'
    boundingBoxes = [cv2.boundingRect(c) for c in cnts]  
    
    # zip()函数是将两个列表对应位置的元素打包在一起，并组合成一个大列表的操作
    # zip(cnts, boundingBoxes) 的目的是将每一个轮廓 和每一个轮廓坐标对应起来
    (cnts, boundingBoxes) = zip(*sorted(zip(cnts, boundingBoxes),
                                        key=lambda b: b[1][i], reverse=reverse))
	
    # 返回轮廓信息，和轮廓矩形坐标信息
    return cnts, boundingBoxes

# 获取排序后的轮廓信息
# 这里时候轮廓信息都是排序完的
refCnts = sort_contours(refCnts, method="left-to-right")[0]
```

### 模板对应

经过模板排序之后，我们可以使用字典来将每一个模板对应成为一个数字：

```python
# 遍历每一个轮廓
# 使用枚举类型，i为坐标，c为数据
for (i, c) in enumerate(refCnts):
    # 返回该轮廓的外接矩形的坐标信息
    (x, y, w, h) = cv2.boundingRect(c)
    
    # 在原图上获取外接矩形的图像信息，每一个数据点
    roi = ref[y:y + h, x:x + w]
    # 转换模板大小
    roi = cv2.resize(roi, (57, 88))
    # 每一个数字对应着一个模板
    digits[i] = roi
```



## 图像操作

### 初始化卷积核

{% label 初始化两个卷积核，一个用来识别模板，一个用来识别图像 orange %}

```python
# 初始化卷积核
rectKernel = cv2.getStructuringElement(cv2.MORPH_RECT, (9, 3))
sqKernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))
```



### 读取图像并进行预处理

```python
# 读取图像，预处理
image = cv2.imread(args["image"])
cv_show("image", image)

# 改变图像尺寸，变小一点方便处理
image = myutils.resize(image, width=300)
# 设置成灰度图
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
cv_show("GRAY", gray)
```

原始图像

![image-20220703112759489](https://s2.loli.net/2022/11/04/Xa94He5KPTM7I61.png)

灰度图

![image-20220703112736882](https://s2.loli.net/2022/11/04/Rt1dbmqu2Je6OYr.png)

### 礼帽操作

经过灰度处理之后我们发现，这张卡片中的一些背景的干扰信息变暗了许多，这时候我们可以使用礼帽操作，突出更加明亮的地方

```python
# 礼帽操作 突出更明亮的区域
tophat = cv2.morphologyEx(gray, cv2.MORPH_TOPHAT, rectKernel)
cv_show("tophat", tophat)
```

![image-20220703113026873](https://s2.loli.net/2022/11/04/cF8HMpZh97BmAru.png)



### 计算梯度

我们是用Sobel算子来计算梯度，凸出边缘

目的：Sobel算子主要用于边缘检测，对噪声平滑抑制。

原理：图像梯度用于边缘检测。边缘是像素值发生跃迁的地方，是图像的显著特征之一。图像中有灰度值的变化就会有梯度，从而产生边缘，在边缘处，具有变化的强弱及方向。图像上可以使用一阶差分来计算相邻像素之间的变化率，我们利用卷积和特定的算子来计算相邻像素的变化率。sobel算子可以计算相邻三个点之间的变化率。它们用于一阶算子的边缘检测，利用像素点上下、左右相邻点的灰度差求取边缘。计算水平梯度，检测垂直边缘 ，计算垂直梯度，检测水平边缘，最后通过将水平边缘图和垂直边缘图相加可近似得总边缘图。

```python
# Sobel算子算梯度
gradX = cv2.Sobel(tophat, ddepth=cv2.CV_32F, dx=1, dy=0, ksize=-1)  # ksize = -1相当于使用3*3的核
# 取绝对值
gradX = np.absolute(gradX)
# 归一化
(minVal, maxVal) = (np.min(gradX), np.max(gradX))
gradX = (255 * ((gradX - minVal) / (maxVal - minVal)))
gradX = gradX.astype("uint8")

cv_show("gradX", gradX)
```

梯度完之后的图像为：

![image-20220703114906542](https://s2.loli.net/2022/11/04/TF7r3mAM6ke5Sy9.png)



### 图像闭运算

![image-20220703121626116](https://s2.loli.net/2022/11/04/eNVCdzOQ3YfvGos.png)

其中红色图像部分就是我们想要的部分

通过梯度运算完之后的图像我们可以看出大致的轮廓已经显示出来了，但是还有许多小空隙，这时候我们可以使用闭运算将其填充上

```python
# 闭操作（先膨胀在腐蚀）
gradX = cv2.morphologyEx(gradX, cv2.MORPH_CLOSE, rectKernel)
cv_show("gradX", gradX)
```

![image-20220703121249109](https://s2.loli.net/2022/11/04/E8LCfJizZqnBl4m.png)

这时候我们可以在使用二值处理，让其颜色更加突出一点：

```python
# THRESH_OTSU会自动的寻找合适的阈值，适合双峰，需要把阈值的参数设置为0
thresh = cv2.threshold(gradX, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
cv_show("thresh", thresh)
```

![image-20220703121418015](https://s2.loli.net/2022/11/04/JmHwhDeyBs9UnQa.png)

这时候图像中还是有些许小孔这时候我们在进行一下闭操作

```python
thresh = cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, sqKernel)
cv_show("thresh", thresh)
```

![image-20220703121511801](https://s2.loli.net/2022/11/04/OoTDEUzlNer64aY.png)

这时候我们发现小孔几乎都合并了，得到了我们想要的四个比较清晰的轮廓



### 计算图像轮廓

我们得到了比较清楚的轮廓之后我们可以将我们想要的轮廓圈出来

```python
# 计算轮廓
# findContours 返回两个值，第一个是轮廓元组， 第二个是轮廓的层级
threshCnts, hierarchy = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
```



将我们的轮廓画出来：

```python
# 获取轮廓
cnts = threshCnts
# 备份图像
cur_img = image.copy()
# 画出轮廓
cv2.drawContours(cur_img, cnts, -1, (0, 0, 255), 3)
cv_show("cur_img", cur_img)
```

![image-20220703124106285](https://s2.loli.net/2022/11/04/VxJqTBMpfyhje5u.png)

### 轮廓选取

现在我们要根据俄轮廓的长宽比来将我们所想要的轮廓选取出来：

```python
# 选出的轮廓放在这个列表中
locs = []

# 我们便利一下所有轮廓
for (i, c) in enumerate(cnts):
    # 找出这个轮廓的坐标信息
    (x, y, w, h) = cv2.boundingRect(c)
    # 算出长宽比
    ar = w / float(h)
	# 找出出比例在2.5 和 4.0之间的
    if 2.5 < ar < 4.0:
        # 我们在进行二次过滤，找出符合宽度和高度的
        if 40 < w < 55 and 10 < h < 20:
            # 我们把这个轮廓坐标信息添加到我们事先准备好的里列表中
            locs.append((x, y, w, h))


# 将列表中的所有元素进行排序，按照x坐标进行排序
locs = sorted(locs, key=lambda x: x[0])
```



### 数字匹配

```python
output = []

# 遍历图像中我们目标的轮廓信息
for (i, (gx, gy, gw, gh)) in enumerate(locs):
    # 初始化组列表
    groupOutput = []

    # 根据坐标提取每一组，每一个点的位置信息
    group = gray[gy - 5:gy + gh + 5, gx - 5: gx + gw + 5]
    # 显示我们提取的图像
    cv_show("group", group)

    # 预处理 二值化
    group = cv2.threshold(group, 0, 255, cv2.THRESH_BINARY | cv2.THRESH_OTSU)[1]
    cv_show("group", group)
	
    # 寻找每个数字的轮廓
    digitCnts, hierarchy = cv2.findContours(group.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    # 轮廓进行排序
    digitCnts = contours.sort_contours(digitCnts, method="left-to-right")[0]

    # 计算每一组中的每一数值
    for c in digitCnts:
        # 获取每个轮廓中的 坐标信息
        (x, y, w, h) = cv2.boundingRect(c)
        
        # 获取这个区域的坐标信息
        roi = group[y:y + h, x:x + w]
        
        # 将这个区域变成，和模板相同大小的区域
        roi = cv2.resize(roi, (57, 88))
        cv_show('roi', roi)

        # 计算匹配得分
        score = []

        # 在模板中计算每一个得分
        for (digit, digitROI) in digits.items():
            # 模板匹配
            resutl = cv2.matchTemplate(roi, digitROI, cv2.TM_CCOEFF)
            (minVal, maxVal, minLoc, maxLoc) = cv2.minMaxLoc(resutl)
            score.append(maxVal)
        groupOutput.append(str(np.argmax(score)))

    # 把框画出来
    cv2.rectangle(image, (gx - 5, gy - 5), (gx + gw + 5, gy + gh + 5), (0, 0, 255), 1)
    cv2.putText(image, "".join(groupOutput), (gx, gy - 15), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (0, 0, 255), 2)

    # 得出结果
    output.extend(groupOutput)
```
