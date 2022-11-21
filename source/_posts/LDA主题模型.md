---
title: LDA主题模型
date: 2022-05-05 09:56:34
tags: 人工智能
swiper_index: 1
cover: "https://s2.loli.net/2022/11/21/rWoSUxItliEPYHk.webp"
description: LDA的介绍，还是比较全面的
mathjax: true
categories: 人工智能
---

# LDA（主题模型）

[(5条消息) KaTeX数学公式语法_李乾文的博客-CSDN博客_katex语法](https://blog.csdn.net/Leytton/article/details/103745169)

[(5条消息) Typora编辑数学公式_Ambitious°的博客-CSDN博客_typora公式编辑](https://blog.csdn.net/qq_43627106/article/details/123648485)

本文是启发是  [v_JULY_v这位大佬的博客](https://blog.csdn.net/v_JULY_v/article/details/41209515) 博客地址为：https://blog.csdn.net/v_JULY_v/article/details/41209515

该文章单纯是为了以后复习使用！！

LDA主要包含：

一个函数：gamma函数

四个分布：二项分布，多项分布，beta分布，Dirichlet（迪利克雷）分布

一个概念和一个理念：共轭先验和贝叶斯框架

两个模型：pLSA， LDA

一个采样：Gibbs采样

## gamma函数

### 对LDA的整体理解：

LDA 主要是可以将文档集中每篇文档中的主题以概率形式给出， 通过分析一些文档抽取它们主题（分布）出来之后，然后通过主题（分布）进行文本聚类和文本分类。LDA也是一种词袋模型，每篇文档是由一组词构成，词和词之间没有先后顺序关系，就像一个袋子，把它们全部装起来，这个袋子就是这一片文档，其中这些词就是能够表达文档主题的一些词汇，没有先后关系，但是有逻辑关系。

一篇文章不是只能拥有一个主题，文档可以有很多个主题组成，可能占比不同，例如一篇文章的主题 = 教育 * 0.6 + 艺术 * 0.1 + 儿童 * 0.1 + 预算 * 0.1

**首先**：我们先看一下一篇文档是怎么生成的LDA 创始人给出一个例子：我们事先确定几个主题（topic），例如上面的 几个主题Education， Arts， Children， Budgets，通过这几个事先确定好的主题，通过机器学习获取每个主题的对应的词语，如下图所示：

![image-20220320211238263.png](https://s2.loli.net/2022/11/05/tkchLZg36OWHiNU.png)

然后通过一定概率选取上面四个主题之一，在一一定概率选取每个主题下面的一个词，不断重复，而后就能够生成一篇文章，不同颜色的代表不同的主题

![image-20220320211427423.png](https://s2.loli.net/2022/11/05/7JOdnoFaq94mHks.png)

当我们看到一篇文章的时候，如果我们想要推理一下该文章的作者是如何写出这篇文章的，大部分人写文章的时候：首先第一步我们就需要确定我们文章的几个主题，例如一个主要主题，几个次要主题，然后寻找在这几个主题下的词语，通过一定的逻辑关系进行组合，然后便能生成一篇文章。

**LDA 主要就是做上面的步骤的：通过一篇文章反推其主题分布**

借助 v_JULY_v 大佬的话通俗的理解就是：**假设我们认定现在网络上出现的文章都是以上述方式生成的，现在有一些人先用通过LDA来做一件事情，就是通过分析网上众多文章，获取这些文章都写了一些什么主题，并且找出每篇文章的各个主题之间的比例（主题分布）**

在LDA模型中一篇文章的生成步骤如下：

- 从服从Dirichlet分布的α中 取样生成文档 i 的主题分布θi(各个主题之间的比例)
- 从主题的多项式分布θi 中取样生成文章 i 的第 j 个词的主题Z i j ( 就是获取文档i众多主题其中一个 ) 
- 从服从Dirichlet分布的 β 中取样生成主题Z i j 对应的词语φ Z i j（就是获取每个词语之间的比例 ）
- 从词语的多项式分布φZ i j 中采样出最终的词语Wij 
- 重复上述几个过程

其中beta分布是二项分布的共轭先验概率分布，而Dirichet分布是多项式的共轭先验概率分布

结构图如下图所示：

![image-20220320213445058.png](https://s2.loli.net/2022/11/05/74xYtfeFRnZKEgm.png)

上面我们不断重复二项分布，多项分布，beta分布，Dirichlet分布，这些分布究竟是什么，下面我们进行一些简单的描述。

- 二项分布（**Binomial distribution**）

  二项分布是通过伯努利分布来推进出来的，又称为两点分布或0-1分布， 是一个离散型随机分布，其中随机变量止只有两种情况非正即负，二项分布就是做n次伯努利实验 记作X~B（n， p）,就是做一次实验就是伯努利实验，做n次就是二项分布。要么是 p 要么是1-p 只有这两种情况

  二项分布的概率函数为：
  $$
  P(K=k)=\begin{pmatrix} n \\ k\end{pmatrix}p^k(1-p)^{n-k}
  $$

- **多项分布，就是二项分布扩展到多维的情况**

  在二项分布中我们的取值只能是p 或者1-p 但是在多项分布中 我们取值会变得多样化会出现 p1 p2 p3 .... pk 但是多个概率相加还是等于一

  多项分布的概率密度函数为：
  $$
  P(x_1,x_2,...x_k;n,p_1,p_2,..p_k)=\frac{n!}{x_1!...x_k!}p_1^{x_1}...p_k^{x_k}
  $$

- **Beta分布，二项分布的共轭先验分布**

  给定参数α>0和β>0,取值范围为[ 0 , 1 ] 的随机变量x的概率密度函数：
  $$
  f(x;\alpha,\beta)=\frac{1}{B(\alpha,\beta)}x^{\alpha-1}(1-x)^{\beta-1}
  $$
  其中：
  $$
  \frac{1}{B(\alpha,\beta)}=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)},\Gamma(z)=\int_{0}^{\infty}{t^{-1}e^{-t}}dt
  $$


  $\Gamma(x)$就是gamma函数 ，gamma函数就是阶乘的具体化
$$
  f(x;α,β) =\frac{(α + β)!}{(α!\cdot β!)}\cdot x^{(α-1)}\cdot(1-x)^{(β-1)}
$$

- **Dirichlet分布，是beta分布在高维度上的推广**

  Dirichlet分布的密度函数形式和beta分布的密度函数形式几乎一样
  $$
  f(x_1,x_2,...x_k;\alpha_1,\alpha_2,..\alpha_k)=\frac{1}{B(\alpha)}\prod_{i=1}^{k}{x_i^{a^i-1}}
  $$
  其中：
  $$
  B(\alpha)=\frac{\prod_{i=1}^{k}{\Gamma(\alpha^i)}}{\Gamma(\sum_{i=1}^{k}{a_n})}\sum{x_i=1}
  $$
  这两个式子和上面两个式子的形式几乎一致，区别就在于下面这两个式子有多个变量而上面的式子只有两个变量，剩下的计算形式类似。

  好整体的LDA叙述完毕之后，我们来看一下gamma函数到底是什么：

### gamma函数

gamma函数是阶乘在实数范围内的推广，一般的阶乘例如：3的阶乘为 3 * 2 * 1 = 6， 但是如果我想要求0.5的阶乘呢？，这时候我们所理解的阶乘公式就不再适用了，这时候 **欧拉**想出了阶乘的一般函数形式，即gamma函数
$$
\Gamma(x)=\int_{0}^{+\infty}e^{-t}t^{x-1}dt
$$


这时候我们来想一个问题：

<!--本文一共有四个问题：1.推导Beta分布密度函数，2.推导Beta和二项分布共轭，3.推导Dirichlet分布密度函数，4.推导Dirichlet分布和多项分布共轭--->

**问题1：** 随机变量$X_1,X_2,...,X_n$$\sim Uniform(0,1)$

把这n个变量排序之后我们得到顺序统计量$x_{(1)},x_{(2)}...x_{(n)}$

请问这里$|x_{(k)}|$的分布是什么

因为这些数据都是在0-1之间的，而且我们都已经进行排序了，这时候如果我们求一下$|x_{(k)}|$落在区间$[x, x+\Delta x]$的概率是多少，这样就能够求出这些随机变量的分布（比例）是多少了

先把[0,1]区间划分为三份[0,x),[x, x+Δx], (x+Δx, 1], 这里说明区间的大小就代表这个区间的占整体的比例，也就是落在这个区间内的概率，假设n个数中有1个落在了区间[x, x+Δx]，由于这个区间内的数据$X(k)$是第k大的所以[0,x) 范围内应该有k-1个数据，(x+Δx, 1]区间内应该有 n-k个数据，如图所示：

![image-20220321090642741.png](https://s2.loli.net/2022/11/05/eLb1vXB9NZQ73hG.png)

由上所述我们求出事件E：
$$
E=X_1\in[x,x+\Delta x],\\X_i\in[0,x)(i=2,..k),\\X_j\in(x+\Delta x, 1](j=k+1,..,n)
$$
对于上述事件E，有：
$$
P(E)=\prod_{i=1}^{n}{X_i} \\= x^{k-1}(1-x-\Delta x)^{n-k}\Delta x \\= x^{k+1}(1-x)^{n-k}\Delta x + o(\Delta x)
$$
 其中，o(Δx)表示Δx的高阶无穷小。显然，由于不同的排列组合，即n个数中有一个落在 [x,x+Δx]区间的有n种取法，余下n−1个数中有k−1个落在[0,x)的有$\begin{pmatrix} n-1 \\ k-1\end{pmatrix}$种组合，所以和事件E等价的事件一共有$n\begin{pmatrix} n-1 \\ k-1\end{pmatrix}$个。

如果有两个数落在$[x, x+\Delta x]$这个区间里面呢：

![image-20220321093120736.png](https://s2.loli.net/2022/11/05/Ri5BWAtQ7IdpxPf.png)
$$
E' = X_1, X_2 \in [x, x+\Delta x],\\X_i \in [0, x] (i=3,...k), \\X_j \in (x+\Delta x, 1) (j = k+1,...,n)
$$

$$
P(E') = x^{k-2}(1-x-\Delta x)^{n-k}(\Delta x)^2\\=o({\Delta x})
$$

由上面可得如果再次区间的数据超过一个的话那个这件事情的概率就几乎为零

由此可得：
$$
P(x\leq X_{(k)}\leq x + \Delta x) \\= n\begin{pmatrix} n-1 \\ k-1\end{pmatrix}P(E)+o(\Delta x) \\= n\begin{pmatrix} n-1 \\ k-1\end{pmatrix}x^{k-1}(1-x)^{n-k}\Delta x + o(\Delta x)
$$


从而得出$X_{(k)}$的概率密度函数为：
$$
f(x)=\lim_{\Delta x\rightarrow0}{\frac{P(x\leq X_{(k)}\leq x+\Delta x)}{\Delta x}}\\=n\begin{pmatrix} n-1 \\ k-1\end{pmatrix}x^{k+1}(1-x)^{n-k}\\=\frac{n!}{(k-1)!(n-k)!}x^{k-1}(1-x)^{n-k},x\in[0,1]
$$


由此问题一得到解决，如果我们仔细观察这个式子就会发现，这个式子的系数为阶乘的形式，这时候如果配上gamma函数的话：

$f(x)=\frac{\Gamma(n+1)}{\Gamma(k)\Gamma(n-k+1)}x^{k-1}(1-x)^{n-k}$

然后我们取变量α = k, β = n-k+1 ，转成f(x)得出：

$f(x)=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-k}$

由此可见，我们推出了beta分布

## beta分布

### beta分布

在概率论中beta分布是一组定义在区间（0-1）内的连续分布，有两个参数α和β，并且α和β > 0

beta分布的概率密度函数为：
$$
f(x;\alpha,\beta)=\frac{x^{\alpha-1}(1-x)^{\beta-1}}{\int_0^1u^{\alpha-1}(1-u)^{\beta-1}du}\\=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}x^{\alpha-1}(1-x)^{\beta-1}\\=\frac{1}{B(\alpha,\beta)}x^{\alpha-1}(1-x)^{\beta-1}
$$


随机变量x服从参数为α和β的beta分布，通常写作：X ~ Be(α,β)

### beta分布与二项分布共轭

我们先来了解一下共轭分布

1. 什么叫做共轭分布：后验概率分布函数和先验概率分布函数具有相同的形式。
2. 为什么要采用共轭分布：可以使得后验概率和先验概率的形式相同，这里一部分是符合人的直观理念（他们应该是相同的分布），另一方面，可以形成一个先验链，即现在的后验概率可以作为下一次计算的先验分布，如果形式相同，就可以形成一个链条

这时候我们回顾一下开头所提出的问题“问题一：随机变量$X_1,X_2,...,X_n$$\sim Uniform(0,1)$，把这n个随机变量排序后得到顺序统计变量$X_{(1)},X_{(2)},...,X_{(n)}$，然后想求出$X_{(k)}$的分布是什么。”如果我们在这之上增加一些观测数据，变成问题二：

- $X_1,X_2,...,X_n$$\sim Uniform(0,1)$，，对应的统计变量是，需$X_{(1)},X_{(2)},...,X_{(n)}$要猜测$p=X_{(k)}$
- $Y_1,Y_2,...,Y_n$$\sim Uniform(0,1)$，，Yi中有m1个比p小，m2个比p大
- 问题是$P(p|Y_1,Y_2,...,Y_M)$的分布是什么

根据条件二我们得出"Yi中有m1个比p小，m2个比p大", 所以在$X_1,X_2,...,X_n,$$Y_1,Y_2,...,Y_n$ $\sim Uniform(0,1)$中Xk是其中的第m1+k大的数据

根据上面的事件推出事件服从Beta分布从而我们推出$P=X_{(k)}$的概率密度函数为：$Beta(p|k+m_1,n-k+1+m_2)$

我们先看一下什么是先验概率和后验概率

P(A|B)是在B发生的情况下A发生的可能性。

首先，事件B发生之前，我们对事件A的发生有一个基本的概率判断，称为A的先验概率，用P(A)表示；
其次，事件B发生之后，我们对事件A的发生概率重新评估，称为A的后验概率，用P(A|B)表示；
类似的，事件A发生之前，我们对事件B的发生有一个基本的概率判断，称为B的先验概率，用P(B)表示；
同样，事件A发生之后，我们对事件B的发生概率重新评估，称为B的后验概率，用P(B|A)表示。



这个的推理过程类似贝叶斯的推理过程：

1. 为了猜测$p=X_{(k)}$，在获得一定的观测数据前，我们对p的认知为：$f(p)=Beta(p|k,n-k+1)$这称为p的先验分布

2. 然后我们获得这个结果“$Y_i$中有$m_1$个比p小，$m_2$个比$p$大”，针对$Y_i$是做了m次伯努利实验，所以服从$B(m,p)$

3. 在给定数据（m1， m2）之后，p的后验分布变成了：$f_1(p|m_1,m_2)=Beta(p|k+m_1,n-k+1+m_2)$

   贝叶斯理论中：**先验分布**$\pi(\theta)$+**样本信息**$\chi$=>**后验分布**$\pi(\theta|x)$

   上面公式的得出就是，新观察到的样本信息将修正人们之前对该事件的认知，通俗的说是人们对θ的认知是先验分布$\pi(\theta)$在等到新样本信息之后，人们对θ的认知变成了$\pi(\theta|x)$

   映射到这个问题上就是：
   $$
   Beta(p|k,n-k+1)+Count(m_1,m_2)=Beta(p|k+m_1,n-k+1+m_2)
   $$
   其中m1和m2对应的是二项分布的$B(m_1+m_2,p)$的计数

   推广到更一般的形式就是，对于非负实数α和β，我们有如下关系：
   $$
   Beta(p|\alpha,\beta)+Count(m_1,m_2)=Beta(p|\alpha+m_1,\beta+m_2)
   $$
   对于观测数据符合二项分布，参数的先验分布和后验分布都是beta分布，这种情况我们称为 beta分布和二项分布共轭，Beta分布称为二项分布的共轭先验概率分布

   二项分布和Beta分布是共轭分布意味着，如果我们为二项分布的参数p选取的先验分布是Beta分布，那么以p为参数的二项分布用贝叶斯估计得到的后验分布仍然服从Beta分布。

### 共轭先验分布

共轭函数分布就是一个参数的先验概率分布$P(\theta)$和后验概率分布$P(\theta|x)$ 具有相同的格式，那么先验分布和后验分布被叫做共轭分布，同时先验分布叫做似然函数的，共轭先验分布。

例如我们观察的数据服从$P(\theta)$时，当观测到新的X数据时，需要考虑以下问题：

- 是否可以根据观测到的数据更新θ
- 根据观测到的数据在多大程度上能够改变θ,即$\theta\leftarrow \theta+\Delta \theta$  
- 当我们从新估计参数θ的时候，给出新的参数θ分布即$P(\theta|x)$

根据贝叶斯公式可得：
$$
P(\theta|x)=\frac{P(x|\theta)\cdot P(\theta)}{P(x)}\varpropto P(x|\theta)\cdot P(\theta)
$$
其中$P(x|\theta)$表示以预估θ为参数的x概率分布，能够直接求出，p(θ)是已有原始的θ概率分布。

所以我们选取P(x|θ) 的共轭先验作为p(θ)的分布，那么p(x|θ)乘以p(θ)， 然后归一化的结果p(θ|x)跟p(θ)的形式一样，先验分布是p(θ)，后验分布是p(θ|x)

投硬币的例子：使用参数θ的伯努利模型，θ为硬币正面的概率，那么结果x的分布为:
$$
P(x|\theta)=\theta^x\cdot (1-\theta)^{1-x}
$$
其共轭先验分布为beta分布：
$$
P(\theta|\alpha,\beta)=\frac{\theta^{\alpha-1}(1-\theta)^{\beta-1}}{\int_0^1\theta^{\alpha-1}(1-\theta)^{\beta-1}d\theta}
$$


后验概率为：
$$
P(\theta|x)\\\varpropto P(x|\theta)\cdot P(\theta)\\\varpropto(\theta^x(1-\theta)^x)(\theta^{\alpha-1}(1-\theta^{\beta-1}))\\=\theta^{x+\alpha-1}(1-\theta)^{1-x+\beta-1}
$$


后验概率归一化之后会得到另一个Beta分布，从而证明Beta分布就是伯努利分布的共轭先验分布

### 从Beta分布推广到Dirichlet分布

beta分布的性质之一：期望E：
$$
E(p) = \int_0^1 t\cdot Beta(t|\alpha,\beta)dt\\=\int_0^1t\cdot\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}t^{\alpha-1}(1-t)^{\beta-1}dt\\=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}\int_0^1t^\alpha(1-t)^{\beta-1}dt
$$


上面式子的右边积分为：

$\int_0^1t^\alpha(1-t)^{\beta-1}$

其分布类似概率分布$Beta(t|\alpha+1,\beta)$，对于这个分布有
$$
\int_0^1\frac{\Gamma(\alpha+\beta+1)}{\Gamma(\alpha+1)\Gamma(\beta)}t^\alpha(1-t)^{\beta-1}dt=1
$$


从而求得$\int_0^1t^\alpha(1-t)^{\beta-1}dt$​的结果为：
$$
\frac{\Gamma(\alpha+1)\Gamma(\beta)}{\Gamma(\alpha+\beta+1)}
$$
最后将结果带入E(p)的计算式得出:
$$
E(p)=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}\cdot\frac{\Gamma(\alpha+1)\Gamma(\beta)}{\Gamma(\alpha+\beta+1)}\\=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha+\beta+1)}\cdot\frac{\Gamma(\alpha+)1}{\alpha}\\=\frac{\alpha}{\alpha+\beta}
$$




最后这个结果意味着对于Beta分布的随机变量，其均值(期望)可以使用$\frac{\alpha}{\alpha+\beta}$来估计。

此外对于Dirichlet分布也有类似的结论，即如果参数满足Dirichlet分布$\overrightarrow{p}\backsim Dir(\overrightarrow{t}|\overrightarrow{\alpha})$的话同样可以证明以下结论成立：
$$
E(\overrightarrow{p})=\bigg(\frac{\alpha_1}{\sum_{i=1}^K\alpha_i}, \frac{\alpha_2}{\sum_{i=1}^K\alpha_i},...,\frac{\alpha_K}{\sum_{i=1}^{K}\alpha_i}\bigg)
$$


## Dirichlet分布

### Dirichlet分布

Dirichlet分布的概率密度函数为：
$$
f(x_1,...,x_{k-1};\alpha_1,...,\alpha_{(k)}) = \frac{1}{B{(\alpha)}}\prod_{i=1}^{k}x_i^{\alpha_i-1}
$$


其中B(α)表示多项Beta函数：
$$
B(\alpha)=\frac{\prod_{i=1}^{k}\Gamma(\alpha_i)}{\Gamma(\sum_{i=1}^K\alpha_i)}
$$




Beta函数与Gamma函数的关系为：
$$
\frac{1}{B(\alpha,\beta)} = \frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}
$$


把这个形式和Dirichelt分布中的多项beta函数相比，果然是一一对应的 加法对加法，乘法对乘法，不同的就是，参数的个数不同

在B(α)中$\alpha=(\alpha_1,...,\alpha_k)$，并且x1+x2+x3+......+xk = 1, x1,x2,x3,....,xk-1 > 0，并且在(k-1)维的单纯形上，在其它区域概率为零

单纯形：表示在n维单纯形上有n+1个顶点，例如一维表示线段，二维表示三角形，三维表示四面体，各个面都相等

Dirichlet分布的另一种形式为：
$$
\begin{aligned}
p(\overrightarrow{p}|\overrightarrow{\alpha})
&=Dir(\overrightarrow{p}| \overrightarrow{\alpha})\\
&\stackrel{\Delta}{=} \frac{\Gamma(\sum_{k-1}^K)\alpha_K}{\prod_{k=1}^K\Gamma(\alpha_k)}\prod_{k=1}^{K}p_k^{\alpha_k-1}\\
&\stackrel{\Delta}{=}\frac{1}{\Delta(\overrightarrow{\alpha})}\prod_{k=1}^{K}p_k^{\alpha_k-1}
\end{aligned}
$$
其中$\Delta(\overrightarrow{\alpha})$称为Dirichlet分布的归一化系数：
$$
\Delta(\overrightarrow{\alpha})=\frac{\prod_{k=1}^{dima}\Gamma(\alpha_k)}{\Gamma(\sum_{k=1}^{dima})\alpha_k}\\=int\prod_{k=1}^{V}p_k^{\alpha_k-1}d\overrightarrow{p}
$$
并且根据Dirichlet分布的积分为1“概率的基本性质”，可以得到：
$$
\int_\overrightarrow{p}\prod_{k=1}^{K}p_k^{\alpha}d\overrightarrow{p}=\Delta(\overrightarrow\alpha)
$$


### Dirichlet分布和多项分布共轭

继上面问题二之后我们再提出问题三：
$$
X_1,X_2,...,X_n\sim Uniform(0,1)
$$

- 排序后对应的顺序统计量$X_1,X_2,...,X_n$
- 问$(X_{(k_1)},X_{k_1+k_2})$的联合分布是什么

为了方便计算，选取了x3满足 x1+x2+x3 = 1，但只有x1和x2是变量，如下图所示：

![image-20220322152232229.png](https://s2.loli.net/2022/11/05/osvMR4DQEGFnOzx.png)

从而有：
$$
\begin{aligned}
&P\bigg(X_{k_1}\in(x_1,x_1+\Delta x), X_{(k_1+k_2)}\bigg)\\
&=n(n-1)\begin{pmatrix} n-2 \\ {k_1-1,k_2-1}\end{pmatrix}x_1^{k_1-1}x_2^{k_2-1}x_3^{n-k_1-k_2}(\Delta x)^2\\
&=\frac{n!}{(k_1-1)!(k_2-1)!(n-k_1-k_2)!} x_1^{k_1-1}x_2^{k_2-1}x_3^{n-k_1-k_2}(\Delta x)^2
\end{aligned}
$$




继而得到$(X_{(k_1)}, X_{(k_1+k_2)}$的联合分布为：
$$
\begin{aligned}
&f(x_1, x_2, x_3)\\
&=\frac{n!}{(k_1-1)!(k_2-1)!(n-k_1-k_2)!} x_1^{k_1-1}x_2^{k_2-1}x_3^{n-k_1-k_2}\\
&=\frac{\Gamma(n+1)}{\Gamma(k_1)\Gamma(k_2)\Gamma(n-k_1-k_2+1)} x_1^{k_1-1}x_2^{k_2-1}x_3^{n-k_1-k_2}
\end{aligned}
$$


观察上述式子的最终结果，可以看出其实就是三维的Dirichlet分布

$Dir(x_1,x_2,x_3|k_1,k_2,n-k_1-k_2+1)$



令：$\alpha_1=k_1,\alpha_2=k_2,\alpha_3=n-k_1-k_2+1$，于是分布密度可以写为：
$$
f(x_1,x_2,x_3)=\frac{\Gamma(\alpha_1+\alpha_2+\alpha_3)}{\Gamma(\alpha_1)\Gamma(\alpha_2)\Gamma(\alpha_3)}x_1^{\alpha_1-1}x_2^{\alpha_2-1}x_3^{\alpha_3-1}
$$


为了验证Dirichlet分布是多项分布是共轭分布的共轭先验分布，我们引出问题四：

问题四：

1. $X_1,X_2,...,X_n\sim Uniform(0,1)$排序之后对应的顺序统计量$X_{(1)},X_{(2)}...X_{(n)}$
2. 令$p_1=X_{(k_1)},p_2=X_{(k_1+k_2)},p3=1-p_1-p_2$注：这里的p3不是变量，只是为了方便计算，现在要猜测$\overrightarrow{p}=(p_1,p_2,p_3)$
3. $Y_1,Y_2,...,Y_n\sim Uniform(0,1)$中Yi落到$[0,p_1),[p_1,p_2),[p_2,1]$这三个区间的个数分别为m1，m2，m3，m=m1+m2+m3；
4. 问后验分布$P(\overrightarrow{p}|Y_1,Y_2,..,Y_m)$的分布是什么

为了方便讨论，记$\overrightarrow{m}=(m_1,m_2,m_3)$，以及$\overrightarrow{k}=(k_1,k_2,n-k_1-k_2+1)$，根据已知条件$Y_1,Y_2,...,Y_n\sim Uniform(0,1)$，Yi中落到三个区$[0,p_1),[p_1,p_2),[p_2,1]$ 间的个数为m1和m2，可得p1 p2分别是这个m+n个数中k1+m1大和k2+m2大的数，于是后验分布$P(\overrightarrow{p}|Y_1,Y_2,..,Y_m)$应该是$Dir(\overrightarrow{p}|k_1+m_1,k_1+m_2,n-k_1-k_2+1+m_3$即一般化形式表示为：$Dir(\overrightarrow{p}|\overrightarrow{k}+\overrightarrow{m})$

同样的，按照贝叶斯逻辑，整理为下：

1. 我们要猜测参数$\overrightarrow{p}=(p_1,p_2,p_3)$，其先验分布为：$Dir(\overrightarrow{p}|\overrightarrow{k})$
2. 数据Yi落到三个区间$[0,p_1),[p_1,p_2),[p_2,1]$的个数分别是m1,m2,m3，所以服$\overrightarrow{m}=(m_1,m_2,m_3)$从多项分布$Mult(\overrightarrow{m}|\overrightarrow{p})$
3. 当我们提供数据之后先验分布就变成了$Dir(\overrightarrow{p}|\overrightarrow{k}+\overrightarrow{m})$

上述贝叶斯过程直观的表达为：
$$
Dir(\overrightarrow{p}|\overrightarrow{k})+MultCount(\overrightarrow{m})=Dir(\overrightarrow{p}|\overrightarrow{k}+\overrightarrow{m})
$$
令α等于k，可以把α从整数集合延伸到实数集合，从而得到更一般的表达式：
$$
Dir(\overrightarrow{p}|\overrightarrow{\alpha})+MultCount(\overrightarrow{m})=Dir(\overrightarrow{p}|\overrightarrow{\alpha}+\overrightarrow{m})
$$
和上面一样，针对观测到数据符合多项分布，其先验概率分布后验概率分布都符合Dirichlet分布的情况下，就是Dirichlet分布和多项分布共轭

我们为多项分布的参数p选取的先验分布是Dirichlet分布，那么以p为参数的多项分布用贝叶斯估计得到的后验分布仍然服从Dirichlet分布。

一般的Dirichlet分布定义如下：
$$
Dir(\overrightarrow{p}|\overrightarrow{\alpha})=\frac{\Gamma(\sum_{k=1}^K\alpha_k)}{\prod_{k=1}^K\Gamma(\alpha_k)}\prod_{k=1}^{K}p_k^{\alpha_k-1}
$$
而对于给定的P和N，其多项分布是：
$$
Mult(\overrightarrow{n}|\overrightarrow{p},N)=\begin{pmatrix} N \\{\overrightarrow{n}}\end{pmatrix}\prod_{k=1}^Kp_k^{n_k}
$$
最后结论是Dirichelt分布$Dir(\overrightarrow{p}|\overrightarrow{\alpha})$和多项分布$Mult(\overrightarrow{n}|\overrightarrow{p},N)$是共轭关系

## 主题模型LDA

在开始进行这部的内容之前，我们先回顾一下上面的内容：

通过上面的内容我们得到：

1. Beta分布是二项分布的共轭先验分布：

   对于非负实数α和β有如下关系：
   $$
   Beta(p|\alpha,\beta)+Count(m_1,m_2)=Beta(p|\alpha+m_1, \beta+m_2)
   $$
   其中（m1，m2）是二项分布B(m1+m2,p)的计数，针对这些观测到的数据符合二项分布，参数的先验概率分布和后验概率分布都符合Beta分布的我们称之为Beta分布和二项分布共轭

2. Dirichlet分布是多项分布的共轭先验分布

   把α从整数集合扩展到实数集合，从而得到更一般的表达式如下：
   $$
   Dir(\overrightarrow{p}|\overrightarrow{\alpha})+MultCount(\overrightarrow{m})=Dir(\overrightarrow{p}|\overrightarrow{\alpha}+\overrightarrow{m})
   $$
   针对这些观测数据符合多项分布，参数的先验概率分布和后验概率分布都符合Dirichelt分的情况，我们称为Dirichelt分布和多项分布共轭

3. 贝叶斯派思考问题的 方式：

   **先验分布**$\pi(\theta)$+**样本信息**$\chi$=>**后验分布**$\pi(\theta|x)$

   上述表达方式为，新观察到的样本信息将修正人们之前对事物的认知，换句话说，在得到新的样本信息之前，人们对θ的认知是先验分布$\pi(\theta)$，在得到样本信息$\chi$之后，人们对θ的认知为$\pi(\theta|x)$


在我们进行LDA模型的时候我们先要进行一些基础模型的认识：Unigram model,mixture of unigram model,以及和LDA最为接近的pLSA模型

为了方便解释这些模型我们定义一下下面这几个变量:

- w表示词，V表示所有单词的个数（固定值）
- z表示主题，k是主题的个数（预先给定，固定值）
- D = (W1，W2,.....Wm)表示语料库，其中的M是语料库中的文档数(固定值)
- W = (w1,w2,.....,wn)表示文档，其中n表示一个中文文档中的词数（随机变量）

### Unigram model

对于文档$w=(w_1,w_2,...,w_N)$,用$p(w_n)$表示词wn的先验概率，生成文档w的概率为：

$p(w)=\prod_{n=1}^{N}p(w_n)$

其图模型为(图中被涂色的w表示可观测变量，N表示一篇文章中一共有N个单词，M表示M篇文档)：

![image-20220322204225579](https://s2.loli.net/2022/11/06/gz9eUm2CSZqNLOp.png)

另一种表示方法为：

![image-20220322204940889.png](https://s2.loli.net/2022/11/05/P95XbzLxmEnCRoA.png)



unigram model假设文本中的词服从Multinomial分布，而且我们已经知道Multinomial分布的先验分布为Dirichlet分布

上述的$w_n$表示在文本中观察到的第n个词，n∈[1,N]表示该文本中一共有N个词。加上方框表示重复，即一共有N个这样的随机变量。$w_n$其中，p和α是隐含未知变量：

- p是服从Multinomial分布的参数
- α是Dirichlet分布(即Multinomial分布的先验分布)的参数。

一般α由经验事先给定，p由观察到的文本中出现的词学习得到，表示文本中出现每个词的概率。

### Mixture of unigram model

该模型的生成过程是：先给文档一个主题z，然后根据该主题生成文档，该文档中所有词都是来自一个主题，假设主题由$z_1,...,z_k$，生成文档w的概率为：
$$
p(w)=p(z_1)\prod_{n=1}^{N}p(w_n|z_1)+\cdot\cdot\cdot+p(z_k)\prod_{n=1}^Np(w_n|z_k)=\sum_zp(z)\prod_{n=1}^Np(w_n|z)
$$
其图模型为（图中被涂色的w表示可观测变量，未涂色的z表示为止的隐变量，N表示文档中一共有N个词，M表示M篇文档）

![image-20220322210250233.png](https://s2.loli.net/2022/11/05/KlO1kzRLMJdSrB8.png)

### PLSA模型

pLSA模型是和LDA模型比较接近的一个模型，LDA就是pLSA模型加上一个贝叶斯框架

我们在上面的Mixture of unigram model模型中，假定的是一篇文档中只是有一个主题生成，但是实际上，一篇文档是由多个主题共同生成，只是比例不同（分布），比如在介绍一个国家的文档中，我们还要从教育，经济，军事等等主题进行介绍，其中国家是大主题占比比较大，其余的是小主题，占比比较小，那么在pLSA模型中，文档是怎么生成的呢？

先看生成文章的过程：

如果需要生成m篇文章，每一篇文章由各个不同的词组成，需要确定每篇文章每个位置对应的词

假设一共有k个可选的主题，有v个可选词通过投骰子，来生成一篇文档

1. 在写文档的时候我们可以制作一个有k面（文档-主题）的骰子（扔骰子能够得到k个主题中的任意一个），通过投骰子来进行选取主题，和k个v面的“主题-词语”骰子（每个骰子对应一个主题，k个骰子对应k个主题， v面对应的v个词语）

   - 假设，我们设k = 3，制作一个3面的（文档-主题）骰子，这三个主题我们设置为：教育，经济，交通，然后令V=3,制作三个有三个面的（主题-词语）骰子，具体情况如下：

     ![image-20220323155535268.png](https://s2.loli.net/2022/11/05/lx8nZM6IWBeV2GS.png)

2. 每写一个词，我们都要通过投掷（文档-主题）骰子获取一个主题，得到主题之后，我们从对应的主题的（主题-词语）骰子中投掷选择我们要写的词语

   - 上面这个投骰子产生词的过程简化下便是：“先以一定的概率选取主题，再以一定的概率选取词”。事实上，一开始可供选择的主题有3个：教育、经济、交通，那为何偏偏选取教育这个主题呢？其实是随机选取的，只是这个随机遵循一定的概率分布。比如可能选取教育主题的概率是0.5，选取经济主题的概率是0.3，选取交通主题的概率是0.2，那么这3个主题的概率分布便是{教育：0.5，经济：0.3，交通：0.2}，我们把各个主题z在文档d中出现的概率分布称之为主题分布，且是一个多项分布。
   - 同样的，从主题分布中随机抽取出教育主题后，依然面对着3个词：大学、老师、课程，这3个词都可能被选中，但它们被选中的概率也是不一样的。比如大学这个词被选中的概率是0.5，老师这个词被选中的概率是0.3，课程被选中的概率是0.2，那么这3个词的概率分布便是{大学：0.5，老师：0.3，课程：0.2}，我们把各个词语w在主题z下出现的概率分布称之为词分布，这个词分布也是一个多项分布。
   - 所以，选主题和选词都是两个随机的过程，先从主题分布{教育：0.5，经济：0.3，交通：0.2}中抽取出主题：教育，然后从该教育主题对应的词分布{大学：0.5，老师：0.3，课程：0.2}中抽取出词：大学。

3. 然后不断重复步骤2，重复N次，完成一篇文档，重复这一篇文档的生成方法m次，我们生成了m篇文档

上述过程为pLSA文档生成模型，在上面的文档生成方法中我们并未关注词与词之间的先后顺序，因此pLSA是一个词袋模型。这些词虽然表面上没有顺序关系，但是通过一些词逻辑上的关系，我们可以得到这篇文章的隐藏的主题类别$z_k\in z_1,..,z_k$，这里我们定义：

- $P(d_i)$表示海量文档中某篇文档被选中的概率。
- $P(w_j|d_i)$表示词$w_j$在给定文档$d_i$中出现的概率
  - 计算方式，对于海量文档，对所有文档进行分类之后，我们得到一个词汇表，每篇文档就是一个词语的集合，对于每个词语，出现次数比上所有的词的个数，最后结果就是这个词在这篇文档中出现的概率
- $P(z_k)$表示具体某个主题$z_k$在给定文档$d_i$中出现的概率
- $P(w_j|z_k)$表示某个词$w_j$在主题$z_k$中出现的概率，与主题关系越密切的词出现的概率越大

利用上述1，3，4个概率，我们可以根据以下步骤生成“文档-词项”模型

1. 按照概率$P(d_i)$选择一篇文档$d_i$
2. 选定文章$d_i$后其主题分布中按照概率$P(z_k|d_i)$选择一个隐含的主题类别$z_k$选定$z_k$后，从词分布表中按照概率$P(w_j|z_k)$选择一个词$w_j$

所以pLSA中生成文档的过程为选定文档，生成主题，确定主题生成词

**上述是生成文档的过程，下面为分析文档的的过程**

根据文档反推其主题分布：

主要内容是：通过生成文档的过程，反推已有的文档中的主题分布（生产文档的逆过程），建模的目的就是，自动的发现文档集中的主题分布。

换句话来说就是，人们根据文档生成模型生成了各种各样 的文章，然后递交给计算机**计算机的目的就是根据一篇篇文章中的一系列词语的分布，推测各个主题出现的概率（分布）：主题分布**，即单词w和文章d是能够观测到的，而主题，是隐含的，我们的目的就是找到这隐含的主题分布，

如下图所示：图中涂色的表示可以观察到的数据d和w ，z表示隐含的数据，N表示一篇文档中一共有N个单词，M表示一共有M篇文档

![image-20220323163645751.png](https://s2.loli.net/2022/11/05/hCBX3mA2PjzKYOQ.png)

上图中文档d和词w是我们得到的样本（样本随机，参数虽然不知道但是是固定的，所以pLSA数据频率派思想，区别于下文要介绍的LDA中：样本固定，参数为止，但不固定，是一个随机变量，服从一定的分布，所以LDA属于贝叶斯派思想），可以观测到对于任意一一篇文档，其$P(w_j|d_i)$是已知的

从而可以根据，大量已知的文档-词项信息$P(w_j|d_i)$训练出文档-主题$P(z_k|d_i)$和主题词项$P(w_j|z_k)$如下图公式所示：
$$
P(w_j|d_i)=\sum_{k=1}^{K}P(w_j|z_k)P(z_k|d_i)
$$
故得到文档中每个词出现的概率为：
$$
\begin{aligned}
&P(d_i,w_j)\\
&=P(d_i)P(w_j|d_i)\\
&=P(d_i)\sum_{k=1}^{K}P(w_j|z_k)P(z_k|d_i)
\end{aligned}
$$
由于p(di)可以事先计算求出，而$P(w_j|z_k)$和$P(z_k|d_i)$未知，所以$\theta=(P(w_j|z_k)), P(z_k|d_i))$就是我们要估计的参数（值) ，通俗点说就是要最大化这个θ。

用什么方法进行估计呢，常用的参数估计法有极大似然估计MLE，最大后验估计MAP，贝叶斯估计等等，因为该待估计的参数中含有隐变量z，所以我们可以考虑EM算法

### LDA模型

LDA和pLSA模型比较相似，就是给pLSA模型加上了一个贝叶斯框架

pLSA模型生成文档和参数估计：

1. 按照先验概率$P(d_i)$选择一篇文档$d_i$
2. 选定文档$d_i$后，确定文档的主题分布
3. 从主题分布后按照概率$P(z_k|d_i)$选择一个隐含的主题类型$z_k$
4. 选定$z_k$后，确定主题下的词分布
5. 从词分布中按照概率$P(w_j|z_k)$选择一个词$w_j$

LDA模型生成文档和参数估计：

1. 先根据先验概率$P(d_i)$选择一篇文档$d_i$
2. 从迪利克雷分布（Dirichlet分布）α中取样生成文档$d_i$的主题分布$\theta_i$，换句话说就是主题分布$\theta_i$由超参数为α的Dirichlet分布形成
3. 从主题多项式分布$\theta_i$中取样生成文档$d_i$的第j个主题词$z_{i,j}$
4. 从迪利克雷分布（Dirichlet分布）β中取样生成主题$z_{i,j}$对应的词语分布$\Phi_{z_i,j}$，换言之，词语分布$\Phi_{z_i,j}$由参数为β的Dirichlet分布生成
5. 从词语的多项式分布$\Phi_{z_i,j}$中采样生成最后的词语$w_{i,j}$

从上面的两个过程可以看出，LDA在pLSA的基础上，为主题分布和词分布增加了两个Dirichlet先验

pLSA分布选取一个词的过程，先从主题分布为{教育：0.5，经济：0.3，交通：0.2}中抽取出主题：教育，然后从该主题对应的词分布{大学：0.5，老师：0.3，课程：0.2}中抽取出词：大学。

![image-20220402155352232.png](https://s2.loli.net/2022/11/05/1XgyaDvt8UjrKsS.png)

LDA选取一个词的过程也是上面的方法，先选取一个主题，然后通过这个主题下面的词分布中选取一个词语，LDA和pLSA的区别就是主题分布和词分布不在是确定的，他是随机可变的，但是这个变化符合一个分布规律就是Dirichlet分布

**pLSA中**，主题分布和词分布确定之后，以一定的概率$(p(z_k|d_i),p(w_j|z_k))$分别选取具体的主题和词项，生成好文档，然后根据生成好的文档来反推其主题分布，词分布的同时，之后使用EM算法（极大似然估计法）求解出两个为止参数的值：$\Phi_{z_i,j}$（由$P(w_j|z_k)$转换而来），和$\theta_{i,k}$由（转换而来$P(z_k|d_i)$)

- 文档d产生主题z的概率，主题z产生单词w的概率都是两个固定值。

  - 例子：给定一篇文档d，主题分布是一定的，比如{ P(zi|d), i = 1,2,3 }可能就是{0.4,0.5,0.1}，表示z1、z2、z3，这3个主题被文档d选中的概率都是个固定的值：P(z1|d) = 0.4、P(z2|d) = 0.5、P(z3|d) = 0.1，如下图所示（图截取自沈博PPT上）：

    ![image-20220402162033453.png](https://s2.loli.net/2022/11/05/si7S9tXe24GZ6IB.png)

    

在LDA模型中我们不再认为主题分布和词分布是唯一确定的，而是由很多种可能，但是一篇文档总要确定一个主题把，LDA采用了两个Dirichlet先验参数，这个Dirichlet先验分布为某篇文档随机抽取了某个主题分布和词分布

- 文档d产生主题z（准确的说，其实是Dirichlet先验为文档d生成主题分布θ，然后根据主题分布θ产生主题z）的概率，主题z产生单词w的概率都不再是准确的两个值，而是随机变量。
- ![image-20220402164316439.png](https://s2.loli.net/2022/11/05/CylXLur7cR1IJOw.png)

总而言之LDA在pLSA的基础上给这两个参数$(P(z_k|d_i),P(w_j|z_k))$加了两个先验分布的参数（贝叶斯话）：一个主题的先验分布Dirichlet分布α，和一个词语分布的先验分布Dirichlet分布β

这两个模型的本质都是为了能够找到给定文档生成主题，给定主题生成词语的概率

LDA中，主题分布 —— 比如{ P(zi), i =1,2,3 }等于{0.4,0.5,0.1}或{0.2,0.2,0.6} —— 是由dirichlet先验给定的，不是根据文档产生的。所以，LDA生成文档的过程中，先从dirichlet先验中“随机”抽取出主题分布，然后从主题分布中“随机”抽取出主题，最后从确定后的主题对应的词分布中“随机”抽取出词。

Dirichlet先验随机抽取主题分布方式：

事实上，从Dirichlet分布中随机抽取主题分布，这个过程并不是完全随机的。事实上，如果我们选取三个事件的话，可以建立一个三维坐标系：

![image-20220402213248327.png](https://s2.loli.net/2022/11/05/okTaqrdn3GpZXfY.png)

在这个三维坐标点中每一个坐标点（p1, p2,p3）就对应这一个主题分布，而且某一个点（p1,p2,p3）的大小代表着主题123出现的概率大小（因为各个主题出现的概率和为1），所以p1+p2+p3 = 1，比如(p1,p2,p3) = (0.4,0.5,0.1)便对应着主题分布{ P(zi), i =1,2,3 } = {0.4,0.5,0.1}。

这个空间中有很多个这个点，意味着有很多主题分布可以选择，Dirichlet分布选择主题的方法是可以将上面三角形放到，映射到地面平面上，便得到如下所示的一些彩图（3个彩图种，每个点对应着一个主题分布，高度代表着某个主题呗dirichelt分布选中的概率，且选择不同的α，dirichlet分布会偏向不同的主题分布）

![image-20220402214321175.png](https://s2.loli.net/2022/11/05/ZKSQc2IPwv13H6D.png)

α在LDA中的作用，较高的α表示主题稀疏性的影响较小，在一个文章中包含着大多主题，而比较第的α值代表着我们希望文档覆盖少数主题，如果我们只想在这些文档中发掘出两个主题（k=2），那么可能所有文档都包含两个主题，因此我们可以有一个比较大的alpha=0.5值。如果我们想发现一个k=1000主题，很可能大多数文档不会覆盖所有1000个主题，只可能包含较小的一部分（稀疏性很高），因此我们采用较小的α值来解释这个问题预期的稀疏性。

同样β在主题中的单词稀疏性中起作用，较高的β值代表着主题比较一般，单词频率更加统一。第β值意味着主题应该更加具体，他们单词概率将更不均匀，在比较少的单词上面放着更高的概率。这也与要发现的主题数量有关，高的β意味着很少但是比较常见的主题被发现，第β用于更具体的主题
