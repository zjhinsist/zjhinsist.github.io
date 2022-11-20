---
title: Java邮件发送
background: url(https://s3.bmp.ovh/imgs/2022/08/08/e1c9bda47806a33d.png)
date: 2022-09-16 14:42:21
tags: JavaWeb
description: 使用Java发送邮件
categories: JAVA
---

# 邮件发送原理实现

要在网络.上实现邮件功能,必须要有专门]的邮件服务器。

这些邮件服务器类似于现实生活中的邮局，它主要负责接收用户投递过来的邮件,并把邮件投递到邮件接收者的电子邮箱中。

SMTP服务器地址:一般是 smtp.xx.com，比如163邮箱是smtp.163.com， qq邮箱是smtp.qq.com。

电子邮箱(E-Mail地址)的获得需要在邮件服务器.上进行申请。比如我们要使用QQ邮箱，就需要开通邮箱功能

# 传输协议

SMTP协议 

- 发送邮件: 我们通常吧用户SMTP请求(邮件发送请求)的服务器称之为SMTP服务器(邮件发送服务器)

pop3协议 

- 接收邮件: 我们通常吧处理用户pop3请求(邮件接收请求)的服务器称之为pop3服务器(邮件接收服务器)

# 概述

我们将用代码完成邮件的发送。这在实际项目中应用的非常广泛,比如注册需要发送邮件进行账号激活，再比如0A项目中利用邮
件进行任务提醒等等。

使用Java发送E-mail十分简单,但是 首先你应该准备JavaMail API和Java Activation Framework。

得到两个jar包:

- mail.jar
- activation.jar

JavaMail是sun公司(现以被甲骨文收购)为方便Java开发人员在应用程序中实现邮件发送和接收功能而提供的一套标准开发包，
它支持一些常用的邮件协议，如前面所讲的SMTP，POP3， IMAP ,还有MIME等。我们在使用JavaMail API编写邮件时，无须考虑邮
件的底层实现细节，只要调用JavaMail开发包中相应的API类就可以了。

我们可以先尝试发送一封简单的邮件，确保电脑可以连接网络。

- 创建包含邮件服务器的网络连接信息的Session对象。
- 创建代表邮件内容的Message对象
- 创建Transport对象，连接服务器，发送Message, 关闭连接

主要有四个核心类，我们在编写程序时，记住这四个核心类，就很容易编写出Java邮件处理程序。

![image-20220916144530500](https://s2.loli.net/2022/11/04/15eRmY3vWyi2ISM.png)



# 代码实现

1. 获取邮箱授权码

   ![image-20220916144731451](https://s2.loli.net/2022/11/04/iXDRLBrQzFOEtus.png)

2. 导入包

   先在项目目录下创建一个lib文件然后把下载的两个jar包放进去，最后将这个目录添加为库即可

   ![image-20220916144832388](https://s2.loli.net/2022/11/04/QeaIqnvEuO6lxVD.png)

   ```java
   public class SendEmail {
       public static void main(String[] args) throws GeneralSecurityException, MessagingException {
           Properties prop = new Properties();
           prop.setProperty("mail.host", "smtp.qq.com");   // 设置QQ邮箱服务器
           prop.setProperty("mail.transport.protocol", "smtp");  // 邮件发送协议
           prop.setProperty("mail.smtp.auth", "true");  // 需要验证用户名密码
   		
           // 现在QQ去掉了SSL加密，所以这一段代码不再使用
           // 关于QQ邮箱，还要设置SSL加密，加上一下代码即可
           // MailSSLSocketFactory sf = new MailSSLSocketFactory();
           // sf.setTrustAllHosts(true);
           // prop.put("mail.smtp.ssl.enable", "true");
           // prop.put("mail.smtp.ssl.socketFactory", sf);
   
   
           // 使用javaweb发送邮件的5个步骤
           // 1.创建定义整个应用程序所需的环境信息的Session 对象
           // 创建定义整个应用程序所需的环境信息的Session 对象
   
           // QQ才有，其他邮箱不用
           Session session = Session.getDefaultInstance(prop, new Authenticator() {
               @Override
               protected PasswordAuthentication getPasswordAuthentication() {
                   return new PasswordAuthentication("2152889763@qq.com", "秘钥");
               }
           });
   
           // 开启Session的Debug，这样可以查看程序发送Email的运行状态
           session.setDebug(true);
   
           // 2. 通过session得到transport对象
           Transport ts = session.getTransport();
   
           // 3. 使用邮件的用户名和授权码连上邮件服务器
           ts.connect("smtp.qq.com", "2152889763@qq.com", "秘钥");
   
           // 4. 创建邮件
           // 创建邮件对象
           MimeMessage message = new MimeMessage(session);
   
           // 指明邮件发送人
           message.setFrom(new InternetAddress("2152889763@qq.com"));
   
           // 指明邮件收件人，现在发件人和收件人是一样的，那就是给自己发
           message.setRecipient(Message.RecipientType.TO, new InternetAddress("2152889763@qq.com"));
   
           // 邮件的标题
           message.setSubject("测试");
   
           // 邮件文本内容
           message.setContent("你好啊！","text/html;charset=utf-8");
   
           // 5. 发送邮件
           ts.sendMessage(message, message.getAllRecipients());
   
           // 6.关闭
           ts.close();
       }
   }
   ```






# 带图片和附件的邮件



先认识两个类一个名词:

MIME({% label 多用途互联网邮件扩展类型 red %})

MimeBodyPart类

javax.mail.internet.MimeBodyPart类表示的是一个MIME消息，它和MimeMessage类一样都是从Part接口继承过来。

MimeMultipart类

javax.mail.internet.MimeMultipart是抽象类Multipart的实现子类,它用来组合多个MIME消息。一个MimeMultipart对象可以包含多个代表MIME消息的MimeBodyPart对象。

![image-20220916150203048](https://s2.loli.net/2022/11/04/6neuEtclbHXRxBQ.png)

```java
public class SendEmail {
    public static void main(String[] args) throws GeneralSecurityException, MessagingException {
        Properties prop = new Properties();
        prop.setProperty("mail.host", "smtp.qq.com");   // 设置QQ邮箱服务器
        prop.setProperty("mail.transport.protocol", "smtp");  // 邮件发送协议
        prop.setProperty("mail.smtp.auth", "true");  // 需要验证用户名密码


        // 现在QQ去掉了SSL加密，所以这一段代码不再使用
        // 关于QQ邮箱，还要设置SSL加密，加上一下代码即可
        // MailSSLSocketFactory sf = new MailSSLSocketFactory();
        // sf.setTrustAllHosts(true);
        // prop.put("mail.smtp.ssl.enable", "true");
        // prop.put("mail.smtp.ssl.socketFactory", sf);


        // 使用javaweb发送邮件的5个步骤
        // 1.创建定义整个应用程序所需的环境信息的Session 对象
        // 创建定义整个应用程序所需的环境信息的Session 对象

        // QQ才有，其他邮箱不用
        Session session = Session.getDefaultInstance(prop, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("2152889763@qq.com", "邮箱授权码");
            }
        });

        // 开启Session的Debug，这样可以查看程序发送Email的运行状态
        session.setDebug(true);

        // 2. 通过session得到transport对象
        Transport ts = session.getTransport();

        // 3. 使用邮件的用户名和授权码连上邮件服务器
        ts.connect("smtp.qq.com", "2152889763@qq.com", "邮箱授权码");

        // 4. 创建邮件
        // 创建邮件对象
        MimeMessage message = new MimeMessage(session);

        // 指明邮件发送人
        message.setFrom(new InternetAddress("2152889763@qq.com"));

        // 指明邮件收件人，现在发件人和收件人是一样的，那就是给自己发
        message.setRecipient(Message.RecipientType.TO, new InternetAddress("2152889763@qq.com"));

        // 邮件的标题
        message.setSubject("图片测试");
		// =====================================准备图片========================================
        // 准备邮件数据
        // 准备图片数据
        MimeBodyPart image = new MimeBodyPart();
        // 图片需要经过数据处理...DataHandler:数据处理
        DataHandler dh = new DataHandler(new FileDataSource("C:\\Users\\Mr.Zhang\\Pictures\\Camera Roll\\wallhaven-v9w635.jpg"));
        image.setDataHandler(dh);   // 在body中放入这个图片的处理数据
        image.setContentID("bz.jpg");   // 给图片设置一个ID

        // 准备正文数据
        MimeBodyPart text = new MimeBodyPart();
        text.setContent("这是一封邮件正文带图片<img src='cid:bz.jpg'>的邮件","text/html;charset=utf-8");

        // 描述数据关系
        MimeMultipart mm = new MimeMultipart();
        mm.addBodyPart(text);
        mm.addBodyPart(image);
        mm.setSubType("related");

        // 邮件文本内容
        message.setContent(mm);
        message.saveChanges();
		// =====================================准备完毕========================================
        // 5. 发送邮件
        ts.sendMessage(message, message.getAllRecipients());

        // 6.关闭
        ts.close();
    }
}
```

