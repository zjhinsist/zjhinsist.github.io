---
title: Typora中B站图床的使用
background: url(https://s3.bmp.ovh/imgs/2022/08/08/e1c9bda47806a33d.png)
mathjax: false
date: 2022-10-04 22:18:09
tags: Typora
description: B站图床在Typora上面的使用，Typora内置插件
categories: hexo
---

# Typora上传图片

## B站插件

B站图床插件下载地址：[**https://github.com/xlzy520/typora-plugin-bilibili**](https://github.com/xlzy520/typora-plugin-bilibili)

![image-20221004222218834](https://i0.hdslb.com/bfs/album/8393884fd46343de77e58a2b1651d95acb8a6afc.png)

下载完解压之后：

![image-20221004222615491](https://i0.hdslb.com/bfs/album/6c42f882f073d379ce768a37012ddf802786b285.png)



## Customer Command方法

先找到偏好设置

![image-20221004222840776](https://i0.hdslb.com/bfs/album/fe2be884153104671b2335b5588e498359284fc1.png)

上传服务改成Customer Command

![image-20221004222934453](https://i0.hdslb.com/bfs/album/144733bbc76f647bd073e5a4c7e1a88ce29ba682.png)



将命令改成如下的格式：

![image-20221004223126666](https://i0.hdslb.com/bfs/album/8f7ef176e7415b1b72e313c9d04d70294165f729.png)

将main.exe的路径放在这个命令这里，然后空一格加上token=，这里的token获取方式需要从{% span red, B站上面的登录信息上获取 %}

![image-20221004223447465](https://i0.hdslb.com/bfs/album/b49c480eb6040f2f132e1408221623ab64ac5826.png)

最后结果差不多是这样：

H:\Application\Typora\main.exe token=f41dbc2b%2C1680416053%2Ceafec087%2Aa1



然后再图片上右击点击上传图片即可

![image-20221004223854545](https://i0.hdslb.com/bfs/album/84a1478d5b1ddc192f60f227d866f1a167973f95.png)





