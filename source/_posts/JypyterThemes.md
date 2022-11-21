---
title: JypyterThemes
date: 2022-05-05 09:49:51
tags: Python
cover: "https://s2.loli.net/2022/11/21/jHkgUWLVo2lnuYF.webp"
description: Jupyter原本主题太low了，可以按照这种方式改一下主题
categories: Python
---
通过命令行窗口或 Anaconda Prompt 窗口

1、安装 Jupyter 主题

pip install jupyterthemes

2、更新 Jupyter 主题 （可选）

pip install --upgrade jupyterthemes

3、查看可用的 Jupyter 主题

```XML
jt -l
```



![img](https://s2.loli.net/2022/11/04/4SxR8h5dqQUkLzj.png)

 

4、更换 Jupyter 主题

jt -t onedork -f fira -fs 13 -cellw 90% -ofs 11 -dfs 11 -T -T

-t 主题 -f(字体) -fs(字体大小) -cellw(占屏比或宽度) -ofs(输出段的字号) -T(显示工具栏) -T(显示自己主机名)

更改主题后 Jupyter Notebook 是下面的效果：

 ![img](https://s2.loli.net/2022/11/04/fQZUrMl5RyNBsh9.png)

 

-- 恢复 Jupyter 默认风格

jt -r

 ![img](https://s2.loli.net/2022/11/04/wh7L3ezgiosduI1.png)

 

5、各种主题风格

chestersih

| 1    | jt -t chesterish -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 ![img](https://s2.loli.net/2022/11/04/D6BtFQC9ao4hl82.png)

 

grade3

| 1    | jt -t grade3 -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 ![img](https://s2.loli.net/2022/11/04/7tQ1WXv5GRFEuDH.png)

 

gruvobxd

| 1    | jt -t gruvboxd -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 

 ![img](https://s2.loli.net/2022/11/04/EYCLtGZReFfsB9q.png)

gruvboxl

| 1    | jt -t gruvboxl -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 ![img](https://s2.loli.net/2022/11/04/FTCh8Q9ONmD6xJe.png)

 

monokai

| 1    | jt -t monokai -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 

 ![img](https://s2.loli.net/2022/11/04/ZABxE9NDXgyvk6s.png)

oceans16

| 1    | jt -t oceans16 -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 ![img](https://s2.loli.net/2022/11/04/t4DE2cGIawXCTbF.png)

 

onedork

| 1    | jt -t onedork -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 

 ![img](https://s2.loli.net/2022/11/04/mKqSc2vVuElNehx.png)

solarizedd

| 1    | jt -t solarizedd -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 ![img](https://s2.loli.net/2022/11/04/6y7PUjgiYpEMfez.png)

 

solarizedl

| 1    | jt -t solarizedl -f fira -fs 17 -cellw 90% -ofs 15 -dfs 15 -T -T |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

 ![img](https://s2.loli.net/2022/11/04/v69nrZb2B7oxmF3.png)

 

 