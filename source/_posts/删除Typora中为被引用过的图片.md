---
title: 删除Typora中未被引用过的图片
cover: "https://s2.loli.net/2022/11/21/jHkgUWLVo2lnuYF.webp"
date: 2022-09-19 09:53:54
tags: Python
description: 删除Typora中为被引用过的图片
categories: Python
---



在写md文件的时候总会出现我们引用图片之后，又将它删除的 情况，但是这个图片只是在md文件中不显示，在硬盘中还是存在的，这时候可以通过以下程序来将他删除， 文件路径是 

```python
import os
md_dir=r"E:\BlogContents\blogroot7.0\source\_posts\操作系统.md #填入markdown文件路径
mdIma_dir=r"E:\BlogContents\blogroot7.0\source\_posts\操作系统" #填入对应assets文件路径
def MdCancelIma(mdIma_dir,md_dir):
    for root, dirs, files in os.walk(mdIma_dir):
        with open(md_dir, 'r', encoding='utf-8') as md:
            text = md.read()
        for imaName in files:
            if text.find(imaName)==-1:
                print("删除的图片名为: ",imaName)
                path=mdIma_dir+"\\"+imaName
                os.remove(path)
MdCancelIma(mdIma_dir,md_dir)
```



然后发现这样还是太麻烦，如果我们想要批量删除的话，莫不是需要一篇篇手动打入文件路径名，然后就有下面这个删除制定文件路径下的所有未被引用的图片，{% span red, 前提是.md文件和它的图片文件夹需要在同一级目录下 %}

```python
import os

all_dir = r"E:\BlogContents\blogroot7.0\source\_posts"       # 需要删除重复图片主文件夹
 
def Clean(all_dir):
    all_dir_list = os.listdir(all_dir)

    mdImg_dir_list = []

    for dir in all_dir_list:
        path = all_dir+"\\"+dir
        if(os.path.isdir(path)):
            mdImg_dir_list.append(dir)
    a = 0
    for file_name in mdImg_dir_list:
        md_dir = all_dir + "\\" + file_name + ".md"
        mdIma_dir = all_dir+"\\" + file_name
        MdCancelIma(mdIma_dir, md_dir)

def MdCancelIma(mdIma_dir,md_dir):
    for root, dirs, files in os.walk(mdIma_dir):
        with open(md_dir, 'r', encoding='utf-8') as md:
            text = md.read()
        for imaName in files:
            if text.find(imaName)==-1:
                print("删除的图片名为: ",imaName)
                path=mdIma_dir+"\\"+imaName
                os.remove(path)
Clean(all_dir)
```

