---
title: KMP
date: 2021-05-05 09:54:45
tags: 计算机基础
cover: "https://s2.loli.net/2022/11/21/MAjwIXl1mVgNF4J.webp"
description: KMP纯代码实现，以后有时间了出一期理论的
categories: 计算机基础
---

 关于KMP算法的实现，如果转载请标明出处

```
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define OK 1
#define ERROR 0
#define status int 

typedef struct sstring
{
    char ch[50];
    int length;
}Sstring, *Lstring;

status InitString(Lstring& s);
status GetString(Lstring s, Lstring p);
status KMP(Lstring s, Lstring p, int pos, int* next);
status KNext(Lstring p, int* next);


int main()
{
    Lstring s, p;
    int* next;
    InitString(s);
    InitString(p);
    GetString(s, p);
    next = (int*)malloc(sizeof(int) * (p->length+1));
    next[0] = 0;
    KNext(p, next);
    if (KMP(s, p, 1, next))
    {
        printf("存在");
    }
    else
    {
        printf("不存在");
    }
    return 0;
}

status InitString(Lstring& s)
{
    s = (Lstring)malloc(sizeof(Sstring));
    if (!s)
    {
        return ERROR;
    }
    s->length = 0;
    return OK;
}

status GetString(Lstring s,Lstring p)
{
    char c[100];
    printf("请输入主串:");
    scanf("%s", &s->ch[1]);
    s->ch[0] = 'm';
    s->length = strlen(s->ch)-1;
    getchar();


    printf("请输入子串:");
    s->ch[0] = 'm';
    scanf("%s", &p->ch[1]);
    p->length = strlen(p->ch)-1;
    getchar();
    return OK;
}
status KMP(Lstring s, Lstring p, int pos, int* next)
{
    int i, j;
    i = pos;
    j = 1;
    while (i <= s->length && j <= p->length)
    {
        if (s->ch[i] == p->ch[j])
        {
            i++;
            j++;
        }
        else if (j == 1)
        {
            i++;
        }
        else
        {
            j = next[j];
        }
    }
    if (j > p->length)
    {
        return OK;
    }
    return ERROR;
}

status KNext(Lstring p, int* next)
{
    int i, j;
    i = 1;
    j = 0;
    next[1] = 0;
    while (i <= p->length)
    {
        if (j == 0 || p->ch[i+1] == p->ch[j])
        {
            j++;
            i++;
            next[i] = j;
        }
        else
        {
            j = next[j];
        }
    }
    return OK;
}
```

KMP算法的实现过程（被比对的是主串，比对的是字串）

　　　从主串中查找是否含有子串

　　　当比较 i 位置子串 和 主串中 k 位置的元素比较的时候

　　　　　　如果相同或者k = 0 的话 i++ k++ 继续比较下一个

　　　　　　如果不同的话，则让 k = next[k] 然后继续比较

　　　 直到 k 或者 i 超出子（主）串长度的时候停止比较

　　　　　　如果k超出范围的话 则比对成功

　　　　　　如果k没有超出范围的话，则比对失败

　　很多人不明白为什么 当比较不同的时候，KMP不用想BF算法那样 回到头从新开始比较，而是使用next数组回到对应的位置，下面我们来解释一下

 

其中最难实现的是 next 数组的获取：下面就我理解给大家讲一下

　　我们首先要懂得next数组的基本原理

　　next数组的基本原理就是：

　　　　

　　　　当我们使用字串的第四个位置的元素和主串对应元素相比较的时候：

　　　　　　如果不相同的话，我们观察一下字串第四个位置和之前的元素有什么特点，明显的是 字串的一和二 和  字串的三和四相同，而且我们在子串和主串对应位置相比较的时候，当比较到字串的第四个位置的元素的时候，那么主串对应位置的前三个元素都和字串相同 ，所以我们不必返回 初始位置然后再从新比较， 我们只需要根据字串的特点来进行比较即刻， 

　　　　　　由上面可知，在第四个位置和主串不相同的时候，那么 一二三位置的元素一定和主串位置元素相同，那么我们可以直接返回字串对应位置的next下标也就是2                                   

　　

　　
