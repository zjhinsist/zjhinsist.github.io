---
title: 使用selenium刷问卷星
cover: "https://s2.loli.net/2022/11/21/jHkgUWLVo2lnuYF.webp"
mathjax: false
date: 2022-11-14 11:42:29
tags: Python
description: 同学在结课论文需要使用问卷星的时候找不到人，于是乎有了这篇文章
categories: Python
top_group_index: 4
---

{% tip warning %}开始刷代码之前需要先配环境{% endtip %}

需要的环境：

1. Python
2. selenium 谷歌插件
3. pymouse  控制鼠标移动
4. 谷歌浏览器

注意事项：在使用中需要将{% label 自动控制的页面放到桌面最前端 red %}，并且{%label 需要将鼠标放到指定位置 red %}.

Python基础，就不介绍怎么安装了

# 环境准备

## selenium 插件安装

1. 先下载控制selenium的包

   ```Python
   pip install selenium -i https://pypi.tuna.tsinghua.edu.cn/simple
   ```

2. 下载selenium插件

   网址：https://npmmirror.com/mirrors/

![image-20221114115521187](https://s2.loli.net/2022/11/14/tgqz5YvSCH2apsM.png)

从中找到chromedriver，然后找到对应的版本号

![image-20221114115536400](https://s2.loli.net/2022/11/14/F1uiO7DzCHVyTwL.png)

​		自己谷歌的版本从下面这个方式寻找

![image-20221114115824647](https://s2.loli.net/2022/11/14/1EDLhbvCjsUVtNk.png)

3. 将下载好的插件放到和python.exe同目录下

## Pymouse 安装

1. 先下载插件

   ```Python
   pip install pymouse -i https://pypi.tuna.tsinghua.edu.cn/simple
   ```

2. 下载PyHook[下载地址](https://www.lfd.uci.edu/~gohlke/pythonlibs/#pywinhook)

   ![image-20221206170055286](https://s2.loli.net/2022/12/06/mOscvkyd8rwlHaL.png)

   找到自己对应版本的文件

3. 下载pywin32[下载地址](https://www.lfd.uci.edu/~gohlke/pythonlibs/#pywin32)找到自己对应的版本并下载

![image-20221206170246531](https://s2.loli.net/2022/12/06/H9Pe5mjdJOpw2sG.png)

4. 安装Pywinhook和pywin32，将我们下载好的文件放到一个文件夹中，在地址栏输入CMD并回车，打开终端

   ![image-20221206170423904](https://s2.loli.net/2022/12/06/1EKg29Spxe8nYfU.png)

5. 使用 pip install 自己下载的文件名，进行安装

   ![image-20221206174610716](https://s2.loli.net/2022/12/06/6kdHiKct7TflUb4.png)

6. 更改pyMouse的文件内容找到pymouse的安装路径，如果不知道在哪里可以用pip安装一下，如果已经安装了会自动提示安装路径，通常都是在python或者ide的Lib\site-packages里，比如我的在H:\Python\Python3.11\Lib\site-packages\pymouse。

   进入pymouse的安装路径打开__init__.py文件；把92行的windows改为pymouse.windows.

   在同目录下进入pymouse的安装路径打开windows.py文件；把23行的pyHook改为pyWinhook

# 代码解释

## 导包

```Python
import random
import time
from pymouse import PyMouse


import option as option
from selenium.webdriver import Chrome, ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.devtools.v105.indexed_db import Key

from selenium.webdriver.chrome.options import Options
```

## 创建浏览器并设置反爬

```Python
# 忽略浏览器自动检测web
options = Options()
options.add_argument('--disable-blink-features=AutomationControlled')
web = Chrome(options=options)

# 处理SSL证书错误问题
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors')

# 忽略无用的日志
options.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])

# 使用浏览器隐式等待，防止xpath寻找不到指定位置
web.implicitly_wait(10)
```

## 设置每个题目的选项

```Python
# 每个选项的选项数量
num = [
    2, 6, 4, 5, 5, 3, 6, 4, 5, 6, 6, 6, 4, 3, 5, 4, 4, 4, 7
]
```

## 得到随机选项

```Python
# 得到随机的选项
def get_num(list, num):
    if num in [18, 12, 11, 10]:
        a = random.randint(1, list[num])
        b = random.randint(1, list[num])
        if a == b:
            return [a]
        else:
            m = 0
            n = 0
            if a > b:
                m = a
                n = b
            else:
                m = b
                n = a
            return [n, m]
    else:
        return [random.randint(1, list[num])]
```

## 取消上一次的答卷

{% tip warning %}如果上一次答题出错之后，下一次答题的时候页面会直接跳出这条指令，所以我们在执行代码前先判断有没有这个，如果有的话直接点击取消{% endtip %}

![image-20221114120630840](https://s2.loli.net/2022/11/14/oO5qBRm8fCvdlPW.png)

```Python
# 获取填写问卷的网址
web.get("https://www.wjx.cn/vm/rACxGHP.aspx")
# 等待0.3秒
time.sleep(0.3)

# 如果上一次问卷没有填完的话，第二次打开这个页面之后会自动弹出一个弹窗，这个需要使用这个代码来点击
try:
    content = web.find_element(By.XPATH, '/html/body/div[7]/div[3]/a[2]')
    web.execute_script("$(arguments[0]).click()", content)
except Exception:
        print("没有找到上一次的结果")
```



## 开始答题

```Python
# 循环19个T题目
for i in range(19):
    # 获取这个题目的随机选项 ABCD
    list = get_num(num, i)

    # 如果是单选的话直接选上即可
    if len(list) == 1:
        # 获取对应单选的图标
        content = web.find_element(By.XPATH, f'//*[@id="div{i + 1}"]/div[2]/div[{list[0]}]/span/a')
        # 通过js点击数据，防止点击出错
        web.execute_script("$(arguments[0]).click()",content)
        # 控制点击速度
        time.sleep(0.2)
    # 如果是多选项的话需要循环点击所有选项
    else:
        # 循环点击所有的选项
        for n in range(list[0], list[1]):
            # 获取对应选项的图标
            content = web.find_element(By.XPATH, f'//*[@id="div{i + 1}"]/div[2]/div[{n + 1}]/span/a')
            # 点击
            web.execute_script("$(arguments[0]).click()",content)
            time.sleep(0.2)
# 输入框输入数据
web.find_element(By.XPATH, '//*[@id="q20"]').send_keys("暂无意见，自我感觉良好")

# 点击提交
content = web.find_element(By.XPATH, '//*[@id="ctlNext"]')
web.execute_script("$(arguments[0]).click()",content)
time.sleep(0.5)
```

## 控制反爬

### 鼠标方面

问卷星{% label 会检测你鼠标是否移动了 %}，如果你鼠标{% label 长期不移动 %}的话，只能检测的时候会{% label 检测失败 red %}.

```Python
# 使用鼠标移动来防止页面检测，如果鼠标一直不移动的话，页面会自动检测然后判断，该操作是机器操作的
#   获取当前坐标的位置
a = p.position()
p.click(a[0], a[1])
# 移动鼠标防止网页检测
p.move(random.randint(0, 1000), random.randint(0, 1000))
time.sleep(1)
# 将鼠标移动到原来的位置
p.move(a[0], a[1])
```

### 智能检测方面

```python
# 找到指定的提示框来控制点击确认进行只能验证
try:
    content = web.find_element(By.XPATH, '/html/body/div[9]/div[3]/a[1]')
    web.execute_script("$(arguments[0]).click()",content)
    time.sleep(1)
except Exception:
    print("没有找到点击智能验证")
    
# 如果上一个没找到的话可以点击x号来关掉这个页面
try:
    content = web.find_element(By.XPATH, '/html/body/div[8]/span[1]/a')
    web.execute_script("$(arguments[0]).click()",content)
    time.sleep(1)
except Exception:
    print("没有找到点击x号")
    

time.sleep(0.5)

# 点击智能验证来控制人机操作
try:
    content = web.find_element(By.XPATH, '/html/body/div[1]/form/div[6]/div[9]/div[2]/div/div/div/div[1]')
    web.execute_script("$(arguments[0]).click()",content)
    time.sleep(2.5)  
except Exception:
    print("没有找到只能验证")

# 移动滑块来验证
try:
    content = web.find_element(By.XPATH, '/html/body/div[1]/form/div[6]/div[9]/div[2]/div/div/div/div[3]/div[1]/div/div[1]/span')
    # 这里面的第一个参数是 按钮的属性，第二个参数是横向移动的xp，第三个是纵向移动的xp
    ActionChains(web).drag_and_drop_by_offset(content, 260, 1).perform()
except Exception:
    print(1)
    print("没有找到拖动滑块")

# 控制页面停止时间，防止没有提交成功就将页面关闭了 
time.sleep(2)
```

# 代码整合

```Python
import random
import time
from pymouse import PyMouse


import option as option
from selenium.webdriver import Chrome, ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.common.devtools.v105.indexed_db import Key

from selenium.webdriver.chrome.options import Options

# 忽略浏览器自动检测web
options = Options()
options.add_argument('--disable-blink-features=AutomationControlled')


# 处理SSL证书错误问题
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors')

# 忽略无用的日志
options.add_experimental_option("excludeSwitches", ['enable-automation', 'enable-logging'])

# 该代码一定要写到上面的代码下面，否则上面会不起作用
web = Chrome(options=options)

# 使用浏览器隐式等待，防止xpath寻找不到指定位置
web.implicitly_wait(10)


# 每个选项的选项数量
num = [
    2, 6, 4, 5, 5, 3, 6, 4, 5, 6, 6, 6, 4, 3, 5, 4, 4, 4, 7, 5, 5
]


# 得到随机的选项
def get_num(list, num):
    if num in [18, 12, 11, 10]:
        a = random.randint(1, list[num])
        b = random.randint(1, list[num])
        if a == b:
            return [a]
        else:
            m = 0
            n = 0
            if a > b:
                m = a
                n = b
            else:
                m = b
                n = a
            return [n, m]
    else:
        return [random.randint(1, list[num])]


# 获取鼠标
p = PyMouse()

# 循环200次填写两百次问卷
for m in range(200):
    # 获取填写问卷的网址
    web.get("https://www.wjx.cn/vm/rACxGHP.aspx")
    # 等待0.3秒
    time.sleep(0.3)

    # 如果上一次问卷没有填完的话，第二次打开这个页面之后会自动弹出一个弹窗，这个需要使用这个代码来点击
    try:
        content = web.find_element(By.XPATH, '/html/body/div[7]/div[3]/a[2]')
        web.execute_script("$(arguments[0]).click()", content)
        
    except Exception:
        print("没有找到上一次的结果")
    
    # 循环19个T题目
    for i in range(19):
        # 获取这个题目的随机选项 ABCD
        list = get_num(num, i)

        # 如果是单选的话直接选上即可
        if len(list) == 1:
            # 获取对应单选的图标
            content = web.find_element(By.XPATH, f'//*[@id="div{i + 1}"]/div[2]/div[{list[0]}]/span/a')
            # 通过js点击数据，防止点击出错
            web.execute_script("$(arguments[0]).click()",content)
            # 控制点击速度
            time.sleep(0.2)
        # 如果是多选项的话需要循环点击所有选项
        else:
            # 循环点击所有的选项
            for n in range(list[0], list[1]):
                # 获取对应选项的图标
                content = web.find_element(By.XPATH, f'//*[@id="div{i + 1}"]/div[2]/div[{n + 1}]/span/a')
                # 点击
                web.execute_script("$(arguments[0]).click()",content)
                time.sleep(0.2)
    # 输入框输入数据
    web.find_element(By.XPATH, '//*[@id="q20"]').send_keys("暂无意见，自我感觉良好")

    # 点击提交
    content = web.find_element(By.XPATH, '//*[@id="ctlNext"]')
    web.execute_script("$(arguments[0]).click()",content)
    time.sleep(0.5)

    # 使用鼠标移动来防止页面检测，如果鼠标一直不移动的话，页面会自动检测然后判断，该操作是机器操作的
    #   获取当前坐标的位置
    a = p.position()
    print(a)
    p.click(a[0], a[1])
    # 移动鼠标防止网页检测
    p.move(random.randint(0, 1000), random.randint(0, 1000))
    time.sleep(1)
    # 将鼠标移动到原来的位置
    p.move(a[0], a[1])

    # p.click(858, 491)
    # p.move(random.randint(0, 1000), random.randint(0, 1000))
    # time.sleep(1)
    # p.move(858,  491)

    # 找到指定的提示框来控制点击确认进行只能验证
    try:
        content = web.find_element(By.XPATH, '/html/body/div[9]/div[3]/a[1]')
        web.execute_script("$(arguments[0]).click()",content)
        time.sleep(1)
    except Exception:
        print("没有找到点击智能验证")
    
    # 如果上一个没找到的话可以点击x号来关掉这个页面
    try:
        content = web.find_element(By.XPATH, '/html/body/div[8]/span[1]/a')
        web.execute_script("$(arguments[0]).click()",content)
        time.sleep(1)
    except Exception:
        print("没有找到点击x号")
        
    
    time.sleep(0.5)

    # 点击智能验证来控制人机操作
    try:
        content = web.find_element(By.XPATH, '/html/body/div[1]/form/div[6]/div[9]/div[2]/div/div/div/div[1]')
        web.execute_script("$(arguments[0]).click()",content)
        time.sleep(2.5)  
    except Exception:
        print("没有找到只能验证")

    # 移动滑块来验证
    try:
        content = web.find_element(By.XPATH, '/html/body/div[1]/form/div[6]/div[9]/div[2]/div/div/div/div[3]/div[1]/div/div[1]/span')
        # 这里面的第一个参数是 按钮的属性，第二个参数是横向移动的xp，第三个是纵向移动的xp
        ActionChains(web).drag_and_drop_by_offset(content, 260, 1).perform()
    except Exception:
        print(1)
        print("没有找到拖动滑块")

    # 控制页面停止时间，防止没有提交成功就将页面关闭了 
    time.sleep(2)

```

