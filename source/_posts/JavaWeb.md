---
title: JavaWeb
cover: "https://s2.loli.net/2022/11/21/Sm8lFrjtzUkihVy.webp"
<<<<<<< HEAD
date: 2022-08-22 10:38:00
tags: JAVA
description: JavaWeb的简单记录
categories: JAVA
---



# 1.基本概念

## 1.1、前言

web开发：

- web，网页的意思，www.baidu.com·
- 静态web
  - html,css
  - 提供给所有人看的数据始终不会发生变化！
- 动态web
  - 淘宝，几乎是所有的网站；
  - 提供给所有人看的数据始终会发生变化，每个人在不同的时间，不同的地点看到的信息各不相同！
  - 技术栈：Servlet/JSP，ASP，PHP

## 1.2、web应用程序web应用程序：

可以提供浏览器访问的程序；

- a.html、b.html.….多个web资源，这些web资源可以被外界访问，对外界提供服务；
- 你们能访问到的任何一个页面或者资源，都存在于这个世界的某一个角落的计算机上。
- URL
- 这个统一的web资源会被放在同一个文件夹下，web应用程序>Tomcat：服务器
- 一个web应用由多部分组成（静态web，动态web)
  - html,css,js
  - jsp,servlet
  - Java程序
  - jar包
  - 配置文件（Properties)

Web应用程序编写完毕后，若想提供给外界访问；需要一服务器来统一管理

## 1.3、静态web

- *.htm， *.html这些都是网员的后缀、如果服务器上一直存在这些东西，我们就可以直接进行读取、需要网络；
- ![在这里插入图片描述](https://s2.loli.net/2022/11/04/xq9MJercIh3TFEz.png)
- 静态web存在的缺点
  - Web页面无法动态更新，所有用户看到都是同一个页面
    - 轮播图，点击特效：伪动态
    - JavaScript[实际开发中，它用的最多]
    - VBScript
  - 它无法和数据库交互（数据无法持久化，用户无法交互）

## 1.4、 动态web

页面会动态展示，“web页面的展示效果因人而异”![在这里插入图片描述](https://s2.loli.net/2022/11/04/l9SFJiWIVhXzktn.png)

缺点：

- 加入服务器的动态web资源出现了错误，我们需要重新编写我们的后台程序，重新发布；
  - 停机维护优点：
- Web页面可以动态更新，所有用户看到都不是同一个页面
- 它可以与数据库交互（数据持久化：注册，商品信息，用户信息………）

![在这里插入图片描述](https://s2.loli.net/2022/11/04/Vi3XsJYdFaMk1qC.png)

# 2、web服务器

## 2.1、技术讲解

**ASP:**

- 微软：国内最早流行的就是ASP；
- ·在HTML中嵌入了VB的脚本，ASP+COM；
- ·在ASP开发中，基本一个页面都有几干行的业务代码，页面极其换乱
- ·维护成本高！
- C#
- IIS

**php:**

- PHP开发速度很快，功能很强大，跨平台，代码很简单（70%，WP）
- ·无法承载大访问量的情况（局限性）

**jSP/Servlet:**
B/S；浏览和服务器C/S：客户端和服务器

- sun公司主推的B/S架构
- 基于Java语言的（所有的大公司，或者一些开源的组件，都是用Java写的）
- 可以承载三高问题带来的影响；
- 语法像ASP，ASP->JSP，加强市场强度；

### 2.2、web服务器

服务器是一种被动的操作，用来处理用户的一些请求和给用户一些响应信息；
**lIS**
微软的；ASP.,Windows中自带的
**Tomcat**![在这里插入图片描述](https://s2.loli.net/2022/11/04/3pt9wRzYsJ5oBIX.png)

面向百度编程：

 Tomcat是Apache 软件基金会（Apache Software Foundation)的jakarta项目中的一个核心项目，最新的Servlet 和JSP 规范总是能在Tomcat中得到体现，因为Tomcat 技术先进、性能稳定，而且免费，因而深受lava爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的Web应用服务器。
​ Tomcat 服务器是一个免费的开放源代码的Web应用服务器，属于轻量级应用服务器，在中小型系统和并发访问用户不是很多的场合下被普遍使用，是开发和调试JSP程序的首选。对于一个Java初学web的人来说，它是最佳的选择

**Tomcat** 实际上运行JSP页面和Serlet。

**工作3-5年之后，可以尝试手写Tomcat服务器；**

下载tomcat：

1. 安装or解压
2. 了解配置文件及目录结构
3. 这个东西的作用

# 3、Tomcat

## 3.1安装tomcat tomcat

官网：[http://tomcat.apache.o](http://tomcat.apache.o/)![在这里插入图片描述](https://s2.loli.net/2022/11/04/Hm4rqav91KdOkBT.png)rg/

![20200423183826267](https://s2.loli.net/2022/11/09/6turCalUJwezBhS.png)

## 3.2、Tomcat启动和配置

文件夹作用:![在这里插入图片描述](https://s2.loli.net/2022/11/04/UF4p9C5wMyhKR2B.png)

![img](https://s2.loli.net/2022/11/04/E8YI6zqstHLuOxc.png)

访问测试：http://localhost:8080/
可能遇到的问题：

1. Java环境变量没有配置（到这还不会配的想一想自己的问题）
2. 闪退问题：需要配置兼容性
3. 乱码问题：配置文件中设置

可以修改 conf/logging.properties 中的 java.util.logging.ConsoleHandler.encoding = GBK **解决乱码问题**

## 3.3、配置

![在这里插入图片描述](https://s2.loli.net/2022/11/04/j8zgSCEBKQV2q3k.png)

可以配置启动的端口号

- tomcat的默认端口号为：8080
- mysql:3306
- http:80
- https：443

```xml
<Connector port="8081" protocol="HTTP/1.1"
      connectionTimeout="20000"
      redirectPort="8443" />
```

可以配置主机的名称

- 默认的主机名为：localhost->127.0.0.1
- 默认网站应用存放的位置为：webapps

```xml
  <Host name="www.qinjiang.com"  appBase="webapps"
        unpackWARs="true" autoDeploy="true">
```

> ### **高难度面试题：**
>
> 请你谈谈网站是如何进行访问的！
>
> 改完hosts要在命令提示符窗口输入ipconfig /flushdns 刷新DNS解析缓存

1. 输入一个域名；回车
2. 检查本机的C:\Windows\System32\drivers\etc\hosts配置文件下有没有这个域名映射；
   - 有：直接返回对应的ip地址，这个地址中，有我们需要访问的web程序，可以直接访问
   -  没有：去DNS服务器找，找到的话就返回，找不到就返回找不到；

 ![在这里插入图片描述](https://s2.loli.net/2022/11/04/JZbCOcLs3RHfQX5.png)

4.可以配置一下环境变量（可选性）

## 3.4、发布一个web网站

不会就先模仿

- 将自己写的网站，放到服务器（Tomcat)中指定的web应用的文件夹（webapps)下，就可以访问了

网站应该有的结构

```mipsasm
--webapps ：Tomcat服务器的web目录
	-ROOT
	-kuangstudy ：网站的目录名
		- WEB-INF
			-classes : java程序
			-lib：web应用所依赖的jar包
			-web.xml ：网站配置文件
		- index.html 默认的首页
		- static 
            -css
            	-style.css
            -js
            -img
         -.....
```

HTTP协议：面试
Maven:构建工具

- Maven安装包

Servlet入门

- HelloWorld!
- Servlet配置 ·原理

# 4、Http

## 4.1、什么是HTTP

(超文本传输协议）是一个简单的请求-响应协议，它通常运行在TCP之上。

- 文本：html，字符串，…
- 超文本：图片，音乐，视频，定位，地图.……
- 端口:80

Https:安全的

## 4.2、两个时代

- http1.0
  - HTTP/1.0：客户端可以与web服务器连接后，只能获得一个web资源，断开连接
- http2.0
  - HTTP/1.1：客户端可以与web服务器连接后，可以获得多个web资源。

## 4.3、Http请求

- 客户端–发请求（Request）–服务器

百度：

```armasm
Request URL:https://www.baidu.com/   请求地址
Request Method:GET    get方法/post方法
Status Code:200 OK    状态码：200
Remote（远程） Address:14.215.177.39:443

Accept:text/html  
Accept-Encoding:gzip, deflate, br
Accept-Language:zh-CN,zh;q=0.9    语言
Cache-Control:max-age=0
Connection:keep-alive
```

### 1、请求行

- 请求行中的请求方式：GET
- 请求方式：Get,Post,HEAD,DELETE,PUT,TRACT.…
  - get：请求能够携带的参数比较少，大小有限制，会在浏览器的URL地址栏显示数据内容，不安全，但高效
  - post:请求能够携带的参数没有限制，大小没有限制，不会在浏览器的URL地址栏显示数据内容，安全，但不高效。

### 2、消息头

```bash
Accept：告诉浏览器，它所支持的数据类型
Accept-Encoding：支持哪种编码格式  GBK   UTF-8   GB2312  ISO8859-1
Accept-Language：告诉浏览器，它的语言环境
Cache-Control：缓存控制
Connection：告诉浏览器，请求完成是断开还是保持连接
HOST：主机..../.
```

### 4.4、Http响应

- 服务器–响应…….客户端

百度：

```makefile
Cache-Control:private    缓存控制
Connection:Keep-Alive    连接
Content-Encoding:gzip    编码
Content-Type:text/html   类型  
```

### 1、响应体

```bash
Accept：告诉浏览器，它所支持的数据类型
Accept-Encoding：支持哪种编码格式  GBK   UTF-8   GB2312  ISO8859-1
Accept-Language：告诉浏览器，它的语言环境
Cache-Control：缓存控制
Connection：告诉浏览器，请求完成是断开还是保持连接
HOST：主机..../.
Refresh：告诉客户端，多久刷新一次；
Location：让网页重新定位；
```

### 2、响应状态码

200：请求响应成功200
3xx:请求重定向·重定向：你重新到我给你新位置去；
4xx:找不到资源404·资源不存在；
5xx:服务器代码错误 500 502:网关错误

> ### **常见面试题：**
>
> 当你的浏览器中地址栏输入地址并回车的一瞬间到页面能够展示回来，经历了什么？

# 5、Maven

**我为什么要学习这个技术？**

1. 在Javaweb开发中，需要使用大量的jar包，我们手动去导入；
2. 如何能够让一个东西自动帮我导入和配置这个jar包。

由此，Maven诞生了！

## 5.1 Maven项目架构管理工具

我们目前用来就是方便导入jar包的！
Maven的核心思想：**约定大于配置**

- 有约束，不要去违反。

Maven会规定好你该如何去编写我们Java代码，必须要按照这个规范来；

## 5.2下载安装Maven

官网：https://maven.apache.org/

![在这里插入图片描述](https://s2.loli.net/2022/11/04/LqegQHW4Zw8slJP.png)

下载完成后，解压即可；
小狂神友情建议：电脑上的所有环境都放在一个文件夹下，方便管理；

## 5.3配置环境变量

在我们的系统环境变量中配置如下配置：

- M2_HOME maven目录下的bin目录
- MAVEN_HOME maven的目录
- 在系统的path中配置%MAVEN_HOME%\bin

![在这里插入图片描述](https://s2.loli.net/2022/11/04/1cQbHeWswyu7nJY.png)

- 测试Maven是否安装成功，保证必须配置完毕！

### 5.4阿里云镜像

- 镜像：mirrors
- 作用：加速我们的下载
- 国内建议使用阿里云的镜像

![

```xml
<mirror>
    <id>nexus-aliyun</id>  
    <mirrorOf>*,!jeecg,!jeecg-snapshots</mirrorOf>  
    <name>Nexus aliyun</name>  
    <url>http://maven.aliyun.com/nexus/content/groups/public</url> 
</mirror>
```

]()

**D:Enmvironment\apache-maven-3.6.2conf\settings.xml**
（狂神老师配置源和仓库的文件位置）

## 5.5本地仓库

在本地的仓库，远程仓库； 建立一个本地仓库：localRepository

```xml
<localRepository>D:\Environment\apache-maven-3.6.2\maven-repo</localRepository>
```

## 5.5-。。。在IDEA中使用Maven

- ### [1![W4hm0H.png](https://s2.loli.net/2022/11/04/lzVHrObw3F7nv6R.png)](https://imgtu.com/i/W4hm0H)

- ### [2![2](https://s2.loli.net/2022/11/04/vnjHctzDLgkABiX.png)](https://imgtu.com/i/W44CDg)

- ### [3![W447R0.png](https://s2.loli.net/2022/11/04/Dx6l2XqCZGYzKMP.png)](https://imgtu.com/i/W447R0)

**看到Enable Auto-Import就点自动导包就OK了**

- [![W4T1OK.png](https://s2.loli.net/2022/11/04/R8x1jYz47bcnZlE.png)](https://imgtu.com/i/W4T1OK)

- [![W4oPbD.png](https://s2.loli.net/2022/11/04/2z1L7RKIG9XnTNk.png)](https://imgtu.com/i/W4oPbD)

- [![W4TBOf.png](https://s2.loli.net/2022/11/04/vgk1J9sEfd2tjib.png)](https://imgtu.com/i/W4TBOf)

- [![W4HYRA.png](https://s2.loli.net/2022/11/04/lu7d1HLace6Rfkv.png)](https://imgtu.com/i/W4HYRA)

- [![W4bPSA.png](https://s2.loli.net/2022/11/04/vCZQUiPzrKsMWdG.png)](https://imgtu.com/i/W4bPSA)

  然后运行，就这样了，这几个都是基础，学过应该也忘不了

  > 在build中配置resources，来防止我们资源导出失败的问题
  >
  > https://www.cnblogs.com/pixy/p/4798089.html

```xml
<plugin>
            <artifactId>maven-resources-plugin</artifactId>
            <version>2.5</version>
            <executions>
                <execution>
                    <id>copy-xmls</id>
                    <phase>process-sources</phase>
                    <goals>
                        <goal>copy-resources</goal>
                    </goals>
                    <configuration>
                        <outputDirectory>${basedir}/target/classes</outputDirectory>
                        <resources>
                            <resource>
                                <directory>${basedir}/src/main/java</directory>
                                <includes>
                                    <include>**/*.xml</include>
                                </includes>
                            </resource>
                        </resources>
                    </configuration>
                </execution>
            </executions>
        </plugin>
        
```

## 5.6pom文件

> ### pow.xml 是Maven的核心配置文件
>
> （百度）在maven仓库中想要什么就下载什么依赖就好了

# 6、Servlet

## 6.1、Servlet简介

- Servlet就是sun公司开发动态web的一门技术
- Sun在这些APi中提供一个接口叫做：Servlet，如果你想开发一个Servlet程序，只需要完成两个小步骤：
  - 编写一个类，实现Serlet接口
  - 把开发好java类部署到web服务器中。

**把实现了Servlet接口的Java程序叫做，Servlet**

## 6.2、HelloServlet

> Serlvet接口Sun公司有两个默认的实现类：HttpServlet，GenericServled

1. 构建一个普通的Maven项目，等理面的sc目录，以后我们的学习就在这个项目里面建立Moudel；这个空的工程就题Maven主工程；

2. 关于Maven父子工程的理解；
   父项目中会有

   servlet-01

子项目会有

```xml
    <parent>
        <artifactId>javaweb-02-servlet</artifactId>
        <groupId>com.kuang</groupId>
        <version>1.0-SNAPSHOT</version>
    </parent>
```

父项目中的java子项目可以直接使用

```java
就像这样子  son extends father
```

1. Maven环境优化

   1. 修改web.xml为最新的
   2. 将maven的结构搭建完整
      .

2. 编写一个Servlet程序

    1.编写一个普通类
   ​ 2.实现Servlet接口，这里我们直接继承HttpServlet

```java
     public class HelloServlet extends HttpServlet {
         
         //由于get或者post只是请求实现的不同的方式，可以相互调用，业务逻辑都一样；
         @Override
         protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
             //ServletOutputStream outputStream = resp.getOutputStream();
             PrintWriter writer = resp.getWriter(); //响应流
             writer.print("Hello,Serlvet");
         }
     
         @Override
         protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
             doGet(req, resp);
         }
     }
     
```

- 5.编写Servlet的映射
  为什么需要映射：我们写的是JAVA程序，但是要通过浏览器访问，而浏览器需要连接web服务器，所以我们需要再web服务中注册我们写的Servlet，还需给他一个浏览器能够访问的路径；

```xml
      <!--注册Servlet-->
      <servlet>
          <servlet-name>hello</servlet-name>
          <servlet-class>com.kuang.servlet.HelloServlet</servlet-class>
      </servlet>
      <!--Servlet的请求路径-->
      <servlet-mapping>
          <servlet-name>hello</servlet-name>
          <url-pattern>/hello</url-pattern>
      </servlet-mapping>
  
```

- 6.配置Tomcat

  注意：配置项目发布的路径就可以了

  - 前面写过了

![在这里插入图片描述](https://s2.loli.net/2022/11/04/K8GfqRcO2FhgwkV.png)

- 7。启动测试（运行就好了）
  - 问题1：
    - 500错误，tomcat10版本不兼容问题，服务降级就好（tomcat9）
    - https://blog.csdn.net/qq_43682690/article/details/109364514
  - 问题2：
    - 确定操作无误，没有target目录
    - [![WIZPDP.png](https://s2.loli.net/2022/11/04/bQvEJBKaOU1wAZs.png)](https://imgtu.com/i/WIZPDP)
  - 问题3：
    - 没有lib
    - 去吧**工程**下的pom.xml里面依赖的`<scope>provided</scope>`（作用域）删掉
    - 我的问题就这几个

## 6.3、Servlet原理

Servlet是由Web服务器调用，web服务器在收到浏览器请求之后，会：

[![WIuGe1.png](https://s2.loli.net/2022/11/04/anBkNhUCOIWuJQA.png)](https://imgtu.com/i/WIuGe1)

[![WIubkV.png](https://s2.loli.net/2022/11/04/ufUgk5r4jSdHI3A.png)](https://imgtu.com/i/WIubkV)

## 6.4、Mapping问题

- 一个Servlet可以指定一个映射路径

```xml
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello</url-pattern>
  </servlet-mapping>
```

一个servlet可以指定多个映射路径

```xml
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello</url-pattern>
  </servlet-mapping>
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello2</url-pattern>
  </servlet-mapping>
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello3</url-pattern>
  </servlet-mapping>
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello4</url-pattern>
  </servlet-mapping>
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello5</url-pattern>
  </servlet-mapping>
```

- 一个servlet可以指定通用映射路径

```xml
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>/hello/*</url-pattern>
  </servlet-mapping>
```

- 默认请求路径

```xml
   <!--默认请求路径-->
   <servlet-mapping>
       <servlet-name>hello</servlet-name>
       <url-pattern>/*</url-pattern>
   </servlet-mapping>
```

- 指定一些后缀或者前缀等等…

```xml
  <!--可以自定义后缀实现请求映射
      注意点，*前面不能加项目映射的路径
      hello/sajdlkajda.qinjiang
      -->
  <servlet-mapping>
      <servlet-name>hello</servlet-name>
      <url-pattern>*.qinjiang</url-pattern>
  </servlet-mapping>
```

- 优先级问题
  指定了固有的映射路径优先级最高，如果找不到就会走默认的处理请求；

```xml
  <!--404-->
  <servlet>
      <servlet-name>error</servlet-name>
      <servlet-class>com.kuang.servlet.ErrorServlet</servlet-class>
  </servlet>
  <servlet-mapping>
      <servlet-name>error</servlet-name>
      <url-pattern>/*</url-pattern>
  </servlet-mapping>
```

## 6.5、ServletContext

 web容器在启动的时候，它会为每个web程序都创建一个对应的ServletContext对象，它代表了当前的web应用；

### 1、共享数据

**我在这个Servlet中保存的数据，可以在另外一个servlet中拿到；**

> IDEA的bin目录下的idea64.exe.vmoptions。在里面加上-Dfile.encoding=UTF-8
>
> resp.setContentType("tect/html;charset=utf-8");2行合并写的话，名字会直接下载出来。分开写就不会了。
>
> 没有的可以参考下：https://www.cnblogs.com/raomingchang/p/14038009.html

```java
public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        //this.getInitParameter()   初始化参数
        //this.getServletConfig()   Servlet配置
        //this.getServletContext()  Servlet上下文
        ServletContext context = this.getServletContext();

        String username = "天色已晚"; //数据
        context.setAttribute("username",username); //将一个数据保存在了ServletContext中，名字为：username 。值 username

    }

}
public class GetServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        ServletContext context = this.getServletContext();
        String username = (String) context.getAttribute("username");

        resp.setContentType("text/html");
        resp.setCharacterEncoding("utf-8");
        resp.getWriter().print("名字"+username);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
    <servlet>
        <servlet-name>hello</servlet-name>
        <servlet-class>com.kuang.servlet.HelloServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>hello</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>


    <servlet>
        <servlet-name>getc</servlet-name>
        <servlet-class>com.kuang.servlet.GetServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>getc</servlet-name>
        <url-pattern>/getc</url-pattern>
    </servlet-mapping>
```

测试访问结果；

### 2、获取初始化参数

```xml
    <!--配置一些web应用初始化参数-->
    <context-param>
        <param-name>url</param-name>
        <param-value>jdbc:mysql://localhost:3306/mybatis</param-value>
    </context-param>
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    ServletContext context = this.getServletContext();
    String url = context.getInitParameter("url");
    resp.getWriter().print(url);
}
```

### 3、请求转发

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    ServletContext context = this.getServletContext();
    System.out.println("进入了ServletDemo04");
    //RequestDispatcher requestDispatcher = context.getRequestDispatcher("/gp"); //转发的请求路径
    //requestDispatcher.forward(req,resp); //调用forward实现请求转发；
    context.getRequestDispatcher("/gp").forward(req,resp);
}
```

### ![在这里插入图片描述](https://s2.loli.net/2022/11/04/Fc9JHSZdrOGQyMP.png)

### 4、读取资源文件

Properties

- 在java目录下新建properties
- 在resources目录下新建properties

发现：都被打包到了同一个路径下：classes，我们俗称这个路径为classpath:
思路：需要一个文件流

```ini
username=root12312
password=zxczxczxc
public class ServletDemo05 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        InputStream is = this.getServletContext().getResourceAsStream("/WEB-INF/classes/com/kuang/servlet/aa.properties");

        Properties prop = new Properties();
        prop.load(is);
        String user = prop.getProperty("username");
        String pwd = prop.getProperty("password");

        resp.getWriter().print(user+":"+pwd);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
```

访问测试即可ok;

## 6.6、HttpServletResponse

> web服务器接收到客户端的http请求，针对这个请求，分别创建一个
>
> 代表请求的HttpServletRequest对象，
>
> 代表响应的一个HttpServletResponse；

- 如果要获取客户端请求过来的参数：找HttpServletRequest
- 如果要给客户端响应一些信息：找HttpServletResponse

### 1、简单分类

负责向浏览器发送数据的方法

```java
 servletOutputstream getOutputstream() throws IOException;
    Printwriter getwriter() throws IOException;
```

负责向浏览器发送响应头的方法

```java
void setCharacterEncoding(String var1)；
void setContentLength(int var1)；
void setContentLengthLong(long var1);
void setContentType(String var1)；
void setDateHeader(String varl,long var2)
void addDateHeader(String var1,long var2)
void setHeader(String var1,String var2);
void addHeader(String var1,String var2)；
void setIntHeader(String var1,int var2);
void addIntHeader(String varl,int var2);
```

响应的状态码

![在这里插入图片描述](https://s2.loli.net/2022/11/09/SWngYF56PIs8fJE.png)

![在这里插入图片描述](https://s2.loli.net/2022/11/09/Zo6dLKpS5Vl3RCW.png)

### 2、下载文件

1. 向浏览器输出消息（一直在讲，就不说了）
2. 下载文件
   1. 要获取下载文件的路径
   2. 下载的文件名是啥？
   3. 设置想办法让浏览器能够支持下载我们需要的东西
   4. 获取下载文件的输入流
   5. 创建缓冲区
   6. 获取OutputStream对象
   7. 将FileOutputStream流写入到bufer缓冲区
   8. 使用OutputStream将缓冲区中的数据输出到客户端！

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 1. 要获取下载文件的路径
    String realPath = "D:\Users\Administrator\IdeaProjects\kuangshen\javaweb-05-servlet\servlet3\src\img\天红.jpg";
    System.out.println("下载文件的路径："+realPath);
    // 2. 下载的文件名是啥？
    String fileName = realPath.substring(realPath.lastIndexOf("\\") + 1);
    // 3. 设置想办法让浏览器能够支持(Content-Disposition)下载我们需要的东西,中文文件名URLEncoder.encode编码，否则有可能乱码
    resp.setHeader("Content-Disposition","attachment;filename="+URLEncoder.encode(fileName,"UTF-8"));
    // 4. 获取下载文件的输入流
    FileInputStream in = new FileInputStream(realPath);
    // 5. 创建缓冲区
    int len = 0;
    byte[] buffer = new byte[1024];
    // 6. 获取OutputStream对象
    ServletOutputStream out = resp.getOutputStream();
    // 7. 将FileOutputStream流写入到buffer缓冲区,使用OutputStream将缓冲区中的数据输出到客户端！
    while ((len=in.read(buffer))>0){
        out.write(buffer,0,len);
    }

    in.close();
    out.close();
}
```

### 3. 验证码功能

验证怎么来的?

- 前端实现
- 后端实现，需要用到Java的图片类，生产一个图片

```java
package com.kuang.servlet;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.Random;

public class ImageServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        //如何让浏览器3秒自动刷新一次;
        resp.setHeader("refresh","3");
        
        //在内存中创建一个图片
        BufferedImage image = new BufferedImage(80,20,BufferedImage.TYPE_INT_RGB);
        //得到图片
        Graphics2D g = (Graphics2D) image.getGraphics(); //笔
        //设置图片的背景颜色
        g.setColor(Color.white);
        g.fillRect(0,0,80,20);
        //给图片写数据
        g.setColor(Color.BLUE);
        g.setFont(new Font(null,Font.BOLD,20));
        g.drawString(makeNum(),0,20);

        //告诉浏览器，这个请求用图片的方式打开
        resp.setContentType("image/jpeg");
        //网站存在缓存，不让浏览器缓存
        resp.setDateHeader("expires",-1);
        resp.setHeader("Cache-Control","no-cache");
        resp.setHeader("Pragma","no-cache");

        //把图片写给浏览器
        ImageIO.write(image,"jpg", resp.getOutputStream());

    }

    //生成随机数
    private String makeNum(){
        Random random = new Random();
        String num = random.nextInt(9999999) + "";
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 7-num.length() ; i++) {
            sb.append("0");
        }
        num = sb.toString() + num;
        return num;
    }


    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
<servlet>
	<servlet-name>ImageServlet</servlet-name>
	<servlet-class>com.kuang.servlet.ImageServlet</servlet-class>
</servlet>
<servlet-mapping>
	<servlet-name>Imageservlet</servlet-name>
	<url-pattern>/img</url-pattern>
</servlet-mapping>
```

### 4.实现重定向![img](https://s2.loli.net/2022/11/04/MuADfBYFiIer9dw.png)

常见场景:

- 用户登录

> ```java
> void sendRedirect(String var1) throws IOException;
> ```

测试：

```java
@override
protected void doGet(HttpservletRequest req, HttpservletResponse resp) throws ServletException, IOException {

    resp. sendRedirect("/img");//重定向
    /*
    resp. setHeader("Location","/r/img");
    resp. setstatus (302);
    *
}
```

![在这里插入图片描述](https://s2.loli.net/2022/11/04/KzsY8VRBTPWnNdX.png)

![在这里插入图片描述](https://s2.loli.net/2022/11/04/Fc9JHSZdrOGQyMP.png)

**index.jsp**

```jsp
<html>
<body>
<h2>Hel1o World!</h2>
<%@ page contentType="text/html; charset=UTF-8"%>

<%--这里超交的路径,需要寻找到项目的路径--%>
<%--${pageContext. request, contextPath}代表当前的项目--%>
<form action="${pageContext.request.contextPath}/login" method="get">
    用户名: <input type="text" name="username"> <br>
    密码: <input type="password" name="password"> <br>
    <input type="submit">
</form>

</body>
</html>
```

**RequestTest.java**

```java
public class RequestTest extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //处理方求
    String username = req.getParameter( s: "username");
    String password  rea.getParameter( s: "password");

    System.out.println(username+":"+password);

    resp.sendRedirect(s: "/success.jsp");
}
```

**重定向页面success.jsp**

```jsp
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<html>
    <head>
	    <title>Title</title>
	    </head>
    <body>
    	<h1>success</h1>
    </body>
</html>
```

**web.xml配置**

```xml
    <servlet>
    <servlet-name>requset</servlet-name>
    <servlet-class>com. kuang. servlet. RequestTest</servlet-class>
    </servlet>
    <servlet-mapping>
    <servlet-name>requset</servlet-name>
    <url-pattern>/login</url-pattern>
    </servlet-mapping>
```

**导入依赖的jar包**

```xml
    <dependencies>
    <!-- https://mvnrepository. com/artifact/javax. servLet/javax. servlet-opi -->
    <dependency>
    <groupld>javax.servlet</grouptd>
    <artifactId>javax. servlet-api</artifactId>
    <version>4.0.1</version>
    </dependency>
    <!-- https://mvnrepository.com/artifact/javax. servLet.jsp/javax. servLet.jsp-opi -->
    <dependency>
    <groupId>javax.servlet.jsp</groupld>
    <artifactId>javax. servlet.jsp-api</artifactId>
    <version>2.3.3</version>
    </dependency>
    </dependencies>
    </project>
```

## 6.7、HttpServletRequest

 HttpServletRequest代表客户端的请求,用户通过Http协议访问服务器, HTTP请求中的所有信息会被封装到HttpServletRequest,通过这个HttpServletRequest的方法,获得客户端的所有信息;
![在这里插入图片描述](https://s2.loli.net/2022/11/04/xCR4mjP1bNtWZIc.png)

![在这里插入图片描述](https://s2.loli.net/2022/11/04/WEZ1ypAQRcNPUrK.png)

#### 获取参数,请求转发

![在这里插入图片描述](https://s2.loli.net/2022/11/04/1hVe6LDOlUBCN3m.png)

index.jsp

```jsp
<html>
<body>
<h2>Hel1o World!</h2>
<%@ page contentType="text/html; charset=UTF-8"%>

<%--这里超交的路径,需要寻找到项目的路径--%>
<%--${pageContext. request, contextPath}代表当前的项目--%>
<div style="text-align: center">
    <form action="${pageContext.request.contextPath}/login" method="post">
        用户名: <input type="text" name="username"> <br>
        密码: <input type="password" name="password"> <br>
        爱好：
        <input type="checkbox" name="hobbys" value="女孩">女孩
        <input type="checkbox" name="hobbys" value="游戏">游戏
        <input type="checkbox" name="hobbys" value="代码">代码
        <input type="checkbox" name="hobbys" value="打劫">打劫
        <br>
        <input type="submit">
    </form>

</div>


</body>
</html>
  <servlet>
    <servlet-name>rd</servlet-name>
    <servlet-class>com.kuang.servlet.rd</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>rd</servlet-name>
    <url-pattern>/login</url-pattern>
  </servlet-mapping>
</web-app>
```

**自己创建类，且需要继承HttpServlet类**

```java
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");


        resp.setCharacterEncoding("utf-8");
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String[] hobbys = req.getParameterValues("hobbys");
        System.out.println("==========");
        //后台接收中文乱码问题
        System. out.println(username);
        System. out.println(password);
//        System. out.println(Arrays.toString(hobbys));
        System.out.println(Arrays.toString(hobbys));
        System. out.println("============");
        System. out.println(req.getContextPath());
        //通过请求转发
        //这里的/代表当前的web应用
        req.getRequestDispatcher("/success.jsp").forward(req,resp);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
    
    
```

![在这里插入图片描述](https://s2.loli.net/2022/11/04/JSupnC4b3wzDXrH.png)

# 7、Cookie、Session

## 7.1、会话

**会话**：用户打开一个浏览器，点击了很多超链接，访问多个web资源，关闭浏览器，这个过程可以称之为会话；

**有状态会话**：一个同学来过教室，下次再来教室，我们会知道这个同学，曾经来过，称之为有状态会话；

**你能怎么证明你是西开的学生？**

你 西开

1. 发票 西开给你发票
2. 学校登记 西开标记你来过了

**一个网站，怎么证明你来过？**

客户端 服务端

1. 服务端给客户端一个 信件，客户端下次访问服务端带上信件就可以了； cookie
2. 服务器登记你来过了，下次你来的时候我来匹配你； seesion

## 7.2、保存会话的两种技术

**cookie**

- 客户端技术 （响应，请求）

**session**

- 服务器技术，利用这个技术，可以保存用户的会话信息？ 我们可以把信息或者数据放在Session中！

常见常见：网站登录之后，你下次不用再登录了，第二次访问直接就上去了！

## 7.3、Cookie

![在这里插入图片描述](https://s2.loli.net/2022/11/04/s7Y9Zv4DFkOUKoM.png)

1. 从请求中拿到cookie信息
2. 服务器响应给客户端cookie

```java
Cookie[] cookies = req.getCookies(); //获得Cookie
cookie.getName(); //获得cookie中的key
cookie.getValue(); //获得cookie中的vlaue
new Cookie("lastLoginTime", System.currentTimeMillis()+""); //新建一个cookie
cookie.setMaxAge(24*60*60); //设置cookie的有效期
resp.addCookie(cookie); //响应给客户端一个cookie
```

**cookie：一般会保存在本地的 用户目录下 appdata；**
一个网站cookie是否存在上限！**聊聊细节问题**

- 一个Cookie只能保存一个信息；
- 一个web站点可以给浏览器发送多个cookie，最多存放20个cookie；
- Cookie大小有限制4kb；
- 300个cookie浏览器上限

**删除Cookie；**

- 不设置有效期，关闭浏览器，自动失效；
- 设置有效期时间为 0 ；

**编码解码：**

```java
URLEncoder.encode("秦疆","utf-8")
URLDecoder.decode(cookie.getValue(),"UTF-8")
```

## ***7.4、Session（重点）*****

![在这里插入图片描述](https://s2.loli.net/2022/11/04/Q8sPDcaZ1BLn4YW.png)

![在这里插入图片描述](https://s2.loli.net/2022/11/04/Q8sPDcaZ1BLn4YW.png)
什么是Session：

- 服务器会给每一个用户（浏览器）创建一个Session对象；
- 一个Session独占一个浏览器，只要浏览器没有关闭，这个Session就存在；
- 用户登录之后，整个网站它都可以访问！–> 保存用户的信息；保存购物车的信息……

Session和cookie的区别：

- Cookie是把用户的数据写给用户的浏览器，浏览器保存 （可以保存多个）
- Session把用户的数据写到用户独占Session中，服务器端保存 （保存重要的信息，减少服务器资源的浪费）
- Session对象由服务创建；

使用场景：

- 保存一个登录用户的信息；
- 购物车信息；
- 在整个网站中经常会使用的数据，我们将它保存在Session中；

使用Session：

```java
package com.kuang.servlet;

import com.kuang.pojo.Person;

import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;

public class SessionDemo01 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        //解决乱码问题
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html;charset=utf-8");
        
        //得到Session
        HttpSession session = req.getSession();
        //给Session中存东西
        session.setAttribute("name",new Person("秦疆",1));
        //获取Session的ID
        String sessionId = session.getId();

        //判断Session是不是新创建
        if (session.isNew()){
            resp.getWriter().write("session创建成功,ID:"+sessionId);
        }else {
            resp.getWriter().write("session以及在服务器中存在了,ID:"+sessionId);
        }

        //Session创建的时候做了什么事情；
//        Cookie cookie = new Cookie("JSESSIONID",sessionId);
//        resp.addCookie(cookie);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doGet(req, resp);
    }
}
//得到Session
HttpSession session = req.getSession();
Person person = (Person) session.getAttribute("name");
System.out.println(person.toString());

HttpSession session = req.getSession();
session.removeAttribute("name");
//手动注销Session
session.invalidate();
```

**会话自动过期：web.xml配置**

```xml
<!--设置Session默认的失效时间-->
<session-config>
    <!--15分钟后Session自动失效，以分钟为单位-->
    <session-timeout>15</session-timeout>
</session-config>
```

![在这里插入图片描述](https://s2.loli.net/2022/11/04/CnmiUDHqutcxY84.png)

# 8、JSP

## 8.1、什么是JSP

Java Server Pages ： Java服务器端页面，也和Servlet一样，用于动态Web技术！

最大的特点：

- 写JSP就像在写HTML
- 区别：
  - HTML只给用户提供静态的数据
  - JSP页面中可以嵌入JAVA代码，为用户提供动态数据；

## 8.2、JSP原理

思路：JSP到底怎么执行的！

- 代码层面没有任何问题

- 服务器内部工作

  tomcat中有一个work目录；

  IDEA中使用Tomcat的会在IDEA的tomcat中生产一个work目录

![在这里插入图片描述](https://s2.loli.net/2022/11/04/pQJYocZtqeILsUx.png)

我电脑的地址： C:\Users\Administrator.IntelliJIdea2018.1\system\tomcat\Unnamed_javaweb-session-cookie\work\Catalina\localhost\ROOT\org\apache\jsp 发现页面转变成了Java程序！

我电脑的地址：

**C:\Users\Administrator.IntelliJIdea2018.1\system\tomcat\Unnamed_javaweb-session-cookie\work\Catalina\localhost\ROOT\org\apache\jsp**

发现页面转变成了Java程序！

**浏览器向服务器发送请求，不管访问什么资源，其实都是在访问Servlet！**

JSP最终也会被转换成为一个Java类！

**JSP 本质上就是一个Servlet**

```java
//初始化
  public void _jspInit() {
      
  }
//销毁
  public void _jspDestroy() {
  }
//JSPService
  public void _jspService(.HttpServletRequest request,HttpServletResponse response)
```

- 判断请求
- 内置一些对象

```java
final javax.servlet.jsp.PageContext pageContext;  //页面上下文
javax.servlet.http.HttpSession session = null;    //session
final javax.servlet.ServletContext application;   //applicationContext
final javax.servlet.ServletConfig config;         //config
javax.servlet.jsp.JspWriter out = null;           //out
final java.lang.Object page = this;               //page：当前
HttpServletRequest request                        //请求
HttpServletResponse response                      //响应
```

- 输出页面前增加的代码

```java
response.setContentType("text/html");       //设置响应的页面类型
pageContext = _jspxFactory.getPageContext(this, request, response,
       null, true, 8192, true);
_jspx_page_context = pageContext;
application = pageContext.getServletContext();
config = pageContext.getServletConfig();
session = pageContext.getSession();
out = pageContext.getOut();
_jspx_out = out;
```

- 以上的这些个对象我们可以在JSP页面中直接使用！

![在这里插入图片描述](https://s2.loli.net/2022/11/04/M4tLgpYBoXHdrz5.png)

在JSP页面中；

只要是 JAVA代码就会原封不动的输出；

如果是HTML代码，就会被转换为：

```swift
out.write("<html>\r\n");
```

这样的格式，输出到前端！

## 8.3、JSP基础语法

任何语言都有自己的语法，JAVA中有,。 JSP 作为java技术的一种应用，它拥有一些自己扩充的语法（了解，知道即可！），Java所有语法都支持！

### JSP表达式

```jsp
  <%--JSP表达式
  作用：用来将程序的输出，输出到客户端
  <%= 变量或者表达式%>
  --%>
  <%= new java.util.Date()%>
```

### jsp脚本片段

```jsp
  <%--jsp脚本片段--%>
  <%
    int sum = 0;
    for (int i = 1; i <=100 ; i++) {
      sum+=i;
    }
    out.println("<h1>Sum="+sum+"</h1>");
  %>
```

### **脚本片段的再实现**

```jsp
  <%
    int x = 10;
    out.println(x);
  %>
  <p>这是一个JSP文档</p>
  <%
    int y = 2;
    out.println(y);
  %>

  <hr>


  <%--在代码嵌入HTML元素--%>
  <%
    for (int i = 0; i < 5; i++) {
  %>
    <h1>Hello,World  <%=i%> </h1>
  <%
    }
  %>
```

### JSP声明

```jsp
  <%!
    static {
      System.out.println("Loading Servlet!");
    }

    private int globalVar = 0;

    public void kuang(){
      System.out.println("进入了方法Kuang！");
    }
  %>
```

JSP声明：会被编译到JSP生成Java的类中！其他的，就会被生成到_jspService方法中！

在JSP，嵌入Java代码即可！

```jsp
<%%>
<%=%>
<%!%>

<%--注释--%>
```

## 8.4、JSP指令

```jsp
<%@page args.... %>
<%@include file=""%>

<%--@include会将两个页面合二为一--%>

<%@include file="common/header.jsp"%>
<h1>网页主体</h1>

<%@include file="common/footer.jsp"%>

<hr>


<%--jSP标签
    jsp:include：拼接页面，本质还是三个
    --%>
<jsp:include page="/common/header.jsp"/>
<h1>网页主体</h1>
<jsp:include page="/common/footer.jsp"/>
```

## 8.5、9大内置对象

- PageContext 存东西
- Request 存东西
- Response
- Session 存东西
- Application 【SerlvetContext】 存东西
- config 【SerlvetConfig】
- out
- page ，不用了解
- exception

```jsp
pageContext.setAttribute("name1","他化1号"); //保存的数据只在一个页面中有效
request.setAttribute("name2","他化2号"); //保存的数据只在一次请求中有效，请求转发会携带这个数据
session.setAttribute("name3","他化3号"); //保存的数据只在一次会话中有效，从打开浏览器到关闭浏览器
application.setAttribute("name4","他化4号");  //保存的数据只在服务器中有效，从打开服务器到关闭服务器
```

![img](https://s2.loli.net/2022/11/04/tCZ4V8n7WUwpjGl.png)

**request**：客户端向服务器发送请求，产生的数据，用户看完就没用了，比如：新闻，用户看完没用的！
**session**：客户端向服务器发送请求，产生的数据，用户用完一会还有用，比如：购物车；
**application**：客户端向服务器发送请求，产生的数据，一个用户用完了，其他用户还可能使用，比如：聊天数据；

## 8.6、JSP标签、JSTL标签、EL表达式

```xml
<!-- JSTL表达式的依赖 -->
<dependency>
    <groupId>javax.servlet.jsp.jstl</groupId>
    <artifactId>jstl-api</artifactId>
    <version>1.2</version>
</dependency>
<!-- standard标签库 -->
<dependency>
    <groupId>taglibs</groupId>
    <artifactId>standard</artifactId>
    <version>1.1.2</version>
</dependency>
```

### EL表达式： ${ }

- **获取数据**
- **执行运算**
- **获取web开发的常用对象**

### **JSP标签**

```jsp
<%--jsp:include--%>

<%--
http://localhost:8080/jsptag.jsp?name=kuangshen&age=12
--%>

<jsp:forward page="/jsptag2.jsp">
    <jsp:param name="name" value="kuangshen"></jsp:param>
    <jsp:param name="age" value="12"></jsp:param>
</jsp:forward>
```

### **JSTL表达式**

JSTL标签库的使用就是为了弥补HTML标签的不足；它自定义许多标签，可以供我们使用，标签的功能和Java代码一样！

**格式化标签**

**SQL标签**

**XML 标签**

**核心标签** （掌握部分）

![在这里插入图片描述](https://s2.loli.net/2022/11/04/CQVrOdXsZYice13.png)

### **JSTL标签库使用步骤**

- 引入对应的 taglib
- 使用其中的方法
- **在Tomcat 也需要引入 jstl的包，否则会报错：JSTL解析错误**

#### **c：if**

```jsp
<head>
    <title>Title</title>
</head>
<body>


<h4>if测试</h4>

<hr>

<form action="coreif.jsp" method="get">
    <%--
    EL表达式获取表单中的数据
    ${param.参数名}
    --%>
    <input type="text" name="username" value="${param.username}">
    <input type="submit" value="登录">
</form>

<%--判断如果提交的用户名是管理员，则登录成功--%>
<c:if test="${param.username=='admin'}" var="isAdmin">
    <c:out value="管理员欢迎您！"/>
</c:if>

<%--自闭合标签--%>
<c:out value="${isAdmin}"/>

</body>
```

#### **c:choose c:when**

```jsp
<body>

<%--定义一个变量score，值为85--%>
<c:set var="score" value="55"/>

<c:choose>
    <c:when test="${score>=90}">
        你的成绩为优秀
    </c:when>
    <c:when test="${score>=80}">
        你的成绩为一般
    </c:when>
    <c:when test="${score>=70}">
        你的成绩为良好
    </c:when>
    <c:when test="${score<=60}">
        你的成绩为不及格
    </c:when>
</c:choose>

</body>
```

#### **c:forEach**

```jsp
<%

    ArrayList<String> people = new ArrayList<>();
    people.add(0,"张三");
    people.add(1,"李四");
    people.add(2,"王五");
    people.add(3,"赵六");
    people.add(4,"田六");
    request.setAttribute("list",people);
%>


<%--
var , 每一次遍历出来的变量
items, 要遍历的对象
begin,   哪里开始
end,     到哪里
step,   步长
--%>
<c:forEach var="people" items="${list}">
    <c:out value="${people}"/> <br>
</c:forEach>

<hr>

<c:forEach var="people" items="${list}" begin="1" end="3" step="1" >
    <c:out value="${people}"/> <br>
</c:forEach>
```

# 9、JavaBean

实体类

JavaBean有特定的写法：

- 必须要有一个无参构造
- 属性必须私有化
- 必须有对应的get/set方法；

一般用来和数据库的字段做映射 ORM；

ORM ：对象关系映射

- 表—>类
- 字段–>属性
- 行记录---->对象

**people表**

| id   | name    | age  | address |
| ---- | ------- | ---- | ------- |
| 1    | 他化1号 | 3    | 天津    |
| 2    | 他化2号 | 18   | 天津    |
| 3    | 他化3号 | 100  | 天津    |

```java
class People{
    private int id;
    private String name;
    private int id;
    private String address;
}

class A{
    new People(1,"他化1号",3，"天津");
    new People(2,"他化2号",3，"天津");
    new People(3,"他化3号",3，"天津");
}
```

- 过滤器
- 文件上传
- 邮件发送
- JDBC 复习 ： 如何使用JDBC , JDBC crud， jdbc 事务

# 10、MVC三层架构

- 什么是MVC： Model view Controller 模型、视图、控制器

## 10.1、以前的架构

![(img-NGdCSHqw-1588757845418)(JavaWeb.assets/1568423664332.png)](https://s2.loli.net/2022/11/04/N8t4fxRUOTj6u3W.png)

用户直接访问控制层，控制层就可以直接操作数据库；

```mipsasm
servlet--CRUD-->数据库
弊端：程序十分臃肿，不利于维护  
servlet的代码中：处理请求、响应、视图跳转、处理JDBC、处理业务代码、处理逻辑代码

架构：没有什么是加一层解决不了的！
程序猿调用
↑
JDBC （实现该接口）
↑
Mysql Oracle SqlServer ....（不同厂商）
```

## 10.2、MVC三层架构

![[(img-BWDJGUCN-1588757845419)(JavaWeb.assets/1568424227281.png)]](https://s2.loli.net/2022/11/04/5Q2WeArOg9aPU7Y.png)

![(img-BWDJGUCN-1588757845419)(JavaWeb.assets/1568424227281.png)](https://s2.loli.net/2022/11/04/5Q2WeArOg9aPU7Y.png)

Model

- 业务处理 ：业务逻辑（Service）
- 数据持久层：CRUD （Dao - 数据持久化对象）

View

- 展示数据
- 提供链接发起Servlet请求 （a，form，img…）

Controller （Servlet）

- 接收用户的请求 ：（req：请求参数、Session信息….）
- 交给业务层处理对应的代码
- 控制视图的跳转

```rust
登录--->接收用户的登录请求--->处理用户的请求（获取用户登录的参数，username，password）---->交给业务层处理登录业务（判断用户名密码是否正确：事务）--->Dao层查询用户名和密码是否正确-->数据库
```

# 11、Filter （重点）

比如 Shiro安全框架技术就是用Filter来实现的

Filter：过滤器 ，用来过滤网站的数据；

- 处理中文乱码
- 登录验证….

（比如用来过滤网上骂人的话，我***我自己 0-0）

![(img-QEq74VyV-1588757845420)(JavaWeb.assets/1568424858708.png)](https://s2.loli.net/2022/11/04/jR3bDWzd2oZPkGV.png)

Filter开发步骤：

1. 导包

```xml
        <!-- 连接数据库 -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>5.1.47</version>
        </dependency>

        <!-- servlet依赖 -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>4.0.1</version>
         
        </dependency>
        <!-- JSP依赖 -->
        <dependency>
            <groupId>javax.servlet.jsp</groupId>
            <artifactId>javax.servlet.jsp-api</artifactId>
            <version>2.3.3</version>
     
        </dependency>
        <!-- standard标签库 -->
        <dependency>
            <groupId>taglibs</groupId>
            <artifactId>standard</artifactId>
            <version>1.1.2</version>
        </dependency>
        <!-- JSTL表达式的依赖 -->
        <dependency>
            <groupId>javax.servlet.jsp.jstl</groupId>
            <artifactId>jstl-api</artifactId>
            <version>1.2</version>
        </dependency>
```

1. 编写过滤器

   1. 导包不要错 **（注意）**

   ![[(img-HHsC3JBD-1588757845420)(JavaWeb.assets/1568425162525.png)]](https://s2.loli.net/2022/11/04/fvRmcFeJgpHdtyo.png)

实现Filter接口，重写对应的方法即可

```java
      public class CharacterEncodingFilter implements Filter {
      
          //初始化：web服务器启动，就以及初始化了，随时等待过滤对象出现！
          public void init(FilterConfig filterConfig) throws ServletException {
              System.out.println("CharacterEncodingFilter初始化");
          }
      
          //Chain : 链
          /*
          1. 过滤中的所有代码，在过滤特定请求的时候都会执行
          2. 必须要让过滤器继续同行
              chain.doFilter(request,response);
           */
          public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
              request.setCharacterEncoding("utf-8");
              response.setCharacterEncoding("utf-8");
              response.setContentType("text/html;charset=UTF-8");
      
              System.out.println("CharacterEncodingFilter执行前....");
              chain.doFilter(request,response); //让我们的请求继续走，如果不写，程序到这里就被拦截停止！
              System.out.println("CharacterEncodingFilter执行后....");
          }
      
          //销毁：web服务器关闭的时候，过滤器会销毁
          public void destroy() {
              System.out.println("CharacterEncodingFilter销毁");
          }
      }
      
```

3.在web.xml中配置 Filter

```xml
   <filter>
       <filter-name>CharacterEncodingFilter</filter-name>
       <filter-class>com.kuang.filter.CharacterEncodingFilter</filter-class>
   </filter>
   <filter-mapping>
       <filter-name>CharacterEncodingFilter</filter-name>
       <!--只要是 /servlet的任何请求，会经过这个过滤器-->
       <url-pattern>/servlet/*</url-pattern>
       <!--<url-pattern>/*</url-pattern>-->
       <!-- 别偷懒写个 /* -->
   </filter-mapping>

    <servlet>
        <servlet-name>ShowServlet</servlet-name>
        <servlet-class>com.thb.servlet.ShowServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>ShowServlet</servlet-name>
        <url-pattern>/servlet/s</url-pattern>
    </servlet-mapping>
    <servlet>
        <servlet-name>Servlet</servlet-name>
        <servlet-class>com.thb.servlet.ShowServlet</servlet-class>
    </servlet>
    <servlet-mapping>
        <servlet-name>Servlet</servlet-name>
        <url-pattern>/s</url-pattern>
    </servlet-mapping>
```

# 12、监听器

### 实现一个监听器的接口；（有n种监听器）

1. ### 编写一个监听器

   实现监听器的接口![在这里插入图片描述](https://s2.loli.net/2022/11/04/VE8Gz5cq6rO214A.png)

### 依赖的jar包

```java
//统计网站在线人数 ： 统计session
public class OnlineCountListener implements HttpSessionListener {

    //创建session监听： 看你的一举一动
    //一旦创建Session就会触发一次这个事件！
    public void sessionCreated(HttpSessionEvent se) {
        ServletContext ctx = se.getSession().getServletContext();

        System.out.println(se.getSession().getId());

        Integer onlineCount = (Integer) ctx.getAttribute("OnlineCount");

        if (onlineCount==null){
            onlineCount = new Integer(1);
        }else {
            int count = onlineCount.intValue();
            onlineCount = new Integer(count+1);
        }

        ctx.setAttribute("OnlineCount",onlineCount);

    }

    //销毁session监听
    //一旦销毁Session就会触发一次这个事件！
    public void sessionDestroyed(HttpSessionEvent se) {
        ServletContext ctx = se.getSession().getServletContext();

        Integer onlineCount = (Integer) ctx.getAttribute("OnlineCount");

        if (onlineCount==null){
            onlineCount = new Integer(0);
        }else {
            int count = onlineCount.intValue();
            onlineCount = new Integer(count-1);
        }

        ctx.setAttribute("OnlineCount",onlineCount);

    }


    /*
    Session销毁：
    1. 手动销毁  getSession().invalidate();
    2. 自动销毁
     */
}
```

### web.xml中注册监听器

```xml
<!--注册监听器-->
<listener>
    <listener-class>com.kuang.listener.OnlineCountListener</listener-class>
</listener>
```

1. 看情况是否使用！

# 13、过滤器、监听器常见应用

**监听器：GUI编程中经常使用；**

```java
public class TestPanel {
    public static void main(String[] args) {
        Frame frame = new Frame("他化自在");  //新建一个窗体
        Panel panel = new Panel(null); //面板
        frame.setLayout(null); //设置窗体的布局

        frame.setBounds(300,300,500,500);
        frame.setBackground(new Color(0,0,255)); //设置背景颜色

        panel.setBounds(50,50,300,300);
        panel.setBackground(new Color(0,255,0)); //设置背景颜色

        frame.add(panel);

        frame.setVisible(true);

        //监听事件，监听关闭事件
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                super.windowClosing(e);
            }
        });

    }
}
 
```

用户登录之后才能进入主页！用户注销后就不能进入主页了！

1. 用户登录之后，向Sesison中放入用户的数据
2. 进入主页的时候要判断用户是否已经登录；要求：在过滤器中实现！

```java
HttpServletRequest request = (HttpServletRequest) req;
HttpServletResponse response = (HttpServletResponse) resp;

if (request.getSession().getAttribute(Constant.USER_SESSION)==null){
    response.sendRedirect("/error.jsp");
}

chain.doFilter(request,response);
```

# 14、JDBC

## 什么是JDBC ： Java连接数据库！

![[(img-rZzTXmtn-1588757845422)(JavaWeb.assets/1568439601825.png)]](https://s2.loli.net/2022/11/04/WEutpIURf9KoxMX.png)

### 需要jar包的支持：

- java.sql
- javax.sql
- mysql-conneter-java… 连接驱动（必须要导入）

### **实验环境搭建**

```sql
CREATE TABLE users(
    id INT PRIMARY KEY,
    `name` VARCHAR(40),
    `password` VARCHAR(40),
    email VARCHAR(60),
    birthday DATE
);

INSERT INTO users(id,`name`,`password`,email,birthday)
VALUES(1,'张三','123456','zs@qq.com','2000-01-01');
INSERT INTO users(id,`name`,`password`,email,birthday)
VALUES(2,'李四','123456','ls@qq.com','2000-01-01');
INSERT INTO users(id,`name`,`password`,email,birthday)
VALUES(3,'王五','123456','ww@qq.com','2000-01-01');


SELECT	* FROM users;
```

### 导入数据库依赖

```xml
<!--mysql的驱动-->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.47</version>
</dependency>
```

### IDEA中连接数据库：

![[(img-XErw4ElS-1588757845423)(JavaWeb.assets/1568440926845.png)]](https://s2.loli.net/2022/11/04/J6xuVi2jN17fa9R.png)

### **JDBC 固定步骤：**

1. 加载驱动
2. 连接数据库,代表数据库
3. 向数据库发送SQL的对象Statement : CRUD
4. 编写SQL （根据业务，不同的SQL）
5. 执行SQL
6. 关闭连接（先开的后关）

```java
public class TestJdbc {
    public static void main(String[] args) throws ClassNotFoundException, SQLException {
        //配置信息
        //useUnicode=true&characterEncoding=utf-8 解决中文乱码
        String url="jdbc:mysql://localhost:3306/jdbc?useUnicode=true&characterEncoding=utf-8";
        String username = "root";
        String password = "123456";

        //1.加载驱动
        Class.forName("com.mysql.jdbc.Driver");
        //2.连接数据库,代表数据库
        Connection connection = DriverManager.getConnection(url, username, password);

        //3.向数据库发送SQL的对象Statement,PreparedStatement : CRUD
        Statement statement = connection.createStatement();

        //4.编写SQL
        String sql = "select * from users";

        //5.执行查询SQL，返回一个 ResultSet  ： 结果集
        ResultSet rs = statement.executeQuery(sql);

        while (rs.next()){
            System.out.println("id="+rs.getObject("id"));
            System.out.println("name="+rs.getObject("name"));
            System.out.println("password="+rs.getObject("password"));
            System.out.println("email="+rs.getObject("email"));
            System.out.println("birthday="+rs.getObject("birthday"));
        }

        //6.关闭连接，释放资源（一定要做） 先开后关
        rs.close();
        statement.close();
        connection.close();
    }
}
```

## **预编译SQL**

```java
public class TestJDBC2 {
    public static void main(String[] args) throws Exception {
        //配置信息
        //useUnicode=true&characterEncoding=utf-8 解决中文乱码
        String url="jdbc:mysql://localhost:3306/jdbc?useUnicode=true&characterEncoding=utf-8";
        String username = "root";
        String password = "123456";

        //1.加载驱动
        Class.forName("com.mysql.jdbc.Driver");
        //2.连接数据库,代表数据库
        Connection connection = DriverManager.getConnection(url, username, password);

        //3.编写SQL
        String sql = "insert into  users(id, name, password, email, birthday) values (?,?,?,?,?);";

        //4.预编译
        PreparedStatement preparedStatement = connection.prepareStatement(sql);

        preparedStatement.setInt(1,2);//给第一个占位符？ 的值赋值为1；
        preparedStatement.setString(2,"狂神说Java");//给第二个占位符？ 的值赋值为狂神说Java；
        preparedStatement.setString(3,"123456");//给第三个占位符？ 的值赋值为123456；
        preparedStatement.setString(4,"24736743@qq.com");//给第四个占位符？ 的值赋值为1；
        preparedStatement.setDate(5,new Date(new java.util.Date().getTime()));//给第五个占位符？ 的值赋值为new Date(new java.util.Date().getTime())；

        //5.执行SQL
        int i = preparedStatement.executeUpdate();

        if (i>0){
            System.out.println("插入成功@");
        }

        //6.关闭连接，释放资源（一定要做） 先开后关
        preparedStatement.close();
        connection.close();
    }
}
```

## **事务**

要么都成功，要么都失败！

ACID原则：保证数据的安全。

```less
开启事务
事务提交  commit()
事务回滚  rollback()
关闭事务

转账：
A:1000
B:1000
    
A(900)   --100-->   B(1100) 
```

### **Junit单元测试**

依赖

```xml
<!--单元测试-->
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
</dependency>
```

简单使用

@Test注解只有在方法上有效，只要加了这个注解的方法，就可以直接运行！失败的时候是红色：

```java
@Test
public void test(){
    System.out.println("Hello");
}
```

### **搭建一个环境**

```sql
CREATE TABLE account(
   id INT PRIMARY KEY AUTO_INCREMENT,
   `name` VARCHAR(40),
   money FLOAT
);

INSERT INTO account(`name`,money) VALUES('A',1000);
INSERT INTO account(`name`,money) VALUES('B',1000);
INSERT INTO account(`name`,money) VALUES('C',1000);
    @Test
    public void test() {
        //配置信息
        //useUnicode=true&characterEncoding=utf-8 解决中文乱码
        String url="jdbc:mysql://localhost:3306/jdbc?useUnicode=true&characterEncoding=utf-8";
        String username = "root";
        String password = "123456";

        Connection connection = null;

        //1.加载驱动
        try {
            Class.forName("com.mysql.jdbc.Driver");
            //2.连接数据库,代表数据库
             connection = DriverManager.getConnection(url, username, password);

            //3.通知数据库开启事务,false 开启
            connection.setAutoCommit(false);

            String sql = "update account set money = money-100 where name = 'A'";
            connection.prepareStatement(sql).executeUpdate();

            //制造错误
            //int i = 1/0;

            String sql2 = "update account set money = money+100 where name = 'B'";
            connection.prepareStatement(sql2).executeUpdate();

            connection.commit();//以上两条SQL都执行成功了，就提交事务！
            System.out.println("success");
        } catch (Exception e) {
            try {
                //如果出现异常，就通知数据库回滚事务
                connection.rollback();
            } catch (SQLException e1) {
                e1.printStackTrace();
            }
            e.printStackTrace();
        }finally {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
```



# JavaWeb

## 前端技术

### HTML基础标签

```html
<html>
	<head>
        <title>HTML</title>
        <meta charset="UTF-8">
    </head>
    <body>
        HELLO WORLD!<br/> 你好HTML
        <p>
            这里是第一个段落
        </p>
        <p>
            这里是第二个段落
        </p>
        <img src="img/img.jpg" width="57" height="36" alt="图片显示失败" title="这是一张图片"/>
        <h1>标题1</h1>
        <h2>标题2</h2>
        <h3>标题3</h3>
        <h4>标题4</h4>
        <h5>标题5</h5>
        <h6>标题6</h6>
        
        武林高手排行榜:
		<ol type="i" start="3">
			<li>扫地僧</li>
			<li>萧远山</li>
            <li>慕容博</li>
            <li>虚竹</li>
            <li>阿紫</li>
        </ol>
		武林大会人员名单:
        <ul>
        	<li>扫地僧</li>
			<li>萧远山</li>
            <li>慕容博</li>
            <li>虚竹</li>
            <li>阿紫</li>
        </ul>
        你是<b><i><u>喜欢</u></i></b>是<b>甜</b>月饼还是<i>咸</i><u>月饼</u>
        
        水分子的化学式H<sub>2</sub>O
        氧气分子的化学式O<sup>2</sup>
        5$lt;10 小于
        10$gt;5 大于
        5$le;10 小于等于
        10$ge;5 大于等于
=======
date: 2023-01-22 10:38:00
tags: JAVA
description: JavaWeb教程
categories: JAVA
---

# HTML

## frameset-iframe

### frameset

作用：如果一个网页中包含很多个子网页，我们可以使用frameset来进行区分

```HTML
<html>
    <head></head>
    <!-- 如果里面有多个页面的话采用frameset标签， row是按行分割，clos是按列分割 -->
    <frameset row="20%,*">
    	<frame src="top.html" />
    	<frameset clos="15%,*">
            <frame src="left.html" />
            <frameset row="80%, *">
                <frame src="main.html" />
                <frame src="bottom.html" />
            </frameset>
        </frameset>
    </frameset>
</html>
```



### iframe

在页面中嵌入一个页面

```html
<html>
    <head></head>
    <body>
        "页面"<iframe src="top.html" />
>>>>>>> 03badbb (github action update)
    </body>
</html>
```

<<<<<<< HEAD
1. HTML是解释型语言，不是编译型语言，浏览器是容错的

   其中网页中的主题内容是写在body标签中的

2. html页面中由一对标签组成: < html> < /html>

   < html>称之为开始标签

   < /html>称之为结束标签

3. title表示网页的标题

4. 可以在meta标签中设置编码方式

5. < br/ >表示换行 br标签是一个单标签。单标签:开始标签和结束标签是同一个，斜杠放在单词后面

6. p 表示段落标签

7. img标签图片标签

   - src属性表示图片文件的路径

   - width和height表示图片的大小

   - alt表示图片加载失败后的提示

   - title 表示鼠标放到图片上之后的显示


8. 路径的问题:

   - 相对路径
   - 绝对路径

9. h1～h6 :标题标签

10. 列表标签:

    - ol有序列表
      start表示从*开始，type显示的类型 ! 	A 	a 	I 	i 	1
    - ul无序列表
      type disc(default) , circle , square

11. u 下划线 b粗体 i斜体

12. 上标 sup下标sub

13. HTML中的实体:小于号 & lt; 大于等于号 & ge;  版权& copy;

14. span 不换行的块标记

15. a表示超链接

    - href链接的地址

    - target：

      _ self在本窗口打开
      _ blank在一个新窗口打开

      _ parent在父窗口打开

      _ top在顶层窗口打开

16. 表格  table
    行      tr
    列      td
    表头列   th
    table中有如下属性（虽然已经淘汰，但是最好了解一下）

    - border:表格边框的粗细

    - width:表格的宽度
    - cellspacing:单元格间距
    - cellpadding:单元格填充

     tr中有一个属性: align -> center , left , right

    rowspan ：行合并

    colspan ： 列合并

```HTML
<body>
	<form action="demo04.html" method="post">
		昵称:	<input type="text" name="nickName" value="请输入你的昵称"/><br/>
        密码: <input type="password" name="pwd" /><br/>
		性别: <input type="radio" name="gender" value="male"/>男
			 <input type="radio" name="gender" value="female" checked/>女<br/>
        爱好:	<input type="checkbox" name="hobby" value="basketball"/>篮球
			 <input type="checkbox" name="hobby" value="football" checked/>足球
        	 <input type="checkbox" name="hobby" value="earth" checked />地球<br/>
       星座: <select name="star">
				<option value="1">白羊座</option>
				<option value="2" selected>金牛座</option>
        		<option value="3">双子座</option>
				<option value="4">天蝎座</option>
        		<option value="5">天秤座</option>
        	</select><br/>
		备注: <textarea name="remark" rows="4" cols="50"></textarea><br/>
        <input type="submit" value="注册"/>
		<input type="reset" value="重置"/>
		<input type="button" value="这是一个普通按钮"/>
    </form>
</body>

```

17. 表单    form
    input type="text”    	表示文本框，其中 name属性必须要指定，否则这个文本框的数据将来是不会发送给服务器的input 

    type="password”		表示密码框

    input type="radio”	 表示单选按钮。需要注意的是，name属性值保持一致，这样才会有互斥的效果;可以通过checked属性设置默认选中的项

    input type= "checkbox”表示复选框。name属性值建议保持一致，这样将来我们服务器端获取值的时候获取的是一个数组

    select表示下拉列表。每一个选项是option，其中value属性是发送给服务器的值, selected表示默认选中的项

    textarea表示多行文本框(或者称之为文本域) 它的value值就是开始结束标签之间的内容

    input type="submit”表示提交按钮 

    input type="reset”表示重置按钮

    input type="button”表示普通按钮

```HTML
<frameset rows="20%,*"><! -- frameborder="no" -->
	<frame src="frames /top.html"/>
	<frameset cols="15%,*">
		<frame src="frames / left.html"/>
        <frameset rows="80%,*">
			<frame src="frames /main.html"/>
            <frame src="frames/bottom.html"/>
        </frameset>
	</frameset>
</frameset>
```

frameset表示页面框架，这个标签已经淘汰，了解，不需要掌握frame表示框架中的具体页面引用

```HTML
<body>
	这里是demo06页面的内容!!
	<iframe src="frames /top.html" />
</body>

```

iframe在一个页面嵌入一个子页面

{% tip %} 总结:{% endtip %}

1. HTML是解释型的文本标记语言，不区分大小写
2. html,head,title,meta ,body ,br ,p,h ,div,table ,form,u,i,b,sup,sub ,&nbsp; ,span,ul,o1l,li,tr ,td,th,h1-hb6,a,input,select,textare a, n 
   - html , head , title , meta , body , br , ul , ol , h1-h6 , a , img , &nbsp;, p , div , span
   - table tr , th , td 
   - form(action="’ , method='post') input type= 'text ,pasword ,radio,checkbox , submit ,button,reset”《select》 , textarea

### CSS and JS

```HTML
<head>	
	<style type="text/css">
		/*被style标签包围的范围是CSS环境，可以写CSs代码*/
		
		/*标签样式表*/
		p{
			color :red;
		}

		/*类样式*/
		.f2d{
			font-size: 20px;
		}

		/*ID样式*/
		#p4{
			background-color:pink;
			font-size:24px;
			font-weight:bolder;
			font-style:italic;
			font-family: "华文彩云";
		}
        
        /*组合样式*/
        div p{
            color: blue;
        }
        div .f32{
            font-size: 32px;
            font-family:"黑体";
        }
	</style>
    <! -- 引用外部的CSs -->
	<link rel="stylesheet" href="css/demo01.css">

</head>
<body>
	<! --
	<p><font color="red">这里是段落一</font></p>
    <p><font color="red">这里是段落二</font></p>
    -->
	<p>这里是段落一</p><p>这里是段落二</p>
	<p class="f20">这里是段落三</p>
	<p id="p4">这里是段落四</p><!-- id属性在整个HTAL文档中，尽量保持唯一(虽然重复也不会报错）-->
    <div>
		<p><span>HELLO</span></p>
		<span class="f32" >world</ span>
        <p class="f32">! !!</p>
	</div>
</body>

```

1. 为什么需要cSs
2. CSS的最基本的分类:标签样式表、类样式表、ID样式表
3. CSS从位置上的分类:嵌入式样式表、内部样式表、外部样式表



{% tip %}JS{% endtip %}

```HTML
<html>
	<head>
		<meta charset="utf-8">
		<script language="javascript">
		// string str.= "helo world" ;
            var str = "hello world";
            alert(typeof str)
            
            var person = new Object();person.pid = "p001";
			person.pname="鸠摩智";
			alert(person.pid+"_"+person.pname ) ;
			
            //java方法
			public String hello(String name){
				return "hello to " + name ;
			}
			//js方法
			function hello(name){
				return "hello to" + name ;
			}

		</script>
	</head>
	<body>
	</body>
=======




# CSS

## 盒子模型

IE 浏览器：实际尺寸 = width

chrome浏览器：实际尺寸 = width+左右borderwidth + padding

css盒子模型：

1. {% span red, border %} 边框
2. {% label margin red %} 间距
3. {% label padding red %} 填充

```HTML
<html>
    <head>
    	<style type="text/css">
            #div1{
                width:400px;
                height:400px;
                background-color:green;
                /* 边框样式 */
                border-width:4px;
                border-style:dotted; /* 边框样式：solid(实线)， dotted(点状线) */
                border-color:blue;
            }
        </style>
    </head>
    <body>
        <div id="div1">
            &nbsp;
        </div>
    </body>
</html>
```

## CSS 布局

1. absolute和relative都会使元素脱离文档流，但不同的是，absolute脱离文档流后不会占用原来的位置，而relative会在原来的位置上留下一个副本占用原来文档流的位置
2. absolute的{% span red, 父元素设有position时 %}，top,left,bottom,right会{% span red, 忽略父级元素 %}的padding值，即始终与父级元素的{% span red, 左上角进行定位 %}，且其层级会始终比父级高，无论父级设置多大的z-index，但relative的定位会受父元素padding值影响 
3. {% span red, absolute是以第一个设置了position的父元素或祖先元素进行定位 %}，{% span red, 而relative定位的层总是相对于其最近的父元素 %}，无论其父元素是何种定位方式

```HTML
<html>
    <head>
    	<style type="text/css">
            #div1{
                width:200px;
                height:200px;
                background-color:green;
                /* 位置 */
                /* 绝对定位：相对于父级第一个设置了position属性进行定位 */
                position:absolute;
                left:100px;
                top:100px;
            }
            #div2{
                width:200px;
                height:200px;
                background-color:pink;
                /* 位置 */
                /* 相对定位： 设置为相对定位的元素框会偏移某个距离。元素仍然保持其未定位前的形状，它原本所占的空间仍保留。 */
                position:relative;
                
                top:100px;
            }
        </style>
    </head>
    <body>
        <div id="div1">&nbsp;</div>
        <div id="div2">&nbsp;</div>
    </body>
>>>>>>> 03badbb (github action update)
</html>
```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<<<<<<< HEAD
    <link rel="stylesheet" href="css/demo01.css">
    <script type="text/javascript" src="js/demo01.js"></script>
    <title>JS测试</title>
</head>
<body>
    <div id="div_container">
        <div id="div_fruit_list">
            <table>
                <tr onmouseover="showBGColor()" onmouseleave="clearBGColor()" >
                    <th>名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小记</th>
                    <th>操作</th>
                </tr>
                <tr onmouseover="showBGColor()" onmouseout="clearBGColor()" >
                    <td>苹果</td>
                    <td>5</td>
                    <td>20</td>
                    <td>100</td>
                    <td>&#x2297</td>
                </tr>
                <tr onmouseover="showBGColor()" onmouseout="clearBGColor()" >
                    <td>西瓜</td>
                    <td>3</td>
                    <td>20</td>
                    <td>100</td>
                    <td>&#x2297</td>
                </tr>
                <tr onmouseover="showBGColor()" onmouseout="clearBGColor()" >
                    <td>菠萝</td>
                    <td>4</td>
                    <td>25</td>
                    <td>100</td>
                    <td>&#x2297</td>
                </tr>
                <tr onmouseover="showBGColor()" onmouseout="clearBGColor()" >
                    <td>榴莲</td>
                    <td>3</td>
                    <td>30</td>
                    <td>90</td>
                    <td>&#x2297</td>
                </tr>
                <tr onmouseover="showBGColor()" onmouseout="clearBGColor()" >
                    <td>总计</td>
                    <td colspan="4">999</td>
=======
    <title>Document</title>
    <style type="text/css">
        body{
            margin: 0 0;
            height: 100%;
            width: 100%;
            position: absolute;
        }
        div{
            position:relative;
            
        }
        #div_top{
            height:20%;
            width: 100%;
            background-color:orange;
            
        }
        #div_left{
            height:80%;
            width: 20%;
            float: left;
            background-color:green;
            
        }
        #div_main{
            background-color:yellow;
            height:70%;
            width: 80%;
            float: left;
            
        }
        #div_bottom{
            background-color:pink;
            height:10%;
            float: left;
            width: 80%;
        }
    </style>
</head>
<body>
    <div id="div_top">&nbsp;</div>
    <div id="div_left">&nbsp;</div>
    <div id="div_main">&nbsp;</div>
    <div id="div_bottom">&nbsp;</div>
</body>
</html>
```



## 水果库

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        body{
            margin:0;
            padding: 0;
            background-color: cadetblue;
        }
        #div_container{
            height:100%;
            width:80%;
            background-color: antiquewhite;
            position: absolute;
            margin-left: 10%;
        }
        #tbl_fruit{
            border-style: solid;
            width: 60%;
            height: 60%;
            position: absolute;
            border-collapse: collapse;
            margin-top: 10%;
            margin-left: 20%;
        }
        #tbl_fruit tr, #tbl_fruit th,#tbl_fruit td{
            border:1px solid;
            width: 20%;
            text-align: center;
        }
        .dekImg{
            width: 20px;
            height: 20px;
        }  
    </style>
</head>
<body>
    <div id="div_container">
        <div id="div_furit_list">
            <table id="tbl_fruit">
                <tr>
                    <th>名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>苹果</td>
                    <td>5</td>
                    <td>50</td>
                    <td>250</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>梨</td>
                    <td>6</td>
                    <td>60</td>
                    <td>360</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>香蕉</td>
                    <td>7</td>
                    <td>70</td>
                    <td>490</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>菠萝</td>
                    <td>8</td>
                    <td>80</td>
                    <td>640</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>总计</td>
                    <td colspan=4>300</td>
>>>>>>> 03badbb (github action update)
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
```



<<<<<<< HEAD
```JS
window. onload=function(){
    //当页面加载完成，我们需要绑定各种事件/根据id获取到表格
    var fruitTbl = document.getElementById("tbl_fruit");    //获取表格中的所有的行
    var rows = fruitTbl.rows ;
    for(var i = 0 ; i<rows . length-1 ; i++){
        var tr = rows[i];
        //1.绑定鼠标悬浮以及离开时设置背景颜色事件
        tr.onmouseover=showBGColor;
        tr.onmouseout=clearBGColor;//获取tr这一行的所有单元格
        var cells = tr.cells;
        var priceTD = cells[1];
        //2.绑定鼠标悬浮在单价单元格变手势的事件
        priceTD.onmouseover = showHand ;
        priceTD.onclick = editPrice;
=======
# JS

javascript :客户端的一个脚本语言

js是一门弱类型的语言，变量的数据类型由后面赋的值的类型决定



##  JavaScript的起源

在<span style="color:blue;font-weight:bold;">1995</span>年时，由<span style="color:blue;font-weight:bold;">Netscape</span>公司的<span style="color:blue;font-weight:bold;">Brendan Eich</span>，在网景导航者浏览器上首次设计实现而成。Netscape在最初将其脚本语言命名为LiveScript，因为Netscape与Sun合作，网景公司管理层希望蹭Java的热度，因此取名为JavaScript。

JavaScript总共分成三部分: ECMAScript(基本语法)、BOM(浏览器对象模型)、DOM(文档对象模型)

## JavaScript的特性

### 脚本语言

JavaScript是一种解释型的脚本语言。不同于C、C++、Java等语言先编译后执行,	JavaScript不会产生编译出来的字节码文件，而是在程序的运行过程中对源文件逐行进行解释。

### 基于对象

JavaScript是一种基于对象的脚本语言，它不仅可以创建对象，也能使用现有的对象。但是面向对象的三大特性：『封装』、『继承』、『多态』中，JavaScript能够实现封装，可以模拟继承，不支持多态，所以它不是一门面向对象的编程语言。

### 弱类型

JavaScript中也有明确的数据类型，但是声明一个变量后它可以接收任何类型的数据，并且会在程序执行过程中根据上下文自动转换类型。

### 事件驱动

JavaScript是一种采用事件驱动的脚本语言，它不需要经过Web服务器就可以对用户的输入做出响应。

### 跨平台性

JavaScript脚本语言不依赖于操作系统，仅需要浏览器的支持。因此一个JavaScript脚本在编写后可以带到任意机器上使用，前提是机器上的浏览器支持JavaScript脚本语言。目前JavaScript已被大多数的浏览器所支持。



## 入门程序

### **功能效果图**

<img src="https://s2.loli.net/2023/02/18/EFNkWuhU9aAbPwZ.png" alt="img001.png" style="zoom:50%;" />

### **代码实现**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS的入门程序</title>
</head>
<body>
    <!-- 在HTML代码中定义一个按钮 -->
    <button type="button" id="helloBtn">SayHello</button>
    <!--
        目标: 点击按钮的时候弹出一个警告框
    -->
    <script type="text/javascript">
        //1. 通过js代码获取到按钮对象
        //document代表当前HTML文档
        var btn = document.getElementById("helloBtn");

        //2. 给获取到的btn对象绑定点击事件
        btn.onclick = function () {
            //弹出警告框
            alert("hello world")
        }
    </script>
</body>
</html>
```

## JavaScript的基本语法

###  JavaScript的引入方式

#### 内部脚本方式

- JavaScript代码要写在script标签内
- script标签可以写在文档内的任意位置
- 为了能够方便查询或操作HTML标签（元素）script标签可以写在body标签后面

在我们的入门程序中使用的就是内部脚本方式引入的JavaScript

#### 外部脚本方式

在script标签内通过src属性指定外部xxx.js文件的路径即可。但是要注意以下两点：

- 引用外部JavaScript文件的script标签里面不能写JavaScript代码
- 先引入，再使用
- script标签不能写成单标签
  <img src="https://s2.loli.net/2023/02/18/bi6DXFfvSt9ApUJ.png" alt="img008.png" style="zoom:50%;" />

引入方式如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS的引入方式</title>
    <!--
        建议在head中引入外部的js文件
    -->
    <script src="../js/outer.js"></script>
</head>
<body>

    <!--
        第一种引入方式: 内部引入方式，在HTML文档内部，通过script标签去编写js代码
    -->
    <!--
        第二种引入方式: 外部引入方式，在当前项目中创建一个js文件，然后在需要引入的HTML里面使用script标签引入
        一个script标签要么负责编写内部的js代码，要么负责引入外部的js文件
    -->
    <script type="text/javascript">
        //调用外部js文件中的方法
        showMessage()
        alert("hello world")
    </script>
</body>
</html>
```

### 声明和使用变量

####  JavaScript数据类型

- 基本数据类型

  - 数值型number：JavaScript不区分整数、小数

  - 字符串string：JavaScript不区分字符、字符串；单引号、双引号意思一样。

  - 布尔型boolean：true、false

    在JavaScript中，其他类型和布尔类型的自动转换。

    true：非零的数值，非空字符串，非空对象

    false：零，空字符串，null，undefined 

    例如："false"放在if判断中

    ```javascript
    // "false"是一个非空字符串，直接放在if判断中会被当作『真』处理
    if("false"){
    	alert("true");
    }else{
    	alert("false");
    }
    ```

- 引用类型

  - 所有new出来的对象
  - 用[]声明的数组
  - 用{}声明的对象

#### 变量

- 关键字：var,其实ECMAScript6之后建议使用let

- 数据类型：JavaScript变量是弱类型的，可以接收任意类型的数据

- 标识符：严格区分大小写

- 变量使用规则

  - 如果使用了一个没有声明的变量，那么会在运行时报错

    Uncaught ReferenceError: b is not defined

  - 如果声明一个变量没有初始化，那么这个变量的值就是undefined

### 函数(重点)

#### 内置函数

内置函数就是JavaScript中内置好的函数，我们可以直接使用

* 弹出警告框

```javascript
alert("警告框内容");
```

* 弹出确认框

```javascript
var result = confirm("确定要删除吗？");
if(result) {
    // 执行删除
}
```

用户点击『确定』返回true，点击『取消』返回false

```javascript
var result = confirm("老板，你真的不加个钟吗？");
if(result) {
	console.log("老板点了确定，表示要加钟");
}else{
	console.log("老板点了确定，表示不加钟");
}
```

* 在控制台打印日志

```javascript
console.log("日志内容");
```

![img009.png](https://s2.loli.net/2023/02/18/vaekWZ6MRENdh89.png)

#### 声明函数

声明函数就是使用者自己定义一个函数，它有两种写法:

写法1：

```javascript
function sum(a, b) {
    return a+b;
}
```

写法2：

```javascript
var total = function() {
    return a+b;
};
```

写法2可以这样解读：声明一个函数，相当于创建了一个『函数对象』，将这个对象的『引用』赋值给变量total。如果不给这个对象赋值，我们可以将其作为匿名函数使用(在后续学习内容中会用到)



#### 调用函数

JavaScript中函数本身就是一种对象，函数名就是这个<span style="color:blue;font-weight:bold;">『对象』</span>的<span style="color:blue;font-weight:bold;">『引用』</span>。而调用函数的格式是：<span style="color:blue;font-weight:bold;">函数引用()</span>。

```javascript
function sum(a, b) {
    return a+b;
}

var result = sum(2, 3);
console.log("result="+result);
```

或：

```javascript
var total = function() {
    return a+b;
}

var totalResult = total(3,6);
console.log("totalResult="+totalResult);
```

### 对象(重点)

JavaScript中没有『类』的概念，对于系统内置的对象可以直接创建使用。

#### 使用new关键字创建对象

```javascript
// 创建对象
var obj01 = new Object();

// 给对象设置属性和属性值
obj01.stuName = "tom";
obj01.stuAge = 20;
obj01.stuSubject = "java";

// 在控制台输出对象
console.log(obj01);
```

#### 使用{}创建对象(常用)

```javascript
// 创建对象
var obj02 = {
    "soldierName":"john",
    "soldierAge":35,
    "soldierWeapon":"gun"
};

// 在控制台输出对象
console.log(obj02);
```

#### 给对象设置函数属性

```javascript
// 创建对象
var obj01 = new Object();

// 给对象设置属性和属性值
obj01.stuName = "tom";
obj01.stuAge = 20;
obj01.stuSubject = "java";

obj01.study = function() {
	console.log(this.stuName + " is studying");
};

// 在控制台输出对象
console.log(obj01);
// 调用函数
obj01.study();
```

或者

```javascript
// 创建对象
var obj02 = {
	"soldierName":"john",
	"soldierAge":35,
	"soldierWeapon":"gun",
	"soldierShoot":function(){
		console.log(this.soldierName + " is using " + this.soldierWeapon);
	}
};

// 在控制台输出对象
console.log(obj02);
// 调用函数
obj02.soldierShoot();
```

#### this关键字

this关键字只有两种情况：

- 在函数外面：this关键字指向window对象（代表当前浏览器窗口）
- 在函数里面：this关键字指向调用函数的对象

```javascript
// 直接打印this
console.log(this);

// 函数中的this
// 1.声明函数
function getName() {
	console.log(this.name);
}

// 2.创建对象
var obj01 = {
	"name":"tom",
	"getName":getName
};
var obj02 = {
	"name":"jerry",
	"getName":getName
};

// 3.调用函数
obj01.getName();
obj02.getName();
```

### 数组(重点)

#### 使用new关键字创建数组

```javascript
// 1.创建数组对象
var arr01 = new Array();

// 2.压入数据
arr01.push("apple");
arr01.push("orange");
arr01.push("banana");
arr01.push("grape");

// 3.遍历数组
for (var i = 0; i < arr01.length; i++) {
	console.log(arr01[i]);
}

// 4.数组元素反序
arr01.reverse();
for (var i = 0; i < arr01.length; i++) {
	console.log(arr01[i]);
}

// 5.数组元素拼接成字符串
var arrStr = arr01.join(",");
console.log(arrStr);

// 6.字符串拆分成数组
var arr02 = arrStr.split(",");
for (var i = 0; i < arr02.length; i++) {
	console.log(arr02[i]);
}

// 7.弹出数组中最后一个元素
var ele = arr01.pop();
console.log(ele);
```

#### 使用[]创建数组(常用)

```javascript
// 8.使用[]创建数组
var arr03 = ["cat","dog","tiger"];
console.log(arr03);
```

### JSON(最重点)

#### JSON格式的用途

在开发中凡是涉及到<span style="color:blue;font-weight:bold;">『跨平台数据传输』</span>，JSON格式一定是首选。

#### JSON格式的说明

- JSON数据两端要么是<span style="color:blue;font-weight:bold;">{}</span>，要么是<span style="color:blue;font-weight:bold;">[]</span>
- <span style="color:blue;font-weight:bold;">{}</span>定义JSON对象
- <span style="color:blue;font-weight:bold;">[]</span>定义JSON数组
- JSON对象的格式是：

```json
{key:value,key:value,...,key:value}
```

- JOSN数组的格式是：

```json
[value,value,...,value]
```

- key的类型固定是字符串
- value的类型可以是：
  - 基本数据类型
  - 引用类型：JSON对象或JSON数组

正因为JSON格式中value部分还可以继续使用JSON对象或JSON数组，所以JSON格式是可以<span style="color:blue;font-weight:bold;">『多层嵌套』</span>的，所以JSON格式不论多么复杂的数据类型都可以表达。

```json
//json的格式: {key:value,key:value}
var person1 = {
    "name":"张三疯",
    "age":189,
    "address":"武当山"
}
//其实JSON对于前端而言，就是一个对象
//console.log(person1.name)

var person2 = {
    "name":"张三疯",
    "age":189,
    "address":"武当山",
    "wife":{
        "name":"小花",
        "age":18,
        "address":"武当山下的小村庄"
    }
}
//console.log(person2.wife.name)

var person3 = {
    "name":"张三疯",
    "age":189,
    "address":"武当山",
    "wife":{
        "name":"小花",
        "age":18,
        "address":"武当山下的小村庄"
    },
    "sons":[
        {
            "name":"奥巴马",
            "age":1,
            "address":"武当山"
        },
        {
            "name":"奥拉夫",
            "age":2,
            "address":"少林寺"
        }
    ]
}

//json数组的格式: [{key:value,key:value},{key:value,key:value}]
//var personList = [person1,person2]
```

#### JSON对象和JSON字符串互转

* JSON对象转JSON字符串

```javascript
var jsonObj = {"stuName":"tom","stuAge":20};
var jsonStr = JSON.stringify(jsonObj);

console.log(typeof jsonObj); // object
console.log(typeof jsonStr); // string
```

* JSON字符串转JSON对象

```javascript
jsonObj = JSON.parse(jsonStr);
console.log(jsonObj); // {stuName: "tom", stuAge: 20}
```

## JavaScript的DOM(最重点)

### DOM的概念

DOM是<span style="color:blue;font-weight:bold;">D</span>ocument <span style="color:blue;font-weight:bold;">O</span>bject  <span style="color:blue;font-weight:bold;">M</span>odel的缩写，意思是<span style="color:blue;font-weight:bold;">『文档对象模型』</span>——将HTML文档抽象成模型，再封装成对象方便用程序操作。

这是一种非常常用的编程思想：将现实世界的事物抽象成模型，这样就非常容易使用对象来量化的描述现实事物，从而把生活中的问题转化成一个程序问题，最终实现用应用软件协助解决现实问题。而在这其中<span style="color:blue;font-weight:bold;">『模型』</span>就是那个连通现实世界和代码世界的桥梁。

### DOM树的概念

浏览器把HTML文档从服务器上下载下来之后就开始按照<span style="color:blue;font-weight:bold;">『从上到下』</span>的顺序<span style="color:blue;font-weight:bold;">『读取HTML标签』</span>。每一个标签都会被封装成一个<span style="color:blue;font-weight:bold;">『对象』</span>。

而第一个读取到的肯定是根标签html，然后是它的子标签head，再然后是head标签里的子标签……所以从html标签开始，整个文档中的所有标签都会根据它们之间的<span style="color:blue;font-weight:bold;">『父子关系』</span>被放到一个<span style="color:blue;font-weight:bold;">『树形结构』</span>的对象中。

![img003.png](https://s2.loli.net/2023/02/18/69odAuyzxq2FCQs.png)

这个包含了所有标签对象的整个树形结构对象就是JavaScript中的一个<span style="color:blue;font-weight:bold;">可以直接使用的内置对象</span>：<span style="color:blue;font-weight:bold;">document</span>。

例如，下面的标签结构：

![img004.png](https://s2.loli.net/2023/02/18/qdtnEPZFG3p57He.png)

会被解析为：

![img005.png](https://s2.loli.net/2023/02/18/ltVamF2Gpuehvqd.png)

### 各个组成部分的类型

整个文档中的一切都可以看做Node。各个具体组成部分的具体类型可以看做Node类型的子类。

> 其实严格来说，JavaScript并不支持真正意义上的『继承』，这里我们借用Java中的『继承』概念，从逻辑上来帮助我们理解各个类型之间的关系。

| 组成部分         | 节点类型 | 具体类型 |
| ---------------- | -------- | -------- |
| 整个文档         | 文档节点 | Document |
| HTML标签         | 元素节点 | Element  |
| HTML标签内的文本 | 文本节点 | Text     |
| HTML标签内的属性 | 属性节点 | Attr     |
| 注释             | 注释节点 | Comment  |

### 父子关系

<img src="https://s2.loli.net/2023/02/18/1LY3tWkJKdrRo74.png" alt="img006.png" style="zoom:50%;" />

### 先辈后代关系

<img src="https://s2.loli.net/2023/02/18/17HABd9bQGVWoJ5.png" alt="img007.png" style="zoom:50%;" />

### DOM操作

由于实际开发时基本上都是使用JavaScript的各种框架来操作，而框架中的操作方式和我们现在看到的原生操作完全不同，所以下面罗列的API仅供参考，不做要求。

#### 在整个文档范围内查询元素节点

| 功能               | API                                     | 返回值           |
| ------------------ | --------------------------------------- | ---------------- |
| 根据id值查询       | document.getElementById(“id值”)         | 一个具体的元素节 |
| 根据标签名查询     | document.getElementsByTagName(“标签名”) | 元素节点数组     |
| 根据name属性值查询 | document.getElementsByName(“name值”)    | 元素节点数组     |
| 根据类名查询       | document.getElementsByClassName("类名") | 元素节点数组     |

#### 在具体元素节点范围内查找子节点

| 功能               | API                                                        | 返回值         |
| ------------------ | ---------------------------------------------------------- | -------------- |
| 查找子标签         | element.children                                           | 返回子标签数组 |
| 查找第一个子标签   | element.firstElementChild<br />【W3C考虑换行，IE≤8不考虑】 | 标签对象       |
| 查找最后一个子标签 | element.lastElementChild<br />【W3C考虑换行，IE≤8不考虑】  | 节点对象       |

#### 查找指定元素节点的父节点

| 功能                     | API                   | 返回值   |
| ------------------------ | --------------------- | -------- |
| 查找指定元素节点的父标签 | element.parentElement | 标签对象 |

#### 查找指定元素节点的兄弟节点

| 功能               | API                                                          | 返回值   |
| ------------------ | ------------------------------------------------------------ | -------- |
| 查找前一个兄弟标签 | node.previousElementSibling<br />【W3C考虑换行，IE≤8不考虑】 | 标签对象 |
| 查找后一个兄弟标签 | node.nextElementSibling<br />【W3C考虑换行，IE≤8不考虑】     | 标签对象 |

#### 扩展内容(根据选择器查找标签)

| 功能                   | API                                 | 返回值   |
| ---------------------- | ----------------------------------- | -------- |
| 根据选择器查找一个标签 | document.querySelector("选择器")    | 标签对象 |
| 根据选择器查找多个标签 | document.querySelectorAll("选择器") | 标签数组 |

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>DOM查找节点</title>
    </head>
    <body>
        <input type="text" id="username">
        <input type="text" class="c1">
        <input type="text" class="c1">
        <div>
            <div></div>
            <div></div>
        </div>
        <script>
            //根据id查询标签
            var elementById = document.getElementById("username");
            //console.log(elementById)
            //根据类名查询标签
            var elementsByClassName = document.getElementsByClassName("c1");
            //console.log(elementsByClassName)
            //根据标签名查询标签
            var elementsByTagName = document.getElementsByTagName("input");
            //console.log(elementsByTagName)

            //查找子节点: 查找body的所有子标签,要注意文本也属于子节点
            /*var childNodes = document.getElementsByTagName("body")[0].childNodes;
        console.log(childNodes)*/

            //查找子标签: children
            var children = document.getElementsByTagName("body")[0].children;
            //console.log(children)

            //查找id为username的标签的父节点
            var parentNode = document.getElementById("username").parentNode;
            //console.log(parentNode)

            //查找id为username的标签的前一个兄弟标签
            var previousElementSibling = document.getElementById("username").previousElementSibling;
            //console.log(previousElementSibling)

            //查找id为username的标签的后一个兄弟标签
            var nextElementSibling = document.getElementById("username").nextElementSibling;
            //console.log(nextElementSibling)


            //根据选择器查找标签:document.querySelector("选择器")根据选择器查找一个标签, document.querySelectorAll("选择器")根据选择器查找多个标签
            //什么是选择器: 用于查找标签的一些表达式，其中最基本的三种选择器是:ID选择器、类选择器、标签选择器
            //选择器参考jQuery的文档
            //查找id为username的标签，使用的是id选择器
            var ipt1 = document.querySelector("#username");

            //console.log(ipt1)
            //查找body内的所有后代div，用的是层级选择器
            var ipts = document.querySelectorAll("body div");

            //查找id为username的标签的后面第一个兄弟
            var i1 = document.querySelector("#username+input");

            //查找id为username的标签的后面的所有兄弟
            var i2 = document.querySelectorAll("#username~input");

            console.log(i2)
        </script>
    </body>
</html>
```

##### 属性操作

| 需求       | 操作方式                   |
| ---------- | -------------------------- |
| 读取属性值 | 元素对象.属性名            |
| 修改属性值 | 元素对象.属性名=新的属性值 |

##### 标签体的操作

| 需求                         | 操作方式          |
| ---------------------------- | ----------------- |
| 获取或者设置标签体的文本内容 | element.innerText |
| 获取或者设置标签体的内容     | element.innerHTML |

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>操作标签的属性和文本</title>
    </head>
    <body>
        <input type="text" id="username" name="username" />
        <div id="d1">
            <h1>你好世界</h1>
        </div>
        <script>
            //目标: 获取id为username的输入框的value
            //1. 找到要操作的标签
            var ipt = document.getElementById("username");

            //2. 设置标签的value属性值
            ipt.value = "张三"

            //3. 获取标签的value属性的值
            var value = ipt.value;
            console.log(value)

            //获取id为d1的div中的文本内容
            //获取标签的文本: element.innerText,获取文本的时候会将左右两端的空格去掉
            var innerText = document.getElementById("d1").innerText;
            console.log(innerText)

            //获取标签体的内容: element.innerHTML,获取标签体的内容
            var innerHTML = document.getElementById("d1").innerHTML;
            console.log(innerHTML)

            //设置标签体的内容:建议使用innerHTML，如果是使用innerText的话它会将标签当做普通文本处理
            document.getElementById("d1").innerHTML = "<h1>hello world</h1>"
        </script>
    </body>
</html>
```

##### DOM增删改操作

| API                                      | 功能                                       |
| ---------------------------------------- | ------------------------------------------ |
| document.createElement(“标签名”)         | 创建元素节点并返回，但不会自动添加到文档中 |
| document.createTextNode(“文本值”)        | 创建文本节点并返回，但不会自动添加到文档中 |
| element.appendChild(ele)                 | 将ele添加到element所有子节点后面           |
| parentEle.insertBefore(newEle,targetEle) | 将newEle插入到targetEle前面                |
| parentEle.replaceChild(newEle, oldEle)   | 用新节点替换原有的旧子节点                 |
| element.remove()                         | 删除某个标签                               |
| element.innerHTML                        | 读写HTML代码                               |

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>创建和删除标签</title>
    </head>
    <body>
        <ul id="city">
            <li id="bj">北京</li>
            <li id="sh">上海</li>
            <li id="sz">深圳</li>
            <li id="gz">广州</li>
        </ul>
        <script>
            //目标1: 在城市列表的最后添加一个子标签 <li id="cs">长沙</li>
            //1. 创建一个li标签  <li></li>
            var liElement = document.createElement("li");
            //2. 给创建的li标签设置id属性和文本 <li id="cs">长沙</li>
            liElement.id = "cs"
            liElement.innerText = "长沙"
            //3. 将创建的li标签添加到城市列表中（ul）
            var cityUl = document.getElementById("city");

            //父.appendChild(子)将子标签添加到父标签的最后面
            //cityUl.appendChild(liElement)

            //目标2:在城市列表的深圳之前添加一个子标签 <li id="cs">长沙</li>
            //获取到深圳这个标签
            var szElement = document.getElementById("sz");
            //父.insertBefore(新标签,参照标签)
            //cityUl.insertBefore(liElement,szElement)

            //目标3: 在城市列表中添加一个子标签替换深圳 <li id="cs">长沙</li>
            //父.replaceChild(新标签,被替换的标签)
            //cityUl.replaceChild(liElement,szElement)

            //目标4: 在城市列表中删除深圳
            //szElement.remove()

            //目标5: 清除城市列表中的所有城市,保留城市列表标签ul
            cityUl.innerHTML = ""
        </script>
    </body>
</html>
```



## JavaScript的事件驱动(很重要)

### 事件的概念

* HTML 事件是发生在 HTML 元素上的“事情”， 是浏览器或用户做的某些事情
* 事件通常与函数配合使用，这样就可以通过发生的事件来驱动函数执行。

### 常见事件

| 属性        | 此事件发生在何时...                  |
| ----------- | ------------------------------------ |
| onclick     | 当用户点击某个对象时调用的事件句柄。 |
| ondblclick  | 当用户双击某个对象时调用的事件句柄。 |
| onchange    | 域的内容被改变。                     |
| onblur      | 元素失去焦点。                       |
| onfocus     | 元素获得焦点。                       |
| onload      | 一张页面或一幅图像完成加载。         |
| onsubmit    | 确认按钮被点击；表单被提交。         |
| onkeydown   | 某个键盘按键被按下。                 |
| onkeypress  | 某个键盘按键被按住。                 |
| onkeyup     | 某个键盘按键被松开。                 |
| onmousedown | 鼠标按钮被按下。                     |
| onmouseup   | 鼠标按键被松开。                     |
| onmouseout  | 鼠标从某元素移开。                   |
| omouseover  | 鼠标移到某元素之上。                 |
| onmousemove | 鼠标被移动。                         |

### 事件绑定的方式

#### 普通函数方式

说白了设置标签的属性

```html
<标签 属性="js代码，调用函数"></标签>
```

#### 匿名函数方式

```html
<script>
    标签对象.事件属性 = function(){
        //执行一段代码
    }
</script>
```

#### 事件的使用介绍

+ 点击事件

  需求: 没点击一次按钮 弹出hello...

```js
<input type="button" value="按钮" onclick="fn1()">

    <input type="button" value="另一个按钮" id="btn">
        <script>
        //当点击的时候要调用的函数
        function fn1() {
        alert("我被点击了...")
    }

//给另外一个按钮，绑定点击事件:
//1.先根据id获取标签
let btn = document.getElementById("btn");
//2. 设置btn的onclick属性(绑定事件)
//绑定命名函数
//btn.onclick = fn1

//绑定匿名函数
btn.onclick = function () {
    console.log("点击了另外一个按钮")
}
</script>
```

+ 获得焦点(onfocus)和失去焦点(onblur)

  需求:给输入框设置获得和失去焦点

```js
var ipt = document.getElementById("ipt");

//绑定获取焦点事件
ipt.onfocus = function () {
    console.log("获取焦点了...")
}

//绑定失去焦点事件
ipt.onblur = function () {
    console.log("失去焦点了...")
}
```

+ 内容改变(onchange)

  需求: 给select设置内容改变事件

```HTML
<body>
    <!--内容改变(onchange)-->
    <select onchange="changeCity(this)">
        <option value="bj">北京</option>
        <option value="sh">上海</option>
        <option value="sz">深圳</option>
    </select>

</body>
<script>
    function changeCity(obj) {
        console.log("城市改变了"+obj.value);
    }
</script>
```

+ 键盘相关的, 键盘按下(onkeydown)  键盘抬起(onkeyup)

```java
//给输入框绑定键盘按键按下和抬起事件
ipt.onkeydown = function () {
    //当按键按下的时候，数据并没有到达输入框
    //输出输入框里面的内容
    //console.log(ipt.value)
}

ipt.onkeyup = function () {
    //输出输入框的内容:当键盘按键抬起的时候，数据已经到达了输入框
    console.log(ipt.value)
}
```

+ 鼠标相关的, 鼠标在xx之上(onmouseover ), 鼠标按下(onmousedown),鼠标离开(onmouseout)

````java
//给输入框绑定鼠标移入事件
ipt.onmouseover = function () {
    console.log("鼠标移入了...")
}
//给输入框绑定鼠标移出事件
ipt.onmouseout = function () {
    console.log("鼠标移出了...")
}
````



#### 综合案例

**需求**

![img010.png](https://s2.loli.net/2023/02/18/gGFk6zeRHDW34YQ.png)

**代码实现**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>综合案例</title>
        <style>
            table,tr,td,th{
                border: 1px solid black;
                width: 500px;
                text-align: center;
                margin: auto;
            }

            div{
                text-align: center;
            }
        </style>
    </head>
    <body>
        <table cellspacing="0" id="tb">
            <tr>
                <th>序号</th>
                <th>用户名</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>1</td>
                <td>张三</td>
                <td>男</td>
                <td>
                    <button onclick="deletePerson(this)">删除</button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>李四</td>
                <td>女</td>
                <td>
                    <button onclick="deletePerson(this)">删除</button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>王五</td>
                <td>男</td>
                <td>
                    <button onclick="deletePerson(this)">删除</button>
                </td>
            </tr>
        </table>
        <div>
            <form action="#">
                序号<input type="text" name="num" id="num"><br/>
                用户<input type="text" name="username" id="username"/><br/>
                性别<input type="text" name="gender" id="gender"/><br/>
                <input type="button" value="添加用户" onclick="addPerson()"/>
            </form>
        </div>
        <script>
            //目标1:点击删除按钮，删除当前行
            //给所有按钮绑定点击事件
            function deletePerson(obj) {
                //此时obj就是你点击的那个按钮
                //我们要删除的就是obj的爷爷
                obj.parentElement.parentElement.remove()
            }

            function addPerson() {
                //添加用户
                //1. 获取序号、用户名、性别
                var numElement = document.getElementById("num");
                var num = numElement.value;

                var usernameElement = document.getElementById("username");
                var username = usernameElement.value;

                var genderElement = document.getElementById("gender");
                var gender = genderElement.value;

                //2. 将获取到的序号、用户名、性别添加到td中，td放到tr中，tr添加到table中
                //2.1 创建一行  <tr></tr>
                var trElement = document.createElement("tr");
                //2.2 往tr中添加标签体内容
                trElement.innerHTML = "<td>"+num+"</td>\n" +
                    "            <td>"+username+"</td>\n" +
                    "            <td>"+gender+"</td>\n" +
                    "            <td>\n" +
                    "                <button onclick=\"deletePerson(this)\">删除</button>\n" +
                    "            </td>"
                //2.3 将tr添加到表格中
                var tb = document.getElementById("tb");
                tb.appendChild(trElement)

                //3. 清空序号、用户名、性别
                numElement.value = ""
                usernameElement.value = ""
                genderElement.value = ""
            }
        </script>
    </body>
</html>
```





```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
   	<script language="javascript">
    	// 声明变量,不用给变量定义类型，给什么类型的值，变量就是什么类型的
        var str = "hello world";
        
        // 声明类
        var person = new Object();
        person.name = "jntm";
        person.id = 12;
        
        // 声明方法
        function hello(num1, num2, num3){
            if(num1>num2){
                return "jntm";
            }else {
                alter("jntm");
            }
        }
        // 调用方法,不用根据方法定义中参数的数量，来填入参数
        hello();
        hello(1);
        hello(1,2);
        hello(1,2,3,4);
    </script>
</head>
<body>
   
</body>
</html>
```



## 水果摊

```CSS
body{
    margin:0;
    padding: 0;
    background-color: cadetblue;
}
#div_container{
    height:100%;
    width:80%;
    background-color: antiquewhite;
    position: absolute;
    margin-left: 10%;
}
#tbl_fruit{
    border-style: solid;
    width: 60%;
    position: absolute;
    border-collapse: collapse;
    margin-top: 10%;
    margin-left: 20%;
}
#tbl_fruit tr, #tbl_fruit th,#tbl_fruit td{
    border:1px solid;
    width: 20%;
    height: 40px;
    text-align: center;
}
.dekImg{
    width: 20px;
    height: 20px;
}  
#div_add_furit{
    width: auto;
    margin-top: 40%;
    margin-left:40%;
    border:1px solid;
    float: left;
    text-align: center;
}
.button{
    width: 80px;
    height: 24px;
}
```

```JS
window.onload=function() {
    // 当页面加载完毕之后我们需要绑定各种各样的事件
    // 通过ID获取到指定的表格
    var fruitTbl = document.getElementById("tbl_fruit");
    // 获取到表格中的每一行的元素
    var rows = fruitTbl.rows;

    // 给每一行都绑定上指定的函数
    for(var i = 1; i < rows.length-1; i++){
        var tr = rows[i];
        // 显示颜色
        tr.onmouseover = showBGcolor;
        // 清除颜色
        tr.onmouseout = clearBGColor;

        var cells = tr.cells;
        var pirceID = cells[1];
        var delImg = cells[4].firstChild;
        // 显示手
        pirceID.onmouseover = showHand;
        // 点击修改价格
        pirceID.onclick = editPrice;
        if(delImg && delImg.tagName=="IMG"){
            // 删除表中数据
            delImg.onclick = delData;

        }
    }
    var fruitAdd = document.getElementById("submit");
    fruitAdd.onclick = addFruit;
    var fruitReset = document.getElementById("reset");
    fruitReset.onclick = resetFruit;
}

function resetFruit(){
    if(event && event.srcElement && event.srcElement.tagName=="INPUT"){
        var name = document.getElementById("fname");
        var price = document.getElementById("fprice");
        var number = document.getElementById("fnumber");
        name.value = null;
        price.value=null;
        number.value=null;

    }
}

function addFruit(){
    if(event && event.srcElement && event.srcElement.tagName=="INPUT"){
        var name = document.getElementById("fname");
        var price = document.getElementById("fprice");
        var number = document.getElementById("fnumber");
        if(name.value && price.value && number.value){
            if(isNumber(price.value) && isNumber(number.value)){
                var fruitNum = document.getElementById("tbl_fruit");
                var tr = fruitNum.insertRow(fruitNum.rows.length-1);
                var fname = tr.insertCell();
                fname.innerText = name.value;
                var fprice = tr.insertCell();
                fprice.innerText = price.value;
                var fnumber = tr.insertCell();
                fnumber.innerText = number.value;
                var fxj = tr.insertCell();
                fxj.innerText = parseInt(number.value)*parseInt(price.value);
                var fcaozuo = tr.insertCell();
                fcaozuo.innerHTML = "<img src='C:\\Users\\Nuyoah\\Downloads\\cha.png'  class='dekImg'>";
                tr.onmouseover = showBGcolor;
                tr.onmouseout = clearBGColor;
                var cells = tr.cells;
                var pirceID = cells[1];
                var delImg = cells[4].firstChild;
                // 显示手
                pirceID.onmouseover = showHand;
                // 点击修改价格
                pirceID.onclick = editPrice;
                if(delImg && delImg.tagName=="IMG"){
                    // 删除表中数据
                    delImg.onclick = delData;

                }
                updateZJ();
            }else {
                alert("水果价格或数量格式有误请从新输入");
            }
        } else {
            alert("信息输入不全，请补全之后在提交")
        }
    }
}
function showBGcolor(){
    // event: 当前发生事件
    // event.srcElement: 事件源
    // alert(event.srcElement);
    // alert(event.srcElement.tagName) == TD
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
        // 获取当前事件源
        var td = event.srcElement;
        // 获取该事件原的父级元素
        var tr = td.parentElement;

        // 将父级元素的背景颜色设置为navy
        tr.style.backgroundColor="navy";

        // 将子集元素的字体颜色设置为白色
        var tds = tr.cells;
        for(var i = 0; i < tds.length; i++){
            tds[i].style.color = "white";
        }
    }
}
function clearBGColor() {
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
        var td = event.srcElement;
        var tr = td.parentElement;

        tr.style.backgroundColor="transparent";
        var tds = tr.cells;
        for(var i = 0; i < tds.length; i++){
            tds[i].style.color = "black";
        }
    }
}

function showHand(){
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
        var td = event.srcElement;
        td.style.cursor = "pointer";
>>>>>>> 03badbb (github action update)
    }
}

function editPrice(){
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
<<<<<<< HEAD
        var priceTD = event.srcElement;
        //目的是判断当前priceTD有子节点，而且第一个子节点是文本节点,TextNode对应的是3ElementNode对应的是1
        if( priceTD.firstChild && priceTD.firstChild.nodeType==3){
            //innerText表示设置或者获取当前节点的内部文本
            var oldPrice = priceTD.innerText;
            //innerHTML表示设置当前节点的内部HTAL
            priceTD.innerHTML = "<input type='text' size=1>"
            var input = priceTD.firstChild;
            if(input.tagName == "INPUT"){
                // 选中框内部的文本
                input.value=oldPrice;
                input.select();
                // 绑定失去焦点事件，失去焦点，更新价格
                input.onblur = updataPrice;
            }
        }  
    }

}

function updataPrice(){
    if(event && event.srcElement && event.srcElement.tagName=="INPUT"){
        var input = event.srcElement;
        // 获取当前节点的父节点
        var priceTD = input.parentElement;
        var newPrice = input.value;
        priceTD.innerText = newPrice;
        // 更新小结
        updataXJ(priceTD.parentElement);
    }
}

function updataXJ(tr){
    if(tr && tr.tagName=="TR"){
        var tds = tr.cells;
        var price = parseInt(tds[1].innerText);
        var num = parseInt(tds[2].innerText);
        var xj = price*num;
        tds[3].innerText=xj;
        // 更新总计
        updataTotal()
    }
}

function updataTotal(){
    var fruitTbl = document.getElementById("tbl_fruit");
    
    var rows = fruitTbl.rows;
    var sum = 0;

    for( var i=1 ; i < rows.length-1; i++){
        var tr = rows[i];
        var price = parseInt(tr.cells[3].innerText);
        sum = sum + price;
    }
    rows[rows.length-1].cells[1].innerText = sum;
}

function showBGColor(){
    // event :当前发生的事件l
    //event.srcElement :事件源
    // alert(event.srcElement);
    // alert(event.srcElement.tagName);
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
        var td = event.srcElement;
        var tr = td.parentElement;
        tr.style.backgroundColor="navy";

        //tr.cells表示获取这个tr中的所有单元格
        var tds = tr.cells;
        for( var i = 0; i < tds.length; i++){
            tds[i].style.color="white";
        }
    }

}

function clearBGColor(){
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
        var td = event.srcElement;
        var tr = td.parentElement;
        tr.style.backgroundColor="transparent";

        //tr.cells表示获取这个tr中的所有单元格
        var tds = tr.cells;
        for( var i = 0; i < tds.length; i++){
            tds[i].style.color="threeddarkshadow";
        }
    }

}
function showHand(){
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
        var td = event.srcElement;
        // cursor光标
        td.style.cursor = "pointer";
=======
        // 获取到我们需要修改的表格的元素
        var pirceID = event.srcElement;
        // 判断当前节点有第一个节点，并且第一个节点是文本节点的话在进行如下操作
        if(pirceID.firstChild && pirceID.firstChild.nodeType==3){
            // innerText 表示获取当前节点的内部文本
            var oldPrice = pirceID.innerText;
            //innerHTML 表示设置当前节点内部的HTML
            pirceID.innerHTML = "<input type='text' size=4 />"
            var input = pirceID.firstChild;
            if(input.tagName == "INPUT") {
                input.value = oldPrice;
                // 自动选中文本
                input.select();
                // 绑定输入框失去焦点事件，失去焦点，更新单价
                input.onblur=updatePrice;
            }
        } 
    }
}

function updatePrice(oldPrice){
    if(event && event.srcElement && event.srcElement.tagName=="INPUT"){
        // 获取输入框
        var input = event.srcElement;
        // 获取新的价格
        var newPrice = input.value;
        if(isNumber(newPrice)){
            // 获取输入框的父节点td
            var td = input.parentElement;
            // 修改td中的内容为新的价格
            td.innerText = newPrice;

            // 获取商品的数量
            var tr = td.parentElement;

            // 更新小计
            updateXJ(tr);
            // 更新总计
            updateZJ();
        }else{
            alert("价格格式错误");
        }


    }
}

// 更新小计
function updateXJ(tr){
    if(tr && tr.tagName=="TR"){
        var tds = tr.cells;
        var total = tds[3];
        total.innerText = parseInt(tds[1].innerText) * parseInt(tds[2].innerText);
    }
}

// 更新总计
function updateZJ(){
    var fruitTbl = document.getElementById("tbl_fruit");

    var trs = fruitTbl.rows;
    // 初始化数据为零
    var num = 0;
    for(var i = 1; i < trs.length-1; i++){
        num += parseInt(trs[i].cells[3].innerText);
    }
    trs[trs.length-1].cells[1].innerText = num;
}

// 删除数据
function delData(){
    if(event && event.srcElement && event.srcElement.tagName=="IMG"){
        // alert 表示弹出一个对话框
        // confirm表示弹出一个带确定和取消按钮的对话框，确定返回true，取消返回false
        if(window.confirm("是否确定删除")){
            var img = event.srcElement;
            var tr = img.parentElement.parentElement;
            var fruitTbl = document.getElementById("tbl_fruit");

            fruitTbl.deleteRow(tr.rowIndex);
            updateZJ();
        }

    }
}

function isNumber(num){
    if(isNaN(Number(num, 10))){
        return false;
    }else{
        return true;
>>>>>>> 03badbb (github action update)
    }
}
```

<<<<<<< HEAD
=======
```HTML
<body>
    <div id="div_container">
        <div id="div_furit_list">
            <table id="tbl_fruit">
                <tr>
                    <th>名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>小计</th>
                    <th>操作</th>
                </tr>
                <tr>
                    <td>苹果</td>
                    <td onmouseover="showHand()">5</td>
                    <td>50</td>
                    <td>250</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>梨</td>
                    <td>6</td>
                    <td>60</td>
                    <td>360</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>香蕉</td>
                    <td>7</td>
                    <td>70</td>
                    <td>490</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>菠萝</td>
                    <td>8</td>
                    <td>80</td>
                    <td>640</td>
                    <td><img src="C:\Users\Nuyoah\Downloads\cha.png"  class="dekImg"></td>
                </tr>
                <tr>
                    <td>总计</td>
                    <td colspan=4>300</td>
                </tr>
            </table>
        </div>
        <div id="div_add_furit">
            <table id="tbl_add">
                <tr>
                    <td>名称:</td>
                    <td><input type="text" id="fname" value="橙子"/></td>
                </tr>
                <tr>
                    <td>单价:</td>
                    <td><input type="text" id="fprice" value="8"/></td>
                </tr>
                <tr>
                    <td>数量:</td>
                    <td><input type="text" id="fnumber" value="30"/></td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="button" class="button" id="submit" value="添加"/>
                        <input type="button" class="button" id="reset" value="重填"/>
                    </td>
                    
                </tr>
            </table>
        </div>
    </div>
</body>
```



# WEB

## CS与BS异同

CS：客户端服务器架构模式

- 优点：充分利用客户端的机器资源，减轻服务器的负荷（将一部分安全性不高的计算任务存储任务放在客户端，不要把所有计算和存储任务都放在服务器端执行，从而减轻服务器的压力，也能够减轻网络的负荷）

- 缺点：需要安装，升级成本较大

BS：浏览器服务器架构模式

- 优点：不需要安装，升级成本小
- 缺点：所有的计算和存储任务都放在服务器端执行，服务器的负荷比较重，在服务器端完成计算之后再将结果传回浏览器端，因此客户端服务器端会进行非常频繁的数据通信，从而网络负荷较重。

## TOMCAT

tomcat是本地服务器

目录说明：

1. bin：存放可执行文件的目录
2. conf：存放配置文件的目录
3. lib：存放第三方包的目录
4. logs：存放日志文件的目录
5. webapps：项目部署的目录
6. work：工作目录
7. temp：临时目录

配置环境变量：TOMCAT是用java和C来写的，需要配置JAVA_HOME

WebAPP最基本的文件夹有两个：1.项目文件夹 2.WEB-INF文件夹



## 项目执行过程

客户端发起请求 -> 服务器端处理请求

以form表单为例

1. 用户发起请求， action=add
2. 在项目的web.xml文件夹中找到url-pattern = /add
3. 找到add对应的servlet-name的对应的servlet-class
4. 根据用户发送的是post请求还是get请求，从而调用对应java类中的doPost还是doGet方法



## 模块创建过程

1. 新建空项目

2. 在项目中新建模块

3. 在模块中添加WEB包

4. 创建Artifact-部署包

5. lib-artifact

   现有artifact再有的lib的各种jar包，但是这时候这个jar包并没有添加到部署包中，我们在projectSettings中有Problem会提示，点击Fix选择add to...即可，另外我们也可以直接把lib文件夹新建到WEB-INF下，这样的话这个lib只能是当前这个模块所享有，如果我们需要新建模块的话则需要再重新新建包	

6. 在部署的时候，修改applicationContext，然后再回到server选项卡，检查url的值，url的值指的是tomcat启动完成之后自动打开你指定的浏览器，并且访问这个网址，如果我们的网址是：http://localhost:8080/pro-01 则我们默认访问index.html,index.htm,index.jsp,如果没有这个三个资源的话则会报404错误，默认访问页面可以通过< welcome-file-list >中设置

7. 空指针一般是，数据取不到，或者是参数名不对应造成的



# Servlet

## 获取参数

```JAVA
public class AddServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置字符集
        req.setCharacterEncoding("utf-8");
        // 获取参数
        String fname = req.getParameter("fname");
        String fpriceStr = req.getParameter("fprice");
        int fprice = Integer.parseInt(fpriceStr);
        String fcountStr = req.getParameter("fcount");
        int fcount = Integer.parseInt(fcountStr);
        String remark = req.getParameter("remark");
        String idStr = req.getParameter("fid");
        int fid = Integer.parseInt(idStr);
		
        // 创建数据库连接对象
        FruitDAO fruitDAO = new FruitImp();
        // 获取连接
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        // 将数据插入到数据库中
        fruitDAO.insert(connection, new Fruit(fid, fname,fprice, fcount, remark));
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }
}
```



## 中文乱码

- POST
  - 通过设置req.setCharacterEncoding("UTF-8")即可
- GET
  - tomcat8之后不用设置编码问题
  - tomcat8之前
    - 先将字符串转换成二进制的形式byte[] bytes = fname.getBytes("ISO-8859-1");
    - 将字节数组按照指定的编码重新组装成字符串 fname = new String(bytes, "UTF-8");

## 继承关系



1. 继承关系

   javax.servlet.Servlet接口

   ​	javax.servlet.GenericServlet抽象类

   ​		javax.servlet.http.HttpServlet 抽象子类

2. 相关方法

   javax.servlet.Servlet接口：

   ​	void init(config) -初始化方法

   ​	void service(request, response) -服务方法

   ​	void destory()		- 销毁方法

   javax.servlet.GenericServlet抽象类：

   ​	void service(request, response) - 仍是抽象方法

   javax.servlet.http.HttpServlet 抽象子类

   ​	void service(request, response) - 不是抽象的的

   	1. String method = req.getMethod(); 获取请求的方式
   	1. 各种if判断，根据请求方式不同，决定去调用不同的do方法
   	1. 在HTTPServlet这个抽象类中，do方法都差不多

3. 小结

   1. 继承关系HttpServlet - > GenericServlet -> Servlet
   2. Servlet中的核心方法：init(), service(), destory()
   3. service()方法：当有请求过来的时候都要经过这个方法，
      1. 在HttpServlet中我们回去分析请求的方式，到底是get，post，head等等
      2. 通过不同的方法，调用不同的do...()方法
      3. {% span red, 在HttpServlet中这些方法默认是405,这时候如果我们需要调用get或者是post方法的话，则必须要重写这个方法，否则会直接包405错误 %}
   4. 因此我们在新建Servlet时，我们才会去考虑请求方法，从而决定重写那个do方法



## 生命周期

1. 生命周期：从出生到死亡的过程就是生命周期，对应着Servlet的中的三个方法：init(), service(), destory()

2. 默认情况下：

   1. 第一次接受请求时：这个Servlet会进行实例化（调用构造方法），初始化（调用init()）,然后服务（调用service）
   2. 从第二次请求开始，每一次都是服务，不必再进行实例化
   3. 当容器关闭的时候，其中所有的servlet实例会被销毁，调用销毁方法

3. 通过案例发现

   - servlet实例，tomcat只会创建一个，所有请求都是{% span red, 这个实例 %}去相应
   - 默认情况下，第一次请求时，tomcat才回去实例化，初始化，然后服务，这样做的好处是什么? {% span red, 提高系统启动速度 %}
   - 因此得出结论：如果需要提高系统启动速度，当前默认情况就是这样，如果需要提高响应速度，我们应该设置Servlet的启动时机

4. Servlet的启动时机

   - 默认是第一次Servlet请求的时候进行实例化，初始化

   - 我们可以通过< load-on-startup >来设置servlet的启动顺序，数字越小，启动越靠前，最小值为0

     ```XML
     <servlet>
         <servlet-name>DemoServlet01</servlet-name>
         <servlet-class>com.hgu.servlet.DemoServlet01</servlet-class>
         <load-on-startup>1</load-on-startup>
     </servlet>
     <servlet-mapping>
         <servlet-name>DemoServlet01</servlet-name>
         <url-pattern>/demo01</url-pattern>
     </servlet-mapping>
     ```

     

5. Servlet在容器的中是单例的，线程不安全的 

   - 单例：所有请求都是同一个实例去相应，因为servlet实例tomcat只会创建一次
   - 线程不安全的：一个线程需要根据这个实例中的某个成员变量的值去做逻辑判断，但是在中间的某个时机，另一个线程改变了这个之，就会导致不能达到预期结果
   - 我们尽可能不要再Servlet中定义成员变量，如果必须要定义的话，便不要根据成员变量的值去做一些逻辑判断

.

## HTTP协议

1. Http称之为超文本传输协议

2. Http是无状态的

3. Http请求相应包含两个部分：请求和相应

   - 请求：

     请求包括三个部分：1. 请求行 2. 请求头 3. 请求主体

     - 请求行包括三个部分1. 请求的方式， 2. 请求的URL， 3.请求的协议

       ![image-20230129163350998.png](https://s2.loli.net/2023/02/18/E8gSNsPVbqzWXGM.png)

     - 请求消息头中包括了很多客户端要告诉服务器的信息
     
       作用：通过具体的参数对本次请求进行详细的说明
     
       格式：键值对，键和值之间使用冒号隔开
     
       相对比较重要的请求消息头：
     
       | 名称           | 功能                                                 |
       | -------------- | ---------------------------------------------------- |
       | Host           | 服务器的主机地址                                     |
       | Accept         | 声明当前请求能够接受的『媒体类型』                   |
       | Referer        | 当前请求来源页面的地址                               |
       | Content-Length | 请求体内容的长度                                     |
       | Content-Type   | 请求体的内容类型，这一项的具体值是媒体类型中的某一种 |
       | Cookie         | 浏览器访问服务器时携带的Cookie数据                   |
     
       ![image-20230129163408046.png](https://s2.loli.net/2023/02/18/fPUegR1ZdYtJhmH.png)
     
     - 请求体，三种情况
     
       get方式，没有请求体，但是有一个querystring
     
       post方式，有请求体，form data
     
       json格式，有请求体，request payload
     
   - 响应：响应行，响应头，响应体
   
     ![image-20230129163742437.png](https://s2.loli.net/2023/02/18/KoybgQN2dYSreTG.png)
   
     ![image-20230129163803935.png](https://s2.loli.net/2023/02/18/FGKqzX2U9VhtHRW.png)
   
     - 响应行：包含三个信息：1.协议 2.状态响应码(200) 3.响应状态(OK)
     - 响应头：包含了服务器的信息，服务器发送给浏览器的信息（内容的媒体类型，编码，内容长度等）
     - 响应体：响应的实际的内容

## Session会话

1. Http是无状态的

   - Http无状态：如果有两个请求发送过来，服务器无法区分这两个请求是否是同一个用户发送过来的
   - 通过会话跟踪技术来解决这个问题，给这个会话一个标识，通过这个标识来判断是否是同一个用户

2. 会话跟踪技术

   - 客户端第一次发请求给服务器，服务器获取session，获取不到，则创建新的，然后响应给客户端
   - 下次客户端给服务器法请求的时候，会把sessionID带给服务器，服务器通过sessionID判断这次会话和那一次的是同一个用户
   - 常用API：
     - request.getSession -> 获取当前会话，没有则创建一个新的会话
     - request.getSession(true) -> 作用和上面的一样
     - request.getSession(false) -> 获取当前会话，没有则返回null
     - session.getId()   -> 获取sessionID
     - session.isNew()   -> 判断当前session是否是第一次访问
     - session.getMaxInactiveInterval() -> session的非激活间隔时长，默认1800秒
     - session.setMaxInactiveInterval()
     - session.invalidate() -> 强制性会话立即失效

3. session保存作用域

   - session保存作用域是和具体的某一个session对应的, 作用域就是本session内部

   - 常用的API

     session.setAttribute(k, v)

     session.getAttribute(k)

     session.removeAttribute(k)

## 服务器内部转发以及客户端重定向

服务器内部转发：request.getRequestDispatcher("....").forward(request,response);

- 当浏览器向服务器请求的时候，服务器内部的servlet1 直接跳转到servlet2中执行，最终浏览器请求接受的是servlet1，但实际处理的确实servlet2
- 一次请求相应的过程，对于客户端而言，内部经过了多少次的转发，客户端并不知晓
- 地址栏的URL并不会改变

客户端重定向： response.sendRedirect("....")

- 当浏览器向服务器发送请求的时候，服务器内部的servlet1 返回给浏览器，让浏览器去请求servlet02，然后浏览器在从新请求servlet2
- 多次请求相应的过程，对于客户端而言，知道url变化了几次
- 地址栏的URL会发生改变



## Thymeleaf-视图模板技术

1. 添加thymeleaf的jar包

   ![image-20230129220255245.png](https://s2.loli.net/2023/02/18/QovE2cjslmMi1gn.png)

2. 新建一个Servlet类ViewBaseServlet

   ```JAVA
   package com.hgu.myssm.myspringmvc;
   
   import org.thymeleaf.TemplateEngine;
   import org.thymeleaf.context.WebContext;
   import org.thymeleaf.templatemode.TemplateMode;
   import org.thymeleaf.templateresolver.ServletContextTemplateResolver;
   
   import javax.servlet.ServletContext;
   import javax.servlet.ServletException;
   import javax.servlet.http.HttpServlet;
   import javax.servlet.http.HttpServletRequest;
   import javax.servlet.http.HttpServletResponse;
   import java.io.IOException;
   
   public class ViewBaseServlet extends HttpServlet {
   
       private TemplateEngine templateEngine;
   
       @Override
       public void init() throws ServletException {
   
           // 1.获取ServletContext对象
           ServletContext servletContext = this.getServletContext();
   
           // 2.创建Thymeleaf解析器对象
           ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(servletContext);
   
           // 3.给解析器对象设置参数
           // ①HTML是默认模式，明确设置是为了代码更容易理解
           templateResolver.setTemplateMode(TemplateMode.HTML);
   
           // ②设置前缀
           String viewPrefix = servletContext.getInitParameter("view-prefix");
   
           templateResolver.setPrefix(viewPrefix);
   
           // ③设置后缀
           String viewSuffix = servletContext.getInitParameter("view-suffix");
   
           templateResolver.setSuffix(viewSuffix);
   
           // ④设置缓存过期时间（毫秒）
           templateResolver.setCacheTTLMs(60000L);
   
           // ⑤设置是否缓存
           templateResolver.setCacheable(true);
   
           // ⑥设置服务器端编码方式
           templateResolver.setCharacterEncoding("utf-8");
   
           // 4.创建模板引擎对象
           templateEngine = new TemplateEngine();
   
           // 5.给模板引擎对象设置模板解析器
           templateEngine.setTemplateResolver(templateResolver);
   
       }
   
       protected void processTemplate(String templateName, HttpServletRequest req, HttpServletResponse resp) throws IOException {
           // 1.设置响应体内容类型和字符集
           resp.setContentType("text/html;charset=UTF-8");
   
           // 2.创建WebContext对象
           WebContext webContext = new WebContext(req, resp, getServletContext());
   
           // 3.处理模板数据
           templateEngine.process(templateName, webContext, resp.getWriter());
       }
   }
   ```

   

3. 在web.xml文件中添加配置

   - 前缀：view-prefix
   - 后缀：view-suffix

   ```XML
   <!-- 在上下文参数中配置视图前缀和视图后缀 -->
   <context-param>
       <param-name>view-prefix</param-name>
       <param-value>/WEB-INF/view/</param-value>
   </context-param>
   <context-param>
       <param-name>view-suffix</param-name>
       <param-value>.html</param-value>
   </context-param>
   ```

   

4. 使我们的Servlet继承ViewBaseServlet

### TH名称空间

![img011.f6f1e569.png](https://s2.loli.net/2023/02/18/O8URQ6Vuwh9DXxt.png)

### 表达式语法

#### 修改标签文本值

代码示例：

```html
<p th:text="标签体新值">标签体原始值</p>
```

##### th:text作用

- 不经过服务器解析，直接用浏览器打开HTML文件，看到的是『标签体原始值』
- 经过服务器解析，Thymeleaf引擎根据th:text属性指定的『标签体新值』去**替换**『标签体原始值』

##### 字面量

『字面量』是一个经常会遇到的概念，我们可以对照『变量』来理解它的含义。

```java
// a是变量，100是字面量
int a = 100;
System.out.println("a = " + a);
```

- 变量：变量名字符串本身不是它的值，它指向的才是它的值
- 字面量：它就是字面上的含义，我们从『字面』上看到的直接就是它的值

现在我们在th:text属性中使用的就是『字面量』，它**不指代任何其他值**。

#### 修改指定属性值

代码示例：

```html
<input type="text" name="username" th:value="文本框新值" value="文本框旧值" />
```

语法：任何HTML标签原有的属性，前面加上『th:』就都可以通过Thymeleaf来设定新值。

#### 解析URL地址

##### 基本语法

代码示例：

```html
<p th:text="@{/aaa/bbb/ccc}">标签体原始值</p>
```

1

经过解析后得到：

> /view/aaa/bbb/ccc

所以@{}的作用是**在字符串前附加『上下文路径』**

> 这个语法的好处是：实际开发过程中，项目在不同环境部署时，Web应用的名字有可能发生变化。所以上下文路径不能写死。而通过@{}动态获取上下文路径后，不管怎么变都不怕啦！

##### 首页使用URL地址解析

![img018.3954c282.png](https://s2.loli.net/2023/02/18/65rxHCWM2FRecZq.png)

如果我们直接访问index.html本身，那么index.html是不需要通过Servlet，当然也不经过模板引擎，所以index.html上的Thymeleaf的任何表达式都不会被解析。

解决办法：通过Servlet访问index.html，这样就可以让模板引擎渲染页面了：

![img019.7663465a.png](https://s2.loli.net/2023/02/18/51aWVcnG2SPDYdz.png)

> 进一步的好处：
>
> 通过上面的例子我们看到，所有和业务功能相关的请求都能够确保它们通过Servlet来处理，这样就方便我们统一对这些请求进行特定规则的限定。

##### 给URL地址后面附加请求参数

参照官方文档说明：

![img037.78b02342.png](https://s2.loli.net/2023/02/18/ILadZMU2x71JXhN.png)

#### 直接执行表达式

Servlet代码：

```java
request.setAttribute("reqAttrName", "<span>hello-value</span>");
```

页面代码：

```html
<p>有转义效果：[[${reqAttrName}]]</p>
<p>无转义效果：[(${reqAttrName})]</p>
```

执行效果：

```html
    <p>有转义效果：&lt;span&gt;hello-value&lt;/span&gt;</p>
    <p>无转义效果：<span>hello-value</span></p>
```

### 基本语法：访问域对象

#### 域对象

##### 请求域

在请求转发的场景下，我们可以借助HttpServletRequest对象内部给我们提供的存储空间，帮助我们携带数据，把数据发送给转发的目标资源。

请求域：HttpServletRequest对象内部给我们提供的存储空间

![img012.8cffceee.png](https://s2.loli.net/2023/02/18/zbeCOc5wdAFltRM.png)

##### 会话域

![img013.0fde173c.png](https://s2.loli.net/2023/02/18/pcnbY3DqtvXjwC1.png)

##### 应用域

![./images](https://s2.loli.net/2023/02/18/NIXOYLl2PymSjJ7.png)

> PS：在我们使用的视图是JSP的时候，域对象有4个
>
> - pageContext
> - request：请求域
> - session：会话域
> - application：应用域
>
> 所以在JSP的使用背景下，我们可以说域对象有4个，现在使用Thymeleaf了，没有pageContext。

#### 在Servlet中将数据存入属性域

##### 操作请求域

Servlet中代码：

```java
String requestAttrName = "helloRequestAttr";
String requestAttrValue = "helloRequestAttr-VALUE";

request.setAttribute(requestAttrName, requestAttrValue);
```

Thymeleaf表达式：

```html
<p th:text="${helloRequestAttr}">request field value</p>
```

##### 操作会话域

Servlet中代码：

```java
// ①通过request对象获取session对象
HttpSession session = request.getSession();

// ②存入数据
session.setAttribute("helloSessionAttr", "helloSessionAttr-VALUE");
```



Thymeleaf表达式：

```html
<p th:text="${session.helloSessionAttr}">这里显示会话域数据</p>
```

##### 操作应用域

Servlet中代码：

```java
// ①通过调用父类的方法获取ServletContext对象
ServletContext servletContext = getServletContext();

// ②存入数据
servletContext.setAttribute("helloAppAttr", "helloAppAttr-VALUE");
```



Thymeleaf表达式：

```html
<p th:text="${application.helloAppAttr}">这里显示应用域数据</p>
```

### 获取请求参数

具体来说，我们这里探讨的是在页面上（模板页面）获取请求参数。底层机制是：

![./images](https://s2.loli.net/2023/02/18/GbfqctD64pNPn9V.png)

#### 一个名字一个值

页面代码：

```html
<p th:text="${param.username}">这里替换为请求参数的值</p>
```

页面显示效果：

![image-20230129223833990](https://s2.loli.net/2023/02/18/JbcGpefVu6qMCyd.png)

#### 一个名字多个值

页面代码：

```html
<p th:text="${param.team}">这里替换为请求参数的值</p>
```

页面显示效果：

![image-20230129223821591](https://s2.loli.net/2023/02/18/NwAMfmkgx1YZq3B.png)

如果想要精确获取某一个值，可以使用数组下标。页面代码：

```html
<p th:text="${param.team[0]}">这里替换为请求参数的值</p>
<p th:text="${param.team[1]}">这里替换为请求参数的值</p>
```

页面显示效果：

![image-20230129223848312](https://s2.loli.net/2023/02/18/PF3IZX1GYyQTKni.png)

### 分支与迭代

#### 分支

##### if和unless

让标记了th:if、th:unless的标签根据条件决定是否显示。

示例的实体类：

```java
public class Employee {

    private Integer empId;
    private String empName;
    private Double empSalary;
```

示例的Servlet代码：

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    // 1.创建ArrayList对象并填充
    List<Employee> employeeList = new ArrayList<>();

    employeeList.add(new Employee(1, "tom", 500.00));
    employeeList.add(new Employee(2, "jerry", 600.00));
    employeeList.add(new Employee(3, "harry", 700.00));

    // 2.将集合数据存入请求域
    request.setAttribute("employeeList", employeeList);

    // 3.调用父类方法渲染视图
    super.processTemplate("list", request, response);
}
```



示例的HTML代码：

```html
<table>
    <tr>
        <th>员工编号</th>
        <th>员工姓名</th>
        <th>员工工资</th>
    </tr>
    <tr th:if="${#lists.isEmpty(employeeList)}">
        <td colspan="3">抱歉！没有查询到你搜索的数据！</td>
    </tr>
    <tr th:if="${not #lists.isEmpty(employeeList)}">
        <td colspan="3">有数据！</td>
    </tr>
    <tr th:unless="${#lists.isEmpty(employeeList)}">
        <td colspan="3">有数据！</td>
    </tr>
</table>
```



if配合not关键词和unless配合原表达式效果是一样的，看自己的喜好。

##### switch

```html
<h3>测试switch</h3>
<div th:switch="${user.memberLevel}">
    <p th:case="level-1">银牌会员</p>
    <p th:case="level-2">金牌会员</p>
    <p th:case="level-3">白金会员</p>
    <p th:case="level-4">钻石会员</p>
</div>
```



#### 迭代

```html
<h3>测试each</h3>
<table>
    <thead>
        <tr>
            <th>员工编号</th>
            <th>员工姓名</th>
            <th>员工工资</th>
        </tr>
    </thead>
    <tbody th:if="${#lists.isEmpty(employeeList)}">
        <tr>
            <td colspan="3">抱歉！没有查询到你搜索的数据！</td>
        </tr>
    </tbody>
    <tbody th:if="${not #lists.isEmpty(employeeList)}">
        <!-- 遍历出来的每一个元素的名字 : ${要遍历的集合} -->
        <tr th:each="employee : ${employeeList}">
            <td th:text="${employee.empId}">empId</td>
            <td th:text="${employee.empName}">empName</td>
            <td th:text="${employee.empSalary}">empSalary</td>
        </tr>
    </tbody>
</table>
```



在迭代过程中，可以参考下面的说明使用迭代状态：

![./images](https://s2.loli.net/2023/02/18/VIbOgyGwCYDmL6r.png)

```html
<h3>测试each</h3>
<table>
    <thead>
        <tr>
            <th>员工编号</th>
            <th>员工姓名</th>
            <th>员工工资</th>
            <th>迭代状态</th>
        </tr>
    </thead>
    <tbody th:if="${#lists.isEmpty(employeeList)}">
        <tr>
            <td colspan="3">抱歉！没有查询到你搜索的数据！</td>
        </tr>
    </tbody>
    <tbody th:if="${not #lists.isEmpty(employeeList)}">
        <!-- 遍历出来的每一个元素的名字 : ${要遍历的集合} -->
        <tr th:each="employee,empStatus : ${employeeList}">
            <td th:text="${employee.empId}">empId</td>
            <td th:text="${employee.empName}">empName</td>
            <td th:text="${employee.empSalary}">empSalary</td>
            <td th:text="${empStatus.count}">count</td>
        </tr>
    </tbody>
</table>
```





## 保存作用域

远视情况下，保存作用域有四个：page(页面级别，几乎不用)，request(一起请求响应范围), session(一次回话范围)，application(一次应用程序范围)

1. request,只能保留一次请求

   ```Java
   request.setAttribute("k","v");
   request.getAttribute("k");
   ```

2. session，可以保留多次请求，但是只局限于同一个Session，换浏览器就不行了

   ```JAVA
   request.getSession().setAttribute("k", "v");
   request.getSession().getAttribute("k");
   ```

3. application，可以保留多次请求，贯穿于整个服务器之间，换浏览器也能获取到参数

   ```JAVA
   ServletContext application = request.getServletContext();
   application.setAttribute("k", "v");
   application.getAttribute("k");
   ```



## 路径问题

相对路径和绝对路径

绝对路径

```HTML
<base herf="路径" >
<!--这个就是绝对路径-->
<link th:href="@{/css/shpping.css}">
```





# Servlet优化

## 减少Servlet数量

{% tip error %}未优化前{% endtip %}

一个客户端对着多个同类的Servlet

![image-20230131153936837](https://s2.loli.net/2023/02/18/ikr4px9YDdPQqj5.png)

客户端对应着的都是fruit相关的Servlet

项目结构：

![image-20230131154043004](https://s2.loli.net/2023/02/18/isEVajkhQvudgFI.png)

{% tip success %}优化后{% endtip %}

客户端只对应着一个同类Servlet

![image-20230131154525718](https://s2.loli.net/2023/02/18/DGjwToF4aY1pu3z.png)

项目结构

![image-20230131155900579](https://s2.loli.net/2023/02/18/jVzvpcIP5QCRkMF.png)

```JAVA
package com.hgu.servlets;

import com.hgu.fruit.dao.FruitImp;
import com.hgu.fruit.dao.inter.FruitDAO;
import com.hgu.fruit.pojo.Fruit;
import com.hgu.myssm.myspringmvc.ViewBaseServlet;
import com.hgu.utils.JDBCUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.sql.Connection;
import java.util.ArrayList;

@WebServlet("/fruit.do")
public class FruitServlet extends ViewBaseServlet {

    private FruitImp fruitImp = new FruitImp();

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");

        String operator = req.getParameter("operator");
        // 如果是空的话则默认是index
        if(JDBCUtils.isEmpty(operator)){
            operator = "search";
        }
        // 通过反射获取所有方法
        Method[] methods = this.getClass().getDeclaredMethods();
        // 判断我们传进来的参数是那个一方法
        for (Method m : methods) {
            // 获取参数名
            String methodName = m.getName();
            if(methodName.equals(operator)){
                try {
                    m.invoke(this, req, resp);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                } 
            }
        }
    }
    private void update(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        String fidStr = req.getParameter("fid");
        int fid = Integer.parseInt(fidStr);

        String fname = req.getParameter("fname");
        String fpriceStr = req.getParameter("fprice");
        Double fprice = Double.parseDouble(fpriceStr);

        String fcountStr = req.getParameter("fcount");
        int fcount = Integer.parseInt(fcountStr);

        String remark = req.getParameter("remark");

        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        fruitImp.update(connection, new Fruit(fid, fname, fprice, fcount, remark));

        resp.sendRedirect("fruit.do");
    }
    private void edit(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String  fidStr = req.getParameter("fid");
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Fruit fruit = fruitImp.getFruitByID(connection, Integer.parseInt(fidStr));

        req.setAttribute("fruit", fruit);
        super.processTemplate("edit", req, resp);

    }
    private void del(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        String fidStr = req.getParameter("fid");
        int fid = Integer.parseInt(fidStr);

        fruitImp.deleteByID(connection, fid);

        resp.sendRedirect("fruit.do");

    }
    private void add(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("utf-8");
        String fname = req.getParameter("fname");
        String fpriceStr = req.getParameter("fprice");
        int fprice = Integer.parseInt(fpriceStr);
        String fcountStr = req.getParameter("fcount");
        int fcount = Integer.parseInt(fcountStr);
        String remark = req.getParameter("remark");

        FruitDAO fruitDAO = new FruitImp();
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        fruitDAO.insert(connection, new Fruit(1, fname,fprice, fcount, remark));

        resp.sendRedirect("fruit.do");
    }
    private void search(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置编码
        req.setCharacterEncoding("utf-8");
        // 判断是查询操作
        String tag = req.getParameter("tag");
        // 初始化查询参数
        String kv = "";
        // 判断是否是查询操作
        if(JDBCUtils.isNotEmpty(tag)){
            // 如果是的话，获取查询参数
            kv = req.getParameter("kv");
            // 将查询参数添加到Session中
            req.getSession().setAttribute("kv",kv);
        }

        // 判断上一次查询参数是否为空
        if(JDBCUtils.isEmpty((String) req.getSession().getAttribute("kv"))){
            // 如果是空的话，则设置成“” 防止出现null问题
            kv = "";
        }else{
            // 如果不是空的话，则获取
            kv = (String) req.getSession().getAttribute("kv");
        }

        // 初始化分页为第一页
        int pageNumber = 1;
        // 获取是第几页
        String pageNumberStr = req.getParameter("pageNumber");

        // 获取session
        HttpSession session = req.getSession();

        // 获取连接
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // 判断前端是否传过来pageNumber
        if(JDBCUtils.isNotEmpty(pageNumberStr)){
            // 如果传过来了pageNumber的话，则将参数化为整形
            pageNumber = Integer.parseInt(pageNumberStr);
        }else{
            // 如果前端没有传过来pageNumber的话，表明是第一次访问，则计算一下总页数
            int count = fruitImp.getKeyValueCount(connection, kv);
            session.setAttribute("pageEndNumber", count/5 + 1);
        }

        // 将pageNumber放到session中
        session.setAttribute("pageNumber", pageNumber);

        // 获取fruitList
        ArrayList<Fruit> fruitList = fruitImp.getKeyValueFruit(connection, kv, pageNumber);
        // 将fruitList放置到session中
        session.setAttribute("fruitList",fruitList);
        // 通过Th渲染到index页面
        super.processTemplate("search", req, resp);
    }
}

```





## 添加DispatcherServlet

我们在执行项目的时候需要些很多的Servlet，例如上面的Fruit，User，Shopping等等，但是这又出现一个问题，我们在访问的时候需要访问不同的Servlet，这时候我们可以创建一个控制器，让网页中{% span red, 所有 %}的Servlet请求都经过这个控制器，然后通过这个控制器，来分析请求的网址，并对应上各自的Servlet

![image-20230131174432342](https://s2.loli.net/2023/02/18/arSextZJwEYGmpM.png)

所以我们需要实现Dispatcher类 

{% tip error %}这里有个坑：我们在使用完中央控制器之后，原本的Servlet类里面的父类中的init便不会被调用，因为我们删掉了原本Servlet类的注册信息，所以不会再执行Servlet中的init方法，需要我们手动给他执行{% endtip %}

```JAVA
package com.myssm.myspringmvc;

import com.utils.JDBCUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

@WebServlet("*.do")
public class DispatcherServlet extends HttpServlet {
    // 创建存储访问对象和Servlet的map
    private Map<String, Object> beanMap = new HashMap<>();
    
    public DispatcherServlet(){
        
    }

    @Override
    public void init() throws ServletException {
        // 加载XML关联文件
        InputStream is = getClass().getClassLoader().getResourceAsStream("applicationContext.xml");
        // 定义工厂API，使应用程序能够获得从XML文档生成DOM对象树的解析器。
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
        // 传感DocumentBuilder对象
        try {
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            // 创建Document对象，获取XML对象
            Document document = documentBuilder.parse(is);

            // 获取XML中所有的bean节点
            NodeList beans = document.getElementsByTagName("bean");
            for (int i = 0; i < beans.getLength(); i++) {
                // 获取bean对象
                Node item = beans.item(i);
                // 如果该节点等于元素节点的话
                if(item.getNodeType() == Node.ELEMENT_NODE){
                    //将对象强转为元素，我们需要其中的一些方法
                    Element beanElement = (Element)item;
                    // 获取XML中bean元素的中属性名为id的值
                    String id = beanElement.getAttribute("id");
                    // 获取XML中bean元素中属性名为class的值
                    String aClass = beanElement.getAttribute("class");
                    Class controllerBeanClass = Class.forName(aClass);
                    // 创建class对应的对象
                    Object beanObj = controllerBeanClass.newInstance();
                    // 获取到ServletContext
                    ServletContext servletContext = this.getServletContext();
                    // 通过反射手动调用Servlet的init方法
                    Method setServletContext = controllerBeanClass.getDeclaredMethod("setServletContext",ServletContext.class);
                    setServletContext.setAccessible(true);
                    setServletContext.invoke(beanObj,servletContext);

                    beanMap.put(id,beanObj);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // 重写服务方法
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置编码
        req.setCharacterEncoding("utf-8");
        // 获取访问的网址
        // localhost:8080/fruit/fruit.do
        // servletPath就是上面的/fruit.do
        String servletPath = req.getServletPath();
        
        // 从网址中提取出fruit
        // 第一步先提取出 fruit.do
        servletPath = servletPath.substring(1);
        // 获取.do最后出现的索引位置
        int i = servletPath.lastIndexOf(".do");
        // 切分字符串 获取fruit
        servletPath = servletPath.substring(0, i);
        
        // 通过XML文件将fruit 和 FruitServlet 联系起来
        // 通过beanMap中的属性，我们可以获取到对应网址的Servlet对象
        // fruit -> FruitServlet对象
        Object controllerBeanObj = beanMap.get(servletPath);
        
        // 获取这个类中的所有方法并匹配
        String operate = req.getParameter("operate");
        // 判断是否为空如果为空的话则赋予默认值
        if(JDBCUtils.isEmpty(operate)){
            operate="search";
        }
        
        // 获取当前类中的所有方法
        Method[] declaredMethods = controllerBeanObj.getClass().getDeclaredMethods();
        // 依次遍历，判断是否是这次请求的方法
        for (Method declaredMethod : declaredMethods) {
            // 获取方法名
            String name = declaredMethod.getName();
            // 判断是否和这次请求的方法名相同
            if(name.equals(operate)){
                // 如果相同的话，通过反射调用这个方法即可
                try {
                    declaredMethod.setAccessible(true);
                    declaredMethod.invoke(controllerBeanObj, req, resp);
                } catch (Exception e) {
                    throw new RuntimeException(e);
                } 
            }
        }

    }
}
```



FruitServlet 中改动的地方

添加一个调用父类的init方法

```JAVA
private void setServletContext(ServletContext servletContext) throws ServletException {
    // 手动调用init方法
    super.init(servletContext);
}
```

ViewBaseServlet中改动的地方

将Init改成带参数的了，将processTemplate里面的getServletContext()方法改成了参数

```JAVA
package com.myssm.myspringmvc;

import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ViewBaseServlet extends HttpServlet {
    
    private ServletContext servletContext;
    private TemplateEngine templateEngine;
    
    public void init(ServletContext servletContext) throws ServletException {

        // 1.获取ServletContext对象
        this.servletContext = servletContext;

        // 2.创建Thymeleaf解析器对象
        ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(servletContext);

        // 3.给解析器对象设置参数
        // ①HTML是默认模式，明确设置是为了代码更容易理解
        templateResolver.setTemplateMode(TemplateMode.HTML);

        // ②设置前缀
        String viewPrefix = servletContext.getInitParameter("view-prefix");

        templateResolver.setPrefix(viewPrefix);

        // ③设置后缀
        String viewSuffix = servletContext.getInitParameter("view-suffix");

        templateResolver.setSuffix(viewSuffix);

        // ④设置缓存过期时间（毫秒）
        templateResolver.setCacheTTLMs(60000L);

        // ⑤设置是否缓存
        templateResolver.setCacheable(true);

        // ⑥设置服务器端编码方式
        templateResolver.setCharacterEncoding("utf-8");

        // 4.创建模板引擎对象
        templateEngine = new TemplateEngine();

        // 5.给模板引擎对象设置模板解析器
        templateEngine.setTemplateResolver(templateResolver);

    }

    protected void processTemplate(String templateName, HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // 1.设置响应体内容类型和字符集
        resp.setContentType("text/html;charset=UTF-8");

        // 2.创建WebContext对象
        WebContext webContext = new WebContext(req, resp, this.servletContext);

        // 3.处理模板数据
        templateEngine.process(templateName, webContext, resp.getWriter());
    }
}
```



## 减少Controller里面的相同代码

### 减少跳转代码

我们发现FruitController里面每一个方法都需要跳转或者重定向到其他方法或页面中，我们可以把这一部分提取出来,放到中央控制器中来进行统一的跳转，通过返回值来确定跳转的地方

FruitController

```JAVA
private String search(HttpServletRequest req) throws ServletException, IOException {
        // 设置编码
        req.setCharacterEncoding("utf-8");
        // 判断是查询操作
        String tag = req.getParameter("tag");
        // 初始化查询参数
        String kv = "";
        // 判断是否是查询操作
        if(JDBCUtils.isNotEmpty(tag)){
            // 如果是的话，获取查询参数
            kv = req.getParameter("kv");
            // 将查询参数添加到Session中
            req.getSession().setAttribute("kv",kv);
        }

        // 判断上一次查询参数是否为空
        if(JDBCUtils.isEmpty((String) req.getSession().getAttribute("kv"))){
            // 如果是空的话，则设置成“” 防止出现null问题
            kv = "";
        }else{
            // 如果不是空的话，则获取
            kv = (String) req.getSession().getAttribute("kv");
        }

        // 初始化分页为第一页
        int pageNumber = 1;
        // 获取是第几页
        String pageNumberStr = req.getParameter("pageNumber");

        // 获取session
        HttpSession session = req.getSession();

        // 获取连接
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // 判断前端是否传过来pageNumber
        if(JDBCUtils.isNotEmpty(pageNumberStr)){
            // 如果传过来了pageNumber的话，则将参数化为整形
            pageNumber = Integer.parseInt(pageNumberStr);
        }else{
            // 如果前端没有传过来pageNumber的话，表明是第一次访问，则计算一下总页数
            int count = fruitImp.getKeyValueCount(connection, kv);
            session.setAttribute("pageEndNumber", count/5 + 1);
        }

        // 将pageNumber放到session中
        session.setAttribute("pageNumber", pageNumber);

        // 获取fruitList
        ArrayList<Fruit> fruitList = fruitImp.getKeyValueFruit(connection, kv, pageNumber);
        // 将fruitList放置到session中
        session.setAttribute("fruitList",fruitList);
        // 通过Th渲染到index页面
        return "search";
    }
```

DispatcherServlet

```JAVA
package com.myssm.myspringmvc;

import com.utils.JDBCUtils;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

@WebServlet("*.do")
public class DispatcherServlet extends ViewBaseServlet {
    // 创建存储访问对象和Servlet的map
    private Map<String, Object> beanMap = new HashMap<>();
    
    public DispatcherServlet(){
        
    }

    @Override
    public void init() throws ServletException {
        // 这里一定要调用一下父类方法，父类init里面初始化templateResolver
        super.init();
        // 加载XML关联文件
        InputStream is = getClass().getClassLoader().getResourceAsStream("applicationContext.xml");
        // 定义工厂API，使应用程序能够获得从XML文档生成DOM对象树的解析器。
        DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
        // 传感DocumentBuilder对象
        try {
            DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
            // 创建Document对象，获取XML对象
            Document document = documentBuilder.parse(is);

            // 获取XML中所有的bean节点
            NodeList beans = document.getElementsByTagName("bean");
            for (int i = 0; i < beans.getLength(); i++) {
                // 获取bean对象
                Node item = beans.item(i);
                // 如果该节点等于元素节点的话
                if(item.getNodeType() == Node.ELEMENT_NODE){
                    //将对象强转为元素，我们需要其中的一些方法
                    Element beanElement = (Element)item;
                    // 获取XML中bean元素的中属性名为id的值
                    String id = beanElement.getAttribute("id");
                    // 获取XML中bean元素中属性名为class的值
                    String aClass = beanElement.getAttribute("class");
                    Class controllerBeanClass = Class.forName(aClass);
                    // 创建class对应的对象
                    Object beanObj = controllerBeanClass.newInstance();

                    beanMap.put(id,beanObj);
                }
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    // 重写服务方法
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置编码
        req.setCharacterEncoding("utf-8");
        // 获取访问的网址
        // localhost:8080/fruit/fruit.do
        // servletPath就是上面的/fruit.do
        String servletPath = req.getServletPath();
        
        // 从网址中提取出fruit
        // 第一步先提取出 fruit.do
        servletPath = servletPath.substring(1);
        // 获取.do最后出现的索引位置
        int i = servletPath.lastIndexOf(".do");
        // 切分字符串 获取fruit
        servletPath = servletPath.substring(0, i);
        
        // 通过XML文件将fruit 和 FruitServlet 联系起来
        // 通过beanMap中的属性，我们可以获取到对应网址的Servlet对象
        // fruit -> FruitServlet对象
        Object controllerBeanObj = beanMap.get(servletPath);
        
        // 获取这个类中的所有方法并匹配
        String operate = req.getParameter("operate");
        // 判断是否为空如果为空的话则赋予默认值
        if(JDBCUtils.isEmpty(operate)){
            operate="search";
        }
        
        // 获取当前类中的所有方法
        Method[] declaredMethods = controllerBeanObj.getClass().getDeclaredMethods();
        // 依次遍历，判断是否是这次请求的方法
        for (Method declaredMethod : declaredMethods) {
            // 获取方法名
            String name = declaredMethod.getName();
            // 判断是否和这次请求的方法名相同
            if(name.equals(operate)){
                // 如果相同的话，通过反射调用这个方法即可
                try {
                    declaredMethod.setAccessible(true);
                    // 执行我们特定的方法
                    //  通过返回值来判断该方法需要跳转的方式
                    String methodReturnStr = "";
                    Object methodReturn = declaredMethod.invoke(controllerBeanObj, req);
                    if(methodReturn != null){
                        methodReturnStr = (String) methodReturn;
                    }
                    
                    // 如果返回值是以redirect开头的话
                    if(methodReturnStr.startsWith("redirect")){ // redirect:edit
                        String method = methodReturnStr.substring("redirect".length()); // edit;
                        resp.sendRedirect(method);
                    }else {
                        super.processTemplate(methodReturnStr,req, resp);
                    }
                } catch (Exception e) {
                    throw new RuntimeException(e);
                } 
            }
        }

    }
}

```



### 减少参数代码

{% tip error %}这里有个前提是我们需要使用JDK 8.0以上的JAVA版本{% endtip %}

因为JDK 8.0有一个新特性，就是我们在通过反射获取对应类中的参数名的时候，不再显示arg0， arg1，具体设置方法：

IEAD：

添加-parameters参数即可

![image-20230208230128796](https://s2.loli.net/2023/02/18/dF3oYCSflTcLBNO.png)

MAVEN

在bulid中设置compilerArgument参数

```XML
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.example</groupId>
  <artifactId>QQZone</artifactId>
  <packaging>war</packaging>
  <version>1.0-SNAPSHOT</version>
  <name>QQZone Maven Webapp</name>
  <url>http://maven.apache.org</url>
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
      <version>8.0.30</version>
    </dependency>
    <dependency>
      <groupId>org.thymeleaf</groupId>
      <artifactId>thymeleaf</artifactId>
      <version>3.0.14.RELEASE</version>
    </dependency>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
    </dependency>
  </dependencies>
  <build>
    <finalName>QQZone</finalName>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.1</version>
        <configuration>
          <compilerArgument>-parameters</compilerArgument>
          <encoding>UTF-8</encoding>
          <source>1.9</source>
          <target>1.9</target>
        </configuration>
      </plugin>
    </plugins>
  </build>  
</project>


```



FruitController

将FruitController中所有的getParameter,都去掉，换成参数传进去

```JAVA
public class FruitController {

    private FruitImp fruitImp = new FruitImp();
    

    private String update(Integer fid, String fname, Double fprice, Integer fcount, String remark) {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        fruitImp.update(connection, new Fruit(fid, fname, fprice, fcount, remark));
        
        return "redirect:fruit.do";
    }
    private String edit(Integer fid, HttpServletRequest req){
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        Fruit fruit = fruitImp.getFruitByID(connection, fid);

        req.setAttribute("fruit", fruit);
        return "edit";

    }
    private String del(Integer fid) {
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        fruitImp.deleteByID(connection, fid);
        
        return "redirect:fruit.do";

    }
    private String  add(String fname, Double fprice, Integer fcount, String remark){
        FruitDAO fruitDAO = new FruitImp();
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        fruitDAO.insert(connection, new Fruit(1, fname,fprice, fcount, remark));
        
        return "redirect:fruit.do";
    }
    private String search(String tag, String kv, HttpSession session, Integer pageNumber) {
        // 初始化查询参数
        String keyValue = "";
        // 判断是否是查询操作
        if(JDBCUtils.isNotEmpty(tag)){
            // 如果是的话，获取查询参数
            keyValue = kv;
            // 将查询参数添加到Session中
            session.setAttribute("kv",keyValue);
        }

        // 判断上一次查询参数是否为空
        if(JDBCUtils.isEmpty((String) session.getAttribute("kv"))){
            // 如果是空的话，则设置成“” 防止出现null问题
            keyValue = "";
        }else{
            // 如果不是空的话，则获取
            keyValue = (String) session.getAttribute("kv");
        }

        // 获取连接
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // 判断前端是否传过来pageNumber
        if(pageNumber == null) {
            // 如果前端没有传过来pageNumber的话，表明是第一次访问，则计算一下总页数
            int count = fruitImp.getKeyValueCount(connection, keyValue);
            session.setAttribute("pageEndNumber", count / 5 + 1);
            pageNumber = 1;
        }

        // 将pageNumber放到session中
        session.setAttribute("pageNumber", pageNumber);

        // 获取fruitList
        ArrayList<Fruit> fruitList = fruitImp.getKeyValueFruit(connection, keyValue, pageNumber);
        // 将fruitList放置到session中
        session.setAttribute("fruitList",fruitList);
        // 通过Th渲染到index页面
        return "search";
    }
}

```



DispatcherServlet

```JAVA
 @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置编码
        req.setCharacterEncoding("utf-8");
        // 获取访问的网址
        // localhost:8080/fruit/fruit.do
        // servletPath就是上面的/fruit.do
        String servletPath = req.getServletPath();
        
        // 从网址中提取出fruit
        // 第一步先提取出 fruit.do
        servletPath = servletPath.substring(1);
        // 获取.do最后出现的索引位置
        int i = servletPath.lastIndexOf(".do");
        // 切分字符串 获取fruit
        servletPath = servletPath.substring(0, i);
        
        // 通过XML文件将fruit 和 FruitServlet 联系起来
        // 通过beanMap中的属性，我们可以获取到对应网址的Servlet对象
        // fruit -> FruitServlet对象
        Object controllerBeanObj = beanMap.get(servletPath);
        
        // 获取这个类中的所有方法并匹配
        String operator = req.getParameter("operator");
        // 判断是否为空如果为空的话则赋予默认值
        if(JDBCUtils.isEmpty(operator)){
            operator="search";
        }
        
        // 获取当前类中的所有方法
        Method[] declaredMethods = controllerBeanObj.getClass().getDeclaredMethods();
        // 依次遍历，判断是否是这次请求的方法
        for (Method declaredMethod : declaredMethods) {
            // 获取方法名
            String name = declaredMethod.getName();
            // 判断是否和这次请求的方法名相同
            if(name.equals(operator)){
                // 如果相同的话，通过反射调用这个方法即可
                // 通过反射获取其中所有参数
                Parameter[] parameters = declaredMethod.getParameters();
                // 创建实际参数列表
                Object[] parametersActual = new Object[parameters.length];
                String parameterName = "";
                String type = "";
                // 遍历整个参数
                for (int j = 0; j < parameters.length; j++) {
                    // 获取参数名
                    parameterName = parameters[j].getName();
                    // 判断特殊情况
                    if("req".equals(parameterName)){
                        parametersActual[j] = req;
                    } else if ("resp".equals(parameterName)) {
                        parametersActual[j] = resp;
                    } else if ("session".equals(parameterName)) {
                        parametersActual[j] = req.getSession();
                    }else{
                        // 参数类型转换
                        type = parameters[j].getType().toString();
                        String parameter = req.getParameter(parameterName);
                        if(JDBCUtils.isNotEmpty(parameter)){
                            switch (type){
                                case "class java.lang.String" -> parametersActual[j] = parameter;
                                case "class java.lang.Integer" -> parametersActual[j] = Integer.parseInt(parameter);
                                case "class java.lang.Double" -> parametersActual[j] = Double.parseDouble(parameter);
                            }
                        }
                    }
                }
                try {
                    declaredMethod.setAccessible(true);
                    // 执行我们特定的方法
                    //  通过返回值来判断该方法需要跳转的方式
                    String methodReturnStr = "";
                    Object methodReturn = declaredMethod.invoke(controllerBeanObj, parametersActual);
                    if(methodReturn != null){
                        methodReturnStr = (String) methodReturn;
                    }
                    
                    // 如果返回值是以redirect开头的话
                    if(methodReturnStr.startsWith("redirect:")){ // redirect:edit
                        String method = methodReturnStr.substring("redirect:".length()); // edit;
                        resp.sendRedirect(method);
                    }else {
                        super.processTemplate(methodReturnStr,req, resp);
                    }
                } catch (Exception e) {
                    throw new RuntimeException(e);
                } 
            }
        }

    }
```



## Review

1. 最初的做法是：同类的请求对应着不同的Servlet，那么如果类多了起来的话，那么Servlet将会特别多

2. 我们将同类的Servlet合并到一个Servlet中，例如关于Fruit的增删改查都放到FruitServlet中，通过operate来获取我们要执行的那个方法

3. 我们在通过operator获取需要执行的的函数的时候，需要通过switch case 来进行依次匹配，那么如果我们需要增加方法的话，switch case 的代码还需要更改，这时候就很不方便

4. 我们通过反射来获取对应的Servlet中的所有方法，通过反射调用对应的operate的方法，前提是operate需要和方法名相同

5. 再进一步，我们发现如果有很多不同的类，例如fruit，user，shopping，等等我们每一个类都需要进行反射来获取对应的方法，并通过反射调用，这时候未免显得有些代码冗余

6. 我们通过中央控制器DispatcherServlet来统一调用反射，DispatcherServlet主要需要实现两部分功能

   1. 通过我们访问的网址，获取对应的Controller类

      1. 从URL中提取到我们需要访问的Servlet类的别名例如从这个网址中http://localhost:8080/fruit/fruit.do 获取到fruit

      2. 将fruit和FruitController对应起来，通过applicationContext.xml,通过DOM技术获取到bean里面的对应关系

         ```XML
         <?xml version="1.0" encoding="utf-8" ?>
         <beans>
             <!--通过设置这个标签将fruit和FruitServlet类联系起来-->
             <bean id="fruit" class="com.fruit.controller.FruitController" />
         </beans>
         <!--
         XML文件包含三个部分
         1. XML声明（必须有，且在第一行）<?xml version="1.0" encoding="utf-8" ?>
         2. DTO文档类型定义
         3. XML正文
         -->
         ```

   2. 调用Controller组件的方法

      1. 获取参数

         通过method.getParameters()获取到该方法中的所有参数

         通过method.getName() 获取到所有的参数名称

         通过method.getType()获取到所有的参数类型 用来强转

      2. 执行方法

         Object returnObj = method.invoke(controllerBean, paramerValues);

      3. 视图处理

         通过返回来来确定，该网页需要跳转到哪一步

         ```java
         if(methodReturnStr.startsWith("redirect:")){ // redirect:edit
             String method = methodReturnStr.substring("redirect:".length()); // edit;
             resp.sendRedirect(method);
         }else {
             super.processTemplate(methodReturnStr,req, resp);
         }
         ```




# Servlet IOC实现

## ServletAPI

{% tip %}Servlet初始化方法{% endtip %}

1. Servlet生命周期：实例化，初始化，服务，销毁

2. Servlet中初始化方法有两个：init(), init(ServletConfig config)

   ```JAVA
   public void init(ServletConfig config) throws ServletException {
       this.config = config;
       this.init();
   }
   
   public void init() throws ServletException {
   }
   ```

   如果想要在Servlet初始化的时候进行一些操作，我们可以重写空参的Init方法

3. 我们可以在配置Servlet的时候配置初始化参数

   ```XML
   <servlet>
       <servlet-name>Demo01</servlet-name>
       <servlet-class>com.fruit.controller.Demo01Servlet</servlet-class>
       <init-param>
           <param-name>hello</param-name>
           <param-value>word</param-value>
       </init-param>
   </servlet>
   <servlet-mapping>
       <servlet-name>Demo01</servlet-name>
       <url-pattern>/demo01</url-pattern>
   </servlet-mapping>
   ```

4. 也可以通过注解的方式进行配置

   ```JAVA
   @WebServlet(urlPatterns = {"/demo01"},
       initParams = {
           @WebInitParam(name="hello",value="word"),
           @WebInitParam(name="uname", value="zjh")
       }
   )
   public class Demo01Servlet extends HttpServlet {
       @Override
       public void init() throws ServletException {
           ServletConfig servletConfig = getServletConfig();
           String hello = servletConfig.getInitParameter("hello");
           System.out.println(hello);
       }
   }
   
   ```

   

5. 可以通过以下方法获取初始化参数

   - 获取config对象：ServletConfig config = getServletConfig();
   - 获取初始化参数值：config.getInitParameter(key);

{% tip %}学习Servlet中的ServletContext和< context - param >{% endtip %}

获取ServletContext的方法

1. 在初始化方法中：ServletContext servletContext = getServletContext();
2. 在服务方法中：ServletContext servletContext = req.getServletContext();  ServletContext servletContext = req.getSession().getServletContext();

获取初始化值

	1. servletContext.getInitParameter(key);

设置初始化值

```XML
<context-param>
    <param-name>view-prefix</param-name>
    <param-value>/</param-value>
</context-param>
<context-param>
    <param-name>view-suffix</param-name>
    <param-value>.html</param-value>
</context-param>
```



## Service

{% tip %}什么是业务层Service{% endtip %}

1. Model和Model2

   MVC：Model（模型）， View(视图)，Controller（控制器）

   视图层：用于做数据展示和用户交互的一个界面

   控制层：用于接受客户端请求，具体的业务功能还是借助模型来实现的

   模型层：模型分为很多种；有比较简单的pojo/vo(value object)，有业务层组件，有数据访问组件

   1. pojo/vo：值对象，对应数据库里面一中类
   2. DAO：数据访问对象
   3. BO：业务对象

2. 区别业务对象和数据访问对象

   1. DAO中的方法称之为单精度方法或称之为细粒度方法。什么是单精度方法？一个方法只考虑一个操作，比如添加，就是Insert

   2. BO中的方法属于业务方法，实际的业务比较复杂，因此业务方法比较粗

      例如注册功能：注册功能属于业务功能，也就是说注册这个方法属于业务方法

      这个业务方法中包括了多个DAO方法，需要多个DAO方法组合来完成注册功能

   注册：

   1. 检查用户名是否已经被注册 --- DAO中的Select操作
   2. 向用户表添加一条记录 --- DAO中的 Insert操作
   3. 向用户积分表添加一条记录：  ---DAO中的insert操作
   4. ...

3. 在库存系统中添加业务层组件



![image-20230201172206657](https://s2.loli.net/2023/02/18/tXy8E6F4TOKDHUZ.png)

实现Service

FruitService 接口

```JAVA
package com.fruit.biz.inter;

import com.fruit.pojo.Fruit;

import java.util.ArrayList;

public interface FruitService {
    // 获取指定页面的库存信息
    ArrayList<Fruit> getFruitList(String keyValue, Integer pageNumber);
    
    // 添加库存记录信息
    void addFruit(Fruit fruit);
    
    // 根据ID查看指定库存记录
    Fruit getFruitByID(Integer id);
    
    // 删除特定库存记录
    void delFruitByID(Integer id);
    
    // 获取总页数
    Integer getAllPageCount(String keyValue);
    
    // 更新库存记录
    void update(Fruit fruit);
}

```



FruitService 实现类

```JAVA
package com.fruit.biz;

import com.fruit.biz.inter.FruitService;
import com.fruit.dao.FruitDAOImp;
import com.fruit.pojo.Fruit;
import com.utils.JDBCUtils;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Collection;

public class FruitServiceImp implements FruitService {
    private FruitDAOImp fruitDAOImp = new FruitDAOImp();
    @Override
    public ArrayList<Fruit> getFruitList(String keyValue, Integer pageNumber){
        Connection connection = JDBCUtils.getConnection();
        return fruitDAOImp.getKeyValueFruit(connection, keyValue, pageNumber);
    }

    @Override
    public void addFruit(Fruit fruit){
        Connection connection = JDBCUtils.getConnection();
        fruitDAOImp.insert(connection,fruit);
    }

    @Override
    public Fruit getFruitByID(Integer id){
        Connection connection = JDBCUtils.getConnection();
        return fruitDAOImp.getFruitByID(connection,id);
    }

    @Override
    public void delFruitByID(Integer id){
        Connection connection = JDBCUtils.getConnection();
        fruitDAOImp.deleteByID(connection,id);
    }

    @Override
    public Integer getAllPageCount(String keyValue){
        Connection connection = JDBCUtils.getConnection();
        int keyValueCount = fruitDAOImp.getKeyValueCount(connection, keyValue);
        return keyValueCount/5 +1 ;
    }

    @Override
    public void update(Fruit fruit){
        Connection connection = JDBCUtils.getConnection();
        fruitDAOImp.update(connection,fruit);
    }
}

```



FruitController

```JAVA
package com.fruit.controller;

import com.fruit.biz.FruitServiceImp;
import com.fruit.dao.FruitDAOImp;
import com.fruit.dao.inter.FruitDAO;
import com.fruit.pojo.Fruit;
import com.utils.JDBCUtils;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.sql.Connection;
import java.util.ArrayList;

public class FruitController {

    private FruitServiceImp fruitServiceImp = new FruitServiceImp();
    

    private String update(Integer fid, String fname, Double fprice, Integer fcount, String remark) {
        fruitServiceImp.update(new Fruit(fid, fname, fprice, fcount, remark));
        return "redirect:fruit.do";
    }
    private String edit(Integer fid, HttpServletRequest req){
        Fruit fruit = fruitServiceImp.getFruitByID(fid);
        req.setAttribute("fruit", fruit);
        return "edit";

    }
    private String del(Integer fid) {
        fruitServiceImp.delFruitByID(fid);
        return "redirect:fruit.do";

    }
    private String  add(String fname, Double fprice, Integer fcount, String remark){
        fruitServiceImp.addFruit(new Fruit(1, fname,fprice, fcount, remark));
        return "redirect:fruit.do";
    }
    private String search(String tag, String kv, HttpSession session, Integer pageNumber) {
        // 初始化查询参数
        String keyValue = "";
        // 判断是否是查询操作
        if(JDBCUtils.isNotEmpty(tag)){
            // 如果是的话，获取查询参数
            keyValue = kv;
            // 将查询参数添加到Session中
            session.setAttribute("kv",keyValue);
        }

        // 判断上一次查询参数是否为空
        if(JDBCUtils.isEmpty((String) session.getAttribute("kv"))){
            // 如果是空的话，则设置成“” 防止出现null问题
            keyValue = "";
        }else{
            // 如果不是空的话，则获取
            keyValue = (String) session.getAttribute("kv");
        }

        
        // 判断前端是否传过来pageNumber
        if(pageNumber == null) {
            // 如果前端没有传过来pageNumber的话，表明是第一次访问，则计算一下总页数
            int count = fruitServiceImp.getAllPageCount(keyValue);
            session.setAttribute("pageEndNumber", count);
            pageNumber = 1;
        }

        // 将pageNumber放到session中
        session.setAttribute("pageNumber", pageNumber);

        // 获取fruitList
        ArrayList<Fruit> fruitList = fruitServiceImp.getFruitList(keyValue, pageNumber);
        // 将fruitList放置到session中
        session.setAttribute("fruitList",fruitList);
        // 通过Th渲染到index页面
        return "search";
    }
}

```



## IOC实现

1. 耦合/依赖

   指的是一个类依靠另一个类，即：一个类中有另一个类的实例，如果另一个类消失的话，那么这个类也就不能使用

   在软件系统中，层与层之间是存在依赖的，我们也称为耦合

   在系统架构或者是设计的一个原则是：高内聚，低耦合

   层内部的组成应该是高度聚合的，而层与层之间的关系应该是低耦合的，最理想的情况是0耦合

   我们想要做到的：当下层删除之后上层不会报错，例如FruitService 删除之后FruitController不会报错

   ![image-20230201172206657](https://s2.loli.net/2023/02/18/tXy8E6F4TOKDHUZ.png)

2. 实现方法：

   1. 为什么下一层删除之后上一层会报错？

      因为FruitController里面有这样一条代码，它的成功编译就是依赖于FruitServiceImp是存在的

      ```JAVA
      private FruitService fruitServiceImp = new FruitServiceImp();
      ```

   2. 解决问题1：我们将代码改成：

      ```JAVA
      private FruitService fruitServiceImp = null;
      ```

      这样FruitServiceImp删除之后FruitController就不会报错，但是者会出现一个新的问题：

      我们下面代码在使用fruitServiceImp这个属性的时候会报错，我们还需要给他赋值

   3. 赋值方法

      {% tip success %}我们可以创建一个容器，将上面所需要的类都放在容器里面，需要的时候直接取出来即可，我么可以通过XML文件创建一个Bean容器{% endtip %}

      通过读取XML文件赋值

      ```XML
      <?xml version="1.0" encoding="utf-8" ?>
      <beans>
          <!--通过设置这个标签将fruit和FruitServlet类联系起来-->
          <bean id="fruit" class="com.hgu.fruit.controller.FruitController" />
          <bean id="fruitDAO" class="com.hgu.fruit.dao.FruitDAOImp" />
          <bean id="fruitService" class="com.hgu.fruit.service.FruitServiceImp" />
      </beans>
      <!--
      XML文件包含三个部分
      1. XML声明（必须有，且在第一行）<?xml version="1.0" encoding="utf-8" ?>
      2. DTO文档类型定义
      3. XML正文
      -->
      ```

      我们先创建一个BeanFactory接口，写入getBean方法

      在创建它的实现类ClassPathXmlApplicationContext实现这个方法

      通过Map获取这个类的对象

      ```JAVA
      public class ClassPathXmlApplicationContext implements BeanFactory {
          private Map<String, Object> beanMap = new HashMap<>();
          
          public ClassPathXmlApplicationContext(){
              // 加载XML关联文件
              InputStream is = getClass().getClassLoader().getResourceAsStream("applicationContext.xml");
              // 定义工厂API，使应用程序能够获得从XML文档生成DOM对象树的解析器。
              DocumentBuilderFactory documentBuilderFactory = DocumentBuilderFactory.newInstance();
              // 传感DocumentBuilder对象
              try {
                  DocumentBuilder documentBuilder = documentBuilderFactory.newDocumentBuilder();
                  // 创建Document对象，获取XML对象
                  Document document = documentBuilder.parse(is);
      
                  // 获取XML中所有的bean节点的实例
                  NodeList beans = document.getElementsByTagName("bean");
                  for (int i = 0; i < beans.getLength(); i++) {
                      // 获取bean对象
                      Node item = beans.item(i);
                      // 如果该节点等于元素节点的话
                      if(item.getNodeType() == Node.ELEMENT_NODE){
                          //将对象强转为元素，我们需要其中的一些方法
                          Element beanElement = (Element)item;
                          // 获取XML中bean元素的中属性名为id的值
                          String id = beanElement.getAttribute("id");
                          // 获取XML中bean元素中属性名为class的值
                          String aClass = beanElement.getAttribute("class");
                          Class beanClass = Class.forName(aClass);
                          // 创建class对应的对象
                          Object beanObj = beanClass.newInstance();
                          beanMap.put(id,beanObj);
                      }
                  }
              } catch (Exception e) {
                  throw new RuntimeException(e);
              }
          }
          
          @Override
          public Object getBean(String id) {
              return beanMap.get(id);
          }
      }
      
      ```

   4. 现在我们已经拥有了我们所需要的Object对象的bean容器，那么现在我们如何给我们上面所设置的null的属性赋值那？

      还是通过XML指明赋值对象

      ```XML
      <?xml version="1.0" encoding="utf-8" ?>
      <beans>
          <!--通过设置这个标签将fruit和FruitServlet类联系起来-->
          <bean id="fruit" class="com.hgu.fruit.controller.FruitController" >
              <property name="fruitServiceImp" ref="fruitService"/>
          </bean>
          
          <bean id="fruitDAO" class="com.hgu.fruit.dao.FruitDAOImp" />
          <bean id="fruitService" class="com.hgu.fruit.service.FruitServiceImp">
              <!--fruitServiceImp中需要给fruitDAOImp赋值-->
              <!-- 其中name表示FruitServiceImp中的属性值，ref表示给这个属性赋值的bean容器里面的对象 -->
              <property name="fruitDAOImp" ref="fruitDAO" />
          </bean>
      </beans>
      <!--
      XML文件包含三个部分
      1. XML声明（必须有，且在第一行）<?xml version="1.0" encoding="utf-8" ?>
      2. DTO文档类型定义
      3. XML正文
      -->
      
      ```
      
      实现通过代码实现他们之间的关联
      
      XML文件本身就是一个节点，其中还包括 空节点，元素节点，文本节点
      
      我门在上面已经获取到了所有的Bean节点中的类的实例，现在我们要做的就是将他们之间的关系依照XML文件中所述的将他们关联起来
      
      ```JAVA
      for (int j = 0; j < childNodes.getLength(); j++) {
          Node childItem = childNodes.item(j);
          // 判断子节点的类型是不是ELEMENT类型的，因为子节点中可能含有多种类型的节点，例如空节点，文本类型节点
          if(childItem.getNodeType() == Node.ELEMENT_NODE && "property".equals(childItem.getNodeName())){
              Element childBeanItem = (Element) childItem;
              // 获取property标签里面的元素
              String name = childBeanItem.getAttribute("name");
              String ref = childBeanItem.getAttribute("ref");
      
              // 获取ref对应的实例
              Object refObj = beanMap.get(ref);
              // 获取我们需要赋值的元素的属性
              Field field = beanObj.getClass().getDeclaredField(name);
              field.setAccessible(true);
              field.set(beanObj, refObj);
          }
      }
      ```
      

3. 控制反转 和 依赖注入

   1. 控制反转

      1. 在之前Servlet中，我们创建Servlet对象的时候，在Servlet内部有一个成员变量是 FruitService fruitService = new FruitServiceImp();,如果这行代码出现在方法内部的话，那么这个fruitService的作用域（生命周期）就是这个方法级，如果出现在Servlet类中，那么fruitService的作用域就是Servlet实例级别
      2. 我们在applicationContext.xml中定义了fruitService。然后通过解析xml，产生fruitService，存放在beanMap，这个beanMap存在于BeanFactory中，因此我们改变了之前的Service实例，dao实例等等，他们的生命周期，存放到了beanMap中，控制权从程序员转换到了BeanFactory中，这个BeanFactory被称为IOC容器

   2. 依赖注入

      1. 之前控制层出现代码：FruitService fruitService = new FruitServiceImp();这行代码表明控制层和Service层存在耦合

      2. 之后我们将代码改成FruitService fruitService = null;

         然后在配置文件中配置

         ```XML
         <bean id="fruit" class="FruitController">
         	<property name="fruitService" ref="fruitService"/>
         </bean>
         ```



# Filter 过滤器

从客户端发来的请求，都要经过过滤器的处理，然后才能到达Servlet层，过滤器中必须有放行，否则过滤器会一直拿着请求，不穿送给Servlet层，等Servlet处理完请求要返回的时候，还是需要经过过滤器，然后才能到达客户端

![image-20230203100201087](https://s2.loli.net/2023/02/18/7hsXExJaSHAVQBZ.png)

实现方法：

Servlet

```java
@WebServlet("/demo01.co")
public class Demo01Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("demo01.service");
        req.getRequestDispatcher("demo01.html").forward(req,resp);
    }
}
```

Filter

```JAVA
public class Demo01Filter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        // 请求过来的时候需要执行的代码
        System.out.println("HelloA");
        // 放行
        filterChain.doFilter(servletRequest, servletResponse);
        // 请求回去的时候执行的代码
        System.out.println("HelloA1");
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
```

XML配置文件

```XML
<filter>
    <filter-name>Demo01Filter</filter-name>
    <filter-class>com.hug.filters.Demo01Filter</filter-class>
</filter>
<filter-mapping>
    <filter-name>Demo01Filter</filter-name>
    <url-pattern>"/demo01.do"</url-pattern>
</filter-mapping>
```



{% tip success %}Filter{% endtip %}

1. Filter也属于Servlet规范
2. Filter开发步骤：新建类实现Filter接口，然后实现其中三个方法：init,doFilter,destory,配置Filter，可以使用注解@WebFilter，也可以使用XML文件< filter >< filter-mapping >
3. Filter在配置的时候和Servlet一样，也可以使用通配符，例如@WebFilter("*.do")表示拦截所有以.do结尾的请求
4. 过滤器链：
   1. 如果采用的是注解的方式进行配置，那么过滤器拦截的先后顺序是按照全类名的先后顺序来排序的
   2. 如果采用的是XML的方式进行配置，那么按照配置的先后顺序进行排序



# 事务

事务的本质就是：将多个DAO事件绑到一起，要么同时成功，要么同时回滚，我们需要设置自动提交为false，让我们手动的给他提交

方式一：在DAO层设置事务

![image-20230203123921696](https://s2.loli.net/2023/02/18/89jrxhdYW2PXM3q.png)

但是这样出现的情况会出现，DAO01 成功， DAO02失败， DAO03成功，那么这样我们无法确定Service是否成功进行，所以我们不能再DAO层设置事务，我们需要在Service层设置，将多个DAO绑定在一起，要么同时成功，要么同时回滚

方式二：在Service层使用事务

![image-20230203124528282](https://s2.loli.net/2023/02/18/ZyXTPCsGcdbpawr.png)



方式三：在过滤器层使用

我们需要使用同一个Connection才能够将service层中的DAO对象绑定到一起

![image-20230203205500901](https://s2.loli.net/2023/02/18/RgjphHu714LczKG.png)



实现：

过滤器OpenSessionInViewFilter

```JAVA
@WebFilter("*.do")
public class OpenSessionInViewFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        try{
            TransactionManager.beginTrans();
            System.out.println("开启事务");
            filterChain.doFilter(servletRequest, servletResponse);
            TransactionManager.commit();
            System.out.println("提交");
        }catch (Exception e){
            e.printStackTrace();
            try {
                TransactionManager.rollback();
                System.out.println("回滚事务");
            } catch (SQLException ex) {
                throw new RuntimeException(ex);
            }
        }
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}

```



事务管理：TransactionManager

```JAVA
package com.hgu.myssm.trans;

import com.hgu.myssm.utils.JDBCUtils;

import java.sql.Connection;
import java.sql.SQLException;

public class TransactionManager {
    public static void beginTrans() throws SQLException {
        JDBCUtils.getConnection().setAutoCommit(false);
    }
    
    public static void commit() throws SQLException {
        JDBCUtils.getConnection().commit();
        JDBCUtils.closeConnection();
    }
    
    public static void rollback() throws SQLException {
        JDBCUtils.getConnection().rollback();
        JDBCUtils.closeConnection();
    }
}

```



JDBCUtils创建获取连接

```JAVA
public static Connection createConnection(){
    try {
        // 通过配置文件来进行获取参数
        InputStream is = JDBCUtils.class.getClassLoader().getResourceAsStream("jdbc.properties");
        // 创建一个类来进行分析配置文件
        Properties pros = new Properties();
        pros.load(is);

        // 获取配置文件中的内容
        String user = pros.getProperty("user");
        String password = pros.getProperty("password");
        String url = pros.getProperty("url");
        String driverClass = pros.getProperty("driverClass");
        // String user = "root";
        // String password = "admin";
        // String url = "jdbc:mysql://localhost:3306/fruit?CharacterEncoding=true&rewriteBatchedStatements=true";
        // String driverClass = "com.mysql.cj.jdbc.Driver";
        // 加载驱动
        Class clazz = Class.forName(driverClass);

        // 获取连接
        return DriverManager.getConnection(url, user, password);
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}
/**
     * 获取连接
     * @return
     * @throws IOException
     */
public static Connection getConnection() {
    Connection connection = threadLocal.get();
    if(connection == null){
        connection = createConnection();
        threadLocal.set(connection);
    }
    return threadLocal.get();
}
```



{% tip %}ThreadLocal{% endtip %}

- 有两个主要方法：get()， set(obj)

- ThreadLocal称之为本地线程。我们可以通过set方法在当前线程上存储数据，通过get方法在当前线程上访问数据

- set源码分析

  ```JAVA
  public void set(T value) {
      // 在内部在调用set的重写的方法，并将当前线程当成参数传递进去
      set(Thread.currentThread(), value);
  }
  private void set(Thread t, T value) {
  	// 获取当前线程的Map，每一个线程都有自己的Map，通过不同的参数获取不同的Map
      ThreadLocalMap map = getMap(t);
      // 如果map不支持的话则报错
      if (map == ThreadLocalMap.NOT_SUPPORTED) {
          throw new UnsupportedOperationException();
      }
      // 如果map不等于空的话
      if (map != null) {
          // 向map中设置键值对
          // key:TrheadLocal
          // value: 我们传进来的参数
          // 为什么使用ThradLocal作为参数？因为一个线程对应着一个Map，但是可能对应着多个ThreadLocal，例如User类的ThreadLocal，Fruit类的ThreadLocal，所以我们需要使用threadLocal作为参数
          map.set(this, value);
      } else {
          // 如果map不存在的话则创建一个map，并将线程参数和我们穿进去的参数一并传入
          createMap(t, value);
      }
  }
  ```

- get源码分析

  ```JAVA
  public T get() {
      // 我们先调用这个方法：将当前线程作为参数传递进去
      return get(Thread.currentThread());
  }
  
  private T get(Thread t) {
      // 获取当前线程维护的map
      ThreadLocalMap map = getMap(t);
      // 如果map不为空的话
      if (map != null) {
          // 如果Map不支持的话，则初始化值
          if (map == ThreadLocalMap.NOT_SUPPORTED) {
              return initialValue();
          } else {
              // 通过ThreadLocal 获取当前ThreadLocal对应的模块
              ThreadLocalMap.Entry e = map.getEntry(this);
              if (e != null) {
                  @SuppressWarnings("unchecked")
                  T result = (T) e.value;
                  // 返回对应的值
                  return result;
              }
          }
      }
      return setInitialValue(t);
  }
  ```

  

# 监听器

监听器︰专门用于对其他对象身上发生的事件或状态改变进行监听和相应处理的对象，当被监视的对象发生情况时，立即采取相应的行动。

Servlet监听器:Servlet规范中定义的一种特殊类，它用于监听Web应用程序中的ServletContext，HttpSession和HttpServletRequest等域对象的创建与销毁事件，以及监听这些域对象中的属性发生修改的事件。

1. ServletContextListener  -- 监听ServletContext对象的创建和销毁过程

   ```JAVA
   contextInitialized(ServletContextEvent sce);
   contextDestroyed(ServletContextEvent sce);
   ```

2. HttpSessionListener ---  监听Session对象的创建和销毁过程

   ```JAVA
   sessionInitialized(ServletContextEvent sce);
   sessionDestroyed(ServletContextEvent sce);
   ```

3. ServletRequestListener  --- 监听ServletRequest对象的创建和销毁过程

   ```JAVA
   requestInitialized(ServletContextEvent sce);	// 创建的时候调用
   requestDestroyed(ServletContextEvent sce);		// 销毁的时候调用
   ```

4. ServletContextAttributeListener  --- 监听ServletContext中属性的创建，修改和销毁

   ```JAVA
   attributeAdded(ServletContextAttributeEvent scab);		// 添加属性的时候调用
   attributeRemoved(ServletContextAttributeEvent scab); 	// 移除属性的时候调用
   attributeReplaced(ServletContextAttributeEvent scab);	// 属性修改的时候调用
   ```

5. HttpSessionAttributeListener  --- 监听HttpSession中属性的创建，修改和销毁

   ```JAVA
   sessionAdded(ServletContextAttributeEvent scab);		// 添加属性的时候调用
   sessionRemoved(ServletContextAttributeEvent scab); 	// 移除属性的时候调用
   sessionReplaced(ServletContextAttributeEvent scab);	// 属性修改的时候调用
   ```

6. ServletRequestAttributeListener  --- 监听ServletContext中属性的创建，修改和销毁

   ```JAVA
   requestAdded(ServletContextAttributeEvent scab);		// 添加属性的时候调用
   requestRemoved(ServletContextAttributeEvent scab); 	// 移除属性的时候调用
   requestReplaced(ServletContextAttributeEvent scab);	// 属性修改的时候调用
   ```

7. HttpSessionBindingListener  --- 监听某个对象在Session域中的创建与移除

   ```JAVA
   valueBound(HttpSessionBindingEvent event);   // 该实例被放到Session域中时调用
   valueUnbound(HttpSessionBindingEvent event);  // 该类实例被从session中移除的时候调用
   ```

8. HttpSessionActivationListener   --- 监听对象在Session中的序列化与反序列化

   ```JAVA
   sessionWillPassivate(HttpSessionEvent se);		// 该类实例和Session一起钝化到硬盘的时候调用 
   sessionDidActivate(HttpSessionEvent se);		//	该类实例和Session一起活化到内存的时候调用
   ```



创建：

```JAVA
@WebListener
public class MyServletContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        ServletContextListener.super.contextInitialized(sce);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        ServletContextListener.super.contextDestroyed(sce);
    }
}

```

配置：

使用标签配置：@WebListener

使用配置文件配置：

```XML
<listener>
    <listener-class>com.hug.listener.MyServletContextListener</listener-class>
</listener>
```





# QQZone

```XML
1.熟悉QQZone业务需求
  1) 用户登录
  2) 登录成功，显示主界面。左侧显示好友列表；上端显示欢迎词。如果不是自己的空间，显示超链接：返回自己的空间；下端显示日志列表
  3) 查看日志详情：
        - 日志本身的信息（作者头像、昵称、日志标题、日志内容、日志的日期）
        - 回复列表（回复者的头像、昵称、回复内容、回复日期）
        - 主人回复信息
  4) 删除日志
  5) 删除特定回复
  6) 删除特定主人回复
  7) 添加日志、添加回复、添加主人回复
  8) 点击左侧好友链接，进入好友的空间
2.数据库设计
  1） 抽取实体 : 用户登录信息、用户详情信息 、 日志 、 回贴  、 主人回复
  2） 分析其中的属性：
    - 用户登录信息：账号、密码、头像、昵称
    - 用户详情信息：真实姓名、星座、血型、邮箱、手机号.....
    - 日志：标题、内容、日期、作者
    - 回复：内容、日期、作者、日志
    - 主人回复：内容、日期、作者、回复
  3） 分析实体之间的关系
    - 用户登录信息 ： 用户详情信息      1：1 PK
    - 用户 ： 日志                   1：N
    - 日志 ： 回复                   1：N
    - 回复 ： 主人回复                1：1 UK
    - 用户 ： 好友                   M ： N
3.数据库的范式：
  1） 第一范式：列不可再分
  2） 第二范式：一张表只表达一层含义（只描述一件事情）
  3） 第三范式：表中的每一列和主键都是直接依赖关系，而不是间接依赖
4.数据库设计的范式和数据库的查询性能很多时候是相悖的，我们需要根据实际的业务情况做一个选择：
  - 查询频次不高的情况下，我们更倾向于提高数据库的设计范式，从而提高存储效率
  - 查询频次较高的情形，我们更倾向于牺牲数据库的规范度，降低数据库设计的范式，允许特定的冗余，从而提高查询的性能

5.QQZone登录功能实现出现的四个错误：
 1) URL没修改，用的还是fruitdb
 2）
 3）rsmd.getColumnName() 和 rsmd.getColumnLabel()
 4）Can not set com.atguigu.qqzone.pojo.UserBasic field com.atguigu.qqzone.pojo.Topic.author to java.lang.Integer
 5) left.html页面没有样式，同时数据也不展示，原因是：我们是直接去请求的静态页面资源，那么并没有执行super.processTemplate()，也就是thymeleaf没有起作用
    (之前的表单也是这个原因)
    解决方法：
    - 新增PageController，添加page方法:
    public String page(String page){
        return page ;       // frames/left
    }
    目的是执行super.processTemplate()方法，让thymeleaf生效

昨日内容：
1. top.html页面显示登录者昵称、判断是否是自己的空间
   1)显示登录者昵称： ${session.userBasic.nickName}
   2)判断是否是自己的空间 : ${session.userBasic.id!=session.friend.id}
     如果不是期望的效果，首先考虑将两者的id都显示出来

2. 点击左侧的好友链接，进入好友空间
   1) 根据id获取指定userBasic信息，查询这个userBasic的topicList，然后覆盖friend对应的value
   2) main页面应该展示friend中的topicList，而不是userBasic中的topicList
   3) 跳转后，在左侧（left）中显示整个index页面
      - 问题：在left页面显示整个index布局
      - 解决：给超链接添加target属性：   target="_top" 保证在顶层窗口显示整个index页面

   4) top.html页面需要修改： "欢迎进入${session.friend}"
      top.html页面的返回自己空间的超链接需要修改：
      <a th:href="@{|/user.do?operate=friend&id=${session.userBasic.id}|}" target="_top">

3. 日志详情页面实现
   1) 已知topic的id，需要根据topic的id获取特定topic
   2) 获取这个topic关联的所有的回复
   3) 如果某个回复有主人回复，需要查询出来
   - 在TopicController中获取指定的topic
   - 具体这个topic中关联多少个Reply，由ReplyService内部实现
   4) 获取到的topic中的author只有id，那么需要在topicService的getTopic方法中封装，在查询topic本身信息时，同时调用userBasicService中的获取userBasic方法，给author属性赋值
   5) 同理，在reply类中也有author，而且这个author也是只有id，那么我们也需要根据id查询得到author，最后设置关联

4. 添加回复

5. 删除回复
   1) 如果回复有关联的主人回复，需要先删除主人回复
   2) 删除回复
   Cannot delete or update a parent row: a foreign key constraint fails
   (`qqzonedb`.`t_host_reply`, CONSTRAINT `FK_host_reply` FOREIGN KEY (`reply`) REFERENCES `t_reply` (`id`))
    我们在删除回复表记录时，发现删除失败，原因是：在主人回复表中仍然有记录引用待删除的回复这条记录
    如果需要删除主表数据，需要首先删除子表数据

6. 删除日志
   1) 删除日志，首先需要考虑是否有关联的回复
   2) 删除回复，首先需要考虑是否有关联的主人回复
   3) 另外，如果不是自己的空间，则不能删除日志


今日内容：
1. 日期和字符串之间的格式化
    /*
    // String -> java.util.Date
    String dateStr1 = "2021-12-30 12:59:59";
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    try {
        Date date1 = sdf.parse(dateStr1);
    } catch (ParseException e) {
        e.printStackTrace();
    }

    // Date -> String
    Date date2 = new Date();
    String dateStr2 = sdf.format(date2);
    */
2. thymeleaf中使用#dates这个公共的内置对象
   ${#dates.format(topic.topicDate ,'yyyy-MM-dd HH:mm:ss')}

3. 系统启动时，我们访问的页面是： http://localhost:8080/pro23/page.do?operate=page&page=login
   为什么不是： http://localhost:8080/pro23/login.html  ?
   答： 如果是后者，那么属于直接访问静态页面。那么页面上的thymeleaf表达式（标签）浏览器是不能识别的
       我们访问前者的目的其实就是要执行 ViewBaseServlet中的processTemplete()

4. http://localhost:8080/pro23/page.do?operate=page&page=login 访问这个URL，执行的过程是什么样的？
   答：
   http://  localhost   :8080   /pro23          /page.do                        ?operate=page&page=login
   协议       ServerIP   port    context root    request.getServletPath()         query string
   1) DispatcherServlet -> urlPattern :  *.do  拦截/page.do
   2) request.getServletPath() ->  /page.do
   3) 解析处理字符串，将/page.do -> page
   4) 拿到page这个字符串，然后去IOC容器（BeanFactory）中寻找id=page的那个bean对象   -> PageController.java
   5) 获取operate的值 -> page    因此得知，应该执行 PageController中的page()方法
   6) PageController中的page方法定义如下：
      public String page(String page){
        return page ;
      }
   7) 在queryString:   ?operate=page&page=login 中 获取请求参数，参数名是page，参数值是login
      因此page方法的参数page值会被赋上"login"
      然后return "login" , return 给 谁？？
   8) 因为PageController的page方法是DispatcherServlet通过反射调用的
      method.invoke(....) ;
      因此，字符串"login"返回给DispatcherServlet
   9) DispatcherServlet接收到返回值，然后处理视图
      目前处理视图的方式有两种： 1.带前缀redirect:    2.不带前缀
      当前，返回"login"，不带前缀
      那么执行  super.processTemplete("login",request,response);
   10) 此时ViewBaseServlet中的processTemplete方法会执行，效果是：
      在"login"这个字符串前面拼接 "/"  (其实就是配置文件中view-prefixe配置的值)
      在"login"这个字符串后面拼接 ".html" (其实就是配置文件中view-suffix配置的值)
      最后进行服务器转发

5. 目前我们进行javaweb项目开发的“套路”是这样的：
   1. 拷贝 myssm包
   2. 新建配置文件applicationContext.xml或者可以不叫这个名字，在web.xml中指定文件名
   3. 在web.xml文件中配置：
      1) 配置前缀和后缀，这样thymeleaf引擎就可以根据我们返回的字符串进行拼接，再跳转
        <context-param>
                                    <param-name>view-prefix</param-name>
                                    <param-value>/</param-value>
        </context-param>
        <context-param>
            <param-name>view-suffix</param-name>
            <param-value>.html</param-value>
        </context-param>
      2) 配置监听器要读取的参数，目的是加载IOC容器的配置文件（也就是applicationContext.xml）
        <context-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>applicationContext.xml</param-value>
        </context-param>
   4. 开发具体的业务模块：
      1） 一个具体的业务模块纵向上由几个部分组成：
         - html页面
         - POJO类
         - DAO接口和实现类
         - Service接口和实现类
         - Controller 控制器组件
      2） 如果html页面有thymeleaf表达式，一定不能够直接访问，必须要经过PageController
      3） 在applicationContext.xml中配置 DAO、Service、Controller，以及三者之间的依赖关系
      4） DAO实现类中 ， 继承BaseDAO，然后实现具体的接口, 需要注意，BaseDAO后面的泛型不能写错。
          例如：
          public class UserDAOImpl extends BaseDAO<User> implements UserDAO{}
      5） Service是业务控制类，这一层我们只需要记住一点：
          - 业务逻辑我们都封装在service这一层，不要分散在Controller层。也不要出现在DAO层（我们需要保证DAO方法的单精度特性）
          - 当某一个业务功能需要使用其他模块的业务功能时，尽量的调用别人的service，而不是深入到其他模块的DAO细节
      6） Controller类的编写规则
          ① 在applicationContext.xml中配置Controller
          <bean id="user" class="com.atguigu.qqzone.controllers.UserController" />
          那么，用户在前端发请求时，对应的servletpath就是   /user.do   , 其中的“user”就是对应此处的bean的id值
          ② 在Controller中设计的方法名需要和operate的值一致
          public String login(String loginId , String pwd , HttpSession session){
            return "index";
          }
          因此，我们的登录验证的表单如下：
          <form th:action="@{/user.do}" method="post">
            <inut type="hidden" name="operate" value="login"/>
          </form>
          ③ 在表单中，组件的name属性和Controller中方法的参数名一致
          <input type="text" name="loginId" />
          public String login(String loginId , String pwd , HttpSession session){
          ④ 另外，需要注意的是： Controller中的方法中的参数不一定都是通过请求参数获取的
          if("request".equals...) else if("response".equals....) else if("session".equals....){
            直接赋值
          }else{
            此处才是从request的请求参数中获取
            request.getParameter("loginId") .....
          }
      7）  DispatcherServlet中步骤大致分为：
          0. 从application作用域获取IOC容器
          1. 解析servletPath ， 在IOC容器中寻找对应的Controller组件
          2. 准备operate指定的方法所要求的参数
          3. 调用operate指定的方法
          4. 接收到执行operate指定的方法的返回值，对返回值进行处理 - 视图处理
      8) 为什么DispatcherServlet能够从application作用域获取到IOC容器？
         ContextLoaderListener在容器启动时会执行初始化任务，而它的操作就是：
         1. 解析IOC的配置文件，创建一个一个的组件，并完成组件之间依赖关系的注入
         2. 将IOC容器保存到application作用域

6. 修改BaseDAO，让其支持properties文件以及druid数据源连接池
   讲解了两种方式：
   1) 直接自己配置properties，然后读取，然后加载驱动.....
   2) 使用druid连接池技术，那么properties中的key是有要求的

```



项目源码：

[QQZone](https://gitee.com/fendoub/java-web/blob/master/QQZone.zip)



# Cookie

## Session和Cookie的区别与联系

1. 共同之处：
   cookie和session都是用来跟踪浏览器用户身份的会话方式。

2. 工作原理：

   1. cookie的工作原理：

      1. 浏览器端第一次发送请求到服务器端
      2. 服务器端创建Cookie，该Cookie中包含用户的信息，然后将该Cookie发送到浏览器端
      3. 浏览器端再次访问服务器端时会携带服务器端创建的Cookie
      4. 服务器端通过Cookie中携带的数据区分不同的用户![cookic](https://s2.loli.net/2023/02/18/FlJk6XYNTW3sm4Z.png)

   2. Session的工作原理

      1. 浏览器端第一次发送请求到服务器端，服务器端创建一个Session，同时会创建一个特殊的Cookie（name为JSESSIONID的固定值，value为session对象的ID），然后将该Cookie发送至浏览器端

      2. 浏览器端发送第N（N>1）次请求到服务器端,浏览器端访问服务器端时就会携带该name为JSESSIONID的Cookie对象

      3. 服务器端根据name为JSESSIONID的Cookie的value(sessionId),去查询Session对象，从而区分不同用户。

         - name为JSESSIONID的Cookie不存在（关闭或更换浏览器），返回1中重新去创建Session与特殊的Cookie
         - name为JSESSIONID的Cookie存在，根据value中的SessionId去寻找session对象
         - value为SessionId不存在**（Session对象默认存活30分钟）**，返回1中重新去创建Session与特殊的Cookie
         - value为SessionId存在，返回session对象

         ![session](https://s2.loli.net/2023/02/18/ckC79Iiy6VszuPF.png)

3. 区别：

   cookie数据保存在客户端，session数据保存在服务端.

   1. session

      简单的说，当你登陆一个网站的时候，如果web服务器端使用的是session，那么所有的数据都保存在服务器上，客户端每次请求服务器的时候会发送当前会话sessionid，服务器根据当前sessionid判断相应的用户数据标志，以确定用户是否登陆或具有某种权限。由于数据是存储在服务器上面，所以你不能伪造。

   2. cookie

      sessionid是服务器和客户端连接时候随机分配的，如果浏览器使用的是cookie，那么所有数据都保存在浏览器端，比如你登陆以后，服务器设置了cookie用户名，那么当你再次请求服务器的时候，浏览器会将用户名一块发送给服务器，这些变量有一定的特殊标记。服务器会解释为cookie变量，所以只要不关闭浏览器，那么cookie变量一直是有效的，所以能够保证长时间不掉线。

4. 区别对比：

   1. cookie数据存放在客户的浏览器上，session数据放在服务器上
   2. cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗,如果主要考虑到安全应当使用session
   3. session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能，如果主要考虑到减轻服务器性能方面，应当使用COOKIE
   4. 单个cookie在客户端的限制是3K，就是说一个站点在客户端存放的COOKIE不能3K。
   5. 所以：将登陆信息等重要信息存放为SESSION;其他信息如果需要保留，可以放在COOKIE中



## Cookie创建

1. 创建客户端对象

   ```JAVA
   Cookie cookie = new Cookie(key, value);
   ```

2. 在客户端保存Cookie

   ```JAVA
   resp.addCookie(cookie);
   ```

3. 设置Cookie有效时长

   ```JAVA
   cookie.setMaxAge(30); // 设置cookie有效时长为60秒
   cookie.setDomain(pattern);
   cookie.setPath(uri);
   ```

4. Cookie的应用

   记住用户名和密码几天， setMaxAge(60* 60 * 24 * n)

   几天免登陆， 当用户访问某个页面的时候，服务器端可以从cookie中获取用户名和密码，并获取用户上一次是否选择了免登陆，如果选择了，则直接登录



# 验证码Kaptcha

1. 引入Kaptcha包

   ```XML
   <dependency>
       <groupId>com.github.penggle</groupId>
       <artifactId>kaptcha</artifactId>
       <version>2.3.2</version>
   </dependency>
   ```

2. 配置Servlet

   ```XML
   <servlet>
       <servlet-name>Kaptcha</servlet-name>
       <servlet-class>com.google.code.kaptcha.servlet.KaptchaServlet</servlet-class>
       <init-param>
           <param-name>kaptcha.border.color</param-name>
           <param-value>red</param-value>
       </init-param>
       <init-param>
           <param-name>kaptcha.textproducer.char.string</param-name>
           <param-value>abcdefg</param-value>
       </init-param>
   </servlet>
   <servlet-mapping>
       <servlet-name>Kaptcha</servlet-name>
       <url-pattern>/kaptcha.jpg</url-pattern>
   </servlet-mapping>
   ```

3. 在页面上的img标签中引入我们配置的图片

   ```HTML
   <img src="kaptcha.jpg" />
   ```

4. 验证码中的各个参数属性在Constants中

   ![image-20230214115125006](https://s2.loli.net/2023/02/18/RvzlEYyeIPQmJ4x.png)

5. KaptchaServlet在生成验证码图片的时候，同时会将验证码信息保存到session中 name = KAPTCHA_SESSION_KEY  ，在上面的Constants类中有写



# 正则表达式

使用三步骤：

1. 定义正则表达式对象
2. 定义待校验的字符串
3. 校验

##  创建正则表达式对象

* 对象形式：`var reg = new RegExp("正则表达式")`当正则表达式中有"/"那么就使用这种
* 直接量形式：`var reg = /正则表达式/`一般使用这种声明方式 

## 正则表达式入门案例

1. 模式验证: 校验字符串中是否包含'o'字母

   正则对象.test(目标字符串) ===  寻找目标字符串中是否含有正则对象，如果含有的话，返回true，否则返回false

   ```javascript
   // 创建一个最简单的正则表达式对象
   var reg = /o/;
   
   // 创建一个字符串对象作为目标字符串
   var str = 'Hello World!';
   
   // 调用正则表达式对象的test()方法验证目标字符串是否满足我们指定的这个模式，返回结果true
   console.log("字符串中是否包含'o'="+reg.test(str));
   ```

## 正则表达式的匹配模式

### 全局查找

匹配读取: 读取字符串中的所有'o'

match方法，获取我们匹配成功的字符串，放到数组中并返回

通过给正则表达式后面添加一个g，来表示全局搜索，g == global

```javascript
//匹配读取: 读取一个字符串中的所有'l'字母
// g表示全文查找,如果不使用g那么就只能查找到第一个匹配的内容
//1. 编写一个正则表达式
var reg2 = /l/g
//2. 使用正则表达式去读取字符串
var arr = str.match(reg2);
console.log(arr)
```

### 忽略大小写

在正则表达式后面添加一个i，来表示忽略大小写，i ==== ignore

```javascript
//目标字符串
var targetStr = 'Hello WORLD!';

//没有使用忽略大小写的正则表达式
var reg = /o/gi;
//获取全部匹配
var resultArr = targetStr.match(reg);
//数组长度为1
console.log("resultArr.length="+resultArr.length);
//遍历数组，仅得到'o'
for(var i = 0; i < resultArr.length; i++){
    console.log("resultArr["+i+"]="+resultArr[i]);
}
```

### 多行查找

不使用多行查找模式，目标字符串中不管有没有换行符都会被当作一行

在正则表达式后面添加一个m，表示多行查找 m ===== many

正则表达式中在最后添加一个$ 表明要查询以此，正则表达式结尾字符串

```javascript
ar targetStr01 = 'Hello\nWorld!';
//目标字符串2
var targetStr02 = 'Hello';

//匹配以'Hello'结尾的正则表达式，使用了多行匹配
var reg = /Hello$/m;
console.log(reg.test(targetStr01));//true

console.log(reg.test(targetStr02));//true
```



## 元字符

 在正则表达式中被赋予特殊含义的字符，不能被直接当做普通字符使用。如果要匹配元字符本身，需要对元字符进行转义，转义的方式是在元字符前面加上“\”，例如：\^ 

常用元字符

| 代码 | 说明                                                         |
| ---- | ------------------------------------------------------------ |
| .    | 匹配除换行字符以外的任意字符。                               |
| \w   | 匹配字母或数字或下划线等价于[a-zA-Z0-9_]                     |
| \W   | 匹配任何非单词字符。等价于[^A-Za-z0-9_]                      |
| \s   | 匹配任意的空白符，包括空格、制表符、换页符等等。等价于[\f\n\r\t\v]。 |
| \S   | 匹配任何非空白字符。等价于[^\f\n\r\t\v]。                    |
| \d   | 匹配数字。等价于[0-9]。                                      |
| \D   | 匹配一个非数字字符。等价于[^0-9]                             |
| \b   | 匹配单词的开始或结束                                         |
| ^    | 匹配字符串的开始，但在[]中使用表示取反                       |
| $    | 匹配字符串的结束                                             |

### 例子一

\s 匹配任意空白字符

```javascript
var str = 'one two three four';
// 匹配全部空格
var reg = /\s/g;
// 将空格替换为@
var newStr = str.replace(reg,'@'); // one@two@three@four
console.log("newStr="+newStr);
```

### 例子二

\d 表示匹配数组，\d+,表示匹配多个字符

```javascript
var str = '今年是2014年';
// 匹配至少一个数字
var reg = /\d+/g;
str = str.replace(reg,'abcd');
console.log('str='+str); // 今年是abcd年
```

### 例子三

\ ^ xxx,表示匹配以xxx开头的字符

```javascript
var str01 = 'I love Java';
var str02 = 'Java love me';
// 匹配以Java开头
var reg = /^Java/g;
console.log('reg.test(str01)='+reg.test(str01)); // flase
console.log("<br />");
console.log('reg.test(str02)='+reg.test(str02)); // true
```

### 例子四

xxx$表示匹配以xxx结尾的字符

```javascript
var str01 = 'I love Java';
var str02 = 'Java love me';
// 匹配以Java结尾
var reg = /Java$/g;
console.log('reg.test(str01)='+reg.test(str01)); // true
console.log("<br />");
console.log('reg.test(str02)='+reg.test(str02)); // flase
```

## 字符集合

| 语法格式    | 示例                                                         | 说明                                               |
| ----------- | ------------------------------------------------------------ | -------------------------------------------------- |
| [字符列表]  | 正则表达式：[abc] 含义：目标字符串包含abc中的任何一个字符 目标字符串：plain 是否匹配：是 原因：plain中的“a”在列表“abc”中 | 目标字符串中任何一个字符出现在字符列表中就算匹配。 |
| [^字符列表] | [^abc] 含义：目标字符串包含abc以外的任何一个字符 目标字符串：plain 是否匹配：是 原因：plain中包含“p”、“l”、“i”、“n” | 匹配字符列表中未包含的任意字符。                   |
| [字符范围]  | 正则表达式：[a-z] 含义：所有小写英文字符组成的字符列表 正则表达式：[A-Z] 含义：所有大写英文字符组成的字符列表 | 匹配指定范围内的任意字符。                         |

正则表达式 - 表示范围， 0-9，表示0至 9



```javascript
var str01 = 'Hello World';
var str02 = 'I am Tom';
//匹配abc中的任何一个
var reg = /[abc]/g;
console.log('reg.test(str01)='+reg.test(str01));//flase
console.log('reg.test(str02)='+reg.test(str02));//true
```

## 出现次数

| 代码  | 说明           |
| ----- | -------------- |
| *     | 出现零次或多次 |
| +     | 出现一次或多次 |
| ?     | 出现零次或一次 |
| {n}   | 出现n次        |
| {n,}  | 出现n次或多次  |
| {n,m} | 出现n到m次     |

```javascript
console.log("/[a]{3}/.test('aa')="+/[a]{3}/g.test('aa')); // flase
console.log("/[a]{3}/.test('aaa')="+/[a]{3}/g.test('aaa')); // true
console.log("/[a]{3}/.test('aaaa')="+/[a]{3}/g.test('aaaa')); // true
```

## 在正则表达式中表达『或者』

使用符号：|

```javascript
// 目标字符串
var str01 = 'Hello World!';
var str02 = 'I love Java';
// 匹配'World'或'Java'
var reg = /World|Java/g;
console.log("str01.match(reg)[0]="+str01.match(reg)[0]);//World
console.log("str02.match(reg)[0]="+str02.match(reg)[0]);//Java
```







# Ajax（了解）

```XML
第一步： 客户端发送异步请求；并绑定对结果处理的回调函数
1) <input type="text" name="uname" onblur="ckUname()"/>
2) 定义ckUname方法：
   - 创建XMLHttpRequest对象
   - XMLHttpRequest对象操作步骤：
     - open(url,"GET",true)
     - onreadyStateChange 设置回调
     - send() 发送请求
   - 在回调函数中需要判断XMLHttpRequest对象的状态:
     readyState(0-4) , status(200)
	0 - （未初始化)还没有调用send ()方法
	1 -（载入)已调用send ()方法，正在发送请求
	2 -（载入完成 ) send ()方法执行完成，已经接收到全部响应内容
	3 -（交互)正在解析响应内容
	4 -（完成）响应内容解析完成，可以在客户端调用了

第二步：服务器端做校验，然后将校验结果响应给客户端
```



js代码

```JS
var xmlHttpRequest;
function createXMLHttpRequest(){
    if(window.XMLHttpRequest){
        xmlHttpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){
            xmlHttpRequest = new ActiveXObject("Msxm12.XMLHTTP");
        }
    }
}

function ckUname(uname) {
    createXMLHttpRequest();
    var url="user.do?operate=ckUname&uname="+uname;
    xmlHttpRequest.open("GET",url, true);
    // 设置回调函数
    xmlHttpRequest.onreadystatechange = ckUnameCB;
    // 发送请求
    xmlHttpRequest.send();
}

function ckUnameCB(){
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
        if(xmlHttpRequest.responseText === "{'uname':'1'}"){
            alert("用户名已经被注册了！！！");
        }else{
            alert("用户名可以使用");
        }
    }

```



服务器端代码

```JAVA
public String ckUname(String uname){
    Boolean aBoolean = userService.ckUname(uname);
    if(aBoolean){
        // 用可以注册
        return "json:{'uname':'0'}";
    }else{
        // 用户不可以注册
        return "json:{'uname':'1'}";
    }
}
```



# VUE（了解）

## 绑定数据

```HTML
<!--{{绑定数据}}-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                // 找到id为div0的标签
                "el":"#div0",
                data:{
                    // 在div0下面的msg替换为下面数据
                    msg:"Hello World!!!"
                }
            });
        }
    </script>
</head>
<body>
    <div id="div0">
        <span>{{msg}}</span>
    </div>
</body>
</html>
```

## v-bind绑定数据

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                // 找到id为div0的标签
                "el":"#div0",
                data:{
                    // 在div0下面的msg替换为下面数据
                    msg:"Hello World!!!",
                    uname:"你好"
                }
            });
        }
    </script>
</head>
<body>
    <div id="div0">
        <!--通过{{}}来绑定对应的属性-->
        <span>{{msg}}</span>
        <!--通过v-bind来绑定对应的属性-->
        <input type="text" v-bind:value="uname" />
    </div>
</body>
</html>
```

## v-model绑定数据

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                // 找到id为div0的标签
                "el":"#div0",
                data:{
                    // 在div0下面的msg替换为下面数据
                    msg:"Hello World!!!",
                    uname:"你好"
                }
            });
        }
    </script>
</head>
<body>
    <div id="div0">
        <!--通过{{}}来绑定对应的属性-->
        <span>{{msg}}</span>
        
        
        <!--通过v-bind来绑定对应的属性-->
        <input type="text" v-bind:value="uname" />
         <!--通过v-bind可以省略-->
        <input type="text" :value="uname" />
        
        
        <!--通过v-model来绑定对应的属性,如果我们这个标签里面的value值发生变化的话，那么vue对象中的msg也会发生变化-->
        <input type="text" v-model:value="msg" />
        <!--:value可以省略-->
        <input type="text" v-model="msg" />
    </div>
</body>
</html>
```

## trim去除首位空标签

![image-20230216100428014](https://s2.loli.net/2023/02/18/yMxnkvAFbK62tXm.png)

## v-if v-else

使用v-if和v-else来进行标签的显隐

并且v-if和v-else之间不能有其他的节点

如果v-if不成立的话，则该标签就直接删除了

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                // 找到id为div0的标签
                "el":"#div0",
                data:{
                    msg:"文本标签",
                    num:"Hello World!!!"
                }
            });
        }
    </script>
</head>
<body>
    <div id="div0">
        <!--如果num偶数的话，才显示span标签-->
        <span v-if="num%2==0">if成立</span>
        <span v-else="num%2==0">if不成立</span>
    </div>
</body>
</html>
```



## v-show 

使用v-show来控制标签的显隐，如果表达式不成立的话，改标签不会消失，而是会加上一个display：none的数据

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                // 找到id为div0的标签
                "el":"#div0",
                data:{
                    msg:"文本标签",
                    num:"Hello World!!!"
                }
            });
        }
    </script>
</head>
<body>
    <div id="div0">
        <span v-show="num%2==0">if成立</span>
    </div>
</body>
</html>
```



## 列表渲染

v-for,循环遍历数据

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                "el":"#div0",
                data:{
                    fruitList:[
                        {fname:"苹果", fprice:5, fcount:100,remark:"苹果很好吃"},
                        {fname:"香蕉", fprice:5, fcount:100,remark:"香蕉很好吃"},
                        {fname:"菠萝", fprice:5, fcount:100,remark:"菠萝很好吃"},
                        {fname:"西瓜", fprice:5, fcount:100,remark:"西瓜很好吃"},
                    ]
                }
            }); 
        }
    </script>
</head>
<body>
    <div id="div0">
        <table>
            <tr>
                <th>名称</th>
                <th>单价</th>
                <th>库存</th>
                <th>备注</th>
            </tr>
            <tr v-for="fruit in fruitList">
                <td>{{fruit.fname}}</td>
                <td>{{fruit.fprice}}</td>
                <td>{{fruit.fcount}}</td>
                <td>{{fruit.remark}}</td>
            </tr>
        </table>
    </div>
</body>
</html>
```

## 事件驱动

v-on 标签

v-on:click; 

v-on:blur;

v-on:mousemove;

反转字符串

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                "el":"#div0",
                data:{
                    msg:"hello world"
                },
                methods:{
                  myReverse:function (){
                      this.msg = this.msg.split("").reverse().join("");
                  }  
                }
            }); 
        }
    </script>
</head>
<body>
    <div id="div0">
        <span>{{msg}}</span>
        <!-- v-on 表示绑定点击事件-->
        <!-- v-on 可以省略不写，编程@click-->
        <input type="button" value="反转" v-on:click="myReverse">
    </div>
</body>
</html>
```



## 侦听属性

watch，当属性改变的时候触发这个方法

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                "el":"#div0",
                data:{
                    num1:0,
                    num2:1,
                    num3:2,
                },
                watch:{
                    num1:function (newValue){
                        this.num3 = parseInt(newValue)+parseInt(this.num2);
                    },
                    num2:function (newValue){
                        this.num3 = parseInt(this.num1)+parseInt(newValue);
                    }
                }
            }); 
        }
    </script>
</head>
<body>
    <div id="div0">
        <input type="text" v-model="num1" size="2">
        +
        <input type="text" v-model="num2" size="2">
        =
        <span>{{num3}}</span>
    </div>
</body>
</html>
```



## 生命周期

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script language="JavaScript" src="script/vue.js"></script>
    <script language="JavaScript">
        window.onload=function(){
            var vue = new Vue({
                "el":"#div0",
                data:{
                    msg:1
                },
                methods:{
                    changeMsg:function(){
                        this.msg = this.msg + 1 ;
                    }

                },
                /*vue对象创建之前*/
                beforeCreate:function(){
                    console.log("beforeCreate:vue对象创建之前---------------");
                    console.log("msg:"+this.msg);
                },
                /*vue对象创建之后*/
                created:function(){
                    console.log("created:vue对象创建之后---------------");
                    console.log("msg:"+this.msg);
                },
                /*数据装载之前*/
                beforeMount:function(){
                    console.log("beforeMount:数据装载之前---------------");
                    console.log("span:"+document.getElementById("span").innerText);
                },
                /*数据装载之后*/
                mounted:function(){
                    console.log("mounted:数据装载之后---------------");
                    console.log("span:"+document.getElementById("span").innerText);
                },
                beforeUpdate:function(){
                    console.log("beforeUpdate:数据更新之前---------------");
                    console.log("msg:"+this.msg);
                    console.log("span:"+document.getElementById("span").innerText);
                },
                updated:function(){
                    console.log("Updated:数据更新之后---------------");
                    console.log("msg:"+this.msg);
                    console.log("span:"+document.getElementById("span").innerText);
                }
            });
        }
    </script>
</head>
<body>
    <div id="div0">
        <span id="span">{{msg}}</span><br/>
        <input type="button" value="改变msg的值" @click="changeMsg"/>
    </div>
</body>
</html>
```







# AXIOS

Axios是一个ajax的框架，简化ajax的操作

Axios操作步骤

1. 添加axios.js文件

2. 客户端向服务器异步发送普通参数值

   基本格式：axios().then().catch()

   示例

   ```JS
   axios01:function (){
       axios({
           // 配置参数
           method:"post",
           url:"axios01.do",
           params:{
               uname:vue.uname,
               pwd:vue.pwd
           }
           // 成功的情况
       }).then(function (value){
           console.log(value);
           // 失败的情况
       }).catch(function (reason) {
           console.log(reason);
       })
   }
   ```

   





## 示例1：客户端向服务器端异步发送普通参数值

HTML文件

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <script src="script/vue.js" ></script>
    <script src="script/axios.min.js"></script>
    <script>
        window.onload=function (){
            var vue = new Vue({
                "el":"#div0",
                data:{
                    uname:"Nuyoah",
                    pwd:"OK"
                },
                methods:{
                    axios01:function (){
                        axios({
                            method:"post",
                            url:"axios01.do",
                            params:{
                                uname:vue.uname,
                                pwd:vue.pwd
                            }
                        }).then(function (value){
                            console.log(value);
                        }).catch(function (reason) {
                            console.log(reason);
                        })
                    }
                }
            }); 
        }
    </script>
</head>
<body>
    <div id="div0">
        <input type="text" v-model="uname"><br />
        <input type="text" v-model="pwd"> <br/>
        <input type="button" @click="axios01" value="提交">
    </div>
</body>
</html>
```



服务器端文件

```JAVA
@WebServlet("/axios01.do")
public class Axios01Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String uname = req.getParameter("uname");
        String pwd = req.getParameter("pwd");
        
        resp.setCharacterEncoding("utf-8");
        resp.setContentType("text/html;charset=utf-8");
        PrintWriter writer = resp.getWriter();
        writer.print(uname+"_"+pwd);
    }
}

```



## 示例二：客户端向服务器端发送JSON格式的数据

我们只需要将params改为data即可

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="script/vue.js" ></script>
        <script src="script/axios.min.js"></script>
        <script>
            window.onload=function (){
                var vue = new Vue({
                    "el":"#div0",
                    data:{
                        uname:"Nuyoah",
                        pwd:"OK"
                    },
                    methods:{
                        axios01:function (){
                            axios({
                                method:"post",
                                url:"axios02.do",
                                data:{
                                    uname:vue.uname,
                                    pwd:vue.pwd
                                }
                            }).then(function (value){
                                var data = value.data;
                                vue.uname = data.uname;
                                console.log(vue.uname);
                                vue.pwd = data.pwd;
                            }).catch(function (reason) {
                                console.log(reason);
                            })
                        }
                    }
                }); 
            }
        </script>
    </head>
    <body>
        <div id="div0">
            <input type="text" v-model="uname"><br />
            <input type="text" v-model="pwd"> <br/>
            <input type="button" @click="axios01" value="提交">
        </div>
    </body>
</html>
```



## 示例三：服务器端接受处理JSON并返回给客户端JSON格式的代码

服务器端可以通过req.getReader()函数来进行读取客户端传来的JSON格式的代码

服务器端可以通过Gson来将，客户端传来的JSON格式的代码，转换为JAVA对象，也可以将JAVA对象转换成JSON的格式

服务器端代码

```JAVA
package com.hgu.axios;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/axios02.do")
public class Axios02Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        StringBuffer stringBuffer = new StringBuffer();
        BufferedReader reader = req.getReader();
        String str = null;
        if((str = reader.readLine())!= null){
            stringBuffer.append(str);
        }

        str = stringBuffer.toString();
        System.out.println(str);
        // Gson 有两个常用的API
        // 1. fromJson(string, T), 将字符串转换成JAVA Object对象
        // 2. toJson(JavaObject) 将javaObject转换成JSON对象
        Gson gson = new Gson();
        User user = gson.fromJson(str, User.class);

        String s = gson.toJson(user);

        resp.getWriter().write(s);
    }
}

```

客户端代码

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="script/vue.js" ></script>
        <script src="script/axios.min.js"></script>
        <script>
            window.onload=function (){
                var vue = new Vue({
                    "el":"#div0",
                    data:{
                        uname:"Nuyoah",
                        pwd:"OK"
                    },
                    methods:{
                        axios01:function (){
                            axios({
                                method:"post",
                                url:"axios02.do",
                                data:{
                                    uname:vue.uname,
                                    pwd:vue.pwd
                                }
                            }).then(function (value){
                                var data = value.data;
                                vue.uname = data.uname;
                                console.log(vue.uname);
                                vue.pwd = data.pwd;
                            }).catch(function (reason) {
                                console.log(reason);
                            })
                        }
                    }
                }); 
            }
        </script>
    </head>
    <body>
        <div id="div0">
            <input type="text" v-model="uname"><br />
            <input type="text" v-model="pwd"> <br/>
            <input type="button" @click="axios01" value="提交">
        </div>
    </body>
</html>
```



## JS处理JSON

Object - > String ==== JSON.stringify(object)

String - >  Ojbect ==== JSON.parse(str)





# 书城

第一阶段，未使用vue和Axios渲染的

[Book01](https://gitee.com/fendoub/java-web/blob/master/Book01.zip)

第二阶段：使用vue和Axios渲染的

[Book02](https://gitee.com/fendoub/java-web/blob/master/Book02.zip)
>>>>>>> 03badbb (github action update)
