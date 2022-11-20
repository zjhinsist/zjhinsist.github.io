---
description: git的使用方法
title: git和github使用
date: 2022-07-21 10:47:55
tags: git
background: url(https://s3.bmp.ovh/imgs/2022/08/08/e1c9bda47806a33d.png)
subtitle: git的使用方法
categories: hexo
---
# 使用方法

1. 克隆别人的仓库

   ```python
   git clone 目标项目的地址
   ```

   ![image-20220721105318827](https://s2.loli.net/2022/11/04/A9ho4S5NsZwJEbH.png)

2. 我们在引用的时候可以注意一下 文件中Readme.md文件，一般作者都会把项目的使用方法放到这个文件中

3. 我们还要注意：LICENSE许可证中 是否是MIT的，如果是MIT的话我们就可以放心使用，如果不是的话，我们在引用的时候就需要小心了

4. 找开源项目的一些途径
   • https://github.com/trending/
   • https://github.com/521xueweihan/HelloGitHub
   • https://github.com/ruanyf/weekly
   • https://www.zhihu.com/column/mm-fe

5. 特殊的查找资源小技巧-常用前缀后缀 
   • 找百科大全 awesome xxx
   • 找例子 xxx sample
   • 找空项目架子 xxx starter / xxx boilerplate 
   • 找教程  xxx tutorial



## 常用命令

克隆仓库：git clone <git地址>
初始化仓库：git init 

添加文件到暂存区：git add -A
把暂存区的文件提交到仓库：git commit -m "提交信息"
查看提交的历史记录：git log --stat

工作区回滚：git checkout <filename>
撤销最后一次提交：git reset HEAD^1

以当前分支为基础新建分支：git checkout -b <branchname>
列举所有的分支：git branch
单纯地切换到某个分支：git checkout <branchname>
删掉特定的分支：git branch -D <branchname>
合并分支：git merge <branchname>

推送当前分支最新的提交到远程：git push
拉取远程分支最新的提交到本地：git pull
