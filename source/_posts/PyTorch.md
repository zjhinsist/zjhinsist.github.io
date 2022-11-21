---
title: PyTorch
date: 2022-07-08 09:40:33
tags: 人工智能
cover: "https://s2.loli.net/2022/11/21/rWoSUxItliEPYHk.webp"
description: PyTorch的一些基础操作，勉勉强强应付一下日常工作
categories: 人工智能
---

# PyTorch

使用神经网络最重要的一件事情就是：他可以帮我们把反向传播全部计算好

Tenser 常见的格式：

- scalar

  > 通常就是一个数值
  >
  > ```python
  > x = tensor(42, )
  > ```

- vector

  > 例如：[-5.	, 2.	, 0.	],在深度学习中通常指特征，例如词向量特征，某一维度特征等
  >
  > ```python
  > v = tensor([1.5, -0.5, 3.0])
  > ```

- matrix

  > 一般计算的都是矩阵，通常是多维的
  >
  > ```python
  > M = tensor([1., 2. ],[3., 4.])
  > ```

- n-dimensional tensor



## 基本使用方法

创建一个矩阵

```python
x = torch.empty(5,3)
```

```python
tensor([[-2.1607e-32,  3.9797e-43, -2.1607e-32],
        [ 3.9797e-43, -2.1607e-32,  3.9797e-43],
        [-2.1607e-32,  3.9797e-43, -2.1606e-32],
        [ 3.9797e-43, -2.1606e-32,  3.9797e-43],
        [-2.1607e-32,  3.9797e-43, -2.1606e-32]])
```

初始化随机矩阵

```python
x = torch.rand(5,3)
```

```python
tensor([[0.0888, 0.0026, 0.9993],
        [0.2157, 0.5465, 0.2976],
        [0.7008, 0.4855, 0.2934],
        [0.2556, 0.7336, 0.4070],
        [0.7086, 0.7576, 0.1706]])
```

初始化全为零的矩阵：

```python
x = torch.zeros(5,3)
x
```

```python
tensor([[0., 0., 0.],
        [0., 0., 0.],
        [0., 0., 0.],
        [0., 0., 0.],
        [0., 0., 0.]])
```

得到一个tensor格式的数据

```python
x = torch.tensor([5.5, 3])
x
```

```python
tensor([5.5000, 3.0000])
```

得到矩阵的大小

```python
x.size()
```

```python
torch.Size([5, 3])
```

基本计算

```python
y = torch.rand(5,3)
x + y
torch.add(x, y) # 这也是加法
```

```python
tensor([[0.7346, 0.6349, 0.1346],
        [0.7563, 0.8254, 0.2026],
        [0.7040, 0.7037, 0.8722],
        [0.0234, 0.4327, 0.4905],
        [0.5578, 0.4028, 0.7179]])
```

索引操作

```python
x[:, 1]
```

```python
tensor([0.4955, 0.2037, 0.5270, 0.9147, 0.5009])
```

view操作可以改变矩阵维度

```python
x = torch.randn(4,4) # 原始矩阵
y = x.view(16)		# 转换成一维的
z = x.view(-1, 8)	# 转换成-1， 8为的矩阵，-1表示通过后面的8来自动计算前面的数据
print(x.size(), y.size(), z.size())
# torch.Size([4, 4]) torch.Size([16]) torch.Size([2, 8])
```

与numpy的协同操作

```python
a = torch.ones(5)
b = a.numpy()
b
# array([1., 1., 1., 1., 1.], dtype=float32) 将tensor的格式转换成array的格式
```

```python
import numpy as np
a = np.ones(5)
b = torch.from_numpy(a)
b
# tensor([1., 1., 1., 1., 1.], dtype=torch.float64) 将numpy格式转换成tensor格式
```

### 自动求导

我们在设置矩阵的时候可能设置一个参数能够让这个矩阵具有自动求导的功能

```python
# 方法一： 创建一个三行四列可求导的矩阵
x = torch.randn(3,4,requires_grad = True)

# 方法二：创建一个三行四列不可求导矩阵之后通过修改代码来使它拥有自动求导的功能
x = torch.randn(3,4)
x.require_grad = True
```

当我们在使用一些参数的时候，虽然没有给它指定require_grad = True 但是如果需要使用它求导的话，会默认设为True的

```python
# 在上面的基础上
t = x + b
y = t.sum()
print(y)
# tensor(-2.0388, grad_fn=<SumBackward0>) 将t矩阵中的所有数值相加起来

# 对y进行反向传播，在这个过程中如果我们使用到了t的梯度的话，这个函数会自动的将t的requires_grad设置为false
y.backward()

print(x.requires_grad, y.requires_grad, z.requires_grad)
# True, True, Ture
```

例子：

![image-20220712094906283](https://s2.loli.net/2022/11/04/39mNUTKIcvMurOg.png)

我们在进行上面式子的反向传播的时候：

```python
# 计算流程
x = torch.rand(1)
b = torch.rand(1, requires_grad=True)
w = torch.rand(1, requires_grad=True)
y = w*x
z = y+b
print(x.requires_grad, b.requires_grad, w.requires_grad,  y.requires_grad)
# False, True, True, True
# 这里w是true 是因为 w在创建的时候就给它设置成了true
```

我们还可以判断该节点是不是叶子结点

```python
print(x.is_leaf, w.is_leaf, b.is_leaf, y.is_leaf, z.is_leaf)
# True, True, True, False, False
```

反向传播进行计算

```python
z.backward(retain_graph=True) # 如果不清空则会累加起来
w.grad
b.grad
```



### 线性回归测试

我们先构建输入数据x和其对应的标签y

```python
# 创建训练数据
x_values = [i for i in range(11)]
# 转换成array格式
x_train = np.array(x_values, dtype=np.float32)
# 转换成一列的格式
x_train = x_train.reshape(-1, 1)

# 创建标签数据
y_values = [2*i+1 for i in x_values]
y_train = np.array(y_values, dtype=np.float32)
y_train = y_train.reshape(-1, 1)
```

定义线性回归类

```python
import torch
import torch.nn as nn
class LinearRegressionModel(nn.Module):
    # 该类的初始化参数有两个，第一个是输入维度，第二个是输出维度
    def __init__(self, input_dim, output_dim):
        super(LinearRegressionModel, self).__init__()
        self.linear = nn.Linear(input_dim, output_dim)
    def forward(self, x):
        out = self.linear(x)
        return out
```

调用线性回归类

```python
# 定义输入维度和输出维度，因为是线性回归所以我们定义一维的即可
input_dim = 1
output_dim = 1

model = LinearRegressionModel(input_dim, output_dim)
```

指定好参数和损失函数

```python
# 训练次数
epochs = 1000
# 学习率
learning_rate = 0.01
# 定义优化函数， 使用SDG函数
optimizer = torch.optim.SDG(model.parameters(), lr = learning_rate)
# 定义损失函数， 分类任务：交叉熵，回归任务MSE
criterion = nn.MSELoss()
```

训练模型

```python
for epoch in range(epochs):
    epoch += 1
    # 将训练数据转换成tensor格式
    inputs = torch.from_numpy(x_train)
    labels = torch.from_numpy(y_train)
    
    # 每迭代一次，梯度都要清零
    optimizer.zero_grad()
    # 向前传播
    outputs = model(inputs)
    # 计算损失
    loss = criterion(outputs, labels)
    # 反向传播
    loss.backword()
    # 更新权重参数
    optimizer.step()
    if epoch % 50 == 0:
        print("epoch{}, loss{}".format(epoch, loss.item()))
```

测试模型预测结果：

```python
predicted = model(torch.from_numpy(x_train).requires_grad_()).data.numpy()
```

模型的保存与读取

```python
# 第一个参数是模型的权重参数，第二个参数是保存文件的名称
torch.save(model.state_dict(), "model.pkl")
# 模型的读取
model.load_state_dict(torch.load("model.pkl"))
```



{% label 使用GPU来进行训练 blue%}

```python
import torch
import torch.nn as nn
import numpy as np

# 判断一下如果cuda 是能够用的话，我们就用cuda（GPU）来进行计算，否则我们还是使用CPU
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")

# model 使用divice的方式来进行模型训练
model.to(divice)
```

模型训练

```python
for epoch in range(epochs):
    epoch += 1
    # 将训练数据转换成tensor格式
    # 并使用device方式来进行训练
    inputs = torch.from_numpy(x_train).to(device)
    labels = torch.from_numpy(y_train).to(device)
    
    # 每迭代一次，梯度都要清零
    optimizer.zero_grad()
    # 向前传播
    outputs = model(inputs)
    # 计算损失
    loss = criterion(outputs, labels)
    # 反向传播
    loss.backword()
    # 更新权重参数
    optimizer.step()
    if epoch % 50 == 0:
        print("epoch{}, loss{}".format(epoch, loss.item()))
```

