---
title: Anaconda使用方法
date: 2022-07-21 09:48:37
tags: Anaconda
description: Anaconda的使用方法
background: url(https://s3.bmp.ovh/imgs/2022/08/08/e1c9bda47806a33d.png)
categories: Python
---

## 常用命令：

1. 查看版本号：

   conda --version

2. 创建新环境

   conda create -n 环境名称 python=python版本号

3. 切换环境：

   activate 环境名

4. 下载包

   conda install 包名

5. 升级包

   conda update 包名

6. 删除包

   conda remove 包名

7. 删除环境：

   conda remove -n 包名 --all（删除该环境下的所有包名）

8. 查看所有虚拟环境:

   conda env list