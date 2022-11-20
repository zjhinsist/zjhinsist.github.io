---
title: 浅谈SVM支持向量积
date: 2022-05-05 10:11:53
tags: SVM
background: url(https://s3.bmp.ovh/imgs/2022/08/08/e1c9bda47806a33d.png)
swiper_index: 3
description: 支持向量机的一些通俗的解释
categories: 人工智能
---

## 以下是我自己的一些认知，如果有理解不到位的地方还请指正！！谢谢

# 支持向量机

我们下面主要是围绕这几个问题来展开叙述

1. 我们在使用分类问题的时候，什么样的决策边界才是最好的
2. 如果特征数据本身很难区分，怎么办才好
3. 计算复杂度怎么样？能够实际应用吗

好，下面我们来进行第一个问题的解释：

# 最优决策边界：

![](https://s2.loli.net/2022/11/04/YqseT5xBOUdcgkw.png)

就像上面这张图片，如果我们想要将其分开，我么有以上两种分开的方法，都可以比较好的分开图片，但是**支持向量机**寻找的就是最优的决策边界，如图所示，比较好的分割这一份数据的边界时LargeMargin 这条线， 由此我们选择决策边界的时候 我们的宗旨是：选择离我们最近的点的最大距离。

## 数据点到决策边界的距离

我们既然想要求出离我们最近的点的最大距离，第一步我们当然是要求出离我们最近的点，

![](https://s2.loli.net/2022/11/04/ixtT14emd3XnY9S.png)

如图所示，我们想要求出点X到我们决策边界面的最短距离，目的就是求出X到决策面的距离

我们假设这个决策面的方程为 Ax + By + Cz = D，其中(A, B, C)为法向量

![](https://s2.loli.net/2022/11/04/qVPnGi1JKcftjQX.png)

m1为平面外一点，m0为平面内一点，则：d = |M0M1|cosα,

cosa = (M0M1 * n)/ (|M0M1|*|n|)

M0M1 * n = |A(x1-x0)+B(y1-y0) + C(z1-z0)| = |Ax1 + By1 + Cz1 + D|

最后结果为：

d = (1/|n|)(n*M1 + D)  n 为法向量

- 这时候我们就求出点到面之间的距离了：（1/法向量的长度）*（法向量与该点的乘积+D）

## 数据标签的定义：

支持向量机，是一个有监督的学习算法，需要我们人为的给出X 和 y，我们的数据集定义为(X1,y1)(x2, y2)….(xn, yn)，y为样本类别，这里我们定义： 当X为正例的时候y = +1, 当x为负例的时候 y = -1，这里这样定义是为了方便以后进行运算

决策方程为： y(x) = W*x + b(这里就是决策面的方程(Ax + By + Cz = D))

y(x) > 0  yi = +1 

                      			 => yi*y(x) > 0 

y(x) < 0 yi = -1 

这里是确保 yi*y(x) 始终是大于零的



## 优化的目标

我们上面提到我们在寻找最优边界的时候，是要寻找距离决策边界最近的点的最远距离，

点到直线的距离为： (1/|n|)|n*M1 + D|

化简可得： yi * (n*M1 + D) / |n| ， 这里面的yi就是 目标属于的类别， 属于正例 yi = 1, 属于负例 yi = -1， 这样确保  yi*y(x) > 0 能够去掉绝对值

这时候就出现了我们需要优化的目标函数：

![img](https://s2.loli.net/2022/11/04/ZPdcNlwVEgULOTR.png)

这个函数的意义就是，寻找离我们最近的点i 然后找出w和b让这个点距离我们最远

- 但是现在问题又来了，我们在优化这个式子的时候，未免不觉得这个式子有点长，所以我们可以进行放缩一下，上面提到我们 确保 yi * y(x) ≥ 0 这时候我们可以通过某一种特定的变化来让yi*y(x) 和大于1
- 这时候我们可以把下面的式子最小值看作为1
- ![img](https://s2.loli.net/2022/11/04/PHnplT9CQr31bjI.png)
- 这时候我们优化的目标就变成了![img](https://s2.loli.net/2022/11/04/3yqre8EDvRMpW4F.png)
- 我们再进行机器学习的时候通常会把求最大值的问题转换成最小值的问题，既然我们要求1/|w| 的最大值， 相反我们就需要求 w的最小值， 这时候我们就要求w的最小值约束条件为![img](https://s2.loli.net/2022/11/04/AKgmY2RQM65co7e.png)
- 我们还可以进行转换，就是为了方便以后进行运算，转换完之后的的式子为：![img](https://s2.loli.net/2022/11/04/whCKQ35LHyvURnM.png)

## 拉格朗日乘子法

从上面可以知道我们想要求1/2 * W^2 的最大值，在 <img src="https://s2.loli.net/2022/11/04/pkFbiWdRMZr9fjJ.png" alt="image-20220303141756385" style="zoom: 50%;" /> 它的约束条件下,这时候就不得不提我们的拉格朗日乘子法了。

拉格朗日乘子法解决的问题是：**在约束条件下求解最优值的问题**。

含义：这种方法可以将一个有 **n 个变量** 的与**k 个约束条件** 的最优化问题转换成一个有**n+k**个变量的方程组的极值的问题， 这种方法引入了一个**新的标量未知数**，让这几个变量都用这个未知量来替代，最后转换成求一个未知量极值的问题

**例子**: 我们在给定一个二元函数**z = f(x, y)** 和附加条件**β(x, y) = 0 **,寻找**z = f(x,y)**在附加条件下的极值点：

 先做拉格朗日函数**F(x, y, α) = f(x, y) + αβ(x, y)** 其中α为引进的参数

 然后分别对x，y，α的**一阶偏导数**等于零 ，最后得出x和y

## 开始求解函数

当我们使用拉格朗日乘子法得出的公式为：<img src="https://s2.loli.net/2022/11/04/vOh8PnKl4gCGaez.png" alt="img" style="zoom: 67%;" />

这里引入一个公式KKT 条件：<img src="https://s2.loli.net/2022/11/04/15oEsYpDhUBTeJ6.png" alt="img" style="zoom:67%;" />

这里前面的式子为： 我们需要求一个中间变量α让这个式子为极值， 然后在使用之前的的方法求最小值

后面的式子就是先求最小值 在求最大值

我们先求最小值：

- 分别给w和b求偏导并且等于零最后的结果是：![image-20221104172656623](https://s2.loli.net/2022/11/04/8vTdhf5LocZ6pJa.png)<img src="https://s2.loli.net/2022/11/04/SwoYEVHgs9jGAXe.png" alt="img" style="zoom:80%;" />
- 我们把结果带入原式子得出：![img](https://s2.loli.net/2022/11/04/EVCIDh1z2tr6jpG.png)

然后我们在求极大值：

- 我们需要求<img src="https://s2.loli.net/2022/11/04/uQostlkFhyzNI1O.png" alt="img" style="zoom:80%;" />该式子的极大值

- 和往常一样我们需要求出这个式子的最小值，就是在这前面加一个负号即可<img src="https://s2.loli.net/2022/11/04/4Bo67TDf9EAxJZc.png" alt="img" style="zoom:80%;" />

  不要忘了这个式子的约束条件为![img](https://s2.loli.net/2022/11/04/N4Cc1WdzPhsveal.png) ，其中 αiyi == 0 是之前b求偏导得出的结果，αi≥0是拉个朗日乘子法中必须要求的

## 求解实例：

![img](https://s2.loli.net/2022/11/04/uwkMfBx9at2yEK1.png)

现在我们要求解这个分类函数的最优决策边界其中 x1(3,3)，x2(4,3)为一类, x3(1,1)为另一类

我们的求解方程为：<img src="https://s2.loli.net/2022/11/04/jiPydHJYacm2Erl.png" alt="img" style="zoom:67%;" />

约束条件为：$a_1+a_2-a_3=0,a_i≥0,i=1,2,3$

这时候我们把式子带进去后得到的结果是$\frac{1}{2}(18a_1^2+25a_2^2+2a_3^2+42a_1a_2-12a_1a_3-14a_2a_3)-a_1-a_2-a_3$

通过a1 + a2 = a3 这个条件可得：$4a_1^2+\frac{13}{2}a_2^2+10a_1a_2-2a_1-2a_2$

我们在分别给a1 和 a2求偏导得到的结果为 a1 = 1.5, a2 = -1 ， 这时候不满足上面的约束条件 ，可知最后的结果在边界上 我们让a1 = 0 得出 a2 = -2/13, 不满足， a2 = 0, a1 = 0.25 满足， 于是最后结果为a1 = 0.25,a2 =0 ,a3 = 0.25

最后得出的结果是：<img src="https://s2.loli.net/2022/11/09/nqYk7aU6ipxylPf.png" alt="img" style="zoom:80%;" />

w = 0.25 * 1 * (3,3) + 0.25*-1*(1,1)

  = (0.5,0.5)

![img](https://s2.loli.net/2022/11/04/QlmUCz4dTu95cip.png)

最后决策边界为：0.5x1+0.5x2+-2

# 总结

我们的决策边界求解，单纯依靠 离决策边界最近的点的影响(支持向量)，剩下的点的a值都为零。就是这两个点 把这个 面支撑起来的，所以称为支持向量积

![img](https://s2.loli.net/2022/11/04/hk2qaV5JRwbuNOp.png)

# 软间隔（soft-margin）

我们在处理数据的时候，数据不可能分布完全合理，可能存在一些”不规则”的点，例如我所标记的点， 如果我们还用我们之前的哪一种方法 yi*y(x) > 0 放缩过后, 为 yi*y(x) > 1 这样是确保能够完美分割，但是像右边这张图所示，如果我们把, 所有点都考虑在内的话 这样反而得不偿失，这时候我们要引入 “软间隔”,让我们的约束条件没有那么苛刻， 例如yi*y(x) > 1-σ，这里面的σ就是松弛因子

![img](https://s2.loli.net/2022/11/04/OXTYQKejP2vMSag.png)

所以我们新的目标函数为：<img src="https://s2.loli.net/2022/11/04/NBMmjxaC9HJdFbD.png" alt="img" style="zoom:80%;" />

我们加入C目的是为了 能够控制松弛因子的大小 我们的目的是让最终的结果整体偏小

当我们给定C比较大的时候 ：意味着 分类严格不能够有错误

但我们给定C比较小的时候： 意味着 分类任务可以有更大的错误容忍

C是我们指定的

# 核函数

当我们遇到低维不可分的问题的时候 ，我们可以把它映射到较高的维度中来方便我们进行分类

如果我们出现右边这种情况的话，如果在二维空间中分类的话，可能出现过拟合的情况，这时候如果我们把它映射到高纬度中，也许可能会变得比较好区分一些

核变换：低纬度不好区分的时候我们可以通过非线性变化，将数据映射到高纬度中来方便我们进行区分

![img](https://s2.loli.net/2022/11/04/W2J5vImhdz7qrn4.png)

**作用**：可以是我们在低维空间中能够完成在高纬度中样本内积的运算

例子：

假设我们有俩个数据，x=(x1,X2,x3); y =(y1, y2,y3)，此时在3D空间已经不能对其经行线性划分了，那么我们通过一个函数将数据映射到更高维的空间，比如9维的话，那么f(x)=)(x1x1,X1X2,X1x3,X2X1,X2X2,X2x3, x3x1,x3x2,x3x3)，

由于需要计算内积，所以在新的数据在9维空间，需要计算<f(x),f(y)>的内积，需要花费O (n^2) 。

在具体点，令x =(1, 2,3);y =(4,5,6)，那么f(x)=(1,2,3,2, 4,6,3,6,9)，

f(y) =(16,2o,24,20,25,36, 24,30,36)，

此时  <f(x), f(y)> = 16+ 40+72＋40 ＋ 10O+ 180 + 72+ 180 +324=1024

似乎还能计算，但是如果将维数扩大到一个非常大数时候，计算起来可就不是一丁点问题了。

但是发现，K(x, y )= (<x, y>)^2K(x,y)=(4 + 10+ 18 ) ^2 =32^2 = 1024

俩者相等，K(x, y ) = (<x, y>)^2=<f(x), f(y)>，但是K(x, y )计算起来却比<f(x), f(y)>简单的多，

也就是说只要用K(x, y )来计算，，效果和<f(x), f(y)>是一样的，

但是计算效率却大幅度提高: 如： K(x,y)是o (n)，而<f(x),f(y)>是0(n^2） 



所以使用核函数的好处是：在低维度中去完成高纬度中样本内积的计算

## 高斯核函数

![img](https://s2.loli.net/2022/11/04/q9m4hxuvVXDPFN6.png)

我们在应用的时候直接照着这个公式往里面套即可。

![img](https://s2.loli.net/2022/11/04/aOPCwolh1ErFM5u.png)

我们在遇到上面这个图像的时候不能够在低维空间中较好的分割这两部分，于是我们可以映射到高维空间中这样就比较好运算



# 具体代码实现过程

# SVM 支持向量机

- 与传统算法相比，SVM的效果如何

- 软间隔的作用，这么复杂的算法肯定会导致过拟合现象的出现，如何解决呢？

- 核函数的作用，如果只是做线性分类，好像轮不到SVM登场了，核函数才是他的强大之处

- SVM主要解决的是二分类问题

  ```python
  import numpy as np
  import os
  import matplotlib.pyplot as plt
  
  from sklearn.svm import SVC
  from sklearn.datasets import load_iris
  
  iris = load_iris()
  # 获取数据中的第三列和第四列
  X = iris["data"][:,(2,3)]
  y = iris["target"]
  
  # 我们暂时把这三类分为两类，去掉y == 3的哪一类
  setosa_or_versicolor = (y == 0) | (y == 1)
  X = X[setosa_or_versicolor]
  y = y[setosa_or_versicolor]
  
  svm_clf = SVC(kernel="linear", C=float("inf"))
  svm_clf.fit(X, y)
  
  # 一般的模型 这里是随便定义的 为了对比使用
  x0 = np.linspace(0,5.5,200)
  pred_1 = 5*x0 - 20
  pred_2 = x0 - 1.8
  pred_3 = 0.1*x0 + 0.5
  
  def plot_svc_decision_boundary(svm_clf,xmin,xmax,sv=True):
      # 获取 权重参数
      w = svm_clf.coef_[0]
      # 获取偏置参数
      b = svm_clf.intercept_[0]
      
      # 我们自己手动定义x
      x0 = np.linspace(xmin,xmax,200)
      # 我们获取到x1， 因为这给样本是分类，所有w有两个数值
      decision_boundary = -w[0]/w[1] * x0 - b/w[1]
      
      # 获取到优化条件
      margin = 1/w[1]
      
      # 获取上下两条线
      gutter_up = decision_boundary - margin
      gutter_down = decision_boundary + margin
      
      # 是否画出支持向量 就是存在的边界点
      if sv:
          svs = svm_clf.support_vectors_
          plt.scatter(svs[:,0], svs[:,1],s=180, facecolors="r")
          
      # 画出三条线
      plt.plot(x0,decision_boundary, "k-", linewidth=2)
      plt.plot(x0,gutter_up, "k--", linewidth=2)
      plt.plot(x0,gutter_down, "k--", linewidth=2)
  
  plt.figure(figsize = (20,8), dpi = 80)
  plt.subplot(121)
  plt.plot(X[:,0][y == 1], X[:,1][y == 1], 'bs')
  plt.plot(X[:,0][y == 0], X[:,1][y == 0], 'ys')
  plt.plot(x0, pred_1, "g--")
  plt.plot(x0, pred_2, "m--")
  plt.plot(x0, pred_3, "r--")
  plt.axis([0,5.5,0,2])
  
  plt.subplot(122)
  plot_svc_decision_boundary(svm_clf,0,5.5)
  plt.plot(X[:,0][y == 1], X[:,1][y == 1], 'bs')
  plt.plot(X[:,0][y == 0], X[:,1][y == 0], 'ys')
  plt.axis([0,5.5,0,2])
  ```

  ![img](https://s2.loli.net/2022/11/04/18zsaSu3lwA49TL.png)

## 数据标准化的影响

<img src="https://s2.loli.net/2022/11/04/yDn2Timo31cbBwW.png" alt="img" style="zoom:150%;" />

## 软间隔（防止过拟合）

- 如果不加软间隔会出现那种问题呢？
  ![img](https://s2.loli.net/2022/11/04/HJopLWuUG5QjMgB.png)
  可以使用超参数C控制软间隔程度

```python
import numpy as np
from sklearn.datasets import load_iris
# 流水线处理
from sklearn.pipeline import Pipeline

# 标准化的使用
from sklearn.preprocessing import StandardScaler
from sklearn.svm import LinearSVC

iris = load_iris()
X = iris["data"][:,(2,3)]
y = (iris["target"] == 2).astype(np.float64)

svm_clf1 = LinearSVC(C=1, random_state=42)

svm_clf2 = LinearSVC(C=100, random_state=42)

scaler = StandardScaler()
scaled_svm_clf1 = Pipeline((
    # 先让数据标准化
    ("std",scaler),
    # 然后进行线性支持向量积
    ("linear_svc",svm_clf1)
))
scaled_svm_clf2 = Pipeline((
    # 先让数据标准化
    ("std",scaler),
    # 然后进行线性支持向量积
    ("linear_svc",svm_clf2)
))
scaled_svm_clf1.fit(X,y)
scaled_svm_clf2.fit(X,y)

# 数据还原

b1 = svm_clf1.decision_function([-scaler.mean_ / scaler.scale_])
b2 = svm_clf2.decision_function([-scaler.mean_ / scaler.scale_])
w1 = svm_clf1.coef_[0] / scaler.scale_
w2 = svm_clf2.coef_[0] / scaler.scale_
svm_clf1.intercept_ = np.array([b1])
svm_clf2.intercept_ = np.array([b2])
svm_clf1.coef_ = np.array([w1])
svm_clf2.coef_ = np.array([w2])

# 数据展示
plt.figure(figsize=(20,8), dpi = 80)
plt.subplot(121)
plt.plot(X[:,0][y==1],X[:,1][y==1], "g^", label="iris-Virginica")
plt.plot(X[:,0][y==0],X[:,1][y==0], "bs", label="iris-Versicolor")
plot_svc_decision_boundary(svm_clf1, 4, 6, sv=False)
plt.xlabel("Petal length", fontsize=14)
plt.ylabel("Petal width", fontsize=14)
plt.legend()
plt.title(f"C = {svm_clf1.C}", fontsize=16)
plt.axis([4,6,0.8,2.8])

plt.subplot(122)
plt.plot(X[:,0][y==1],X[:,1][y==1], "g^", label="iris-Virginica")
plt.plot(X[:,0][y==0],X[:,1][y==0], "bs", label="iris-Versicolor")
plot_svc_decision_boundary(svm_clf2, 4, 6, sv=False)
plt.xlabel("Petal length", fontsize=14)
plt.ylabel("Petal width", fontsize=14)
plt.legend()
plt.title(f"C = {svm_clf2.C}", fontsize=16)
plt.axis([4,6,0.8,2.8])
```

<img src="https://s2.loli.net/2022/11/04/sCMvU6z7O2cJWpq.png" alt="img" style="zoom:200%;" />

**由上面可知：**

- 在右侧，使用较高的C值的时候，分类器会减少误差分类，但最终会出现较小的间隔
- 在左侧，使用较低的C值的时候，间隔要大的多，但很多实例会出现在间隔之内

**创建一份有难度的数据**

```python
from sklearn.datasets import make_moons
X ,y = make_moons(n_samples=100, noise=0.15, random_state=42)
def plot_dataset(X,y,axes):
    plt.plot(X[:,0][y==0],X[:,1][y==0],"bs")
    plt.plot(X[:,0][y==1],X[:,1][y==1],"g^")
    plt.axis(axes)
    plt.grid(True, which="both")
    plt.xlabel(r"$X_1$", fontsize=20)
    plt.ylabel(r"$X_2$", fontsize=20, rotation=0)

plot_dataset(X,y,[-1.5,2.5,-1,1.5])
plt.show()
```

![img](https://s2.loli.net/2022/11/04/ANWi4cPeZ7tj8f9.png)

## 非线性支持向量机

```python
from sklearn.datasets import make_moons
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler,PolynomialFeatures

polynomial_svm_clf = Pipeline((
    ("poly_features",PolynomialFeatures(degree = 3)),
    ("scaler", StandardScaler()),
    ("svm_clf", LinearSVC(C=10,loss='hinge'))
))
polynomial_svm_clf.fit(X, y)

def plot_predictions(clf,axes):
    x0s = np.linspace(axes[0],axes[1],100)
    x1s = np.linspace(axes[2],axes[3],100)
    x0, x1 = np.meshgrid(x0s, x1s)
    # 按行链接矩阵
    print(x0s)
    print(x0)
    print(x1s)
    print(x1)
    X = np.c_[x0.ravel(), x1.ravel()]
    y_pred = clf.predict(X).reshape(x0.shape)
    # 绘制等高线
    plt.contourf(x0, x1,y_pred,cmap=plt.cm.brg,alpha=0.2)
    
plot_predictions(polynomial_svm_clf,[-1.5,2.5,-1,1.5])
plot_dataset(X,y,[-1.5,2.5,-1,1.5])
```

![img](https://s2.loli.net/2022/11/04/R68QxNAHenVZaW1.png)

## SVM中的核技巧

- 在使用SVM的时候有一个kernel参数有三个变量，linear，poly，rbf
- linear 直接进行拟合，不做任何变化
- poly 可以设置degree函数，用来表示函数的复杂程度
- rbf 径向基函数

```python
from sklearn.svm import SVC

from sklearn.svm import SVC
# 先展示 poly
poly_kernel_svm_clf = Pipeline((
    ("scaler", StandardScaler),
    # 其中degree 是设置函数的复杂程度，coef0是偏置量， C 是控制软间隔的变量， C越大容错就越小
    ("svm_clf", SVC(kernel="poly", degree=3, coef0=1, C=5))
))
poly_kernel_svm_clf.fit(X,y)

poly100_kernel_svm_clf = Pipeline((
    ("scaler", StandardScaler()),
    ("svm_clf", SVC(kernel="poly", degree=10, coef0=100,C=5))
))
poly100_kernel_svm_clf.fit(X,y)


plt.figure(figsize=(20,8), dpi=80)

plt.subplot(121)
plot_predictions(poly_kernel_svm_clf,[-1.5,2.5,-1,1.5])
plot_dataset(X,y,[-1.5,2.5,-1,1.5])
plt.title(r"$d=3, r=1,C=5$",fontsize=18)

plt.subplot(122) 
plot_predictions(poly100_kernel_svm_clf,[-1.5,2.5,-1,1.5])
plot_dataset(X,y,[-1.5,2.5,-1,1.5])
plt.title(r"$d=10, r=100,C=5$",fontsize=18)

plt.show()
```

<img src="https://s2.loli.net/2022/11/04/KDw7fpNHuRiEvtl.png" alt="img" style="zoom:150%;" />

## 高斯核函数：

- 利用相似度来变化特征

- 选择一份数据集，并在x1 = -2, x2 = 1处为其添加两个高斯函数
 - 接下来让我们使用相似度函数定义为γ=0.3的经向函数（RBF）
   ![img](https://s2.loli.net/2022/11/04/AhgjtmLv7URDkYZ.png)
 - 例如x1 = -1:它位于第一个地标距离为1的地方，距离第二个地标的距离为2.因此其新特征x2=e^(-0.3 * 1^2)≈0.74,并且x3=e^(-0.3 * 2^2)≈0.30
   ![img](https://s2.loli.net/2022/11/04/7nhU6bqgxyAi5Wu.png)
     **其中x1x2是数据中的每一个点**

**γ越小，过拟合的风向就越小**



SVM中利用核函数的运算技巧，大大降低了计算复杂度

 - 增加gamma 是高斯曲线变窄，因此每个实例影响范围变小，决策边界最终变得不规律，在个别实例周围摆动
 - 减少gamma 使高斯曲线变宽，因此实例有更大的影响范围，并且决策变得更加平滑

```python
rbf_kernel_svm_clf = Pipeline((
    ("scaler",StandardScaler()),
    ("svm_clf", SVC(kernel="rbf", gamma=5, C=0.001))
))
rbf_kernel_svm_clf.fit(X,y)


gamma1, gamma2 = 0.1,0.5
C1 ,C2 = 0.001,1000
svm_clfs = []
hyperparams = (gamma1, C1),(gamma2, C1),(gamma1, C2),(gamma2, C2)

for gamma,C in hyperparams:
    rbf_kernel_svm_clf = Pipeline((
        ("scaler",StandardScaler()),
        ("svm_clf", SVC(kernel="rbf", gamma=gamma, C=C))
    ))
    rbf_kernel_svm_clf.fit(X,y)
    svm_clfs.append(rbf_kernel_svm_clf)
plt.figure(figsize=(11,7), dpi=80)

for i, svm_clf in enumerate(svm_clfs):
    plt.subplot(221+i)
    plot_predictions(svm_clf, [-1.5,2.5,-1,1.5])
    plot_dataset(X, y,[-1.5,2.5,-1,1.5])
    gamma, C = hyperparams[i]
    plt.title(r"$\gamma = {}, C = {}$".format(gamma,C), fontsize=16)
plt.show()
```

<img src="https://s2.loli.net/2022/11/04/TfU6EPWdjZCDsHw.png" alt="img" style="zoom:150%;" />
