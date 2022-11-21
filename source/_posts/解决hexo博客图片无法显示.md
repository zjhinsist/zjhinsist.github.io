---
title: 解决hexo博客图片无法显示
cover: "https://s2.loli.net/2022/11/21/uidNZVrpm1acvf5.webp"
mathjax: false
date: 2022-11-11 22:10:40
tags: hexo
description: 解决hexo博客图片无法显示
categories: hexo
---

在安装hexo的时候的时候，如果我们在md文件放图片的时候，直接hexo clean，g, s本地预览的时候会出错，下面详解解决方法：

1. 首先我们需要把我们博客中的{% label md文件中的图片路径 red %}改成与{% label md同目录同名称的文件夹下 blue%}.

![image-20221111221709514](https://s2.loli.net/2022/11/11/3dHIxDZEvwjmf8O.png)

2. 为了以后我们直接向md文件中复制图片的时候，{% label 图片自动放到指定的文件夹下 red %}，我们需要在Typora的设置如下：

   依此点击{%label 文件 -> 偏好设置 -> 图像 -> 复制到指定目录 -> ./${filename} red %}

![image-20221111221955857](https://s2.loli.net/2022/11/11/YUC6pD3euTckFgw.png)

3. 安装插件：

   ```YAML
   npm install hexo-asset-image --save
   ```

4. 从新部署和展示

   ```yaml
   hexo clean
   hexo g
   hexo s
   ```

5. 最后成功显示
