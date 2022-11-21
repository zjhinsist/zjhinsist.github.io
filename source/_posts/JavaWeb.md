---
title: JavaWeb
cover: "https://s2.loli.net/2022/11/21/Sm8lFrjtzUkihVy.webp"
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
    </body>
</html>
```

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
</html>
```

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                </tr>
            </table>
        </div>
    </div>
</body>
</html>
```



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
    }
}

function editPrice(){
    if(event && event.srcElement && event.srcElement.tagName=="TD"){
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
    }
}
```

