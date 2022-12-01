---
title: 美化win10终端
date: 2022-11-30 19:53:07
description: win10终端美化
mathjax:
cover: https://s2.loli.net/2022/11/30/Z1fLVRg7YM3mbsP.jpg
categories: win10
tags: win10
---

{% folding 参考教程 %}

[window-terminal美化方案](https://akilar.top/posts/cdbee199/)

{% endfolding %}

{% folding 美化后的效果 %}

![image-20221130200150589 _1_.png](https://s2.loli.net/2022/12/01/g8ZB7vs2lIeAtdR.png)

{% endfolding %}



## 安装

1. 现在微软商店上下载windows terminal preview

![image-20221130200258008](https://s2.loli.net/2022/11/30/6zH5I1CJBeqxdGk.png)

2. 再在微软商店上搜索winget，一般都是windows自带的

![image-20221130200420014](https://s2.loli.net/2022/11/30/hCFJtOzTwsr45le.png)

3. win+X然后再按A，以管理员模式打开powershell，输入以下指令安装oh-my-posh：安装完毕之后请不要关闭终端，我们来配置主题

   ```BASH
   winget install JanDeDobbeleer.OhMyPosh -s winget
   ```

4. 管理员模式下的powershell，输入指令新建配置文件：

   ```BASH
   New-Item -Path $PROFILE -Type File -Force
   ```

5. 然后输入指令打开配置文件：

   ```bash
   notepad $PROFILE
   ```

6. 在打开的配置文件中输入主题配置内容：

   ```TXT
   & ([ScriptBlock]::Create((oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\jandedobbeleer.omp.json" --print) -join "`n"))
   ```

7. 保存文件后关闭，在终端输入以下指令激活修改：

   ```BASH
   . $PROFILE
   ```

8. 支持自定义修改主题样式，官方有给出相应的[主题预览](https://ohmyposh.dev/docs/themes)，选中我们心仪的主题，复制下它的名字，例如“agnoster.minima”，然后将这个名字复制到下面对应的主题名的位置，更改后运行`. $PROFILE`激活更改：

   ```TXT
   & ([ScriptBlock]::Create((oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\主题名.omp.json" --print) -join "`n"))
   ```

   

   

   ![image-20221130200729792](https://s2.loli.net/2022/11/30/aUbNfvKLedIPAMJ.png)

   

9. 为了实现优雅的oh-my-posh终端主题样式，首先需要安装一个Nerd字体，访问[Nerd fonts](https://www.nerdfonts.com/font-downloads)挑选一款喜欢的字体进行安装，oh-my-posh官方文档推荐的是Meslo Nerd Font，下载后是一个字体包，解压以后应该会有很多字体文件，挑选一个右键选择安装即可。全装没有必要。右键支持预览字体样式。

10. 最后打开终端，在边框上右击，点开设置

    ![image-20221130201253491](https://s2.loli.net/2022/11/30/PFmvob2wIX6Ahup.png)

![image-20221130201333013](https://s2.loli.net/2022/11/30/N3djKlcfatLzw6H.png)

更改上自己安装的字体即可

## 可能遇到的问题

1. 报错无法加载文件………….ps1，因为在此系统上禁止运行脚本。，这个好办，我们运行系统上运行ps1脚本就好了。管理员模式下输入指令：

   ```BASH
   set-ExecutionPolicy RemoteSigned
   ```

2. 报错

   ```
   Get-PSReadLineKeyHandler : 找不到与参数名称“Key”匹配的参数。
   ```

   - 多尝试几次，可能是文件加载慢。报错也没事，看到色块出来了就好。
   - 重启下终端，确认是以管理员权限启动的。

3. 终端字符乱码。

   - 参照第九步，务必安装一款Nerd Font并在设置中使用。
