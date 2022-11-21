---
title: JAVA笔记
date: 2022-05-16 14:49:44
tags: JAVA
cover: "https://s2.loli.net/2022/11/21/Sm8lFrjtzUkihVy.webp"
description: 学习笔记，记录一下
categories: JAVA

---

# JAVA笔记

# 注释需要注意的地方：

    /**   */这是文档注释，会生成一个html文件来对这个文档进行说明
    
    多行注释中，注释不能嵌套

# 编译需要注意的

    一个java文件中可以生命多个class但是最多只能有一个class被public修饰而且要求声明为public的类的类名必须与源文件相同
    
    程序入口是main（）方法，格式是固定的
    
    输出语句
    
       System.out.println(): 输出完之后有换行
    
       System.out.print()： 输出完之后不换行
    
    编译之后会生成一个或多个字节码文件，字节码文件的文件名与java文件中类名相同



JDK = JRE + Java的开发工具（javac.exe.java.exe. javadoc.exe）

JRD = JVM + JAVA 核心类库

配置path环境变量目的是为了在cmd运行框中，任何盘之下都可以进行java语法的调用

 

## **命名规范**

包名：多单词组成时所有字母都小写：xxxyyyzzz

类名，接口名：多单词组成时所有单词的首字母大写：XxxYyyZzz

变量名，方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写

常量名：所有字母都大写，多单词时每个单词用下划线链接

 

## **变量分类**

基本数据类型：int char bool short long byte float double

引用数据类型：class（类） interface（接口） array(数组)

 

byte (-128-127); (一个字节) short（2字节）int(4个字节)long（8个字节）

byte b1 = 128;这样会导致编译不通过

声明long型变量的时候必须以“l”或“L”结尾

long a = 134564L 

 声明float型变量的时候必须以“f”或“F”结尾

 使用小数的时候我们通常使用double类型的变量，因为double空间更大，而且不用再最后写一个f或者更F

## **基本数据类型之间的运算规则：**

前提：不包含boolean

\1.   自动类型提升：

当容量小的数据类型的变量与容量打的数据类型的变量做运算的时候

byte，char，short，int，long，float，doouble

    short和char类型相加的话为int

2.当使用long命名变量的时候如果后面不加L的话就相当于使用int型赋值给long型，当让如果你后面赋值的数字超过int类型的大小的话，那么会报错

    Long l1 = 241654654654564;这样就会报错
    
    如果定义float类型的变量的时候后面不加F的话而且后面数字还为小数，那么会报错，因为小数默认为double型，double型赋值给int型明显是错误的

## **String**类型

 是一个字符串使用双引号

可以和八种数据类型变量做运算，且运算只能是链接运算 + 

运算完结果是String类型的

**equals方法**（用来比较两个字符串所包含的内容是否相同）

	这种方法s1.equals(s2)  相同为True 不同为false

## **进制转换**

二级制0b开头

八进制以 0 开头

十六进制以 0x开头

## **源码 反码 补码**

正数的三个码都和其本身相同，

负数：

    源码：该负数的本身
    
    反码：处符号位，剩下的都取反
    
    补码：反码加一
    
    计算机的底层都已补码的方式来存储数据

## **逻辑运算符：（操作对象都是boolean类型的）**

**逻辑**是从左到右全部判断完之后结束

**短路**是能判断结果之后就停止

& 逻辑与   && 短路与  

| 逻辑或    || 短路或

！逻辑非  

^ 逻辑异或  // a^b 当a和b相同的时候为flase 当ab不同的时候为True

 

***位运算符 需要为int型\***

<< 左移运算符（单目运算符：左移一位 相当于整体乘2， 被移除的高位丢弃，空缺位补0）

\>> 右移运算符（单目运算符：右移一位 相当于整体除以2（最小为0），右移之后，最高位为1，空缺补1，最高位为0，空缺位补零）

\>>>被移位二进制最高位无论是0或者1，空缺位都用0补

& 使用二进制一对一，都为1的时候生成数对应的位置才为1，其余为零

| 使用二进制一对一，都为0的时候生成数对应位置才为0，其余为1

    ^ 使用二进制一对一，对应位置相同的时候才为0，否则为1
    
    ## **三元运算符**
    
    （条件表达式）？表达式1：表达式2； 其中表达式1和表达式2数据类型必须相同
    
    如果条件表达式为真的话，运行表达式1，为假的话运行表达式2




## **从键盘获取数据**

这里涉及到导包操作（import）使用Scanner类

步骤

1.  导包：import java.util.Scanner;

2.  Scanner的实例化，Scanner = new Scanner(System.in);

3. 调用Scanner类的相关方法，来获取指定类型的变量

   Scanner scan = new Scanner(System.in);

   Int num = scan.nextInt()

4. 除了获取字符串的方法是scan.next()，剩下的全部都是scan,nextXxx()来获取数据

Scanner类型中没有获取单个字符的方法，如果想要获取单个字符串的话可以先使用scan.next()获取完字符串之后，在使用charAt(0)来获取单个字符

String gender = scan.next();

Char genderChar = gender.charAt(0); charAt()方法的参数是字符串的第几个位置的索引

如果用户输入的数据类型和源文件中要求输入的数据类型不同的话，那就要做比较，如果用户输入的数据类型所占字节数比源文件中要求的数据类型多，则会报错

## **Math****类中的方法**

\1.   double data = Math.pow(2,3) ==== 将2的3次方运算完之后的数字赋值给data

\2.   double data = Math.sqrt(5)= Math.pow(5,0.5); 将5开方之后的值赋值给data

\3.   double data = Math.random()*90+10;

random()的范围是[0.0, 1.0）左开右闭，取该范围里面的随机数，返回值是double，所以如果你想要得到整数的话，你可以使用类型强制转换成int类型.

random()*90; 获取的是[0, 90)之间的随机数

random()*90+10;获取的是[10, 100)之间的随机数

 

**try catch** **用法**

 try{逻辑代码块一}catch{处理代码块一}

如果逻辑代码块一出现问题的时候，则执行catch中处理代码块一，如果没有出现问题的话，则执行完逻辑代码块一之后，跳过catch中的代码块，执行下一条语句

 

## **数组的使用**

1. 一维数组的声明和初始化

   - 静态初始化
     - Int[] ids = new int[]{1001,1002,1003}

   - 动态初始化

     String[] names = new String[4];

     数组一旦初始化完成其长度就已经确定了

2.  数组元素默认初始化值

   1.    整形的统统为0
   2. 浮点型的统统为0.0
   3. Char类型的统统为Ascii码中的0 （NULL）
   4. Boolean类型的统统为false

3. 二维数组

   1. Int[][] arr = new int[5][4]

      二维数组在动态初始化的时候列数必须填，行数不一定要填写

   2. 二维数组求长度的时候 用上面的例子 arr.length = 5; 只要是数组就有length方法，arr[0].length = 4;

   3. 二维数组初始值对于 int[ ] [ ] arr = new int[3] [4]  这样都分配好空间的数组来说 arr[1]代表是地址.arr[1] [2]的初始值和一维数组类型初始值一样，对于 int[ ] [ ] arr = new int[3] []  只给出列，没有给出行的数组来说，arr[1]代表的是null， 内层元素不能调用否则报错
   
4. 数组的方法（引用java.util.Arrays）

   |  1   |  boolean equals(int[] a, int[] b)   |         判断两个数组是否相同          |
   | :--: | :---------------------------------: | :-----------------------------------: |
   |  2   |       String toString(int[] )       |             输出数组信息              |
   |  3   |     void fill(int[] a, int val)     |        将指定值填充到数组之中         |
   |  4   |         void sort(int[] a)          |            对数组进行排序             |
   |  5   | int binarySearch(int[] a, int key ) | 对排序后的数组进行二分查找指定的值key |

5. 数组异常

   1. 数组角标越界异常：ArrayIndexOutOfBoundsException
   2. 空指针异常：NullPointerException  声明了但是没有复制 int[] a； System.out.print(a[0]) 这样就会报错

 

# 面向对象

面向过程：强调的是功能行为，以函数为最小单位，考虑怎么做，

面向对象：将功能封装进对象，强调具备了功能的对象，以类/对象为最小单位，考虑谁来做

## Java类及类的成员（属性，方法，构造器；代码块，内部类）

两个要素：

	类：是对一类事物的描述，是抽象的，概念上的定义
	
	对象:是实际存在的该类事物的每个个体，因而也称为实例。

面向对象的重点就是类的设计，设计类就是设计类的成员，

	类：含有 **属性**和**方法**
	
		属性 = 成员变量 = field = 域，字段
	
		方法 = 成员方法 = 函数 = method

 创建类的对象 = 类的实例化 = 实例化类

```java
// 创建类
class Person{
    // 属性
    String name;
    int age = 1;
    boolean isMale;
    // 方法
    public void eat(){
        System.out.println("我会吃饭");
    }
    public void sleep(){
        System.out.println("我会睡觉");
    }
    public void takc(String language){
        System.out.println("人可以说话，使用的是"+language);
    }
}

// 创建类的对象
public class PersonTest{
    public static void main(String[] args){
        Person p1 = new Person(); // 这里就是创建Person类的对象
        // 调用对象的结构:属性， 方法
        // 调用对象的属性
        p1.name = "TOM";
        p1.isMale = True;
        System.out.println(p1.age);
        // 调用对象的方法
        p1.eat();
        p1.sleep();
        p1.talk("Chinese");
    }
}
```

1. 类和对象的使用（面向对象思想落地）

   1. 创建类，设计类的成员
   2. 创建类的对象
   3. 通过“对象.属性” 或“对象.方法”调用对象的结构

2. 属性(成员变量) VS 局部变量

   1. 相同点：

      1. 定义变量的格式 ：数据类型 变量名 = 变量值
      2. 先声明，后使用
      3. 变量都有其对应的作用域

   2. 不同点

      1. 在类中声明的位置不同

         属性：直接定义在类的一对{}内

         局部变量：声明在方法内，方法形参，代码块之内，构造器形参，构造器内部的变量
         
      2. 权限修饰符的不同

         属性：可以在声明属性的时候，指明其权限，使用权限修饰符

         		常用的权限修饰符有：private,public，缺省（不加声明就是默认缺省），protected -->封装性

         局部变量：不可以使用权限修饰符

      3. 默认初始化值的情况

         属性：类的属性，根据其类型，都有默认初始化值

         			整形（byte, short, int , long）； 0
   																																																																																																																																																					
         			浮点型（float,double）； 0.0
   																																																																																																																																																					
         			字符型（char）; 0(或‘\u000’)
   																																																																																																																																																					
         			布尔型（boolean）; false;

         局部变量：没有初始化值

         			意味着：我们再调用局部变量之前，一定要先是赋值
   																																																																																																																																																					
         			特别地：在形参调用时，我们赋值即可

      4. 在加载位置不同

         属性：加载到堆空间中（非static）

         局部变量：加载到栈空间中

      ```java
      class User{
          String name; //  成员变量
          public void talk(String language) // 这里language就是局部变量
          {
              String age; // 这里age也是局部变量
              System.out.println("我是中国人，我说"+language);
          }
      }
      ```

   3. 方法的使用（method）

      1. 举例

         ```java
         public void eat(){};
         public void food(){};
         public String Getname(){};
         public String GetNation(String nation){};
         ```

      2. 方法的声明

         权限修饰符	返回值类型	方法名（形参列表）{

         			方法体；

         }

      3. 说明：

         1. 关于权限修饰符，默认方法的权限是先使用public

            Java规定的4种权限修饰符：private, public, 缺省, protected --- >封装性

         2. 返回值类型：   有返回值 VS 没有返回值

            如果方法有返回值，则必须在方法声明时，指定返回的类型，同时，方法中（必须）需要使用return关键字来返回指定类型的常量或变量

            如果方法没有返回值，则方法声明时，使用void来表示。通常，没有返回值的方法中，就不使用return，但是如果使用的话只能用”return；“表示结束此方法的意思

         3. 方法名：需要符合方法名的规则和规范

         4. 形参列表：可以有一个，两个，或多个

            	数据类型1 形参1 ；  数据类型2  形参2；

      4. return 关键字的使用：
         1. 适用范围：使用在方法体中
         2. 作用：
            1. 结束方法
            2. 针对有返回值类型的方法，使用return返回数据 
         3. return 关键字后面不可以使用语句
         
      5. 方法的使用中，可以调用当前类的属性或方法

      6. 编译完源程序之后，生成一个或多个字节码文件

          编译器使用JVM中的类的加载器和解释器对生成的字节码文件进行解释运行，意味着，需要将字节对应的类加载到内存中，涉及到内存解析

         **所以说，编译的时候不会讲字节加载到内存中，只有在运行的时候才会设计到内存**

      7. 理解“万事万物皆对象”

         1. 在Java语言范畴中，我们都将功能，结构等封装到类中，通过类的实例化，来调用功能结构
            1. Scanner，String等
            2. 文件 File
            3. 网络资源
         2. 涉及到Java语言与前端Html，后端数据库交互时，前后端的结构在Java层面都体现为类，对象
   
3. 内存解析的说明：

   1. 引用类型的变量，只可能存储两类值，null，或地址值（含变量的类型）

4. 匿名对象的使用

   1. 理解：我们创建对象，没有显示的赋给一个变量名，即为匿名对象
   2. 特征：匿名对象只能调用一次
   3. 使用：

   ```java
   class Person()
   {
       String name;
       int age;
   }
   public class Java(){
       public static void main(String[] args){
           new Person().name;     // 这里就是匿名对象， 调用完之后就无法再调用这个对象了
       }
   }
   ```

5. 方法：

   - 方法的重载(overload)

     - 定义：在同一个类中，允许存在一个以上的同名的方法，只要他们的参数个数或者参数类型不同即可。

       两同一不同：相同类，相同方法名，参数列表不同/参数个数不同/参数类型不同

     - 举例：

       ```java
       public class Text(){
           public static void mian(String[] args){
               Person p1 = new Person();
               p1.say("zhang");
               p1.say("zhanng", n);
           }
       }
       class Person()
       {
           public void say(String name)
           {
               System.out.println("我的名字是："+name);
           }
           public void say(String name, int n)
           {
               for(int i = 0; i < n; i++)
               {
                   System.out.println("我的名字是："+name);
               }
           }
       }
       ```

       这样的话，当你传入的参数不同的时候，调用的say方法也不同
     
   - 可变个数的形参

     - 定义：可变形参格式：数据类型 ... 变量名

       ```java
       public class Text{
           public static void main(){
               Person p1 = new Person();
               p1.say("Mr","zhang");
           }
       }
       class Person{
           /**
           *运行结果为 
           *	[Ljava.lang.String;@4eec7777
           *   zhang    
           *当使用可变个数形参的时候，传入多个参数的的时候形参就会变成对应的数组
           */
           public void say(String ... strs){
               System.out.println(strs);
               System.out.println(strs[1]);
           }
       }
       ```

     - 具体使用

       - 可变个数形参的格式：数据类型 ... 变量名
       - 当调用可变个数形参方法时，传入的参数个数可以是 0个， 1个， 2个.....
       - 可变个数形参的方法与本类中方法名相同，形参不同的方法之间构成重载
       - 可变个数的形参变量必须声明在方法的最后一个
       - 可变个数的形参在同一个方法中最多声明一个

   - 关于变量的赋值：

     - 如果变量是基本数据类型，此时赋值的时变量所保存的数据值
     - 如果变量是引用数据类型，此时赋值的是变量所保存的数据的地址值
     
   - 关于程序的退出：
   
     - 使用System.exit(0); 会直接结束程序

### 方法的重写

1. 定义：子类可以根据需要对父类中继承来的方法进行改造，也称为方法的重置或者覆盖，在执行程序的时候，子类的方法将覆盖父类的方法。

2. 要求：

   - 子类重写的方法必须和父类被重写的方法具有相同的方法名称，参数列表
   - 子列重写的方法的返回值类型不能大于父类被重写的方法的返回值类型
     - 父类中返回值类型时void的时候，则子类重写方法的返回值类型只能是void
     - 父类被重写的方法的返回值类型时A类型，则子类重写的方法的返回值类型可以是A类或者A的子类
     - 父类中被重写的方法的返回值类型是基本数据类型，则子类重写方法的返回值类型必须是相同的基本数据类型
   - 子类重写的方法使用权限不能小于父类中被重写的方法的访问权限
     - 子列不能重写父类中声明为private权限的方法

   ```jav
   // 方法的声明：权限修饰符 返回值类型 方法名(形参列表) throws 异常类型()
   ```

   - 子类方法抛出的异常，不能大于父类中被重写方法的异常
   - protected 权限修饰符 在子类中可以用，但是在不同包下不可以用，如果想要在不同包下调用protected权限的变量，我们可以使用extends来继承相应的类

3. 注意：

   1. 子类与父类中同名同参数的方法必须同时声明为static（即为重写），或者，同时声明为static的（不是重写）。因为static方法是属于类的，子类无法覆盖父类的方法

4. 应用：重写之后，当创建子类对象以后，通过子类对象调用父类中同名的方法时，实际执行的时子类重写父类的方法 

   #### 重载和重写的区别

   1. 概念：

      重载：在同一个类中可以声明多个方法名相同形参列表不同的方法

      重写：子类继承父类之后，可以对父类中同名同参数的方法进行覆盖操作

   2. 编译和运行

      对于重载而言，在方法调用的之前，编译器已经确定了索要调用的方法，这称为“早绑定”，或“静态绑定”

      对于多态，只有等到方法调用的时候，编译器才会确定索要调用的具体方法，这成为“完绑定”或“动态绑定”

   

### 子类对象实例化的过程

1. 从结果上看：

   子类继承父类之后，就获取了父类中声明的属性或方法

   创建子类对象，在对空间中，就会加载所有父类中声明的属性

2. 从过程上来看，当我们通过子类的构造器创建子类对象上来看，我们一定会直接或间接的调用其父类的构造器，进而调用父类的父类的构造器，直到调用了。java.lang.Object类中空参构造器为止，正因为加载过所有的父类的结构，所以才可以看到内存中有父类中的结构，子类对象才可以考虑进行调用

3. 明确，虽然创建子类对象时，调用了父类的构造器，但自始至终就创建过一个对象，即为new的子类对象

### 代码块

1. 代码块的作用，用来初始化类和对象

2. 代码块如果有修饰的话，只能使用static

3. 分类：静态代码块  VS非静态代码块

4. 静态代码块：

   1. 内部可以有输出语句
   2. 随着类的加载而运行，而且只执行一次
   3. 作用初始化类的信息
   4. 如果一个类中定义了多个静态代码块，则按照声明的先后顺序执行
   5. 静态代码块的执行要优先于非静态代码块
   6. 静态代码块内只能调用静态的属性，静态的方法，不能调用非静态的结构

5. 非静态代码块：

   1. 内部可以有输出语句
   2. 随着对象的创建而运行，创建几个对象执行几次
   3. 作用初始化类的信息
   4. 如果一个类中定义了多个非静态代码块，则按照声明的先后顺序执行
   5. 非静态代码块内可以调用静态的属性、静态的方法，或非静态的属性、非静态的方法

6. 使用方法：

   1. 我们想要给一个属性的赋值的之前需要做一下其他的工作，这时候不能够进行如下方法赋值：

      ```java
      class Person{
          int a;
          // 这样的赋值是错误的
          // a = 0
          // 我们想要在这个赋值之前需要做一下别的工作，这时候我们需要代码块
          static{
              // 作别的工作
              ...;
              a = 0;
          }
      }
      ```

      

7. 执行的先后顺序：

   ```java
   // 由父即子 静态线性：
   class Root{
       static{
           System.out.println("Root静态初始化模块");
       }
       {
           System.out.println("Root普通初始化模块");
       }
       public Root(){
           System.out.println("Root无参构造器");
       }
   }
   
   class Mid extends Root{
       static{
           System.out.println("Mid静态初始化模块");
       }
       {
           System.out.println("Mid普通初始化模块");
       }
       public Mid(){
           System.out.println("Mid无参构造器");
       }
   }
   
   class Left extends Mid{
       static{
           System.out.println("Left静态初始化模块");
       }
       {
           System.out.println("Left普通初始化模块");
       }
       public Left(){
           System.out.println("Left无参构造器");
       }
   }
   
   public class SingletonTest1 {
       public static void main(String[] args) {
           Left l = new Left();
           
       }
   }
   
   ```

   最后结果为：

   Root静态初始化模块
   Mid静态初始化模块
   Left静态初始化模块
   Root普通初始化模块
   Root无参构造器
   Mid普通初始化模块
   Mid无参构造器
   Left普通初始化模块
   Left无参构造器

   如果我们在一个子类的对象中调用static模块的话

   ```java
   // 由父即子 静态线性：
   class Root{
       static{
           System.out.println("Root静态初始化模块");
       }
       {
           System.out.println("Root普通初始化模块");
       }
       public Root(){
           System.out.println("Root无参构造器");
       }
   }
   
   class Mid extends Root{
       static{
           System.out.println("Mid静态初始化模块");
       }
       {
           System.out.println("Mid普通初始化模块");
       }
       public Mid(){
           System.out.println("Mid无参构造器");
       }
   }
   
   class Left extends Mid{
       static{
           System.out.println("Left静态初始化模块");
       }
       {
           System.out.println("Left普通初始化模块");
       }
       public Left(){
           System.out.println("Left无参构造器");
       }
       
       public static void main(String[] args) {
           System.out.println("这是初始化函数的部分");
           Left l = new Left();
       }
   }
   
   
   ```

   最后结果为：

   Root静态初始化模块
   Mid静态初始化模块
   Left静态初始化模块
   这是初始化函数的部分
   Root普通初始化模块
   Root无参构造器
   Mid普通初始化模块
   Mid无参构造器
   Left普通初始化模块
   Left无参构造器

### 内部类：

使用方法：inner class一般在定义的他的 类或语句块之间，在外部引用他的时候必须给出完整名称。inner class类名不能和外部类相同

1. 在JAVA中我们允许，一个类定义于另一个类的内部，前者成为{% label 内部类 orange %}，后者称为{% label 外部类 blue %}。

2. 分类：
   1. 成员内部类（static成员内部类，和非static成员内部类）
   2. 局部内部类（不谈修饰符），匿名内部类
3. 成员内部类
   1. 一方面，可以作为外部类的成员：
      1. 调用外部类的结构
      2. 可以被static修饰
      3. 可以被四种不同的权限修饰符
   2. 另一方面作为一个类
      1. 类可以定义属性，方法，构造器等
      2. 可以被final修饰，表示此类不能够别继承。言外之意，不适用final，就可以被继承
      3. 可以使用abstract修饰

```java
class Person{

    // 静态成员内部类
    abstract static class Dog{
        String name;
        int age;
        public void show(){
            System.out.println("卡拉是一条狗");
        }
    }
    // 非静态成员内部类
    final class Bird{
        String name;

        public Bird()
        {

        }

        public void sing(){
            System.out.println("我是一只小小鸟");
        }
    }
    public void method(){
        // 局部内部类
        class AA{

        }
    }
    //  代码块
    {
        // 局部内部类
        class BB{

        }
    }
    public Person(){
        // 局部内部类
        class CC{

        }
    }
}
```

4. 关注问题

   1. 如何实现内部类的对象

   2. 如何在成员内部类中区分调用外部类的结构

      ```java
      public void display(String name){
          System.out.println(name); // 方法的形参
          System.out.println(this.name); // 内部类的属性
          System.out.println(Person.this.name); // 外部类的属性
      }
      ```

      

   3. 开发中局部内部类的使用

   ```java
   public class InnerClassTest {
       public static void main(String[] args){
           // 创建Dog实例（静态成员内部类）
           Person.Dog dog = new Person.Dog();
           dog.show();
           
           // 创建Bird实例（非静态的成员内部类）：
           // Person.Bird bird = new Person.Bird(); //这样是错误的，因为Bird内部类不是static不能通过Person直接调用，需要实例化Person的对象，然后通过实例化的Person的对象来调用这个内部类
           Person p = new Person();
           
           Person.Brid bird = p.new Bird;
           bird.sing(); 
       }
   }
   ```

5. 总结：

   成员内部类和局部内部类，在编译之后都会出现字节码文件

   格式：

   	成员内部类：外部类$内部类名.class
																																																																											
   	局部内部类：外部类$数字  内部类名.class

6. 注意：

   1. 在局部内部类的方法中（比如说show）如果调用局部内部类所声明的方法（比如method）中的局部变量（比如说num）要求此局部变量声明为final
   2. jdk7 及以前的版本，要求此局部变量声明为final的
   3. jdk8 及以后的版本，可以省略final的声明

   ```java
   public class Person{
       
       public void method(){
           // 局部变量
           int num = 10;
           
           class AA{
               
               public void show(){
                   // 这样是错误的
                   // num = 20
                   // 这样是正确的
                   System.out.println(num);
               }
           }
       }
   }
   ```

   

   ​			


### Object类的使用

1. object类是所有Java类的根父类

2. 如果在类的声明中未使用extends关键字指明其父类，则默认父类为java.lang.Object类

3. Object类中的功能(属性，方法)就具有通用性

   - 属性：无
   - 方法：euqals() / toString() / getClass() / hashCode() /  clone() / finalize() / wait() / notify() / notifyAll()

4. equals() 方法的使用：

   - 回顾： == 运算符：

     1. 可以使用在基本数据类型变量和引用数据类型变量中

     2. 如果可以比较的是基本数据类型变量，比较两个变量保存是数据是否相等。（不一定要类型相同）

        如果比较的是引用数据类型变量，则比较的是两个数据地址值是否相等，即两个引用是否指向一个对象实体

   - equals()方法的使用：

     1. 是一个方法，而并非一个运算符

     2. 只能适用于引用数据类型

     3. Object类中euqals()的定义：

        ```java
        public boolean euqals(Object obj):{
        	return (this == obj)
        }
        ```

        这就说明Object类中定义的equals()方法和 == 是相同的。比较两个对象的地址值是否相等，即两个引用是否指向同一个数据对象

     4. 像String，Data,File,包装类都重写的Object中的euqals的方法，重写后，比较的不是两个引用的地址值是否相同，而是比较两个对象的实体内容是否相同

     5. 通常情况下，我们自定义类如果使用equals()的话，也通常是比较两个对象的实体内容是否相同，那么，我们就需要对Object类中euqals()进行重写

        ```java
        // Customer 类中有两个属性，1.name, 2.age
        // 重写Customer中的equals()方法
        // 比较两个对象的属性是否相同
        public boolean equals(Object obj){
            if(this == obj){
                return true;
            }
            if(obj instanceof Customer){
                Customer cus = (Customer)obj;
                if((this.age == obj.age) && (this.name.equals(cust.name))){
                    return true;
                 
                }
                else{
                    return false;
                }
            }
            return false;
        }
        ```

5. Object类中toString()的使用

   1. 当我们输出一个对象的引用的时候，默认调用的是他的的toString()方法
   2. Object中toString()方法
   3. hashCode()计算该类在堆空间的值， 使用Integer类的toHexString转换成16进制

   ```java
   public String toString() {
       return getClass().getName() + "@" + Integer.toHexString(hashCode());
   }
   ```

   3. 像String，Data，File，包装类等都重写了Object类中toSting()方法，使得在调用对象的toString()时，返回“实体内容”信息
   4. 自定义类也可以重写toString()方法，当调用此方法的时候，返回对象的“实体内容”

6. Java中的Junit单元测试：

   步骤：

   1. 选中当前工程 - 右键选择，build path - add libraries - JUit 4 - 下一步

   2. 创建Java类，进行单元测试

      此时Java类要求，①此类时public的，②此类提供公共的无参构造器

   3. 此类中声明单元测试方法

      此时的单元测试方法，防范权限是public，没有返回值，没有形参

   4. 此时单元测试方法以后，就可以在方法体内测试相关的代码

   5. 此单元测试方法上需要声明注解@Test，在单元测试类中导入，import org.junit.Test

   6. 写完代码以后，就可以对单元格进行测试了

      ```java
      package ObjectTest;
      
      import org.junit.Test;
      
      public class GeometricTest {
           public static void main(String[] args){
              Circle circle1 = new Circle(2.3);
              Circle circle2 = new Circle(2.3,"white",2.0);
              System.out.println("颜色是否相等："+circle1.getColor().equals(circle2.getColor()));
              System.out.println(circle1.equals(circle2));
              System.out.println(circle1);
           }
      
          @Test
          public void testEuqals() {
              Circle circle1 = new Circle(2.3);
              Circle circle2 = new Circle(2.3, "white", 2.0);
              System.out.println(circle1.equals(circle2));
          }
      }
      
      ```

      

7. 包装类的使用：

   针对八种基本类型定义相应的引用类型 --- 包装类(封装类)

   有了类的特点，就可以调用类中的方法，Java才是真正的面向对象

   

   Java提供了8中基本数据类型对应的包装类，使得基本数据类型的变量具有类的特征

   

   前六个是数值型的，由共同的父类Number

   | 基本数据类型 | 包装类    |
   | :----------: | --------- |
   |     byte     | Byte      |
   |    short     | Short     |
   |     int      | Integer   |
   |     long     | Long      |
   |    float     | Float     |
   |    double    | Double    |
   |   boolean    | Boolean   |
   |     char     | Character |

   **包装类中核心部分**

   - 基本数据类型，包装类，与String类之间的转换

     ```java
     public class WrapperTest {
         // 基本数据类型的转换  ----->  包装类，调用包装类的对象
         @Test
         public void test1(){
             int num = 10;
             // 下面这种方法就会报错，因为基本数据类型没有方法可言
             // System.out.println(num1.toString())
             
             // 转换成引用数据类型
             Integer in1 = new Integer(num1);
             System.out.println("in1.toString"); //  ----> 10
             
             // Integer in2 = new Integer("123abc") 这样就会报错
             
             Float f1 = new Float(12.3f);
             Float f2 = new Float("12.3");
             
             boolean b1;
             Boolean b2;
             System.out.println(b1);  // false  b1是基础类型
             System.out.println(b2); // null   b2是一个类
         }
         
         // 包装类  -----> 基本数据类型 ，调用包装类的xxxValue()
         @Test
         public void test2(){
             Integer in1 = new Integer(13);
             // 调用包装类.xxxValue就可以将包装类转换成对应的数据类型
             int i1 = in1.intValue();
             System.out.println(i1+1);
         }
     }
     ```

     新特性：不强制要求上述转换方法了，有自动转换的

     ```java
     // JDK 5.0 新特性，自动装箱与拆箱：
     @Test
     public void test1(){
         int num1 = 0;
         // 理论上说，method的参数是对象，但是你直接填入基本数据类型也不会报错
         // 基本数据类型 ----- > 包装类的对象
         method(num1);
         
         // 自动装箱：  基本数据类型 --- > 包装类
         int num2 = 10;
         Integer in1 = num2; 
         boolean b1 = true;
         Boolean b2 = b1;
         
         // 自动拆箱： 包装类 --- > 基本数据类型
         int num3 = in1;
     }
     public void method(Object obj){
         pass;
     }
     ```

     基本数据类型，包装类 ----> String类型

     ```java
     // 基本数据类型，包装类 ---- > String类型， 调用String重载的valueOf(Xxx xxx)
     @Test
     public void test1(){
         int num1 = 10;
         // 方式一：连接运算
         String s1 = num1+"";
         
         // 方式二：调用String的valueOf(Xxx xxx)方法
         float f1 = 12.3f;
         String str2 = String.valueOf(f1);
     }
     ```

     String类型 ---- > 基本数据类型，包装类，调用parsexxx，可以将对应的String转换为对应的属性。

     ```java
     // 调用包装类的parsexxx()
     @Test
     public void test1(){
         String str1 = "123";
         int num1 = Integer.parseint(str1);
         System.out.println(num1); // ===》 123
         
         String str2 = "true";
         boolean b1 = Boolean.parseBoolean(str2);
         System.out.println(b1); // ====> true
     }
     ```

     

8. 常用方法：

   - clone() ：创建并复制该对象， p2 = p1.clone()
   - equals(), 比较两个对象是否相等
   - finalize(), 垃圾回收，当该对象没有变量指向它的时候，就会自动调用这个方法

9. 注意：

   1. 自动类型提升：

      ```java
      Object o1 = true ? Integer(1) : Double(2.0);
      // 这里面就存在着自动类型提升的一部分，因为是要给o1赋值的，所以编译器需要事先确定好赋值的类型，一个是Integer 一个是Double 所以需要自动类型提升
      System.out.println(o1); // =======》 1.0
      ```

   2. Integer内部的IntegerCache结构：

      ```java
      public void test3() {
          Integer i = new Integer(1);
          Integer j = new Integer(1);
          System.out.println(i == j);   // ====== false
          
          // Integer内部定义了IntegerCache结构，IntegerCache中定义了Integer[]，保存了-128~127范围内整数，如果我们使用自动装箱的方式，给Integer赋值的范围在-182~127内时，可以直接使用数组中的元素，不用再去new了
          // 提高效率
          Integer m = 1;
          Integer n = 1;
          System.out.println(m == n); // ====== true
          
          Integer x = 128;
          Integer y = 128;  // 相当于new了一个Integer对象
          System.out.println(x == y); // ==== false
      }
      ```

### Vector可扩展数组

Vector在使用的时候可以给定数组长度，达到预期长度，减少扩展次数

```java
Vector v = new Vector();
// 添加数据
v.addElement(Object obj);
v.elementAt(Object obj);
```





## 面向对象的三大特称（封装性，继承性，多态性（抽象性））

### 面向对象的特征一：封装和隐藏

高内聚 低耦合

高内聚：类的内部数据操作细节自己完成，不允许外部干涉

低耦合：仅对外暴露少量的方法用于自己使用

隐藏对象内部的复杂性，之对外公开简单的接口。便于外界调用，从而提高系统的可扩展性，可维护性。通俗的说，把该隐藏的隐藏，该暴露的暴露出来，这就是封装性的设计思想

1. 问题的引入：

   - 当我们创建一个类的对象之后，我们可以通过“对象.属性”的方式。对对象属性进行赋值，这里赋值操作要受到属性的数据类型和存储范围的制约，但是除此之外，没有其他制约条件。但是在实际问题中，我们往往需要给属性赋值加入额外的限制条件，这个条件就不能再属性声明时体现，我们只能通过方法来进行限制条件的添加，同时我们需要避免用户在使用“对象.属性”的方式，对属性进行赋值，则需要将属性，声明为私有的**private**   ---> 此时，针对属性就体现了封装

2. 封装性的**体现**：

   - 我们将类的属性xxx私有化（private）,同时提供公共的（public）方法来获取(getXxx)和设置(setXxx)，该变量的值
   - 拓展：封装性的体现①如上②不对外暴露私有的方法③单例模式……

3. 封装性的体现，需要权限修饰符来配合

   1. java规定的4种权限修饰符（从小到大）private, 缺省, protected, publi

      

   2. |  修饰符   | 类内部 | 同一个包 | 不同包的子类 | 同一个工程 |
      | :-------: | :----: | :------: | :----------: | :--------: |
      |  private  |   √    |          |              |            |
      | （缺省）  |   √    |    √     |              |            |
      | protected |   √    |    √     |      √       |            |
      |  public   |   √    |    √     |      √       |     √      |

   3. 四种权限可以用来修饰类及类的内部结构：属性，方法，构造器，内部类

   4. 具体的，四种权限都可以用来修饰类的内部结构，属性，方法，构造器，内部类

      修饰类的话只能使用：缺省，public

   5. 总结：Java提供了4中权限修饰符来修饰类的内部结构，体现类及类的内部结构在被调用时的可见性大小
   
4. 类的结构三：构造器（或构造方法，constructor）的使用

   	construct：建设，建造。construction

   - 构造器的作用：创建对象，初始化对象信息
   - 说明
     - 如果没有显式的定义类的构造器的话，则系统默认提供一个空参的构造器
     - 定义构造器的格式：权限修饰符 类名（形参列表）{}
     - 一个类中定义的多个构造器，彼此构成重载
     - 一旦我们显示的定义类的构造器后，系统不再提供默认的空参构造器
     - 一个类中至少有一个构造器
   
5. 总结：属性赋值的先后顺序

   1. 默认初始化
   2. 显式初始化
   3. 构造器中赋值
   4. 通过“对象.方法” 或“对象.属性”赋值
      - 以上操作先后顺序 1,2,3,4

### 继承性

1. 继承性的好处
   - 减少了代码的冗余。提高了代码的复用性
   - 便于功能的扩展
   - 为了以后多态性的使用，提供了前提
2. 继承性的格式：class A extends B{}
   - A：子类，派生类，subclass
   - B：父类，超类，基类，superclass
     - 体现：一旦子类A继承父类B以后，子类A中就获取了父类B中声明的所有的属性和方法。特别的，父类中声明为private的属性和方法，子类继承父类之后，仍然认为获取了父类中私有的结构。只是应为封装性的影响，使得子类不能调用父类中的结构而已
     - 子类继承父类之后，还可以声明自己特有的属性和方法，实现功能的扩展
       - 子类和父类的关系不同于，子集和集合的关系
       - extends 扩展，延展
3.  Java中关于继承性的规定
   1. 一个类中可以背多个子类继承
   2. Java中类的单继承性，一个类只能有一个父类
   3. 子父类是相对的概念
   4. 子类解释继承的父类，称为直接父类，间接继承的父类称为间接父类
   5. 子类继承父类之后，就获取了直接父类以及所有间接父类中声明的属性和方法
4. 如果我们没有显式的声明一个类的父类的话，则此继承于java.lang.Object类
5. 所有的Java类除（java.lang.Object类之外）都直接或间接的继承于java.lang.Object类
6. 意味着，所有的java类具有java.lang.Object类中所有声明的功能

### 多态性

1. 理解多态性：

   如果想要调用子类种的方法的话，你需要在父类中也有这个方法，在子类重写之后你调用的这个方法在父类种也可以使用

   ```jav
   // 如果Man 和 Woman 是Person的子类
   Person p = new Man()   // 这就是多态性
   ```

2. 何为多态性

   对象的多态性，父类的引用指向子类的对象（或子类的对象赋给父类引用）

3. 多态性的使用：虚拟方法调用

   有了对象的多态性以后，我们在编译期只能调用父类中声明的方法，但在运行期，我们执行的是子类重写父类的方法

   总结：编译，看左边，运行，看右边

4. 多态性使用前提

   1. 类的继承关系
   2. 方法的重写

5. 对象的多态性，只适用于方法，不适用与属性

6. 虚拟方法的调用

   1. 正常方法调用：

      ```java
      Person e = new Person();
      e.getinfo();
      Student e = new Student();
      e.getinfo();
      ```

   2. 虚拟方法调用（多态情况下）

      ```java
      // 子类中定义了与父类同名同参数的方法，在多态情况下，此时父类方法称为虚拟方法，父类根据赋给它不同子类的对象，动态调用属于子类的该方法。这样方法的调用在编译期是无法确定的,是运行时行为
      Person e = new Student();
      e.getinfo(); // 调用Student类的getinfo()方法
      ```

7. 多态性使用的时候不能调用子类特有的方法和属性

   有了对象的多态性之后内存中实际上是加载了子类特有的属性和方法的，但是由于变量声明为父类类型，导致编译时，只能调用父类中声明的属性和方法，子类特有的属性和方法不能够调用

8. 如何才能调用子类特有的属性和方法？

   向下转型，使用强制类型转换符

   Man m1 = (Man)p2; 

   但是在使用强制类型转换的时候，可能会出现ClassCastException的异常，这时候我们可以使用instanceof关键字来规避这个错误



## 其他关键字this，super， static ,final,abstract,interface



 ### this关键字的使用：

1. this可以用来修饰：属性，方法，构造器

2. this修饰属性和方法：

   this理解为当前对象

   在类方法中，我们可以使用“this.属性”或者“this.方法”的方式，调用当前对象属性或方法。但是通常情况下，我们选择省略"this."，特殊情况下，如果方法的形参和类的属性同名这时候我们就需要使用this关键字，表明此变量是属性，而非形参

   ```java
   class text{
       int age;
       String name;
       public setAge(int age)
       {
           // 前面使用this来表示前面的age是属性，后面的age是形参
           this.age = age;
       }
   }
   ```

3. this调用构造器

   1. 我们在类的构造器中，可以显式的使用“this(形参列表)”方式，调用本类中其他的构造器
   2. 构造器中不能通过"this(形参列表)"方式调用自己
   3. 如果一个类中有n个构造器，则最多有n-1个构造器啊使用“this(形参列表)”
   4. 规定：“this（形参列表）“必须声明在当前构造器的首行
   5. 构造器内部，最多只能声明一个”this(形参列表)“,用来调用其他的构造器

### package关键字的使用

1. 为了更好的实现项目中类的管理，提供包的概念

2. 使用package声明类或接口所属的包，声明在源文件首行

3. 包，属于标识符，遵循标识符的命名规则。规范（xxxyyyzzz），“见名知意”

4. 每“.”一次，就代表一层文件目录

5. 补充，

   1. 同一个包下，不能命名同名的接口，类；
   2. 不同包下，可以命名同命的接口，类

   

 

| java.lang | 包含一些java语言常用的核心类，如String，Math，Integer，System和Thread，提供常用功能 |
| --------- | ------------------------------------------------------------ |
| java.net  | 包含执行与网络相关的操作的类和接口                           |
| java.io   | 提供多种输入输出功能的类                                     |
| Java.util | 包含一些实用的工具类，如 定义系统特征，接口集合框架类，使用与日期日历相关的函数 |
| java.text | 包含了一些java格式化相关的类                                 |
| java.sql  | 包含了java进行jdbc数据库编程的相关类/接口                    |
| java.awt  | 包含了构成了抽象窗口工具集（abstract window toolkits）的多个类，这些类用来构建和管理应用程序的图像化界面（GUI） |

 ### import关键字的使用

import导入：

1. 在源文件中显示的使用import结构导入指定包下面的类，接口

2. 声明在包的声明和类的声明之间

3. 如果需要导入多个结构，则并列写出即可

4. 可使用“xxx.*”的方法，表示可以导入xxx包下的所有结构

5. 如果使用的类或接口是java.lang包下定义的，则可以省略import结构

6. 如果使用的类或接口是本包下定义的，则可以省略import结构

7. 如果在源文件中，使用了不同包下的同名的类，则必须至少有一个类需要以全类名的方式显示

   ```java
   // 其中import 是关键字，project1是包名，"."后面的是包中的类名
   import project1.First;
   // 全类名的显示方式
   project1.First f1 = new project1.First();
   ```

8. 使用“xxx.*”方式表明可以调用xxx包下面的所有结构。但如果使用的是xxx包下面的子结构，则仍需要显示导入

9. import static：导入的指定类或接口中的静态结构（不是类）：属性，或方法



### super关键字的使用

super关键字：

1. super理解为：父类的
2. super可以用来调用：属性，方法，构造器
3. super的使用：调用属性或方法
   1. 我们可以在子类的方法或构造器中，通过使用“super.属性”或“super.方法”的方式，显示调用父类中声明的属性或方法，但是通常情况下，我们习惯省略super
   2. 特殊情况：当子类和父类中定义了同名的属性的时候，我们想要在子类中调用父类声明的属性的时候，则必须显式的使用“super.属性”的方式，表明调用的是父类中声明的属性
   3. 特殊情况：当子类重写了父类中的方法之后，我们想要在子类的方法中调用父类的中被重写的方法的时候，则必须显式的使用“super.方式”的方法，表明调用的是父类中被重写的方法
4. super调用构造器
   1. 我们可以在子类的构造器中显示的使用“super（形参列表）”的方式，调用父类中声明的指定的构造器
   2. “super(形参列表)”的使用，必须声明在子类构造器的首行！！！！
   3. 我们在类的构造器中，针对与“this(形参列表)”或“super(形参列表)”，只能二选一，不能同时出现
   4. 在构造器的首行，没有显式的声明“this(形参列表)”或“super(形参列表)”，则默认调用的是父类中空参的构造器
   5. 在类的多个构造器中，至少有一个类的构造器中使用了“super(形参列表)”，调用父类中的构造器

### instanceof关键字的使用

1. 用法：  a instanceof A：判断对象a是否是类A的实例，如果是，返回True，如果不是返回False,

   要求a 所属类与A必须是子类或者父类的关系，否则编译会出现错误

2. 目的：为了在多态的时候使用类型强制转换的时候不出现错误：

   ```java
   if(p2 instanceof Woman){ // 这样的话我们就不会出现多态中类型转换出现的错误了
       Woman w1 = (Woman)p2;
       p2.goShopping();
       System.out.println();
   }
   ```

   如果类B是类A的父类：

   	a instanceof A 返回true，则a instanceof B 返回true

   练习

   ```java
   // 问题一：编译时通过，运行时不通过
   // 举例一： 同子类不能互相转换
   Person p3 = new Woman();
   Man m3 = (Man)p3;
   // 举例二： 要想使用类的强制类型转换必须是多态之间的
   Person p4 = new Person();
   Man m4 = (Man)p4;
   // 问题二：编译时通过，运行时也通过：
   Object obj = new Woman();
   Person p = (Person)obj;
   
   // 问题三：编译不通过：
   Man m5 = new Woman();  // 逻辑语法都不符合， 直接报错
   ```

### static关键字的使用：

目的：为了减少统一变量的空间，例如所有中国人的国籍都是“中国”，这时候我们建立一个中国人的类，这个国籍变量就可以设置为static，就是所有的中国人的实例都共用这一个变量

```java
public class StaticTest {
    public static void main(String[] arg) {
        
        // 静态变量在这时候就可以使用了：
        Chinese.nation = "中国";
        
        Chinese c1 = new Chinese();
        c1.name = "阿里";
        c1.age = 40;
        c1.nation = "China"
        
        Chinese c2 = new Chinese();
        c2.name = "百度";
        c2.age = 50;
        System.out.println(c2.nation);  // 这行代码输出的是 China
        
        c2.nation = "CHN";
        
       	System.out.println(c1.nation);   // 这行代码输出的是 CHN
        
        
    }
}

class Chinese {
    String name;
    int age;
    static	String nation;
}
```



1. static：静态的，随着类的加载而加载
2. static用来修饰。属性，方法，代码块，内部类。
3. 使用static修饰属性：静态变量
   - 属性，按是否使用static修饰，分为 静态属性 VS 非静态属性(实例变量)
     - 实例变量：我们创建了类的多个对象，每个对象都有一套属于自己的非静态属性。修改其中一个的非静态属性，不会影响其它对象里面的属性
     - 静态变量：我们创建了类的多个对象，多个对象共享一套非静态属性。当通过某一个对象修改非静态属性，会导致其他对象调用此静态对象的时候，是修改过的
   - static修饰属性的其他说明：
     - 静态变量随着类的加载而加载，可以通过“类.静态变量”的方式进行调用
     - 静态变量的加载要早于对象的创建。
     - 由于类只会加载一次，则静态变量在内存中也只会存在一份
4. 使用static修饰方法：静态方法
   - 随着类的加载而加载，可以通过“类.静态方法”的方式调用
   - 静态方法种只能调用静态的方法或属性
   - 非静态方法种既可以调用静态方法也可以调用非静态方法或属性
5. static注意点
   - 在静态方法种不能使用this关键字，super关键字
   - 关于静态属性和静态方法的使用。可以从生命周期的角度去理解
6. 开发中，如何确定一个属性是否要声明为static的？
   - 属性可以被多个方法共享，不会随着对象的的不同而不同
   - 操作静态属性的方法，通常设置为static
   - 工具类种的方法习惯上声明为static， 这样就可以直接通过类名来调用，不需要在实例化了



### final关键字的使用：

Final:最终的

1. final可以用来修饰的结构：类，方法，变量

2. final 用来修饰一个类：此类不能被其他的类所继承。不想在扩充功能了

   比如说：String类，System类，StringBuffer类

3. final 用来修饰方法：表明此方法不能够被重写

   比如：Object类中的getClass()

4. final用来修饰变量，此时的“变量”就称为常量

### 抽象类与抽象方法（abstract关键字）

随着继承层次中一个个新子类的定义，类变得越来越具体，而父类则更一般，更通用。类的设计应该保证父类和子类能够共享特征。有时将一个父类设计得非常抽象，以至于它{% label 没有具体的实例 blue %}，这样的类叫做抽象类。



abstract关键字的使用

abstract可以用来修饰的结构：类，方法；

abstract修饰类：

1. 使用abstract修饰的类，不能够创建实例
2. 但是抽象类中有构造器，虽然不能够实例化，但是实例化子类的时候还是可以调用的
3. 在开发中，都会提供抽象类的子类，让子类对象实例化，完成相关操作，如果没有子类的话abstract修饰类就没有意义了

abstract修饰方法：

1. 抽象方法只有声明，没有方法体
2. 包含抽象方法的类，一定是一个抽象类，因为抽象方法没有方法体，如果包含抽象方法的类不是抽象类的话，那么就可以通过类的实例化来调用抽象方法了，这样做显然是不合适的，所以{% label 包含抽象方法的类一定是抽象类 red %}，反之抽象类中不一定包含抽象方法
3. 如果子类重写了父类中所有的抽象方法后，此类方法可以实例化
4. 如果子类没有重写父类的所有抽象方法，那么此子类也是一个抽象类，需要使用abstract修饰

```java
public class AbstractTest {
//    如果一个类是抽象类的话，直接这样实例化是会报错的
//    Person p = new Person();

}

abstract class Person {
    String name;
    int age;

    public Person(){

    }

    public Person(String name, int age){
        this.name=name;
        this.age = age;
    }

    public void eat(){
        System.out.println("人吃饭");
    }

    public void walk(){
        System.out.println("人走路");
    }

//    定义抽象方法
    public abstract void speak();

}

// 如果父类中有抽象方法的话并且子类中没有重写父类中的抽象方法的话，那么子类必须使用
// abstract修饰，否则会报错
class student extends Person {
//    虽然父类使用abstract修饰之后不能够直接使用构造器调用，但是子类可以调用父类的构造器
    public student(String name,int age){
        super(name,age);
    }

//    如果子类重写了父类中所有的抽象方法的话，那么子类就可以不适用abstract修饰了
    public void speak(){
        System.out.println("学生说话");
    }
}
```

abstract使用上的注意点：

1. abstract不能用来修饰属性，构造器等结构
2. abstract不能用来修饰{% label 私有方法 blue %}和{% label 静态方法 blue %}和{% label final的方法 blue %}，因为使用abstract修饰的方法必定会被子类重写，但是私有化方法子类又不能重写，这样会导致矛盾，静态方法在子类中虽然能够构造同名同参数的方法，但是不认为这两个方法是同一个，final修饰的方法，不能够被重写

#### 匿名类：

```java
public class PersonTest {
    public static void main(String[] args){

//        这是匿名对象，实名类，但是实例化对象的时候没有对象名字，称为匿名对象
        method(new student());

//        非匿名的类非匿名的对象
        Worker worker = new Worker();
        method1(worker);

//      非匿名类，匿名对象
        method1(new Worker());

//        创建了一个匿名子类对象 因为子类是匿名的，所以我们只用父类对象即可
        Person p = new Person(){
            public void speak() {
                System.out.println("我是抽象类");
            }
        };

        method1(p);

//        创建匿名子类匿名对象
        method1(new Person(){
            public void speak(){
                System.out.println("我是匿名子类匿名对象");
            }
        });
    }

    public static void method(student s){

    }

    public static void method1(Person p){
        p.speak();
    }
}
class Worker extends Person {
    @Override
    public void speak() {
        System.out.println("工人想要发表声明");
    }
}
```

最后运行结果为：

工人想要发表声明
工人想要发表声明
我是抽象类
我是匿名子类匿名对象

#### 多态的应用

模版方法设计模式：

应用场景：当我们在构造一些功能的时候，功能内部一部分是确定的，一部分是不确定的，这时候我们可以把不确定的哪一部分暴露出去，让子类去实现。

换句话说：我们在设计一个算法的时候，整体步骤很固定，通用，这些步骤已经在父类中写好了。但是某些部分易变，易变的部分，可以抽象出来，供不同的子类实现，这就是一种模板形式

```java
public class TemplateTest {
    public static void main(String[] args){
        SubTemplate subTemplate = new SubTemplate();
        subTemplate.spendTime();
    }
}

abstract class Template {
    public void spendTime(){
        long start = System.currentTimeMillis();

        code(); // 这里就是不确定的部分，易变的部分

        long end = System.currentTimeMillis();
        System.out.println("花费的时间为："+(start-end));
    }

    public abstract int code();
}

class SubTemplate extends Template{
    public int code(){
        int sub = 0;
        int i, j;
        for(i = 1; i < 1000; i++){
            for(j = 1; j < Math.sqrt(i) ; j++){
                if(i % j != 0){
                    break;
                }
            }
            if(j == i){
                sub++;
            }
        }
        return sub;
    }
}	
```



### 接口（interface）

再生产模式中，我们通常需要从几个类中派生出一个子类，继承他们所有的属性和方法，但是JAVA不支持多重继承。有了接口，就可以 得到多重继承的效果

另一方面，有时必须从几个类中抽取出一些共同的行为特征，而它们之间又没有is-a的关系，仅仅是具有相同的行为特征而已。例如:鼠标、键盘、打印机、扫描仪、摄像头、充电器、MP3机、手机、数码相机、移动硬盘等都支持USB连接。
接口就是规范，定义的是一组规则，体现了现实世界中“如果你是/要...则必须能...”的思想。{% label 继承是一个"是不是"的关系，而接口实现则是"能不能"的关系。 blue %}
接口的本质是契约，标准，规范，就像我们的法律一样。制定好后大家都要遵守。

接口的使用：

1. 接口使用interface来定义
2. Java中，接口和类是并行的两个结构
3. 如何定义接口，定义接口中的成员：
   1. JDK7及以前只能：定义全局常量和抽象方法
      1. 全局常量：public static final的，但是可以省略不写
      2. 抽象方法：public abstract的
   2. JDK8：除了可以定义全局常量和抽象方法之外还可以定义静态方法（public static void 方法名），默认方法（public default void 方法名）
      1. 接口中定义的静态方法只能接口自己调用
      2. 实现类中可以调用接口中的默认方法，如果实现类重写了接口中的方法的话，调用的时候仍会调用重写的方法
      3. 如果子类（或实现类）继承父类和实现的接口中同名同参数的默认方法，那么子类在没有重写此方法的时候，默认调用的是父类中的同名同参数的方法 ---> 类优先原则
      4. 如果实现类实现了多个接口，而这多个接口中定义了同名同参数的默认方法，那么在类没有重写这个方法的时候，报错：--->接口冲突
         1. 解决方法：我们需要在类中重写此方法
      5. 调用接口中的默认方法：
         1. 如果要调用接口中的静态方法直接通过 {% label 接口.静态方法 blue %}这种方式来进行调用
         2. 如果想要调用接口中的默认方法的话，需要通过{% label 接口.super.默认方法 blue %}这种方法来进行调用
4. 接口中不能定义构造器！ 意味着接口不能够实例化 
5. 在JAVA中，接口通过让类实现（implements）的方式来使用
   1. 如果实现类覆盖了接口 中的所有抽象方法，则此实现类可以实例化
   1. 如果实现类没有覆盖接口中的所有抽象方法，则次实现类仍未一个抽象类
6. Java类可以实现多个接口 --->弥补了Java单继承的局限性
   1. 格式：class AA extends BB implements CC,DD,EE....
7. 接口和接口之间可以继承，也可以多继承
8. 接口的具体使用，体现多态性
9. 接口实际上可以看做一种规范

接口的使用：

1. 接口的使用上也满足多态性

```java
public class InterfaceTest {
    public static void main(String[] args){
        System.out.println(Flyable.MAX_SPEED);
        System.out.println(Flyable.MIN_SPEED);

        Plane plane = new Plane();
        plane.fly();

        Bullet bullet = new Bullet();
        bullet.fly();
        bullet.attack();

    }
}

interface Flyable{
    // 全局常量
    public static final int MAX_SPEED = 7900;
    int MIN_SPEED = 1; // 省略前面的修饰词也可以

    // 抽象方法
    public abstract void fly();

    void stop();
}


class Plane implements Flyable{

    @Override
    public void fly() {
        System.out.println("通过引擎起飞");
    }

    @Override
    public void stop() {
        System.out.println("驾驶员减速停止");
    }
}

interface AttackAble{
    void attack();
}


// 实现多个接口
class Bullet extends Object implements Flyable,AttackAble{

    @Override
    public void fly() {
        System.out.println("子弹飞");
    }

    @Override
    public void stop() {
        System.out.println("子弹停");
    }

    @Override
    public void attack() {
        System.out.println("子弹攻击");
    }
}
```

接口应用的{% label 代理模式 blue %}：

代理模式：是JAVA开发中使用较多的一种设计模式，代理设计就是为了其他对象提供一种代理以控制这个对象的访问

接口报错：

```java
interface A{
    int x = 0;
}

class B{
    int x = 1;
}

class C extends B implements A {
    public void pX(){
        // 这时候会报错，因为x不明确，不知道是调用父类的还是接口中的
       	// System.out.println(x);
        
        // 下面这种方法不会报错
        System.out.println(super.x);
        System.out.println(A.x);
    }
    
    public static void main(String[] args){
        new C().pX();
    }
}
```

接口排错：

```java
interface P1ayable{
	void play();
}

interface Bounceab1e {
    void play();
}

interface Ro1lable extends Playable,Bounceable{
    Ball ba11 = new Ba11( "PingPang");
}
class Ba11 implements Rollable{
    private String name;
    
    public String getName() {
        return name;
    }
    
    public Ba11(String name){
		this.name = name;
    }
    
    // 这里重写的是将两个接口中的play方法都重写了
    public void play(){
        
        // 这里就有问题了 因为ball这个字符，在接口中定义过是一个final型的 变量，不能够从新赋值
        ball = new Ba11( "Footba11");
		system.out.print1n( bal1.getName());
    }
}



```





## 设计模式：

设计模式：设计模式是在大量的实践中总结和理论化之后优选的代码结构、编程风格、以及解决问题的思考方式。设计模免去我们自己再思考和摸索。式就像是经典的棋谱,不同的棋局，我们用不同的棋谱，”套路”

1. 单例模式：所谓类的单例设计模式，就是采取一定的方法保证在整个的软件系统中，对某个类只能存在一个对象实例，并且该类只提供一个取得其对象实例的方法，如果我们要让类在一个虚拟机中只能产生一个对象，我们首先必须将类的{% label 构造器的访问权限设置为private blue %},这样，就{% label 不能用new操作符在类的外部产生类的对象了 blue %}，但在类内部仍可以产生该类的对象。因为在类的外部开始还无法得到类的对象，只能调用该类的某个静态方法以返回类内部创建的对象，静态方法只能访问类中的静态成员变量，所以，指向类内部产生的该类对象的变量也必须定义成静态的。

   ```java
   /**
    *单例设计模式：
    * 1. 单例设计模式，就是采用一定的方法保证在整个软件系统中该类只有一个实例对象
    *
    * 2. 实现方法：
    * 		饿汉式 VS 懒汉式
    *      饿汉式
    *      1. 私有化类的构造器，目的就是为了防止在 该类外面创建这个类的实例
    *      2. 在该类内部创建类的对象(静态)
    *      3. 提供公共的方法（静态）来调用这个类中创建的对象
    *      懒汉式
    *      1. 私有化类的构造器，目的就是为了防止在 该类外面创建这个类的实例
    *      2. 声明当前类的对象，没有初始化， 设置为null
    *      3. 声明public static的返回当前类的方法
    *          3.1 在该方法中进行 类的声明
    *          3.2 在声明前需要 判断一下该对象是否为null，如果是的话在进行实例化，如果不是的话直接返回
    *      饿汉式：坏处：对象一开始就存在，存在时间过长
    *      懒汉式：好处：什么时候使用是么时候在开始创建，
    *
    *
    */
   ```

   ```java
   // 饿汉式
   public class SingletonTest1 {
       public static void main(String[] args) {
           Bank instance1 = Bank.getInstance();
           Bank instance2 = Bank.getInstance();
   
           System.out.println(instance1 == instance2);
       }
   }
   
   class Bank {
       // 1. 私有化类的构造器
       private Bank() {
   
       }
   
       // 2. 在该类内部创建类的对象
       private static Bank instance = new Bank();
   
       // 3. 提供公共的方法返回类的对象
       public static Bank getInstance() {
           return instance;
       }
   }
   ```

   ```java
   public class SingletonTest2 {
       public static void main(String[] args) {
           Order order1 = Order.getInstance();
           Order order2 = Order.getInstance();
   
           System.out.println(order1 == order2);
       }
   }
   
   class Order {
       // 1.私有化类的构造器
       private Order(){
   
       }
       // 2. 声明当前类的对象，没有初始化
       // 4. 此对象需要声明为static
       private static Order instance = null;
       // 3. 声明public static的返回当前类的方法
       public static Order getInstance() {
           if (instance == null) {
               instance = new Order();
           }
           return instance;
       }
   }
   ```

   - 单例模式的应用场景：

     网站的计数器，一般也是单例模式实现，否则难以同步。
     应用程序的日志应用，一般都使用单例模式实现，这一般是由于共享的日志文件一直处于打开状态，因为只能有一个实例去操作，否则内容不好追加。数据库连接池的设计一般也是采用单例模式，因为数据库连接是一种数据库资源。
     项目中，读取配置文件的类，一般也只有一个对象。没有必要每次使用配置文件数据，都生成一个对象去读取。
     Application也是单例的典型应用
     Windows的Task Manager(任务管理器)就是很典型的单例模式
     Windows的Recycle Bin(回收站)也是典型的单例应用。在整个系统运行过程中，回收站一直维护着仅有的一个实例。

     

2. 创建型模式：共5种:工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。

3. 结构型模式，共7种:适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。

4. 行为型模式，共11种:策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式
   状态模式、访问者模式、中介者模式、解释器模式。

## main函数的使用方发

main() 方法的使用说明：

public static void main(String[] args)

1. mian()方法作为程序入口
2. mian()方法也是一个普通的静态方法
3. mian()方法也可以作为我们与{% label 控制台 blue %}的交互方法。传入参数为args数组中的元素

   操作方法：运行时：java "TOM" "123" "ture" "false"

   这样的操作 就是把后面这四个元素放到String类型的数组 args中

## 赋值的先后顺序

对象赋值可使用的位置，

1. 默认初始化
2. 显示初始化
3. 在代码中赋值
4. 在构造器中初始化
5. 有对象之后可以通过“对象.属性”或“对象.方法”的方式，进行赋值

执行先后顺序为 1-> 2 /3(不分先后谁在前谁先赋值) ->4 -> 5

- 默认初始化： 在你创建变量的时候就会初始化赋值，例如在创建变量的时候会默认赋值，例如，int型默认值为0，浮点型默认型为0.0，bool型默认为true
- 显示初始化：我们手动的给他赋值，例如a = 10
- 在代码块中赋值 字面意思

# 每天一考

1. 如何实现向下转型？需要注意什么？如何解决此问题

   向下转型的目的就是使父类对象能够调用子类的方法

   使用强转符：（）

   Person p = new Man()

   Man m = (Man)p

   如果转换失败的话会报ClassCastException异常，为了避免这个错误，我们在进行强制类型转换之前，先进行instanceof 判断一下被转换目标

   if (p instanceof Man){

   	Man m = (Man)p;

   }

2. {% label  和equals() 区别：blue %}： 
    可用于基础数据类型，也可用于引用数据类型，用于基础数据类型的时候比较的是两个数据的值相等就返回true，如果是引用数据类型的话，就是要比较这两个引用数据类型地址是否相等

   equals：是一个方法，只能比较引用数据类型，在没有重写的时候，和==的用法是相同的，都是比较地址，如果重写之后就能够比较引用数据变量内的具体的值

3. 8种数据类型及其对应的包装类：

   int Integer

   char Character

4. 基本数据类型，包装类，String三者之间如何转换

   基本数据类型，和包装类，使用自动装箱和拆箱

   前两者和String之间的

   基本数据类型， 包装类-->String：使用String中的方法 valueOf(xxx)

   String --> 基本数据类型，包装类：使用包装类种的方法 parseXxx(String s)

5. 对多态性的理解：

   实现代码的通用性 

   抽象类和接口肯定体现了多态性。(抽象类和接口不能实例化)

   多态性是运行时行为

6. static修饰的属性，相较于实例变量，有哪些特别之处：

   1. 随着类的加载而加载
   2. 早于对象的创建
   3. 只要权限允许，可以通过“对象.static 属性”的方式进行调用
   4. 存在于方法区的静态域中

7. final可以用来修饰那些结构，分别表示什么意思：

   1. final可以用来修饰的结构：类，方法，变量

   2. final 用来修饰一个类：此类不能被其他的类所继承。不想在扩充功能了

      比如说：String类，System类，StringBuffer类

   3. final 用来修饰方法：表明此方法不能够被重写

      比如：Object类中的getClass()

   4. final用来修饰变量，此时的“变量”就称为常量

8. 类的属性赋值位置有哪些？先后顺序为什么

   1. 默认初始化
   2. 显示赋值
   3. 代码块赋值
   4. 构造器赋值
   5. “对象.属性”或者 “对象.方法” 赋值

9. 小结:一叶知秋
   publicstaticvoidmain(String[] args){//方法体}
   权限修饰符: private缺省protected pubilc ---->封装性
   修饰符: static \ final \ abstract \native可以用来修饰方法返回值类型:无返回值/有返回值-->return
   方法名:需要满足标识符命名的规则、规范;"见名知意"
   形参列表:重载vs重写;参数的值传递机制;体现对象的多态性方法体:来体现方法的功能

   方法体:来体现方法的功能

# 异常处理

![image-20220425093701784](https://s2.loli.net/2022/11/04/1iYqI5AftVeCvHN.png)

## 异常体系结构：

java.lang.Throwable:

1. java.lang.Error:重大错误异常，一般不编写针对性的代码进行处理
2. java.lang.Exception：可以进行异常处理
   1. 编译时异常（checked）
      - IOException
        - FileNotFoundException
      - ClassNotFoundException
   2. 运行时异常（unchecked）
      - NullPointerException
      - ArrayIndexOutOfBoundsException
      - ClassCastException
      - NumberFormatException
      - InputMismatException
      - ArithmeticException

异常实例：

```java
@Test
    // NullPointerException 空指针异常
    public void test1(){
        int[] arr = null;
        System.out.println(arr[3]);
    }

    @Test
    // ArrayIndexOutOfBoundsException  数据越界
    public void test2(){
        int[] arr = new int[3];
        System.out.println(arr[3]);
    }

    @Test
    // ClassCastException  类型转换失败
    public void test3(){
        Object obj = new Person();
        String str = (String)obj;
    }


    @Test
//    NumberFormatException  数据转化失败
    public void test4(){
        String str = "123";
        str = "abc";
        int num = Integer.parseInt(str);
    }

    @Test
    // InputMismatchException 输入的类型和我们想要的类型不相同
    public void test5(){
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        System.out.println(num);
    }

    @Test
    // ArithmeticException 算数异常
    public void test6(){
        int a = 10;
        int b = 0;
        System.out.println(a/b);
    }
```

## 异常处理机制

JAVA处理异常的情况，是将异常处理的程序代码集中在一起，与正常的程序代码分开，是程序简洁，优雅，并易于维护

异常的处理：抓抛模型

过程一：“抛”：程序在正常执行的时候，一旦出现异常，就会在异常代码处生成一个对应的异常类的对象，并将这个对象抛出。一旦抛出对象之后，其后代吗就不再执行

关于异常对象的产生：

- 系统自动生成的异常对象
- 手动生成一个异常对象，并抛出（throw）

```java
public class ExceptionTest3 {
    public static void main(String[] args){
        Student s = new Student();
        s.regist(-1001);
        System.out.println(s);
    }

}

class Student{
    private int id;
    public void regist(int id){
        if( id > 0 ){
            this.id = id;
        }
        else{
            // 这里的作用是当id输入有误的时候停止程序运行
            // 使用这种方式只能让用户知道id输入错误，但是后面的程序依旧会执行
            // System.out.println("id输入不合法");
            
            // 使用这种方法当id输入不合法的时候会自动抛出一个异常，让该语句之后的语句都不再执行
			throw new RuntimeException("ID输入不合法！");
            
        }
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                '}';
    }
}
```



过称二：“抓”：可以理解为异常的处理方式① try - catch - finally,②throws

### 方式一：try - catch - finally

try{
    // 可能出现异常的代码
}catch(异常类型1,变量名1){
    // 处理方法1
}catch(异常类型2,变量名2){
    // 处理方法2
}catch(异常类型3,变量名3){
    // 处理方法3
}
...
finally{
    // 一定会执行的代码
}

说明：

1. finally是可选的
2. 使用try将可能的出现错误的代码包装起来，在执行过程中，一旦出现异常，就会生成一个对应的异常类，根据此对象的类型，去catch中匹配
3. 一旦try中异常对象匹配到某一个catch时，就进入catch中进行异常处理，一旦处理完成就跳出当前的try - catch结构（在没有写finally的情况下），继续执行其后面的代码 
4. catch中异常类型如果没有子父类关系，则谁声明在上，谁声明在下无所谓，如果有子父类的关系则要求子类一定要声明在父类上面，否则报错
5. catch中常用的异常处理方式①String getMessage()  ②printStackTrace() 
6. 在try结构中声明的变量，再出了try结构以后就不能够再调用了
7. try - catch  - finally结构可以相互嵌套

体会1：使用try - catch - finally处理编译时异常的时候，使得在编译时不报错，但是运行的时候可能会报错。相当于我们使用try-catch - finally将一个编译时可能出现的异常，延迟到运行时出现

体会2：开发中，由于运行时异常比较常见，所以我们通常不针对运行时异常编写try - catch - finally了，针对编译时异常，我们一定要考虑异常的处理。

```java
public void test1(){
    int[] arr = null;
    try{
        System.out.println(arr[3]);
    }catch(NullPointerException e){
        System.out.println("空指针异常");
    }catch(IndexOutOfBoundsException e){
        System.out.println("索引超范围异常");
    }

}
```

{% label finally的使用： blue %}

1. finally是可选的
2. finally中声明的是一定会执行的代码，即使catch中又出现异常了，try中有return语句，catch中有return语句的情况，如果出现以上几种情况的话，try - catch 结构后面的语句就不会运行了，如果有finally语句的话，即使出现上面的情况的话，finally里面的语句也会被执行
3. 像数据库，输入输出流，网络编程Socket等资源中，JVM是不能够自动回收的，我们需要自己手动的进行资源的释放。此时资源的释放，就需要声明在finally中



### 方式二：throws + 异常类型

1. "throws + 异常类型"写在方法的声明处，指明此方法执行时，可能会抛出的异常类型，一旦方法体执行的时，出现异常，仍会在异常代码处生成一个异常的对象，此对象满足throws后异常类型时，就会被抛出，异常后面的代码不会再执行！！！

2. 体会：try - catch - finally真正的将异常给处理掉了。

   			 throws的方式只是将异常抛给了方法的调用者。并没有真正的将异常处理掉

3. 开发中如何选择try - catch - finally 还是throws 方式来处理异常

   - 如果父类中的方法没有进行throws方式来进行处理异常， 那么子类重写该方法的时候也不能使用throws方式来处理异常，但是如果子类中重写的方法真的有异常的话，只能使用try-catch-finally的方式来进行处理
   - 在执行方法a的时候，又先后调用了另外几个方法，这几个方法是递进关系执行的，我们建议这几个方法使用throws方式来进行处理，而执行方法a可以使用try- catch-finally来进行处理

```java
public class ExceptionTest2 {

    // 当main函数调用method2的时候 这个异常就必须在这个函数这处理了，因为这是最后一个函数了。必须要在这个函数中解决这个问题
    public static void main(String[] args){
        try{
            method2();
        }catch(IOException e){
            e.printStackTrace();
        }

    }

    // method2 调用者method1 的时候有两种情况
    // 情况一：使用try - catch - finally 来处理这个异常
    // 情况二：使用throws 方法将这个问题在抛出，不解决，谁调用method2谁解决这个问题
    public static void method2() throws IOException{
        method1();
    }

    // 最上面throw后面的异常，是这个方法中可能出现的异常情况，但是只是抛出异常不处理，谁调用这个函数谁处理
    public static void method1() throws FileNotFoundException, IOException {
        File file = new File("hello.txt");
        FileInputStream fis = new FileInputStream(file);

        int data = fis.read();
        while( data != -1){
            System.out.print((char)data);
            data = fis.read();
        }

        fis.close();

    }
}

```

### 方法重写规则之一：

子类重写的方法抛出的异常类型不能大于父类被重写的方法抛出的异常类型

 ## 自定义异常类

1. 继承与现有的异常结构：RuntimeException, Exception

2. 提供全局常量：serialVersionUID

3. 提供重载的构造器 

   ```java
   public class MyException extends RuntimeException{
       static final long serialVersionUID = -4648468498468487L;
       
       public MyException(){
           
       }
       
       public MyException(String msg){
           super(msg);f
       }
   }
   ```



## 异常的测试

```java
public class EcmDef {
    public static void main(String[] args) throws Exception {
        try{
            int a = Integer.parseInt(args[0]);
            int b = Integer.parseInt(args[1]);
            double result = ecm(a, b);
            System.out.println("结果为"+result);
        }catch(NumberFormatException e){
            System.out.println("数据类型不一致");
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("缺少命令行参数");
        }catch(ArithmeticException e){
            System.out.println("除零");
        }catch(NegativeException e){
            e.getMessage();
        }
    }

    public static int ecm(int i, int j) throws Exception {
        if(i < 0 || j < 0){
            throw new NegativeException("不能输入负数");
        }
        return i/j;
    }
}
```

throw 和 throws的区别：

- throw是生成一个异常的方式
- throws是异常处理的一个方式

世界上最遥远的距离，是我在if里你在else里，似乎一直相伴又永远分离;

世界上最痴心的等待，是我当case你是switch，或许永远都选不上自己;

世界上最真情的相依,是你在try我在catch。无论你发神马脾气，我都默默承受，静静处理。到那时，再来期待我们的finally。



## 面试题

final、 finally、finalize三者的区别?

{% label 类似 blue %}:
throw和throws
Collection和Collections
String . stringBuffer、StringBuilder

ArrayList . LinkedList
HashMap . LinkedHashMap

重写、重载

{% label 结构不相似的 blue %}:

抽象类、接口

==  、 equals()

sleep(). wait()

# 多线程



程序，进程，线程

- 程序：
  - 是为了完成特定的任务，用某种语言编写的一组指令的集合。即一段静态的代码，静态对象
- 进程：
  - 是进程的一次执行过程，或是正在运行的一个程序。是一个动态的过程：有它自身产生，存在和消亡的过程。--生命周期
  - 进程作为资源分配的单位，系统在运行时会为每个进程分配不同的内存区域
- 线程：
  - 进程可以进一步细化为线程，是一个程序内部的一条执行路径
  - 如果一个进程同一时间{% label 并行 blue %}执行多个线程，就是支持多线程的



并行和并发：

并行：多个cpu同时执行多个任务， 多个人做不同的事情

并发：一个cpu同时执行多个任务，多个人做同一件事情



使用多线程的优点：

背景: 以单核CPU为例，只使用单个线程先后完成多个任务（调用多个方法），肯定比用多个线程来完成用的时间更短，为何仍需多线程呢?



多线程程序的优点:
   	1. 提高应用程序的响应。对图形化界面更有意义，可增强用户体验。
   	2. 提高计算机系统CPU的利用率
   	3. 改善程序结构。将既长又复杂的进程分为多个线程，独立运行，利于理解和修改



创建多线程的方法：

1. 通过实现Thread的子类来进行创建

   ```java
   class myThread extend Thread{
       public void run(){
           System.out.println("啊");
       }
   }
   
   class myThreadTest(){
       public static void main(String[] args){
           myThread mythrad = new myThread();
        	// 创建一个线程   
           mythread.start();
           mythread.getName();
           print("b");
       }
   }
   	
   ```

   

   1. 创建一个继承与Thread类的子类

   2. 重写Thread中的run方法 -- >将此线程中需要执行的操作放在run方法中

   3. 创建Thread类的子类对象

   4. 通过此对象调用start（）方法来创建新线程

      - 启动当前线程

      - 调用当前线程中的run方法

      - 问题1：我们不能够直接通过{% label 对象.run blue %}的方法来启用多线程
        - 问题2：如果我们想要在启用一个线程的话，不能够通过已经start后的线程来开启，会报错：
          - ​	我们需要从新创建一个线程对象来进行下一个线程的调用

   5. 如果一个线程中的东西我们只想执行一次的话，我们可以创建一个匿名对象：

   ```java
   public static void main(String[] args){
       new Trhead(){
           public void run(){
   		 // 需要执行的代码：
               for (int i = 0; i < 100 ; i++){
                   if(i % 2 == 0){
                       System.out.println(i)
                   }
               }
               System.out.pirntln(Thread.currentThread.getName())
           }
       }
   }
   ```

   ```java
   public static void main(String[] args){
       MThread mThread = new MThread();
       Thread t1 = new Thread(mThread);
       t1.start()
   }
   ```

   

   

   2. 通过实现Runable这个接口来实现

      1. 创建一个实现了Runable接口的类
      2. 实现类去实现Runable中的抽象方法：run()
      3. 创建实现类的对象
      4. 将此对象作为参数传递到Thread类的构造器中，创建Thread类的对象
      5. 通过Thread类的对象的调用start()

      ```java
      class mThread implements Runable{
          @Override
          public void run(){
              p
          }
      }
      ```

   3. 比较创建线程的两种方式：

      1. 开发中优先选择：实现Runable接口的方式
      2. 原因：
         1. 实现方式没有类的单继承性的局限性
         2. 实现的方式更适合来处理多个线程有共享数据的情况
      3. 联系：Thread类实现了Runable方法：public class Thread implements Runable
      4. 相同点：两种方式都需要重写run()，将线程执行的逻辑声明在run()中
      5. 以上两种方式，要想启动线程，都是要调用Thread类中的start()方法来进行调用的

## Thread类的有关方法

   

   1. void start：启动线程
   2. run：线程在被调度的实行的操作
   3. String getName（）：返回线程的名称
   4. void setName（String Name）：设置该线程的方法
   5. static Thread currentThread（）：返回当前线程，	在Thread子类中就是this，通常使用与主线程和Runnable实现类
   6. static void yield():线程让步
      1. 暂停当前线程，把执行机会让给优先级相同或者更高的线程	
      2. 若队列中没有同优先级的线程，则忽略此方法
   7. join（）：当某个执行流中调用其他线程的join方法，调用线程将会被堵塞，知道join（）方法加入的join线程执行完毕之后自己在开始执行
   8. static void sleep(long millis)
      1. 让当前的线程在指定时间段之内放弃对CPU的控制，使得其他的线程有机会被执行，时间到后从新排队
      2. 抛出InterruptedException异常
   9. stop（）：强制结束线程生命进程，不推荐使用
   10. boolean isAlive（）， 返回bool值，判断线程是否还活着

   ## 线程的调度

   1. 时间片：
   2. 抢占式：
      1. 高优先级的线程抢占CPU

   {% label JAVA的调度方法 blue %}

   1. 同优先线程组成先进先出队列（先到先服务），使用时间片策略
   2. 对高优先级，使用优先调度的抢占式策略

   

   优先级的方法：

   1. getPriority():返回线程优先级
   2. setPriority(int newPriority):改变线程的优先级

   

   - MAX_PRIORITY: 10
   - MIN_PRIORITY: 1
   - NORM_PRIORITY: 5

   一般的时候线程的优先级都为 NORM_PRIORITY ，这个我们可以自己设置

   说明：

   1. 线程创建的时候继承父线程的优先级
   2. 低优先级只是获得调度的概率低，并非一定是在高优先级线程之后才被调用

   

   ## 线程的生命周期

   一个完整的生命周期有以下几种状态：

   1. 新建：当一个Thread类或者其子类的对象被声明创建的时候，新生的状态处于新建状态。
   2. 就绪：处于新建状态的线程被start()后，将进入线程队列等待CPU时间片，此时他已经具备了运行条件，只是还没有被分配到CPU资源
   3. 运行：当就绪的线程被调度并获得CPU资源的时候，便进入了运行状态，run()方法定义了线程的操作和功能
   4. 阻塞：在某种特殊情况下，被人为挂起或执行输入输出操作时，让出CPU并临时终止自己的执行，进入阻塞状态
   5. 死亡：线程完成了它的全部工作，或线程被提前强制性终止，或出现异常导致结束

   ![image-20220517084219625](https://s2.loli.net/2022/11/04/uoSwHCMXq5hj61t.png)

   ## 线程的同步（线程安全）

   1. 问题：

      多个线程的不确定性，引起执行结果的不稳定

      多个线程对账本的{% label 共享 blue %}，会造成操作的不完整性，会破坏数据

   2. 原因：

      某个线程在操作共享数据的时候，在还没有操作完的时候，其他线程也参与进来，这就会导致线程的安全问题

   3. 解决方案：

      当一个线程在操作公共数据的时候，其他线程不能够参与进来，直到这个线程完成了对公共数据的操作之后，其他线程才能进来，这种情况，即使这个线程发生了阻塞，别的线程也不能进来操作

   4. 在Java中我们通过同步机制来解决线程安全问题

      - 方式1：同步代码块

        ```java
        synchronized(同步监视器){
            // 需要被同步的代码
        }
        
        ```

        说明：

        - 操纵共享数据的代码，就是要被同步的代码 ------> 不能够包多，也不能包少
        - 共享数据：多个线程共同操作的数据
        - 同步监视器：俗称 锁。任何一个类的对象都可以充当锁
          - 要求：多个线程必须公用同一把锁
        - 补充：
          - 在实现Runable接口中创建多线程的方法中，我们可以考虑使用this充当同步监视器
          - 在继承Tread类中创建多线程方法中，我们可以考虑使用 类.class 来充当同步监视器

      - 方式2：同步方法：

        - 使用同步方法来解决实现Runable接口的线程安全问题·
        - 同步方法仍然涉及到同步监视器，只是不需要我们显示的声明
        - 非静态方法（实现Runable接口的方法），同步监视器是this
        - 静态方法（继承Thread类的方法），同步监视器是当前类本身
        - 实现方法，直接使用synchronized 修饰监视器即可
        
      - 方式3：Lock锁 --- JDK5.0新增方法：

        ```java
        class window implements Runable{
            
            private int ticket = 100;
            
            // 1.实例化ReentrantLock对象
            private ReentrantLock lock = new ReentrantLock();
            
            @Override
            public void run(){
                while(true){
                    try{
                        // 2.调用锁定方法Lock()
                        lock.lock();
                        
                        if(ticket > 0){
                            Thread.sleep(100);
                        } catch(InterruputedException e){
                            e.printStackTrace();
                        }
                        
                        System.out.println(Thread.currentThread().getName()+"票数"+ticket);
                        ticket--;     
                    }else{
                        break;
                    }
                }finally{
                    // 3.调用解锁方法 unlock()
                    lock.unlock(); 
                }
            }
        }
        ```

        面试题：

        ​	synchronzied 与 Lock的异同？

        相同：

        - 两者都可以解决线程安全问题

        不同：

        - Lock需要手动的启用同步(Lock())，同时结束同步也需要手动实现(unlock())
        - synchronized机制在执行完全相同的代码以后，自动释放同步监视器

        优先使用方式：

        Lock -> 同步代码块（已经进入方法体，分配了相应的资源）  -> 同步方法(在方法体之外 )

        ​				

   5. 同步操作的方式

      1. 解决了线程的安全问题 ----好处
      2. 弊端：操作同步代码的时候，只能有一个线程参与，其他线程等待，这相当于一个单线程的问题，效率比较低

   6. 解决懒汉式的线程安全问题：（懒汉式：单例化类）：

      ```java
      public class Bank(){
          // 私有化类的构造器，不能够从外面新建类
          private Bank(){}; 
          
          private Bank instance = null;
          
          private Bank getInsance(){
              if(instance == null){
                  synchronized(Banc.class){
                      if(instance == null){
                          instance = new Back();
                      }
                  }
              }
              return instance;
          }
      }
      ```

   7. 线程的死锁问题：

      不同的线程分别占用对方需要的同步资源不放弃，都在等待对方放弃自己需要的同步资源，就形成了线程的死锁

      出现死锁后，不会出现异常，不会出现提示，只是所有的线程都处于阻塞状态,无法继续

      - 解决方法：
        - 专门的算法、原则
        - 尽量减少同步资源的定义
        - 尽量避免嵌套同步

   ## 线程的通信

   使线程交替运行，让每一个线程都有机会抢到运行的代码

   线程通信的三个方法：

   - wait():一旦执行此方法，当前线程就被进入阻塞状态，并释放同步监视器。

   - notify():一旦执行此方法，就会唤醒wait的一个线程。如果有多个线程被wait，就唤醒优先级高的那个

   - notifyAll():一旦执行此方法，就会唤醒所有被wait的线程

   - 这三个方法只能够出现在同步代码块中

   - 这三个方法调用者必须是同步代码块或同步方法中的同步监视器

   - 这三个方法是定义在java.lang.Object类中

     ```java
     while(true){
         synchronized(this){
             // 释放前几个线程 防止线程的阻塞
             notifyAll();
             if(number <= 100){
                 try{
                     Thread.sleep(10);
                 }catch(InterruptedException e){
                     e.printStackTrace();
                 }
                 System.out.println("number = :"+number);
                 number++;
                 
                 try{
                     // 调用wait方法的线程进入阻塞状态,这时候下一个线程就可以进入，实现线程的交替
                     wait();
                 }catch(InterruptedException e){
                     e.printStackTrace();
                 }
             }else{
                 break;
             }
         }
     }
     ```

     

   

   sleep() 和wait()的异同？

   1. 相同点：一旦执行方法，都可以使得当前的线程进入阻塞状态。
   2. 不同点：
      - 两个方法声明位置不同：Thread类中声明sleep()，Object类中声明wait()
      - 调用的位置不同：sleep()可以在任何需要的场景下调用，wait()必须在同步代码快中使用
      - 关于是否释放同步监视器：如果两个方法都是用在同步代码块或同步方法中

   

   经典例题：生产者和消费者问题：

   ```java
   /**
    * 线程通信的应用：生产者消费者问题
    * 生产者(Producer)将产品交给店员(Clerk)，而消费者(Customer)从店员处取走产品，
    * 店员一次只能持有固定数量的产品(比如:20），如果生产者试图生产更多的产品，
    * 店员会叫生产者停一下，如果店中有空位放产品了再通知生产者继续生产;
    * 如果店中没有产品了，店员会告诉消费者等一下，
    * 如果店中有产品了再通知消费者来取走产品。
    *
    * 分析：
    * 1. 是否有多线程问题：是，生产者线程，消费者线程,有可能在生产者生产第10个产品的时候，
    *         消费者抢到的线程，消费了第10个产品，最后生产者生产完第10个产品之后
    *         计数却为9
    * 2. 是否有共享数据？ 是， 店员（产品）
    * 3. 如何解决线程安全问题？ 同步机制，三种方法
    * 4. 是否涉及线程的通信？ 是
    */
   
   class Clerk{
       private int productNumber;
       public synchronized void produceProduct() {
           if(productNumber < 20){
               productNumber++;
               System.out.println(Thread.currentThread().getName()+":开始生产"+productNumber+"个产品");
               // 当我们生产一个产品之后就可以通知消费者来消费产品了，可以使用notify
               notify();
           }else{
               try {
                   wait();
               } catch (InterruptedException e) {
                   e.printStackTrace();
               }
           }
       }
   
       public synchronized void consumeProduct() {
           if(productNumber > 0){
               System.out.println(Thread.currentThread().getName()+":开始消费"+productNumber+"个产品");
               productNumber--;
               // 当我们消费了一个产品的时候 就可以通知生产者来进行生产了
               notify();
           }else{
               try {
                   // 有 wait，我们就要考虑使用notify
                   wait();
               } catch (InterruptedException e) {
                   e.printStackTrace();
               }
           }
       }
   }
   
   class Producer extends Thread{
       private Clerk clerk;
   
       public Producer(Clerk clerk){
           this.clerk = clerk;
       }
   
       @Override
       public void run(){
           System.out.println(Thread.currentThread().getName() + ":开始生产产品...");
   
           while(true){
               try {
                   Thread.sleep(10);
               } catch (InterruptedException e) {
                   e.printStackTrace();
               }
   
               clerk.produceProduct();
           }
       }
   }
   
   class Customer extends Thread{
       private Clerk clerk;
   
       public Customer(Clerk clerk){
           this.clerk = clerk;
       }
   
       @Override
       public void run(){
           System.out.println(Thread.currentThread().getName() + ":开始消费产品...");
   
           while(true){
               try {
                   Thread.sleep(10);
               } catch (InterruptedException e) {
                   e.printStackTrace();
               }
   
               clerk.consumeProduct();
           }
       }
   }
   public class ThreadTest {
       public static void main(String[] args) {
           Clerk clerk = new Clerk();
   
           Producer p1 = new Producer(clerk);
           p1.setName("生产者1");
   
           Customer c1 = new Customer(clerk);
           c1.setName("消费者1");
           p1.start();
           c1.start();
       }
   }
   
   ```

   ## JDK5.0新增线程方式

   新增方式一：实现Callable接口，实现call方法

   - 相比于run方法，可以有返回值
   - 方法可以抛出异常
   - 支持泛型的返回值
   - 需要借助FutureTrue类，比如说获取返回结果
     - Future接口
       - 可以对具体的Runable， Callable任务的执行结果进行取消，查询是否完成，获取结果等。
       - {% label FutureTask是Future接口的唯一实现类 blue %}
       - FutureTask 同时实现了Runable，Future接口。它既可以作为Runable被线程执行，又可以作为Future得到Callable的返回值

   ```java
   // 1.创建一个实现Callable接口的类
   class NumThread implements Callable{
       // 2. 实现call方法，将此线程需要执行的操作声明在call（）中
       @Override
       public Object call() throws Exception{
           int sum = 0;
           for(int i = 1; i <= 100; i++){
               System.out.println(i);
               sum += i;
           }
           return sum;
       }
   }
   
   public class ThreadNew {
   	public static void (String args[]){
           // 3. 创建Callable接口实现类的对象
           NumThread numThread = new NumThread();
           // 4.将此Callable接口实现类的对象作为参数传递到FutureTask构造器中，创建FutureTask的对象
           FutureTask futureTask = new FutureTask(numThread);
           
           // 5. 将FutureTask的对象作为参数传递到Thread类的构造器中，创建Thread对象，并调用start()方法
           // 启用线程
           new Thread(futureTask).start();
           
           try{
               // 6.获取Callable中call方法的返回值
            	//  get()返回值为FutureTask构造器参数Callable实现类重写的call()的返回值 
               Obejct sum = futureTask.get();
               System.out.println(sum);
           } catch(InterruptedException e){
               e.printStackTrace();
           } catch(ExecutionException e){
               e.printStackTrace();
           }
       }
   }
   ```

   为什么Callable接口方式创建多线程比实现Runable接口创建多线程的方式强大？

   1. call（）可以有返回值
   2. call（）可以抛出异常，被外面的操作捕获，获取异常信息
   3. Callable是支持泛型的

   

   新增方式二：使用线程池

   1. 背景：

      经常创建和销毁，使用量特别大的资源，比如并发下的线程，对性能影响很大

   2. 思路：

      提前创建好多个线程，放入线程池中，使用时直接获取，使用完放回池中。可以避免频繁创造销毁，实现重复利用，类似生活中的公共交通问题

   3. 好处：

      - 提高反应速度（减少了创建新线程的时间）
      - 降低资源消耗（重复线程池中的线程，不需要每次都创建）
      - 便于线程的管理
        - corePoolSize:核心池的大小
        - maximumPoolSize:最大线程数
        - keepAliveTime:线程没有任务时最多保持多长时间后会终止

   4. 方法：

      ExecutorService：真正的线程池接口、常见的子类ThreadPoolExecutor

      - void execute(Runable commend):执行命令。没有返回值，一般用来执行Runable
      - <T>Future<T> submit(Callable<T> task):执行任务，有返回值，一般又来执行Callable
      - void shutdown():关闭连接池

      Executors:工具类、线程池的工厂类，用于创建并返回不同类型的线程池

      - Executors.newCachedThreadPool():创建一个可根据需要创建新线程的线程
      - Exscutors.newFixedThreadPool(n);创建一个可重用固定线程数的线程池
      - Executors.newSingleThreadExecutor():创建一个只有一个线程的线程池
      - Executors.newScheduledThreadPool(n):创建一个线程池，它可安排在给定延迟后运行命令或者定期地执行。

      ```java
      import	java.util.concurrent.Executors;
      
      class NumberThread implements Runable{
          @Override
          public void run(){
              for(int i = 0; i < 100; i++){
                  if(i % 2 == 0){
                      System.out.println(i);
                  }
              }
          }
      }
      
      class NumberThread1 implements Runable{
          @Override
          public void run(){
              for(int i = 0; i < 100; i++){
                  if(i % 2 != 0){
                      System.out.println(i);
                  }
              }
          }
      }
      public class ThreadPool{
          public static void main(String[] args){
              // 1. 提供指定数量的线程池，返回值是一个接口对象
              ExecutorService service = Executors.newFixedThreadPool(10);
              
              // 可以将这个接口强制转换为类对象，通过这个类的对象来调用各个属性
              ThreadPoolExecutor service1 = (ThreadPollExecutor) service;
              service1.setCorePoolSize(15);
              
              //  2. 执行指定的线程操作， 需要提供实现Runable接口或者Callable接口的对象
              // 适用于Runable
              service.execute(new NumberThread);
              service.execute(new NumberThread1);
              
              // 适用于Callable 
              // service.submit();
              
              // 关闭线程池
              service.shutdown();
          }
      }
      ```

      
      
      
      
# 常用类

## 字符串相关的类

### String对象的特性


      /*
      String:字符串，使用一对“”括起来表示
      1. String声明为final的 ，表示不可以被继承
      2. String实现了Serializable接口：表示该类型是可序列化的
      实现了Comparable接口：表示该类型是可以比较大小的
      3. String内部定义了 final char[] value用于存储字符串的数据
      4. String：代表了不可变的字符序列。简称不可变性
      体现： 1.当对字符串进行从新赋值的时候，需要重新指定区域赋值，不能够对原有的value进行赋值
      2. 当进行字符串的拼接操作的时候，也需要重新指定区域赋值，不能够对原有的value进行赋值
      3. 当调用String的replace方法修改指定字符串的时候，也需要重新指定区域赋值，不能够对原有的value进行赋值
      5. 通过字面量方式（区别于new）给一个字符串赋值，此时字符串值声明在，字符串常量池中，
      6. 字符串常量池中是不会出现相同内容的字符串的
      */
      @Test
      public void test1(){
      String s1 = "abc"; // 字面量的定义方式
      String s2 = "abc";

System.out.println(s1 == s2); // 比较s1和s2的地址值，返回值是true

s1 = "hello";

System.out.println(s1);
System.out.println(s2);

String s3 = "abc";
s3 += "def";
System.out.println(s3);
System.out.println(s2);

String s4 = "abc";
String s5 = s4.replace('a', 'b');
System.out.println(s4);
System.out.println(s5);

}


### String对象的创建：

  面试题：String s = new String("abc");方式创建对象，在内存中创建了几个对象？

  两个：一个是堆空间中new结构，另一个是char[]对应的常量池中的数据"abc"

```java
String str = "hello";
//本质上this.value = new char[0];
String s1 = new String();

//this.value = original.value;
String s2 = new String(String original);

//this.value = Arrays.copyof(value,value.length);
String s3 = new String(char[] a);
String s4 = new String(char[] a,int startIndex,int count);
```




~~~java
public void test2(){
      // 通过字面量定义的 的方式：此时的s1和s2的数据javaEE生命在方法取中的字符串常量池中
      String s1 = "javaEE";
      String s2 = "javaEE";
      
      // 通过new + 构造器的方式：此时s3和s4保存的地址值，是数据在堆空间中开辟空间以后对应的value值
      String s3 = new String("javaEE");
      String s4 = new String("javaEE");
      
      System.out.println(s1 == s2); // ture
      System.out.println(s1 == s3); // false
      System.out.println(s1 == s4); // false
      System.out.println(s3 == s4); // false
      
  }
~~~


  - 常量和常量的拼接结果在常量池，并且常量池中不会出现相同内容的常量
  - 在字符串拼接的时候，只要其中有一个是变量，结果就在堆中
  - 如果拼接的结果是调用intern()方法，返回值就在常量池中

  ```java
    String s1 = "hello";string s2 = "world";
    String s3 = "hello" + "world" ;
    String s4 = s1 + "world" ;
    String s5 = s1 + s2;
    String s6 = (s1 + s2).intern();
    System.out.println(s3==s4);//false
    System.out.println(s3==s5);//false
    System.out.print1n(s4==s5);//false
    System.out.println(s3==s6);//true
  ```

### String常用方法：

  1. int Length():返回字符串的长度:return value.Length
  2. char charAt(int index):返回某索引处的字符return value[index]
  3. boolean isEmpty():判断是否是空字符串: return value.length == 0
  4. String toLowercase():使用默认语言环境，将 String中的所有字符转换为小写
  5. String toupperCase():使用默认语言环境，将String中的所有字符转换为大写
  6. String trim():返回字符串的副本，忽略前导空白和尾部空白
  7. boolean equals(object obj):比较字符串的内容是否相同
  8. boolean equalsIgnoreCase(String anotherString):与equals方法类似，忽略大小写
  9. String concat(String str):将指定字符串连接到此字符串的结尾。等价于用+”
  10. int compareTo(String anotherString):比较两个字符串的大小, 返回值是0
  11. String substring(int beginIndex):返回一个新的字符串，它是此字符串的从beginIndex开始截取
  12. string substring(int beginIndex,int endIndex) :返回一个新字符串，它是此字符串从beginIndex开始截取，到endIndex结束不包括endIndex

```java
@Test
public void test(){
    String s1 = "HelloWorld";
    System.out.println(s1.length());  // 10
    System.out.println(s1.charAt(2)); // l
    System.out.println(s1.isEmpty()); // false
    System.out.println(s1.toupperCase()); // HELLOWORLD
    String s2 = "  HelloWorld  ";
    System.out.pirntln("----" + s2 + "----");  		//---- HelloWorld ----
    System.out.println("----" + s2.trim() + "----");   //----HelloWorld----
    String s2 = "helloword";
    System.out.println(s1.compareTo(s1)); //如果返回值是0表明两个字符串相同，如果是负数的话表明前一个字符串小，正数的话，表明前一个字符串大
}
```

  13. boolean endsWith(String suffix):测试此字符串是否以指定的后缀结束

  14. boolean startsWith(String prefix):测试此字符串是否以指定的前缀开始

  15. boolean startsWith(String prefix，int toffset):测试此字符串从指定索引开始的子字符串是否以指定前缀开始

      ```java
      public void test(){
          String str1 = "helloworld";
          boolean b1 = str1.endWith("rld"); // 返回值是boolean类型
          System.out.println(b1); // true
      
          boolean b2 = str1.startsWith("He");
          System.out.println(b2); // false
      
          boolean b3 = str1.startWith("ll", 2);
          System.out.println(b3);   // true
      }
      ```

      

  16.  boolean contains(CharSequence s):当且仅当此字符串包含指定的char值序列时，返回true

  17. int indexOf(String str):返回指定子字符串在此字符串中第一次出现处的索引​      

  18. int indexOf(String str, int fromIndex):返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始

  19. int lastIndexOf(String str):返回指定子字符串在此字符串中最右边出现处的索引

        1. indexof和lastIndexOf方法如果未找到都是返回-1

  20. int lastIndexOf(String str, int fromIndex):返回指定子字符串在此字符串中最后次出现处的索引，从指定的索引开始反向搜索

```java
public void test(){
    String str1 = "helloworld";
    String str2 = "OwO"
    System.out.println(str1.contains(str2)); // false

    System.out.println(str1.indexOf("lo")); // 3 返回第一个字符的位置

    System.out.println(str1.indexOf("lo", 5)); // 从第5个位置开始找lo

    System.out.println(str1.lastIndexOf("or")); // 从字符串的后面开始进行寻找，返回第一个字符出现的位置
    System.out.println(str1.lastIndexOf("or", 6)); // 从索引为6的位置开始向前寻找 
}
```


  21. String replace(char oldChar, char newChar):返回一个新的字符串，它是通过用newChar替换此字符串中出现的所有oldChar得到的。
  
  22. String replace(CharSequence target, CharSequence replacement):使用指定的字面值替换序列替换此字符串所有匹配字面值目标序列的子字符串
  
  23. String replaceAll(String regex，String replacement):使用给定的replacement替换此字符串所有匹配给定的正则表达式的子字符串。
  
  24. String replaceFirst(String regex，String replacement):使用给定的replacement替换此字符串匹配给定的正则表达式的第一个子字符串。
  
      ```java
      public void test4(){
          String str1 = "河北地质大学，真大！"; 
          String str2 = str1.replace('大', '小');
          
          System.out.prinln(str1); //河北地质大学，真大！
          System.out.prinln(str2); //河北地质小学，真小！
          
          String str3 = str1.replace("河北", "中国");
          System.out.println(str3);   // 中国地质大学，真大！
      }
      ```

25. boolean matches(String regex):告知此字符串是否匹配给定的正则表达式.
26.  Stringsplit(String regex):根据给定正则表达式的匹配拆分此字符串。
27. Stringsplit(String regex, int limit):根据匹配给定的正则表达式来拆分此字符串，最多不超过limit个，如果超过了，剩下的全部都放到最后一个元素中。

### String与基本数据类型的转换

  String 与基本数据类型， 包装类之间的转换。

  String ---> 基本数据类型，包装类 ：调用包装类中的parseXxx（str）

  基本数据类型，包装类 ------>String：调用String中的valueOf方法 或者+""

### String与字符数组转换

  String 与 char[]:之间的转化

  String ----> char[]：调用了String中的toCharArray()

  char[] ----> String：调用了String类型的构造器

```java
public void test(){
    String str1 = "abc123";
    char[] charArray = str1.toCharArray();
    for(int i = 0; i < charArray.length; i++){
    System.out.println(charArray[i]);
    }

    String str2 = new String(charArray);
    System.out.prinln(str2);
}
```

### String与字节数组进行转换

  String与byte[]之间的转换

  编码: String --> byte[]:调用string的getBytes()解码: byte[] --> String:调用String的构造器

  编码:字符串-->字节（看得懂--->看不懂的二进制数据)

  解码:编码的逆过程，字节-->字符串(看不懂的二进制数据--->看得懂)

  说明:解码时，要求解码使用的字符集必须与编码时使用的字符集一致，否则会出现乱码

```java
public void test(){
    String str1 = "123中国";
    byte[] bytes = str1.getBytes(); //使用默认是字符集进行转换， utf-8一个汉子占三个字节

    System.out.println(Array.toString(bytes));  
    // [97，98，99，49，50，51，-28，-72，-83，-27， -101，-67]

    byte[] gbks = str1.getBytes("gbk");  // 使用utf-8进行编码 一个汉字占两个字节
    System.out.println(Array.toString(gbks));
    // [97，98，99,49，50，51，-42，-48，-71，-6]

    String str2 = new string(bytes);//使用默认的字符集，进行解码。
    System.out.println(str2);  

    String str3 = new String(gbks);
    System.out.println(str3);//出现乱码。原因:编码集和解码集不一致

    String str4 = new String(gbk, "gbk");
    System.out.println(str4);
}

```

### StringBuffer 和 StringBuilder的使用

  String、StringBuffer.StringBuilder三者的异同?

  String:不可变的字符序列;底层使用char[]存储

  StringBuffer:可变的字符序列;线程安全的，效率低;底层使用char[]存储

  StringBuilder:可变的字符序列;jdk5.0新增的，线程不安全的，效率高;底层使用char[]存储

  源码分析：

```java
  String str = new String();//char[ ] value = new char[0];
  
  String str1 = new string("abc" ); //char[] value = new char[]{ ' a ' , ' b' , 'c'};
  
  StringBuffer sb1 = new StringBuffer(); //char[] value = new char[16];底层创建了一个长度为16的字符数组
  
  System.out.println(sb1.Length());// 0
  
  sb1.append( 'a' ); //value[e] = 'a ' ;
  
  sb1.append( 'b'); //value[1] = 'b ';
  
  stringBuffer sb2 = new StringBuffer("abc"); //char[] value = new char[ "abc ".Length() + 16]
  
  public void test(){
      StringBuffer sb1 = new StringBuffer("abc");
      sb1.setCharAt(0, 'm');
      System.out.println(sb1); // mbc
  }
```

 问题1．System.out.printLn(sb2.Length());//3

 问题2．

  - 扩容问题:如果要添加的数据底层数组盛不下了，那就需要扩容底层的数组。
  - 默认情况下，扩容为原来容量的2倍＋2，同时将原有数组中的元素复制到新的数组中。

  指导意义：开发中建议使用StringBuffer(int capacity) 或者StringBuilder(int capacity)

  {% label 常用方法 blue %}

  StringBuffer的常用方法:

  StringBuffer append(xxx):提供了很多的append()方法，用于进行字符串拼接

  StringBuffer delete(int start,int end):删除指定位置的内容
  StringBuffer replace(int start, int end，String str):把[start,end)位置替换为str

  StringBuffer insert(int offset， xxx):在指定位置插入xxx

  StringBuffer reverse() :把当前字符序列逆转

  public int indexof (String str)

  public string substring(int start,int end)public int length()

  public char charAt(int n )

  public void setCharAt(int n ,char ch)

总结:

增: append(xxx)

删:delete(int start,int end)

改: setCharAt(int n ,char ch) / replace(int start，int end,String str)

查: charAt(int n )

插: insert(int offset, xxx)长度:Length();

遍历: for() + charAt() / tostring()      

## 日期和事件API

### JDK8 以前

  System类提供的public static long currentTimeMillis() 用来返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差。{% label 此方法适用于计算时间差 blue %}

  计算世界时间的主要标准有:
  >UTC(Coordinated Universal Time)
  >
  >GMT(Greenwich Mean Time)
  >
  >CST(Central Standard Time)

```java
  // 1. System类中的currentTimeMillis()
  @Test
  public void test(){
      long time = System.currentTimeMillis();
      // 返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差
      // 这个被称为时间戳
      System.out.println(time);
  }
```

java.util.Date类

  表示特定的时间，精确到毫秒

  构造器:
  >Date():使用无参构造器创建的对象可以获取本地当前时间。
  >
  >Date(long date)

  常用方法

  > getTime(): 返回自1970年1月1日00:00:00 GMT以来此Date对象表示的毫秒数。
  >
  > toString():把此 Date对象转换为以下形式的 String: dow mon dd hh:mm:ss zzz yyyy其中: dow是一周中的某一天(Sun,Mon,Tue,Wed,Thu, Fri, Sat)，zzz是时间标准。
  >
  > 其它很多方法都过时了

  ```java
  /*
      java.util.Date类
          java.sql.Date类
      1. 两个构造器的使用
          > 构造器一：Date(): 创建一个对应当前时间的Date对象
          > 构造器二：创建指定毫秒数的Date对象
      2. 两个方法的使用
          > toString(): 显示当前的年月日时分秒
          > getTime(): 获取当前Date对象对应的毫秒数。（时间戳）
      3. java.sql.Date对应着数据库中的日期类型的变量
          > 如何实例化
          > 如何将java.util.Date对象转换成java.sql.Date对象
  
       */
      @Test
      public void test2(){
          // 构造器一：Date
          Date date1 = new Date();
          System.out.println(date1.toString()); // Sat Jun 04 20:26:55 CST 2022
  
          System.out.println(date1.getTime());  // 1654345723604
  
          // 构造器二：创建指定毫秒数的Date对象
          Date date2 = new Date(1654345723604L);
          System.out.println(date2.toString());  //Sat Jun 04 20:28:43 CST 2022
  
          // 创建java.sql.Date对象
          java.sql.Date date3 = new java.sql.Date(1654345723604L);
          System.out.println(date3); // 2022-06-04
  
          /*
           如何将java.util.Date对象转换成java.sql.Date对象
           情况一： 父类强转化成子类，这种方法只限于父类时候子类的构造器创建的时候，父类才能强转成子类
                  Date date4 = new java.sql.Date(1654345723604L);
                  java.sql.Date date5 = (java.sql.Date) date4;
          */
  //        情况二：
          Date date6 = new Date();
          java.sql.Date date7 =  new java.sql.Date(date6.getTime());
      }
  
  ```

  {% label java.text.SimpleDateFormat类 blue %}

  > Date类的API不易于国际化，大部分被废弃了，java.text.SimpleDateFormat类是一个不与语言环境有关的方式来格式化和解析日期的具体类。
  >
  > 它允许进行  格式化:日期→文本、   解析:文本→日期
  >
  > 格式化:
  > SimpleDateFormat() :默认的模式和语言环境创建对象
  >
  > public SimpleDateFormat(String pattern):该构造方法可以用参数pattern指定的格式创建一个对象，该对象调用:
  >
  > public String format(Date date):方法格式化时间对象date
  >
  > 解析:
  >
  > public Date parse(String source):从给定字符串的开始解析文本，以生成一个日期。

  ```java
  /*
      SimpleDateFormat的使用：SimpleDateFormat对日期Date类的格式化和解析
  
      两个操作：
          1. 格式化： 日期 --> 字符串
          2. 解析： 字符串 --> 日期
       */
      @Test
      public void testSimpleDateFormat() throws ParseException {
          SimpleDateFormat sdf = new SimpleDateFormat();
  
  //        格式化 日期 --> 字符串
          Date date = new Date();
          System.out.println(date);  //Sun Jun 05 16:38:56 CST 2022
  
          String format = sdf.format(date);
          System.out.println(format); // 2022/6/5 下午4:41
  
  //        解析：字符串--> 日期
          String str = "2023/6/5 下午4:41";
          // 这里面的str参数的格式一定要符合sdf中的参数的格式
          Date date1 = sdf.parse(str);
          System.out.println(date1);
  
          // ********************
          // 如果我们想要自定义日期的格式的话，我们可以使用另外一种SimpleDateFormat的构造函数
          SimpleDateFormat sdf2 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
  //      格式化
          String format2 = sdf2.format(date);
          System.out.println(format2);  // 2022-06-05 04:57:28
  
  //        解析
          Date date2 = sdf2.parse("2022-06-05 04:57:28");
          System.out.println(date2); // Sun Jun 05 04:57:28 CST 2022
      }
  ```

  {% label java.util.Calendar(日历)类 blue %}

  > Calendar是一个抽象基类，主要完成日期字段之间相互操作的功能。
  >
  > 获取Calendar实例的方法
  >
  > > 使用Calendar.getlnstance()方法
  > >
  > > 调用了它的子类GregorianCalendar的构造器
  >
  > 一个Calendar的实例是系统时间的抽象表示，通过get(int field)方法来取得想要的时间信息。比如YEAR、MONTH、DAY_OF_WEEK、HOUR_OF_DAY、MINUTE、SECOND
  >
  > > public void set(int field,int value)
  > >
  > > public void add(int field,int amount)
  > >
  > > public final Date getTime()
  > >
  > > public final void setTime(Date date)
  >
  > 注意:
  >
  > >获取月份时:一月是0，二月是1，以此类推，12月是11
  > >
  > >获取星期时:周日是1，周二是2，。。。。周六是7让天下没有难学的技

  ### JDK8以后

  {% label 新方法出现的背景 blue %}

  >Calendar 和Date的缺陷：
  >
  >>可变性:像日期和时间这样的类应该是不可变的。
  >
  >>偏移性:Date中的年份是从1900开始的，而月份都从O开始。
  >
  >>格式化:格式化只对Date有用，Calendar则不行。
  >
  >>此外，它们也不是线程安全的;不能处理闰秒等。

  {% label 新方法的优势 blue %}

  > Java8吸收了Joda-Time的精华，以一个新的开始为Java创建优秀的API。
  >
  > 新的 java.time 中包含了{% label 所有 blue %}关于:
  >
  > > 本地日期(LocalDate)
  > >
  > > 本地时间(LocalTime)、
  > >
  > > 本地日期时间(LocalDateTime)、
  > >
  > > 时区(ZonedDateTime)
  > >
  > > 持续时间（Duration）的类
  >
  > 历史悠久的 Date类新增了tolnstant()方法，用于把 Date转换成新的表示形式。这些新增的本地化时间П期API大大简化了日期时间和本地化的管理。     



|                             方法                             |                             描述                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                   now()/* now(Zoneld zone)                   |        静态方法，根据当前时间创建对象/指定时区的对象         |
|                             of()                             |             静态方法，根据指定日期/时间创建对象              |
|                 getDayOfMonth(getDayOfYear()                 |            获得月份天数(1-31)/获得年份天数(1-366)            |
|                        getDayofWeek()                        |             获得星期几(返回一个 DayOfWeek枚举值)             |
|                          getMonth()                          |                获得月份,返回一个Month 枚举值                 |
|                  getMonthvalue()/getYear()                   |                   获得月份(1-12)/获得年份                    |
|                getHouro/getMinute0getSecond()                |               获得当前对象对应的小时、分钟、秒               |
| withDayOfMonth()/ withDayOfYear()/withMonth() / <br />withYear() | 将月份天数、年份天数、月份、年份修改为指定的值并返回新的对象 |
| plusDays(0), plusWeeks(),<br />plusMonths(). plusYears(),plusHours() |        向当前对象添加几天、几周、几个月、几年、几小时        |
| minusMonths()/minusWeeks()<br />minusDays()/minusYears()/minusHours() |         从当前对象减去几月、几周、几天、几年、几小时         |

   

```java

/*LocalDate, LocalTime, localDateTime 的使用*/
@Test
public void test(){
     // now():获取当前的日期，时间，日期+时间
    LocalDate localDate = LocalDate.now();
    LocalTime localTime = LocalTime.now();
    LocalDateTime localDateTime = LocalDateTime.now();

    System.out.println(localDate);  // 2022-06-05
    System.out.println(localTime);  // 20:17:38.535561
    System.out.println(localDateTime);  // 2022-06-05T20:17:38.535561

        // of 设置指定的年月日时分秒，是没有偏移量的
    LocalDateTime localDateTime1 = LocalDateTime.of(2023, 6, 5, 20, 21, 36);
    System.out.println(localDateTime1);

    // getXxx
    System.out.println(localDateTime.getDayOfMonth());  // 5
    System.out.println(localDateTime.getDayOfWeek());   // SUNDAY
    System.out.println(localDateTime.getDayOfYear());   // 156
    System.out.println(localDateTime.getMinute());      // 36
    System.out.println(localDateTime.getMonth());       // JUNE
    System.out.println(localDateTime.getMonthValue());  // 6

    // 不可变性
    // withXxx 修改操作,修改后的数据返回，不会再当前数据上进行修改
    LocalDate localDate1 = localDate.withDayOfMonth(10);
    System.out.println(localDate1);  // 2022-06-10
    System.out.println(localDate);  // 2022-06-05
    // 不可变性
    LocalDateTime localDateTime2 = localDateTime.plusMonths(3);
    System.out.println(localDateTime);  // 2022-06-06T08:38:54.314172
    System.out.println(localDateTime2); // 2022-09-06T08:38:54.314172 在原先的基础上加上了三个月

    // 不可变性
    LocalDateTime localDateTime3 = localDateTime.minusDays(5);
    System.out.println(localDateTime);  // 2022-06-06T08:41:01.993118100
    System.out.println(localDateTime3); // 2022-06-01T08:41:01.993118100  在原先的基础上减去了5天
      
}
      
```
​          

  ### 瞬时：instant类


 Instant：时间线上的一个瞬时点，这个可能被用来记录应用程序中的事件时间戳

在处理时间和日期的时候，我们通常会想到年月日时分秒，这种记录时间的方法，这只是时间的一个模型，是面向人类的，第二种通用模式是面向机器的，或者说是连续处理的。在此模型中时间线中的一个点表示为一个很大的数，这也有利于计算机的处理。{% label 在UNIX中，这个数从1970年开始，以秒为单位；同样的，在java中也是从1970年开始，但是以毫秒为单位 blue %}

{% label java.time包通过值类型Instant提供机器视图，不提供处理人类意义上的时间单位。 red %}Instant表示时间线上的一点，而不需要任何上下文信息，例如，时区。概念上讲，它只是简单的表示自1970年1月1日0时0分0秒（UTC）开始的秒数。因为java.time包是基于纳秒计算的，所以Instant的精度可以达到纳秒级。
      1秒 = 1000毫秒 = $10^6$微妙 = $10^9$纳秒

|             方法              |                             描述                             |
| :---------------------------: | :----------------------------------------------------------: |
|             now()             |          静态方法，返回默认UTC时区的Instant类的对象          |
| ofEpochMilli(long epochMilli) | 静态方法，返回在1970-01-01 00:00:00基础上加上指定毫秒数之后的Instant类的对象 |
|  atOffset(ZoneOffset offset)  |           结合即时的偏移来创建一个 OffsetDateTime            |
|        toEpochMilli()         |    返回1970-01-01 00:00:00到当前时间的毫秒数，即为时间戳     |

```

  /*
      instant 的实现
  */
  @Test
  public void test2(){
      // now():获取本初子午线对应的标准时间
      Instant instant = Instant.now();
      System.out.println(instant);  // 2022-06-06T01:07:48.803375600Z
  
      // 添加时间的偏移量
      OffsetDateTime offsetDateTime = instant.atOffset(ZoneOffset.ofHours(8));
      System.out.println(offsetDateTime);  // 2022-06-06T09:07:48.803375600+08:00
  
      // 获取当前时间到1970年1月1日0时0分0秒开始的毫秒数
      long milli = instant.toEpochMilli();
      System.out.println(milli);  // 1654477841232
  
      // ofEpochMilli() 通过给定的毫秒数获取指定时间
      Instant instant1 = Instant.ofEpochMilli(1654477841232L);
      System.out.println(instant1);  // 2022-06-06T01:10:41.232Z
}
```


​      
​      
### 格式化与解析日期或时间
java.time.format.Date.TimeFormatter 类：该类提供了三种格式化方法

方式一：预定义的标准格式

> ISO_LOCAL_DATE_TIME;
>
>  ISO_LOCAL_DATE;
>
>  ISO_LOCAL_TIME

方式二：本地化相关格式：

> ofLocalizedDateTime() 
>
> > FormatStyle.LONG
> >
> >  FormatStyle.MEDIUM
> >
> > FormatStyle.SHORT : 适用于LocalDateTime
>
> ofLocalizedDate()
>
> > FormatStyle.FUL
> >
> > FormatStyle.LONG
> >
> > FormatStyle.MEDIUM
> >
> > FormatStyle.SHORT: 适用于LocalDate      



自定义格式：如ofPattern("yyyy-MM-dd hh-mm-ss ")

方法：

|           方法            |                        描述                         |
| :-----------------------: | :-------------------------------------------------: |
| ofPattern(String pattern) | 静态方法，返回一个指定字符串格式的DateTimeFormatter |
| format(TemporaAccessor t) |          格式化一个日期，时间，返回字符串           |
| parse(CharSequence text)  |     将指定格式的字符串序列解析为一个日期，时间      |

~~~java

  
  ```java
   /*
      DateTimeFormatter:格式化或解析日期，时间
      类似于SimpleDateFormat
       */
      @Test
      public void test3(){
          // 创建类的三种方法
  // 方法一：预定义的标准格式ISO_LOCAL_DATE_TIME; ISO_LOCAL_DATE;ISO_LOCAL_TIME
          DateTimeFormatter formatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
          //格式化 日期--> 字符串
          LocalDateTime localDateTime = LocalDateTime.now();
          String str = formatter.format(localDateTime);
          System.out.println(localDateTime); // 2022-06-06T09:39:46.721840900
          System.out.println(str);  // 2022-06-06T09:39:46.7218409 由于是标准形式结果差不多
          // 解析：字符串---> 日期
          TemporalAccessor parse = formatter.parse("2022-06-06T09:39:46.7218409");
          System.out.println(parse);  // {},ISO resolved to 2022-06-06T09:39:46.721840900
  
  // 方法二：
  //        ofLocalizedDateTime
  //        FormatStyle.LONG/ FormatStyle.MEDIUM /FormatStyle.SHORT : 适用于LocalDateTime
          DateTimeFormatter formatter1 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.LONG);
          DateTimeFormatter formatter2 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM);
          DateTimeFormatter formatter3 = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.SHORT);
  
          // 格式化
  //        String str1 = formatter1.format(localDateTime);
          String str2 = formatter2.format(localDateTime);
          String str3 = formatter3.format(localDateTime);
  
          //        System.out.println(str1);
          System.out.println(str2); // 2022年6月6日 上午9:50:40
          System.out.println(str3); // 2022/6/6 上午9:50
          //        ofLocalizedDate0
          //        FormatStyle.FULL/ FormatStyle.LONG/ FormatStyle.MEDIUM /FormatStyle.SHORT: 适用于LocalDate
          DateTimeFormatter formatter4 = DateTimeFormatter.ofLocalizedDate(FormatStyle.LONG);

          String str4 = formatter4.format(LocalDate.now());
          System.out.println(str4);  // 2022年6月6日

          // 方法三：自定义格式：如ofPattern("yyyy-MM-dd hh-mm-ss")
          DateTimeFormatter formatter5 = DateTimeFormatter.ofPattern("yyyy-MM-dd hh:mm:ss");

          // 格式化
          String str5 = formatter5.format(LocalDateTime.now());
          System.out.println(str5);  // 2022-06-06 10:01:59
          // 解析
          TemporalAccessor parse1 = formatter5.parse("2022-06-06 10:01:59");
          System.out.println(parse1); // {MicroOfSecond=0, MilliOfSecond=0, NanoOfSecond=0, HourOfAmPm=10, SecondOfMinute=59, MinuteOfHour=1}


 }

~~~


​      

### 其他API
  Zoneld:该类中包含了所有的时区信息，一个时区的ID，如 Europe/Paris

  ZonedDate Time:一个在ISO-8601日历系统时区的目期时间，如 2007-12-03T10:15:30+01:00 Europe/Paris。

  > 其中每个时区都对应着ID，地区ID都为“{区域}/{城市}”的格式，例如Asia/Shanghai等

  Clock:使用时区提供对当前即时、日期和时间的访问的时钟。

  持续时间:Duration，用于计算两个“时间”间隔
  日期间隔:Period，用于计算两个“日期”间隔
  TemporalAdjuster :时间校正器。有时我们可能需要获取例如:将日期调整到“下一个工作日”等操作。
  TemporalAdjusters :该类通过静态方法

  > (firstDayOfXxx()/lastDayOfXxx()/nextXxx())提供了大量的常用TemporalAdjuster的实现。


​      
​      
### 与传统的日期处理相互转换
|                             类                             |               To遗留类                |         From遗留类          |
| :--------------------------------------------------------: | :-----------------------------------: | :-------------------------: |
|             java.time.Instant与java.util.Date              |          Date.from(instant)           |      date.tolnstant()       |
|           java.time.Instant与java.sql.Timestamp            |        Timestamp.from(instant)        |    timestamp tolnstant()    |
| java.time.ZonedDate Time与<br/>java.util.GregorianCalendar | GregorianCalendar.from(zonedDateTime) |    cal.toZonedDateTime()    |
|             java.time.LocalDate java.sqI.Time              |        Date.valueOf(localDate)        |     date.toLocalDate()      |
|            java.time.Local Time与java.sql.Time             |        Date.valueOf(localDate)        |     date.toLocalTime()      |
|     java.time.LocalDate Time与<br/>java.sql.Timestamp      |   Timestamp.valueOf(localDateTime)    | timestamp.toLocalDateTime() |
|           java.time.Zoneld与java.util. TimeZone            |       Timezone.getTimeZone(id)        |     timeZone.toZoneld()     |
| java.time.format.Date TimeFormatter与java.text.DateFormat  |         formatter.toFormat()          |             无              |


​            

## JAVA比较器

  一：说明：java中的 对象，正常情况下，只能比较==  或者!=。不能够使用 > 或 < 的但是在开发场景中，我们需要对多个对象进行排序，言外之意，就需要比较对象的大小，如何实现？使用两个接口中的任意一个：comparable 或 comparator


```java
  /*
  Comparable接口的使用举例： 自然排序
  1. 像String，包装类实现了Comparable接口，重写了CompareTo（obj）方法，给出比较两个对象的方法
  2. 像String、包装类重写compareTo()方法以后，进行了从小到大的排列
  3. 重写compareTo(obj)的规则:
  如果当前对象this大于形参对象obj，则返回正整数，
  如果当前对象this小于形参对象obj，则返回负整数，
  如果当前对象this等于形参对象obj，则返回零。
  4. 对于自定义类来说，如果你想要进行排序的话，则需要实现Comparable接口，重写CompareTo(obj)方法
  在CompareTo中指明应该如何排序
  如果方法返回正整数，则表示大于;
  如果返回0，表示相等;
  返回负整数，表示小于。

*/
@Test
public void test(){
	String[] arr = new String[]{"AA", "CC", "MM", "DD", "BB"};
	Arrays.sort(arr);
	System.out.println(Arrays.toString(arr));  // [AA, BB, CC, DD, MM]
}

/*
Comparator接口的使用：定制排序

Comparator接口的使用:定制排序
1.背景:
当元素的类型没有实现java.Lang.Comparable接口而又不方便修改代码，
或者实现了java.Lang.comparable接口的排序规则不适合当前的操作，
那么可以考虑使用Comparator的对象来排序
2.重写compare(object o1,object o2)方法，比较o1和o2的大小:
如果方法返回正整数，则表示o1大于o2;
如果返回0，表示相等;
返回负整数，表示o1小于o2。
*/
@Test
public void test2(){
	String[] arr = new String[]{"AA", "CC", "MM", "DD", "BB"};
	Arrays.sort(arr, new Comparator(){
    @Override
    public int compare(Object o1, Object o2) {
        if((o1 instanceof String) && (o2 instanceof String)){
        String s1 = (String) o1;
        String s2 = (String) o2;
        return -s1.compareTo(s2);
        }
        throw new RuntimeException();
        }
	});
	System.out.println(Arrays.toString(arr)); // [MM, DD, CC, BB, AA]
}
```

二：Comparable接口和Comparator的使用比较

Comparable接口的方式一旦确定，保证Comparable接口实现类的对象在任何位置都可以比较大小

Comparator接口属于临时性的比较

## System类，Math类，BigInteger与BigDecimal

### System类
- System类代表系统，系统级的很多属性和控制方法都放置在该类的内部。该类位于java.lang包。

- 由于该类的构造器是private的，所以无法创建该类的对象，也就是无法实例化该类。其内部的成员变量和成员方法都是static的，所以也可以很方便的进行调用。

- 成员变量

> System类内部包含in、out和err三个成员变量，分别代表标准输入流(键盘输入)，标准输出流(显示器)和标准错误输出流(显示器)。

- 成员方法

> native long currentTimeMillis():
>
> 该方法的作用是返回当前的计算机时间，时间的表达格式为当前计算机时间和GMT时间(格林威治时间)1970年1月1号0时0分0秒所差的毫秒数。
>
> void exit(int status):
> 该方法的作用是退出程序。其中status的值为0代表正常退出，非零代表异常退出。{% label 使用该方法可以在图形界面编程中实现程序的退出功能等。 red %}
>
> void gc():
> 该方法的作用是请求系统进行垃圾回收。至于系统是否立刻回收，则取决于系统中垃圾回收算法的实现以及系统执行时的情况。
>
> String getProperty(String key):
> 该方法的作用是获得系统中属性名为key的属性对应的值。系统中常见的属性名以及属性的作用如下表所示:
>
> |    属性名    |      属性说明      |
> | :----------: | :----------------: |
> | java.version | java运行时环境版本 |
> |  java.home   |   java的安装目录   |
> |   os.name    |   操作系统的名称   |
> |  os.version  |   操作系统的版本   |
> |  user.name   |   用户账户的名称   |
> |  user,home   |     用户主目录     |
> |   user.dir   | 用户当前的工作目录 |

```java
@Test
public void test1(){
    String javaVersion = System.getProperty( "java.version" );
    System.out.println( "java的version:" +javaVersion);
    String javaHome = System.getProperty( "java.home" );
    System.out.println( "java的home:" + javaHome);
    String osName = System.getProperty("os.name" );
    System. out.println( "os的name: " +osName) ;
    String osVersion = System.getProperty("os.version");
    System.out.println( "os的version:" +osVersion);
    String userName = System.getProperty( "user.name" );
    System.out.println( "user的name : " + userName) ;
    String userHome = System.getProperty( "user.home");
    System.out.println( "user的home : " + userHome);
    String userDir = System.getProperty( "user.dir");
    System.out.println( "user的dir:" + userDir) ;
}
/*
java的version:17.0.1
java的home:G:\JAVA
os的name: Windows 10
os的version:10.0
user的name : Mr.zhang
user的home : C:\Users\Mr.zhang
user的dir:E:\JavaProject\CommonClasses\DateTime
*/         
```

### Math类
java.lang.Math提供了一系列静态方法用于科学计算。其方法的参数和返回值类型一般为double型。

1. abs绝对值
2.  acos,asin,atan,cos,sin,tan三角函数sqrt平方根
3. pow(double a,doble b)a的b次幂log自然对数
4. expe为底指数
5. max(double a,double b)min(double a,double b)
6. random()返回0.0到1.0的随机数
7. long round(double a)double型数据a转换为long型（四舍五入)toDegrees(double angrad)弧度—>角度
8. toRadians(double angdeg)角度—>弧度
    ​      

### BigInteger类
  Integer类作为int的包装类，能存储的最大整型值为$2^{31}-1$，Long类也是有限的，最大为$2^{63}-1$。如果要表示再大的整数，不管是基本数据类型还是他们的包装类都无能为力，更不用说进行运算了。

  java.math包的BigInteger{% label 可以表示不可变的任意精度的整数 red %}。BigInteger提供所有Java的基本整数操作符的对应物，并提供java.lang.Math 的所有相关方法。另外，BigInteger还提供以下运算:模算术、GCD计算、质数测试、素数生成、位操作以及一些其他操作。

  构造器

  Biglnteger(String val):根据字符串构建Biglnteger对象

  常用方法：

  public Biglnteger abs():返回此 BigInteger的绝对值的 BigInteger。

  BigInteger add(BigInteger val):返回其值为(this + val)的 Biglnteger

  BigInteger subtract(BigInteger val):返回其值为(this - val)的 BigInteger

  BigInteger multiply(BigInteger val):返回其值为(this * val)的 BigInteger

  BigInteger divide(BigInteger val):返回其值为(this / val)的 BigInteger。整数相除只保留整数部分。

  BigInteger remainder(BigInteger val):返回其值为(this % val)的 BigInteger。

  Biglnteger[]divideAndRemainder(BigInteger val):返回包含(this / val)后跟(this % val)的两个 BigInteger的数组。

  BigInteger pow(int exponent):返回其值为($this^{exponent}$)的 BigInteger。
​      

### BigDecimal类

一般的Float类和Double类可以用来做科学计算或工程计算，但在商业计算中要求数字精度比较高，故用到java.math.BigDecimal类。

BigDecimal类支持不可变的、任意精度的有符号十进制定点数。

构造器

public BigDecimal(double val)public BigDecimal(String val)

常用方法

public BigDecimal add(BigDecimal augend)

public BigDecimal subtract(BigDecimal subtrahend)

public BigDecimal multiply(BigDecimal multiplicand)

public BigDecimal divide(BigDecimal divisor, int scale, int roundingMode)

# 枚举与注解

## 枚举类的使用

枚举的定义：当一个类中的对象是{% label 有限个，并且确定的 red %}时候我们称其为枚举类

当需要定义一组常量的时候，强烈建议使用枚举类

枚举类的使用:

> 枚举类的理解：类的对象只有有限个，确定的。我们称此类为枚举类
>
> 当我们需要定义一组常量的时候，强烈建议使用枚举类

如何定义枚举类

> 方式一：jdk5.0之前，自定义枚举类
>
> 方式二：jdk5.0之后，可以使用enum关键字定义枚举类



方式一：

```java
public class EnumTest {
    public static void main(String[] args) {
        Season spring = Season.SPRING;
        System.out.println(spring);  // Season{seasonName='春天', seasonDesc='万物复苏'}
    }
}
class Season{
    // 1. 声明Season对象的属性
    private final String seasonName;
    private final String seasonDesc;
    // 2. 私有化的构造器，目的是为了能够确定类对象的个数
    // 通过构造器给对象赋值
    private Season(String seasonName, String seasonDesc){
        this.seasonDesc = seasonDesc;
        this.seasonName = seasonName;
    }

    // 3. 提供当前枚举类的多个对象 public static final
    public static final Season SPRING = new Season("春天","万物复苏");
    public static final Season SUMMER = new Season("夏天","烈日炎炎");
    public static final Season AUTUMN = new Season("秋天","秋高气爽");
    public static final Season WINTER = new Season("冬天","冰封万里");

    // 4. 其他诉求：获取枚举类对象的属性和方法

    public String getSeasonName() {
        return seasonName;
    }

    public String getSeasonDesc() {
        return seasonDesc;
    }

    // toString方法
    @Override
    public String toString() {
        return "Season{" +
                "seasonName='" + seasonName + '\'' +
                ", seasonDesc='" + seasonDesc + '\'' +
                '}';
    }
}

```

方式二：

```java
public class EnumTest1 {
    public static void main(String[] args) {
        Season1 summer = Season1.SUMMER;
        System.out.println(summer);  // SUMMER 没有重写toString方法，然后默认输出枚举类对象的名称

        // 说明定义枚举类默认继承与java.lang.Enum
        System.out.println(Season1.class.getSuperclass());  // class java.lang.Enum
    }
}

// 使用enum关键字创建枚举类
enum Season1{
    // 1. 提供当前枚举类的对象，多个对象之间使用“,”隔开，末尾对象使用";"结束
    SPRING("春天","万物复苏"),
    SUMMER("夏天","烈日炎炎"),
    AUTUMN("秋天","秋高气爽"),
    WINTER("冬天","冰封万里");

    // 1. 声明Season1对象的属性
    private final String Season1Name;
    private final String Season1Desc;
    // 2. 私有化的构造器，目的是为了能够确定类对象的个数
    // 通过构造器给对象赋值
    private Season1(String Season1Name, String Season1Desc){
        this.Season1Desc = Season1Desc;
        this.Season1Name = Season1Name;
    }


    // 4. 其他诉求：获取枚举类对象的属性和方法

    public String getSeason1Name() {
        return Season1Name;
    }

    public String getSeason1Desc() {
        return Season1Desc;
    }
//    使用enum关键字创建的枚举类对象 不用重写toString方法，输出是枚举类对象的名称
//    toString方法
//    @Override
//    public String toString() {
//        return "Season1{" +
//                "Season1Name='" + Season1Name + '\'' +
//                ", Season1Desc='" + Season1Desc + '\'' +
//                '}';
//    }
}
```

Enum类的主要方法

> values()方法:返回枚举类型的对象数组。该方法可以很方便地遍历所有的枚举值。
>
> valueOf(String str):可以把一个字符串转为对应的枚举类对象。要求字符串必须是枚举类对象的“名字”。如不是，会有运行时异常:lllegalArgumentException。
>
> toString():返回当前枚举类对象常量的名称

```java
public static void main(String[] args) {
        Season1 summer = Season1.SUMMER;
        // toString
        System.out.println(summer);  // SUMMER 没有重写toString方法，然后默认输出枚举类对象的名称

        // 说明定义枚举类默认继承与java.lang.Enum
        System.out.println(Season1.class.getSuperclass());  // class java.lang.Enum

        // values()
        for (Season1 value : Season1.values()) {
            System.out.println(value);  // 结果 SPRING SUMMER AUTUMN WINTER
        }
        for (Thread.State value : Thread.State.values()) {
            System.out.println(value); // NEW RUNNABLE BLOCKED WAITING TIMED_WAITING TERMINATED 线程的几个状态
        }

        // valueOf(String objName) : 返回枚举类中对象名为objName的对象，
        // 如果没有objName的枚举类对象，则抛异常IllegalArgumentException
        Season1 winter = Season1.valueOf("WINTER");
        System.out.println(winter);

    }
```

使用enum关键字定义的枚举类实现接口的情况

- 情况一：实现接口，在enum类中实现抽象方法
- 情况二：让枚举类的对象分别实现接口中的抽象方法



## 注解（Annotation）

Annotation其实就是代码里的{% label 特殊标记 red %},这些标记可以在编译,类加载,运行时被读取,并执行相应的处理。通过使用Annotation,程序员可以在不改变原有逻辑的情况下,在源文件中嵌入一些补充信息。代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。

Annotation可以像修饰符一样被使用,可用于修饰包,类,构造器,方法,成员变量,参数,局部变量的声明,这些信息被保存在Annotation的“name=value”对中。

在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在JavaEE/Android中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替JavaEE旧版中所遗留的繁冗代码和XML配置等。

示例一：生成文档相关注解

> @author 表明开发该类的作者
>
> @version 表明该类模块的版本
>
> @see 参考转向也就是相关主题
>
> @since 从那个版本开始增加的
>
> @param 对方法中参数的说明
>
> @return 方法的返回值
>
> @exception 	对方法可能抛出的异常进行说明，如果方法中没有使用throws显示抛出异常，就不能写

示例二：在编译时进行格式检查JDK内置的三个基本注解

> @Override:限定重写父类方法，该注解只能用于方法
>
> @Deprecated：用于表示所修饰的元素已经过时。通常是因为所修饰的结构危险，或存在更好的选择
>
> @SuppressWarnings：抑制编译器警告

3．如何自定义注解:参照@Suppresswarnings定义

- 注解声明为:@interface

- 内部定义成员，通常使用value表示

- 可以指定成员的默认值，使用default定义

- 如果自定义注解没有成员，表明是一个标识作用。

- 如果注解有成员，在使用注解时，需要指明成员的值。

-    {% label 自定义注解必须配上注解的信息流程（使用反射）才有意义 red %}  

- 自定义注解通常都会指明两个元注解：Retention， Target

  ```java
  public @interface MyAnnotation {
      String value() default "hello";
  }
  ```

JDK中的元注解：

- JDK中的元Annotation 用于{% label 修饰 red %}其他Annotation定义

- JDK5.0提供了4个标准的meta-annotation类型，分别是：

  > Retention ：指定修饰Annotation的声明周期
  >
  > > SOURCE
  > >
  > > CLASS（默认行为）
  > >
  > > RUNTIME：只有声明为RUNTIME声明周期的注解，才能通过反射获取。
  >
  > Target ：用于指定被修饰的Annotation能用于那些程序元素
  >
  > Documented：表示所修饰的注解在被javadoc解析时保留下来
  >
  > Inherited：被他修饰的Annotation注解将具有继承性

- 通过反射获取注解信息

JDK 8 中注解的新特性：可重复注解，类型注解

> 可重复注解：
>
> > MyAnnotation上声明@Repeatable，成员值为MyAnnotations.calss
> >
> > MyAnnotation的Target和Retention等元注解与MyAnnotations相同
>
> 类型注解：
>
> > ElementType.TYPE_PARAMETER 表示该注解能写在类型变量声明语句中（如：泛型声明）
> >
> > ElementType.TYPE_USE 表示该注解能写在使用类型的任何语句中



# 集合

## 出现的背景

一方面，面向对象语言对事物的体现都是以对象的形式，为了方便对多个对象的操作，就要对对象进行存储。另一方面，使用Array存储对象方面具有{% label 一些弊端 red %}，而Java集合就像一种容器，可以{% label 动态 red %}地把多个对象的引用放入{% label 容器 red %}中。

> 数组在内存存储方面的特点:
>
> > 数组初始化以后，长度就确定了。
> >
> > 数组声明的类型，就决定了进行元素初始化时的类型
>
> 数组在存储数据方面的弊端:
>
> > 数组初始化以后，长度就不可变了，不便于扩展
> >
> > 数组中提供的属性和方法少，不便于进行添加、删除、插入等操作，且效率不高。同时无法直接获取存储元素的个数
> >
> > 数组存储的数据是有序的、可以重复的。---->存储数据的特点单一

Java集合类可以用于存储数量不等的多个对象，还可以保存具有映射关系的关联数组。



```java
/**
 * 一，集合框架概述
 * 1.集合，数组都是对多个数据进行存储操作的结构，简称java容器
 *      说明:此时的存储，主要指的是内存层面的存储，不涉及到持久化的存储（.txt,.jpg,.avi，数据库中
 * 2. 数组在存储多个数据方面的特点:
 *      1. 一旦初始化以后，其长度就确定了。
 *      2. 数组一旦定义好，其元素的类型也就确定了。我们也就只能操作指定类型的数据了。比如: String[ ] arr;int[ ] arr1;0bject[] arr2;
 * 3. 数组在存储多个数据方面的缺点:
 *      1. 一旦初始化以后，其长度就不可修改。
 *      2. 数组中提供的方法非常有限，对于添加、删除、插入数据等操作，非常不便，同时效率不高。
 *      3. 获取数组中实际元素的个数的需求，数组没有现成的属性或方法可用
 *      4. 数组存储数据的特点:有序、可重复。对于无序、不可重复的需求，不能满足。
 * 
 * 二， 集合框架
 *      /--------Collection接口：单列集合，用来存储一个一个的对象
 *          /------List接口：存储有序的，可重复的数据。 --->"动态数组"
 *          /-----ArrayList,LinkedList, Vector
 *      /-------Set接口：存储无序的，不可重复的数据
 *          /-----HashSet, LinkedHashSet, TreeSet
 *      /--------Map接口：双列集合，用来存储一对（key-value）的数据
 *          /-----HashMap, LinkedHashMap, TreeMap, Hashtable, Properties
 *
 */

```

## Collection



{% label add size addAll clear isEmpty方法的测试 red %}

```java

 public void test() {
        Collection coll = new ArrayList();

        // add(Object e) 将元素e添加到集合中
        coll.add("AA");
        coll.add("BB");
        coll.add("CC");
        coll.add(123);
        coll.add(new Date());  // 5

        // size()：获取添加元素的个数
        System.out.println(coll.size());

        // addAll()
        Collection coll1 = new ArrayList();
        coll1.add("DD");
        coll1.add("EE");
        coll.addAll(coll1);

        System.out.println(coll.size()); // 7

        System.out.println(coll);  // [AA, BB, CC, 123, Tue Jun 07 21:07:46 CST 2022, DD, EE]
     
     	// clear():清空集合元素，只是把其中的元素清除干净了，但是这个集合依旧存在
     	coll.clear();
     
     	// isEmpty(): 判断当前集合是否为空
     	coll.isEmpty();

    }
```

Collection中其他的方法的测定

```java
/*
Collection接口中声明方法的测试

向Collection接口的实现类的对象中添加数据obj时，要求obj，所在类要重写equals
 */
@Test
public void test1(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new String("Zhang"));
    coll.add(true);
    coll.add(new Person("Tom", 21));

    // 1. contains(Object obj) 判断当前集合中是否包含obj
    boolean contains = coll.contains(123);
    System.out.println(contains);   // true

    System.out.println(coll.contains(new String("Zhang"))); // true
    // 我们在判断时会调用obj对象所在类的equals();
    System.out.println(coll.contains(new Person("Tom", 21))); // true

    // 2. containsAll(Collection coll1) 判断形参coll1中的所有元素是否都存在于当前集合中
    Collection coll1 = Arrays.asList(123, 456);
    System.out.println(coll.containsAll(coll1)); // true

    // 3.remove(Object obj) 移除某一个元素
    // 如果该元素存在并且成功移除了，则返回ture
    System.out.println(coll.remove(123));  // ture
    System.out.println(coll);  // [456, Zhang, true, Person{name='Tom', age=21}]
    System.out.println(coll.remove(369));  // false
    System.out.println(coll);  // [456, Zhang, true, Person{name='Tom', age=21}]

    // 4.removeAll(Collection coll2) 从当前集合中移除coll2中的所有元素
    Collection coll2 = Arrays.asList(new Person("Tom", 21), 456);
    coll.removeAll(coll2);
    System.out.println(coll);   // [Zhang, true]
}
```

 

```java
@Test
public void test2(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new String("Zhang"));
    coll.add(true);
    coll.add(new Person("Tom", 21));
    // 求交集，
    // 5. retainAll(Collection coll1) 将coll1中和当前集合中相同的元素提取出来
    Collection coll1 = Arrays.asList(123, 456, 789);
    coll.retainAll(coll1);
    System.out.println(coll);  // [123, 456]

    // 6. equals(Object obj)方法，当且仅当当前集合和形参结合中的元素内容和顺序都一样的时候返回true
    Collection coll2 = new ArrayList();
    coll2.add(new Person("Tom", 21));
    coll2.add(123);
    coll2.add(456);
    coll2.add(new String("Zhang"));
    coll2.add(true);
    System.out.println(coll.equals(coll2));

}
```



```java
@Test
public void test3(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new String("Zhang"));
    coll.add(true);
    coll.add(new Person("Tom", 21));

    // 7.hashCode():返回当前对象的哈希值
    System.out.println(coll.hashCode());  // -1001820203

    // 8.集合 ---> 数组：toArray()
    for (Object o : coll.toArray()) {
        System.out.println(o);  // 123 456 Zhang true Person{name='Tom', age=21}
    }
    // 数组到集合
    List<String> strings = Arrays.asList(new String[]{"AA", "BB", "CC"});
    System.out.println(strings);  // [AA, BB, CC]

    // 当你使用创建一个基本数据类型的数组转换成集合的时候，这时候集合会将这个数组识别成为一个元素
    List arr1 = Arrays.asList(new int[]{123, 456});
    System.out.println(arr1.size());  // 1

    // 如果想要识别出两个元素的话，则需要使用包装类
    List arr2 = Arrays.asList(new Integer[]{122, 456});
    System.out.println(arr2.size());  // 2


}
```

### Iterator的使用

```java
/*
集合元素的便利操作，使用迭代器Iterator接口
内部方法：hasNext() 和 next()方法
 */
@Test
public void test1(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new String("Zhang"));
    coll.add(true);
    coll.add(new Person("Tom", 21));

    Iterator iterator = coll.iterator();

    // hasNext() 判断是否还有下一个元素
    while(iterator.hasNext()){
        // next(), ①指针下移 ②将下移以后集合位置上的元素返回
        System.out.println(iterator.next());
    }
}

// 测试Iterator中的remove方法
// 如果还未调用next()或在上一次调用next方法之后已经调用了remove方法，再调用remove都会报IllegalStateException
@Test
public void test2(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new String("Zhang"));
    coll.add(true);
    coll.add(new Person("Tom", 21));

    Iterator iterator = coll.iterator();

    // 删除集合中的Tom
    while(iterator.hasNext()){
        Object obj = iterator.next();
        if("Tom".equals(obj)){
            iterator.remove();
        }
    }

}
```

### foreach

jdk5.0新增了foreach循环（增强for循环），用于遍历集合，数组

```java
public void test1(){
    Collection coll = new ArrayList();
    coll.add(123);
    coll.add(456);
    coll.add(new String("Zhang"));
    coll.add(true);
    coll.add(new Person("Tom", 21));

    // for( 集合(数组)元素的类型 局部变量 ：集合(数组)对象)
    // 内部仍然调用的迭代器
    for(Object obj : coll){
        System.out.println(obj);
    }
}
```



### List接口

List接口：存储有序的，可重复的数据。 --->"动态数组"

- ArrayList

- LinkedList

- Vector

ArrayList，LinkedList，Vector三者的异同

相同点：三个类都实现了List的接口，存储数据的特点相同：存储有序的，可重复的数据

不同点：

- ArrayList：作为list接口的主要实现类。线程不安全的，效率高， 底层使用Object[] elementData存储（数组）
- LinkedList：对于频繁使用插入和删除操作的集合，此类比使用ArrayList效率高，底层使用双向链表存储
- Vector：作为list接口的古老实现类；线程安全的，效率低，底层使用Object[] elementData存储（数组）

```java
/**
 *  ArrayList源码分析：
 *      jdk7的情况下：
 *          ArrayList list = new ArrayList(); // 底层创建了长度为10的Object[] 数组elementData
 *          list.add(123);  // elementData[0] = new Integer(123);
 *          ...
 *          list.add(11);   // 如果此次的添加导致底层的elementData数组容量不够。则扩容
 *          默认情况下：扩容为原来容量的1.5倍， 同时需要将原有的数组中的数据复制到新的数组中
 *
 *          结论：建议开发中使用带参的构造器：ArrayList list = new ArrayList(int capacity)
 *     jdk8的中ArrayList变化
 *          ArrayList list = new ArrayList(); // 底层Object elementData初始化为{}， 并没有创建长度为10的数组
 *          list.add(123); // 第一次调用add()的时候，底层才创建了长度为10的数组，并将数据123添加到elementData数组中
 *          ...
 *          后续的添加与扩容操作与jdk 7 无异
 *
 *  LinkedList源码分析：
 *      LinkList list = new LinkList(); // 内部声明了Node类型的first和last属性，默认值为null
 *      list.add(123);  // 将123封装到Node中，创建了Node对象
 *
 *      其中Node定义为一个双向节点
 *  Vector的源码分析：jdk7个jdk8中通过Vector()构造器创建对象的时候，底层都创建了长度为10的数组，在扩容方面，
 *      默认扩容为原来的数组长度的2倍
 *
 *  List接口中的常用方法
 *      void add(int index, object ele):在index位置插入eLe元素
 *      boolean addAll(int index, collection eles): 从index位置开始将eles中的所有元素添加进来
 *      Object get(int index):获取指定index位置的元素
 *      int indexOf(object obj):返回obj在集合中首次出现的位置
 *      int lastIndexOf(object obj):返回obj在当前集合中末次出现的位置
 *      Object remove(int index):移除指定index位置的元素，并返回此元素
 *      Object set(int index，object ele):设置指定index位置的元素为eLe
 *      List sublist(int fromIndex, int toIndex):返回从fromIndex到toIndex位置的子集合
*/

/*
    void add(int index, object ele):在index位置插入eLe元素
    boolean addAll(int index, collection eles): 从index位置开始将eles中的所有元素添加进来
    Object get(int index):获取指定index位置的元素
    int indexOf(object obj):返回obj在集合中首次出现的位置
    int lastIndexOf(object obj):返回obj在当前集合中末次出现的位置
    Object remove(int index):移除指定index位置的元素，并返回此元素
    Object set(int index，object ele):设置指定index位置的元素为eLe
    List sublist(int fromIndex, int toIndex):返回从fromIndex到toIndex位置的子集合
     */
    @Test
    public void test(){
        ArrayList list = new ArrayList();
        list.add(123);
        list.add(456);
        list.add("AA");
        list.add(new Person("Tom", 21));
        list.add(456);

        System.out.println(list);  // [123, 456, AA, Person{name='Tom', age=21}, 456]

        //void add(int index, object ele):在index位置插入eLe元素
        list.add(1, "BB");
        System.out.println(list);  // [123, BB, 456, AA, Person{name='Tom', age=21}, 456]

        // boolean addAll(int index, collection eles): 从index位置开始将eles中的所有元素添加进来
        List list1 = Arrays.asList(123,456,789);
        list.addAll(list1);
        System.out.println(list.size()); // 9

        // Object get(int index):获取指定index位置的元素
        System.out.println(list.get(5));  // 456

        // int indexOf(object obj):返回obj在集合中首次出现的位置，如果没有找到的话则返回-1
        System.out.println(list.indexOf(456)); // 2
        System.out.println(list.indexOf("CC")); // -1

        //int lastIndexOf(object obj):返回obj在当前集合中末次出现的位置
        System.out.println(list); // [123, BB, 456, AA, Person{name='Tom', age=21}, 456, 123, 456, 789]
        System.out.println(list.lastIndexOf(456)); // 7


        //  Object remove(int index):移除指定index位置的元素，并返回此元素
        System.out.println(list);   // [123, BB, 456, AA, Person{name='Tom', age=21}, 456, 123, 456, 789]
        Object obj = list.remove(0);
        System.out.println(obj);    // 123
        System.out.println(list);   // [BB, 456, AA, Person{name='Tom', age=21}, 456, 123, 456, 789]

        // Object set(int index，object ele):设置指定index位置的元素为eLe
        list.set(1, "CC");
        System.out.println(list); // [BB, CC, AA, Person{name='Tom', age=21}, 456, 123, 456, 789]

        //  List sublist(int fromIndex, int toIndex):返回从fromIndex到toIndex位置的子集合
        List list2 = list.subList(2, 4); // 左闭右开
        System.out.println(list2); // [AA, Person{name='Tom', age=21}]

    }
```

常用方法：

- 增：add(Object obj) 
- 删：remove(int index) / remove(Object obj)
- 改：set(int index, Object ele)
- 查：get(int index)
- 插：add(int index, Object obj)
- 长度：size()
- 遍历：①Iterator迭代器方式 ②增强for循环， ③普通循环



### set接口

set中没有额外定义的新的方法，使用的都是Collection中声明的过的方法

要求：

​	向Set中添加数据，其所在类一定要重写equals和hashCode这两个方法

​	重写hashCode() 和equals() 尽可能的保持一致：相同的对象，必须有相同的散列码

set接口：{% label 存储无序的，不可重复的数据 red %}

- hashSet：作为set接口中的主要实现类，线程不安全；可以存储null值
  - LinkedHashSet：作为hashSet的子类；在遍历数据的时候，可以按照添加的顺序遍历
- TreeSet：可以按照添加对象的指定属性，进行排序

hashSet

一：Set：存储无序的，不可重复的数据，以Hashset为例说明

​	无序性 :不等于随机性， 存储的数据，在底层数组中并非按照数组索引的顺序添加的，而是根据数据的哈希值进行添加的

​	不可重复性：保证添加的元素按照equals()进行判断的时候，不能返回true，即：相同的元素只能有一个

二：添加元素的过程，以HashSet为例

​	我们向HashSet中添加元素a，首先调用元素a的HashSet方法获取hashCode()方法，计算元素a的hash值此Hash值通过某种计算方法，算出在HashSet底层数组中的存放位置(即：索引位置)，判断此数组位置上是否有其他元素：

​		如果此位置上没有其他元素的话，则直接插入    -----情况一	

​		如果此位置上有元素b（或以链表形式存放的多个元素），则比较元素a和b的hash值是否相同 			

​			如果不相同的话则直接插入， 			

​			如果相同的话，则需要调用元素a的equals方法：			

​				equals返回false ，则a可以插入      ---- 情况二  			

​				equals返回true，则a不可以插入       ---- 情况三

 对于添加成功的情况二和三；元素a以链表的形式在指定位置的索引上插入。

jdk7：元素a放在当前数组中，指向原来的数据

jdk8：原来的元素位置不变，指向元素a

总结：七上八下

HashSet底层：数组 + 链表的结构

```java
@Test
public void test(){
    Set set = new HashSet();
    set.add(123);
    set.add(456);
    set.add("AA");
    set.add("CC");
    set.add(new Person("Tom", 12));
    set.add(129);

    Iterator iterator = set.iterator();
    while(iterator.hasNext()){
        System.out.println(iterator.next());
    }
}
```

LinkHashSet的使用

```java
// LinkHashSet的使用
// LinkHashSet作为HashSet的子类，再添加数据的同时，每个数据还维护了两个引用，记录此数据的前一个和后一个元素
// 优点：对于频繁的便利操作，LinkedHashSet效率高于HashSet
@Test
public void test2(){
    Set set = new LinkedHashSet();
    set.add(123);
    set.add(456);
    set.add("AA");
    set.add("CC");
    set.add(new Person("Tom", 12));
    set.add(129);

    Iterator iterator = set.iterator();
    while(iterator.hasNext()){
        System.out.println(iterator.next());
    }
}
```

TreeSet的使用

```java
    /*
    1. 向TreeSet中添加数据，要求是相同类的对象
    2. 两种排序方式：自然排序（Comparable）和定制排序（Comparator）
    3. 在自然排序中，比较两个对象是否相同的标准为：compareTo()返回值0， 不再是equals
    4. 在定制排序中, 比较两个对象是否相同的标准为，compare()返回值0， 不再是equals
     */
    @Test
    public void test3(){
        TreeSet set = new TreeSet();
//        失败，不能添加不同类的对象
//        set.add(123);
//        set.add(456);
//        set.add("AA");

        set.add(123);
        set.add(23);
        set.add(13);
        set.add(1234);

        Iterator iterator = set.iterator();
        while(iterator.hasNext()){
            System.out.println(iterator.next()); // 13 , 23 ,123 ,1234 排好序的
        }

        // 定制排序
        Comparator com = new Comparator() {
            @Override
            public int compare(Object o1, Object o2) {
                // 按照年龄从大到小排序
                if(o1 instanceof Person && o2 instanceof Person){
                    Person p1 = (Person) o1;
                    Person p2 = (Person) o2;
                    return Integer.compare(p1.getAge(), p2.getAge());
                }
                else{
                    throw new RuntimeException("输入的类型不匹配");
                }
            }
        };
        TreeSet set1 = new TreeSet(com);

        set1.add(new Person("Tom", 12));
        set1.add(new Person("Mak", 6));
        set1.add(new Person("Ao", 24));
        set1.add(new Person("Fc", 56));


        Iterator iterator1 = set1.iterator();
        while(iterator1.hasNext()){
            System.out.println(iterator1.next());
//            按照年龄排好序的
//            Person{name='Mak', age=6}
//            Person{name='Tom', age=12}
//            Person{name='Ao', age=24}
//            Person{name='Fc', age=56}
        }
    }
```

测试：在List内去除重复的数字值，要求尽量简单

使用HashSet类的特性：不可重复性，来进行筛选，如果我们筛选的目标是自定义类的话，我们需要在自定义类的下面重写HashCode 和 equals方法

```java
public static List duplicateList(List list) {
	HashSet set = new HashSet();
	set.addAl1(list);
	return new ArrayList(set);
}
public static void main(String[] args) {
    List list = new ArrayList();
    list.add(new Integer(1));list.add(new Integer(2));list.add(new Integer(2));list.add(new Integer(4));list.add(new Integer(4));
    List list2 = duplicateList(list);
    for (object integer : list2) {i
    	System.out.print1n(integer);
	}
}

```



Set结构掌握：

```java
public void test3({
    HashSet set = new Hashset();
    Person p1 = new Person( id: 1001,name: "AA");
    Person p2 = new Person( id: 1002,name: "BB");
    
    // 正常通过hashCode值进行添加，无话可说
    set.add(p1);
    set.add(p2);
    System.out.println(set);
    
    // 通过地址值来修改元素，则set中的对应的地址值中的元素也随之改变
    // 但是使用remove的时候p1的Hash值已经改变了，所以p1对应位置没有元素，删除失败
    p1.name = "CC";
    set.remove(p1);
    system.out.println(set);
    
    // 添加一个id和name都和p1相同的元素， 这时候虽然内部结构相同，
    // 但是p1存入的HashCode值是"1001, "AA""的HashCode的值，
    // 虽然后来其中元素改变了，但是在set中存放的地址却没有改变
    // 所以id 和name都和p1相同的元素，还是可以添加到HashSet中的
    set.add( new Person( id: 1001,name: "CC"));
    System.out.println(set);
    
    // 这个元素虽然和p1的HashCode的值相同，但是其中元素不同，
    // 使用equals的时候返回的不是一个元素，所以也可以添加进去
    set.add ( new Person( id: 1001，name: "AA" ));
    System.out.print1n(set);
}

```



## Map

DEFAULT_INITIAL_CAPACITY : 	HashMap的默认容量，16

MAXIMUM_CAPACITY : 	HashMap的最大支持容量，$2^{30}$

DEFAULT_LOAD_FACTOR:	HashMap的默认加载因子

TREEIFY_THRESHOLD:	Bucket中链表长度大于该默认值，转化为红黑树

UNTREEIFY_THRESHOLD: 	Bucket中红黑树存储的Node小于该默认值，转化为链表

MIN_TREEIFY_CAPACITY:	桶中的Node被树化时最小的hash表容量。(当桶中Node的数量大到需要变红黑树时，若hash表容量小于MIN_TREEIFY_CAPACITY时，此时应执行resize扩容操作这个MIN_TREEIFY_CAPACITY的值至少是TREEIFY_THRESHOLD的4倍。)

table:存储元素的数组，总是2的n次幂

entrySet:存储具体元素的集

size: HashMap中存储的键值对的数量

modCount: HashMap扩容和结构改变的次数。

threshold:扩容的临界值，=容量*填充因子

loadFactor:填充因子

```java
/**
 * 一，Map实现类的结构
 *      /-----Map:双列数据。存储Key-Value对的数据
 *          /----HashMap:作为Map的主要实现类；线程不安全，效率高；可以存储null的key和value
 *              /----LinkedHashMap：保证在遍历map元素的时候，可以按照添加的顺序实现遍历。
 *                  原因：在原有的HashMap底层结构上，添加了一对指针，指向前一个和后一个，
 *                  对于频繁的遍历操作，此执行效率高于HashMap
 *          /----TreeMap：保证按照添加的Key-Value对进行操作，实现排序遍历，此时考虑自然排序和定制排序，
 *                      底层使用红黑树
 *          /----Hashtable: 作为古老的实现类；线程安全，效率低；不能存储null的key和value
 *              /----Properties:常用来处理配置文件，key和value都是String类型的
 * 
 *      HashMap的底层：数组 + 链表 (jdk7以前)
 *      数组 + 链表 + 红黑树 (jdk8)
 *  面试题：
 *      1. HashMap的底层实现原理？
 *      2. HashMap和 Hashtable 的异同？
 *      3. CurrentHashMap 和 Hashtable 的异同？
 * 
 *  二，Map结构的理解
 *      Map中的key：无序的，不可重复的，使用Set存储所有的key ---> key所在的类需要重写equals()和hashCode()方法
 *      Map中的value：无序的，可重复的，使用Collection存储所有的value ---> value所在的类需要重写equals()
 *          一个键值对：key-value构成了一个Entry对象。
 *      Map中的entry：无序的，不可重复的，使用Set对象存储所有的entry
 *      
 * 三，HashMap的底层实现原理？
 *      HashMap map = new HashMap():
 *      在实例化之后，底层创建了长度为16的一维数组Entry[] table
 *      ...在执行过几次put之后...
 *      map.put(key1, value1):
 *      首先，调用key1所在类的hashCode() 计算key1的hash值，次hash值经过某种算法计算之后，得到Entry数组中的存放位置
 *          如果此位置上的数据为空，此时的key1-value1添加成功。 ----情况1
 *          如果此位之上的数据不为空(意味着，此位之上存在着一个或者多个数据(以链表的形式存在)),比较key1和已经存在的一个或者多个数据的Hash值
 *              如果key1的hash值与已经存在的数据的hash值都不相同，此时key1-value1添加成功。 ----情况2
 *              如果key1的hash值和已经存在的某个数据(key2 - value2)的hash值相同，继续比较：调用key1所在类的equals(key2)
 *                  如果equals()返回false：此时key1-value1添加成功。 ----情况3
 *                  如果equals()返回true：使用value1替换value2
 *      补充：关于情况2和情况3：此时key1-value1和原来的数据以链表的方式存储
 *      
 *      在不断的添加过程中，会涉及到扩容问题，当超出临界值(且存放的位置非空)时，扩容，默认的扩容方式：扩容为原来的两倍，并将原有的数据复制过来。
 * 
 *      jdk8 相较于 jdk7在底层实现方面的不同：
 *          1. new HashMap():底层没有创建，一个长度为16的数据
 *          2. jdk8底层数组是：Node[], 而非Entry
 *          3. 首次调用put()方法的时候，底层创建长度为16的数组
 *          4. jdk7底层结构只有：数组+链表，jdk8中底层结构：数组 + 链表 + 红黑树、
 *      当数组某一个索引位置上的元素以链表的形式存在的个数 > 8 且当前数组的长度 > 64的时候
 *          此时此索引位置所有数据改用红黑树存储，方便查找
 *          
 *      DEFAULT_INITIAL__CAPACITY : HashMap的默认容量，16
 *      DEFAULT_LOAD_FACTOR: HashMap的默认加载因子:0.75
 *      threshold:扩容的临界值，=容量*填充因子:16* 0.75 =>12
 *      TREEIFY_THRESHOLD: Bucket中链表长度大于该默认值，转化为红黑树:8
 *      MIN_TREETFY_CAPACITY:桶中的Node被树化时最小的hash表容量:64
 *      
 *      
 * 四，LinkedHashMap底层实现原理(了解)
 *      源码中:
 *      static class Entry<K,V> extends HashMap. Node<K,V> {
 *          Entry<K,V> before, after;//能够记录添加的元素的先后顺序
 *          Entry(int hash，K key, v value，Node<K,V> next) {
 *              super( hash,key, value, next);
 *          }
 *      }
 *      
 * 五：一些操作方法：
 *  添加，删除，修改操作
 *      Object put(Object key, Object value): 将指定的key - value添加到（或修改）当前的map对象中
 *      void putAll(Map m): 将m中的所有的key-value对存放到当前map中
 *      Object remove(Object key): 移除指定的key的key-value对，并返回value
 *      void clear(),  清空当前map中的所有数据
 *  元素查询的相关操作：
 *      Object get(Object key): 获取指定key对应的value
 *      boolean containsKey(Object key):  是否包含指定的key
 *      boolean containValue(Object value):  是否包含指定的value
 *      int size();     返回map中key-value对的个数
 *      boolean isEmpty():  判断当前map是否为空
 *      boolean equals(Object obj): 判断当前map和参数对象obj是否相等
 *  元视图的操作方法
 *      Set keySet() : 返回所有的key构成的set集合
 *      Collection values(): 返回所有的value构成的集合
 *      Set entrySet(): 返回所有key - value构成的set集合
 *      
 * 总结：常用方法
 * 增: put(Object key, Object value)
 * 删: remove(Object key);
 * 改: put(Object key, Object value)
 * 查: get(Object key)
 * 长度: size()
 * 遍历: keySet()/ values() / entrySet
 *
 */

public class MapTest {
    /*
    元视图的操作方法
    Set keySet() : 返回所有的key构成的set集合
    Collection values(): 返回所有的value构成的集合
    Set entrySet(): 返回所有key - value构成的set集合
     */
    @Test
    public void test3() {
        Map map = new HashMap();
        map.put(123, 456);
        map.put("AA", 741);
        map.put("BB", 852);

        // 遍历所有key
        Set set = map.keySet();
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        // 遍历所有的value
        Collection values = map.values();
        Iterator iterator1 = values.iterator();
        while (iterator1.hasNext()) {
            System.out.println(iterator1.next());
        }

        // 遍历所有的key-value
        Set set1 = map.entrySet();
        Iterator iterator2 = set1.iterator();
        while (iterator2.hasNext()) {
            System.out.println(iterator2.next());
        }
    }

    /*
    元素查询的相关操作：
    Object get(Object key): 获取指定key对应的value
    boolean containsKey(Object key):  是否包含指定的key
    boolean containValue(Object value):  是否包含指定的value
    int size();     返回map中key-value对的个数
    boolean isEmpty():  判断当前map是否为空
    boolean equals(Object obj): 判断当前map和参数对象obj是否相等
     */
    public void test1() {
        Map map = new HashMap();
        map.put(123, 456);
        map.put("AA", 741);
        map.put("BB", 852);

        // Object get(Object key)
        System.out.println(map.get(123)); // 456

        //containsKey(Object key)
        System.out.println(map.containsKey("AA"));  // true

        // containsValue
        System.out.println(map.containsValue(456)); // true

        //

    }

    /*
    添加，删除，修改操作
    Object put(Object key, Object value): 将指定的key - value添加到（或修改）当前的map对象中
    void putAll(Map m): 将m中的所有的key-value对存放到当前map中
    Object remove(Object key): 移除指定的key的key-value对，并返回value
    void clear(),  清空当前map中的所有数据
     */
    @Test
    public void test() {
        Map map = new HashMap();
        map.put(123, 456);
        map.put("AA", 741);
        map.put("BB", 852);
        // 修改操作
        map.put("AA", 963);

        System.out.println(map);  // {AA=963, BB=852, 123=456}

        Map map1 = new HashMap();
        map1.put("CC", 123);
        map1.put("DD", 123);

        map.putAll(map1);

        System.out.println(map);  // {AA=963, BB=852, CC=123, DD=123, 123=456}

        // remove(Object key)
        Object value = map.remove("CC");
        System.out.println(value);  // 123
        System.out.println(map);   // {AA=963, BB=852, DD=123, 123=456}

        // clear()
        map.clear();
        System.out.println(map.size());  // 0
    }

}
```



Treemap测试类

```java
// 向TreeMap中添加key - value, 要求key一定是同一个类创建的对象
// 因为要按照key进行排序：自然排序， 定制排序

// 自然排序
@Test
public void test() {
    TreeMap treeMap = new TreeMap();
    treeMap.put(new Person("Tom", 12), 98);
    treeMap.put(new Person("Json", 13), 95);
    treeMap.put(new Person("Zhang", 14), 96);
    treeMap.put(new Person("Li", 15), 97);
    treeMap.put(new Person("Wang", 16), 98);

    for (Object obj : treeMap.entrySet()) {
        System.out.println(obj);
    }
}


// 定制排序
@Test
public void test2() {
    TreeMap treeMap = new TreeMap(new Comparator() {
        @Override
        public int compare(Object o1, Object o2) {
            if (o1 instanceof Person && o2 instanceof Person) {
                Person p1 = (Person) o1;
                Person p2 = (Person) o2;
                return p1.getAge() - p2.getAge();
            } else {
                throw new RuntimeException("传入类型有误");
            }
        }
    });
    treeMap.put(new Person("Tom", 12), 98);
    treeMap.put(new Person("Json", 13), 95);
    treeMap.put(new Person("Zhang", 14), 96);
    treeMap.put(new Person("Li", 15), 97);
    treeMap.put(new Person("Wang", 16), 98);

    for (Object obj : treeMap.entrySet()) {
        System.out.println(obj);
    }
}
```

properties测试

```java
public static void main(String[] args) throws IOException {
    // Properties: 常用来处理配置文件。key和value都是String类型的
    Properties pros = new Properties();

    FileInputStream fis = new FileInputStream("jdbc.properties");
    pros.load(fis); // 加载到对应的文件

    String name = pros.getProperty("name");
    String password = pros.getProperty("password");

    System.out.println("name = " + name + "; password = " + password);
}
```

Collections测试

```java
/**
 * 排序操作
 * reverse(List):反转List中元素的顺序
 * shuffle(List):对List集合元素进行随机排序
 * sort(List):根据元素的自然顺序对指定 List集合元素按升序排序
 * sort(List，Comparator):根据指定的Comparator产生的顺序对List集合元素进行排序swap(List，int,int):将指定 list集合中的i处元素和j处元素进行交换
 * 查找替换操作
 * Object max(Collection):根据元素的自然顺序，返回给定集合中的最大元素Object max(Collection，Comparator):根据Comparator指定的顺序，返回给定集合中的最大元素
 * object min(Collection)
 * Object min(Collection，Comparator)
 * int frequency(Collection，Object):返回指定集合中指定元素的出现次数void copy(List dest,List src):将src中的内容复制到dest中
 * boolean replaceAll(List list，Object oldVal，Object newVal):使用新值替换List 对象的所有旧值
 *
 * Collections类中提供了多个synchronizedXxx()方法，该方法可使将指定集合包装成线程同步的集合，
 *      从而可以解决多线程并发访问集合时的线程安全问题
 *
 */

public class CollectionsTest {
    @Test
    public void test() {
        List list = new ArrayList();
        list.add(123);
        list.add(987);
        list.add(852);
        list.add(456);

        System.out.println(list);

        Collections.reverse(list);
        System.out.println(list);

        Collections.shuffle(list);
        System.out.println(list);

        Collections.sort(list);
        System.out.println(list);

        // 我们在使用copy操作的时候 要注意：
        // 下面这样会报错：IndexOut0fBoundsException( "Source does not fit in dest")
//        List dest = new ArrayList();
//        Collections.copy(dest, list);
        // 正确使用copy操作的方法：
        List dest = Arrays.asList(new Object[list.size()]);

        System.out.println(dest.size());
        Collections.copy(dest, list);
        System.out.println(dest);
    }
```

面试题：负载因子值的大小，对HashMap有什么影响

负载因子的大小决定了HashMap的数据密度。

负载因子越大密度越大，发生碰撞的几率越高，数组中的链表越容易长，造成查询或插入时的比较次数增多，性能会下降。

负载因子越小，就越容易触发扩容，数据密度也越小，意味着发生碰撞的几率越小，数组中的链表也就越短，查询和插入时比较的次数也越小，性能会更高。但是会浪费一定的内容空间。而且经常扩容也会影响性能，建议初始化预设大一点的空间。

按照其他语言的参考及研究经验，会考虑将负载因子设置为0.7~0.75，此时平均检索长度接近于常数。









## 集合掌握要求

层次一：选择合适的集合类去实现数据的保存，调用其内部方法

层次二：不同的集合底层数据机构为何？如何实现数据操作的：增删改查等





# 泛型

## 概念

所谓泛型，就是允许在定义类、接口时通过一个标识表示类中某个属性的类型或者是某个方法的返回值及参数类型。这个类型参数将在使用时（例如，继承或实现这个接口，用这个类型声明变量、创建对象时）确定（即传入实际的类型参数，也称为类型实参)。

在没有泛型之前：

```java
public void test(){
    // 使用泛型之前的情况
    ArrayList list = new ArrayList();
    // 存放学生成绩
    list.add(82);
    list.add(92);
    list.add(85);
    list.add(96);

    // 可能存储一些非成绩的对象
    list.add("Tom");

    // 这时候会报错：ClassCastException类型转换异常
    for (Object obj : list){
        int stuScore = (Integer) obj;
        System.out.println(stuScore);
    }
}
```

## 泛型的使用

 1. jdk5.0新增特性

 2. 在集合中使用泛型：
     总结：
     1. 集合接口或者集合类在jdk5.0时都修改为带泛型的结构
     2. 在实例化集合类的时候，可以指明具体的集合泛型
     3. 指明完之后，在集合类或者接口中凡是定义类或者接口的时候，内部结构（比如：方法， 构造器，属性）
         比如：add(E e) -----> 实例化之后：add(Integer e)
     4. 注意点：泛型的类型必须是类，不能是基本数据类型，需要用到基本数据类型的位置，拿包装类替换
     5. 如果实例化的时候没有指明泛型的类型，默认类型为java.lang.Object类型
     
     ```java
     @Test
         public void test(){
             // 使用泛型之前的情况
             ArrayList list = new ArrayList();
             // 存放学生成绩
             list.add(82);
             list.add(92);
             list.add(85);
             list.add(96);
     
             // 问题一：类型不安全， 可能存储一些非成绩的对象
     //        list.add("Tom");
     
             for (Object obj : list){
                 // 问题二：强转时会报错：ClassCastException类型转换异常
                 int stuScore = (Integer) obj;
                 System.out.println(stuScore);
             }
         }
     
         @Test
         public void test2(){
             // 集合中使用泛型的情况
             ArrayList<Integer> list = new ArrayList<Integer>();
             list.add(86);
             list.add(96);
             list.add(75);
             list.add(89);
             // 如果使用泛型的话，在我们添加的非法类型的时候就会直接报错
             // 编译时就是进行数据类型检查，保证数据的安全
             // list.add("AAA");
     
             // 方式一
             //for(Integer score : list){
             //    int stuScore = (int) score;
             //    System.out.println(stuScore);
             //}
     
             // 方式二:
             Iterator<Integer> iterator = list.iterator();
             while(iterator.hasNext()){
                 int stuScore = (int) iterator.next();
                 System.out.println(stuScore);
             }
         }
     
         // 在集合中泛型使用情况
         @Test
         public void test3(){
             Map<String, Double> map = new HashMap<String, Double>();
     
             map.put("Tom", 88.0);
             map.put("Jerry", 98.0);
             map.put("LiHua", 90.0);
     
             // 泛型的嵌套
             Set<Map.Entry<String, Double>> entry =  map.entrySet();
     
             Iterator<Map.Entry<String, Double>> iterator = entry.iterator();
     
             while(iterator.hasNext()){
                 Map.Entry<String, Double> next = iterator.next();
                 String key = next.getKey();
                 Double value = next.getValue();
                 System.out.println(key + "----" + value);
             }
         }
     ```
     
     3. 泛型在继承方面的使用
            虽然类A是类B的父类，但是G<A> 和 G<B>二者不具备子父类关系，二者是并列关系
     
     4. 通配符的使用：
        通配符: ?
        类A是类B的父类， G<A> 和 G<B> 是没有关系的，二者共同的父类是：G<?>
        使用通配符定义的变量，不能够向内部添加除了null意外的任何数据
     
        允许读取数据，读取数据的类型是Object
     
     5. 有限制条件的通配符的使用
         ? extends Person:
             G<? extends A> 可以作为G<A> 和 G<B>的父类， 其中B是A的子类
         ? super Person:
             G<? extends B> 可以作为G<A> 和 G<B> 的父类的， 其中B是A的父类

```java

     */
    @Test
    public void test6(){
        List<? extends Person> list1 = null;
        List<? super Person> list2 = null;

        List<Student> list3 = new ArrayList<Student>();
        List<Person> list4 = new ArrayList<Person>();
        List<Object> list5 = new ArrayList<Object>();

        list1 = list3;
        list1 = list4;
        // 下面这种情况就会报错，因为使用extends方法调用有限制的通配符，只能调用该类以及该类的子类
        // list1 = list5;

        // 这种情况也会报错，使用super调用的有限制的通配符，只能调用该类以及该类的父类
        // list2 = list3;
        list2 = list4;
        list2 = list5;

        // 读取数据
        list1 = list3;
        Person p = list1.get(0);
        // 编译不通过 使用extends 声明的有限制的通配符， 在获取对象的时候只能是extends的那个类
        // Student s = list1.get(0);

        list2 = list4;
        Object obj = list2.get(0);
        // 编译不通过,使用super声明的有限制的通配符，在获取对象的时候只能是Object
        // Person person = list2.get(0);

        // 写入数据：
        // 编译不通过 使用extend声明的有限制的通配符，不能够添加对象
        // list1.add(new Student());

        // 编译通过, 使用super声明的有限制的通配符，在添加对象的时候只能够添加super后面的类以及它的子类
        list2.add(new Person());
        list2.add(new Student());
        

    }

    @Test
    public void test5(){
        List<Object> list = null;
        List<String> list2 = null;

        List<?> list3 = null;
        // 使用通配符的话，下面这种情况就不会报错
        list3 = list2;
        list3 = list;

        list2 = new ArrayList<String>();
        list2.add("AA");
        list2.add("BB");
        list2.add("CC");
        list3 = list2;

        // 通配符定义的变量不能够添加除了null之外的任何数据
        // list3.add("DD"); 这样会报错
        list3.add(null);
        for(Object obj : list3){
            // 允许读取数据，读取数据的类型是Object
            System.out.println(obj); // AA BB CC null
        }
    }

    @Test
    public void test4(){
        Object obj = null;
        String str = null;
        obj = str;

        Object[] arr1 = null;
        String[] arr2 = null;
        arr1 = arr2;
//        这样编译不通过
//        Date date = new Date();
//        str = date;
        List<Object> list1 = null;
        List<String> list2 = null;
        // 此时的list1和list2不具备子父类关系
        // 编译不通过
        // list1 = list2
        /*
        反证法：
        假设list1 = list2 合理的话
        那么 list1.add(123); 因为 list1中的泛型是Object 所以list1可以添加数值为123的数据
        但是 又由于list1 和 list2 指向的是同一个内存地址，所以list1调用的add方法，同样也添加到了
        list2的对象中，但是list2的泛型是Sting类型的，这时候就导致，list2中有一些杂类出现

         */

    }

    @Test
    public void test(){
        // 使用泛型之前的情况
        ArrayList list = new ArrayList();
        // 存放学生成绩
        list.add(82);
        list.add(92);
        list.add(85);
        list.add(96);

        // 问题一：类型不安全， 可能存储一些非成绩的对象
//        list.add("Tom");

        for (Object obj : list){
            // 问题二：强转时会报错：ClassCastException类型转换异常
            int stuScore = (Integer) obj;
            System.out.println(stuScore);
        }
    }

    @Test
    public void test2(){
        // 集合中使用泛型的情况
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(86);
        list.add(96);
        list.add(75);
        list.add(89);
        // 如果使用泛型的话，在我们添加的非法类型的时候就会直接报错
        // 编译时就是进行数据类型检查，保证数据的安全
        // list.add("AAA");

        // 方式一
        //for(Integer score : list){
        //    int stuScore = (int) score;
        //    System.out.println(stuScore);
        //}

        // 方式二:
        Iterator<Integer> iterator = list.iterator();
        while(iterator.hasNext()){
            int stuScore = (int) iterator.next();
            System.out.println(stuScore);
        }
    }

    // 在集合中泛型使用情况
    @Test
    public void test3(){
        Map<String, Double> map = new HashMap<String, Double>();

        map.put("Tom", 88.0);
        map.put("Jerry", 98.0);
        map.put("LiHua", 90.0);

        // 泛型的嵌套
        Set<Map.Entry<String, Double>> entry =  map.entrySet();

        Iterator<Map.Entry<String, Double>> iterator = entry.iterator();

        while(iterator.hasNext()){
            Map.Entry<String, Double> next = iterator.next();
            String key = next.getKey();
            Double value = next.getValue();
            System.out.println(key + "----" + value);
        }
    }
```

## 泛型类，泛型接口，泛型方法

### 泛型类，泛型接口

1. 泛型类可能有多个参数，此时应将多个参数一起放在尖括号内。比如:<E1,E2,E3>

2. 泛型类的构造器如下: public GenericClass(){}。而下面是错误的: public GenericClass<E>(){}

3. 实例化后，操作原来泛型位置的结构必须与指定的泛型类型一致。

4. 泛型不同的引用不能相互赋值。

   尽管在编译时ArrayList< String >和ArrayList< Integer >是两种类型，但是，在运行时只有一个ArrayList被加载到JVM中。

   ```java
   ArrayList<String> list1 = null;
   ArrayList<Integer> list2 = null;
   // 泛型不同的引用不能相互赋值
   list1 = list2; // 这样是错误的
   ```

   

5. 泛型如果不指定，将被擦除，泛型对应的类型均按照Object处理，但不等价于Object。
       经验:泛型要使用一路都用。要不用，一路都不要用。

6. 如果泛型类是一个接口或抽象类，则不可创建泛型类的对象。

7. jdk1.7，泛型的简化操作:ArrayList<Fruit> flist = new ArrayList<>();

8. 8.泛型的指定中不能使用基本数据类型，可以使用包装类替换。

9. 在类/接口上声明的泛型，在本类或本接口中即代表某种类型，可以作为非静态属性的类型、非静态方法的参数类型、非静态方法的返回值类型。但在静态方法中不能使用类的泛型。

10. 异常类不能是泛型的

11. 不能使用new E]。但是可以:E]elements =(E)new Object[capacity]:

    ​	参考: ArrayList源码中声明:Object[]elementData，而非泛型参数类型数组。

12. 父类有泛型，子类可以选择保留泛型也可以选择指定泛型类型:
    子类不保留父类的泛型:按需实现

>没有类型擦除
>
>具体类型

子类保留父类的泛型:泛型子类

> 全部保留
>
> 部分保留

```java
class Fathre<T1, T2> {
    
}
// 子类不保留父类的泛型
// 1 没有类型
class Son1 extends Father { // 等价于 class Son1 extend Father<Object o1, Object o2>
    
}
// 2. 具体类型
class Son2 extends Father<Integer, String>{}

// 子类保留父类的泛型
// 1.全部保留
class Son3<T1, T2> extends Father<T1, T2>{}
// 2. 部分保留
class Son4<T2> extends Father<Integer, T2>{}
```

结论:子类必须是“富二代”，子类除了指定或保留父类的泛型，还可以增加 自己的泛型

### 泛型方法



实例：

泛型方法：在方法中出现了泛型结构，泛型参数和类的泛型参数没有关系。

换句话说，泛型方法所属类是不是泛型都没有关系 

泛型方法：可以声明为静态的，原因，泛型参数是在调用方法的时候确定的，并非在实例化类的时候确定

```java
<T> T[] toArray(T[] a);

public <E> List<E> copyFromArrayToList(E[] arr){}
```











# IO流原理及流的分类

## File类的使用

1. File类的一个对象，代表一个文件或者一个文件目录（文件夹）
2. File类生命在Java.io包下
3. File类中涉及到文件或者文件目录的创建，删除，重命名，修改时间，文件大小等方法，并未涉及到文件读写内容的的操作，如果需要读取或者写入文件内容的操作，则必须使用IO流来操作
4. 后续FIle类对象常会作为参数传递到流的构造器中，指明读取或写入的“终点”

### 常用构造器

1. 如何创建File类的实例
    File(String filePath)
    File(String parentPath, String childPath)
    File(File parentFile, String childPath)

2. 相对路径：相较于某个路径下，指明的路径。
   绝对路径：包含盘符在内的文件或文件目录的路径

   说明：

   IDEA中：如果在开发中使用的是单元测试方法，相对路径为当前的Module下。

   如果使用的main方法的话，相对路径为当前的工程下

3. 路径分隔符
    windows：\\
    unix: /

```java
@Test
public void test(){
    // 构造器一:指明确定的文件
    // 方式一： 相对路径
    File file = new File("hello.txt"); // 相对于当前的module
    // 方式二：绝对路径
    File file1 = new File("E:\\JavaProject\\IOModel\\ho.txt");
    System.out.println(file); // hello.txt
    System.out.println(file1); // E:\JavaProject\IOModel\ho.txt

    // 构造器二：没有指明确定的文件，是一个文件目录（文件夹）
    File file3 = new File("E:\\JavaProject","child");
    System.out.println(file3);  // E:\JavaProject\child

    // 构造器三：
    File file4 = new File(file3, "hi.txt");
    System.out.println(file4);
}
```

### 常用方法

{% label 获取功能： red %}

- public string getAbsolutePath():获取绝对路径public string getPath() :获取路径
- public string getName() :获取名称
- public string getParent():获取上层文件目录路径。若无，返回nuLl
- public long length() :获取文件长度（即:字节数）。不能获取目录的长度。
- public long lastModified():获取最后一次的修改时间，毫秒值

```java
@Test
    public void test1(){
        File file1 = new File("hello.txt");
        File file2 = new File("E:\\JavaProject\\IOModel\\hi.txt");

        System.out.println(file1.getAbsoluteFile());  // E:\JavaProject\IOModel\hello.txt
        System.out.println(file1.getPath());  // hello.txt
        System.out.println(file1.getName()); // hello.txt
        System.out.println(file1.getParentFile()); // null
        System.out.println(file1.length());  // 0
        System.out.println(file1.lastModified()); // 0

        System.out.println("******************");

        System.out.println(file2.getAbsoluteFile()); // E:\JavaProject\IOModel\hi.txt
        System.out.println(file2.getPath());  // E:\JavaProject\IOModel\hi.txt
        System.out.println(file2.getName()); // hi.txt
        System.out.println(file2.getParentFile());  // E:\JavaProject\IOModel
        System.out.println(file2.length());  // 6
        System.out.println(file2.lastModified()); //  1655178923369
    }
```

{% label 下面两个适用于文件目录 red %}

- public string[ ] list():获取指定目录下的所有文件或者文件目录的名称数组
- public File[] listFiles():获取指定目录下的所有文件或者文件目录的File数组

```java
@Test
public void text1(){
    File file = new File("C:\\Users\\Mr.zhang\\Desktop","Java作业");
    String[] list = file.list();
    for(String name : list){
        System.out.println(name);  // 输出文件名称
    }

    File[] files = file.listFiles();
    for(File file1 : files){
        System.out.println(file1);  // 输出文件路径
    }
}
```

{% label 下面这个适用于该文件 red %}

- public boolean renameTo(File dest)

    比如：file1.renameTo(file2)为例要想保证返回ture。需要file1在内存中是存在的，file2在内存中不存在

    将file1文件目标改为file2的文件目标

    ```java
    @Test
    public void test2(){
        File file = new File("E:\\JavaProject\\IOModel\\hi.txt");
        File file2 = new File("C:\\Users\\Mr.zhang\\Desktop\\hello.txt");
        System.out.println(file.renameTo(file2));
    }
    ```

 {% label 下面这个方法适用于文件判断功能 red %}
- public boolean isDirectory():判断是否是文件目录

- public boolean isFile():判断是否是文件

- public boolean exists():判断是否存在

- public boolean canRead():判断是否可读

- public boolean canWrite():判断是否可写

- public boolean isHidden():判断是否隐藏

  ```java
  @Test
  public void test3(){
      File file = new File("hi.txt");
      // 当文件存在的使用有以下几种情况， 当文件不存在的时候，返回值都为false
      System.out.println(file.isDirectory()); // false
      System.out.println(file.isFile());    // true
      System.out.println(file.exists());      // true
      System.out.println(file.canRead());     // true
      System.out.println(file.canWrite());    // ture
      System.out.println(file.isHidden());    // false
  
      // 当文件为文件目录时：
      file = new File("E:\\JavaProject\\IOModel");
      System.out.println(file.isDirectory()); // true
      System.out.println(file.isFile());    // false
      System.out.println(file.exists());      // true
      System.out.println(file.canRead());     // true
      System.out.println(file.canWrite());    // ture
      System.out.println(file.isHidden());    // false
  }
  ```

{% label File类创建功能 red %}

- public boolean createNewFile():创建文件。若文件存在，则不创建，返回false
- public boolean mkdir() :创建文件目录。如果此文件目录存在，就不创建了。如果此文件目录的上层目录不存在，也不创建。
- public boolean mkdirs():创建文件目录。如果上层文件目录不存在，一并创建

注意事项:如果你创建文件或者文件目录没有写盘符路径，那么，默认在项目路径下。

{% label File类删除功能 red %}

- public boolean delete():删除文件或者文件夹删除注意事项:

  Java中的删除不走回收站。

  要删除一个文件目录，请注意该文件目录内{% label 不能包含 red %}文件或者文件目录





## IO流

 

IO是Input/Output的缩写，I/O技术是非常实用的技术，{% label 用于处理设备之间的数据传输 red %}。如读/写文件，网络通讯等。

Java程序中，对于数据的输入/输出操作以{% label “流(stream)” red %}的方式进行。

java.io包下提供了各种“流”类和接口，用以获取不同种类的数据，并通过{% label 标准的方法 red %}输入或输出数据。

1. 流的分类方式：

   按操作数据单位不同分为:字节流(8 bit)，字符流(16 bit)

   按数据流的流向不同分为:输入流，输出流

   按流的角色的不同分为:节点流，处理流

   | 抽象基类 |    字节流    | 字符流 |
   | :------: | :----------: | :----: |
   |  输入流  | InputStream  | Reader |
   |  输出流  | OutputStream | Writer |

   

IO流体系：

|    分类    |      字节输入流      |      字节输出流       |    字符输入流     |     字符输出流     |
| :--------: | :------------------: | :-------------------: | :---------------: | :----------------: |
|  抽象基类  |     InputStream      |     OutputStream      |      Reader       |       Writer       |
|  访问文件  |   FileInputStream    |   FileOutputStream    |    FileReader     |     FileWriter     |
|  访问数组  | ByteArrayInputStream | ByteArrayOutputStream |  CharArrayReader  |  CharArrayWriter   |
|  访问管道  |   PipedInputStream   |   PipedOutputStream   |    PipedReader    |    PipedWriter     |
| 访问字符串 |                      |                       |   StringReader    |    StringWriter    |
|   缓冲流   | BufferedInputStream  |  BufferedInputStream  |  BufferedReader   |   BufferedWriter   |
|   转换流   |                      |                       | InputStreamReader | OutputStreamWriter |
|   对象流   |  ObjectInputStream   |  ObjectOutputStream   |                   |                    |
|            |  FilterInputStream   |  FilterOutputStream   |   FilterReader    |    FilterReader    |
|   打印流   |                      |      PrintStream      |                   |    PrintWriter     |
| 推回输入流 | PushbackInputStream  |                       |  PushbackReader   |                    |
|   特殊流   |   DataInputStream    |   DataOutputStream    |                   |                    |

### 字符流的读入

read 方法，返回值是读入字符的ASCII码

```java
@Test
public void testFileReader() throws IOException {
    FileReader fr = null;
    try{
        // 1.实例化File类的对象，指明要操作的文件
        File file = new File("hello.txt	");

        // 2.提供具体的流
        FileReader fr = new FileReader(file);

        // 3.数据的输入
        // read():返回读入的一个字符，如果达到文件默认，返回-1
        int data = fr.read();
        while(data != -1){
            System.out.println((char)data);
            data = fr.read();
        }
    }catch(IOException e){
        e.printStackTrace();
    }finally{
        try{
           	// 4.流的关闭操作
   			fr.close(); 
        }catch(IOException e){
            e.printStackTrace();
        }
    }
    
    
}
```

流读入的说明：

1. read()的理解，返回读入的一个字符，如果达到文件末尾，返回-1
2. 异常的处理：为了保证流资源可以执行关闭操作，需要使用try-catch-finally处理
3. 读入文件操作一定要存在，否则会报FileNotFoundException

对read()操作升级，使用read的重载方法

read(char[]) 返回值是读入的几个字符  

```java
 public void testFileReader() throws IOException {
        FileReader fr = null;
        try {
            //1.File类的实例化
            File file = new File("hello.txt");

            //2.FileReader流的实例化
            fr = new FileReader(file);

            //3.读入的操作
            char[] cbuf = new char[5];
            int len;
            while((len = fr.read(cbuf)) != -1){
                // 方式一：
                // 下面这种写法是错误的，因为会涉及到未写入和读取的操作
//                for( int i = 0; i < cbuf.length; i++){
//                    System.out.println(cbuf[i]);
//                }
                // 下面这种操作就可以完美的输出文件中的所有内容
//                for(int i = 0; i < len; i++){
//                    System.out.println(cbuf[i]);
//                }

                // 方式二：
                // 下面这种方式依旧错误，错因和方式一种的原因相同
//                String str = new String(cbuf);
//                System.out.println(str);
                // 下面这种方式是正确的：
                String str = new String(cbuf, 0, len);
                System.out.print(str);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            if(fr != null){
                //4.资源的关闭
                fr.close();
            }
        }

}
```

### 字符流的输出

说明：

1. 输入操作，对应的file可以是不存在的，并不会报异常

   1. File对应的硬盘中的文件如果不存在，在输出的过程中，会自动创建此文件。
   2. File对应的硬盘中的文件如果存在:
      1. 如果流使用的构造器是:Filewriter(file,false) / FiLewriter(file):对原有的文件进行覆盖
      2. 如果流使用的构造器是:Filewriter(file,true)，不会对原有的文件进行覆盖，而是在原有的文件基础追加内容

   ```java
   public void testFileWriter() Throws IOException{
       // 1. 提供File类的对象，指明写出到的文件：
       File file = new File("hello.txt");
       // 2.提供FileWriter的对象，用于数据的写出, 使用false参数对原数据进行覆盖
       FileWriter fw = new FileWriter(file, false);
       
       // 3.写出的操作
       fw.writer("I have a dream!\n");
       fw.writer("you need to have a dream!");
       
       // 4. 流的资源的关闭
       fw.close();
   }
   ```

   {% label 字符型总测试 red %}
   
   ```java
   public void testFileReaderWriter(){
       FileReader fr = null;
       FileWriter fw = null;
       try {
           // 1.创建File类的对象，指明写入和写出的文件
           File srcFile = new File("hello.txt");
           File destFile = new File("hello1.txt");
   
           // 创建输入流和输出流
           fr = new FileReader(srcFile);
           fw = new FileWriter(destFile);
   
           // 数据的读入和写出操作
           char[] cbuf = new char[5];
           int len = 0;
           while((len = fr.read(cbuf))!=-1){
               String str = new String(cbuf, 0, len);
               fw.write(str);
           }
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           // 流的关闭
           try {
               fr.close();
           } catch (IOException e) {
               throw new RuntimeException(e);
           }
           try {
               fw.close();
           } catch (IOException e) {
               throw new RuntimeException(e);
           }
       }
   
   }
   ```
   

### 字节流的读入和输出

```java
public void testPicture() {
    FileInputStream fis = null;
    FileOutputStream fos = null;
    try {
        // 文件的创建
        File srcFile = new File("wallhaven-72vwpo.jpg");
        File destFile = new File("picture2.jpg");
		// 流的创建
        fis = new FileInputStream(srcFile);
        fos = new FileOutputStream(destFile);
		// 流的读取和写入操作
        // 方式一
        // fos.write(fis.readAllBytes());
        // 方式二：
        byte[] cbuf = new byte[1024];
        int len = 0;
        while((len = fis.read(cbuf)) != -1){
            fos.write(cbuf, 0, len);
        }
        
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        try {
            fis.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        try {
            fos.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
```



### 缓冲流的使用

四种缓冲流：

1. BufferedInputStream
2. BufferedOutputStream
3. BufferedReader
4. BufferedWirter

缓冲流的作用：提高流的读取和写入速度

```java
public void BufferTest() {
    FileInputStream fis = null;
    FileOutputStream fos = null;
    BufferedInputStream bis = null;
    BufferedOutputStream bos = null;
    try {
        // 1.造文件
        File srcFile = new File("wallhaven-72vwpo.jpg");
        File destFile = new File("picture2.jpg");

        // 2.造流
        // 2.1 造节点流
        fis = new FileInputStream(srcFile);
        fos = new FileOutputStream(destFile);
        // 2.2 造缓冲流
        bis = new BufferedInputStream(fis);
        bos = new BufferedOutputStream(fos);

        // 3. 复制的细节：读取，写入
        byte[] buffer = new byte[1024];
        int len;
        while ((len = bis.read(buffer)) != -1) {
            bos.write(buffer, 0, len);
        }
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        // 4. 资源关闭
        // 要求：先关闭外层的流，在关闭内层的流
        try {
            bos.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        try {
            bis.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        // 说明：关闭外层流的同时，内层流也会自动的进行关闭，关于内层流的关闭，我们可以省略
        //            fos.close();
        //            fis.close();
    }

}
```



### 转换流

提供了字符流和字节流之间的转换

1. Java提供了两个转换流

​	InputStreamReader：将InputStream转换为Reader：将一个字节的输入流转换为字符的输入流

​	OutputStreamWriter：将Writer转换为OutputStream：将一个字符的输出流转换成字节的输出流

2. 作用：提供字节流和字符流之间的转换

3. 解码：字节，字节数组 ---> 字符数组，字符串

   编码：字符数组，字符串 ---> 字节，字节数组

```java
public void InputStreamReaderTest() {
    FileInputStream fis = null;
    InputStreamReader isr = null;
    try {
        fis = new FileInputStream("hello.txt");
        // 以下这种方法调用的是默认编码格式
        /// isr = new InputStreamReader(fis);
        // 以下这种方式调用的是自定义的编码格式
        isr = new InputStreamReader(fis, "utf-8");

        char[] cbuf = new char[20];
        int len;
        while ((len = isr.read(cbuf))!=-1){
            String str = new String(cbuf,0,len);
            System.out.println(str);
        }
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        if (isr != null){
            try {
                isr.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
```

4. 字符集：

   ASCIl:美国标准信息交换码。

   ​	用一个字节的7位可以表示。

   ISO8859-1:拉丁码表。欧洲码表

   ​	用一个字节的8位表示。
   GB2312:中国的中文编码表。最多两个字节编码所有字符

   GBK:中国的中文编码表升级，融合了更多的中文文字符号。最多两个字节编码

   Unicode:国际标准码，融合了目前人类使用的所有字符。为每个字符分配唯一的字符码。所有的文字都用两个字节来表示。

   UTF-8:变长的编码方式，可用1-4个字节来表示一个字符。



### 标准输入输出流

System.in和System.out分别代表了系统标准的输入和输出设备

默认输入设备是:键盘，输出设备是:显示器

System.in的类型是InputStream

System.out的类型是PrintStream，其是OutputStream的子类FilterOutputStream 的子类

重定向:通过System类的setIn，setOut方法对默认设备进行改变。默认是输出到控制台，和从控制台中获取，如果我们使用setIn或者setOut的话，可以改变读入和写出的位置

> public static void setIn(InputStream in)
>
> public static void setOut(PrintStream out)

练习：将输入的字符都转换成大写的，当输入e或者exit的时候退出

```java
public static void main(String[] args) throws IOException {
    InputStreamReader isr = new InputStreamReader(System.in);
    BufferedReader br = new BufferedReader(isr);
    while(true){
        System.out.println("请输入字符串");
        String data = br.readLine();
        if("e".equals(data) || "exit".equals(data)){
            System.out.println("程序结束");
            break;
        }
        System.out.println(data.toUpperCase(Locale.ROOT));
    }
}
```



### 打印流

实现将基本数据类型的数据格式转化为字符串输出

打印流: PrintStream和PrintWriter

> 提供了一系列重载的print()和println()方法，用于多种数据类型的输出
>
> PrintStream和PrintWriter的输出不会抛出IOException异常
>
> PrintStream和PrintWVriter有自动flush功能
>
> PrintStream打印的所有字符都使用平台的默认字符编码转换为字节。在需要写入字符而不是写入字节的情况下，应该使用PrintWriter类。
>
> System.out返回的是PrintStream的实例

```java
public void test2() {
    PrintStream ps = null;
    try {
        FileOutputStream fos = new FileOutputStream("E:\\JavaProject\\IOModel\\IO\\test.txt");
        ps = new PrintStream(fos);
        if (ps != null){
            System.setOut(ps);
        }
        for(int i = 1; i < 255; i++){
            System.out.print((char) i);
            if(i % 50 == 0){
                System.out.println();
            }
        }
    } catch (FileNotFoundException e) {
        throw new RuntimeException(e);
    } finally {
        if(ps != null){
            ps.close();
        }
    }
}
```



### 数据流

为了方便地操作Java语言的基本数据类型和String的数据，可以使用数据流。

作用：用于读取或者写出基本数据类型的变量或字符串

数据流有两个类:(用于读取和写出基本数据类型、String类的数据)

> DatalnputStream和 DataOutputStream
>
> 分别“套接”在InputStream和 OutputStream子类的流上

DatalnputStream中的方法

> boolean readBoolean()	byte readByte()
>
> char readChar()	float readFloat()
>
> double readDouble()	short readShort()
>
> long readLong()	int readlnt()
>
> String readUTF()	void readFully(byte[] b)

DataOutputStream中的方法：

> 将上述的方法的read改为相应的write即可。

```java
@Test
public void test3() {
    DataOutputStream dos = null;
    try {
        FileOutputStream fos = new FileOutputStream("E:\\JavaProject\\IOModel\\IO\\test.txt");
        dos = new DataOutputStream(fos);
        dos.writeUTF("张锦昊");
        dos.writeInt(21);
        dos.writeBoolean(true);
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        if (dos != null){
            try {
                dos.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}
@Test
public void test4() {
    DataInputStream dis = null;
    try {
        dis = new DataInputStream(new FileInputStream("test.txt"));
        String name = dis.readUTF();
        int age = dis.readInt();
        boolean isMale = dis.readBoolean();
        System.out.println("姓名："+name+"\n年龄："+age+"\n男性："+isMale);
    } catch (IOException e){
        e.printStackTrace();
    } finally {
      if(dis != null){
          try {
              dis.close();
          } catch (IOException e) {
              throw new RuntimeException(e);
          }
      }
    }
}
```



### 对象流

ObjectInputStream和OjbectOutputSteam

用于存储和读取基本数据类型数据或对象的处理流。它的强大之处就是可以把Java中的对象写入到数据源中，也能把对象从数据源中还原回来。

{% label 序列化 red %}:用ObjectOutputStream类保存基木类型数据或对象的机制

{% label 反序列化 red %}:用ObjectInputStream类读取基木类型数据或对象的机制

ObjectOutputStream和IObjectInputStream不能序列化static和ltransient修饰的成员变量

{% label 对象的序列化： red %}

1. 对象的序列化机制：

   对象序列化机制允许把内存中的Java对象转换成平台无关的二进制流，从而允许把这种二进制流持久地保存在磁盘上，或通过网络将这种二进制流传输到另一个网络节点。当其它程序获取了这种二进制流，就可以恢复成原来的Java对象|

2. 序列化的好处：序列化的好处在于可将任何实现了Serializable接口的对象转化为字节数据使其在保存和传输时可被还原

3. 序列化是 RMI (Remote Method Invoke-远程方法调用）过程的参数和返回值都必须实现的机制，而 RMI是JavaEE的基础。因此序列化机制是JavaEE平台的基础

4. 如果需要让某个对象支持序列化机制，则必须让对象所属的类及其属性是可序列化的，为了让某个类是可序列化的，该类必须实现如下两个接口之一。否则，会抛出NotSerializableException异常
   >Serializable
   >Externalizable 

5. 凡是实现Serializable接口的类都有一个表示序列化版本标识符的静态变量:

> private static final long serialVersionUID;
>
> serialVersionUID用来表明类的不同版本间的兼容性。简言之，其目的是以序列化对象进行版本控制，有关各版本反序列化时是否兼容。
>
> 如果类没有显示定义这个静态变量[它的值是Java运行时环境根据类的内部细节自动生成的。若类的实例变量做了修改，seriaVersionUID可能发生变化。故建议，显式声明。
>
> 

6. 简单来说，Java的序列化机制是通过在运行时判断类的serialVersionUID来验证版本一致性的。在进行反序列化时，JVM会把传来的字节流中的

   serialVersionUID与本地相应实体类的serialVersionUID进行比较，如果相同就认为是一致的，可以进行反序列化，否则就会出现序列化版本不一致的异常。(InvalidCastException)

7. ObjectOutputStream 和ObjectInputStream 不能序列化static和transient修饰的成员变量



```java
/*
序列化的过程，将内存中的java对象保存到磁盘中，或者通过网络传输出去
使用ObjectOutputStream实现
 */
@Test
public void text(){
    ObjectOutputStream oos = null;
    try {
        oos = new ObjectOutputStream(new FileOutputStream(new File("Object.dat")));

        oos.writeObject(new String("我爱中国"));
        oos.flush();
        oos.writeObject(new Person("张三", 21));
        oos.flush(); // 刷新操作
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        if (oos != null){
            try {
                oos.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }
}

/*
反序列化过程：将磁盘文件中的对象还原为内存中的一个java对象
如果是自定义类的话需要实现Serializable接口，并设置一个serialVersionUID的全局常量
除了当前类需要实现Serializable接口除外，还要保证其内部所有属性也必须是可序列化的
 */
@Test
public void text1() {
    ObjectInputStream ois = null;
    try {
        ois = new ObjectInputStream(new FileInputStream("Object.dat"));

        Object obj1 = ois.readObject();
        String str = (String) obj1;
        System.out.println(str);

        Object obj2 = ois.readObject();
        Person person = (Person) obj2;
        System.out.println(person);
    } catch (IOException e) {
        throw new RuntimeException(e);
    } catch (ClassNotFoundException e) {
        throw new RuntimeException(e);
    } finally {
        if (ois != null){
            try {
                ois.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
    }

}
```

### 随机存取文件流

RandomAccessFile声明在java.io包下，但直接继承于java.lang.Object类。并且它实现了Datalnput、DataOutput这两个接口，也就意味着这个类既可以读也可以写。

RandomAccessFile类支持“随机访问”的方式，程序可以直接跳到文件的任意地方来读、写文件

>支持只访问文件的部分内容
>
>可以向己存在的文件后追加内容

RandomAccessFile对象包含一个记录指针，用以标示当前读写处的位置。

RandomAccessFile类对象可以自由移动记录指针:

> long getFilePointer():获取文件记录指针的当前位置
>
> void seek(long pos):将文件记录指针定位到pos位置

创建RandomAccessFile类实例需要指定一个mode参数，该参数指定RandomAccessFile的访问模式:
>r:以只读方式打开
>
>rw:打开以便读取和写入
>
>rwd:打开以便读取和写入;同步文件内容的更新
>
>rws:打开以便读取和写入;同步文件内容和元数据的更新

 如果模式为只读r。则不会创建文件，而是会去读取一个已经存在的文件，如果读取的文件不存在则会出现异常。如果模式为rw读写。如果文件不存在则会去创建文件，如果存在则不会创建。

```java
/*
 *  RandomAccessFile的使用
 *  1. 直接继承与Java.lang.Object类 实现了DataInput和DataOutPut接口
 *  2. RandomAccessFile 既可以作为输入流也可以作为输出流
 *  3. 如果RandomAccessFile作为输出流时，写出到的文件如果不存在，则在执行过程中自动创建如果写出到的文件存在，则	*	会对原有文件内容进行覆盖。(默认情况下，从头覆盖)
 *
 */
public void test() {
    RandomAccessFile raf = null;
    RandomAccessFile raf1 = null;
    try {
        raf = new RandomAccessFile("wallhaven-72vwpo.jpg", "r");
        raf1 = new RandomAccessFile("picture1.jpg", "rw");

        byte[] buffer = new byte[1024];
        int len;
        while((len = raf.read(buffer))!=-1){
            raf1.write(buffer,0,len);
        }
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        if (raf != null){
            try {
                raf.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }
        if( raf1 != null){
            try {
                raf1.close();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }

    }
}
```



### NIO.2中Path， Paths，Files类的使用

Java NIO (New lO，Non-Blocking lO)是从Java 1.4版本开始引入的一套新的IOAPI，可以替代标准的Java lO API。NIO与原来的IO有同样的作用和目的，但是使用的方式完全不同，NIO支持面向缓冲区的(IO是面向流的)、基于通道的IO操作。NIO将以更加高效的方式进行文件的读写操作。

JavaAPI中提供了两套NIO，一套是针对标准输入输出NIO，另一套就是网络编程NIO。

>java.nio.channels.Channel
>
>> FileChannel:处理本地文件
>>
>> SocketChannel:TCP网络编程的客户端的Channel
>>
>> ServerSocketChannel:TCP网络编程的服务器端的Channel
>>
>> DatagramChannel:UDP网络编程中发送端和接收端的Channel

早期的Java只提供了一个File类来访问文件系统，但File类的功能比较有限，所提供的方法性能也不高。而且，大多数方法在出错时仅返回失败，并不会提供异常信息。

NIO.2为了弥补这种不足，引入了Path接口，代表一个平台无关的平台路径，描述了目录结构中文件的位置。{% label Path可以看成是File类的升级版本 red %}，实际引用的资源也可以不存在。

以前的IO操作符是这样写的：

import java.io.File;

File file = new File("index.html");

但在Java7中，我们可以这样写:

import java.nio.file.Path;

import java.nio.file.Paths;

Path path = Patts.get("index.html");



同时，NIO.2在java.nio.file包下还提供了Files、Paths工具类，Files包含了大量静态的工具方法来操作文件; Paths则包含了两个返回Path的静态工厂方法。

Paths类提供的静态get()方法用来获取Path 对象:

>static Path get(String first, String ... more):用于将多个字符串串连成路径
>
>static Path get(URI uri):返回指定uri对应的Path路径





# 网络编程

1. 计算机网络

   把分布在不同地理区域的计算机与专门的外部设备用通信线路互连成一个规模大、功能强的网络系统，从而使众多的计算机可以方便地互相传递信息、共享硬件、软件、数据信息等资源。

2. 网络编程的目的：

   直接或者间接的通过网络协议与其他计算机实现数据交换，进行通讯

3. 网络编程的两个主要目的：

   如何精确的定位网络上一台或者多台主机，定位主机上特定的应用

   找到主机后如何可靠高效的进行数据的传输

## 网络通讯中的两个要素

### IP和端口号

IP：每一个主机在网络上都有唯一的IP地址(InetAddress)

1. 唯一的标识Internet上的计算机（通信实体)
2. 本地回环地址(hostAddress): 127.0.0.1 主机名(hostName): localhost
3. IP地址分类方式1:IPV4和 IPV6

> IPV4:4个字节组成，4个0-255。大概42亿，30亿都在北美，亚洲4亿。2011年初已经用尽。以点分十进制表示，如192.168.0.1
>
> IPV6:128位（16个字节)，写成8个无符号整数，每个整数用四个十六进制位表示，数之间用冒号(:）分开，如:3ffe:3201:1401:1280:c8ff:fe4d:db39:1984

4. IP地址分类方式2:公网地址(万维网使用)和私有地址(局域网使用)。192.168开头的就是私有址址，范围即为192.168.0.0--192.168.255.255，专门为组织机构内部使用
5. 特点:不易记忆



端口号：标识正在计算机上运行的进行（程序）

不同的进程有不同的端口号

被规定为一个16位的整数0~65535。

端口分类:

> 公认端口:0~1023。被预先定义的服务通信占用（如:HTTP占用端口80，FTP占用端口21，Telnet占用端口23)
>
> 注册端口:1024~49151。分配给用户进程或应用程序。（如: Tomcat占用端口8080，MySQL占用端口3306，Oracle占用端口1521等）。
>
> 动态/私有端口:49152~65535。

端口号与IP地址组合得出一个网络套接字：Socket

```java
/*
 *	    1. IP唯一标识 Internet上的计算机(通讯实体)
 *      2. 在java中使用InetAddress类代表IP
 *      3. IP分类，IPv4 和 IPv6； 万维网和局域网
 *      4. 域名： www.baidu.com
 *      5. DNS域名解析服务器
 *      6. 本地回路地址：127.0.0.1 对应着localhost
 *      7. 实例化InetAddress：两个方法：getName(String host), getLocalHost()
 *          两个常用方法：getHostName() / getHostAddress()
 *      8. 端口号：正在计算机上运行的程序
 *          要求：不同的进程有不同的端口号
 *          范围：被规定为一个16为整数0~65535
 *      9. 端口号和IP地址组合成一个网络套字：Scoket
*/
public static void main(String[] args) {
    try {
        InetAddress inet = InetAddress.getByName("zjhinsist.github.io");
        System.out.println(inet);

        InetAddress inet1 = InetAddress.getByName("192.168.10.14");
        System.out.println(inet1);

        // 获取本机
        InetAddress inet2 = InetAddress.getByName("127.0.0.1");
        System.out.println(inet2);

        // 获取本机
        InetAddress inet3 = InetAddress.getLocalHost();
        System.out.println(inet3);

        // 获取域名和本机
        System.out.println(inet.getHostAddress());
        System.out.println(inet.getHostName());

    } catch (UnknownHostException e) {
        throw new RuntimeException(e);
    } finally {
    }
}
```

### 网络通讯协议

![image-20220618174613339](https://s2.loli.net/2022/11/04/KyYC93d6HwAElxB.png)

网络通信协议

计算机网络中实现通信必须有一些约定，即通信协议，{% label 对速率、传输代码、代码结构、传输控制步骤、出错控制等制定标准。 red %}

问题:网络协议太复杂

计算机网络通信涉及内容很多，比如指定源地址和目标地址，加密解密，压缩解压缩，差错控制，流量控制，路由控制，如何实现如此复杂的网络协议呢

通信协议分层的思想

在制定协议时，把复杂成份分解成一些简单的成份，再将它们复合起来。最常用的复合方式是层次方式，即{% label 同层间可以通信、上一层可以调用下一层，而与再下一层不发生关系 red %}。各层互不影响，利于系统的开发和扩展。

{% label TCP和UDP red %}

TCP协议:
>使用TCP协议前，须先建立TCP连接，形成传输数据通道
>
>传输前，采用“三次握手”方式，点对点通信，是可靠的
>
>TCP协议进行通信的两个应用进程:客户端、服务端。
>
>在连接中可进行大数据量的传输
>
>传输完毕，需释放已建立的连接，效率低(“四次挥手”)

UDP协议:

> 将数据、源、目的封装成数据包，不需要建立连接
>
> 每个数据报的大小限制在64K内
>
> 发送不管对方是否准备好，接收方收到也不确认，故是不可靠的
>
> 可以广播发送
>
> 发送数据结束时无需释放资源，开销小，速度快


## TCP网络编程

1. 客户端发信息给服务端，服务端将数据显示在控制台上

   ```java
   @Test
   public void client(){
       Socket socket = null;
       OutputStream os = null;
       try {
           // 1. 创建Socket对象，指明服务器端的IP和端口号
           InetAddress inet = InetAddress.getByName("127.0.01");
           socket = new Socket(inet, 8899);
           // 2. 获取一个输出流，用于输出数据
           os = socket.getOutputStream();
   
           // 3. 写出数据
           // 因为os写入的需要时字节流文件，所以我们需要使用getBytes将字符串转换成字节流
           os.write("你好，我是客户端".getBytes(StandardCharsets.UTF_8));
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           if (os != null){
               try {
                   os.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
   
           if (socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
       }
   
   }
   
   // 服务端
   @Test
   public void server(){
       Socket socket = null;
       InputStream inputStream = null;
       try {
           // 1. 创建一个服务器端的ServerSocket， 指明自己的端口号
           ServerSocket serverSocket = new ServerSocket(8899);
           // 2. 调用accept() 表示接受来在客户端的socket
           socket = serverSocket.accept();
           // 3. 获取输入流
           inputStream = socket.getInputStream();
           // 4. 从输入流中读取数据
           ByteArrayOutputStream baos = new ByteArrayOutputStream();
           byte[] buffer = new byte[20];
           int len;
           while ((len = inputStream.read(buffer)) != -1){
               baos.write(buffer, 0, len);
           }
           System.out.println(baos.toString());
   
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           if (inputStream != null){
               try {
                   inputStream.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
   
           if (socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
       }
   
   
   }
   ```

2. 客户端发送文件给服务器端，服务器端将文件保存在本地

   ```java
   @Test
   public void client() {
       Socket socket = null;
       OutputStream os = null;
       FileInputStream fis = null;
       try {
           // 1. 创建Socket对象
           InetAddress inetAddress = InetAddress.getByName("127.0.0.1");
           socket = new Socket(inetAddress, 8899);
           // 2. 获取输出流， 向服务器端输出
           os = socket.getOutputStream();
           // 3. 获取一个输入流，从内存中读取文件
           fis = new FileInputStream("wallhaven-72vwpo.jpg");
           // 4. 向服务器端写数据
           byte[] buffer = new byte[1024];
           int len;
           while((len = fis.read(buffer)) != -1){
               os.write(buffer, 0, len);
           }
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           if (os != null){
               try {
                   os.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (fis != null){
               try {
                   fis.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
       }
   }
   
   @Test
   public void server(){
       ServerSocket ss = null;
       Socket socket = null;
       InputStream inputStream = null;
       FileOutputStream fos = null;
       try {
           // 1. 创建一个服务器端的对象
           ss = new ServerSocket(8899);
           // 2. 读取客户端发来的数据
           socket = ss.accept();
           // 3. 创建一个输入流
           inputStream = socket.getInputStream();
           fos = new FileOutputStream("picture.jpg");
           // 4. 将客户端发来的图片写入到本地
           byte[] buffer = new byte[1024];
           int len;
           while((len = inputStream.read(buffer)) != -1){
               fos.write(buffer, 0, len);
           }
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           if (fos != null){
               try {
                   fos.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (inputStream != null){
               try {
                   inputStream.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (ss != null){
               try {
                   ss.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
       }
   }
   ```

3. 从客户端发送文件到服务端，服务端保存到本地。并返回发送成功到服务端。并关闭相应的链接

   ```java
   @Test
   public void client() {
       Socket socket = null;
       OutputStream os = null;
       FileInputStream fis = null;
       ByteArrayOutputStream baos = null;
       try {
           // 1. 创建Socket对象
           InetAddress inetAddress = InetAddress.getByName("127.0.0.1");
           socket = new Socket(inetAddress, 8899);
           // 2. 获取输出流， 向服务器端输出
           os = socket.getOutputStream();
           // 3. 获取一个输入流，从内存中读取文件
           fis = new FileInputStream("wallhaven-72vwpo.jpg");
           // 4. 向服务器端写数据
           byte[] buffer = new byte[1024];
           int len;
           while((len = fis.read(buffer)) != -1){
               os.write(buffer, 0, len);
           }
   
           // 停止传送数据
           socket.shutdownOutput();
   
           // 接受来自服务器端的反馈
           InputStream inputStream = socket.getInputStream();
           baos = new ByteArrayOutputStream();
           while((len = inputStream.read(buffer)) != -1){
               baos.write(buffer, 0, len);
           }
           System.out.println("好好好");
           System.out.println(baos.toString());
   
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           if (os != null){
               try {
                   os.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (fis != null){
               try {
                   fis.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (baos != null){
               try {
                   baos.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
       }
   }
   
   @Test
   public void server(){
       ServerSocket ss = null;
       Socket socket = null;
       InputStream inputStream = null;
       FileOutputStream fos = null;
       OutputStream outputStream = null;
       try {
           // 1. 创建一个服务器端的对象
           ss = new ServerSocket(8899);
           // 2. 读取客户端发来的数据
           socket = ss.accept();
           // 3. 创建一个输入流
           inputStream = socket.getInputStream();
           fos = new FileOutputStream("picture.jpg");
           // 4. 将客户端发来的图片写入到本地
           byte[] buffer = new byte[1024];
           int len;
           while((len = inputStream.read(buffer)) != -1){
               fos.write(buffer, 0, len);
           }
           // 给予客户端反馈
           outputStream = socket.getOutputStream();
           outputStream.write("照片已收到".getBytes(StandardCharsets.UTF_8));
   
       } catch (IOException e) {
           throw new RuntimeException(e);
       } finally {
           if (fos != null){
               try {
                   fos.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (inputStream != null){
               try {
                   inputStream.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (socket != null){
               try {
                   socket.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (ss != null){
               try {
                   ss.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
           if (outputStream != null){
               try {
                   outputStream.close();
               } catch (IOException e) {
                   throw new RuntimeException(e);
               }
           }
       }
   }
   ```

## UDP网络编程

类 DatagramSocket和 DatagramPacket实现了基于UDP协议网络程序。

UDP数据报通过数据报套接字DatagramSocket发送和接收，{% label 系统不保证UDP数据报一定能够安全送到目的地，也不能确定什么时候可以抵达。 red %}

DatagramPacket对象封装了UDP数据报，在数据报中包含了发送端的IP地址和端口号以及接收端的IP地址和端口号。

UDP协议中每个数据报都给出了完整的地址信息，因此无须建立发送方和接收方的连接。如同发快递包裹一样。

```java
@Test
public void sender() {
    DatagramSocket socket = null;
    try {
        socket = new DatagramSocket();

        String str = "我是UDP方式发射的导弹";
        byte[] data = str.getBytes();
        InetAddress address = InetAddress.getLocalHost();
        DatagramPacket packet = new DatagramPacket(data,0, data.length,address,8899);

        socket.send(packet);
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        if (socket != null){
            socket.close();
        }
    }

}

@Test
public void receiver() {
    DatagramSocket socket = null;
    try {
        socket = new DatagramSocket(8899);

        byte[] buffer = new byte[100];

        DatagramPacket packet = new DatagramPacket(buffer, 0,buffer.length);
        socket.receive(packet);

        System.out.println(new String(packet.getData(), packet.getLength()));
    } catch (IOException e) {
        throw new RuntimeException(e);
    } finally {
        socket.close();
    }

}
```



## URL编程

URL(Uniform Resource Locator):统一资源定位符，它表示Internet上某资源的地址。

它是一种具体的URI，即URL可以用来标识一个资源，而且还指明了如何locate这个资源。

通过URL我们可以访问 Internet上的各种网络资源，比如最常见的www，ftp站点。浏览器通过解析给定的URL可以在网络上查找相应的文件或其他资源。

URL的基本结构由5部分组成:

> <传输协议>:/<主机名>:<端口号><文件名>#片段名?参数列表>
>
> 例如:
> 	http;://192.168.1.100:8080/helloworld/index.jsp#a?username=shkstart&password=123>
>
> #片段名:即锚点，例如看小说，直接定位到章节

>参数列表格式:参数名=参数值&参数名=参数值....

```java
public static void main(String[] args) {
    try {
        URL url = new URL("http://localhost:8080/examples/beauty.jpg?username=Tom");
        System.out.println(url.getProtocol());  // 获取该URL的协议名
        System.out.println(url.getHost());      // 获取该URL的主机名
        System.out.println(url.getPort());      // 获取该URL的端口号
        System.out.println(url.getPath());      // 获取该URL的文件路径
        System.out.println(url.getFile());      // 获取该URL的文件名
        System.out.println(url.getQuery());     // 获取该URL的查询名
    } catch (MalformedURLException e) {
        throw new RuntimeException(e);
    }
```



# 反射机制

## 概述

Reflection(反射)被视为动态语言的关键，反射机制允许程序在执行期间，借助于Reflection API取得任何类的内部信息，并能直接操作，任意对象内部属性和方法。

加载完类之后，在堆内存的方法区中就产生了一个class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。{% label 这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为:反射。 red %}

正常方式：引入需要的包类的名称 ---->  通过new实例化 -----> 取得实例化对象

反射方式：实例化对象  ---->  getClass() 方法  ----->   得到完整的包类的名称

1. 动态语言
   是一类在运行时可以改变其结构的语言:例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或是其他结构上的发化。{% label 通俗点说就是在运行时代码可以根据某些条件改变自身结构。 red %}

主要动态语言:Object-C、C#、JavaScript、PHP、Python、Erlang。

2. 静态语言

   与动态语言相对应的，运行时结构不可变的语言就是静态语言。如Java、c、C++。

3. Java不是动态语言，但Java可以称之为“{% label 准动态语言 red %}”。即Java有一定的动态性，我们可以利用反射机制、字节码操作获得类似动态语言的特性。

   Java的动态性让编程的时候更加灵活!



Java反射机制提供的功能

> 在运行时判断任意一个对象所属的类
>
> 在运行时构造任意一个类的对象
>
> 在运行时判断任意一个类所具有的成员变量和方法
>
> 在运行时获取泛型信息
>
> 在运行时调用任意一个对象的成员变量和方法
>
> 在运行时处理注解
>
> 生成动态代理

```java
// 反射之前对于Person类的操作
@Test
public void test1(){
    // 1. 创建Person类的对象
    Person p1 = new Person("Tom", 16);

    // 2. 通过对象调用其内部方法
    p1.age = 18;
    System.out.println(p1.toString());

    p1.show();
    // 在Person类的外部，不可以通过Person类的对象，调用其内部的私有结构
    // 比如：name, showNation(), 以及私有的构造器
}

// 反射之后，对Person的操作
@Test
public void test2() {
    try {
        Class clazz = Person.class;
        // 1. 通过反射创建Person类对象
        Constructor cons = clazz.getConstructor(String.class, int.class);
        Object obj = cons.newInstance("Tom", 12);
        Person p = (Person) obj;
        System.out.println(p.toString());

        // 2.通过反射调用，对象指定的属性和方法
        // 调用属性
        Field age = clazz.getDeclaredField("age");
        age.set(p, 10);
        System.out.println(p.toString());

        // 调用方法
        Method show = clazz.getDeclaredMethod("show");
        show.invoke(p);

        System.out.println("*********************************");
        // 通过反射，可以调用Person类私有结构，比如：私有的构造器，方法，属性
        // 调用私有构造器
        Constructor cons1 = clazz.getDeclaredConstructor(String.class);
        cons1.setAccessible(true);
        Person p1 = (Person) cons1.newInstance("Jerry");
        System.out.println(p1);

        // 调用私有属性
        Field name = clazz.getDeclaredField("name");
        name.setAccessible(true);
        name.set(p1,"MM");
        System.out.println(p1);

        // 调用私有方法
        Method showNation = clazz.getDeclaredMethod("showNation", String.class);
        showNation.setAccessible(true);
        String nation = (String) showNation.invoke(p1,"中国");
        System.out.println(nation);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

```java
/*
关于java.lang.Class类的理解
1.类的加载过程:
程序经过javac.exe命令以后，会生成一个或多个字节码文件(.cLass结尾)。
接着我们使用java.exe命令对某个字节码文件进行解释运行。相当于将某个字节码文件
加载到内存中。此过程就称为类的加载。加载到内存中的类，我们就称为运行时类，此运行时类，
就作为CLass的一个实例。
2. 换句话说：Class实例就对应着一个运行时类
3. 加载到内存中的运行时类，会缓存一定的时间，在此时间内，我们可以通过不同的方式
来获取此运行时类
 */
// 获取Class类实例的的方式
// 前三种方式需要掌握
@Test
public void test3() {
    // 方式一：调用运行时类的属性：.class
    Class clazz = Person.class;
    System.out.println(clazz);
    // 方式二：通过运行时类的对象，调用getClass()
    Person p = new Person();
    Class clazz1 = p.getClass();
    System.out.println(clazz1);
    // 方式三：调用Class的静态方法：forName(String classPath)
    try {
        Class clazz2 = Class.forName("java1.Person");
        System.out.println(clazz2);
    } catch (ClassNotFoundException e) {
        throw new RuntimeException(e);
    }
    // 方式四：使用类加载器：ClassLoader
    ClassLoader classLoader = ReflectionTest.class.getClassLoader();
    Class clazz3 = null;
    try {
        clazz3 = classLoader.loadClass("java1.Person");
    } catch (ClassNotFoundException e) {
        throw new RuntimeException(e);
    }
    System.out.println(clazz3);


}
```



## 类的加载

ClassLoader：类的加载器，作用是把类（class）加载到内存中的

> Bootstap ClassLoader:引导加载器，是JVM自带的加载器，负责java平台核心库，用来装载核心类库，该加载类无法直接获取
>
> Extension ClassLoader：扩展类加载器：负责jre/lib/ext目录下的jar包，或指定目录下的jar包装入工作库，JDK1.9以后的版本中ExtClassLoader 变成PlatFormClassLoader
>
> System ClassLoader: 系统类加载器：负责java -classpath 或指定目录下的类与jar包装入工作，是最常用的加载器



```java
@Test
    public void test1() {
        // 获取当前自定类ClassLoaderTest加载器
        // 对于自定义类，使用系统类加载器进行加载
        ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
        System.out.println(classLoader);
        // 调用系统类加载器的getParent(): 获取扩展类加载器
        ClassLoader classLoader1 = classLoader.getParent();
        System.out.println(classLoader1);
        // 调用扩展类加载器的getParent(): 无法获取引导类加载器
        // 引导类加载器主要负责加载java的核心类库，无法加载自定义类的
        ClassLoader classLoader2 = classLoader1.getParent();
        System.out.println(classLoader2);
    }

    @Test
    public void test2() {
        Properties properties = new Properties();
        FileInputStream fis = null;

        // 此时文件默认在当前的module下
        // 读取配置文件的方式一：
//        try {
//            fis = new FileInputStream(new File("jdbc.properties"));
//        } catch (FileNotFoundException e) {
//            throw new RuntimeException(e);
//        }
//
//        try {
//            properties.load(fis);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        }

        // 读取配置文件的方式二：使用ClassLoader
        // 配置文件默认识别为当前文件的src下
        ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
        InputStream is = classLoader.getResourceAsStream("jdbc1.properties");
        try {
            properties.load(is);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        String name = properties.getProperty("name");
        String age = properties.getProperty("age");
        String account = properties.getProperty("account");
        String password = properties.getProperty("password");

        System.out.println("name: "+name+"\nage: "+age+"\naccount: "+account+"\npassword: "+password);

    }
```



## 创建运行时类对象

```java
@Test
public void test() throws InstantiationException, IllegalAccessException {
    Class<Person> clazz = Person.class;
    /*
    newInstance: 调用此方法，创建对应的运行时类的对象，内部调用了运行时类的空参构造器

    要想此方法正常的创建运行时类的对象，要求：
    1.运行时类必须提供空参构造器
    2. 空参构造器的权限需要能够调用

    在javabean中要求提供一个public的空参构造器。原因：
    1. 便于通过反射，创建运行时类对象
    2. 便于子类继承此运行时类时，默认调用super()时，保证父类有此构造器
     */
    Person p = clazz.newInstance();
    System.out.println(p);
}


/*
体会反射的动态性
 */
@Test
public void test1() {
    int num = new Random().nextInt(3);
    String classPath = "";

    switch (num){
        case 0:
            System.out.println("1");
            classPath = "java.util.Date";
            break;
        case 1:
            System.out.println("2");
            classPath = "java.lang.Object";
            break;
        case 2:
            System.out.println("3");
            classPath = "java1.Person";
            break;
    }

    Object obj = getInstance(classPath);
    System.out.println(obj);
}

/*
创建一个指定类的对象。
classPath: 指定类的全类名
 */
public Object getInstance(String classPath) {
    try {
        return Class.forName(classPath).newInstance();
    } catch (InstantiationException e) {
        throw new RuntimeException(e);
    } catch (IllegalAccessException e) {
        throw new RuntimeException(e);
    } catch (ClassNotFoundException e) {
        throw new RuntimeException(e);
    }
}
```





## 获取运行时类的完整结构



属性：

```java
@Test
public void test1() {
    Class clazz = Person.class;

    // 获取属性结构
    // getFields() :获取当前运行时类及其父类中声明为public访问权限的属性
    Field[] fields = clazz.getFields();
    for(Field field : fields){
        System.out.println(field);
    }

    System.out.println();

    // getDeclaredFields: 获取当前运行时类当中声明的所有属性，不包括父类
    Field[] declaredFields = clazz.getDeclaredFields();
    for(Field f : declaredFields){
        System.out.println(f);
    }
}

@Test
public void test2() {
    Class clazz = Person.class;

    Field[] declaredFields = clazz.getDeclaredFields();

    for(Field f : declaredFields){
        // 权限修饰符
        int modifier = f.getModifiers();
        System.out.print(Modifier.toString(modifier)+"\t");

        // 数据类型
        Class type = f.getType();
        System.out.print(type.getName() + "\t");

        // 变量名
        String fName = f.getName();
        System.out.println(fName);

    }
}
```

方法：

```java
@Test
public void test1() {
    Class clazz = Person.class;

    // getMethods(): 获取当前运行时类及所有父类中声明为public权限的方法
    Method[] methods = clazz.getMethods();
    for(Method method : methods){
        System.out.println(method);
    }

    System.out.println();

    // getDeclaredMethods(): 获取当前运行时类中声明的所有方法，不包含父类中声明的方法
    Method[] declaredMethods = clazz.getDeclaredMethods();
    for(Method method : declaredMethods){
        System.out.println(method);
    }
}

/*
@Xxx
权限修饰符 返回值类型 方法名（参数类型1 形参1....） throws XxxException{}
 */
@Test
public void test2() {

    Class clazz = Person.class;

    Method[] declaredMethods = clazz.getDeclaredMethods();
    for(Method method : declaredMethods){
        // 1. 获取方法声明的注解
        Annotation[] annotations = method.getAnnotations();
        for(Annotation annotation : annotations){
            System.out.println(annotation);
        }

        // 2. 权限修饰符
        System.out.print(Modifier.toString(method.getModifiers()) + "\t");

        // 3. 返回值类型
        System.out.print(method.getReturnType().getName() + "\t");

        // 4.方法名：
        System.out.print(method.getName());
        System.out.print("(");
        // 5. 形参列表
        Class[] parameterTypes = method.getParameterTypes();
        if (!(parameterTypes == null && parameterTypes.length == 0)){
            for(int i = 0; i < parameterTypes.length; i++){
                if (i == parameterTypes.length){
                    System.out.print(parameterTypes[i].getName() + "args_" + i);
                    break;
                }
                System.out.print(parameterTypes[i].getName() + "args_" + i + ",");
            }
        }

        System.out.print(")");

        // 6. 抛出异常
        Class<?>[] exceptionTypes = method.getExceptionTypes();
        if (!(exceptionTypes == null && exceptionTypes.length == 0)){
            System.out.print("throws ");
            for(int i = 0; i < exceptionTypes.length; i++){
                if (i == exceptionTypes.length-1){
                    System.out.print(exceptionTypes[i].getName());
                    break;
                }
                System.out.print(exceptionTypes[i].getName() + ",");
            }
        }
        System.out.println();
    }
}
```

其他类

```java
/*
获取构造器结构
 */
@Test
public void test1() {
    Class clazz = Person.class;

    // getConstructors: 获取当前运行时类中声明为public的构造器
    Constructor[] constructors = clazz.getConstructors();
    for(Constructor c : constructors){
        System.out.println(c);
    }

    System.out.println();

    //getDeclaredConstructors: 获取当前运行时类中声明的所有的构造器

    Constructor[] declaredConstructors = clazz.getDeclaredConstructors();
    for(Constructor c : declaredConstructors){
        System.out.println(c);
    }
}


/*
获取运行时类的父类
 */
@Test
public void test2() {
    Class clazz = Person.class;

    // getSuperclass:获取运行时类的父类
    Class superclass = clazz.getSuperclass();
    System.out.println(superclass);

    // getGenericSuperclass: 获取运行时的带泛型的父类
    Type genericSuperclass = clazz.getGenericSuperclass();
    System.out.println(genericSuperclass);

    // 获取运行时类的带泛型的父类的泛型
    ParameterizedType paramType = (ParameterizedType) genericSuperclass;
    // 获取泛型参数
    Type[] actualTypeArguments = paramType.getActualTypeArguments();
    System.out.println(actualTypeArguments[0].getTypeName());
}

@Test
public void test3() {
    //    获取运行时类实现的接口
    Class clazz = Person.class;

    Class[] interfaces = clazz.getInterfaces();
    for(Class c : interfaces){
        System.out.println(c);
    }

    // 获取运行时类所在的包
    Package aPackage = clazz.getPackage();
    System.out.println(aPackage);

    // 获取运行时类的注解
    Annotation[] annotations = clazz.getAnnotations();
    for(Annotation a : annotations){
        System.out.println(a);
    }
}
```



## 调用运行时类的指定结构

```java
@Test
public void testField() throws Exception {
    Class clazz = Person.class;

    // 创建运行时类的对象
    Person p = (Person) clazz.newInstance();
    // 获取指定的属性,只能获取权限为public的
    Field id = clazz.getField("id");

    // 设置当前属性的值
    // set() :参数一：指明设置那个对象的属性， 参数二：将此属性设置成为多少
    id.set(p, 1001);

    /*
    获取当前属性的值
    get() : 参数一：获取那个对象的当前属性值
     */
    int pId = (int) id.get(p);
    System.out.println(pId);
}

/*
如何操作运行时类中指定的属性
 */
@Test
public void  test1() throws Exception {
    Class clazz = Person.class;
    // 创建运行时类的对象
    Person p = (Person) clazz.newInstance();
    // 1. getDeclaredField(String name) 获取运行时类中指定的变量名的属性
    Field name = clazz.getDeclaredField("name");

    // 2. 保证当前对象时可访问的
    name.setAccessible(true);
    // 3. 获取指定对象的词属性值
    name.set(p, "Tom");
    System.out.println(name.get(p));

}

/*
如何操作运行时类中指定的方法
 */
@Test
public void test3() throws Exception {
    Class clazz = Person.class;
    // 创建运行时类的对象
    Person p = (Person) clazz.newInstance();

    /*
     1. 获取某个指定的方法
     getDeclaredMethod():参数1：指明获取方法的名称， 参数2：指明获取方法的形参列表
     */
    Method show = clazz.getDeclaredMethod("show", String.class);

    // 2. 保证当前的方法是可访问的
    show.setAccessible(true);
    /*
      3. 调用invoke(): 参数1：方法的调用者， 参数2：给方法形参赋值的实参
        invoke()的返回值即为 对应类中调用方法的返回值
     */
    show.invoke(p, "中国");

    System.out.println("*************************如何调用静态方法********************");
    // private static void showDesc
    Method showDesc = clazz.getDeclaredMethod("showDesc");
    showDesc.setAccessible(true);
    // 如果showDesc没有返回值的话，则invoke返回null
    Object returnVal = showDesc.invoke(Person.class);
}

/*
如何调用运行时类中指定的构造器
 */
@Test
public void test4() throws Exception {
    Class clazz = Person.class;

    /*
    1. 获取指定构造器
    getDeclaredConstructor() :参数：指明构造器的参数列表
     */
    // private Person(String name)
    Constructor constructor = clazz.getDeclaredConstructor(String.class);

    // 2. 保证此构造器是可访问的
    constructor.setAccessible(true);

    // 3. 调用构造器创建运行时类对象
    Person per = (Person) constructor.newInstance("Tom");
    System.out.println(per);
}
```



## 动态代理

代理设计模式的原理:

使用一个代理将对象包装起来,然后用该代理对象取代原始对象。任何对原始对象的调用都要通过代理。代理对象决定是否以及何时将方法调用转到原始对象上。

之前的代理机制的操作，属于静态代理，特征是代理类和目标对象的类都是在编译期间确定下来，不利于程序的扩展。同时，每一个代理类只能为一个接口服务，这样一来程序开发中必然产生过多的代理。{% label 最好可以通过一个代理类完成全部的代理功能。 orange %}

### 静态代理功能

```java
interface ClothFactory {
    void produceCloth();
}

// 代理类
class ProxyClothFactory implements ClothFactory {

    private ClothFactory factory; // 用被代理类对象进行实例化

    public ProxyClothFactory(ClothFactory factory) {
        this.factory = factory;
    }

    @Override
    public void produceCloth() {
        System.out.println("代理工厂做一些准备工作");
        factory.produceCloth();
        System.out.println("代理工厂做一些后续的收尾工作");
    }
}

// 被代理类
class NikeClothFactory implements ClothFactory{

    @Override
    public void produceCloth() {
        System.out.println("Nike工厂生产一批运动服");
    }
}

public class StaticProxyTest {
    public static void main(String[] args) {
        // 创建被代理类的对象
        NikeClothFactory nike = new NikeClothFactory();
        // 创建代理类的对象，
        ProxyClothFactory proxyClothFactory = new ProxyClothFactory(nike);

        proxyClothFactory.produceCloth();
    }
}
```

### 动态代理

```java
interface Human {
    String getBelief();

    void eat(String food);
}

// 被代理类：
class SuperMan implements Human {

    @Override
    public String getBelief() {
        return "I believe I can fly!";
    }

    @Override
    public void eat(String food) {
        System.out.println("我喜欢吃：" + food);
    }
}

/*
要想实现动态代理，需要解决的问题
问题一：如何根据加载到内存中的被代理类，动态的创建一个代理类及其对象
问题二：当通过代理类的对象调用方法的时候，如何动态的去调用被代理类中同名的方法
 */

class ProxyFactory {
    // 通过此方法，返回一个代理类的对象，解决问题一：
    public static Object getProxyInstance(Object obj){// obj被代理类对象
        MyInvocationHandler handler = new MyInvocationHandler();

        handler.bind(obj);

        return Proxy.newProxyInstance(obj.getClass().getClassLoader(),obj.getClass().getInterfaces(),handler);
    }
}

class MyInvocationHandler implements InvocationHandler {
    private Object obj; // 需要使用被代理类的对象进行赋值

    public void bind(Object obj) {
        this.obj = obj;
    }

    // 当我们通过代理类的对象，调用方法a时，就会自动调用如下的方法，invoke()
    // 当被代理类要执行方法a的功能就声明在invoke() 中
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {

        // method:即为代理类对象调用的方法，此方法也就作为了被代理类对象要调用的方法
        // obj:被代理类的对象
        Object ReturnValue = method.invoke(obj, args);
        // 上述方法的返回值就作为当前类中invoke() 的返回值
        return ReturnValue;
    }
}

public class ProxyTest {
    public static void main(String[] args) {
        // 创建被代理对象
        SuperMan superMan = new SuperMan();
        // 创建代理类对象
        Human proxyInstance = (Human) ProxyFactory.getProxyInstance(superMan);

        proxyInstance.getBelief();
    }
}
```



# Java8新特性

- 速度更快
- 代码更少(增加了新的语法：lambda表达式)
- 强大的Stream API
- 便于并行
- 最大化减少空指针异常 Optional
- Nashorn 引擎，允许在JVM上运行JS应用

## Lambda表达式

Lambda是一个{% label 匿名函数 orange %}，我们可以把Lambda表达式理解为{% label 是一段可以传递的代码 orange %}（将代码像数据一样进行传递）。使用它可以写出更简洁、更灵活的代码。作为一种更紧凑的代码风格，使Java的语言表达能力得到了提升。

```java
/**
 *
 * Lambda表达式的使用
 *  1. 举例： (o1, o2) -> Integer.compare(o1, o2)
 *  2. 格式：
 *      -> : lambda操作符 或箭头操作符
 *      ->左边 : 形参列表 （其实就是接口中的抽象方法的形参列表）
 *      ->右边 : lambda 体：（其实就是重写抽象方法中的方法体）
 *  3. lambda表达式的使用：（分为六种情况）
 *      总结：
 *      ->左边 ： lambda形参列表的参数类型可以省略（类型推断），如果lambda形参列表只有一个参数，其一对() 可以省略
 *      ->右边 ： lambda体应使用一个{}来包裹；如果lambda体只有一条执行语句（可能是return语句），可以省略这一对{}和return关键字
 *
 *  4. lambda表达式的本质：作为接口的实例
 *
 *  5. 如果一个接口中，只声明了一个抽象方法，则此接口就称作函数式接口
 *
 * @ClassName LambdaTest1
 * @Author Mr.zhang
 * @Date 2022/6/21
 */
public class LambdaTest1 {
    // 语法格式一：无惨无返回值
    @Test
    public void test1() {
        Runnable r1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("别走，跑起来");
            }
        };
        r1.run();

        System.out.println("******************lambda**************");
        Runnable r2 = () -> System.out.println("哈哈哈");
        r2.run();
    }

    // 语法格式二：需要一个参数但是没有返回值
    @Test
    public void test2() {
        Consumer<String> con = new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s);
            }
        };
        con.accept("我是一个正常写法");

        System.out.println("*************************");
        Consumer<String> con1 = (String s) -> {
            System.out.println(s);
        };

        con1.accept("我是lambda写法");
    }

    // 语法格式三：数据类型可以省略，应为可由编译器推断出，称为“类型推断”
    @Test
    public void test3() {
        Consumer<String> con1 = (String s) -> {
            System.out.println(s);
        };
        con1.accept("我是lambda写法1");

        System.out.println("****************");

        Consumer<String> con2 = (s) -> {
            System.out.println(s);
        };
        con2.accept("我是lambda写法2");
    }


    // 语法格式四：Lambda若只需要一个参数的时候，参数的小括号可以省略
    @Test
    public void test4() {
        Consumer<String> con2 = s -> {
            System.out.println(s);
        };
        con2.accept("我是lambda写法1");
    }

    // 语法格式五：Lambda两个或以上的参数，多条执行语句，并且有返回值
    @Test
    public void test5() {
        Comparator<Integer> com1 = new Comparator<Integer>() {
            @Override
            public int compare(Integer o1, Integer o2) {
                System.out.println("语句1");
                System.out.println("语句2");
                return Integer.compare(o1, o2);
            }
        };
        System.out.println(com1.compare(12, 13));

        System.out.println("*****************************");

        Comparator<Integer> com2 = (o1, o2) -> {
            System.out.println("语句1");
            System.out.println("语句2");
            return Integer.compare(o1, o2);
        };

        System.out.println(com2.compare(13, 12));
    }

    // 语法格式六：当lambda体只有一条语句的时候，return 与大括号若都有，都可以省略
    @Test
    public void test6() {
        Comparator<Integer> com1 = (o1, o2) -> {
            return o1.compareTo(o2);
        };
        System.out.println(com1.compare(12, 13));

        System.out.println("*********************************");

        Comparator<Integer> com2 = (o1, o2) -> o1.compareTo(o2);
        System.out.println(com2.compare(13, 12));


    }
}
```



## 函数式接口

{% label 只包含一个抽象方法的接口，称为函数式接口。 orange %}

你可以通过Lambda表达式来创建该接口的对象。（若Lambda表达式抛出一个受检异常(即:非运行时异常)，那么该异常需要在目标接口的抽象方法上进行声明)。

我们可以在一个接口上使用{% label @Functionallnterface 注解 orange %}，这样做可以检查它是否是一个函数式接口。同时 javadoc也会包含一条声明，说明这个接口是一个函数式接口。

{% label 在java.util.function包下定义了Java8的丰富的函数式接口 orange %}

|           函数式接口           | 参数类型 | 返回类型 |                             用途                             |
| :----------------------------: | :------: | :------: | :----------------------------------------------------------: |
|  Consumer<T><br />消费型接口   |    T     |   void   | 对类型为T的对象应用操作，包含方法，<br />void accept（T t）  |
|  Supplier<T><br />供给型接口   |    无    |    T     |            返回值类型为T的对象，包含方法，T.get()            |
| Function<T, R><br />函数型接口 |    T     |    R     | 对于类型为T的对象，应用操作，并返回结果。<br />结果是R型对象，包含方法：R apply（T t） |
|  Predicate<T><br />断定性接口  |    T     | boolean  | 确定类型为T的对象，是否满足某约束，并返回<br />Boolean值。包含方法：boolean test(T t) |



## 方法引用与构造器引用

### 方法引用：

```java
public class LambdaTest2 {
    @Test
    public void test1() {
        happyTime(500, new Consumer<Double>() {
            @Override
            public void accept(Double aDouble) {
                System.out.println("买炸鸡,价格为：" + aDouble);
            }
        });

        System.out.println("*******************");
        happyTime(400, money -> System.out.println("买烤肠，价格为：" + money));
    }

    public void happyTime(double money, Consumer<Double> con){
        con.accept(money);
    }

    /*
    方法的使用
    1. 使用情境：当要传递给lambda体的操作，已经有实现方法了，可以作为使用方法引用
    2. 方法引用，本质上是lambda表达式
    3. 使用格式：类(或对象) :: 方法名
    4. 具体使用分为如下三种情况：
        情况1     对象 :: 非静态方法
        情况2     类 :: 静态方法
        情况3     类 :: 非静态方法
    5. 方法引用的使用要求：
        要求接口中的抽象方法的形参列表和返回值类型，和方法引用中的方法的形参列表和返回值类型相同（针对于情况1，情况2）
     */

    // 情况一： 对象 :: 实例方法
    // Consumer中的void accept(T t)
    // PrintStream中的void println(T t)
    @Test
    public void test2() {
        Consumer<String> cons1 = str -> System.out.println(str);
        cons1.accept("北京");

        System.out.println("***********************");
        PrintStream ps = System.out;

        Consumer<String> cons2 = ps :: println;
        cons2.accept("中国");
    }

    // Supplier 中的T get()
    // Employee 中的String getName()
    @Test
    public void test3() {
        Person person = new Person("Tom",18);

        Supplier<String> sup = () -> person.getName();
        System.out.println(sup.get());

        System.out.println("*********************************");

        Supplier<String> sup2 = person :: getName;
        System.out.println(sup2.get());
    }

    // 情况二：类 :: 静态方法
    // Comparator中的int compare(T t1, T t2);
    // Integer 中的 int compare(T t1, T t2);
    @Test
    public void test4() {
        Comparator<Integer> com1 = (t1, t2) -> Integer.compare(t1, t2);
        System.out.println(com1.compare(12, 21));

        System.out.println("********************************");

        Comparator<Integer> com2 = Integer :: compare;
        System.out.println(com2.compare(12, 21));
    }
    @Test
    public void test5() {
        Function<Double, Long> fun = new Function<Double, Long>() {
            @Override
            public Long apply(Double d) {
                return Math.round(d);
            }
        };
        Double aDouble = 12.0;
        System.out.println(fun.apply(aDouble));

        System.out.println("******************************");

        Function<Double, Long> fun1 = d -> Math.round(d);
        System.out.println(fun1.apply(aDouble));

        System.out.println("*******************************");

        Function<Double, Long> fun2 = Math::round;
        System.out.println(fun2.apply(aDouble));

    }

    // 情况三：类::实例方法
    // Comparator中的int compare(T t1, T t2)
    // String 中的 int t1.compareTo(t2)
    @Test
    public void test6() {
        // Comparator 中的compare方法 的方法体调用 String类型中的compareTo这个方法
        Comparator<String> com1 = (s1, s2) -> s1.compareTo(s2);
        System.out.println(com1.compare("abc", "abd"));

        System.out.println("**********************************");

        // 第一个参数为String中compareTo中的调用者，第二个参数为compareTo的调用者
        Comparator<String> com2 = String :: compareTo;
        System.out.println(com2.compare("abd", "abc"));

    }

    // BiPredicate中的boolean test(T t1, T t2);
    // String中的boolean t1.equals(t2)
    @Test
    public void test7() {
        BiPredicate<String, String> bp = (s1, s2) -> s1.equals(s2);
        System.out.println(bp.test("abc", "abc"));

        System.out.println("***********************************");

        BiPredicate<String, String> bp1 = String :: equals;
        System.out.println(bp1.test("ABC", "ABC"));
    }

    // Function 中的R apply(T t)
    // Employee 中的String getName()
    @Test
    public void test8() {
        Function<Person, String> fun = p -> p.getName();
        System.out.println(fun.apply(new Person("Tom", 19)));

        System.out.println("************************************");

        Function<Person, String> fun2 = Person::getName;
        System.out.println(fun2.apply(new Person("Jerry", 16)));
    }
}
```

### 构造器引用：

```java
/**
 *  一，构造器引用
 *      和方法引用类似，函数式接口的抽象方法的形参列表和构造器的形参列表一致
 *      抽象方法的返回值类型即为构造器所属类的类型
 *  二，数组引用
 *      可以把数组看成一个特殊的类，则写法和构造器引用一致
 *
 */
public class ConstructorRefTest {
    // 构造器引用：
    // Supplier 中的T get()
    // Person的空参构造器
    @Test
    public void test() {
        Supplier<Person> sup = new Supplier<Person>() {
            @Override
            public Person get() {
                return new Person();
            }
        };

        Supplier<Person> sup1 = () -> new Person();
        System.out.println(sup1.get());

        System.out.println("*********************************");

        Supplier<Person> sup2 = Person :: new;
        System.out.println(sup2.get());
    }

    // Function中的R apply(T t)
    @Test
    public void test1() {
        Function<Integer, Person> fun = id -> new Person(id);
        System.out.println(fun.apply(13));

        System.out.println("*********************************");

        Function<Integer, Person> fun1 = Person :: new;
        System.out.println(fun1.apply(18));
    }

    // BiFunction中的 R apply(T t, U u)
    @Test
    public void test3() {
        BiFunction<String, Integer, Person> bf = (s, i) -> new Person(s, i);
        System.out.println(bf.apply("Tom", 16));

        System.out.println("**********************");

        BiFunction<String, Integer, Person> bf1 = Person::new;
        System.out.println(bf1.apply("Jerry", 18));

    }

    // 数组引用
    // Function中的R apply(T t)
    @Test
    public void test4() {
        Function<Integer, String[]> fun = length -> new String[length];
        String[] strings = fun.apply(10);
        System.out.println(strings);

        System.out.println("*********************************");

        Function<Integer, String[]> fun1 = String[] :: new;
        String[] strings1 = fun1.apply(5);
        System.out.println(strings1);
    }
}
```



## StreamAPI

Stream API ( java.util.stream)把真正的函数式编程风格引入到Java中。这是目前为止对Java类库最好的补充，因为Stream API可以极大提供Java程序员的生产力，让程序员写出高效率、干净、简洁的代码。

Stream是 Java8中处理集合的关键抽象概念，它可以指定你希望对集合进行的操作，可以执行非常复杂的查找、过滤和映射数据等操作。{% label 使用Stream API对集合数据进行操作，就类似于使用SQL执行的数据库查询 orange %}。也可以使用Stream API来并行执行操作。简言之，Stream API提供了一种高效且易于使用的处理数据的方式。

1. Stream关注的是数据的运算，和CPU有关系
    集合关注的是数据的存储，与内存有关系

    

2. Stream自己不会存储元素

    Stream 不会改变原对象，相反它会返回一个持有结果的新Stream
    Stream 操作是延迟的这意味着他们会等到需要结果的时候才执行

    

3. Stream  执行流程
    Stream的实例化
    一系列的中间操作
    终止操作

    

4. 说明：
    一个中间操作链，对数据源的数据进行处理
    一旦执行终止操作，就执行中间操作链，并产生结果，之后不会再被使用

### StreamAPI实例化的四种方法

1. 通过集合
2. 通过数组
3. 通过Stream的of
4. 创建无限流

```java
public class StreamAPITest {
    // 创建Stream方式一：通过集合
    @Test
    public void test() {
        // 先获取一个集合
        List<Person> persons = PersonData.getPersons();

        // default Stream<E> stream() : 返回一个顺序流
        Stream<Person> stream = persons.stream();

        // default Stream<E> parallelStream(): 返回一个并行流
        Stream<Person> stream1 = persons.parallelStream();
    }

    // 创建Stream方式二：通过数组
    @Test
    public void test2() {
        int[] arr = new int[]{1,2,3,4,5,6};
        // 调用Arrays类的static <T> Stream<T> stream(T[] array): 返回一个流
        IntStream stream = Arrays.stream(arr);

        Person p1 = new Person("Tom", 18);
        Person p2 = new Person("Jerry", 18);
        Person[] arr2 = new Person[]{p1, p2};

        Stream<Person> stream1 = Arrays.stream(arr2);
    }

    // 创建Stream方式三：通过Stream的of（）
    @Test
    public void test3() {
        Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5, 6);
    }

    // 创建Stream方式四：创建无限流
    @Test
    public void test4() {
        //迭代
        //public static<T> Stream<T> iterate(final T seed,final UnaryOperator<T> f)
        // 遍历前10个偶数
        Stream.iterate(0, t->t+2).limit(10).forEach(System.out::println);

        // 生成
        // public static<T> Stream<T> generate(Supplier<T> s)
        Stream.generate(Math::random).limit(10).forEach(System.out::println);

    }
}
```



### Stream的中间操作

多个中间操作可以连接起来形成一个流水线，除非流水线上触发终止操作，否则中间操作不会执行任何的处理!而在终止操作时一次性全部处理,称为“惰性求值”。



1. 筛选与切片

   |        方法         |                             描述                             |
   | :-----------------: | :----------------------------------------------------------: |
   | filter(Predicate p) |                接受Lambda，从流中排除某些元素                |
   |     distinct()      |   筛选，通过流生成元素的hashCode() 和 equals()去除重复元素   |
   | limit(long maxSize) |                截断流，使其元素不超过指定数量                |
   |    skip(long n)     | 跳过元素，返回一个扔掉了前n个元素的流，若流中的元素不足<br />n个，则返回一个空流，与limit互补 |

```java
// 1-筛选与切片
@Test
public void test1() {
    List<Person> persons = PersonData.getPersons();
    // filter(Predicate p)—接收Lambda ,从流中排除某些元素。
    Stream<Person> stream = persons.stream();
    stream.filter(p -> p.getAge() > 20).forEach(System.out::println);

    System.out.println("*********************");
    // limit(n)—截断流，使其元素不超过给定数量。
    persons.stream().limit(3).forEach(System.out::println);

    System.out.println("**********************");
    // skip(n)一跳过元素，返回一个扔掉了前n个元素的流。若流中元素不足n个,则返回一
    persons.stream().skip(3).forEach(System.out::println);

    // distinct()—筛选，通过流所生成元素的 hashcode()和equals()去除重复元素
    persons.add(new Person("Tom", 20));
    persons.add(new Person("Tom", 20));
    persons.add(new Person("Tom", 20));
    persons.add(new Person("Tom", 20));
    persons.add(new Person("Tom", 20));

    persons.stream().distinct().forEach(System.out::println);
}
```



2. 映射	

​	

|               方法                |                             描述                             |
| :-------------------------------: | :----------------------------------------------------------: |
|          map(Function f)          | 接收一个函数作为参数，该函数会被应用到每个<br />元素上，并将其映射成一个新的元素 |
| map  ToDouble(ToDoubleFunction f) | 接受一个函数作为参数，该函数会被应用到每一个元素<br />上，产生成一个新的DoubleStream |
|    map  ToInt(ToIntFunction f)    | 接受一个函数作为参数，该函数会被应用到每个元素<br />上产生一个新的IntStream |
|  map   ToLong(ToLongFunction  f)  | 接受一个函数作为参数，该函数会被应用到每个元素<br />上产生一个新的LongStream |
|        flatMap(Function f)        | 接受一个函数作为参数，将流中的每个值都换成另<br />一个流，然后把所有流连接成一个流 |



```java
public class StreamAPITest1 {
    // 映射
    @Test
    public void test2() {
        // map(Function f)——接收一个函数作为参数，将元素转换成其他形式或提取信息，该函数会被应用到每个元素上并将其映射成一个新的元素。
        List<String> list = Arrays.asList("AA","BB","CC","DD");
        list.stream().map(str -> str.toLowerCase()).forEach(System.out::println);

        //练习1:获取员工姓名长度大于3的员工的姓名。
        List<Person> persons = PersonData.getPersons();
        Stream<String> nameStream = persons.stream().map(Person::getName);
        nameStream.filter(name -> name.length() > 3).forEach(System.out::println);

        //练习2
        Stream<Stream<Character>> streamStream = list.stream().map(StreamAPITest1::fromStringToStream);
        streamStream.forEach( s ->{
            s.forEach(System.out::println);
        });

        System.out.println();
        
        //flatMap(Function f)——接收一个函数作为参数，将流中的每个值都换成另一个流，然后把所有流连接成一个流。
        Stream<Character> characterStream = list.stream().flatMap(StreamAPITest1::fromStringToStream);
        characterStream.forEach(System.out::println);
    }

    public static Stream<Character> fromStringToStream(String str) {
        ArrayList<Character> list = new ArrayList<Character>();
        for(Character c : str.toCharArray()) {
            list.add(c);
        }
        return list.stream();
    }

}
```



3. 排序

   |          方法          |                 描述                 |
   | :--------------------: | :----------------------------------: |
   |        sorted()        |  产生一个新流，其中按照自然顺序排序  |
   | sorted(Comparator com) | 产生一个新流，其中按照比较器顺序排序 |

   ```java
   @Test
   public void test3() {
       // sorted() - 自然排序
       List<Integer> list = Arrays.asList(12, 36, 25, 2, -5, 17, 32);
       Stream<Integer> sorted = list.stream().sorted();
       sorted.forEach(System.out::println);
   
       // 如果一个类中没有实现Comparable接口的话，不能够使用sorted方法
   
       // sorted(Computer com) - 定制排序
       List<Person> list1 = PersonData.getPersons();
       list1.stream().sorted((p1, p2) -> {
           return -Integer.compare(p1.getAge(), p2.getAge());
       }).forEach(System.out::println);
   }
   ```



### 终止操作

1. 匹配与查找

   

|          方法           |           描述           |
| :---------------------: | :----------------------: |
| allMatch(Predicate  p)  |   查找是否匹配所有元素   |
| anyMatch(Predicate  p)  | 检查是否至少匹配一个元素 |
| noneMatch(Predicate  p) | 检查是否没有匹配所有元素 |
|       findFirst()       |      返回第一个元素      |
|        findAny()        | 返回当前流中的任意的元素 |
|         count()         |     返回流中元素总和     |
|   max(Comparator  c)    |     返回流中的最大值     |
|   min(Comparator  c)    |     返回流中的最小值     |
|  forEach(Consumer  c)   |         内部迭代         |



```java
public void test1() {
        List<Person> persons = PersonData.getPersons();
        //allMatch(Predicate p)——检查是否匹配所有元素。
        // 练习:是否所有的员工的年龄都大于18
        boolean allMatch = persons.stream().allMatch(e -> e.getAge() > 18);
        System.out.println(allMatch);

        //anyMatch(Predicate p)——检查是否至少匹配一个元素。练习:是否存在员工的年龄大于21
        boolean anyMatch = persons.stream().anyMatch(e -> e.getAge() > 21);
        System.out.println(anyMatch);

        //noneMatch(Predicate p)——检查是否没有匹配的元素。练习:是否存在员工姓“雷
        boolean b = persons.stream().noneMatch(e -> e.getName().startsWith("大"));
        System.out.println(b);

        //findFirst——返回第一个元素
        Optional<Person> first = persons.stream().findFirst();
        System.out.println(first);

        //findAny——返回当前流中的任意元素
        Optional<Person> any = persons.parallelStream().findAny();
        System.out.println(any);

        //count——返回流中元素的总个数
        long count = persons.stream().filter(e -> e.getAge() > 18).count();
        System.out.println(count);

        //max(Comparator c)—返回流中最大值    练习:返回最高的工资:
        Stream<Integer> integerStream = persons.stream().map(e -> e.getAge());
        Optional<Integer> max = integerStream.max(Integer::compare);
        System.out.println(max);

        // min(Comparator c)—返回流中最小值   练习：返回最低工资的员工
        Optional<Person> min = persons.stream().min((e1, e2) -> Double.compare(e1.getAge(), e2.getAge()));
        System.out.println(min);
        //forEach(Consumer  c)-- 内部迭代
    }

}
```



2. 归约

|                方法                |                             描述                             |
| :--------------------------------: | :----------------------------------------------------------: |
| reduce(T  iden, BinaryOperator  b) |        可以将流中元素反复结合起来，得到一个值，返回T         |
|     reduce(BinaryOperator   b)     | 可以将流中的元素反复结合起来<br />得到一个值，返回Optional<T> |

```java
@Test
public void test2() {
    // reduce(T  identity, BinaryOperator  b)可以将流中元素反复结合起来，得到一个值，返回T
    // 练习一：计算1 - 10自然数和
    List<Integer> list = Arrays.asList(1,2,3,4,5,6,7,8,9,10);
    Integer sum = list.stream().reduce(0, Integer::sum);
    System.out.println(sum);

    // reduce(BinaryOperator)一可以将流中元素反复结合起来，得到一个值。返回Optional<T>
    // 练习2:计算公司所有员工年龄的总和
    List<Person> persons = PersonData.getPersons();
    Stream<Integer> stream = persons.stream().map(Person::getAge);
    Optional<Integer> sum1 = stream.reduce(Integer::sum);
    System.out.println(sum1);
}
```



3. 收集

   |          方法          |                             描述                             |
   | :--------------------: | :----------------------------------------------------------: |
   | collect(Collector   c) | 将流转换为其他形式，接收一个Collector接口的实现<br />用于给Stream中元素做汇总的方法 |

   ![image-20220626212718997](https://s2.loli.net/2022/11/04/5SpxCi6Un7kBIeu.png)



```java
@Test
public void test4() {
    // collect(Collector c)将流转换为其他形式，接收一个Collector接口的实现用于给Stream中元素做汇总的方法
    // 练习1：查找年龄大于20的员工，结果返回一个list或set
    List<Person> persons = PersonData.getPersons();
    List<Person> collect = persons.stream().filter(p -> p.getAge() > 20).collect(Collectors.toList());

    collect.forEach(System.out::println);

    System.out.println("**************************************");

    Set<Person> collect1 = persons.stream().filter(p -> p.getAge() > 20).collect(Collectors.toSet());

    collect1.forEach(System.out::println);
}
```



### Optional类

尽可能的避免在开发中遇到空指针异常

Optional提供很多有用的方法，这样我们就不用显式进行空值检测。

创建Optional类对象的方法:

>Optional.of(T t)∶创建一个 Optional实例，t必须非空;
>
>Optional.empty():创建一个空的Optional实例
>
>Optional.ofNullable(T t): t可以为null

判断Optional容器中是否包含对象:

> boolean isPresent():判断是否包含对象
>
> void ifPresent(Consumer<? super T> consumer):如果有值，就执行Consumer
> 接口的实现代码，并且该值会作为参数传给它。

获取Optional容器的对象:

> T  get():如果调用对象包含值，返回该值，否则抛异常
>
> T  orElse(T other):如果有值则将其返回，否则返回指定的other对象。
>
> T  orElseGet(Supplier<? extends T> other):如果有值则将其返回，否则返回由
> Supplier接口实现提供的对象。
>
> T  orElse Throw(Supplier<? extends X>exceptionSupplier):如果有值则将其返
> 回，否则抛出由Supplier接口实现提供的异常。

```java
public class OptionalTest {
    /*
    Optional.of(T t) :创建一个Optional实例，t必须非空;
    Optional.empty() :创建一个空的Optional实例
    Optional.ofNullable(T t): t可以为null

     */
    @Test
    public void test() {
        Girl girl = new Girl();
        // of(T t):保证t是非空的
        Optional<Girl> optionalGirl = Optional.of(girl);
    }

    @Test
    public void test2() {
        Girl girl = new Girl();
        girl = null;
        Optional<Girl> optionalGirl = Optional.ofNullable(girl);
        System.out.println(optionalGirl);

        // orElse(T t):如果当前Optional返回的内部包装类是非空的话，则返回内部的t
        // 如果内部的大是空的，则返回orElse()方法中的参数
        Girl girl1 = optionalGirl.orElse(new Girl("赵丽颖"));
        System.out.println(girl1);
    }

    // 没有Optional的时候我们获取属性的方法为
    public String getGirlName(Boy boy){
        // 可能会出现空指针异常
        return boy.getGirl().getName();
    }
    // 这是没有Optional类的时候我们采用的方法
    @Test
    public void test3() {
        Boy boy = new Boy();
        String GirlName = getGirlName(boy);
        System.out.println(GirlName);
    }

    // 优化之后的GetGirlName方法
    public String getGirlName1(Boy boy){
        if (boy != null ){
            Girl girl = boy.getGirl();
            if( girl != null ){
                return girl.getName()
            }
        }
        return null;
    }

    // 使用Optional类的getGirlName():
    public String getGirlName2( Boy boy){
        Optional<Boy> boyOptional = Optional.ofNullable(boy);
        // 门此时的boy一定非空
        Boy boy1 = boyOptional.orElse(new Boy(new Girl("迪丽热巴")));
        Girl girl = boy1.getGirl();
        Optional<Girl> optionalGirl = Optional.ofNullable(girl);
        // girl1一定非空
        Girl girl1 = optionalGirl.orElse(new Girl("古力娜扎"));
        return girl1.getName( );
    }
}
```





# Java9，10，11新特性



