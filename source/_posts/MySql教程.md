---
title: MySql教程
date: 2022-11-29 19:50:43
description:
mathjax:
cover: https://s2.loli.net/2022/12/08/WR6UFGSpPMKj39J.jpg
categories: MySQL
tags: MySQL
---

# 数据库概述

## RDBMS与非RDBMS

### 关系型数据库(RDBMS)

#### 实质

- 这种类型的数据库是{% span red, 最古老 %}的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的{% span red, 二元关系 %}(即二维表格形式)。

![image-20221208084704244](https://s2.loli.net/2023/01/07/BlWCZinKD5HTAF7.png)

- 关系型数据库以{% span red, 行( row) %}和{% span red, 列(column) %}的形式存储数据，以便于用户理解。这一系列的行和列被称为{% span red, 表(table) %}，一组表组成了一个库(database)。
- 表与表之间的数据记录有关系(relationship)。现实世界中的各种实体以及实体之间的各种联系均用{% span red, 关系模型 %}来表示。关系型数据库，就是建立在{% span red, 关系模型 %}基础上的数据库。
- SOL就是关系型数据库的查询语言。

![image-20221208085255315](https://s2.loli.net/2023/01/07/mligFEHnarDohI4.png)

#### 优势

- 复杂查询

  可以用SQL语句方便的在一个表以及多个表之间做非常复杂的数据查询。。

- 事务支持

  使得对于安全性能很高的数据访问要求得以实现。

### 非关系型数据库(非RDBMS)

#### 介绍

非关系型数据库，可看成传统关系型数据库的功能{% span red, 阉割版本 %}，基于键值对存储数据，不需要经过SQL层的解析，{% span red, 性能非常高 %}。同时，通过减少不常用的功能，进一步提高性能。

目前基本上大部分主流的非关系型数据库都是免费的。

#### 有哪些非关系型数据库

相比于SQL，NoSQL泛指非关系型数据库，包括了榜单上的键值型数据库、文档型数据库、搜索引擎和列存储等，除此以外还包括图形数据库。也只有用NoSQL一词才能将这些技术囊括进来。

- 键值型数据库

  键值型数据库通过Key-Value键值的方式来存储数据，其中Key和Value可以是简单的对象，也可以是复杂的对象。Key作为唯一的标识符，优点是查找速度快，在这方面明显优于关系型数据库，缺点是无法像关系型数据库一样使用条件过滤（比如WHERE)，如果你不知道去哪里找数据，就要遍历所有的键，这就会消耗大量的计算。

  键值型数据库典型的使用场景是作为{% span red, 内存缓存 %}。{% span red, Redis %}是最流行的键值型数据库。

  ![image-20221208085829613](https://s2.loli.net/2023/01/07/3pZRCz698HUqoBE.png)

  

- 文档型数据库

  此类数据库可存放并获取文档，可以是XML、JSON等格式。在数据库中文档作为处理信息的基本单位，一个文档就相当于一条记录。文档数据库所存放的文档，就相当于键值数据库所存放的“值"。MongoDB是最流行的文档型数据库。此外，还有CouchDB等。

- 搜索引擎数据库

  虽然关系型数据库采用了索引提升检索效率，但是针对全文索引效率却较低。搜索引擎数据库是应用在搜索引擎领域的数据存储形式，由于搜索引擎会爬取大量的数据，并以特定的格式进行存储，这样在检索的时候才能保证性能最优。核心原理是“倒排索引”。

  典型产品: Solr、Elasticsearch、Splunk 等。

- 列式数据库

  列式数据库是相对于行式存储的数据库，Oracle、MySQL、sQL Server等数据库都是采用的行式存储（Row-based)，而列式数据库是将数据按照列存储到数据库中，这样做的好处是可以大量降低系统的V/O，适合于分布式文件系统，不足在于功能相对有限。典型产品:HBase等。

  ![image-20221208090957154](https://s2.loli.net/2023/01/07/lVQJaF2WL9xzsjI.png)

- 图形数据库

  图形数据库顾名思义，就是一种存储图形关系的数据库。它利用了图这种数据结构存储了实体(对象）之间的关系。关系型数据用于存储明确关系的数据，但对于复杂关系的数据存储却有些力不从心。如社交网络中人物之间的关系，如果用关系型数据库则非常复杂，用图形数据库将非常简单。典型产品:Neo4J、InfoGrid等。

  ![image-20221208091233723](https://s2.loli.net/2023/01/07/mBkLoKED1hAdgp3.png)

  

## 关系型数据库设计规则

- 关系型数据库的典型数据结构就是{% span red, 数据表 %}，这些数据表的组成都是结构化的(Structured)。
- 将数据放到表中，表再放到库中。
- 一个数据库中可以有多个表，每个表都有一个名字，用来标识自己。表名具有唯一性。
- 表具有一些特性，这些特性定义了数据在表中如何存储，类似Java和Python中“类”的设计。

### 表、记录、字段

- E-R (entity-relationship，实体-联系）模型中有三个主要概念是:{% span red, 实体集、属性、联系集 %}。
- 一个实体集(class）对应于数据库中的一个表(table)，一个实体 （(instance)则对应于数据库表中的一行(row)，也称为一条记录（record)。一个属性(attribute)对应于数据库表中的一列(column)，也称为一个字段(field) 。

![image-20221208105311641](https://s2.loli.net/2023/01/07/5J23beDBfY6vpRX.png)

### 表的关联关系

- 表与表之间的数据记录有关系(relationship)。现实世界中的各种实体以及实体之间的各种联系均用关系模型来表示。
- 四种:一对一关联、一对多关联、多对多关联、自我引用

#### 一对一关联(one-to-one)

- 在实际的开发中应用不多，因为一对一可以创建成一张表。
- 举例:设计{% span red, 学生表 %}∶学号、姓名、手机号码、班级、系别、身份证号码、家庭住址、籍贯、紧急联系人、...
  - 拆为两个表:两个表的记录是一一对应关系。
  - {% label 基础信息表 red %}（常用信息)︰学号、姓名、手机号码、班级、系别
  - {% label 档案信息表 red %}（不常用信息)︰学号、身份证号码、家庭住址、籍贯、紧急联系人、...
- 两种建表原则:
  - 外键唯一:主表的主键和从表的外键（唯一)，形成主外键关系，外键唯一。
  - 外键是主键:主表的主键和从表的主键，形成主外键关系。

![image-20221208110416117](https://s2.loli.net/2023/01/07/Tc2nuol5Zsf6Y4A.png)

#### 一对多关系(one-to-many)

- 常见实例场景:{% span red, 客户表和订单表 %} ，{% span red, 分类表和商品表 %}，{% span red, 部门表和员工表 %}。
- 举例:
  - 员工表:编号、姓名、..、所属部门。
  - 部门表:编号、名称、简介
- 一对多建表原则:在从表(多方)创建一个字段，字段作为外键指向{% span red, 主表(一方)的主键 %}.

![image-20221208111113791](https://s2.loli.net/2023/01/07/qs6WOIxkX1QECwR.png)

#### 多对多(many-to-many)

要表示多对多关系，必须创建{% span red, 第三个表 %}，该表通常称为{% span red, 联接表 %}，它将多对多关系划分为两个一对多关系。将这两个表的主键都插入到第三个表中。

![image-20221208111255840](https://s2.loli.net/2023/01/07/YrjBwWNsM7D1Kug.png)

- 举例1:学生-课程

  - 学生信息表:一行代表一个学生的信息（(学号、姓名、手机号码、班级、系别...)。

  - 课程信息表:一行代表一个课程的信息（课程编号、授课老师、简介..)

  - 选课信息表:一个学生可以选多门课，一门课可以被多个学生选择

    ```
    学号	课程编号
     1	  1001
     2	  1001
     1	  1002
    ```

- 举例2:产品-订单

  “订单"表和“产品"表有一种多对多的关系，这种关系是通过与“订单明细"表建立两个一对多关系来定义的。一个订单可以有多个产品，每个产品可以出现在多个订单中。

  - 产品表:“产品”表中的每条记录表示一个产品。
  - 订单表:“订单”表中的每条记录表示一个订单。
  - 订单明细表∶每个产品可以与“订单"表中的多条记录对应，即出现在多个订单中。一个订单可以与“产品”表中的多条记录对应，即包含多个产品。

  ![image-20221208111604909](https://s2.loli.net/2023/01/07/2mnhj3odkr1wC4i.png)

#### 自我引用

![image-20221208111720652](https://s2.loli.net/2023/01/07/LwVXFqEUpNRTlC7.png)



# MySQL使用

## MySQL演示

1. 查看所有的数据库

   ```MySQL
    show databases;
   ```

   {% note red 'fas fa-fan' simple%}

   “information_schema”是MySQL系统自带的数据库，主要保存MySQL数据库服务器的系统信息，比如数据库的名称、数据表的名称、字段名称、存取权限、数据文件所在的文件夹和系统使用的文件夹，等等

   “performance_schema”是MySQL系统自带的数据库，可以用来监控MySQL的各类性能指标。

   “sys"数据库是MysQL系统自带的数据库，主要作用是以一种更容易被理解的方式展示MySQL数据库服务器的各类性能指标，帮助系统管理员和开发人员监控MySQL的技术性能。

   “mysql"数据库保存了MySQL数据库服务器运行时需要的系统信息，比如数据文件夹、当前使用的字符集、约束检查信息，等等

   {% endnote %}

2. 创建自己的数据库

   ```MySQL
   create database数据库名;
   
   #创建atguigudb数据库，该名称不能与已经存在的数据库重名。
   create database atguigudb;
   ```

3. 使用目己的数据库

   ```MySQL
   use数据库名;
   #使用atguigudb数据库
   use atguigudb;
   ```

   说明:如果没有使用use语句，后面针对数据库的操作也没有加“数据名"的限定，那么会报“ERROR 1046(3Do0o);No database selected”(没有选择数据库)

   使用完use语句之后，如果接下来的SQL都是针对一个数据库操作的，那就不用重复use了，如果要针对另一个数据库操作，那么要重新use。

4. 查看某个库的所有表格

   ```MySQL
   show tables;#要求前面有use语句
   show tables from数据库名;
   ```

5. 创建新的表格

   ```MySQL
   create table 表名称(
   	字段名 数据类型，
    	字段名数据类型
   );
   ```

   说明:如果是最后一个字段，后面就用加逗号，因为逗号的作用是分割每个字段。

   ```MySQL
   #创建学生表
   create table student(
   	id int,
   	name varchar(20)	#说名字最长不超过20个字符
   );
   ```

6. 查看一个表的数据

   ```MySQL
   select * from数据库表名称;
   
   #查看学生表的数据
   
   select * from student ;
   ```

7. 添加一条记录

   ```MySQL
   insert into表名称values(值列表);
   #添加两条记录到student表中
   insert into student values ( 1, '张三');
   insert into student values(2,'李四');
   ```

   报错:

   ```MySQL
   mysql> insert into student values ( 1,'张三');
   ERROR 1366 (HY800 ) : Incorrect string value: ' lxD5\xC5\xC8\xFD' for column 'name' at row 1
   mysql> insert into student values(2,'李四');
   ERROR 1366 (HYe00): Incorrect string value: 'lxCBlxEE\xCB\xC4' for column 'name' at row 1
   
   mysql> show create table student;
   ```

   字符集的问题。

8. 查看表的创建信息

   ```MySQL
   show creat table 表名称;
   #查看student表的详细创建信息
   show create table student;	
   ```

   ```MySQL
   #结果如下
   | Table     | Create Table
   | employees | CREATE TABLE `employees` (
     `id` int(11) DEFAULT NULL,
     `name` varchar(15) DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
   ```

   上面的结果显示student的表格的默认字符集是“latin1”不支持中文。

9. 查看数据库的创建信息

   ```MySQL
   show create database数据库名;
   #查看atguigudb数据库的详细创建信息
   show create database atguigudb;
   ```

   ```MySQL
   #结果如下
   ***************************1. row *[************火********
   Database : atguigudb
   Create Database: CREATE DATABASE ‘atguigudb`/*!40100 DEFAULT CHARACTER SET latin1 */
   1 row in set (0.00 sec)
   ```

   上面的结果显示atguigudb数据库也不支持中文，字符集默认是latin1。

10. 删除表格

    ```MySQL
    drop table 表名称;
    #删除学生表
    drop table student ;
    ```

11. 删除数据库

    ```MySQL
    drop database 数据库名;
    #删除atguigudb数据库
    drop database atguigudb ;
    ```

## MySQL的编码设置

### MySQL5.7中

问题再现:命令行操作sql乱码问题

```MySQL
mysql>INSERT INTO t_stu VALUES( 1， '张三'，'男');
ERROR 1366 (HY008 ): Incorrect string value: ' lxD51xC51xC8\xFD’ for column 'sname' at row 1
```

问题解决

步骤1:查看编码命令

```MySQL
show variables like 'character_%';
show variables like 'collation_%';
```

步骤2:修改mysql的数据目录下的my.ini配置文件

```MySQL
[mysql] # 在63行左右在其下面添加
default-character-set=utf8;

[mysqld] # 在76行左右在其下面添加
character-set-server=utf8;
collation-server=utf8_general_ci;
```

步骤三：重启服务

步骤四：查看编码命令

## MySQL8.0登录问题

{% tip %}更改加密规则{% endtip %}

```MySQL
USE mysql;

# 修改root localhost用户的密码和加载规则
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin';

# 刷新权限
FLUSH PRIVILEGES;
```

{% tip %}更改密码{% endtip %}

1. 通过服务管理，关掉mysql（服务进程）

2. 通过命令行+特殊指令开启mysql

   ```XML
   mysqld --defaults-file="H:\MySQL\MySQL 8.0\MySQL Server Data 8.0\my.ini" --skip-grant-tables
   ```

3. 此时mysql进程已经打开，并且不需要权限检查

4. mysql -uroot 无密码登录服务器，另一个客服端进行

5. 修改权限表

   ```MySQL
   use mysql;
   update user set authentication_string=password('新密码') where user='root'and Host='localhost';
   flush privileges;
   ```

6. 通过任务管理器关掉mysqld进程

7. 通过进程管理器打开mysql进程

8. 即可用修改后的新密码从新登录

# 基本的SELECT语句

## SQL分类

SQL语言在功能上主要分为如下3大类:

- {% span red, DDL (Data Definition Languages、数据定义语言) %} ，这些语句定义了不同的数据库、表、视图、索引等数据库对象，还可以用来创建、删除、修改数据库和数据表的结构。
  - 主要的语句关键字包括{% span red, CREATE,ALTER(修改),DROP(删除),RENAME(重命名),TRUNCATE(清空) %}等。
- {% span red, DML(Data Manipulation Language、数据操作语言) %}，用于添加、删除、更新和查询数据库记录，并检查数据完整性。
  - 主要的语句关键字包括{% span red, INSERT、DELETE 、UPDATE 、SELECT  %}等。
  - {% span red, SELECT是SQL语言的基础,最为重要 %}。
- {% span red, DCL (Data Control Language、数据控制语言) %}，用于定义数据库、表、字段、用户的访问权限和安全级别
  - 主要的语句关键字包括{% span red, GRANT、REVOKE、COMMIT、ROLLBACK 、SAVEPOINT %}等。

{% note red 'fas fa-fan' simple%}

因为查询语句使用的非常的频繁，所以很多人把查询语句单拎出来一类: DQL(数据查询语言)。

还有单独将{% span red, COMMIT、ROLLBACK %}取出来称为TCL (Transaction Control Language，事务控制语言)。

{% endnote %}

## SQL语言的规则和规范

### 基本规则

- SQL可以写在一行或者多行。为了提高可读性，各子句分行写，必要时使用缩进。
- 每条命令以;或\g或\G结束
- 关键字不能被缩写也不能分行。
- 关于标点符号
  - 必须保证所有的()、单引号、双引号是成对结束的。
  - 必须使用英文状态下的半角输入方式
  - 字符串型和日期时间类型的数据可以使用单引号('')表示。
  - 列的别名，尽量使用双引号("")，而且不建议省略as

### SQL大小写规范

- MySQL在windows 环境下是大小写不敏感的
- MysQL在Linux环境下是大小写敏感的
  - 数据库名、表名、表的别名、变量名是严格区分大小写的
  - 关键字、函数名、列名(或字段名)、列的别名(字段的别名)是忽略大小写的。
- 推荐采用统一的书写规范:
  - 数据库名、表名、表别名、字段名、字段别名等都小写
  - SQL关键字、函数名、绑定变量等都大写

### SQL导入规则

{% tip %}方式一{% endtip %}

```MySQL
source 文件的全路径名
```

{% tip %}方式二{% endtip %}

```MySQL
可以使用图形化界面的操作进行导入
```

### 命名规则

1. 数据库、表名不得超过30个字符，变量名限制为29个
2. 必须只能包含A-Z, a-z,0-9，共63个字符
3. 数据库名、表名、字段名等对象名中间不要包含空格
4. 同一个MysQL软件中，数据库不能同名;同一个库中，表不能重名;同一个表中，字段不能重名
5. 必须保证你的字段没有和保留字、数据库系统或常用方法冲突。如果坚持使用，请在sQL语句中使用`(着重号)引起来
6. 保持字段名和类型的一致性，在命名字段并为其指定数据类型的时候一定要保证一致性。假如数据类型在一个表里是整数，那在另一个表里可就别变成字符型了



## 最基本的SELECT语句

### SELECT...

1. SELECT 字段1， 字段2，

   ```MySQL
   SELECT 1+1,3*2;
   ```

### SELECT...FROM

1. SELECT.... FROM 表名

   ```MySQL
   SELECT 1+1,3*2 
   FROM DUAL; # dual 是伪表
   ```

   

2. *：表中的所有字段

   ```MySQL
   SELECT * FROM employees;
   ```

   

3. 具体的字段可以代替*

   ```MySQL
   SELECT employee_id, last_name
   FROM employees;
   ```

### 列的别名

1. 空格 + 别名

   ```MySQL
   SELECT employee_id emp_id
   FROM employees;
   ```

   其中emp_id就是employee_id的别名

2. 使用as，as全称：Alias(别名 )

   ```MySQL
   SELECT employee_id as emp_id
   FROM employees;
   ```

3. 使用双引号引起来，为了方式别名中有空格，等特殊字符

   ```MySQL
   SELECT employee_id "emp id"
   FROM employees;
   ```

### 列的去重

```MySQL
# 没有去重的员工ID
SELECT department_id 
FROM employees;

# 去重过后的员工ID
SELECT DISTINCT department_id
FROM employees;
```

### 空值参与运算

1. 空值：null
2. null不等同于0，'', 'null'

```MySQL
# NULL 参与运算的话，最后结果也为null
SELECT employee_id, salary "月工资", salary * (1 + commission_pct) *12 "年工资", commission_pct
FROM employees;

# 使用IFNULL来空值NULL，如果这个值是null的话就使用后面的数据代替
SELECT employee_id, salary "月工资", salary * (1 + IFNULL(commission_pct,0)) *12 "年工资", commission_pct
FROM employees;
```



### 着重号``

当我们出现表名和MySQL中的特殊字名重复的时候，我们需要使用着重号来进行使用

```MySQL
# 错误示范，ORDER是关键字
SELECT * FROM ORDER;
# 正确示范，使用``将关键字引起来 
SELECT * FROM `order`;
```

### 查询常数

```MySQL
SELECT '尚硅谷' AS '公司', employee_id, last_name
FROM employees;
```

由于表中没有尚硅谷这个列名，所以他会给每一个列都加上尚硅谷这三个字，所以成为查询常数



### 显示表结构

```MySQL
DESCRIBE 表名称; #显示表中字段的详细信息
DESC 表结构;
```



### 过滤数据

WHERE关键字，需要声明在FROM的后面

```MySQL
SELECT * 
FROM employees
WHERE department_id >= 90;
```

```MySQL
SELECT * 
FROM employees
WHERE last_name = 'King';
```

虽然SQL在windows下面不区分大小写，但是在 '' 里面是区分大小写的



# 运算符

## 算数运算符

+，-，*，/，div，%， mod，{% span red, 任何数据和null进行运算结果都为null %}.

div 是整除操作，%和mod都是取余操作

```MySQL
SELECT 100+1,100-1,100*1.0,100/1,100 div 32,100 % 32
FROM DUAL;
```

## 比较运算符

| 运算符 |      名称      |                             作用                             | 示例                                                         |
| :----: | :------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|   =    |   等于运算符   |               判断两个值，字符串表达式是否相等               | SELECT C FROM TABLE WHERE A = B                              |
|  <=>   | 安全等于运算符 |           安全的判断两个值，字符串或表达式是否相等           | SELECT C FROM TABLE WHERE A <=> B                            |
| <>(!=) |  不等于运算符  |             判断两个值，字符串或表达式是否不相等             | SELECT C FROM TABLE WHERE A <> B<br />SELECT C FROM TABLE WHERE A != B |
|   <    |   小于运算符   |  判断两个值，字符串或表达式是否小于后面的值，字符串或表达式  | SELECT C FROM TABLE WHERE A < B                              |
|   <=   | 小于等于运算符 | 判断两个值，字符串或表达式是否小于等于后面的值，字符串或表达式 | SELECT C FROM TABLE WHERE A <= B                             |
|   >    |   大于运算符   |  判断两个值，字符串或表达式是否大于后面的值，字符串或表达式  | SELECT C FROM TABLE WHERE A > B                              |
|   >=   | 大于等于运算符 | 判断两个值，字符串或表达式是否大于等于后面的值，字符串或表达式 | SELECT C FROM TABLE WHERE A >= B                             |

1. 等号运算符

   - 等号运算符（=）判断等号两边的值、字符串或表达式是否相等，如果相等则返回1，不相等则返回。
   - 在使用等号运算符时，遵循如下规则:
     - 如果等号两边的值、字符串或表达式都为字符串，则MysQL会按照字符串进行比较，其比较的是每个字符串中字H的ANSl编码是否相等.
     - 如果等号两边的值都是整数，则MySQL会按照整数来比较两个值的大小。
     - 如果等号两边的值一个是整数，另一个是字符串，则MysQL会将字符串转化为数字进行比较。
     - 如果等号两边的值、字符串或表达式中有一个为NULL，则比较结果为NULL。

2. 安全等于运算符

   安全等于运算符〈<=）与等于运算符(=）的作用是相似的，唯一的区别是‘<=>'可以用来对NULL进行判断。在两个操作数均为NULL时，其返回值为1，而不为NULL;当一个操作数为NULL时，其返回值为0，而不为NULL。



|    运算符    |       名称       |                   作用                   |                    示例                     |
| :----------: | :--------------: | :--------------------------------------: | :-----------------------------------------: |
|   IS NULL    |    为空运算符    |      判断值、字符串或表达式是否为空      |     SELECT B FROM TABLE WHERE A IS NULL     |
| IS NOT NULL  |   不为空运算符   |     判断值、字符串或表达式是否不为空     |   SELECT B FROM TABLE WHERE A IS NOT NULL   |
|    LEAST     |   最小值运算符   |           在多个值中返回最小值           |   SELECT D FROM TABLE WHERE C LEAST(A, B)   |
|   GREATEST   |   最大值运算符   |           在多个值中返回最大值           |  SELECT D FROM TABLE WHERE C GRLEAST(A, B)  |
| BETWEEN  AND | 两值之间的运算符 |        判断一个值是否在两个值之间        | SELECT D FROM TABLE WHERE C BETWEEN A AND B |
|    ISNULL    |    为空运算符    |    判断一个值、字符串或表达式是否为空    |     SELECT B FROM TABLE WHERE ISNULL(A)     |
|      IN      |    属于运算符    |    判断一个值是否为列表中的任意一个值    |    SELECT D FROM TABLE WHERE C IN(A, B)     |
|    NOT IN    |   不属于运算符   | 判断一个值是否不是一个列表中的任意一个值 |  SELECT D FROM TABLE WHERE C NOT IN(A, B)   |
|     LIKE     |  模糊匹配运算符  |      判断一个值是否符合模糊匹配规则      |     SELECT C FROM TABLE WHERE A LIKE B      |
|    REGEXP    | 正则表达式运算符 |    判断一个值是否符合正则表达式的规则    |    SELECT C FROM TABLE WHERE A REGEXP B     |
|    RLIKE     | 正则表达式运算符 |    判断一个值是否符合正则表达式的规则    |     SELECT C FROM TABLE WHERE A RLIKE B     |

1. LIKE:模糊查询

   查询LAST_NAME中包含字符'a'的员工信息

   {% note red 'fas fa-fan' simple%}

   % 代表不确定个数的字符

    _代表一个不确定字符

   \转义字符

   {% endnote %}

   ```SQL
   SELECT last_name
   FROM employees
   WHERE last_name LIKE '%a%'; # 查询last_name中包含a的信息
   
   # 查询last_name中既包含a也包含b的信息
   SELECT last_name
   FROM employees
   WHERE last_name LIKE '%a%e%' or last_name LIKE '%e%a%';
   
   # 查询last_name中第二个字符是a的信息
   # _代表一个不确定字符
   SELECT last_name
   FROM employees
   WHERE last_name LIKE '_a%';
   
   # 查询last_name中第二个字符是_第三个字符是'a'的信息
   # 使用转义字符\
   SELECT last_name
   FROM employees
   WHERE last_name LIKE '_\_a%';
   ```

## 逻辑运算符

|   运算符   |   作用   |                示例                |
| :--------: | :------: | :--------------------------------: |
|  NOT 或 !  |  逻辑非  |            SELECT NOT A            |
| AND 或 &&  |  逻辑与  | SELECT A AND B<br />SELECT A && B  |
| OR 或 \|\| |  逻辑或  | SELECT A OR B<br />SELECT A \|\| B |
|    XOR     | 逻辑异或 |           SELECT A XOR B           |



# 排序与分页

## 排序

使用ORDER BY， 对查询过的表进行排序操作

升序：ASC

降序：DESC

```MySQL
SELECT employee_id, last_name, salary
FROM employees
# 按照工资降序排列， 默认是升序
ORDER BY salary DESC;
```



也可以使用列的别名进行，排序

```MySQL
SELECT employee_id, salary, salary*12 annual_sal
FROM employees
ORDER BY annual_sal;
```



列的别名不能够使用在WHERE中

```MySQL
SELECT employee_id, salary, salary*12 annual_sal
FROM employees
WHERE annual_sal > 8000;
```

### 二级排序

当我们排完序之后，还是有可能出现同一个数据出现多次，这时候我们可以通过二级排序，将我们相同数据的信息，再按照一定的方式进行排序

```MySQL
SELECT employee_id, salary, department_id
FROM employees
ORDER BY department_id DESC,salary ASC;
```



## 分页

背景1:查询返回的记录太多了，查看起来很不方便，怎么样能够实现分页查询呢?

背景2:表里有4条数据，我们只想要显示第2、3条数据怎么办呢?

### 使用方法

关键词LIMIT

```MySQL
SELECT employee_id,last_name
FROM employees
# LIMIT 有两个参数，第一个是偏移量，第二个是该页的页数
# 第一页
LIMIT 0,20;
```

```MySQL
SELECT employee_id,last_name
FROM employees
# LIMIT 有两个参数，第一个是偏移量，第二个是该页的页数
# 第二页
LIMIT 20,20;
```

```MySQL
SELECT employee_id,last_name
FROM employees
# LIMIT 有两个参数，第一个是偏移量，第二个是该页的页数
# 第pageNo页
LIMIT (pageNo-1)*pageSize,pageSize;
```

WHERE.... ORDER BY.....  LIMIT声明顺序如下

```MySQL
SELECT employee_id, last_name, salary
FROM employees
WHERE salary > 6000
LIMIT 0,10;
```

8.0新特性

LIMIT..OFFSET...

其中第一个是显示的条数，第二个参数是偏移量

```MySQL
SELECT employee_id, last_name, salary
FROM employees
WHERE salary > 6000
LIMIT 2 OFFSET 31 ;
```





# 多表查询

![image-20221212161742069](https://s2.loli.net/2023/01/07/mH37LIwdeMu65EU.png)

## 笛卡尔积错误

出现错误原因：缺少多表的连接条件

错误出现的实现方式：将每个员工与每个部门都匹配了一遍

```MySQL
SELECT employee_id, department_name
FROM employees, departments;
```

## 正确方式

需要有连接条件

```MySQL
SELECT employee_id, department_name
FROM employees,departments
# 连接条件
WHERE employees.employee_id = departments.department_name;
```



在查询多个表中共有的属性的时候，我们需要明确的支出这个属性属于那个表

```MySQL
SELECT employee_id, department_name, employees.department_id
FROM employees,departments
WHERE employees.employee_id = dempartments.department_name;
```



建议在多表查询的时候，在每个字段前面都加上其所在的表

```MySQL
SELECT employees.employee_id, departments.department_name, employees.department_id
FROM employees,departments
WHERE employees.employee_id = dempartments.department_name;
```



但是在进行多表查询的时候，如果表名太长的话，我们需要些很多遍表明，SQL语句也会变得特别长，这时候我们可以给表起一个别名

```MySQL
SELECT emp.employee_id, dept.department_name, emp.department_id
FROM employees emp,departments dept
WHERE emp.employee_id = dept.department_name;
```



如果我们给表起了别名的话，我们在SELECT和WHERE语句中就一定要使用这个表的别名，否则会出错

如果有n个表实现多表查询，则至少需要n-1个连接条件

练习：查询员工的 employee_id,last_name,department_name,city

```MySQL
SELECT emp.employee_id, emp.last_name, dept.department_name, loca.city
FROM employees emp, departments dept, locations loca
WHERE emp.department_id = dept.department_id 
AND dept.location_id = loca.location_id;
```

## 分类

### 等值连接 VS 非等值连接

只要是WHERE中是=号的是等值连接，如果不是等号的话那么就是非等值连接

等值连接

```MySQL
SELECT emp.employee_id, emp.last_name, dept.department_name, loca.city
FROM employees emp, departments dept, locations loca
WHERE emp.department_id = dept.department_id 
AND dept.location_id = loca.location_id;
```

非等值连接

```MySQL
SELECT e.last_name, e.salary, j.grade_level
FROM employees e, job_grades j
WHERE e.salary BETWEEN j.lowest_sal AND j.highest_sal;
```



### 自连接 VS 非自连接

只要是跟别的表进行连接的话，那就是非自连接

如果是要跟自己连接的话那么就是自连接

自连接

```MySQL
SELECT emp.employee_id, emp.last_name, mgr.employee_id mgr_id, mgr.last_name mgr_name
FROM employees emp, employees mgr
WHERE emp.manager_id = mgr.employee_id;
```



### 内连接 VS 外连接

内连接：只是将满足条件的数据展示出来了，没有满足条件的数据并没有展示

外连接：合并具有同一列两个以上的表的行，结果集中除了包含一个表与另一个表匹配的行之外，{% span red, 还查询到了左表或者右表中不匹配的行。 %}

外连接的分类：左外连接，右外连接，满外连接

左外连接:两个表在连接过程中除了返回满足连接条件的行以外还返回左表中不满足条件的行，这种方式称作左外连接

右外连接:两个表在连接过程中除了返回满足连接条件的行以外还返回右表中不满足条件的行，这种方式称作右外连接

练习：查询{% span red, 所有 %}员工的last_name,department_name的信息,一旦出现所有的话那么就表明这个是外连接

SQL92 实现内连接的方式是：上面所使用的的方式

SQL92 使用(+) 实现外连接 MySQL不支持

```sql
SELECT emp.employee_id, emp.last_name, mgr.employee_id mgr_id, mgr.last_name mgr_name
FROM employees emp, employees mgr
WHERE emp.manager_id = mgr.employee_id(+);
```

SQL99 语法使用 JOIN .... ON的方式实现多表查询，这种方式也能够解决外连接问题

SQL99 实现内连接

```MySQL
# 两张表
SELECT last_name, department_name
FROM employees e JOIN departments d
ON e.department_id = d.department_id;

# 三张表
SELECT last_name, department_name, city
FROM employees e JOIN departments d
ON e.department_id = d.department_id
JOIN locations l
ON d.location_id = l.location_id;
```



SQL99实现内连接

```MySQL
# 左外连接
SELECT last_name, department_name
FROM employees e LEFT OUTER JOIN departments d
ON e.department_id = d.department_id;
# 右外连接OUTER可以省略
SELECT last_name, department_name
FROM employees e RIGHT JOIN departments d
ON e.department_id = d.department_id;
# 满 但是MySQL不支持
SELECT last_name, department_name
FROM employees e FULL JOIN departments d
ON e.department_id = d.department_id;
```



## UNION使用

{% tip %} 合并查询结果 {% endtip %}

利用UNION关键字，可以给出多条SELECT语句，并将它们的结果组合成单个结果集。合并时，两个表对应的列数和数据类型必须相同，并且相互对应。各个SELECT语句之间使用UNION或UNION ALL关键字分隔。

语法

```MySQL
SELECT column, ... FROM table1
UNION [ALL]
SELECT column, ... FROM table2;
```



{% tip %}UNION操作符{% endtip %}

![image-20221212195455678](https://s2.loli.net/2023/01/07/fpKLkTu65UFv3ow.png)

UNION操作符返回两个查询的结果集的并集，去除重复记录

{% tip %}UNION ALL操作符{% endtip %}

![image-20221212195445683](https://s2.loli.net/2023/01/07/OFrq9AijQNfebYl.png)

UNION ALL返回两个结果集的并集，对于两个结果集的重复部分，不去重

{% tip warning faa-horizontal animated %}执行UNIONALL语句时所需要的资源比UNION语句少。如果明确知道合并数据后的结果数据不存在重复数据，或者不需要去除重复的数据，则尽量使用UNION ALL语句，以提高数据查询的效率。{% endtip %}



## 7种SQL JOIN的实现

![image-20221212194749353](https://s2.loli.net/2023/01/07/MLY8nwpKCj4ZOs6.png)



中图：内连接

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e JOIN departments d
ON e.department_id = d.department_id;
```

左上图：左外连接

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id;
```

右上图：右外连接

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e RIGHT JOIN departments d
ON e.department_id = d.department_id;
```

左中图

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id
WHERE d.department_id is NULL;
```

右中图

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e RIGHT JOIN departments d
ON e.department_id = d.department_id
WHERE e.department_id is NULL;
```

左下图：满外连接：UNION ALL

方式一：左上图UNION ALL 右中图

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id
UNION ALL
SELECT e.employee_id, d.department_id
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id
WHERE e.department_id is NULL;
```

右下图

左中图 UNION ALL 右中图

```MySQL
SELECT e.employee_id, d.department_id
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id
WHERE d.department_id is NULL
UNION ALL
SELECT e.employee_id, d.department_id
FROM employees e LEFT JOIN departments d
ON e.department_id = d.department_id
WHERE e.department_id is NULL;
```



## SQL99新特性

1. 自然连接

   SQL99在sQL92的基础上提供了一些特殊语法，比如NATURAL JOIN用来表示自然连接。我们可以把自然连接理解为sQL92中的等值连接。它会帮你自动查询两张连接表中所有相同的字段，然后进行等值连接

   原始写法

   ```MySQL
   SELECT e.employee_id, d.department_id
   FROM employees e JOIN departments d
   ON e.department_id = d.department_id
   AND e.manager_id = d.manager_id
   ```

   自然连接

   ```MySQL
   SELECT e.employee_id, d.department_id
   FROM employees e NATURAL JOIN departments d
   ```

2. USING

   原始写法

   ```MySQL
   SELECT e.employee_id, d.department_id
   FROM employees e JOIN departments d
   ON e.department_id = d.department_id
   ```

   USING

   当我们进行连接的时候，SQL99还支持使用USING指定数据表里的同名字段进行等值连接。但是只能配合JOIN使用

   ```MySQL
   SELECT e.employee_id, d.department_id
   FROM employees e JOIN departments d
   USING (department_id);
   ```

   



# 单行函数

## 数值函数

### 基本函数

{% tip %}基本函数{% endtip %}

|          函数           |                             用法                             |
| :---------------------: | :----------------------------------------------------------: |
|         ABS(x)          |                        返回x的绝对值                         |
|         SIGN(x)         |           返回x的符号正数返回1，负数返回-1,0返回0            |
|          PI()           |                        返回圆周率的值                        |
|   CEIL(x),CEILING(x)    |               返回大于或者等于某个值的最小整数               |
|        FLOOR(x)         |                返回小于或等于某个值的最小整数                |
|    LEAST(e1, e2, e3)    |                      返回列表中的最小值                      |
| GREATEST(e1, e2, e3...) |                      返回列表中的最大值                      |
|        MOD(x,y)         |                     返回x除以y之后的余数                     |
|         RAND()          |                       返回0-1的随机值                        |
|         RAND(x)         | 返回0-1的随机值，其中x的值用作种子值<br />相同的x的值会产生相同的随机数 |
|        ROUND(x)         |         返回一个对x值进行四舍五入之后，最接近x的整数         |
|       ROUND(x,y)        | 返回一个对x的值进行四舍五入后最接近x的值，<br />并保留到小数点后面的Y位 |
|      TRUNCATE(x,y)      |                 返回数字x截断为y位小数的结果                 |
|         SQRT(x)         |            返回x的平方根,当x为负数的时候返回NULL             |

### 角度与弧度互换函数

{% tip %}角度与弧度互换函数{% endtip %}

|    函数    |                 用法                  |
| :--------: | :-----------------------------------: |
| RADIANS(x) | 将角度转化为弧度，其中，参数x为角度值 |
| DEGREES(x) | 将弧度转化为角度，其中，参数x为弧度值 |

### 三角函数

{% tip %}三角函数{% endtip %}

|    函数    |                             用法                             |
| :--------: | :----------------------------------------------------------: |
|   SIN(x)   |              返回x的正弦值，其中，参数x为弧度值              |
|  ASIN(x)   | 返回x的反正弦值，即获取正弦为x的值。<br />如果x的值不在-1到1之间，则返回NULL |
|   COS(x)   |              返回x的余弦值，其中，参数x为弧度值              |
|  ACOS(x)   | 返回x的反余弦值，即获取余弦为x的值。<br />如果x的值不在-1到1之间，则返回NULL |
|   TAN(x)   |              返回x的正切值，其中，参数x为弧度值              |
|  ATAN(x)   |             返回x的反正切值，即返回正切值为x的值             |
| ATAN2(m,n) |                    返回两个参数的反正切值                    |
|   COT(x)   |                返回x的余切值，其中，X为弧度值                |

### 指数和对数

{% tip %}指数和对数{% endtip %}

|        函数         |                      用法                      |
| :-----------------: | :--------------------------------------------: |
| POW(x,y),POWER(x,y) |                  返回x的y次方                  |
|       EXP(x)        | 返回e的x次方，其中e是一个常数2.718281828459045 |
|    LN(x),LOG(x)     |  返回以e为底的对数，当x<=0时，返回结果为NULL   |
|      LOG10(x)       |    返回以10为底的x的对数，当x<=0是返回NULL     |
|       LOG2(x)       |     返回以2为底的x的对数，当x<=0时返回NULL     |

### 进制转换

{% tip %}进制转换{% endtip %}

|      函数      |           用法           |
| :------------: | :----------------------: |
|     BIN(x)     |    返回x的二进制编码     |
|     HEX(x)     |    返回x的16进制编码     |
|     OTC(x)     |    返回x的八进制编码     |
| CONV(x, f1,f2) | 返回f1进制数变成f2进制数 |





## 字符串函数

|               函数                |                             用法                             |
| :-------------------------------: | :----------------------------------------------------------: |
|             ASCII(S)              |              返回字符串S第一个字符的ASCII码的值              |
|          CHAR_LENGTH(s)           |      返回字符串s的字符数，作用与CHARACTER_LENGTH(s)相同      |
|             LENGTH(s)             |                 返回s的字节数，和字符集有关                  |
|      CONCAT(s1,s2,......,sn)      |               连接s1,s2,......,sn为一个字符串                |
|   CONCAT_WS(x, s1,s2,......,sn)   |      同CONCAT(s1,s2,...)函数，但是每个字符串之间要加上x      |
| INSERT(str, idx, len, replacestr) | 将字符串str从第idx位置开始，len个字符长的子串替换为字符串replacestr |
|        REPLACE(str, a, b)         |          用字符串b替换字符串str中所有出现的字符串a           |
|       UPPER(s) 或 UCASE(s)        |               将字符串s的所有字母转成大写字母                |
|        LOWER(s) 或LCASE(s)        |               将字符串s的所有字母转成小写字母                |
|            LEFT(str,n)            |                 返回字符串str最左边的n个字符                 |
|           RIGHT(str,n)            |                 返回字符串str最右边的n个字符                 |
|        LPAD(str, len, pad)        |   用字符串pad对str最左边进行填充，直到str的长度为len个字符   |
|        RPAD(str ,len, pad)        |   用字符串pad对str最右边进行填充，直到str的长度为len个字符   |
|             LTRIM(s)              |                    去掉字符串s左侧的空格                     |
|             RTRIM(s)              |                    去掉字符串s右侧的空格                     |
|              TRIM(s)              |                 去掉字符串s开始与结尾的空格                  |
|          TRIM(s1 FROM s)          |                  去掉字符串s开始与结尾的s1                   |
|      TRIM(LEADING s1 FROM s)      |                    去掉字符串s开始处的s1                     |
|     TRIM(TRAILING s1 FROM s)      |                    去掉字符串s结尾处的s1                     |
|          REPEAT(str, n)           |                     返回str重复n次的结果                     |
|             SPACE(n)              |                         返回n个空格                          |
|           STRCMP(s1,s2)           |               比较字符串s1,s2的ASCII码值的大小               |
|        SUBSTR(s,index,len)        | 返回从字符串s的index位置其len个字符，作用与SUBSTRING(s,n,len)、 MID(s,n,len)相同 |
|        LOCATE(substr,str)         | 返回字符串substr在字符串str中首次出现的位置，作用于POSITION(substr IN str)、INSTR(str,substr)相同。未找到，返回0 |
|         ELT(m,s1,s2,…,sn)         | 返回指定位置的字符串，如果m=1，则返回s1，如果m=2，则返回s2，如 果m=n，则返回sn |
|        FIELD(s,s1,s2,…,sn)        |          返回字符串s在字符串列表中第一次出现的位置           |
|        FIND_IN_SET(s1,s2)         | 返回字符串s1在字符串s2中出现的位置。其中，字符串s2是一个以逗号分 隔的字符串 |
|            REVERSE(s)             |                     返回s反转后的字符串                      |
|       NULLIF(value1,value2)       | 比较两个字符串，如果value1与value2相等，则返回NULL，否则返回 value1 |

{% tip warning %}注意：MySQL中，字符串的位置是从1开始的。{% endtip %}

## 时间函数

### 获取日期和时间

{% tip %}获取日期和时间{% endtip %}

|                             函数                             |              用法               |
| :----------------------------------------------------------: | :-----------------------------: |
|                  CURDATE() ，CURRENT_DATE()                  | 返回当前日期，只包含年、 月、日 |
|                 CURTIME() ， CURRENT_TIME()                  | 返回当前时间，只包含时、 分、秒 |
| NOW() / SYSDATE() / CURRENT_TIMESTAMP() / LOCALTIME() / LOCALTIMESTAMP() |     返回当前系统日期和时间      |
|                          UTC_DATE()                          |  返回UTC（世界标准时间） 日期   |
|                          UTC_TIME()                          |  返回UTC（世界标准时间） 时间   |

### 日期与时间戳的转换

{% tip %}日期与时间戳的转换{% endtip %}

|           函数           |                             用法                             |
| :----------------------: | :----------------------------------------------------------: |
|     UNIX_TIMESTAMP()     | 以UNIX时间戳的形式返回当前时间。SELECT UNIX_TIMESTAMP() - >1634348884 |
|   UNIX_TIMESTAMP(date)   |              将时间date以UNIX时间戳的形式返回。              |
| FROM_UNIXTIME(timestamp) |            将UNIX时间戳的时间转换为普通格式的时间            |

### 获取月份、星期、星期数、天数等函数

{% tip %}获取月份、星期、星期数、天数等函数{% endtip %}

|                   函数                   |                       用法                       |
| :--------------------------------------: | :----------------------------------------------: |
|   YEAR(date) / MONTH(date) / DAY(date)   |                 返回具体的日期值                 |
| HOUR(time) / MINUTE(time) / SECOND(time) |                 返回具体的时间值                 |
|             MONTHNAME(date)              |              返回月份：January，...              |
|              DAYNAME(date)               |      返回星期几：MONDAY，TUESDAY.....SUNDAY      |
|              WEEKDAY(date)               |  返回周几，注意，周1是0，周2是1，。。。周日是6   |
|              QUARTER(date)               |          返回日期对应的季度，范围为1～4          |
|      WEEK(date) ， WEEKOFYEAR(date)      |                返回一年中的第几周                |
|             DAYOFYEAR(date)              |             返回日期是一年中的第几天             |
|             DAYOFMONTH(date)             |           返回日期位于所在月份的第几天           |
|             DAYOFWEEK(date)              | 返回周几，注意：周日是1，周一是2，。。。周六是 7 |
|         EXTRACT(type FROM date)          |    返回指定日期中特定的部分，type指定返回的值    |

EXTRACT(type FROM date)函数中type的取值与含义：

![image-20221214110856100](https://s2.loli.net/2023/01/07/PzMmhJLFbsyWNkc.png)



### 时间和秒钟转换的函数

{% tip %} 时间和秒钟转换的函数{% endtip %}

|         函数         |                             用法                             |
| :------------------: | :----------------------------------------------------------: |
|  TIME_TO_SEC(time)   | 将 time 转化为秒并返回结果值。转化的公式为： 小时*3600+分钟 *60+秒 |
| SEC_TO_TIME(seconds) |        将 seconds 描述转化为包含小时、分钟和秒的时间         |



### 计算日期和时间的函数

{% tip %}计算日期和时间的函数{% endtip %}

|                             函数                             |                      用法                       |
| :----------------------------------------------------------: | :---------------------------------------------: |
| DATE_ADD(datetime, INTERVAL expr type)， <br />ADDDATE(date,INTERVAL expr type) | 返回与给定日期时间相差INTERVAL时 间段的日期时间 |
| DATE_SUB(date,INTERVAL expr type)， <br />SUBDATE(date,INTERVAL expr type) |      返回与date相差INTERVAL时间间隔的 日期      |

上述函数中Type的取值

![image-20221214152318136](https://s2.loli.net/2023/01/07/ML1lA3BqomuskhI.png)



|             函数             |                             用法                             |
| :--------------------------: | :----------------------------------------------------------: |
|     ADDTIME(time1,time2)     | 返回time1加上time2的时间。当time2为一个数字时，代表的是 秒 ，可以为负数 |
|     SUBTIME(time1,time2)     | 返回time1减去time2后的时间。当time2为一个数字时，代表的是秒 ，可以为负数 |
|    DATEDIFF(date1,date2)     |               返回date1 - date2的日期间隔天数                |
|    TIMEDIFF(time1, time2)    |                 返回time1 - time2的时间间隔                  |
|         FROM_DAYS(N)         |             返回从0000年1月1日起，N天以后的日期              |
|        TO_DAYS(date)         |              返回日期date距离0000年1月1日的天数              |
|        LAST_DAY(date)        |               返回date所在月份的最后一天的日期               |
|       MAKEDATE(year,n)       |          针对给定年份与所在年份中的天数返回一个日期          |
| MAKETIME(hour,minute,second) |            将给定的小时、分钟和秒组合成时间并返回            |
|      PERIOD_ADD(time,n)      |                    返回time加上n后的时间                     |

### 日期的格式化与解析

{% tip %}日期的格式化与解析{% endtip %}

|               函数                |                    用法                    |
| :-------------------------------: | :----------------------------------------: |
|       DATE_FORMAT(date,fmt)       |       按照字符串fmt格式化日期date值        |
|       TIME_FORMAT(time,fmt)       |       按照字符串fmt格式化时间time值        |
| GET_FORMAT(date_type,format_type) |          返回日期字符串的显示格式          |
|       STR_TO_DATE(str, fmt)       | 按照字符串fmt对str进行解析，解析为一个日期 |

 上面GET_FORMAT函数中fmt参数常用格式

| 格式符 |                             说明                             | 格式符  |                             说明                             |
| :----: | :----------------------------------------------------------: | :-----: | :----------------------------------------------------------: |
|   %Y   |                       4位数字表示年份                        |   %y    |                     表示两位数字表示年份                     |
|   %M   |                 月名表示月份（January,....）                 |   %m    |             两位数字表示月份 （01,02,03。。。）              |
|   %b   |                缩写的月名（Jan.，Feb.，....）                |   %c    |                  数字表示月份（1,2,3,...）                   |
|   %D   |          英文后缀表示月中的天数 （1st,2nd,3rd,...）          |   %d    |               两位数字表示月中的天数(01,02...)               |
|   %e   |          数字形式表示月中的天数 （1,2,3,4,5.....）           |         |                                                              |
|   %H   |            两位数字表示小数，24小时制 （01,02..）            | %h 和%I |            两位数字表示小时，12小时制 （01,02..）            |
|   %k   |               数字形式的小时，24小时制(1,2,3)                |   %l    |          数字形式表示小时，12小时制 （1,2,3,4....）          |
|   %i   |                 两位数字表示分钟（00,01,02）                 | %S 和%s |                 两位数字表示秒(00,01,02...)                  |
|   %W   |                一周中的星期名称（Sunday...）                 |   %a    |          一周中的星期缩写（Sun.， Mon.,Tues.，..）           |
|   %w   |         以数字表示周中的天数 (0=Sunday,1=Monday....)         |         |                                                              |
|   %j   |             以3位数字表示年中的天数(001,002...)              |   %U    | 以数字表示年中的第几周， （1,2,3。。）<br />其中Sunday为周中第一 天 |
|   %u   | 以数字表示年中的第几周， （1,2,3。。）<br />其中Monday为周中第一 天 |         |                                                              |
|   %T   |                           24小时制                           |   %r    |                           12小时制                           |
|   %p   |                            AM或PM                            |   %%    |                            表示%                             |





## 流程控制函数

|                             函数                             |                       用法                       |
| :----------------------------------------------------------: | :----------------------------------------------: |
|                   IF(value,value1,value2)                    | 如果value的值为TRUE，返回value1， 否则返回value2 |
|                    IFNULL(value1, value2)                    | 如果value1不为NULL，返回value1，否 则返回value2  |
| CASE WHEN 条件1 THEN 结果1 WHEN 条件2 THEN 结果2 .... [ELSE resultn] END |        相当于Java的if...else if...else...        |
| CASE expr WHEN 常量值1 THEN 值1 WHEN 常量值1 THEN 值1 .... [ELSE 值n] END |           相当于Java的switch...case...           |



## 加密与解密函数

|            函数             |                             用法                             |
| :-------------------------: | :----------------------------------------------------------: |
|        PASSWORD(str)        | 返回字符串str的加密版本，41位长的字符串。加密结果 不可 逆 ，常用于用户的密码加密 |
|          MD5(str)           | 返回字符串str的md5加密后的值，也是一种加密方式。若参数为 NULL，则会返回NULL |
|          SHA(str)           | 从原明文密码str计算并返回加密后的密码字符串，当参数为 NULL时，返回NULL。 SHA加密算法比MD5更加安全 。 |
| ENCODE(value,password_seed) |          返回使用password_seed作为加密密码加密value          |
| DECODE(value,password_seed) |          返回使用password_seed作为加密密码解密value          |



## MySQL信息函数

|                          函数                          |                           用法                            |
| :----------------------------------------------------: | :-------------------------------------------------------: |
|                       VERSION()                        |                   返回当前MySQL的版本号                   |
|                    CONNECTION_ID()                     |                返回当前MySQL服务器的连接数                |
|                  DATABASE()，SCHEMA()                  |              返回MySQL命令行当前所在的数据库              |
| USER()，CURRENT_USER()、SYSTEM_USER()， SESSION_USER() | 返回当前连接MySQL的用户名，返回结果格式为 “主机名@用户名” |
|                     CHARSET(value)                     |               返回字符串value自变量的字符集               |
|                    COLLATION(value)                    |                 返回字符串value的比较规则                 |



## 其他函数

|              函数              |                             用法                             |
| :----------------------------: | :----------------------------------------------------------: |
|        FORMAT(value,n)         | 返回对数字value进行格式化后的结果数据。n表示 四舍五入 后保留 到小数点后n位 |
|      CONV(value,from,to)       |              将value的值进行不同进制之间的转换               |
|       INET_ATON(ipvalue)       |               将以点分隔的IP地址转化为一个数字               |
|        INET_NTOA(value)        |           将数字形式的IP地址转化为以点分隔的IP地址           |
|       BENCHMARK(n,expr)        | 将表达式expr重复执行n次。用于测试MySQL处理expr表达式所耗费 的时间 |
| CONVERT(value USING char_code) |            将value所使用的字符编码修改为char_code            |





# 聚合函数

## 基本函数

AVG 平均数

SUM 和操作

MAX 最大值

MIN 最小值

COUNT 数量

方差，标准差，中位数

```MySQL
SELECT COUNT(employee_id)
FROM employees;
```

## GROUP BY

### 一次分组

可以对一个个的组进行操作

![image-20221215162608807](https://s2.loli.net/2023/01/07/VkO24EHZ5fQDr1U.png)

```MySQL
SELECT department_id, AVG(salary)
FROM employees
GROUP BY department_id;
```



### 二次分组

![image-20221215163152751](https://s2.loli.net/2023/01/07/Bzj32Ha7diXDVol.png)

```MySQL
SELECT department_id, job_id, AVG(salary)
FROM employees
GROUP BY department_id, job_id;
```



{% tip %}错误写法{% endtip %}

```MySQL
SELECT department_id, job_id, AVG(salary)
FROM employees
GROUP BY department_id;
```

{% note purple 'far fa-hand-scissors' modern %}

结论1：SELECT中出现的非组函数的字段必须声明在GROUP BY 中，反之GROUP BY中声明的字段可以不出现在SELECT中

结论2：GROUP BY声明在FROM后面，WHERE后面，ORDER BY前面，LIMIT前面

{% endnote %}

{% tip %}WITH ROLLUP{% endtip %}

WITHROLLUP 在进行算数的时候{% span red, 我们在算完之后，还会在进行一次总体的运算 %}.

```MySQL
SELECT department_id AVG(salary) "avg_sal"
FROM employees
GROUP BY department_id WITH ROLLUP;
```

{% tip warning %}当时用ROLLUP时，不能使用ORDEY BY子句进行结果排序，两者是互斥的{% endtip %}



## HAVING

![image-20221215165635085](https://s2.loli.net/2023/01/07/p9cOKyIn4xL2GAk.png)

用来过滤数据，适配GROUP BY的特殊“WHERE”

{% tip error %}错误写法{% endtip %}

```MySQL
SELECT department_id, MAX(salary)
FROM employees
WHERE MAX(salary) > 10000
GROUP BY department_id;
```

WHERE的作用时间是在GROUP BY之前，所以该语句会报错

{% tip success %}正确写法{%  endtip %}

如果过滤条件中使用了聚合函数，则必须使用HAVING来替换WHERE，否则报错

并且HAVING必须声明在GROUP BY后面

```MySQL
SELECT department_id, MAX(salary)
FROM employees
GROUP BY department_id
HAVING MAX(salary) > 10000
```

练习：查询部门ID为10,20,30,40这4个部门中最高工资比10000高的部门

方式一

```MySQL
SELECT department_id,MAX(salary)
FROM employees
WHERE department_id IN (10,20,30,40)
GROUP BY department_id
HAVING MAX(salary) > 10000
```

方式二：

```MySQL
SELECT department_id,MAX(salary)
FROM employees
GROUP BY department_id
HAVING MAX(salary) > 10000 AND department_id IN (10,20,30,40);
```

{% note red 'fas fa-fan' simple%}

结论:

1. 当过滤条件中有聚合函数时，则此过滤条件必须声明在HAVING中。

2. 当过滤条件中没有聚合函数时，则此过滤条件声明在WHERE中或HAVING中都可以。但是，建议声明在WHERE中、

WHERE与HAVING 的对比

1. 从适用范围上来讲，HAVING的适用范围更广。

2. 如果过滤条件中没有聚合函数:这种情况下，WHERE的执行效率要高于HAVING

{% endnote %}



{% tabs 语法区别 %}

<!-- tab SQL92 -->

```MySQL
SELECT ...,...,...
FROM ...,...,...
WHERE 多表连接条件 AND 不包含聚合函数的过滤条件
GROUP BY ...,...
HAVING 包含聚合函数的过滤条件
ORDER BY ...,...
LIMIT ...,...
```

<!-- endtab -->

<!-- tab SQL99 -->

```MySQL
SELECT ...,...,...
FROM ... (LEFT / RIGHT)JOIN ... ON 多表连接的条件
(LEFT / RIGHT)JOIN ... ON 多表连接的条件
WHERE 不包含聚合函数的过滤条件
GROUP BY ...,...
HAVING 包含聚合函数的过滤条件
ORDER BY ...,...
LIMIT ...,...
```

<!-- endtab -->

{% endtabs %}

{% tip %}SQL语句的执行过程{% endtip %}

FROM ....,.... -> ON ->(LEFT/RIGHT JOIN) -> WHERE -> GROUP BY -> HAVING ->SELECT ->DISTINCT -> ORDER BY -> LIMIT



## 练习

1. 查询所有部门的名字，location_id, 员工数量和平均工资，并按平均工资降序

   {% folding green, 查看答案 %}

   ```MySQL
   # 因为是要查询所有部门的名字，所以我们应该使用全连接
   SELECT d.department_name, d.location_id ,COUNT(employee_id), AVG(salary)
   FROM departments d LEFT JOIN employees e
   ON e.department_id = d.department_id
   GROUP BY department_name, location_id
   ORDER BY AVG(salary) DESC;
   ```

   {% endfolding %}

2. 查询各个管理者手下员工的最低工资，其中最低工资不能低于6000，没有管理者的员工不计算在内

   {% folding green, 查看答案 %}

   ```MySQL
   # 这是要查询每个管理者手下的员工，所以我们可以根据管理者来进行分组,
   # 原先是任务需要多表查询，但实际上不用
   SELECT manager_id, MIN(salary)
   FROM employees
   WHERE manager_id IS NOT NULL
   GROUP BY manager_id
   HAVING MIN(salary) >= 6000;
   ```

   {% endfolding %}

3. 查询每个工种每个部门的部门名，工种名和最低工资

   {% folding green, 查看答案 %}

   ```MySQL
   # 这里说明的是每一个部门，所以我们应该使用全连接部门
   SELECT d.department_name, e.job_id, MIN(salary)
   FROM employees e RIGHT JOIN departments d 
   ON e.department_id = d.department_id 
   GROUP BY d.department_name, e.job_id;
   ```

   {% endfolding %}



# 子查询

需求：我们想要查询到谁的工资比Abel高

{% folding green, 方式一 %}

```MySQL
# 方式一，需要经过两次查询
# 第一次先查出Abel的工资
SELECT salary
FROM employees
WHERE last_name = "Abel";

# 第二次，根据Abel的工资查出比它高的人
SELECT last_name, salary
FROM employees
WHERE salary > 10000;
```



{% endfolding %}

{% folding green, 方式二:自连接 %}

```MySQL
# 自连接
SELECT e2.last_name,e2.salary
FROM employees e1, employees e2
WHERE e1.last_name = "Abel"
AND e2.salary > e1.salary;
```



{% endfolding %}

{% folding green, 方式三:子查询 %} 

```MySQL
# 子查询
SELECT last_name, salary
FROM employees
WHERE salary > (
                SELECT salary
                FROM employees
                WHERE last_name = "Abel"
                );
```



{% endfolding %}

{% tip warning %}注意{% endtip %}

1. 子查询(内查询)在主查询之前一次执行完成。
2. 子查询的结果被主查询(外查询）使用。

注意事项

- 子查询要包含在括号内
- 将子查询放在比较条件的右侧
- 单行操作符对应单行子查询，多行操作符对应多行子查询

## 分类

角度一：从内查询返回的结果的条目数

​	单行子查询 VS 多行子查询

角度二：内查询是否别执行了多次

​	相关子查询 VS 不相关子查询

​	比如：相关子查询的需求：查询工资大于{% span red,  本部门 %}平均工资的员工信息

​				不相关子查询的需求：查询员工工资大于{% span red,  本公司 %}平均工资的员工信息



## 单行子查询

### 比较操作符

= 	!=  	> 	>= 	< 	<= 	<>

### 实例

1. 返回大于员工ID为149的员工的工资的员工信息

```MySQL
SELECT * FROM employees
WHERE salary > (
    SELECT salary FROM employees
    WHERE employee_id = 149
);
```

2. 返回job_id和141号员工的job_id相同并且 salary 大于143号员工的员工信息

```MySQL
SELECT last_name, job_id, salary
FROM employees
WHERE job_id = (
    SELECT job_id
    FROM employees
    WHERE employee_id = 141
)
AND salary > (
    SELECT salary 
    FROM employees
    WHERE employee_id = 143
);
```

3. 返回公司工资最少的员工的last_name, job_id和salary

```MySQL
SELECT last_name, job_id, salary
FROM employees
WHERE salary = (
	SELECT MIN(salary)
	FROM employees
);
```

4. 查询与141号员工的manager_id和department_id相同的其他员工的employee_id，manager_id,department_id

   {% folding green, 方式一 %}

   ```MySQL
   SELECT employee_id, manager_id, department_id
   FROM employees
   WHERE manager_id = (
   	SELECT manager_id
   	FROM employees
   	WHERE employee_id = 141
   )
   AND department_id = (
   	SELECT department_id
   	FROM employees
   	WHERE employee_id = 141
   )
   AND employee_id != 141
   ```

   {% endfolding %}

   {% folding green, 方式二 %}

   ```MySQL
   SELECT employee_id, manager_id, department_id
   FROM employees
   WHERE (manager_id,department_id) = (
   	SELECT manager_id, department_id
   	FROM employees
   	WHERE employee_id = 141
   )
   AND employee_id != 141
   ```

   {% endfolding %}

5. 查询最低工资大于50号部门最低工资的部门id和其最低工资

   ```MySQL
   SELECT department_id, MIN(salary)
   FROM employees
   GROUP BY department_id
   HAVING MIN(salary) > (
   	SELECT MIN(salary)
   	FROM employees
   	WHERE department_id = 50
   );
   ```

6. 显式员工的employee id,last name和location。其中，若员工department id与location_id为1800的department_id相同，则location为'Canada'，其余则为'USA'。

   ```MySQL
   SELECT employee_id,last_name, 
   CASE department_id WHEN (SELECT department_id FROM departments WHERE location_id = 1800) THEN "Canada"
   ELSE "USA"  END "location"
   FROM employees;
   ```

   

## 多行子查询

### 比较操作符

| 操作符 |                             含义                             |
| :----: | :----------------------------------------------------------: |
|   IN   |                       等于列表中的一个                       |
|  ANY   | 需要和单行比较操作符一起使用，和子查询返回的某一个值进行比较 |
|  ALL   | 需要和单行比较操作符一起使用，和子查询返回的某所有值进行比较 |
|  SOME  |         实际上是ANY的别名，作用相同，一般经常使用ANY         |



### 实例

ANY / ALL: 返回{% span red, 其它 %}job id中比job id为'IT_PROG'部门{% span red, 任一 %}工资低的员工的员工号、姓名、job_id 以及salary

```MySQL
SELECT employee_id, last_name, job_id, salary
FROM employees
WHERE job_id != "IT_PROG"
AND salary < ANY (
	SELECT salary
    FROM employee
    WHERE job_id = "IT_PROG"
)
```

ANY / ALL: 返回{% span red, 其它 %}job id中比job id为'IT_PROG'部门{% span red, 所有 %}工资低的员工的员工号、姓名、job_id 以及salary

```MySQL
SELECT employee_id, last_name, job_id, salary
FROM employees
WHERE job_id != "IT_PROG"
AND salary < ALL (
	SELECT salary
    FROM employee
    WHERE job_id = "IT_PROG"
)
```



查询平均工资最低的部门ID

{% folding green, 方式一 %}
```MySQL
SELECT department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary) = (
	SELECT MIN(avg_sal)
    FROM(
    	SELECT AVG(salary) avgsal
        FROM employees
        GROUP BY department_id
    	) t_dept_avg_sal
	);
```



{% endfolding %}

{% folding green, 方式二 %}

```MySQL
SELECT department_id
FROM employees
GROUP BY department_id
HAVING AVG(salary) < ALL(
    	SELECT AVG(salary) avgsal
        FROM employees
        GROUP BY department_id
	);
```



{% endfolding %}



## 相关子查询

如果{% span red, 子查询的执行依赖于外部查询 %}，通常情况下都是因为{% span red, 子查询中的表用到了外部的表 %}，并进行了条件关联，因此{% span red, 每执行一次外部查询,子查询都要重新计算一次%}，这样的子查询就称之为关联子查询。

相关子查询按照一行接一行的顺序执行，主查询的每一行都执行一次子查询。



### 例题

查询员工中工资大于本部门平均工资的员工的last_name,salary和其department_id

{% folding green, 方式一 %}

```MySQL
SELECT last_name, salary, department_id
FROM employees e1
WHERE salary > (
	SELECT AVG(salary)
    FROM employees e2
    WHERE e2.department_id = e1.department_id
);
```

{% endfolding %}

{% folding green, 方式二 %}

```MySQL
SELECT last_name, salary, department_id
FROM employees e1,(SELECT department_id, AVG(salary) avg_sal FROM employees GROUP BY department_id) t_dept_avg
WHERE e.department_id = t_dept_avg.department_id AND e.salary > t_dept_avg.avg_sal

```

{% endfolding %}

查询员工的ID，salary，按照department_name排序

```MySQL
SELECT e.employee_id, e.salary
FROM employees e
ORDER BY (
	SELECT d.department_name
    FROM departments d
    WHERE e.department_id = d.department_id
)
```



若employees表中employee id与job_history表中employee_id相同的数目不小于2，输出这些相同id的员工的employee_id,last_name和其job_id

```MySQL
SELECT employee_id,last_name, job_id
FROM employees e
WHERE 2 <= (
	SELECT COUNT(*)
    FROM job_history j
    WHERE e.employee_id = j.employee_id 
);
```



### EXISTS与NOT EXISTS关键字

查询公司管理者的employee_id, last_name, job_id, department_id信息

{% folding green, 方式一：自连接 %}

```MySQL
SELECT DISTINCT mgr.employee_id, mgr.last_name, mgr.job_id, mgr.department_id
FROM employees emp JOIN employees mgr
WHERE emp.manager_id = mgr.employee_id
```

{% endfolding %}

{% folding green, 方式二：子查询 %}

```MySQL
SELECT employee_id, last_name, job_id, department_id
FROM employees
WHERE employee_id IN (
	SELECT DISTINCT manager_id
    FROM employees
)
```

{% endfolding %}

{% folding green, 方式三：EXISTS %}

```MySQL
SELECT e1.employee_id, e1.last_name, e1.job_id, e1.department_id
FROM employees e1
WHERE EXISTS (
	SELECT *
    FROM employees e2
    WHERE e1.employee_id = e2.manager_id
)
```

{% endfolding %}



查询departments表中，不存在于employees表中的部门的department_id和department_name

{% folding green, 方式一 %}

```MySQL
SELECT d.department_id, d.department_name
FROM departments d LEFT JOIN employees e
WHERE e.department_id IS NULL;
```

{% endfolding %}

{% folding green, 方式二 %}

```MySQL
SELECT d.department_id, d.department_name
FROM departments d 
WHERE NOT EXISTS (
	SELECT *
    FROM employees e
    WHERE e.department_id = d.department_id
)
```

{% endfolding %}



### 相关更新

```MySQL
UPDATE table1 alias1
SET column = (
	SELECT expression
    FROM table2 alias2
    WHERE alias1.column = alias2.column
)
```

### 相关删除

```MySQL
DELETE FROM table1 alias1
WHERE column operator (
	SELECT expression
    FROM table2 alias2
    WHERE alias1.column = alias2.column
)
```





# 数据库和表的创建，修改，删除

## 创建和管理数据库

### 创建数据库

1. 方式一：创建数据库

   ```MySQL
   CREATE DATABASE 数据库名;
   ```

2. 方式二：创建数据库的同时指定字符集类型

   ```MySQL
   CREATE DATABASE 数据库名 CHARACTER SET 字符集;
   ```

3. 方式三：判断数据库是否已经存在，不存在则进行创建数据库

   ```MySQL
   CREATE DATABASE IF NOT EXISTS 数据库名;
   ```

### 管理数据库

1. 查看当前链接中的数据库有哪些

   ```MySQL
   SHOW DATABASES
   ```

2. 切换数据库

   ```MySQL
   USE mytest2
   ```

3. 查看当前数据库中保存的数据表

   ```MySQL
   SHOW TABLES; 
   ```

4. 产看当前使用的数据库

   ```MySQL
   SELECT DATABASE()
   ```

5. 查看指定数据库下保存的数据表

   ```MySQL
   SHOW TABLES FROM 表名;
   ```

### 修改数据库

1. 修改数据库字符集

   ```MySQL
   SHOW CREAT DATABASE mytest2;
   ALTER DATABASE mytest2 CHARACTER SET 'utf-8';
   ```

### 删除数据库

1. 方式一

   ```MySQL
   DROP DATABASE mytest1;
   ```

2. 方式二

   ```MySQL
   DROP DATABASE IF EXISTS mytest1;
   ```



## 创建和管理表

### 数据类型

|       类型       |                             标签                             |
| :--------------: | :----------------------------------------------------------: |
|     整数类型     |     TINYINT、SMALLINT、MEDIUMINT、INT(或INTEGER)、BIGINT     |
|    浮点数类型    |                        FLOAT、DOUBLE                         |
|    定点数类型    |                           DECIMAL                            |
|      位类型      |                             BIT                              |
|  日期和时间类型  |            YEAR、TIME、DATE、DATETIME、TIMESTAMP             |
|  文本字符串类型  |     CHAR、VARCHAR、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT      |
|     枚举类型     |                             ENUM                             |
|     集合类型     |                             SET                              |
| 二进制字符串类型 |   BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB    |
|     JSON类型     |                      JSON对象、JSON数组                      |
|   空间数据类型   | 单值：GEOMETRY、POINT、LINESTRING、POLYGON；<br /> 集合：MULTIPOINT、MULTILINESTRING、MULTIPOLYGON、 GEOMETRYCOLLECTION |

### 数据类型介绍

|   数据类型    |                             描述                             |
| :-----------: | :----------------------------------------------------------: |
|      INT      |       从-2^31  到 2^31-1的整型数据。存储大小为 4个字节       |
|  CHAR(size)   |      定长字符数据。若未指定，默认为1个字符，最大长度255      |
| VARCHAR(size) |     可变长字符数据，根据字符串实际长度保存，必须指定长度     |
|  FLOAT(M,D)   | 单精度，占用4个字节，M=整数位+小数位，D=小数位。 D<=M<=255,0<=D<=30， 默认M+D<=6 |
|  DOUBLE(M,D)  |     双精度，占用8个字节，D<=M<=255,0<=D<=30，默认M+D<=15     |
| DECIMAL(M,D)  | 高精度小数，占用M+2个字节，D<=M<=65，0<=D<=30，最大取值范围与DOUBLE 相同 |
|     DATE      |                 日期型数据，格式'YYYY-MM-DD'                 |
|     BLOB      |              二进制形式的长文本数据，最大可达4G              |
|     TEXT      |                    长文本数据，最大可达4G                    |



### 表的创建

1. 方式一

   ```MySQL
   CREAT TABLE IF NOT EXISTS myempl(
   	id INT,
       emp_name VARCHAR(15),
       hire_date DATE
   );
   ```

2. 方式二：基于现有的表进行创建

   ```MySQL
   # ONE
   CREATE TABLE myemp2
   AS
   SELECT employee_id, last_name, salary
   FROM employees;
   
   #TWO
   CREATE TABLE myemp2
   AS
   SELECT employee_id, last_name, salary
   FROM employees e JOIN department d
   ON e.department_id = d.department_id
   ```
   

练习：创建一个表employees_copy,实现对表employees表的复制，{% span red, 包括 %}表数据

```MySQL
CREATE TABLE employee_copy
AS
SELECT *
FROM employees;
```

练习：创建一个表employees_copy,实现对表employees表的复制，{% span red, 不包括 %}包括表数据

```MySQL
CREATE TABLE employee_copy
AS
SELECT *
FROM employees
WHERE 1=2;
```



### 修改表

1. 添加一个字段

   ```MySQL
   ALTER TABLE myemp1
   # 添加一个长度为为10，小数点后面位数为2，名字为salary的浮点型数据
   # 默认添加到表中的最后一个位置
   ADD salary DOUBLE(10,2)
   
   ALTER TABLE myemp1
   # 添加一个长度为为10，小数点后面位数为2，名字为salary的浮点型数据
   ADD salary DOUBLE(10,2) FIRST; # 使用FIRST关键字将我们添加的字段放到第一个
   
   ALTER TABLE myemp1
   # 添加一个长度为为10，小数点后面位数为2，名字为salary的浮点型数据
   ADD salary DOUBLE(10,2) AFTER email; # 使用AFTER关键字将我们添加的字段放到指定字段的后面
   ```

2. 修改一个字段

   ```MySQL
   # 修改一个字段的长度
   ALTER TABLE myemp1
   MODIFY emp_name VARCHAR(25);
   
   # 修改一个字段的默认值
   ALTER TABLE myemp1
   MODIFY emp_name VARCHAR(25) DEFAULT 'aaa';
   ```

3. 重命名一个字段

   ```MySQL
   # 修改名称
   ALTER TABLE myemp1
   CHANGE salary monthly_salary DOUBLE(10,2);
   
   # 在修改名称的同时修改长度
   ALTER TABLE myemp1
   CHANGE salary monthly_salary DOUBLE(13,2);
   ```

4. 删除一个字段

   ```MySQL
   ALTER TABLE myemp1
   DROP COLUMN my_email;
   ```

   

### 重命名表

1. 方式一

   ```MySQL
   RENAME TABLE myemp1
   TO myemp2;
   ```

2. 方式二

   ```MySQL
   ALTER TABLE myemp2
   RENAME TO myemp3;
   ```





### 删除表

```MySQL
DROP TABLE IF EXISTS myemp3;
```





### 清空表

清空表中的数据，但是表结构有所保留

```MySQL
TRUNCATE TABLE employees
```



### COMMIT 和 ROLLBACK

COMMIT 提交数据，一旦执行COMMIT，则数据将会别永久的保留在数据库中，意味着数据不可以回滚

ROLLBACK回滚数据，撤销数据，一旦执行ROLLBACK，则可以实现数据回滚，回滚到最近一次COMMIT之后



### TRUNCATE TABLE 和 DELETE FROM

相同点：都可以实现对表中所有数据的删除，同时保留表结构

不同点:

- TRUNCATE TABLE:一旦执行此操作，表中数据全部清除，同时数据是不可以回滚的
- DELETE FROM：一旦执行此操作，表中数据{% span red, 可以 %}全部清除（不带WHERE），同时数据是可以实现回滚的



### DDL和lDML的说明

DDL的操作一旦执行，就不可回滚。指令 SET autocommit = FALSE对DDL操作失效。

DML的操作默认情况，一旦执行，也是不可回滚的。但是，如果在执行DML之前，执行了SET autocommit = FALSE，则执行的DML操作就可以实现回滚。

演示：DELETE FROM

```MySQL
COMMIT; # 先提交一份
SELECT * FROM myemp3;  # 查看一下数据
SET autocommit = FALSE; # 将自动提交关了
DELETE FROM myemp3;  # 删除表中数据
SELECT * FROM myemp3;  # 查看一下数据
ROLLBACK; # 回滚数据
```

演示 TRUNCATE TABLE

```MySQL
COMMIT; # 先提交一份
SELECT * FROM myemp3;  # 查看一下数据
SET autocommit = FALSE; # 将自动提交关了
TRUNCATE TABLE myemp3;  # 删除表中数据
SELECT * FROM myemp3;  # 查看一下数据
ROLLBACK; # 回滚数据
```



### 内容拓展

#### 拓展1：阿里巴巴《Java开发手册》之MySQL字段命名 

- 【 {% span red, 强制 %} 】表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出 现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。 

  - 正例：aliyun_admin，rdc_config，level3_name 
  - 反例：AliyunAdmin，rdcConfig，level_3_name 

- 【 {% span red, 强制 %} 】禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。 

- 【{% span red,   强制 %} 】表必备三字段：id, gmt_create, gmt_modified。 

  - 说明：其中 id 必为主键，类型为BIGINT UNSIGNED、单表时自增、步长为 1。gmt_create, gmt_modified 的类型均为 DATETIME 类型，前者现在时表示主动式创建，后者过去分词表示被 动式更新 

- 【 {% span green, 推荐 %} 】表的命名最好是遵循 “业务名称_表的作用”。

  -  正例：alipay_task 、 force_project、 trade_config 

- 【 {% span red, 推荐 %} 】库名与应用名称尽量一致。 

- 【{% span yellow, 参考 %}】合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速 度。 

  - 正例：无符号值可以避免误存负数，且扩大了表示范围。 

  |   对象   | 年龄区间  |       类型        | 字节 |        表示范围        |
  | :------: | :-------: | :---------------: | :--: | :--------------------: |
  |    人    | 150岁之内 | tinyint unsigned  |  1   |    无符号值：0-255     |
  |    龟    |  数百岁   | smallint unsigned |  2   |   无符号值：0-65535    |
  | 恐龙化石 | 数千万年  |   int unsigned    |  4   |    无符号值：0-43亿    |
  |   太阳   | 约50亿年  |  bigint unsigned  |  8   | 无符号值：0-10的19次方 |

  

#### 拓展2：如何理解清空表、删除表等操作需谨慎？！ 

- {% span red, 表删除 %}操作将把表的定义和表中的数据一起删除，并且MySQL在执行删除操作时，不会有任何的确认信 息提示，因此执行删除操时应当慎重。在删除表前，最好对表中的数据进行{% span red,备份 %} ，这样当操作失误时可 以对数据进行恢复，以免造成无法挽回的后果。 

- 同样的，在使用{% span red, ALTERTABLE %} 进行表的基本修改操作时，在执行操作过程之前，也应该确保对数据进 行完整的{% span red, 备份 %} ，因为数据库的改变是{% span red, 无法撤销 %}的，如果添加了一个不需要的字段，可以将其删除；相 同的，如果删除了一个需要的列，该列下面的所有数据都将会丢失。 

#### 拓展3：MySQL8新特性—DDL的原子化 

在MySQL 8.0版本中，InnoDB表的DDL支持事务完整性，即 {% span red, DDL操作要么成功要么回滚 %}。DDL操作回滚日志 写入到data dictionary数据字典表mysql.innodb_ddl_log（该表是隐藏的表，通过show tables无法看到） 中，用于回滚操作。通过设置参数，可将DDL操作日志打印输出到MySQL错误日志中。 

分别在MySQL 5.7版本和MySQL 8.0版本中创建数据库和数据表，结果如下：

```MySQL
CREATE DATABASE mytest;
USE mytest;
CREATE TABLE book1(
book_id INT ,
book_name VARCHAR(255)
);
SHOW TABLES;
```

1. 在MySQL 5.7版本中，测试步骤如下： 删除数据表book1和数据表book2，结果如下：

   ```MySQL
   mysql> DROP TABLE book1,book2;
   ERROR 1051 (42S02): Unknown table 'mytest.book2'
   ```

   再次查询数据库中的数据表名称，结果如下： 

   ```MySQL
   mysql> SHOW TABLES;
   Empty set (0.00 sec)
   ```

   

   从结果可以看出，虽然删除操作时报错了，但是仍然删除了数据表book1。

2. 在MySQL 8.0版本中，测试步骤如下： 删除数据表book1和数据表book2，

   结果如下： 

   ```MySQL
   mysql> DROP TABLE book1,book2;
   ERROR 1051 (42S02): Unknown table 'mytest.book2'
   ```

   再次查询数据库中的数据表名称，结果如下： 

   ```MySQL
   mysql> show tables;
   +------------------+
   | Tables_in_mytest |
   +------------------+
   | book1 |
   +------------------+
   1 row in set (0.00 sec)
   ```

   从结果可以看出，数据表book1并没有被删除。 

   



# 数据处理之增删改

## 添加数据

1. 方式一

   {% folding green, 方式一：一条条添加数据 %}

   ```MySQL
   USE atguigudb;
   CREATE TABLE IF NOT EXISTS emp1(
   	id INT,
       `name` VARCHAR(15),
       hire_date DATE,
       salary DOUBLE(10,2)
   )
   
   #①没有指明添加的字段
   # 正确的
   INSERT INTO emp1
   VALUES(1,'TOM','2000-12-21',3400); # 注意一定要以声明字段的先后顺序添加
   # 错误的
   INSERT INTO emp1
   VALUES(2,3400,'2000-12-21','TOM');
   
   # ②指明声明字段(推荐)
   INSERT INTO emp1(id, hire_date, salary, `name`)
   VALUES(1,'2000-12-21',3400,'TOM');
   
   # 如果其中的字段没有声明为NOT null的话，如果我们不填入的话则默认NULL
   INSERT INTO emp1(id, hire_date, salary, `name`)
   VALUES(1,3400,'TOM');
   
   # ③同时添加多条记录
   INSERT INTO emp1(id, salary, `name`) VALUES
   (1,3400,'TOM'),
   (2,3500,'jerry');
   
   ```

   

   {% endfolding %}

2. 方式二

   {% folding green, 方式二：将查询结果加入表中 %}

   ```MySQL
   INSERT INTO emp1(id, `name`,salary, hire_date)
   SELECT employee_id, last_name, salary, hire_date
   FROM employees
   WHERE department_id IN (70,60);
   ```

   

   {% endfolding %}

   

## 更新数据

UPDATE ... SET ... WHERE ...

可以实现批量修改，{% span red , WHERE很重要 %},如果不使用WHERE限定修改范围的话，则会将表中数据全部修改

```MySQL
# 将5号数据的其中一个部分修改
UPDATE emp1
SET hire_date = CURDATE()
WHERE id = 5;

# 将5号数据中其中多个部分进行修改
UPDATE emp1
SET hire_date = CURDATE(), salary=6000
WHERE id = 5;
```

题目：将表中姓名包含字母a的提薪20%

```MySQL
UPDATE emp1
SET salary = salary*1.2
WHERE `name` LIKE '%a%';
```



## 删除数据

DELETE FROM .... WHERE ...

```MySQL
DELETE FROM emp1
WHERE id = 1;
```



{% note red 'fas fa-fan' flat%}

小结：

DML操作默认情况下，执行完之后都会自动提交数据。如果希望执行完之后不自动提交数据，则需要使用SET autocommit = FALSE ，

{% endnote %}



## MySQL8新特性：计算列

什么叫计算列呢？简单来说就是某一列的值是通过别的列计算得来的。例如，a列值为1、b列值为2，c列 不需要手动插入，定义a+b的结果为c的值，那么c就是计算列，是通过别的列计算得来的。

 在MySQL 8.0中，CREATE TABLE 和 ALTER TABLE 中都支持增加计算列。下面以CREATE TABLE为例进行讲 解。

 举例：定义数据表tb1，然后定义字段id、字段a、字段b和字段c，其中字段c为计算列，用于计算a+b的 值。 首先创建测试表tb1，语句如下：

```MySQL
CREATE TABLE tb1(
id INT,
a INT,
b INT,
c INT GENERATED ALWAYS AS (a + b) VIRTUAL # C就是计算列，C会根据A和B的值自动的进行修改
);
```



## 综合案例

1. 问题

   {% folding green, 问题  %}

   ```MySQL
   # 1、创建数据库test01_library
   # 2、创建表 books，表结构如下：
   #		字段名 		字段说明 	数据类型
   #		id 			   书编号 		INT
   #		name 		   书名 		VARCHAR(50)
   #		authors 	   作者		VARCHAR(100)
   #		price 		   价格       FLOAT
   #		pubdate       出版日期     YEAR
   #		note           说明     VARCHAR(100)
   #		num            库存        INT
   # 3、向books表中插入记录
   # 	1）不指定字段名称，插入第一条记录
   # 	2）指定所有字段名称，插入第二记录
   # 	3）同时插入多条记录（剩下的所有记录）
   #        1 Tal of AAA Dickes 23 1995 novel 11
   #        2 EmmaT Jane lura 35 1993 joke 22
   #        3 Story of Jane Jane Tim 40 2001 novel 0
   #        4 Lovey Day George Byron 20 2005 novel 30
   #        5 Old land Honore Blade 30 2010 law 0
   #        6 The Battle Upton Sara 30 1999 medicine 40
   #        7 Rose Hood Richard haggard 28 2008 cartoon 28
   # 4、将小说类型(novel)的书的价格都增加5。
   # 5、将名称为EmmaT的书的价格改为40，并将说明改为drama。
   # 6、删除库存为0的记录。
   # 7、统计书名中包含a字母的书
   # 8、统计书名中包含a字母的书的数量和库存总量
   # 9、找出“novel”类型的书，按照价格降序排列
   # 10、查询图书信息，按照库存量降序排列，如果库存量相同的按照note升序排列
   # 11、按照note分类统计书的数量
   # 12、按照note分类统计书的库存量，显示库存量超过30本的
   # 13、查询所有图书，每页显示5本，显示第二页
   # 14、按照note分类统计书的库存量，显示库存量最多的
   # 15、查询书名达到10个字符的书，不包括里面的空格
   # 16、查询书名和类型，其中note值为novel显示小说，law显示法律，medicine显示医药，cartoon显示卡通，joke显示笑话
   # 17、查询书名、库存，其中num值超过30本的，显示滞销，大于0并低于10的，显示畅销，为0的显示需要无货
   # 18、统计每一种note的库存量，并合计总量
   # 19、统计每一种note的数量，并合计总量
   # 20、统计库存量前三名的图书
   # 21、找出最早出版的一本书
   # 22、找出novel中价格最高的一本书
   # 23、找出书名中字数最多的一本书，不含空格
   ```

   

   {% endfolding %}

2. 解答

   ```MySQL
   # 1、创建数据库test01_library
   CREATE DATABASE test01_library;
   USE test01_library;
   DROP TABLE books;
   # 2、创建表 books，表结构如下：
   #		字段名 		字段说明 	数据类型
   #		id 			   书编号 		INT
   #		name 		   书名 		VARCHAR(50)
   #		authors 	   作者		VARCHAR(100)
   #		price 		   价格       FLOAT
   #		pubdate       出版日期     YEAR
   #		note           说明     VARCHAR(100)
   #		num            库存        INT
   CREATE TABLE books(
   	id 			INT,
   	`name` 	VARCHAR(50),
   	`authors` VARCHAR(100),
   	price 	FLOAT,
   	pubdate YEAR,
   	note   VARCHAR(100),
   	num INT
   );
   # 3、向books表中插入记录
   # 	1）不指定字段名称，插入第一条记录
   # 	2）指定所有字段名称，插入第二记录
   # 	3）同时插入多条记录（剩下的所有记录）
   #        1 Tal of AAA Dickes 23 1995 novel 11
   #        2 EmmaT Jane lura 35 1993 joke 22
   #        3 Story of Jane Jane Tim 40 2001 novel 0
   #        4 Lovey Day George Byron 20 2005 novel 30
   #        5 Old land Honore Blade 30 2010 law 0
   #        6 The Battle Upton Sara 30 1999 medicine 40
   #        7 Rose Hood Richard haggard 28 2008 cartoon 28
   
   INSERT INTO books
   VALUES(1,'Tal of AAA', 'Dickes', 23, 1995, 'novel', 11);
   
   INSERT INTO books(id, `name`, `authors`, price,pubdate, note, num)
   VALUES(2,'EmmaT' , 'Jane lura', 35, 1993, 'joke', 22);
   
   INSERT INTO books(id, `name`, `authors`, price,pubdate, note, num) VALUES
   (3, 'Story of Jane', 'Jane Tim', 40, 2001, 'novel', 0),
   (4, 'Lovey Day', 'George Byron', 20, 2005, 'novel', 30),
   (5, 'Old land', 'Honore Blade', 30, 2010, 'law', 0),
   (6, 'The Battle', 'Upton Sara', 30, 1999, 'medicine', 40),
   (7, 'Rose Hood', 'Richard haggard', 28, 2008, 'cartoon', 28);
   
   # 4、将小说类型(novel)的书的价格都增加5。
   UPDATE books 
   SET price = price+5
   WHERE note = 'novel';
   # 5、将名称为EmmaT的书的价格改为40，并将说明改为drama。
   UPDATE books 
   SET price = 40, note='drama'
   WHERE `name` = 'EmmaT';
   # 6、删除库存为0的记录。
   DELETE FROM books 
   WHERE num = 0;
   # 7、统计书名中包含a字母的书
   SELECT * FROM books 
   WHERE `name` LIKE '%a%';
   # 8、统计书名中包含a字母的书的数量和库存总量
   SELECT COUNT(*), sum(num)
   FROM (
   	SELECT * FROM books 
   	WHERE `name` LIKE '%a%'
   ) count_book
   
   # 9、找出“novel”类型的书，按照价格降序排列
   SELECT * FROM books 
   WHERE note='novel'
   ORDER BY price DESC;
   # 10、查询图书信息，按照库存量降序排列，如果库存量相同的按照note升序排列
   SELECT * FROM books 
   ORDER BY num DESC, note;
   # 11、按照note分类统计书的数量
   SELECT note,SUM(num) FROM books 
   GROUP BY note;
   # 12、按照note分类统计书的库存量，显示库存量超过30本的
   SELECT note,SUM(num) FROM books 
   GROUP BY note;
   HAVING SUM(num) > 30;
   # 13、查询所有图书，每页显示5本，显示第二页
   SELECT * FROM books 
   LIMIT 5,5;
   # 14、按照note分类统计书的库存量，显示库存量最多的
   SELECT note, SUM(num) 
   FROM books
   GROUP BY note 
   ORDER BY SUM(num) DESC
   LIMIT 0,1 
   # 15、查询书名达到10个字符的书，不包括里面的空格
   SELECT * FROM books 
   WHERE CHAR_LENGTH(REPLACE(`name`,' ',''))>10
   # 16、查询书名和类型，其中note值为novel显示小说，law显示法律，medicine显示医药，cartoon显示卡通，joke显示笑话
   SELECT `name` '书名', note, CASE note WHEN 'novel' THEN '小说'
   																			WHEN 'law'	 THEN '法律'
   																			WHEN 'medicine' THEN '医药'
   																			WHEN 'cartoon' THEN '卡通'
   																			WHEN 'joke' THEN '笑话' 
   																			END '类型'
   FROM books;
   SELECT * FROM books;	
   					
   # 17、查询书名、库存，其中num值超过30本的，显示滞销，大于0并低于10的，显示畅销，为0的显示需要无货
   SELECT `name` '书名', num, CASE num WHEN num > 30 THEN '滞销'
   																WHEN num>0 AND num<10 THEN '畅销'
   																WHEN num = 0 THEN '无货'
   																ELSE '正常'
   																END '库存'
   FROM books;
   
   
   # 18、统计每一种note的库存量，并合计总量
   SELECT IFNULL(note,'合计总库存量') AS note,SUM(num) '总量'
   FROM books 
   GROUP BY note 
   WITH ROLLUP;
   
   # 19、统计每一种note的数量，并合计总量
   SELECT IFNULL(note, '总量') 'note', COUNT(*) '数量'
   FROM books 
   GROUP BY note
   WITH ROLLUP;
   
   # 20、统计库存量前三名的图书
   SELECT * FROM books 
   ORDER BY num DESC
   LIMIT 0,3
   # 21、找出最早出版的一本书
   SELECT * FROM books 
   ORDER BY pubdate
   LIMIT 0,1
   # 22、找出novel中价格最高的一本书
   SELECT * FROM books 
   WHERE note = 'novel'
   ORDER BY price 
   LIMIT 0,1;
   # 23、找出书名中字数最多的一本书，不含空格
   SELECT * FROM books 
   ORDER BY CHAR_LENGTH(REPLACE(`name`,' ','')) DESC 
   LIMIT 0, 1
   
   ```




# MySQL数据类型

## 数据类型

|       类型       |                             标签                             |
| :--------------: | :----------------------------------------------------------: |
|     整数类型     |     TINYINT、SMALLINT、MEDIUMINT、INT(或INTEGER)、BIGINT     |
|    浮点数类型    |                        FLOAT、DOUBLE                         |
|    定点数类型    |                           DECIMAL                            |
|      位类型      |                             BIT                              |
|  日期和时间类型  |            YEAR、TIME、DATE、DATETIME、TIMESTAMP             |
|  文本字符串类型  |     CHAR、VARCHAR、TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT      |
|     枚举类型     |                             ENUM                             |
|     集合类型     |                             SET                              |
| 二进制字符串类型 |   BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB、LONGBLOB    |
|     JSON类型     |                      JSON对象、JSON数组                      |
|   空间数据类型   | 单值：GEOMETRY、POINT、LINESTRING、POLYGON；<br /> 集合：MULTIPOINT、MULTILINESTRING、MULTIPOLYGON、 GEOMETRYCOLLECTION |

常见数据类型的属性，如下：

|    MySQL关键字     |           含义           |
| :----------------: | :----------------------: |
|        NULL        |    数据列可包含NULL值    |
|      NOT NULL      |  数据列不允许包含NULL值  |
|      DEFAULT       |          默认值          |
|    PRIMARY KEY     |           主键           |
|   AUTO_INCREMENT   | 自动递增，适用于整数类型 |
|      UNSIGNED      |          无符号          |
| CHARACTER SET name |      指定一个字符集      |



数据类型介绍:

|   数据类型    |                             描述                             |
| :-----------: | :----------------------------------------------------------: |
|      INT      |       从-2^31  到 2^31-1的整型数据。存储大小为 4个字节       |
|  CHAR(size)   |      定长字符数据。若未指定，默认为1个字符，最大长度255      |
| VARCHAR(size) |     可变长字符数据，根据字符串实际长度保存，必须指定长度     |
|  FLOAT(M,D)   | 单精度，占用4个字节，M=整数位+小数位，D=小数位。 D<=M<=255,0<=D<=30， 默认M+D<=6 |
|  DOUBLE(M,D)  |     双精度，占用8个字节，D<=M<=255,0<=D<=30，默认M+D<=15     |
| DECIMAL(M,D)  | 高精度小数，占用M+2个字节，D<=M<=65，0<=D<=30，最大取值范围与DOUBLE 相同 |
|     DATE      |                 日期型数据，格式'YYYY-MM-DD'                 |
|     BLOB      |              二进制形式的长文本数据，最大可达4G              |
|     TEXT      |                    长文本数据，最大可达4G                    |

## 字符集设置

创建数据库的时候指明字符集

```MySQL
CREATE DATABASE IF NOT EXISTS dbtest12 CHARACTER SET 'utf8';
```

创建表的时候指定字符集

```MySQL
CREATE TABLE IF NOT EXISTS temp(
id INT
) CHARACTER SET 'utf8';
```

创建表，指明表中字段的时候，可以指定字段的字符集

```MySQL
CREATE TABLE IF NOT EXISTS temp(
	id INT,
    `name` VARCHAR(15) CHARACTER SET 'gbk'
) CHARACTER SET 'utf8';
```



## 整数类型

整数类型一共有 5 种，包括 TINYINT、SMALLINT、MEDIUMINT、INT（INTEGER）和 BIGINT。 它们的区别如下表所示：

|   整数类型   | 字节 |             有符号数取值范围             |    无符号数取值范围    |
| :----------: | :--: | :--------------------------------------: | :--------------------: |
|   TINYINT    |  1   |                 -128~127                 |         0~255          |
|   SMALLINT   |  2   |               -32768~32767               |        0~65535         |
|  MEDIUMINT   |  3   |             -8388608~8388607             |       0~16777215       |
| INT、INTEGER |  4   |          -2147483648~2147483647          |      0~4294967295      |
|    BIGINT    |  8   | -9223372036854775808~9223372036854775807 | 0~18446744073709551615 |

### 可选属性

1. M

   M : 表示显示宽度，M的取值范围是(0, 255)。例如，int(5)：{% span red, 当数据宽度小于5位的时候在数字前面需要用字符填满宽度 %}。该项功能需要{% span red, 配合“ZEROFILL”使用 %}，表示用“0”填满宽度，否则指定显示宽度无效。 

   如果设置了显示宽度，那么插入的数据宽度超过显示宽度限制，会不会截断或插入失败？ 

   答案：不会对插入的数据有任何影响，还是按照类型的实际宽度进行保存，即{% span red, 显示宽度与类型可以存储的值范围无关 %} 。{% span red, 从MySQL 8.0.17开始，整数数据类型不推荐使用显示宽度属性 %}。

2.  UNSIGNED 

   UNSIGNED : 无符号类型（非负），所有的整数类型都有一个可选的属性UNSIGNED（无符号属性），无 符号整数类型的最小取值为0。所以，如果需要在MySQL数据库中保存非负整数值时，可以将整数类型设 置为无符号类型

3. ZEROFILL

   .{% span red, ZEROFILL %} : 0填充,（如果某列是ZEROFILL，那么MySQL会自动为当前列添加UNSIGNED属性），如果指 定了ZEROFILL只是表示不够M位时，用0在左边填充，如果超过M位，只要不超过数据存储范围即可。

   原来，在 int(M) 中，M 的值跟 int(M) 所占多少存储空间并无任何关系。 int(3)、int(4)、int(8) 在磁盘上都 是占用 4 bytes 的存储空间。也就是说，int(M)，必须和UNSIGNED ZEROFILL一起使用才有意义。如果整 数值超过M位，就按照实际位数存储。只是无须再用字符 0 进行填充。

### 适用场景

- {% span red, TINYINT %}：一般用于枚举数据，比如系统设定取值范围很小且固定的场景。 

- {% span red, SMALLINT %}：可以用于较小范围的统计数据，比如统计工厂的固定资产库存数量等。 
- {% span red, MEDIUMINT %}：用于较大整数的计算，比如车站每日的客流量等。 
- {% span red, INT、INTEGER %}：取值范围足够大，一般情况下不用考虑超限问题，用得最多。比如商品编号。 
- {% span red, BIGINT ：只有当你处理特别巨大的整数时才会用到。比如双十一的交易量、大型门户网站点击量、证 券公司衍生产品持仓等。



## 浮点数类型

浮点数和定点数类型的特点是可以 {% span red, 处理小数 %} ，你可以把整数看成小数的一个特例。因此，浮点数和定点 数的使用场景，比整数大多了。 MySQL支持的浮点数类型，分别是 FLOAT、DOUBLE、REAL。

- FLOAT 表示单精度浮点数； 

- DOUBLE 表示双精度浮点数；

- REAL默认就是 DOUBLE。如果你把 SQL 模式设定为启用“ REAL_AS_FLOAT ”，那 么，MySQL 就认为 REAL 是 FLOAT。如果要启用“REAL_AS_FLOAT”，可以通过以下 SQL 语句实现：

  ```MySQL
  SET sql_mode = “REAL_AS_FLOAT”;
  ```

###  数据精度说明

对于浮点类型，在MySQL中单精度值使用 4 个字节，双精度值使用 8 个字节。 

- MySQL允许使用 非标准语法 （其他数据库未必支持，因此如果涉及到数据迁移，则最好不要这么 用）： {% span red, FLOAT(M,D)  %}或 {% span red, DOUBLE(M,D) %} 。这里，{% span red, M称为 精度 %} ，{% span orange, D称为 标度 %} 。(M,D)中 {% span indigo, M=整数位+小数位 %}，{% span green, D=小数位 %}。 D<=M<=255，0<=D<=30。

  例如，定义为FLOAT(5,2)的一个列可以显示为-999.99-999.99。如果超过这个范围会报错。 

- FLOAT和DOUBLE类型在不指定(M,D)时，默认会按照实际的精度（由实际的硬件和操作系统决定） 来显示。 
- 说明：浮点类型，也可以加 {% span red, UNSIGNED %} ，{% span red, 但是不会改变数据范围 %}，例如：FLOAT(3,2) UNSIGNED仍然 只能表示0-9.99的范围。 
- 不管是否显式设置了精度(M,D)，这里MySQL的处理方案如下： 
  - 如果存储时，整数部分超出了范围，MySQL就会报错，不允许存这样的值 
  - 如果存储时，小数点部分若超出范围，就分以下情况： 
    - 若四舍五入后，整数部分没有超出范围，则只警告，但能成功操作并四舍五入删除多余 的小数位后保存。例如在FLOAT(5,2)列内插入999.009，近似结果是999.01。 
    - 若四舍五入后，整数部分超出范围，则MySQL报错，并拒绝处理。如FLOAT(5,2)列内插入 999.995和-999.995都会报错。 
- {% span green, 从MySQL 8.0.17开始，FLOAT(M,D) 和DOUBLE(M,D)用法在官方文档中已经明确不推荐使用 %}，将来可 能被移除。另外，关于浮点型FLOAT和DOUBLE的UNSIGNED也不推荐使用了，将来也可能被移除。

```MySQL
CREATE TABLE test_double1(
f1 FLOAT,
f2 FLOAT(5,2),
f3 DOUBLE,
f4 DOUBLE(5,2)
);
DESC test_double1;
INSERT INTO test_double1
VALUES(123.456,123.456,123.4567,123.45);
#Out of range value for column 'f2' at row 1
INSERT INTO test_double1
VALUES(123.456,1234.456,123.4567,123.45);
SELECT * FROM test_double1;
```

### 精度误差说明

在使用浮点数运算的时候会存在精度的损失，例如：

```MySQL
CREATE TABLE test_double2(
f1 DOUBLE
);
INSERT INTO test_double2
VALUES(0.47),(0.44),(0.19);
```

```MySQL
mysql> SELECT SUM(f1)
-> FROM test_double2;
+--------------------+
| SUM(f1) |
+--------------------+
| 1.0999999999999999 |
+--------------------+
1 row in set (0.00 sec)
```

```MySQL
mysql> SELECT SUM(f1) = 1.1,1.1 = 1.1
-> FROM test_double2;
+---------------+-----------+
| SUM(f1) = 1.1 | 1.1 = 1.1 |
+---------------+-----------+
| 0 | 1 |
+---------------+-----------+
1 row in set (0.00 sec)
```

在编程中，如果用到浮点数，要特别注意误差问题，{% label 因为浮点数是不准确的，所以我们要避免使用“=”来 判断两个数是否相等 red %}。同时，在一些对精确度要求较高的项目中，千万不要使用浮点数，不然会导致结 果错误，甚至是造成不可挽回的损失。那么，

{% span red, MySQL 有没有精准的数据类型呢？当然有，这就是定点数 类型： DECIMAL %} 。

## 定点数类型

MySQL中的定点数类型只有 DECIMAL 一种类型。	

|         数据类型         | 字节数  |        含义        |
| :----------------------: | :-----: | :----------------: |
| DECIMAL(M,D),DEC,NUMERIC | M+2字节 | 有效范围由M和D决定 |

使用 DECIMAL(M,D) 的方式表示高精度小数。其中，M被称为精度，D被称为标度。0<=M<=65， 0<=D<=30，D<M.例如，定义DECIMAL（5,2）的类型，表示该列取值范围是-999.99~999.99。

- DECIMAL(M,D)的最大取值范围与DOUBLE类型一样，但是有效的数据范围是由M和D决定的。 DECIMAL 的存储空间并不是固定的，由精度值M决定，总共占用的存储空间为M+2个字节。也就是 说，在一些对精度要求不高的场景下，比起占用同样字节长度的定点数，浮点数表达的数值范围可 以更大一些。

- 定点数在MySQL内部是以 字符串 的形式进行存储，这就决定了它一定是精准的。 

- 当DECIMAL类型不指定精度和标度时，其默认为DECIMAL(10,0)。当数据的精度超出了定点数类型的 精度范围时，则MySQL同样会进行四舍五入处理。 

- 浮点数 vs 定点数 

  - 浮点数相对于定点数的优点是在长度一定的情况下，浮点类型取值范围大，但是不精准，适用 于需要取值范围大，又可以容忍微小误差的科学计算场景（比如计算化学、分子建模、流体动 力学等） 
  - 定点数类型取值范围相对小，但是精准，没有误差，适合于对精度要求极高的场景 （比如涉 及金额计算的场景）

  ```MySQL
  CREATE TABLE test_decimal1(
  f1 DECIMAL,
  f2 DECIMAL(5,2)
  );
  DESC test_decimal1;
  INSERT INTO test_decimal1(f1,f2)
  VALUES(123.123,123.456);
  #Out of range value for column 'f2' at row 1
  INSERT INTO test_decimal1(f2)
  VALUES(1234.34);
  ```

  ```MySQL
  mysql> SELECT * FROM test_decimal1;
  +------+--------+
  | f1 | f2 |
  +------+--------+
  | 123 | 123.46 |
  +------+--------+
  1 row in set (0.00 sec)
  ```

- 举例 

  我们运行下面的语句，把test_double2表中字段“f1”的数据类型修改为 DECIMAL(5,2)：

  ```MySQL
  ALTER TABLE test_double2
  MODIFY f1 DECIMAL(5,2);
  ```

  然后，我们再一次运行求和语句：

  ```MySQL
  mysql> SELECT SUM(f1)
  -> FROM test_double2;
  +---------+
  | SUM(f1) |
  +---------+
  | 1.10 |
  +---------+
  1 row in set (0.00 sec )
  ```

  ```MySQL
  mysql> SELECT SUM(f1) = 1.1
  -> FROM test_double2;
  +---------------+
  | SUM(f1) = 1.1 |
  +---------------+
  | 1 |
  +---------------+
  1 row in set (0.00 sec)
  ```



## 位类型

BIT类型中存储的是二进制值，类似010110。

| 二进制字符串类型 | 长度 |   长度范围   |      占用空间       |
| :--------------: | :--: | :----------: | :-----------------: |
|      BIT(M)      |  M   | 1 <= M <= 64 | 约为(M + 7)/8个字节 |

BIT类型，如果没有指定(M)，默认是1位。这个1位，表示只能存1位的二进制值。这里(M)是表示二进制的 位数，位数最小值为1，最大值为64。

```MySQL
CREATE TABLE test_bit1(
f1 BIT,
f2 BIT(5),
f3 BIT(64)
);
INSERT INTO test_bit1(f1)
VALUES(1);
#Data too long for column 'f1' at row 1
INSERT INTO test_bit1(f1)
VALUES(2);
INSERT INTO test_bit1(f2)
VALUES(23);
```

注意：在向BIT类型的字段中插入数据时，一定要确保插入的数据在BIT类型支持的范围内。

```MySQL
mysql> SELECT * FROM test_bit1;
+------------+------------+------------+
| f1 | f2 | f3 |
+------------+------------+------------+
| 0x01 | NULL | NULL |
| NULL | 0x17 | NULL |
+------------+------------+------------+
2 rows in set (0.00 sec)


mysql> SELECT BIN(f2),HEX(f2)
-> FROM test_bit1;
+---------+---------+
| BIN(f2) | HEX(f2) |
+---------+---------+
| NULL | NULL |
| 10111 | 17 |
+---------+---------+
2 rows in set (0.00 sec)


mysql> SELECT f2 + 0
-> FROM test_bit1;
+--------+
| f2 + 0 |
+--------+
| NULL |
| 23 |
+--------+
2 rows in set (0.00 sec)
```

可以看到，使用b+0查询数据时，可以直接查询出存储的十进制数据的值。



## 日期和时间类型

日期与时间是重要的信息，在我们的系统中，几乎所有的数据表都用得到。原因是客户需要知道数据的 时间标签，从而进行数据查询、统计和处理。 

MySQL有多种表示日期和时间的数据类型，不同的版本可能有所差异，MySQL8.0版本支持的日期和时间 类型主要有：YEAR类型、TIME类型、DATE类型、DATETIME类型和TIMESTAMP类型。 

- YEAR 类型通常用来表示年 
- DATE 类型通常用来表示年、月、日 
- TIME 类型通常用来表示时、分、秒 
- DATETIME 类型通常用来表示年、月、日、时、分、秒 
- TIMESTAMP 类型通常用来表示带时区的年、月、日、时、分、秒

|   类型    |   名称   | 字 节 |      日期格式       |         最小值          |         最大值         |
| :-------: | :------: | :---: | :-----------------: | :---------------------: | :--------------------: |
|   YEAR    |    年    |   1   |      YYYY或YY       |          1901           |          2155          |
|   TIME    |   时间   |   3   |      HH:MM:SS       |       -838:59:59        |       838:59:59        |
|   DATE    |   日期   |   3   |     YYYY-MM-DD      |       1000-01-01        |       9999-12-03       |
| DATETIME  | 日期时间 |   8   | YYYY-MM-DD HH:MM:SS |   1000-01-01 00:00:00   |  9999-12-31 23:59:59   |
| TIMESTAMP | 日期时间 |   4   | YYYY-MM-DD HH:MM:SS | 1970-01-01 00:00:00 UTC | 2038-01-19 03:14:07UTC |

可以看到，不同数据类型表示的时间内容不同、取值范围不同，而且占用的字节数也不一样，你要根据 实际需要灵活选取。 

为什么时间类型 TIME 的取值范围不是 -23:59:59～23:59:59 呢？原因是 MySQL 设计的 TIME 类型，不光表 示一天之内的时间，而且可以用来表示一个时间间隔，这个时间间隔可以超过 24 小时。

### YEAR类型

YEAR类型用来表示年份，在所有的日期时间类型中所占用的存储空间最小，只需要 1个字节 的存储空间。 

在MySQL中，YEAR有以下几种存储格式： 

- 以4位字符串或数字格式表示YEAR类型，其格式为YYYY，最小值为1901，最大值为2155。 
- 以2位字符串格式表示YEAR类型，最小值为00，最大值为99。 
  - 当取值为01到69时，表示2001到2069； 
  - 当取值为70到99时，表示1970到1999； 
  - 当取值整数的0或00添加的话，那么是0000年； 
  - 当取值是日期/字符串的'0'添加的话，是2000年。 

.{% span red, 从MySQL5.5.27开始，2位格式的YEAR已经不推荐使用 %}。YEAR默认格式就是“YYYY”，没必要写成YEAR(4)， 从MySQL 8.0.19开始，不推荐使用指定显示宽度的YEAR(4)数据类型。

```MySQL
CREATE TABLE test_year(
f1 YEAR,
f2 YEAR(4)
);



mysql> DESC test_year;
+-------+---------+------+-----+---------+-------+
| Field | Type | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| f1 | year(4) | YES | | NULL | |
| f2 | year(4) | YES | | NULL | |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)


mysql> SELECT * FROM test_year;
+------+------+
| f1 | f2 |
+------+------+
| 2020 | 2021 |
+------+------+
1 rows in set (0.00 sec)


INSERT INTO test_year
VALUES('45','71');
INSERT INTO test_year
VALUES(0,'0');
mysql> SELECT * FROM test_year;
+------+------+
| f1 | f2 |
+------+------+
| 2020 | 2021 |
| 2045 | 1971 |
| 0000 | 2000 |
+------+------+
3 rows in set (0.00 sec)
```



### DATE类型

DATE类型表示日期，没有时间部分，格式为 {% span red, YYYY-MM-DD %} ，其中，YYYY表示年份，MM表示月份，DD表示 日期。需要 {% span red, 3个字节 %} 的存储空间。在向DATE类型的字段插入数据时，同样需要满足一定的格式条件。 

- 以 {% span red, YYYY-MM-DD %} 格式或者 {% span red, YYYYMMDD %} 格式表示的字符串日期，其最小取值为1000-01-01，最大取值为 9999-12-03。YYYYMMDD格式会被转化为YYYY-MM-DD格式。 
- 以 {% span red, YY-MM-DD %} 格式或者 {% span red, YYMMDD %} 格式表示的字符串日期，此格式中，年份为两位数值或字符串满足 YEAR类型的格式条件为：当年份取值为00到69时，会被转化为2000到2069；当年份取值为70到99 时，会被转化为1970到1999。 
- 使用 {% span red, CURRENT_DATE() %} 或者 {% span red, NOW() %} 函数，会插入当前系统的日期。 

举例： 

创建数据表，表中只包含一个DATE类型的字段f1。

```MySQL
CREATE TABLE test_date1(
f1 DATE
);
Query OK, 0 rows affected (0.13 sec)


# 插入数据
INSERT INTO test_date1
VALUES ('2020-10-01'), ('20201001'),(20201001);
INSERT INTO test_date1
VALUES ('00-01-01'), ('000101'), ('69-10-01'), ('691001'), ('70-01-01'), ('700101'),
('99-01-01'), ('990101');


INSERT INTO test_date1
VALUES (CURRENT_DATE()), (NOW());
SELECT *
FROM test_date1;
```



### TIME类型

TIME类型用来表示时间，不包含日期部分。在MySQL中，需要 3个字节 的存储空间来存储TIME类型的数 据，可以使用“HH:MM:SS”格式来表示TIME类型，其中，HH表示小时，MM表示分钟，SS表示秒。 

在MySQL中，向TIME类型的字段插入数据时，也可以使用几种不同的格式。

1. 可以使用带有冒号的 字符串，比如' D HH:MM:SS' 、' HH:MM:SS '、' HH:MM '、' D HH:MM '、' D HH '或' SS '格式，都能被正 确地插入TIME类型的字段中。其中D表示天，其最小值为0，最大值为34。如果使用带有D格式的字符串 插入TIME类型的字段时，D会被转化为小时，计算格式为D*24+HH。当使用带有冒号并且不带D的字符串 表示时间时，表示当天的时间，比如12:10表示12:10:00，而不是00:12:10。 
2. 可以使用不带有冒号的 字符串或者数字，格式为' HHMMSS '或者 HHMMSS 。如果插入一个不合法的字符串或者数字，MySQL在存 储数据时，会将其自动转化为00:00:00进行存储。比如1210，MySQL会将最右边的两位解析成秒，表示 00:12:10，而不是12:10:00。 
3. 使用 {% span red, CURRENT_TIME() %} 或者 {% span red, NOW() %} ，会插入当前系统的时间。 

举例： 创建数据表，表中包含一个TIME类型的字段f1。

```MySQL
CREATE TABLE test_time1(
f1 TIME
);
Query OK, 0 rows affected (0.02 sec)



INSERT INTO test_time1
VALUES('2 12:30:29'), ('12:35:29'), ('12:40'), ('2 12:40'),('1 05'), ('45');


INSERT INTO test_time1
VALUES ('123520'), (124011),(1210);


INSERT INTO test_time1
VALUES (NOW()), (CURRENT_TIME());
SELECT * FROM test_time1;
```



### DATETIME类型

DATETIME类型在所有的日期时间类型中占用的存储空间最大，总共需要 {% label 8 red %} 个字节的存储空间。在格式上 为DATE类型和TIME类型的组合，可以表示为 YYYY-MM-DD HH:MM:SS ，其中YYYY表示年份，MM表示月 份，DD表示日期，HH表示小时，MM表示分钟，SS表示秒。 

在向DATETIME类型的字段插入数据时，同样需要满足一定的格式条件。 

- 以 YYYY-MM-DD HH:MM:SS 格式或者 YYYYMMDDHHMMSS 格式的字符串插入DATETIME类型的字段时， 最小值为1000-01-01 00:00:00，最大值为9999-12-03 23:59:59。 
  - 以YYYYMMDDHHMMSS格式的数字插入DATETIME类型的字段时，会被转化为YYYY-MM-DD HH:MM:SS格式。
- 使用函数 CURRENT_TIMESTAMP() 和 NOW() ，可以向DATETIME类型的字段插入系统的当前日期和 时间。

举例： 创建数据表，表中包含一个DATETIME类型的字段dt。

```MySQL
CREATE TABLE test_datetime1(
dt DATETIME
);
Query OK, 0 rows affected (0.02 sec)

#插入数据：
INSERT INTO test_datetime1
VALUES ('2021-01-01 06:50:30'), ('20210101065030');


INSERT INTO test_datetime1
VALUES ('99-01-01 00:00:00'), ('990101000000'), ('20-01-01 00:00:00'),
('200101000000');


INSERT INTO test_datetime1
VALUES (20200101000000), (200101000000), (19990101000000), (990101000000);


INSERT INTO test_datetime1
VALUES (CURRENT_TIMESTAMP()), (NOW());
```



### TIMESTAMP类型

TIMESTAMP类型也可以表示日期时间，其显示格式与DATETIME类型相同，都是 YYYY-MM-DD HH:MM:SS ，需要4个字节的存储空间。但是TIMESTAMP存储的时间范围比DATETIME要小很多，只能存储 “1970-01-01 00:00:01 UTC”到“2038-01-19 03:14:07 UTC”之间的时间。其中，UTC表示世界统一时间，也叫 作世界标准时间。 

- {% span red, 存储数据的时候需要对当前时间所在的时区进行转换，查询数据的时候再将时间转换回当前的时区。因此，使用TIMESTAMP存储的同一个时间值，在不同的时区查询时会显示不同的时间 %}。 

向TIMESTAMP类型的字段插入数据时，当插入的数据格式满足YY-MM-DD HH:MM:SS和YYMMDDHHMMSS 时，两位数值的年份同样符合YEAR类型的规则条件，只不过表示的时间范围要小很多。 

如果向TIMESTAMP类型的字段插入的时间超出了TIMESTAMP类型的范围，则MySQL会抛出错误信息。 

举例： 创建数据表，表中包含一个TIMESTAMP类型的字段ts。

```MySQL
CREATE TABLE test_timestamp1(
ts TIMESTAMP
);

# 插入数据：
INSERT INTO test_timestamp1
VALUES ('1999-01-01 03:04:50'), ('19990101030405'), ('99-01-01 03:04:05'),
('990101030405');


INSERT INTO test_timestamp1
VALUES ('2020@01@01@00@00@00'), ('20@01@01@00@00@00');


INSERT INTO test_timestamp1
VALUES (CURRENT_TIMESTAMP()), (NOW());


#Incorrect datetime value
INSERT INTO test_timestamp1
VALUES ('2038-01-20 03:14:07');
```

.{% span red, TIMESTAMP和DATETIME的区别 %}： 

- TIMESTAMP存储空间比较小，表示的日期时间范围也比较小 

- 底层存储方式不同，TIMESTAMP底层存储的是毫秒值，距离1970-1-1 0:0:0 0毫秒的毫秒值。 

- 两个日期比较大小或日期计算时，TIMESTAMP更方便、更快。 

- TIMESTAMP和时区有关。TIMESTAMP会根据用户的时区不同，显示不同的结果。而DATETIME则只能 反映出插入时当地的时区，其他时区的人查看数据必然会有误差的。

  ```MySQL
  CREATE TABLE temp_time(
  d1 DATETIME,
  d2 TIMESTAMP
  );
  
  
  INSERT INTO temp_time VALUES('2021-9-2 14:45:52','2021-9-2 14:45:52');
  
  
  INSERT INTO temp_time VALUES(NOW(),NOW());
  
  
  mysql> SELECT * FROM temp_time;
  +---------------------+---------------------+
  | d1 | d2 |
  +---------------------+---------------------+
  | 2021-09-02 14:45:52 | 2021-09-02 14:45:52 |
  | 2021-11-03 17:38:17 | 2021-11-03 17:38:17 |
  +---------------------+---------------------+
  2 rows in set (0.00 sec)
  
  
  #修改当前的时区
  SET time_zone = '+9:00';
  
  
  mysql> SELECT * FROM temp_time;
  +---------------------+---------------------+
  | d1 | d2 |
  +---------------------+---------------------+
  | 2021-09-02 14:45:52 | 2021-09-02 15:45:52 |
  | 2021-11-03 17:38:17 | 2021-11-03 18:38:17 |
  +---------------------+---------------------+
  2 rows in set (0.00 sec)
  ```





### 使用经验

用得最多的日期时间类型，就是 DATETIME 。虽然 MySQL 也支持 YEAR（年）、 TIME（时间）、 DATE（日期），以及 TIMESTAMP 类型，但是在实际项目中，尽量用 DATETIME 类型。因为这个数据类型 包括了完整的日期和时间信息，取值范围也最大，使用起来比较方便。毕竟，如果日期时间信息分散在 好几个字段，很不容易记，而且查询的时候，SQL 语句也会更加复杂。 

此外，一般存注册时间、商品发布时间等，不建议使用DATETIME存储，而是使用 {% span red, 时间戳 %} ，因为 DATETIME虽然直观，但不便于计算。

```MySQL
mysql> SELECT UNIX_TIMESTAMP();
+------------------+
| UNIX_TIMESTAMP() |
+------------------+
| 1635932762 |
+------------------+
1 row in set (0.00 sec)
```



## 文本字符串

在实际的项目中，我们还经常遇到一种数据，就是字符串数据。 

MySQL中，文本字符串总体上分为 {% span red, CHAR %} 、 {% span red, VARCHAR %} 、 {% span red, TINYTEXT %} 、{% span red,  TEXT %} 、 {% span red, MEDIUMTEXT %} 、 {% span red, LONGTEXT %} 、 {% span red, ENUM %} 、 {% span red, SET  %} 等类型。

![image-20221223171741951](https://s2.loli.net/2023/01/07/dHzNiWlg8cIxSpT.png)

### CHAR与VARCHAR类型

CHAR和VARCHAR类型都可以存储比较短的字符串。

| 字符串(文本)类型 |   特点   | 长度 |    长度范围     |    占用的存储空间     |
| :--------------: | :------: | :--: | :-------------: | :-------------------: |
|     CHAR(M)      | 固定长度 |  M   |  0 <= M <= 255  |        M个字节        |
|    VARCHAR(M)    | 可变长度 |  M   | 0 <= M <= 65535 | (实际长度 + 1) 个字节 |

{% tip %}CHAR类型：{% endtip %}

- CHAR(M) 类型一般需要预先定义字符串长度。如果不指定(M)，则表示长度默认是1个字符。 
- 如果保存时，数据的实际长度比CHAR类型声明的长度小，则会在 {% span red, 右侧填充 %} 空格以达到指定的长 度。当MySQL检索CHAR类型的数据时，CHAR类型的字段会去除尾部的空格。 
- 定义CHAR类型字段时，声明的字段长度即为CHAR类型字段所占的存储空间的字节数。

```MySQL
CREATE TABLE test_char1(
c1 CHAR,
c2 CHAR(5)
);
DESC test_char1;

INSERT INTO test_char1
VALUES('a','Tom');

SELECT c1,CONCAT(c2,'***') FROM test_char1;

INSERT INTO test_char1(c2)
VALUES('a ');


SELECT CHAR_LENGTH(c2)
FROM test_char1;
```

{% tip %}VARCHAR类型：{% endtip %}

- VARCHAR(M) 定义时， {% span red, 必须指定 %} 长度M，否则报错。 
- MySQL4.0版本以下，varchar(20)：指的是20字节，如果存放UTF8汉字时，只能存6个（每个汉字3字 节） ；MySQL5.0版本以上，varchar(20)：指的是20字符。 
- 检索VARCHAR类型的字段数据时，会保留数据尾部的空格。VARCHAR类型的字段所占用的存储空间 为字符串实际长度加1个字节。

```MySQL
CREATE TABLE test_varchar1(
NAME VARCHAR #错误
);


#Column length too big for column 'NAME' (max = 21845);
CREATE TABLE test_varchar2(
NAME VARCHAR(65535) #错误
);


CREATE TABLE test_varchar3(
NAME VARCHAR(5)
);

INSERT INTO test_varchar3
VALUES('尚硅谷'),('尚硅谷教育');

#Data too long for column 'NAME' at row 1
INSERT INTO test_varchar3
VALUES('尚硅谷IT教育');
```

{% tip %}哪些情况使用 CHAR 或 VARCHAR 更好 {% endtip %}

|    类型    |   特点   |    空间上    | 时间上 |       适用场景       |
| :--------: | :------: | :----------: | :----: | :------------------: |
|  CHAR(M)   | 固定长度 | 浪费存储空间 | 效率高 | 存储不大，速度要求高 |
| VARCHAR(M) | 可变长度 | 节省存储空间 | 效率低 |     非CHAR的情况     |

情况1：存储很短的信息。比如门牌号码101，201……这样很短的信息应该用char，因为varchar还要占个 byte用于存储信息长度，本来打算节约存储的，结果得不偿失。

情况2：固定长度的。比如使用uuid作为主键，那用char应该更合适。因为他固定长度，varchar动态根据 长度的特性就消失了，而且还要占个长度信息。 

情况3：十分频繁改变的column。因为varchar每次存储都要有额外的计算，得到长度等工作，如果一个 非常频繁改变的，那就要有很多的精力用于计算，而这些对于char来说是不需要的。

情况4：具体存储引擎中的情况： 

- {% span red, MyISAM %} 数据存储引擎和数据列：MyISAM数据表，最好使用固定长度(CHAR)的数据列代替可变长 度(VARCHAR)的数据列。这样使得整个表静态化，从而使 数据检索更快 ，用空间换时间。 
- {% span red, MEMORY %} 存储引擎和数据列：MEMORY数据表目前都使用固定长度的数据行存储，因此无论使用 CHAR或VARCHAR列都没有关系，两者都是作为CHAR类型处理的。 
- {% span red, InnoDB %} 存储引擎，建议使用VARCHAR类型。因为对于InnoDB数据表，内部的行存储格式并没有区 分固定长度和可变长度列（所有数据行都使用指向数据列值的头指针），而且{% span red, 主要影响性能的因素 是数据行使用的存储总量 %}，由于char平均占用的空间多于varchar，所以除了简短并且固定长度的， 其他考虑varchar。这样节省空间，对磁盘I/O和数据存储总量比较好。

### TEXT类型

在MySQL中，TEXT用来保存文本类型的字符串，总共包含4种类型，分别为TINYTEXT、TEXT、 MEDIUMTEXT 和 LONGTEXT 类型。 

在向TEXT类型的字段保存和查询数据时，系统自动按照实际长度存储，不需要预先定义长度。这一点和 VARCHAR类型相同。 

每种TEXT类型保存的数据长度和所占用的存储空间不同，如下：

| 文本字符串类型 |        特点        | 长 度 |            长度范围             | 占用的存储空间 |
| :------------: | :----------------: | :---: | :-----------------------------: | :------------: |
|    TINYTEXT    |  小文本、可变长度  |   L   |          0 <= L <= 255          |  L + 2 个字节  |
|      TEXT      |   文本、可变长度   |   L   |         0 <= L <= 65535         |  L + 2 个字节  |
|   MEDIUMTEXT   | 中等文本、可变长度 |   L   |       0 <= L <= 16777215        |  L + 2 个字节  |
|    LONGTEXT    |  大文本、可变长度  |   L   | 0 <= L<= 4294967295(相当于 4GB) |  L + 2 个字节  |

.{% span red, 由于实际存储的长度不确定，MySQL不允许TEXT类型的字段做主键 %}。遇到这种情况，你只能采用 CHAR(M)，或者 VARCHAR(M)。 

举例： 创建数据表：

```MySQL
CREATE TABLE test_text(
tx TEXT
);

INSERT INTO test_text
VALUES('atguigu ');

SELECT CHAR_LENGTH(tx)
FROM test_text; #10
```

说明在保存和查询数据时，并没有删除TEXT类型的数据尾部的空格。 

开发中经验：

TEXT文本类型，可以存比较大的文本段，搜索速度稍慢，因此如果不是特别大的内容，建议使用CHAR， VARCHAR来代替。还有TEXT类型不用加默认值，加了也没用。而且text和blob类型的数据删除后容易导致 “空洞”，使得文件碎片比较多，所以频繁使用的表不建议包含TEXT类型字段，建议单独分出去，单独用 一个表。



## ENUM类型

ENUM类型也叫作枚举类型，ENUM类型的取值范围需要在定义字段时进行指定。设置字段值时，ENUM 类型只允许从成员中选取单个值，不能一次选取多个值。 

其所需要的存储空间由定义ENUM类型时指定的成员个数决定。

| 文本字符串类型 | 长度 |    长度范围     | 占用的存储空间 |
| :------------: | :--: | :-------------: | :------------: |
|      ENUM      |  L   | 1 <= L <= 65535 |   1或2个字节   |

- 当ENUM类型包含1～255个成员时，需要1个字节的存储空间； 
- 当ENUM类型包含256～65535个成员时，需要2个字节的存储空间。 
- ENUM类型的成员个数的上限为65535个。

举例： 创建表如下：

```MySQL
CREATE TABLE test_enum(
season ENUM('春','夏','秋','冬','unknow')
);


# 添加数据：
INSERT INTO test_enum
VALUES('春'),('秋');

# 忽略大小写
INSERT INTO test_enum
VALUES('UNKNOW');


# 允许按照角标的方式获取指定索引位置的枚举值
INSERT INTO test_enum
VALUES('1'),(3);


# Data truncated for column 'season' at row 1
INSERT INTO test_enum
VALUES('ab');


# 当ENUM类型的字段没有声明为NOT NULL时，插入NULL也是有效的
INSERT INTO test_enum
VALUES(NULL);
```



## SET类型

当SET类型包含的成员个数不同时，其所占用的存储空间也是不同的，具体如下：

| 成员个数范围（L表示实际成员个数） | 占用的存储空间 |
| :-------------------------------: | :------------: |
|            1 <= L <= 8            |    1个字节     |
|           9 <= L <= 16            |    2个字节     |
|           9 <= L <= 16            |    3个字节     |
|           25 <= L <= 32           |    4个字节     |
|           33 <= L <= 64           |    8个字节     |

SET类型在存储数据时成员个数越多，其占用的存储空间越大。注意：SET类型在选取成员时，可以一次 选择多个成员，这一点与ENUM类型不同。 

举例： 创建表：

```MySQL
CREATE TABLE test_set(
s SET ('A', 'B', 'C')
);


# 向表中插入数据
INSERT INTO test_set (s) VALUES ('A'), ('A,B');


#插入重复的SET类型成员时，MySQL会自动删除重复的成员
INSERT INTO test_set (s) VALUES ('A,B,C,A');


#向SET类型的字段插入SET成员中不存在的值时，MySQL会抛出错误。
INSERT INTO test_set (s) VALUES ('A,B,C,D');

SELECT *
FROM test_set;
```



举例

```MySQL
CREATE TABLE temp_mul(
gender ENUM('男','女'),
hobby SET('吃饭','睡觉','打豆豆','写代码')
);

INSERT INTO temp_mul VALUES('男','睡觉,打豆豆'); #成功


# Data truncated for column 'gender' at row 1
INSERT INTO temp_mul VALUES('男,女','睡觉,写代码'); #失败

# Data truncated for column 'gender' at row 1
INSERT INTO temp_mul VALUES('妖','睡觉,写代码');#失败


INSERT INTO temp_mul VALUES('男','睡觉,写代码,吃饭'); #成功
```



## 二进制字符串类型 

MySQL中的二进制字符串类型主要存储一些二进制数据，比如可以存储图片、音频和视频等二进制数 据。 

MySQL中支持的二进制字符串类型主要包括BINARY、VARBINARY、TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB类型。

### BINARY与VARBINARY类型

BINARY和VARBINARY类似于CHAR和VARCHAR，只是它们存储的是二进制字符串。 

BINARY (M)为固定长度的二进制字符串，M表示最多能存储的字节数，取值范围是0~255个字符。如果未 指定(M)，表示只能存储 {% span red, 1个字节 %} 。例如BINARY (8)，表示最多能存储8个字节，如果字段值不足(M)个字 节，将在右边填充'\0'以补齐指定长度。 

VARBINARY (M)为可变长度的二进制字符串，M表示最多能存储的字节数，总字节数不能超过行的字节长 度限制65535，另外还要考虑额外字节开销，VARBINARY类型的数据除了存储数据本身外，还需要1或2个 字节来存储数据的字节数。VARBINARY类型 {% span red, 必须指定(M) %} ，否则报错。

| 二进制字符串类型 |   特点   |       值的长度       | 占用空间  |
| :--------------: | :------: | :------------------: | :-------: |
|    BINARY(M)     | 固定长度 | M （0 <= M <= 255）  |  M个字节  |
|   VARBINARY(M)   | 可变长度 | M（0 <= M <= 65535） | M+1个字节 |

举例： 创建表:

```MySQL
CREATE TABLE test_binary1(
f1 BINARY,
f2 BINARY(3),
# f3 VARBINARY,
f4 VARBINARY(10)
);

# 添加数据：
INSERT INTO test_binary1(f1,f2)
VALUES('a','a');

INSERT INTO test_binary1(f1,f2)
VALUES('尚','尚');#失败

INSERT INTO test_binary1(f2,f4)
VALUES('ab','ab');

mysql> SELECT LENGTH(f2),LENGTH(f4)
-> FROM test_binary1;
+------------+------------+
| LENGTH(f2) | LENGTH(f4) |
+------------+------------+
| 3 | NULL |
| 3 | 2 |
+------------+------------+
2 rows in set (0.00 sec)
```

### BLOB类型

BLOB是一个 {% span red, 二进制大对象 %} ，可以容纳可变数量的数据。 

MySQL中的BLOB类型包括TINYBLOB、BLOB、MEDIUMBLOB和LONGBLOB 4种类型，它们可容纳值的最大 长度不同。可以存储一个二进制的大对象，比如 {% span red, 图片 %} 、 {% span red, 音频 %} 和 {% span red, 视频 %} 等。 

需要注意的是，在实际工作中，往往不会在MySQL数据库中使用BLOB类型存储大对象数据，通常会将图 片、音频和视频文件存储到 {% span red, 服务器的磁盘上 %} ，并将图片、音频和视频的访问路径存储到MySQL中。

| 二进制字符串类型 | 值的长度 |             长度范围              |   占用空间   |
| :--------------: | :------: | :-------------------------------: | :----------: |
|     TINYBLOB     |    L     |           0 <= L <= 255           | L + 1 个字节 |
|       BLOB       |    L     |   0 <= L <= 65535（相当于64KB）   | L + 2 个字节 |
|    MEDIUMBLOB    |    L     | 0 <= L <= 16777215 （相当于16MB） | L + 3 个字节 |
|     LONGBLOB     |    L     | 0 <= L <= 4294967295（相当于4GB） | L + 4 个字节 |

举例：

```MySQL
CREATE TABLE test_blob1(
id INT,
img MEDIUMBLOB
);
```

TEXT和BLOB的使用注意事项： 

在使用text和blob字段类型时要注意以下几点，以便更好的发挥数据库的性能。 

1. BLOB和TEXT值也会引起自己的一些问题，特别是执行了大量的删除或更新操作的时候。删除这种值 会在数据表中留下很大的" 空洞 "，以后填入这些"空洞"的记录可能长度不同。为了提高性能，建议定期 使用 OPTIMIZE TABLE 功能对这类表进行 碎片整理 。 
2. 如果需要对大文本字段进行模糊查询，MySQL 提供了 前缀索引 。但是仍然要在不必要的时候避免检 索大型的BLOB或TEXT值。例如，SELECT * 查询就不是很好的想法，除非你能够确定作为约束条件的 WHERE子句只会找到所需要的数据行。否则，你可能毫无目的地在网络上传输大量的值。 
3. 把BLOB或TEXT列 分离到单独的表 中。在某些环境中，如果把这些数据列移动到第二张数据表中，可 以让你把原数据表中的数据列转换为固定长度的数据行格式，那么它就是有意义的。这会 减少主表中的 碎片 ，使你得到固定长度数据行的性能优势。它还使你在主数据表上运行 SELECT * 查询的时候不会通过 网络传输大量的BLOB或TEXT值。



## JSON 类型

 JSON（JavaScript Object Notation）是一种轻量级的 数据交换格式 。简洁和清晰的层次结构使得 JSON 成 为理想的数据交换语言。它易于人阅读和编写，同时也易于机器解析和生成，并有效地提升网络传输效 率。{% span red, JSON 可以将 JavaScript 对象中表示的一组数据转换为字符串，然后就可以在网络或者程序之间轻 松地传递这个字符串，并在需要的时候将它还原为各编程语言所支持的数据格式 %}。 

在MySQL 5.7中，就已经支持JSON数据类型。在MySQL 8.x版本中，JSON类型提供了可以进行自动验证的 JSON文档和优化的存储结构，使得在MySQL中存储和读取JSON类型的数据更加方便和高效。 创建数据 表，表中包含一个JSON类型的字段 js 。

```MySQL
CREATE TABLE test_json(
js json
);
```

向表中插入JSON数据。

```MySQL
INSERT INTO test_json (js)
VALUES ('{"name":"songhk", "age":18, "address":{"province":"beijing",
"city":"beijing"}}')
```

查询t19表中的数据。

```MySQL
mysql> SELECT *
-> FROM test_json;
```

![image-20221223174538061](https://s2.loli.net/2023/01/07/J5O6E4W21S9rDVT.png)

当需要检索JSON类型的字段中数据的某个具体值时，可以使用“->”和“->>”符号。

```MySQL
mysql> SELECT js -> '$.name' AS NAME,js -> '$.age' AS age ,js -> '$.address.province'
AS province, js -> '$.address.city' AS city
-> FROM test_json;
+----------+------+-----------+-----------+
| NAME | age | province | city |
+----------+------+-----------+-----------+
| "songhk" | 18 | "beijing" | "beijing" |
+----------+------+-----------+-----------+
1 row in set (0.00 sec)
```

通过“->”和“->>”符号，从JSON字段中正确查询出了指定的JSON数据的值。

## 使用建议

在定义数据类型时，如果确定是{% span red, 整数 %} ，就用{% span red, INT %} ； 如果是{% span red, 小数 %} ，一定用定点数类型 {% span red, DECIMAL(M,D) %} ； 如果是{% span red, 日期与时间 %}，就用{% span red, DATETIME %} 。 

这样做的好处是，首先确保你的系统不会因为数据类型定义出错。不过，凡事都是有两面的，可靠性 好，并不意味着高效。比如，TEXT 虽然使用方便，但是效率不如 CHAR(M) 和 VARCHAR(M)。



{% tip %}阿里巴巴《Java开发手册》之MySQL数据库 {% endtip %}

- 任何字段如果为非负数，必须是 UNSIGNED 
- 【 强制 】小数类型为 DECIMAL，禁止使用 FLOAT 和 DOUBLE。 
  - 说明：在存储的时候，FLOAT 和 DOUBLE 都存在精度损失的问题，很可能在比较值的时候，得 到不正确的结果。如果存储的数据范围超过 DECIMAL 的范围，建议将数据拆成整数和小数并 分开存储。 
- 【 强制 】如果存储的字符串长度几乎相等，使用 CHAR 定长字符串类型。 
- 【 强制 】VARCHAR 是可变长字符串，不预先分配存储空间，长度不要超过 5000。如果存储长度大 于此值，定义字段类型为 TEXT，独立出来一张表，用主键来对应，避免影响其它字段索引效率。





# 约束

如何查看表中的约束

```MySQL
SELECT * FROM information_schema.table_constraints
WHERE table_name = 'employees';
```



## 非空约束

### 作用

限定某个字段不能为空,是{% span red, 列约束 %}

### 关键字

NOT NULL

### 特点

- 默认，所有的类型的值都可以是NULL，包括INT、FLOAT等数据类型 
- 非空约束只能出现在表对象的列上，只能某个列单独限定非空，不能组合非空 
- 一个表可以有很多列都分别限定了非空 
- 空字符串''不等于NULL，0也不等于NULL

### 添加方法

1. 在创建表的时候添加约束 

   ```MySQL
   CREATE TABLE test1(
   	id INT NOT NULL,
   	last_name VARCHAR(15) NOT NULL,
       email VARCHAR(25),
       salary DECIMAL(10,2)
   )
   ```

2. 在ALTER TABLE时添加约束

   ```MySQL
   ALTER TABLE test1
   MODIFY email VARCHAR(25) NOT NULL;
   ```

3. 在ALTER TABLE时删除约束

   ```MySQL
   ALTER TABLE test1
   MODIFY email VARCHAR(25)  NULL;
   ```



## 唯一性约束

### 作用

限制某个列或字段值不能重复

### 关键字

UNIQUE

### 特点

- 同一个表可以有多个唯一约束。 
- 唯一约束可以是某一个列的值唯一，也可以多个列组合的值唯一。 
- 唯一性约束允许列值为空。 
- 在创建唯一约束的时候，如果不给唯一约束命名，就默认和列名相同。 
- {% span red, MySQL会给唯一约束的列上默认创建一个唯一索引 %}。

### 添加方法

1. 在创建表的时候添加约束 

   ```MySQL
   CREATE TABLE test1(
   	id INT UNIQUE, # 列级约束
   	last_name VARCHAR(15),
       email VARCHAR(25) UNIQUE,
       salary DECIMAL(10,2),
       CONSTRAINT uk_test1_salary UNIQUE(email)
   );
   
   # 复合的唯一性约束
   # 区别是我们在同时声明两个以上的字段的时候，我们声明的字段不能同时相同，至少需要其中一个字段不同才能添加成功
   CREATE TABLE test1(
   	id INT,
   	last_name VARCHAR(15),
       email VARCHAR(25),
       salary DECIMAL(10,2),
       CONSTRAINT uk_test1_id_sal UNIQUE(id,salary)
   );
   ```

2. 在ALTER TABLE时添加约束

   ```MySQL
   # MODIFY方法
   ALTER TABLE test1
   MODIFY email VARCHAR(25) UNIQUE;
   
   # ADD方法
   ALTER TABLE test1
   ADD CONSTRAINT uk_test1_email UNIQUE(email);
   
   ```

### 删除方法

- 添加唯一性约束的列上也会自动创建唯一索引。 
- 删除唯一约束只能通过删除唯一索引的方式删除。 
- 删除时{% span red, 需要指定唯一索引名 %}，唯一索引名就和唯一约束名一样。 
- 如果创建唯一约束时未指定名称，如果是单列，就默认和列名相同；如果是组合列，那么默认和() 中排在第一个的列名相同。也可以自定义唯一性约束名。

```MySQL
ALTER TABLE test1
DROP INDEX 索引名;
```



## PRIMARY KEY 约束

### 作用

用来唯一标识表中的一行记录

### 关键字

primary key

### 特点

- 主键约束相当于唯一约束+非空约束的组合，主键约束列不允许重复，也不允许出现空值
- 一个表{% span red, 最多只能有一个主键约束 %}，建立主键约束可以在列级别创建，也可以在表级别上创建
- 主键约束对应着表中的一列或者多列（复合主键）
- 如果是多列组合的复合主键约束，那么这些列都不允许为空值，并且组合的值不允许重复。
- {% span red, MySQL的主键名总是PRIMARY %}，就算自己命名了主键约束名也没用。
- 当创建主键约束时，系统默认会在所在的列或列组合上建立对应的主键索引（能够根据主键查询 的，就根据主键查询，效率更高）。如果删除主键约束了，主键约束对应的索引就自动删除了。
- 需要注意的一点是，不要修改主键字段的值。因为主键是数据记录的唯一标识，如果修改了主键的 值，就有可能会破坏数据的完整性。

### 添加方法

1. 在创建表的时候添加约束 

   ```MySQL
   CREATE TABLE test1(
   	id INT PRIMARY KEY, # 列级约束
   	last_name VARCHAR(15),
       email VARCHAR(25),
       salary DECIMAL(10,2)
   )
   
   CREATE TABLE test1(
   	id INT,
   	last_name VARCHAR(15),
       email VARCHAR(25),
       salary DECIMAL(10,2),
       # 表级约束,虽然我们自己命名了，但是无用，最后表中显示的名字还是PRIMARY
       CONSTRAINT pk_test1_id PRIMARY KEY(id)
   )
   
   # 组合主键
   CREATE TABLE test1(
   	id INT,
   	last_name VARCHAR(15),
       email VARCHAR(25),
       salary DECIMAL(10,2),
       # 特性和组合UNIQUE一样
       PRIMARY KEY(id, email)
   )
   ```

2. 在ALTER TABLE时添加约束

   ```MySQL
   ALTER TABLE test1
   MODIFY id INT PRIMARY KEY;
   
   ALTER TABLE test1
   ADD PRIMARY KEY(id)
   ```

### 删除方法

```MySQL
ALTER TABLE 表明
DROP PRIMARY KEY;
```



## 自增列 AUTO_INCREMENT

### 作用

实现某个字段值自增

### 关键字

AUTO_INCREMENT

### 特点

1. 一个表{% span red, 最多只能有一个 %}自增长列 
2. 当需要产生唯一标识符或顺序值时，可设置自增长
3. 自增长列约束的列{% span red, 必须是键列 %}（主键列，唯一键列）
4. 自增约束的列的数据类型{% span red, 必须是整数类型 %}.
5. 如果自增列指定了 0 和 null，会在当前最大值的基础上自增；如果自增列手动指定了具体值，直接 赋值为具体值。

### 添加方法

1. 在创建表的时候添加

   ```MySQL
   CREATE TABLE test1(
       # 开发中，一旦主键作用的字段上声明有AUTO INCRENENT，则我们在添加数据时，就不要给主键对应的字段去赋值了。
   	id INT PRIMARY KEY AUTO_INCREMENT, # 列级约束
   	last_name VARCHAR(15),
       email VARCHAR(25),
       salary DECIMAL(10,2)
   )
   ```

2. 在ALTER的时候添加

   ```MySQL
   ALTER TABLE test1
   MODIFY (id) INT AUTO_INCREMENT;
   ```

### MySQL 8.0新特性—自增变量的持久化 

在MySQL 8.0之前，自增主键AUTO_INCREMENT的值如果大于max(primary key)+1，在MySQL重启后，会重 置AUTO_INCREMENT=max(primary key)+1，这种现象在某些情况下会导致业务主键冲突或者其他难以发 现的问题。

8.0之后当我们重启服务器的时候数据不会丢失



## FOREIGN KEY 约束

### 作用

限定某个表的某个字段的引用完整性。

比如：员工表的员工所在部门的选择，必须在部门表能找到对应的部分

### 关键字 

FOREIGN KEY

### 主表和从表/父表和子表

主表（父表）：被引用的表，被参考的表 

从表（子表）：引用别人的表，参考别人的表 

例如：员工表的员工所在部门这个字段的值要参考部门表：{% span red, 部门表是主表 %}，{% span red, 员工表是从表 %}。 

例如：学生表、课程表、选课表：选课表的学生和课程要分别参考学生表和课程表，学生表和课程表是 主表，选课表是从表。

### 开发场景 

问题1：如果两个表之间有关系（一对一、一对多），比如：员工表和部门表（一对多），它们之间是否 一定要建外键约束？ 

- 答：不是的 

问题2：建和不建外键约束有什么区别？ 

- 答：建外键约束，你的操作（创建表、删除表、添加、修改、删除）会受到限制，从语法层面受到限 制。例如：在员工表中不可能添加一个员工信息，它的部门的值在部门表中找不到。 
- 不建外键约束，你的操作（创建表、删除表、添加、修改、删除）不受限制，要保证数据的 引用完整 性 ，只能依 靠程序员的自觉 ，或者是 在Java程序中进行限定 。例如：在员工表中，可以添加一个员工的 信息，它的部门指定为一个完全不存在的部门。 

问题3：那么建和不建外键约束和查询有没有关系？ 

- 答：没有 

在 MySQL 里，外键约束是有成本的，需要消耗系统资源。对于大并发的 SQL 操作，有可能会不适 合。比如大型网站的中央数据库，可能会 因为外键约束的系统开销而变得非常慢 。所以， MySQL 允 许你不使用系统自带的外键约束，在 应用层面 完成检查数据一致性的逻辑。也就是说，即使你不 用外键约束，也要想办法通过应用层面的附加逻辑，来实现外键约束的功能，确保数据的一致性。

## CHECK约束

### 作用

检查某个字段的值是否符号xx要求，一般指的是值的范围

### 关键字

CHECK

MySQL5.7 可以使用check约束，但check约束对数据验证没有任何作用。添加数据时，没有任何错误或警 告 

但是MySQL 8.0中可以使用check约束了。

### 实现方法

```MySQL
CREATE TABLE test1(
	id INT,
    last_name VARCHAR(15),
    salary DECIMAL(10,2) CHECK(salary > 2000),
    sex VARCHAR(1) CHECK(sex in ('男','女'))
)
```



## DEAFULT 约束

### 作用

给某个字段/某列指定默认值，一旦设置默认值，在插入数据时，如果此字段没有显式赋值，则赋值为默 认值。

### 关键字

DEFAULT

### 实现方法

1. 建表时

   ```MySQL
   create table 表名称(
   字段名 数据类型 primary key,
   字段名 数据类型 unique key not null,
   字段名 数据类型 unique key,
   字段名 数据类型 not null default 默认值,
   );
   ```

2. 在ALTER时添加

   ```MySQL
   ALTER TABLE employee 
   MODIFY gender CHAR DEFAULT '男'
   ```

3. 在ALTER时删除

   ```MySQL
   ALTER TABLE employee 
   MODIFY gender CHAR
   ```

## 面试

面试1：为什么建表时，加 not null default '' 或 default 0 

答：不想让表中出现null值。 

面试2：为什么不想要 null 的值 

答:

1. 不好比较。null是一种特殊值，比较时只能用专门的is null 和 is not null来比较。碰到运算符，通 常返回null。

2.  效率不高。影响提高索引效果。因此，我们往往在建表时 not null default '' 或 default 0 

面试3、带AUTO_INCREMENT约束的字段值是从1开始的吗？ 

在MySQL中，默认AUTO_INCREMENT的初始 值是1，每新增一条记录，字段值自动加1。设置自增属性（AUTO_INCREMENT）的时候，还可以指定第 一条插入记录的自增字段的值，这样新插入的记录的自增字段值从初始值开始递增，如在表中插入第一 条记录，同时指定id值为5，则以后插入的记录的id值就会从6开始往上增加。添加主键约束时，往往需要 设置字段自动增加属性。 

面试4、并不是每个表都可以任意选择存储引擎？ 外键约束（FOREIGN KEY）不能跨引擎使用。 

MySQL支持多种存储引擎，每一个表都可以指定一个不同的存储引擎，需要注意的是：外键约束是用来 保证数据的参照完整性的，如果表之间需要关联外键，却指定了不同的存储引擎，那么这些表之间是不 能创建外键约束的。所以说，存储引擎的选择也不完全是随意的。



# 视图

1. 视图，可以看做是一个虚拟表，本身是不存储数据的。视图的本质，就可以看做是存储起来的SELECT语句
2. 视图中SELECT语句中涉及到的表,称为基表
3. 针对视图做DML操作，会影响到对应的基表中的数据。反之亦然
4. 视图本身的删除，不会导致基表中数据的删除。
5. 视图的应用场景:针对于小型项目，不推荐使用视图。针对于大型项目，可以考虑使用视图
6. 视图优点：简化查询；控制数据的访问

就是主表的一个映射，将主表中部分元素映射到一个虚拟表中，如果这个虚拟表中的元素更改的话，则对应的主表中的元素也会改变，反之亦然

视图的{% span red, 创建和删除只影响视图本身 %}，不影响对应的基表。但是当对视图中的数据进行增加、删除和修改操作时，数据表中的数据会相应地发生变化，反之亦然。



## 创建视图

### 针对单表

```MySQL
CREATE VIEW vu_emp1
AS
SELECT employee_id, last_name,salary
FROM emps;

CREATE VIEW vu_emp2
AS
# 查询语句中的别名会作为视图中字段的名称
SELECT employee_id emp_id,last_name lname, salary 
FROM emps
WHERE salary>8200;

# 在创建视图的时候指定名称
CREATE VIEW vu_emp2(emp_id, name, monthly_sal)
AS
SELECT employee_id emp_id,last_name lname, salary 
FROM emps
WHERE salary>8200;

# 可使用源表中不存在的数据来进行创建视图
CREATE VIEW vu_emp_sal
AS	
SELECT department_id, AVG(salary) avg_sal
FROM emps
WHERE department_id IS NOT NULL
GROUP BY department_id;
```



### 针对多表

```MySQL
CREATE VIEW vu_emp_many
AS
SELECT e.department_id, d.department_name
FROM employees e JOIN departments d
ON e.department_id = d.department_id;
```



### 利用视图对数据进行格式化

```MySQL
CREATE VIEW my_view
AS
SELECT CONCAT(e.last_name,"(",d.department_name,")") as emp_info
FROM employees e JOIN departments d
ON e.department_id = d.department_id;
```



### 基于视图创建视图

```MySQL
CREATE VIEW vu_emp4
AS
SELECT employee_id, last_name
FROM vu_emp1;
```



## 查看视图

1. 查看数据库中表和视图

   ```MySQL
   SHOW TABLES;
   ```

2. 查看视图结构

   ```MySQL
   DESC vu_emp2;
   ```

3. 查看视图属性信息

   ```MySQL
   SHOW TABLES STATUS LIKE 'vu_emp1'
   ```

4. 查看视图详细定义信息

   ```MySQL
   SHOW CREATE VIEW 'vu_emp1';
   ```

## 更新视图

{% tip success %}一般情况下可以更新数据{% endtip %}

```MySQL
# 修该视图中的数据，则表中的数据也会跟着改变
UPDATE vu_emp1
SET salary = 1000
WHERE employee_id = 1;

# 删除视图中的数据，则表中的数据也会跟着删除
DELETE FROM vu_emp1
WHERE employee_id = 1;
```



{% tip error %}特殊情况下不可以更新数据{% endtip %}

我们在创建视图的时候，有一种方式是根据表中不存在的数据进行创建视图，这种情况下即使删除了视图中的数据，那个原来的数据也不会改变

要使视图可更新，视图中的行和底层基本表中的行之间必须存在 {% span red, 一对一 %} 的关系。另外当视图定义出现如 下情况时，视图不支持更新操作： 

- 在定义视图的时候指定了“ALGORITHM = TEMPTABLE”，视图将不支持INSERT和DELETE操作； 
- 视图中不包含基表中所有被定义为非空又未指定默认值的列，视图将不支持INSERT操作； 
- 在定义视图的SELECT语句中使用了 {% span red, JOIN联合查询 %} ，视图将不支持INSERT和DELETE操作； 
- 在定义视图的SELECT语句后的字段列表中使用了 {% span red, 数学表达式 %} 或{% span red, 子查询 %} ，视图将不支持INSERT，也 不支持UPDATE使用了数学表达式、子查询的字段值； 
- 在定义视图的SELECT语句后的字段列表中使用 {% span red, DISTINCT、聚合函数、GROUP BY、HAVING、UNION %} 等，视图将不支持INSERT、UPDATE、DELETE； 
- 在定义视图的SELECT语句中包含了子查询，而子查询中引用了FROM后面的表，视图将不支持 INSERT、UPDATE、DELETE； 
- 视图定义基于一个 {% span red, 不可更新视图 %} ；



## 修改视图

1. 方式一

   ```MySQL
   CREATE OR REPLACE VIEW vu_emp1
   AS
   SELECT employee_id, last_name, salary, email
   FROM emps
   WHERE salary > 7000;
   ```

2. 方式二

   ```MySQL
   ALTER VIEW vu_emp1
   AS
   SELECT employee_id, last_name, salary, email
   FROM emps
   WHERE salary > 7000;
   ```



## 删除视图

```MySQL
DROP VIEW IF EXISTS vu_emp1, vu_emp2;
```



## 总结

### 视图优点 

1. 操作简单 将经常使用的查询操作定义为视图，可以使开发人员不需要关心视图对应的数据表的结构、表与表之间 的关联关系，也不需要关心数据表之间的业务逻辑和查询条件，而只需要简单地操作视图即可，极大简 化了开发人员对数据库的操作。 
2. 减少数据冗余 视图跟实际数据表不一样，它存储的是查询语句。所以，在使用的时候，我们要通过定义视图的查询语 句来获取结果集。而视图本身不存储数据，不占用数据存储的资源，减少了数据冗余。 
3. 数据安全 MySQL将用户对数据的 访问限制 在某些数据的结果集上，而这些数据的结果集可以使用视图来实现。用 户不必直接查询或操作数据表。这也可以理解为视图具有 隔离性 。视图相当于在用户和实际的数据表之 间加了一层虚拟表。同时，MySQL可以根据权限将用户对数据的访问限制在某些视图上，用户不需要查询数据表，可以直接 通过视图获取数据表中的信息。这在一定程度上保障了数据表中数据的安全性。 
4. 适应灵活多变的需求 当业务系统的需求发生变化后，如果需要改动数据表的结构，则工作量相对较 大，可以使用视图来减少改动的工作量。这种方式在实际工作中使用得比较多。 
5. 能够分解复杂的查询逻辑 数据库中如果存在复杂的查询逻辑，则可以将问题进行分解，创建多个视图 获取数据，再将创建的多个视图结合起来，完成复杂的查询逻辑。

### 视图不足 

如果我们在实际数据表的基础上创建了视图，那么，{% span red, 如果实际数据表的结构变更了 %}，{% label 我们就需要及时对 相关的视图进行相应的维护 red %}。特别是嵌套的视图（就是在视图的基础上创建视图），维护会变得比较复杂， 可读性不好 ，容易变成系统的潜在隐患。因为创建视图的 SQL 查询可能会对字段重命名，也可能包 含复杂的逻辑，这些都会增加维护的成本。 

实际项目中，如果视图过多，会导致数据库维护成本的问题。 所以，在创建视图的时候，你要结合实际项目需求，综合考虑视图的优点和不足，这样才能正确使用视 图，使系统整体达到最优。



{% note red 'fas fa-fan' modern%}

我们在向视图中添加数据的时候，如果视图中只有原表的部分字段，那么我们添加的时候除了我们添加的这几个字段外，原表中其他没在视图中的字段则默认为NULL，这时候，如果其他字段有约束为NOT NULL的话，则添加失败

{% endnote %}



# 存储过程与函数

## 分类

存储过程的参数类型可以是IN、OUT和INOUT。根据这点分类如下： 

1. 没有参数（无参数无返回）
2. 仅仅带 IN 类型（有参数无返回）
3. 仅仅带 OUT 类型（无参数有返 回）
4. 既带 IN 又带 OUT（有参数有返回） 
5. 带 INOUT（有参数有返回） 注意：IN、OUT、INOUT 都可以在一个存储过程中带多个。

## 语法

```MySQL
CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...)
[characteristics ...]
BEGIN
	存储过程体
END
```

1. 参数前面的符号的意思 

   - IN ：当前参数为输入参数，也就是表示入参； 存储过程只是读取这个参数的值。如果没有定义参数种类， 默认就是 IN ，表示输入参数。 
   - OUT ：当前参数为输出参数，也就是表示出参； 执行完成之后，调用这个存储过程的客户端或者应用程序就可以读取这个参数返回的值了。 
   - INOUT ：当前参数既可以为输入参数，也可以为输出参数。 

2. 形参类型可以是 MySQL数据库中的任意类型。

3. characteristics 表示创建存储过程时指定的对存储过程的约束条件，其取值信息如下

   ```MySQL
   LANGUAGE SQL
   | [NOT] DETERMINISTIC
   | { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
   | SQL SECURITY { DEFINER | INVOKER }
   | COMMENT 'string'
   ```

   - LANGUAGE SQL ：说明存储过程执行体是由SQL语句组成的，当前系统支持的语言为SQL。 
   - [NOT] DETERMINISTIC ：指明存储过程执行的结果是否确定。DETERMINISTIC表示结果是确定 的。每次执行存储过程时，相同的输入会得到相同的输出。NOT DETERMINISTIC表示结果是不确定 的，相同的输入可能得到不同的输出。如果没有指定任意一个值，默认为NOT DETERMINISTIC。 
   - { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA } ：指明子程序使 用SQL语句的限制。 
     - CONTAINS SQL表示当前存储过程的子程序包含SQL语句，但是并不包含读写数据的SQL语句； 
     - NO SQL表示当前存储过程的子程序中不包含任何SQL语句； 
     - READS SQL DATA表示当前存储过程的子程序中包含读数据的SQL语句； 
     - MODIFIES SQL DATA表示当前存储过程的子程序中包含写数据的SQL语句。 
     - 默认情况下，系统会指定为CONTAINS SQL。 
   - SQL SECURITY { DEFINER | INVOKER } ：执行当前存储过程的权限，即指明哪些用户能够执 行当前存储过程。 
     - DEFINER 表示只有当前存储过程的创建者或者定义者才能执行当前存储过程； 
     - INVOKER 表示拥有当前存储过程的访问权限的用户能够执行当前存储过程。
   - COMMENT 'string' ：注释信息，可以用来描述存储过程。

4. 存储过程体中可以有多条 SQL 语句，如果仅仅一条SQL 语句，则可以省略 BEGIN 和 END

5. 需要设置新的结束标记

   因为MySQL默认的语句结束符号为分号‘;’。为了避免与存储过程中SQL语句结束符相冲突，需要使用 DELIMITER改变存储过程的结束符。

   ```MySQL
   DELIMITER 新的结束标记
   
   DELIMITER $
   
   CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...)
   [characteristics ...]
   BEGIN
   	sql语句1;
   	sql语句2;
   END $
   
   DELIMITER ;
   ```

   

## 创建过程

### 无参数无返回值

举例1.创建存储过程select_all_data(), 查看employees表中的所有数据

```MySQL
DELIMITER $

CREATE PROCEDURE select_all_data()
BEGIN
	SELECT * FROM employees;
END $

DELIMITER ;

# 存储过程的调用
CALL select_all_data();
```

举例2.创建存储过程avg_employee_salary(), 返回所有员工的平均工资

```MySQL
DELIMITER $

CREATE PROCEDURE avg_employee_salary()
BEGIN 
	SELECT AVG(salary)
	FROM employees;
END $

DELIMITER ;

# 存储过程的调用
CALL avg_employee_salary();
```



### 带IN

举例1. 创建存储过程show_someone_salary，查看emp表某个员工的薪资，使用IN参数empname输入员工名

```MySQL
DELIMITER //

CREATE PROCEDURE shwo_someone_salary(IN empname VARCHAR(20))
BEGIN 
	SELECT salary
	FROM employees
	WHERE last_name = empname;
END //

DELIMITER ;

# 调用方式一
CALL show_someone_salary("King");

# 调用方式二
SET @empname := 'King';
CALL show_somenoe_salary(@empname);
```



### 带OUT

举例1. 创建存储过程show_min_salary，查看emp表的最低薪资，并将最低薪资通过ms输出

```MySQL
DELIMITER $

CREATE PROCEDURE show_min_salary(OUT ms DOUBLE)
BEGIN
	SELECT MIN(salary) INTO ms
	FROM employees;
END $ 
DELIMITER ;

# 调用
CALL show_min_salary(@ms);
SELECT @ms;
```



### 带IN和OUT

创建存储过程show_someone_salary2(),查看emp表中某个员工的薪资，并用IN参数empname输入员工名，使用OUT参数empsalary输出员工名

```MySQL
DELIMITER //

CREATE PROCEDURE show_someone_salary2(IN empname VARCHAR(20), OUT empsalary DOUBLE)
BEGIN
	SELECT MIN(salary) INTO empsalary
	FROM employees
	WHERE last_name = empname;
END;

DELIMITER ;
```



### 带INOUT

创建存储过程show_mgr_name(),查询某个员工领导的姓名，并使用INOUT参数empname输入员工姓名，输出领导姓名

```MySQL
DELIMITER $

CREATE PROCEDURE show_mgr_name(INOUT empname VARCHAR(25))
BEGIN
	SELECT last_name INTO empname
	FROM employees e, (
    	SELECT manager_id
		FROM employees
		WHERE last_name = empname;
    )mgr_id
    WHERE e.employee_id = mgr_id.employee_id;

END $

DELIMITER ;

# 调用
CALL show_mgr_name(@empname);
```





## 存储函数

### 语法分析

```MySQL
CREATE FUNCTION 函数名(参数名 参数类型,...)
RETURNS 返回值类型
[characteristics ...]
BEGIN
	函数体 #函数体中肯定有 RETURN 语句
END
```

1. 参数列表：指定参数为IN、OUT或INOUT只对PROCEDURE是合法的，FUNCTION中总是默认为IN参 数。 
2. RETURNS type 语句表示函数返回数据的类型； RETURNS子句只能对FUNCTION做指定，对函数而言这是{% span red, 强制 %} 的。它用来指定函数的返回类型，而且函 数体必须包含一个RETURN value语句。 
3. characteristic 创建函数时指定的对函数的约束。取值与创建存储过程时相同，这里不再赘述。 
4. 函数体也可以用BEGIN…END来表示SQL代码的开始和结束。如果函数体只有一条语句，也可以省略 BEGIN…END。

### 创建与调用

举例1：创建存储函数，名称为email_by_name()，参数定义为空，该函数Abel的email，并返回，数据类型为字符串型

```MySQL
DELIMITER $

CREATE FUNCTION email_by_name()
RETURNS VARCHAR(25)
	DETERMINISTIC # 存储过程执行的结果确定
	CONTAINS SQL	# 包含SQL语句
	READS SQL DATA # 表示当前存储过程的子程序中包含读数据的SQL语句
BEGIN
	RETURN (SELECT emial FROM employees WHERE last_name = 'Abel');
END $

DELIMITER ;

# 调用
SELECT email_by_name();
```



举例2：创建一个存储函数，名称为email_by_id，参数传入emp_id，该函数查询emp_id的email并返回，数据类型为字符串类型

```MySQL
DELIMITER $

CREATE FUNCTION email_by_id(emp_id INT)
RETURNS VARCHAR(25)
	DETERMINISTIC # 存储过程执行的结果确定
	CONTAINS SQL	# 包含SQL语句
	READS SQL DATA # 表示当前存储过程的子程序中包含读数据的SQL语句

BEGIN
	RETURN (SELECT email FROM employees WHERE employee_id = emp_id);
END $

DELIMITER ;


# 调用
SELECT email_by_id(101);
SET @emp_id = 101;
SELECT email_by_id(@emp_id);
```



举例3：创建存储函数count_by_id()，参数传入dept_id，该函数查询dept_id部门的员工人数，并返回，返回数据类型为整形

```MySQL
DELIMITER $

CREATE FUNCTION count_by_id(dept_id INT)
RETURNS INT
	DETERMINISTIC 
	CONTAINS SQL
	READS SQL DATA
BEGIN 
	RETURN(
    	SELECT COUNT(*)
		FROM employees
		WHERE department_id = dept_id
    );
END

DELIMITER ;

# 调用
SET @dept_id := 100;
SELECT count_by_id(@dept_id);
```



## 存储过程和函数的查看，修改，删除

### 查看

1. 使用SHOW  CREATE 语句查看存储过程和函数的创建信息

   基本语法结构

   ```MySQL
   SHOW CREATE PROCEDURE 过程名;
   
   SHOW CERATE FUNCTION 函数名；
   ```

2. 使用SHOW STATUS语句查看存储过程和函数的状态信息

   ```MySQL
   SHOW PROCEDURE STATUS; # 查看所有的存储过程的状态信息
   
   SHOW PROCEDURE STATUS LIKE 'show_max_salary'; # 查看特定的存储过程的状态信息
   ```

3. 从information_schema.Routines表中查看存储过程和函数的信息

   ```MySQL
   SELECT * FROM information_schema.Routines
   WHERE ROUTINE_NAME='email_by_id' AND  ROUTINE_TYPE='FUNCTION'
   ```

   



### 修改

修改存储过程或函数，不影响存储过程或函数功能，只是修改相关特性。使用ALTER语句实现。

```MySQL
ALTER {PROCEDURE | FUNCTION }存储过程或函数名 [characteristic...]
```

```MySQL
ALTER PROCEDURE show_max_salary
SQL SECURITY INVOKER
COMMENT '查询最高工资';
```

 

### 删除

删除存储过程函数，可使用DROP语句，其语法结构如下：

```MySQL
DROP {PROCEDURE | FUNCTION } [IF EXISTS] 存储过程或函数名;
```



## 优缺点

### 优点

1. 存储过程可以一次编译多次使用。存储过程只在创建时进行编译，之后的使用都不需要重新编译， 这就提升了 SQL 的执行效率。
2. 可以减少开发工作量。将代码 封装 成模块，实际上是编程的核心思想之一，这样可以把复杂的问题 拆解成不同的模块，然后模块之间可以 重复使用 ，在减少开发工作量的同时，还能保证代码的结构清 晰。 
3. 存储过程的安全性强。我们在设定存储过程的时候可以 设置对用户的使用权限 ，这样就和视图一样具 有较强的安全性。 
4. 可以减少网络传输量。因为代码封装到存储过程中，每次使用只需要调用存储过程即可，这样就减 少了网络传输量。 
5. 良好的封装性。在进行相对复杂的数据库操作时，原本需要使用一条一条的 SQL 语句，可能要连接 多次数据库才能完成的操作，现在变成了一次存储过程，只需要 连接一次即可 。 

### 缺点

1. 可移植性差。存储过程不能跨数据库移植，比如在 MySQL、Oracle 和 SQL Server 里编写的存储过 程，在换成其他数据库时都需要重新编写。 
2. 调试困难。只有少数 DBMS 支持存储过程的调试。对于复杂的存储过程来说，开发和维护都不容 易。虽然也有一些第三方工具可以对存储过程进行调试，但要收费。 
3. 存储过程的版本管理很困难。比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发 软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦。 
4. 它不适合高并发的场景。高并发的场景需要减少数据库的压力，有时数据库会采用分库分表的方 式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护， 增加数据库的压力 ，显然就 不适用了。 

小结： 存储过程既方便，又有局限性。尽管不同的公司对存储过程的态度不一，但是对于我们开发人员来说， 不论怎样，掌握存储过程都是必备的技能之一。



# 变量，流程控制与游标

## 系统变量

变量由系统定义，不是用户定义，属于 服务器 层面。启动MySQL服务，生成MySQL服务实例期间， MySQL将为MySQL服务器内存中的系统变量赋值，这些系统变量定义了当前MySQL服务实例的属性、特征。

系统变量分为{% span red, 全局系统变量 %}（需要添加 global 关键字）以及{% span red, 会话系统变量 %}（需要添加 session 关键 字），有时也把全局系统变量简称为全局变量，有时也把会话系统变量称为local变量。如果不写，{% span red, 默认会话级别 %}。静态变量（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）属于特殊的全局系统变量。

每一个MySQL客户机成功连接MySQL服务器后，都会产生与之对应的会话。会话期间，MySQL服务实例 会在MySQL服务器内存中生成与该会话对应的会话系统变量，这些会话系统变量的初始值是全局系统变 量值的复制。如下图：

![image-20221225195817422](https://s2.loli.net/2023/01/07/ed9XZGAvIaYCPVB.png)

### 查看系统变量

```MySQL
SHOW GLOBAL VARIABLES;

SHOW SESSION VARIABLES;

SHOW VARIABLES; # 默认查询的是会话系统变量

# 查看部分系统变量
SHOW GLOBAL VARIABLES LIKE 'admin_%';

SHOW VARIABLES LIKE 'character_%';
```



### 查看指定系统变量

```MySQL
SELECT @@global.max_connections; # 查询全局变量中的max_connextions
SELECT @@session.character_set_client; # 查询会话变量中的character_set_client;
SELECT @@max_connextion; # 默认先去会话变量中寻找，找不到的话再取全局变量中寻找
```



### 修改系统变量

{% tip warning %}全局变量的修改：针对本次服务是有效的，如果重启服务器的话，则我们原先设置的变量都会更改为默认值{% endtip %}

```MySQL
# 为某个系统变量赋值
# 方式一
SET @@global.变量名 = 变量值;
# 方式二
SET GLOBAL 变量名=变量值
```

{% tip warning %}系统变量的修改：针对本次会话是有效的，如果新建一个会话的话，则我们修改的值在另一个会话中会变为原来的值{% endtip %}

```MySQL
# 为某个会话变量赋值
# 方式一
SET @@session.变量名 = 变量值;
# 方式二
SET SESSION 变量名=变量值;
```



## 用户变量

用户变量分为：{% span red, 会话用户变量 %}和{% span red, 局部变量 %}.

- 会话用户变量：作用域和会话变量一样，只对 当前连接 会话有效。 
- 局部变量：只在 BEGIN 和 END 语句块中有效。局部变量只能在 存储过程和函数 中使用。

### 会话变量的声明赋值

```MySQL
# 方式一： “=” 或 “:=”
SET @用户变量 = 值;
SET @用户变量 := 值;

SET @m1 = 1;
SET @m2 := 2;
SET @sum := @m1 + @m2;

# 方式二:":="或INTO关键字
SELECT @用户变量 := 表达式 [FROM等子句];
SELECT 表达式 INTO @用户变量 [FROM 等子句]

SELECT @count = COUNT(*) FROM employees;

SELECT @count;

SELECT AVG(salary) INTO @salary FROM employees;
```



### 局部变量的声明赋值

定义：可以使用 DECLARE 语句定义一个局部变量 

作用域：仅仅在定义它的 BEGIN ... END 中有效 

位置：只能放在 BEGIN ... END 中，而且只能放在第一句

```MySQL
BEGIN
    #声明局部变量
    DECLARE 变量名1 变量数据类型 [DEFAULT 变量默认值];
    DECLARE 变量名2,变量名3,... 变量数据类型 [DEFAULT 变量默认值];
    #为局部变量赋值
    SET 变量名1 = 值;
    SELECT 值 INTO 变量名2 [FROM 子句];
    #查看局部变量的值
    SELECT 变量1,变量2,变量3;
END
```

举例

```MySQL
DELIMITER $
BEGIN
	# 声明局部变量
	DECLARE a INT DEFAULT 0;
	DECLARE b INT;
	# DECLARE a,b INT DEFAULT 0;
	DECLARE emp_name VARCHAR(25);
	
	#赋值
	SET a = 1;
	SET b := 2;
    
    SELECT last_name INTO emp_name FROM employees WHERE employee_id = 101;
    
    # 使用
    SELECT a,b,emp_name
END$
DELIMITER ;
```

举例：声明局部变量，并分别赋值为employees表中的employee_id为102的last_name和salary

```MySQL
DELIMITER $

CREATE PROCEDURE test_pro()

BEGIN
	# 声明
	DECLARE emp_name VARCHAR(25);
	DECLARE sal DOUBLE(10,2) DEFAULT 0;
	# 赋值
	SELECT last_name, salary INTO emp_name, sal
	FROM employees
	WHERE employee_id = 102;
	
	# 使用
   SELECT emp_name, sal; 
END $

DELIMITER ;
```

举例：声明两个变量，并求和打印（分别使用会话用户变量和局部用户变量的方式实现）

```MySQL
# 方式一：使用会话用户变量
SET @v1 = 10;
SET @v2 = 20;
SET @result = @v1 + @v2;
# 调用
SELECT @result;

# 方式二：使用局部变量
DELIMITER $

CREATE PROCEDURE add_value()
BEGIN
	# 声明
	DECLARE v1 INT;
	DECLARE v2, sum_val INT;
	# 赋值
	SET v1 = 10;
	SET v2 := 20;
	
	SET sum_val = v1+v2;
	
	# 使用
	SELECT sum_val;
	
	
END $

DELIMITER ;
```



举例：创建存储过程'different_salary'查询某个员工和它领导的薪资差距，并用IN参数emp_id接手员工id，使用OUT参数dif_salary输出薪资差距

```MySQL
DELIMITER $

CREATE PROCEDURE different_salary(IN emp_id INT, OUT dif_salary DOUBLE(8,2))

BEGIN
	DECLARE emp_sal, mgr_sal DOUBLE(8,2);
	SELECT salary INTO emp_sal
	FROM employees
	WHERE employee_id = emp_id;
	
	SELECT salary INTO mgr_sal
	FROM employees e, employees m
	WHERE e.employee_id = emp_id AND m.employee_id = e.magrin_id;
	
	SET dif_salary = mgr_sal - emp_sal;
	SELECT mgr_sal - emp_sal INTO dif_salary;
	
END $

DELIMITER ;
```



## 程序出错调试

.{% span red, 定义条件 %}是事先定义程序执行过程中可能遇到的问题， {% span red, 处理程序 %}定义了在遇到问题时应当采取的处理方 式，并且保证存储过程或函数在遇到警告或错误时能继续执行。这样可以增强存储程序处理问题的能 力，避免程序异常停止运行。 说明：定义条件和处理程序在存储过程、存储函数中都是支持的

### 定义条件

定义条件就是{% span red, 给MySQL中的错误码命名 %}，这有助于存储的程序代码更清晰。它将一个{% span red, 错误名字 %}和{% span red, 指定的错误条件 %}关联起来。这个名字可以随后被用在定义处理程序的DECLARE HANDLER 语句中。

```MySQL
DECLARE 错误名称 CONDITION FOR 错误码（或错误条件）
```

- {% span red, MySQL_error_code %}和{% span red, sqlstate_value %}都可以表示MySQL的错误。 
  - MySQL_error_code是数值类型错误代码。 
  - sqlstate_value是长度为5的字符串类型错误代码。 
- 例如，在ERROR 1418 (HY000)中，1418是MySQL_error_code，'HY000'是sqlstate_value。 
- 例如，在ERROR 1142（42000）中，1142是MySQL_error_code，'42000'是sqlstate_value。

举例：定义"Field_Not_Be_NULL" 错误名与MySQL中违反非空约束的错误类型是"ERROR 1048(23000)" 对应

```MySQL
# 方式一：使用MySQL_error_code
DECLARE Field_Not_Be_NULL CONDITION FOR 1048;

# 方式二：使用sqlstate_value
DECLARE Field_Not_Be_NULL CONDITION FOR SQLSTATE '23000';
```

举例：定义"ERROR 1148(42000)"错误，名称为command_not_allowed.

```MySQL
# 方式一：使用MySQL_error_code
DECLARE command_not_allowed CONDITION FOR 1148;

# 方式二：使用sqlstate_value
DECLARE command_not_allowed CONDITION FOR SQLSTATE '42000';
```



### 定义处理程序

```MySQL
DECLARE 处理方式 HANDLER FOR 错误类型 处理语句
```

- {% span orange, 处理方式 %}：处理方式有3个取值：CONTINUE、EXIT、UNDO。 
  - {% span orange, CONTINUE %}：表示遇到错误不处理，继续执行。 
  - {% span orange, EXIT %} ：表示遇到错误马上退出。 
  - {% span orange, UNDO %} ：表示遇到错误后撤回之前的操作。MySQL中暂时不支持这样的操作。 
- {% span orange, 错误类型 %}（即条件）可以有如下取值： 
  - {% span orange, SQLSTATE '字符串错误码' %} ：表示长度为5的sqlstate_value类型的错误代码； 
  - {% span orange, MySQL_error_code  %}：匹配数值类型错误代码； 
  - {% span orange, 错误名称 %}：表示DECLARE ... CONDITION定义的错误条件名称。 
  - {% span orange, SQLWARNING %}：匹配所有以01开头的SQLSTATE错误代码； 
  - {% span orange, NOT FOUND %}：匹配所有以02开头的SQLSTATE错误代码； 
  - {% span orange, SQLEXCEPTION %}：匹配所有没有被SQLWARNING或NOT FOUND捕获的SQLSTATE错误代码； 
- {% span orange, 处理语句 %}：如果出现上述条件之一，则采用对应的处理方式，并执行指定的处理语句。语句可以是 像“ SET 变量 = 值 ”这样的简单语句，也可以是使用 BEGIN ... END 编写的复合语句。

举例

```MySQL
#方法1：捕获sqlstate_value
DECLARE CONTINUE HANDLER FOR SQLSTATE '42S02' SET @info = 'NO_SUCH_TABLE';
#方法2：捕获mysql_error_value
DECLARE CONTINUE HANDLER FOR 1146 SET @info = 'NO_SUCH_TABLE';
#方法3：先定义条件，再调用
DECLARE no_such_table CONDITION FOR 1146;
DECLARE CONTINUE HANDLER FOR NO_SUCH_TABLE SET @info = 'NO_SUCH_TABLE';
#方法4：使用SQLWARNING
DECLARE EXIT HANDLER FOR SQLWARNING SET @info = 'ERROR';
#方法5：使用NOT FOUND
DECLARE EXIT HANDLER FOR NOT FOUND SET @info = 'NO_SUCH_TABLE';
#方法6：使用SQLEXCEPTION
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET @info = 'ERROR';
```

案例

```MySQL
DELIMITER //
CREATE PROCEDURE UpdateDataNoCondition()
    BEGIN
        #定义处理程序,但我们于东1048这错误的时候将变量proc_value的值设置为-1，并跳过错误语句继续执行
        DECLARE CONTINUE HANDLER FOR 1048 SET @proc_value = -1;
        SET @x = 1
        UPDATE employees SET email = NULL WHERE last_name = 'Abel';
        SET @x = 2;
        UPDATE employees SET email = 'aabbel' WHERE last_name = 'Abel';
        SET @x = 3;
    END //
DELIMITER ;

# 调用存储过程
CALL UpdateDataNoCondition;
# 查看变量
SELECT @proc_value, @x;
```



## 流程控制

条件判断语句：IF语句和CASE语句

循环语句：LOOP，WHILE和REPEAT语句

跳转语句：ITERATE和LEAVE语句

### IF

举例一：

```MySQL
DELIMITER $

CREATE PROCEDURE test_if()
BEGIN

	DECLARE emp_name VARCHAR(25) DEFAULT 0;
	IF emp_name IS NULL
		THEN SELECT 'emp_name IS NULL'
	ELSE
		TEHN SELECT 'emp_name IS NOT NULL'
	END IF;

END $

DELIMITER ;
```

举例2：声明存储过程"update_salary_by_eidl",定义IN参数emp_id，输入员工编号。判断该员工工资如果低于8000元，并且入职时间超过五年，就涨薪500元，否则不变

```MySQL
DELIMITER $

CREATE PROCEDURE update_salary_by_eidl(IN emp_id INT)
BEGIN
	DECLARE emp_salary DOUBLE;
	DECLARE emp_hire DATE;
	
	SELECT salary INTO emp_salary
	FROM employees
	WHERE employee_id = emp_id;
	
	SELECT hire INTO emp_hire
	FROM employees
	WHERE employee_id = emp_id
	
	IF salary < 8000 AND DATEDIFF(CURDATE(), emp_hire) / 365 >= 5
		TEHN UPDATE employees SET salary = salary+500 WHERE employee_id = emp_id;
	END IF;
	
END$

DELIMITER ;
```



### CASE

```MySQL
#情况一：类似于switch
CASE 表达式
WHEN 值1 THEN 结果1或语句1(如果是语句，需要加分号)
WHEN 值2 THEN 结果2或语句2(如果是语句，需要加分号)
...
ELSE 结果n或语句n(如果是语句，需要加分号)
END [case]（如果是放在begin end中需要加上case，如果放在select后面不需要）


#情况二：类似于多重if
CASE
WHEN 条件1 THEN 结果1或语句1(如果是语句，需要加分号)
WHEN 条件2 THEN 结果2或语句2(如果是语句，需要加分号)
...
ELSE 结果n或语句n(如果是语句，需要加分号)
END [case]（如果是放在begin end中需要加上case，如果放在select后面不需要）
```



举例3：声明存储过程“update_salary_by_eid4”，定义IN参数emp_id，输入员工编号。判断该员工 薪资如果低于9000元，就更新薪资为9000元；薪资大于等于9000元且低于10000的，但是奖金比例 为NULL的，就更新奖金比例为0.01；其他的涨薪100元。

```MySQL
DELIMITER $
CREATE PROCEDURE update_salary_by_eid4(IN emp_id INT)
BEGIN
	# 声明
	DECLARE emp_salary DOUBLE
	DECLARE emp_pct DOUBLE
	
	# 赋值
	SELECT salary INTO emp_salary FROM employees WHERE employee_id = emp_id;
	SELECT commission_pct INTO emp_pct FROM employees WHERE employee_id = emp_id;
	
	CASE 
	WHEN emp_salary < 9000 THEN UPDATE employees SET salary = 9000 WHERE employee_id = emp_id;
	WHEN emp_salary < 10000 AND emp_pct IS NULL TEHN UPDATE employees SET commission_pct = 0.01 WHERE employee_id = emp_id;
	ELSE
		UPDATE employees SET salary = salary + 100 WHERE employee_id = emp_id;
	END CASE;
END$
DELIMITER ;
```

举例4：声明存储过程update_salary_by_eid5，定义IN参数emp_id，输入员工编号。判断该员工的 入职年限，如果是0年，薪资涨50；如果是1年，薪资涨100；如果是2年，薪资涨200；如果是3年， 薪资涨300；如果是4年，薪资涨400；其他的涨薪500。

```MySQL
DELIMITER $
CREATE PROCEDURE update_salary_by_eid5(IN emp_id INT)
BEGIN
	# 声明
	DECLARE emp_hire INT;
	
	# 赋值
	SELECT TURNCATE(DATEDIFF(CURDATE, hire_date) / 365, 0) FROM employees WHERE employee_id = emp_id;
	
	CASE emp_hire
        WHEN 0 THEN UPDATE employees SET salary = salary+50 WHERE employee_id = emp_id;
        WHEN 1 THEN UPDATE employees SET salary = salary+100 WHERE employee_id = emp_id;
        WHEN 2 THEN UPDATE employees SET salary = salary+200 WHERE employee_id = emp_id;
        WHEN 3 THEN UPDATE employees SET salary = salary+300 WHERE employee_id = emp_id;
        WHEN 4 THEN UPDATE employees SET salary = salary+400 WHERE employee_id = emp_id;
        ELSE UPDATE employees SET salary = salary+500 WHERE employee_id = emp_id;
	END CASE;
END$
DELIMITER ;
```



### LOOP

```MySQL
DELIMITER $
CREATE PROCEDURE test_loop()
BEGIN
	# 声明局部变量
	DECLARE num INT DEFAULT 1;
	# 开始循环结构
	loop_label:LOOP
		# 从新赋值
		SET num = num+1;
		IF num > 10 THEN LEAVE loop_label;
		END IF;
	END LOOP loop_label;
END $
DELIMITER ;
```

举例2:当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程"update salary loop ()"，声明OUT参数num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的1.1倍。直到全公司的平均薪资达到12000结束。并统计循环次数。

```MySQL
DELIMITER $
CREATE PROCEDURE test_loop(OUT num INT)
BEGIN
	# 声明局部变量
	DECLARE loop_num INT DEFAULT 0;
	DECLARE avg_salary DOUBLE(10,2);
	loop_label:LOOP
		SELECT AVG(salary) INTO avg_salary FROM employees;
		IF  avg_salary >= 12000 THEN LEAVE loop_label;
		END IF;
		UPDATE employees SET salary = salary*1.1;
		SET loop_num = loop_num +1;
	END LOOP loop_label;
	SET num = loop_num;
END $
DELIMITER ;
DROP PROCEDURE test_loop;
```



### WHILE

```MySQL
DELIMITER $
CREATE PROCEDURE test_while()
BEGIN
	# 初始化条件
	DECLARE num INT DEFAULT 1;
	
	WHILE num < 1 DO
		# 循环体
		SET num = num+1;
	END WHILE;
END$
DELIMITER ;
```

举例2:市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程"update_salary_while()"，声明OUT参数num，输出循环次数。存储过程中实现循环给大家降薪，薪资降为原来的90%。直到全公司的平均薪资降到5000结束。并统计循环次数。

```MySQL
DELIMITER $
CREATE PROCEDURE update_salary_while(OUT num INT)
BEGIN
	DECLARE avg_salary DOUBLE;
	SET num = 0;
	SELECT AVG(salary) INTO avg_salary FROM employees;
	WHILE  avg_salary > 5000 DO
		UPDATE employees SET salary = salary*0.9;
		SELECT AVG(salary) INTO avg_salary FROM employees;
		SET num = num+1;
	END WHILE;
	SELECT num;
END $
DELIMITER ;
```





### REPEAT

```MySQL
DELIMITER $
CREATE PROCEDURE test_repeat()
BEGIN
	DECLARE num INT DEFAULT 1;
	REPEAT
		SET num = num + 1;
		# 当满足下面条件的时候退出循环，并且该语句后面分号不需要添加
		UNTIL num >= 10
	END REPEAT
END $
DELIMITER ;
```

举例2:当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程"update_salary_repeat()"，声明OUT参数num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的1.15倍。直到全公司的平均|薪资达到13000结束。并统计循环次数。

```MySQL
DELIMITER $
CREATE PROCEDURE update_salary_repeat(OUT num INT)
BEGIN
	DECLARE avg_salary DOUBLE;
	DECLARE re_num INT DEFAULT 0;
	REPEAT
		IF re_num != 0 
		THEN
			UPDATE employees SET salary = salary*1.15; 
		END IF;
		
		SELECT AVG(salary) INTO avg_salary FROM employees;
		SET re_num = re_num +1;
		UNTIL avg_salary >= 13000
	END REPEAT;
	IF re_num != 0 THEN SET num = re_num-1;
	ELSE SET num = re_num;
	END IF;
END $
DELIMITER ;
```





### LEAVE

LEAVE语句:可以用在循环语句内，或者以BEGIN和END包裹起来的程序体内，{% span red, 表示跳出循环或者跳出程序体的操作 %}。和break同理

基本格式

```MySQL
LEAVE 标记名
```

**举例1:**创建存储过程"leave begin()"，声明INT类型的IN参数num。给BEGIN...END加标记名，并在BEGIN...END中使用IF语句判断num参数的值。

如果num<=0，则使用LEAVE语句退出BEGIN...END;

如果num=1，则查询"employees"表的平均薪资;

如果num=2，则查询"employees"表的最低薪资;

如果num>2，则查询"employees”表的最高薪资。

IF 语句结束后查询employees表的总人数

```MySQL
DELIMITER $
CREATE PROCEDURE leave_begin(IN num INT)
begin_label:BEGIN
	IF num <= 0 THEN LEAVE begin_label;
	ELSEIF num = 1 THEN SELECT AVG(salary) FROM employees;
	ELSEIF num = 2 THEN SELECT MIN(salary) FROM employees;
	ELSE SELECT MAX(salary) FROM employees;
	END IF;
	SELECT COUNT(*) FROM employees;
END $
DELIMITER ;
```

**举例2**:当市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程"leave_while()"，声明OUT参数num，输出循环次数，存储过程中使用WHILE循环给大家降低薪资为原来薪资的90%，直到全公司的平均薪资小于等于10000，并统计循环次数。

```MySQL
DELIMITER $
CREATE PROCEDURE leave_while(OUT num INT)
BEGIN
	DECLARE num_while INT DEFAULT 0;
	DECLARE avg_salary DOUBLE;
	while_label:WHILE TRUE DO
		SELECT AVG(salary) INTO  avg_salary FROM employees;
		IF avg_salary < 10000
			THEN LEAVE while_label;
		ELSE
			UPDATE employees SET salary = salary * 0.9;
			SET num_while = num_while + 1;
		END IF;
	END WHILE;
	SET num = num_while;
END $
DELIMITER ;
```



### ITERATE

ITERATE语句:只能用在循环语句(LOOP、REPEAT和WHILE语句)内，表示重新开始循环，将执行顺序转到语句段开头处。类似{% span red, continue %}.

基本格式

```MySQL
ITERATE label;
```

举例:定义局部变量num，初始值为0。循环结构中执行num + 1操作。

- 如果num < 10，则继续执行循环;
- 如果num > 15，则退出循环结构;

```MySQL
DELIMITER $
CREATE PROCEDURE iterate_test()
BEGIN
	DECLARE num INT;
	loop_label:LOOP
		IF num < 10
		THEN SET num = num +1; ITERATE loop_label;
		END IF;
		LEAVE loop_label;
	END LOOP loop_label;
END $
DELIMITER ;
```



## 游标

### 使用步骤

声明游标

```MySQL
DECLARE cursor_name CURSOR FOR select_statement;
```

打开游标

```MySQL
OPEN cursor_name
```

使用游标（从游标中取得数据）

```MySQL
FETCH cursor_name INTO var_name [, var_name] ...

FETCH cur_emp INTO emp_id, emp_sal ;
```

- 注意：游标的查询结果集中的字段数，必须跟 INTO 后面的变量数一致，否则，在存储过程执行的时 候，MySQL 会提示错误。

关闭游标

```MySQL
CLOSE cursor_name
```



创建存储过程“get_count_by_limit_total_salary()”，声明IN参数 limit_total_salary，DOUBLE类型；声明 OUT参数total_count，INT类型。函数的功能可以实现累加薪资最高的几个员工的薪资值，直到薪资总和 达到limit_total_salary参数的值，返回累加的人数给total_count。

```MySQL
DELIMITER $
CREATE PROCEDURE get_count_by_limit_total_salary(IN imit_total_salary DOUBLE, OUT total_count INT)
BEGIN
	DECLARE all_salary DOUBLE DEFAULT 0.0;
	DECLARE emp_salary DOUBLE DEFAULT 0.0;
	DECLARE emp_num INT DEFAULT 0;
	# 声明游标
	DECLARE max_salary CURSOR FOR SELECT salary FROM employees ORDER BY salary;
	# 打开游标
	OPEN max_salary;
	# 使用游标
	WHILE all_salary < imit_total_salary DO
		FETCH max_salary INTO emp_salary;
        SET all_salary = all_salary + emp_salary;
        SET emp_num = emp_num + 1;
    END WHILE;
	# 关闭游标
	CLOSE max_salary;
END $
DELIMITER ;
```



### 小结 

游标是 MySQL 的一个重要的功能，为{% span red, 逐条读取 %}结果集中的数据，提供了完美的解决方案。跟在应用层 面实现相同的功能相比，游标可以在存储程序中使用，效率高，程序也更加简洁。 

但同时也会带来一些性能问题，比如在使用游标的过程中，会对数据行进行{% span red, 加锁 %}，这样在业务并发量大 的时候，不仅会影响业务之间的效率，还会{% span red, 消耗系统资源 %}，造成内存不足，这是因为游标是在内存中进 行的处理。 

建议：养成用完之后就关闭的习惯，这样才能提高系统的整体效率。



## MySQL 8.0的新特性—全局变量的持久化 

在MySQL数据库中，全局变量可以通过SET GLOBAL语句来设置。例如，设置服务器语句超时的限制，可 以通过设置系统变量max_execution_time来实现：

```MySQL
SET GLOBAL MAX_EXECUTION_TIME=2000;
```

使用SET GLOBAL语句设置的变量值只会{% span red, 临时生效 %}。 {% span red, 数据库重启 %}后，服务器又会从MySQL配置文件中读取 变量的默认值。 MySQL 8.0版本新增了 SET PERSIST 命令。例如，设置服务器的最大连接数为1000：

```MySQL
SET PERSIST global max_connections = 1000;
```

MySQL会将该命令的配置保存到数据目录下的 mysqld-auto.cnf 文件中，下次启动时会读取该文件，用 其中的配置来覆盖默认的配置文件。



# 触发器

在执行一个操作的时候自动的执行另一个操作，称为触发器

## 概述

触发器是由{% span red, 事件来触发 %}某个操作，这些事件包括{% span red, INSERT，UPDATE，DELETE %}事件。所谓事件就是指 用户的动作或者触发某项行为。如果定义了触发程序，当数据库执行这些语句时候，就相当于事件发生 了，就会{% span red, 自动 %}激发触发器执行相应的操作。 

当对数据表中的数据执行插入、更新和删除操作，需要自动执行一些数据库逻辑时，可以使用触发器来 实现。

## 创建

```MySQL
CREATE TRIGGER 触发器名称
{BEFORE|AFTER} {INSERT|UPDATE|DELETE} ON 表名
FOR EACH ROW
触发器执行的语句块;
```

说明： 

- 表名 ：表示触发器监控的对象。 
- BEFORE|AFTER ：表示触发的时间。BEFORE 表示在事件之前触发；AFTER 表示在事件之后触发。 
- INSERT|UPDATE|DELETE ：表示触发的事件。 
  - INSERT 表示插入记录时触发； 
  - UPDATE 表示更新记录时触发； 
  - DELETE 表示删除记录时触发。
- 触发器执行的语句块 ：可以是单条SQL语句，也可以是由BEGIN…END结构组成的复合语句块。

创建触发器创建名称为before_insert_test_tri的触发器，向test_trigger数据表插入数据之前，向test_trigger_log数据表中插入before_insert的日志信息。

```MySQL
DELIMITER $
CREATE TRIGGER before_insert_test_tri
BEFORE INSERT ON test_trigger
BEGIN
INSERT INTO test_trigger_log(t_log) VALUES('before INSERT')
END $
DELIMITER ;
```

定义触发器“salary_check_trigger”，基于员工表“employees”的INSERT事件，在INSERT之前检查 将要添加的新员工薪资是否大于他领导的薪资，如果大于领导薪资，则报sqlstate_value为'HY000'的错 误，从而使得添加失败。

```MySQL
DELIMITER $
CREATE TRIGGER salary_check_trigger
BEFORE INSERT ON employees
BEGIN
	DECLARE mgr_sal DOUBLE;
	# NEW表示我们将要添加的对象，OLD表示我们将要删除的对象
	SELECT salary INTO  mgr_sal FROM employees WHERE employee_id = NEW.manager_id;
	IF NEW.salary > mgr_sal THEN SIGNAL SQLSTATE 'HY000' SET MESSAGE_TEXT = '薪资高于领导薪资错误';
	END
END $
DELIMITER ;
```



## 查看

1. 查看{% span red, 当前数据库 %}中所有触发器的定义

   ```MySQL
   SHOW TRIGGERS;
   SHOW TRIGGERS \G
   ```

2. 查看当前数据库中某个触发器的定义

   ```MySQL
   SHOW CREATE TRIGGERS salary_check_trigger;
   ```

3. 查看所有数据库中的所有触发器

   ```MySQL
   SELECT * FROM information_schema.TRIGGERS;
   ```

## 删除

```MySQL
DROP TRIGGER IF EXISTS after_insert_tri;
```



## 触发器的优缺点

### 优点

1. 触发器可以确保数据的完整性。
2. 触发器可以帮助我们记录操作日志。
3. 触发器还可以用在操作数据前，对数据进行合法性检查。

### 缺点

1. 触发器最大的一个问题就是可读性差。
2. 相关数据的变更，可能会导致触发器出错。



### 注意

注意，如果在子表中定义了外键约束，并且外键指定了ON UPDATE/DELETE CASCADE/SET NULL子句，此 时修改父表被引用的键值或删除父表被引用的记录行时，也会引起子表的修改和删除操作，此时基于子 表的UPDATE和DELETE语句定义的触发器并不会被激活。 

例如：基于子表员工表（t_employee）的DELETE语句定义了触发器t1，而子表的部门编号（did）字段定 义了外键约束引用了父表部门表（t_department）的主键列部门编号（did），并且该外键加了“ON DELETE SET NULL”子句，那么如果此时删除父表部门表（t_department）在子表员工表（t_employee） 有匹配记录的部门记录时，会引起子表员工表（t_employee）匹配记录的部门编号（did）修改为NULL
