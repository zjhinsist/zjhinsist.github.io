---
abbrlink: ''
categories:
- 计算机基础
date: '2022-09-27 10:33:03'
description: 在安转完VmTools之后，还是无法在虚拟机和物理机之间进行复制粘贴
mathjax: false
tags:
- 计算机基础
title: Vmtools无法在虚拟机和物理机之间复制粘贴
updated: '2022-11-29 22:24:33'
---
# VMtools

如果没有安装过VMtools的话建议使用简易方法来进行安装

{% tip %}简易方法{% endtip %}

```xml
sudo apt-get install open-vm-tools-desktop -y
```

如果你是按照映像这种方式安装的话，或者上面那种方法也可能出现{% span red, 安装完VmTools之后还是无法进行虚拟机和物理机之间进行复制粘贴 %}，这时候可以用下面这种解决方法

```xml
sudo apt-get autoremove open-vm-tools
sudo apt-get install open-vm-tools
sudo apt-get install open-vm-tools-desktop
```

{% tip warning %}经过上面的步骤之后一定要重启！！！{% endtip %}
