---
title: python教程
date: 2022-07-03 15:00:13
tags: Python
cover: "https://s2.loli.net/2022/11/21/jHkgUWLVo2lnuYF.webp"
description: python笔记
categories: Python
---

# 第一章（基本符号）

## print

print函数能够直接输入到文件中：

```pyt
f = open("笔记.txt", "w")

print("Hello World", file = f)
```

## 制表符

\n 换行

\t 一个tab键，占四个字节， 如果这四个字节中前面的占用了，则补充为四个字节， 如果没占用则新开辟四个字节的位置

\r	回车，会把在回车之前的字符全部删掉

\b	退格，删除前一个字符

## 元字符

让制表符不起作用----引号中有什么就输出什么

```py
print(r"hello\nworld") === hello\nworld
```

 输出字符串的时候最后一个字符不能是 ‘\’， 可以是‘\\’

# 第二章

## 二进制和字符编码

二进制 -->ASCII -->GB2312-->GBK-->GB18030-->Unicode

二进制 -->ASCII -->其他国家的字符编码-->Unicode几乎包含了全世界所有的字符-->UTF-8

## 标识符和保留字

保留字不能再命名的时候使用

```py
import keyword
print(keyword.kwlist)
```

标识符：有我们给对象起的名字就是标识符

命名规则：

1. 字母，数字，下划线····
2. 不能以数字开头
3. 不能是python的保留字
4. 是严格区分大小写的

## 变量的定义和使用：

**变量就是值可以改变的量**

变量由三部分组成：

1. 标识。内存地址 使用id(obj)可以获得
2. 类型：数据类型，使用type(obj)可以获取
3. 值：具体数据，print(obj)可以打印出来

常用数据类型：

1. 整数类型：int

   - 默认是十进制
   - 二进制需要在开头加上0b print(0b111010)
   - 八进制需要在开头加上0o
   - 十六进制 0x开头

2. 浮点数类型：float

   - 再进行运算的时候可能出现小数点后很多位，这时候我们可以使用

     ```py
     from decimal import Decimal
     print(Decimal("1.1")+Decimal("2.2")) ==== 3.3
     print(1.1+2.2) == 3.300000000000003
     ```

3. 布尔类型：bool

   - 用来表示真或假，Ture or False 还可以转换成整数 true == 1； false == 0

4. 字符串类型：str

   - 可以使用 单引号，双引号，三引号
   - 单引号和双引号都只能在同一行表示，三引号可以变行表示

5. 数据类型转换：

   - str()
   - int()
   - float()

## python中的注释

单行注释：# 

多行注释：'''    '''  或者 """   """

中文编码声明注释：----->在文件开头加上中文声明注释：# coding:gbk



# 第三章

## input函数

- 作用：用来接收用户的输入
- 返回值类型：Str
- 值的存储 ：使用 = 对输入的值进行存储

## Python中运算符

1. 算术运算符： 

   加（+）减（-）乘（*）除（/）幂（**）

   取余（%）：都是正数，或负数按正常运算，如果是一正一负的话有公式： 余数 = 被除数-除数*商

   整除（//）：都是正数，或负数按正常运算；如果是一正一负的话，向下取整

2. 赋值运算符：

   执行顺序：右--->左

   支持链式赋值：a = b= c = 20 

   支持参数赋值：+= -= *= /= //= %=

   支持系列解包赋值：a,b,c = 20,30,40  解包赋值可以交换变量 a ,b = b, a

3. 比较运算符：

   < > >= <= !=

   ==			对象的值进行比较

   is ，is not 	对象的id进行比较

4. bool运算符：

   and	or	not	in	not in

   a in b表示，a是不是在b中

5. 位运算符（将数据转换成二进制进行运算）：

   & 按位与 ：对应的都是1，结果数才为1，否则为零

   | 按位或：对应数都为0，结果才为零，否则为一

   << 左移运算符 ：相当于乘以二，  >> 右移运算符 （相当于除以二）



## 运算符的优先级

1. 算术运算符：先算乘除，再算加减，有幂运算先算幂运算

2. 位运算：先算左移或右移运算符，然后是按位与，然后是按位或

3. 比较运算

4. 布尔运算 先 and 然后是 or 在后是 =

   这四种运算符先后顺序是 1 > 2> 3> 4

# 第四章

## 程序的组织结构：

### 顺序结构

程序从上到下顺序的执行代码，中间没有任何的判断或跳转，直到程序结束

### 选择结构

使用if else 语句 的结构

if else  ； if elif  elif else

### pass语句

只是一个占位符；

用来搭建语法结构

# 第五章

## range()函数的使用

range(10) 生成从0到9的一个序列

range(1,10)生成一个从1到9的序列

range(1,10,2)生成一个从1到9的序列，步长为2 == 1，3，5，7，9

## while()循环

while(条件表达式)：

​	条件执行体

## for  in 循环

for it in range(1, m):

​	条件执行体

## break，comntinue，与else语句

else 语句：（可以和for和while搭配使用）

```python
while a < 10:
    print(a)
else:
    print("Over!")
for a in range(10):
    print(a)
else:
    print("Over!")
# 在循环时候没有碰见break的时候可以执行else 如果循环是使用break跳出来的那么就不会执行else里面的代码块
```



## 嵌套循环

九九乘法表

```python
for i in range(1, 10):
    for m in range(1, i+1):
        print(f"{i}*{m} = ", i * m,end="\t")
    print()

```

# 第六章（列表）

结构：

类似c中的数组，但是这里面可以存放不同的数据类型

可以存放重复数据；

 任意类型混合存储

根据需要动态分配和回收内存

## 创建方式：

1. lst = ["hello", "world", 98]
2. lst = list(["hello", "world", 98])

## 列表的查询操作：

1. 获取列表中指定元素的索引：

   index("数据")： 如果列表中存在n个相同的元素的话则返回第一个元素的索引

   如果查询到数据不存在的话，则会报错

   还可以在指定的位置查找：index("数据",起始位置,结束位置) 其中包括起始位置不包括结束位置

2. 获取指定索引位置的单个元素

   正向索引0 - （n-1）

   逆向索引（-N, -1）

   指定索引不存在，报错

## 列表的切片：

 列表名[strat, stop, step]

step 默认是1；

如果step为正数：切片的第一个元素默认是列表的第一个元素，切片的最后一个元素默认是列表的最后一个元素

如果step为负数：切片的第一个元素默认是列表的最后一个元素，切片的最后一个元素默认是列表的第一个元素

判断指定元素是否在列表中出现可以使用in 或not in

## 列表的增删改操作

#### 增加

1. append() 在列表后面添加一个元素
2. extend()  在列表后面至少添加一个元素
3. insert(index, 元素)  在列表指定位置添加一个元素
4. 切片 list[2:] = "准备的元素"， 在列表的任意位置添加至少一个元素（把原列表此位置之后的元素替换为准备的元素）

#### 删除

1. remove("被删除元素0") ： 在列表中删除指定元素
2. pop()  根据索引删除元素，如果不填的话默认为最后一个，如果超出的话则会报错
3. 切片：一次至少删除一个元素 list[1,3] =[] 这样就删除了索引为1和2的元素
4. clear：清楚列表
5. del：删除列表

#### 修改

1. 通过索引修改指定位置的元素
2. 通过切片修改成片位置的元素

#### 排序

1. 可以通过sort()方法将列表中的元素按照从小到大的顺序进行排序，可以指定reverse=True 来进行降序排序
2. 可以通过sorted()方法进行列表排序，使得原列表不发生改变，排序好的列表将返回

# 第七章（字典）

以键值对的方式存储

字典名 = {"键":"值", "键1":"值1", "键2":"值2", "键3":"值3", "键4":"值4", "键5":"值5", "键6":"值6"}

字典是一个无序结构，第一个输入的位置可能不是第一个，在内存中会经过hash函数的运算

## 字典的创建

最常用的方法：使用{}

score = {"张三"：100，"李四"：45}

使用内置函数  dict{name = "jack", age = 20}

## 字典中元素的获取

1. 使用[] 来获取 例如：score["张三"]==== 张三对应的值
2. 使用get()方法来获取  score.get("张三","默认值")  ===== 张三对应的值，如果张三不存在的话返回默认值

## 字典的常用操作

1. key的判断：使用 in 或者 not in来判断，指定的key是否在字典中存在

2. 字典元素的删除:del scores["张三"], clear 清空字典

3. 字典元素的新增：score["Jack"] = 90

4. 获取字典视图的方法：

   keys() 获取字典中的所有key

   values()获取字典中所有的value

   items()获取字典中所有的key, value 对

5. 遍历字典：

   for item in score:

   ​	print(item)

   输出的是每一个键，可以通过每一个键，来获取每一个值

## 字典的特点

字典中所有的键值对，key不可以重复，但是value 可以重复，如果key重复 的话会覆盖掉前一个key

字典中的元素是无序的

key必须是不可变对象

字典可以根据需要需要动态的伸缩

字典比较浪费内存，是一种使用空间换时间的数据结构

## 字典的生成（zip方法）

```PYTHON
items = {"Fruits","Books","Others"}
prices = [96,78,85]
d = {item:price   for item, price in zip(items,prices) }

```



# 第八章(元组，集合)

## 元组（是一个不可变序列，不能够进行增删改操作）

### 元组的创建方式

1. 直接使用小括号

   t = ("python", "hello", 98)

2. 使用内置函数

   t = tuple("python", "hello", 98))

3. 只包含一个元素的元组需要使用小括号和逗号

   t = (10, )

4. 空元组的创建方式

   t = (,)

### 获取元组中元素的方式：

1. 使用索引:

   print(t[0])

2. 使用for 循环遍历元组

   for item in t:

   ​	print(item)

   

## 集合（是一个可变序列，能够进行增删改操作）

### 创建方式：

1. 使用{}来创建

   s = {2,3,4,4,5,6,5,7,8}

   print(s) === {2,3,4,5,6,7,8} // 会自动的去掉重复的元素

   集合中一个元素只能允许出现一次，如果重复出现的话会去掉后来加进来的元素

2. 使用set()来创建：

   s1 = set(range(6)) === 0,1,2,3,4,5

   s2 = set([1,2,3,4,51,1,2]) == 1,2,3,4,51  // 将列表转换成集合，并去掉相同的元素

   s3 = set((1,2,3,4,5) ) === 1,2,3,4,5 // 将元组转换成集合

3. 创建空集合：

   s = set()

### 集合元素的相关操作

1. 使用in 或 not in 来判断 一个元素是否在集合中

2. 元素的增加：

   - 调用add()方法	 一次添加一个元素
   - 调用updata()方法， 一次至少添加一个元素

   ```python
   s.add(80)   # 添加一个元素 80
   s.updata({200,300}) # 将另一个集合元素添加进去
   s.updata([100,500,60]) # 将列表中的元素添加进去
   s.updata((600,80,90))  # 讲元组中的元素添加进去
   ```

   

3. 集合元素的删除：

   调用remove()方法：一次删除一个指定元素，如果不存在则报错

   调用discard()方法：一次删除一个指定元素，如果不存在不报错

   调用pop()方法 ：一次只删除一个任意元素，pop方法没有参数

   调用clear()方法：清空集合

#### 集合之间的相互关系

1. 判断两个集合是否相等：

   使用 == 或!= 来判断，如果集合中的元素相同，那么两个集合就相同，否则就不同

2. 一个集合是否是另一个集合的子集

   可以调用方法 issubset 进行判断

   ```python
   a = {1,2,3,4}
   b = {1,2,3}
   c = {1,2,5}
   print(b.issubset(a)) ==== True
   print(c.issubset(a)) ===== False
   ```

3. 一个集合是否是另一个集合的超集（父集）

   可以调用方法issuperset()

   ```python
   a = {1,2,3,4}
   b = {1,2,3}
   c = {1,2,5}
   print(a.issubset(b)) ==== True
   print(a.issubset(c)) ===== False
   ```

4. 判断两个集合之间是否有交集：

   使用isdisjoint()来判断，如果有交集返回False，如果没有交集返回True

### 集合的数学操作

1. 交集：

   使用 方法intersection() 来获取

   ```python
   s1 = {10,20,30,40}
   s2 = {20,30,40,50,60}
   print(s1.intersection(s2)) ===== {20,30,40}
   print(s1 & s2) ==={20,30,40}
   # & 和 intersection效果一样
   ```

2. 并集：

   使用方法：union() 来进行操作 union()方法的效果和 | 符号效果相同

3. 差集：

   使用方法 ：difference() 来进行操作，该方法和 - 符号效果相同

4. 对称差集：

   使用方法symmetric_defference()来进行操作，该方法和 ^ 符号效果相同

### 集合生成式：

就是将列表生成式中的[ i for i in range(1,10) ]  变成 {  }即可

# 第九章（字符串）

是一个不可变对象

字符串的驻留机制：仅保存一份相同且不可变字符串的方法，不同的值被存放在字符串的驻留池中，Python的驻留机制对相同的字符串只保留一份拷贝，后续创建相同的字符串的时候，不会开辟新空间，而是把该字符串的地址赋给新创建的变量

驻留机制的几种情况（交互模式）：

1. 字符串的长度为0或1时

   s1 = "s"

   s2 = "s"

   s1 is s2 === true # 他们的id也相同

2. 符合标准字符串

   字母数字下划线

3. 字符串值在编译时进行驻留

4. [-5,256]之间的整数数字

## 字符串的查询操作

1. index() 查找子串substr 第一次出现的位置，如果不存在或报错
2. rindex()  查找子串substr 最后一次出现的位置，如果不存在或报错
3. find()  查找子串substr 第一次出现的位置，如果不存在返回-1
4. rfind()  查找子串substr 最后一次出现的位置，如果不存在返回-1

## 字符串大小写转换操作方法

1. upper()：把字符串中所有的字符都转换成大写字母   // 转换之后会产生一个新的字符串对象
2. lower()：把字符串中所有的字符串都转换成小写字母   // 转换之后会产生一个新的字符串对象
3. swapcase(): 把字符串中大写换小写，小写换大写
4. capitalize()，把第一个字符转换成大写，其余字符转换成小写
5. title() 把每一个单词的第一个转换成大写，剩下的转换成小写

## 字符串内容对其操作的方法

1. center(length， char), 居中对齐，第一个参数是指定宽度，第二个参数是默认填充符，默认是空格，如果实际宽度小于字符串的宽度，那么直接返回字符串
2. ljust() 左对齐，第一个参数是指定宽度，第二个参数是默认填充符，默认是空格，如果实际宽度小于字符串的宽度，那么直接返回字符串
3. rjust() 右对齐，第一个参数是指定宽度，第二个参数是默认填充符，默认是空格，如果实际宽度小于字符串的宽度，那么直接返回字符串
4. zfill(), 右对齐，左边用0填充，该方法只接受一个参数，用于指定字符串的宽度，如果实际宽度小于字符串的宽度，那么直接返回字符串

## 字符串的分割

1. split() ：

   从字符串的左边开始分割，默认是是空格分割，返回值是一个列表

   通过参数sep="" 指定劈分字符串的劈分符

   通过参数maxsplit 指定劈分的最大次数，劈分完之后，剩下的字串，会单独作为一部分

2. rsplite():

   从字符串的右边开始分割，默认是是空格分割，返回值是一个列表

   通过参数sep="" 指定劈分字符串的劈分符

   通过参数maxsplit 指定劈分的最大次数，劈分完之后，剩下的字串，会单独作为一部分

## 判断字符串操作的方法

1. isidentifier() 判断字符串是不是合法的标识符
2. isspace() 判断指定字符串是否全部有空白字符组成，(回车，换行，水平制表符)
3. isalpha() 判断指定的字符串是否全部由字母组成
4. isdecimal() 判断指定字符串是否全部由十进制的数字组成
5. isnumeric() ，判断指定字符串是否全部由数字组成
6. islanum()： 判断字符串是否全部由字母和数字组成

## 字符串的替换：

1. replace("被替换的字符", "要替换的字符","替换的次数")

2. 字符串的合并：join() 将列表或元组中的字符串合并成一个字符串

   ```python
   lit = ["python", "hello", "Java"]
   lit2 = "".join(lit)  ==== pythonhelloJava
   lis3 = "*".join("python") === p*y*t*h*o*n
   ```

## 字符串的切片

['start', 'end', 'step']

## 格式化字符串：

1. % 

``` python
name = "张胜"
age = "20"
print("我叫%s,今年%d岁" % (name, age))
```

2. format()

   ```python
   name = "章"
   age = "18"
   print("我的名字叫：{0}，今年{1}岁了。我真的叫{0}".format(name, age))
   print("{0:.3}".format(3.1415))# === 3.14 3表示一共三位数
   print("{0:.3f}".format(3.1415))# === 3.142 3表示三位小数
   ```

3. f"      "

   ```python
   print(f"我叫{name},今年{age}岁")
   ```

## 字符串的转换：（eval）

eval()函数用来执行一个字符串表达式，并返回表达式的值。还可以把字符串转化为list、tuple、dict。

```python
a="[1,2,3,4,5]"
b=eval(a)
 
# a是字符串类型数据，b是列表类型数据

a="{"name":"guo","age":25}"
b=eval(a)
 
# a为字符串类型数据，b为字典类型数据

a="(1,2,3,4,5)"
eval(a)
 
# a的数据结构是字符串 b的数据结构是元组
```



# 第十章（函数）

## 函数的创建：

def 函数名([ 输入参数 ]):

​	函数体

​	return

在函数调用过程中，进行参数的传递，如果是可变对象，在函数体中的修改会影响到实参的值，如果是不可变对象，则不会影响函数的值

## 函数的返回值

1. 如果函数没有返回值的话，return 可以省略不写
2. 如果函数只有一个返回值的话，直接返回该结果即可
3. 函数返回值，如果是多个的话，则返回元组

## 函数参数的默认值

```python
def fun(a, b = 10):
    print(a)
    print(b)
    return a + b
fun(100) ==== 100,10
fun(10,20) === 10,20
```

我们在定义函数的时候给形参变量赋值，如果没有传递这个参数的话就使用默认值即可

## 函数参数的定义

1. 个数可变的位置形参：

   定义函数与时，如果我们无法确定传入的位置参数到底有几个，我们可以使用可变位置形参

   使用 * 定义个数可变的位置形参，!!!一个函数只能有一个

   结果是一个元组

   ```python
   def fun(*args):
       print(agrs)
   fun(10)   ==== 10
   fun(10,20,30)====(10,20,30)
   ```

2. 个数可变的关键字形参：

   定义函数与时，如果我们无法确定传入的关键字参数到底有几个，我们可以使用可变关键字形参

   使用 **定义个数可变的位置形参  !!一个函数只能由一个

   结果是一个字典

   ```python
   def fun(**agrs):
       print(agrs)
       return 0
   fun(a = 10)                   ==== {"a":10}
   fun(a = 10, b = 20, c = 30)   ==== {"a":10, "b":20,"c":30}
   ```

3. 当1和2同时存在的时候 2必须放后面

4. ```python
   def fun(a , b, c):
       print(a)
       print(b)
       print(c)
   lst = [11,22,33]
   # fun(lst)  这样会报错，因为lst只能算一个参数
   fun(**lst)  # 这样就可以，把列表中的元素分别赋值给各个形参
   ```
   
5. ```python
   def fun(a,b,*,c,d):
       return 1
   #向上面这个函数中参数的定义方式，* 后面的都需要使用关键字参数进行传递
   ```

## 函数变量

在函数内部定义的变量称为局部变量，只能在函数内部使用

在局部变量前面加上globe 既能够使它变成全局变量

# 第十一章（BUG）

1. try....except....else结构：

```python
try:
    n1 = int(input("请输入一个整数"))
    n2 = int(input("请输入另一个整数"))
    result = n1/n2
except BaseException as e:
    print("出错了")
    print(e)
else:
    print("出错了")
```

2. try...except.....else....finally

   finally:里面存放着无论是否产生异常，总会被执行的代码 

# 第十二章（类的创建）

```python
class Student:
    pass

```

类的组成：

1. 类属性:类中方法外的变量称为类属性，被该类的所有对象所共享
2. 实例方法
3. 静态方法：使用@staticmethod修饰的方法，使用类名直接访问的方法
4. 类方法：使用@classmethod修饰的方法，使用类名直接访问的方法

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print("学生要吃饭")

    @staticmethod
    def method():
        print("我是静态方法")

    @classmethod
    def clsmethod(cls):
        print("我是类方法")


stu = Student("张三", 20)
stu.clsmethod()
stu.method()
stu.eat()
# 我是类方法
# 我是静态方法
# 学生要吃饭

# stu.method() ==== Student.method(stu)
```

## 为对象动态绑定属性

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print("学生要吃饭")

    @staticmethod
    def method():
        print("我是静态方法")

    @classmethod
    def clsmethod(cls):
        print("我是类方法")
stu1 = Stdent("里斯",30)
stu2 = Student("张三", 20)
stu1.gender = "女"
print(stu1.gender) === 女
print(stu2.gender) == 会报错，因为gender时动态的赋值给stu1的，stu2里面没有
```

## 为对象动态的绑定方法

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def eat(self):
        print("学生要吃饭")

    @staticmethod
    def method():
        print("我是静态方法")

    @classmethod
    def clsmethod(cls):
        print("我是类方法")
stu1 = Stdent("里斯",30)
stu2 = Student("张三", 20)
def show():
    pass
stu1.show = show
stu1.show 
stu2.show  # 这样会报错，因为show方法是动态的绑定到stu1中的，stu2中没有
```

# 第十三章：（对象的特征）

## 封装：提高程序的安全性

1. 将数据（属性）和行为（方法）包装到类对象中，在方法内部进行属性操作，在类对象外部调用方法，这样，无需关心方法内部具体实现细节，从而隔离的复杂度

2. 在python中没有专门的修饰符用于属性的私有，如果该属性不希望外部访问，前面使用两个"_"

   ```python
   class Student:
       def __init__(self, name, age):
           self.__name = name
           self.__age = age
   
       def eat(self):
           print("学生要吃饭")
       def getname(self):
           return self.__name
   
   stu = Student("张三",20)
   print(stu.name) # 会报错
   print(stu.getname()) # ==== 张三 
   print(stu._Student__name) # 会报错
   
   ```

   即使我们使用"__"来将属性进行封装，我们还可以使用  _ 类名 _ _属性名来访问



## 继承：

​	语法格式：

```python
class 子类类名(父类1,父类2):
    pass
```

如果一个类没有继承任何类，则默认继承object

python支持多继承

定义子类时，必须在其构造函数中调用父类中的构造函数,否则会报错

```python
class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def setname(self, name):
        self.__name = name

    def setage(self, age):
        self.__age = age

    def getname(self):
        return self.__name

    def getage(self):
        return self.__age


class Student(Person):
    def __init__(self, name, age, interest):
        super().__init__(name, age)
        self.interest = interest

    def learn(self):
        print("我叫" + self.getname() + ",我今年" + str(self.getage()) + "岁了,我是一名学生，我喜欢" + self.interest)


class Teacher(Person):
    def __init__(self, name, age, subject):
        super().__init__(name, age)
        self.subject = subject

    def teach(self):
        print("我叫" + self.getname() + ",我今年" + str(self.getage()) + "岁了,我是一名老师，我教" + self.subject)


stu = Student("张三", 20, "学习")
teacher = Teacher("李四", 30, "计算机")
stu.learn()
teacher.teach()

```

### 方法的重写

子类可以对父类中某个属性或方法进行重新编写

子类重写父类的方法之后，可以通过super().xxx()调用父类中被重写的方法

## 多态：

 定义一个方法，只要传入的对象有这个属性或方法就可以使用

```python
class Animal(object):
    def eat(self):
        print("动物会吃")
class Dog(Animal):
    def eat(self):
        print("狗吃骨头~~~~")
class Cat(Animal):
    def Cat(self):
        print("猫吃鱼~~~")
class Person(object):
    def eat(self):
        print("人吃五谷杂粮")
        
def fun(obj):
    obj.eat()
fun(Cat())
fun(Dog())
fun(Animal())
fun(Person())
# 运行结果：
#动物会吃
#狗吃骨头~~~~
#动物会吃
#人吃五谷杂粮

```

## 特殊方法和特殊属性

特殊方法：__ new __ 和  __ init __ 

new在init之前，先使用new创建一个对象，然后使用init 给对象的实例化属性赋值

## 类的浅拷贝和深拷贝

### 浅拷贝

Python拷贝一般都是浅拷贝，拷贝时，对象包含的子对象内容不拷贝，因此元对象和拷贝后的对象会引用统一子对象：（使用import copy）copy.copy()是浅拷贝

```python
import copy


class Cup:
    pass


class Disk:
    pass


class Computer:
    def __init__(self, cup, disk):
        self.cup = cup
        self.disk = disk

cpu = Cup()
disk = Disk()
computer = Computer(cpu, disk)
computer2 = copy.copy(computer)
print(computer, computer.cup, computer.disk)
print(computer2, computer2.cup, computer2.disk)

#<__main__.Computer object at 0x0000021D4FE03100> <__main__.Cup object at 0x0000021D4FE038E0> <__main__.Disk object at 0x0000021D4FE03520>
#<__main__.Computer object at 0x0000021D4FE59E70> <__main__.Cup object at 0x0000021D4FE038E0> <__main__.Disk object at 0x0000021D4FE03520>
```

由输出可得，computer 和computer2里面的cup和disk对象相同所以是浅拷贝

### 深拷贝

使用copy.deepcopy()是深拷贝

```python
import copy


class Cup:
    pass


class Disk:
    pass


class Computer:
    def __init__(self, cup, disk):
        self.cup = cup
        self.disk = disk


cpu = Cup()
disk = Disk()
computer = Computer(cpu, disk)

computer2 = copy.deepcopy(computer)

print(computer, computer.cup, computer.disk)
print(computer2, computer2.cup, computer2.disk)
# <__main__.Computer object at 0x0000026B1AC63100> <__main__.Cup object at 0x0000026B1AC638E0> <__main__.Disk object at 0x0000026B1AC63520>
# <__main__.Computer object at 0x0000026B1ACB98A0> <__main__.Cup object at 0x0000026B1ACBA950> <__main__.Disk object at 0x0000026B1ACBA9B0>


```

有结果可知，computer和computer2里面的cup和disk对象也不同

# 第十四章 模块（Modules）

一个py文件就是一个模块

使用模块的好处：

- 方便其他程序和脚本的导入并使用
- 避免函数名和变量名的冲突
- 提高代码的可维护性
- 提高代码的可重用性

导入模块：

import 模块名称 [as 别名]   # 导入整个模块

from 模块名称 import 函数/变量/类   # 只是导入该模块中的一个属性

当我们想要导入自定义模块的时候，直接使用import 模块名 这样会报错，

解决方法：

​	将这个包设置为模板文件夹

​	from 模块名 import 方法  导入一个方法，这样不会报错

## 以主程序形式运行模块

我们再导入模块的时候，有一些自定义模块中的一部分我们不想要导入，这时候我们可以使用

```python
if __name__ == "__main__":
	代码块  # 这个代码块只有在该程序运行的时候才会运行，在作为模块导入的时候这里面的代码块就不会运行
```

## 包

import 包名.模块名

包和目录的区别，包是含有 __ init __.py的，目录不包含这个模块

## python中常用的内置模块

|  模块名  |                             描述                             |
| :------: | :----------------------------------------------------------: |
|   sys    |            与python解释器及其环境操作相关的标准库            |
|   time   |    提供事件相关的各种函数的标准库localtime() 获取本地时间    |
|    os    |              提供了访问操作系统服务功能的标准库              |
| calendar |              提供了与日期相关的各种函数的标准库              |
|  urllib  |              用于读取网上（服务器）的数据标准库              |
|   json   |               用于使用JSON序列化和反序列化对象               |
|    re    |             用在字符串中执行正则表达式匹配和替换             |
|   math   |                 提供标准算数运算函数的标准库                 |
| decimal  | 用于进行精准控制运算精度，有效位数和四舍五入操作的十进制运算 |
| logging  |  提供了灵活的记录事件，错误，警告，和调试信息等日志信息功能  |

## os模块

可以直接调用系统文件的应用

```python
import os
os.system("notepad.exe") === 记事本
os.startfile("可执行文件路径") == 可以直接打开应用程序，例如qq
```

|              函数               |              说明              |
| :-----------------------------: | :----------------------------: |
|            getcwd()             |       返回当前的工作目录       |
|          listdir(path)          | 返回指定路径下的文件和目录信息 |
|       mkdir(path[,mode])        |            创建目录            |
| makedirs(path1/path2..[,mode])  |          创建多级目录          |
|           rmdir(path)           |            删除目录            |
| removedirs(path1/path2..[mode]) |          删除多级目录          |
|           chdir(path)           |    将path设置为当前工作目录    |

os.path模块操作目录：

|      函数       |                             说明                             |
| :-------------: | :----------------------------------------------------------: |
|  abspath(path)  |                 用于获取文件或目录的绝对路径                 |
|  exists(path)   | 用来判断文件或目录是否存在，如果存在返回True,不存在返回False |
| join(path,name) |                 将目录与目录或文件名拼接起来                 |
|   splitext()    |                      分离文件名或扩展名                      |
| basename(path)  |                    从一个目录中提取文件名                    |
|    dirname()    |            从一个路径中提取文件路径，不包括文件名            |
|     isdir()     |                     用于判断是否是为路径                     |

# 第十五章 文件

文件常用的操作方法：

1. read([size]): 从文件中读取size个字节或字符串的内容返回，若省略size 则读取到文件末尾，即一次性读取文件中的所有内容：
2. readline() 从文件中读取一行内容
3. readlines() 把文件中的每一行作为一个字符串返回，并将这些对象放在列表中返回
4. write(str)  讲str写入到文件中
5. writelines(s_list): 将字符串列表s_list写入文本文件中，不添加换行符
6. seek(offset[, whence]) :
   - 把文件指针移动到最新位置，offset表示相对于whence的位置：
   - offset 为正，往结束方向移动，为负，忘开始方向移动
   - whence 不同值代表不同含义：
     - 0：从文件头开始计算；
     - 1：从当前位置开始计算
     - 2：从文件尾开始计算
7. tell() :返回文件指针的当前位置，
8. flush():把缓冲区的内容写入文件，但不关闭文件
9. close(), 把缓冲区的内容写入文件，同时关闭文件，释放文件相关资源
