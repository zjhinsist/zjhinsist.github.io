---
title: 哈夫曼编译码器（实现中英文）
date: 2022-05-05 09:48:37
tags: 计算机基础
cover: "https://s2.loli.net/2022/11/21/jO1zT7NyZMcHpwr.webp"
description: 数据结构实训的时候写的一些东西，希望对你们有帮助
categories: 计算机基础
---

1. **头文件为**

```
#ifndef TREEHEAD_H_INCLUDED
#define TREEHEAD_H_INCLUDED

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define ERROR 0
#define OK 1
#define status int

typedef struct HuffmanData
{
    char *data;
    int data2;
    int weight;
    struct HuffmanData* next;
}HFMData, *LHFMData;

// Huffman辅助数组
typedef struct
{
    char data[4];
    int data2;
    int weight;
    int parent,lchild, rchild;
    char *Code;
}HTNode, *HuffmanTree;

void Choose();
// 输出*函数， n表示输出的个数，flag表示是否输入完之后回车0NO 1 YES
void print(int n, int flag);
status CreateHuffman();
void InitHfm(LHFMData d, int n);

// 寻找中文
status SearchData(LHFMData d, char *data);

// 进行huffman编码
status HfmEncoding(HuffmanTree &ht, int &flag);
// 寻找父节点为0 并且weight最小的两个元素；
status MinSearchData(HuffmanTree ht, int n, int &p1, int &p2);

// 在进行编译的时候寻找相同的元素
int SearchEncoding(HuffmanTree hc, char *ch, int n);

// 进行Huffman翻译
status Decoding(HuffmanTree ht, int flag);

// 打印编码
status printCode(int flag);

// 打印Huffman树
status TreePrint(HuffmanTree ht, int flag);

#endif // TREEHEAD_H_INCLUDED
```

　　**2. main文件**

　　

```
#include "TreeHead.h"

int main()
{
    Choose();
}
```

　　**3.解释文件**

```
#include "TreeHead.h"

void Choose()
{
    HuffmanTree ht;
    int n, flag = 0;
    do
    {
        printf("\t\t\t");print(32,1);
        printf("\t\t\t*");
        printf(" Huffman 缂?璇戠爜鍣?鏀寔涓枃)  *\n");
        printf("\t\t\t*  浣跨敤鍓嶈鍏堝皢闇€瑕佺紪鐮佺殑鏂囦欢  *\n\t\t\t*  鍐欏叆鍒癉atafile.txt鏂囦欢涓?   *\n");
        printf("\t\t\t");print(32,1);
        printf("\t\t\t*\t ");
        printf("1.寤虹珛HuffmanTree     *\n");
        printf("\t\t\t*\t ");
        printf("2.杩涜Huffman缂栫爜     *\n");
        printf("\t\t\t*\t ");
        printf("3.杩涜Huffman璇戠爜     *\n");
        printf("\t\t\t*\t ");
        printf("4.鎵撳嵃浠ｇ爜鏂囦欢        *\n");
        printf("\t\t\t*\t ");
        printf("5.鎵撳嵃HuffmanTree     *\n");
        printf("\t\t\t*\t ");
        printf("6.閫€鍑?               *\n");
        printf("\t\t\t");print(32,1);
        printf("\t\t\t\t璇疯緭鍏ヤ綘鐨勯€夋嫨锛?);
        scanf("%d",&n);
        switch(n)
        {
            case 1:CreateHuffman();break;
            case 2:
                {
                    HfmEncoding(ht, flag);
                    break;
                }
            case 3:Decoding(ht, flag);break;
            case 4:printCode(flag);break;
            case 5:TreePrint(ht, flag);break;
            case 6: break;
            default:
            {
                printf("\t\t\t");print(30,1);
                printf("\t\t\t*\t");
                printf("  杈撳叆鏈夎\t     *\n");
                printf("\t\t\t");print(30,1);
            }
        }
        system("pause");
        system("cls");

    }while(n!=6);
}
status CreateHuffman()
{
    char c, data[4];
    int i, flag = 0;
    LHFMData d1, d2, d3;
    d1 = (LHFMData)malloc(sizeof(HFMData)*128);
    InitHfm(d1, 128);
    d2 = (LHFMData)malloc(sizeof(HFMData));
    d2->next = NULL;
    d2->weight = 0;
    if(!d1 || !d2)
    {
        return ERROR;
    }
    FILE *fp;
    if( (fp=fopen("Datafile.txt","r")) == NULL )
    {
        system("pause");
        return ERROR;
    }
    while((c = fgetc(fp))!= EOF)
    {
        i = c;
        if(i>0)
        {
            d1[i].data = (char*)malloc(sizeof(char));
            *d1[i].data = c;
            d1[i].data2 = i;
            d1[i].weight++;
        }
        else if(i < 0)
        {

            data[0] = c;
            c = fgetc(fp);
            data[1] = c;
            c = fgetc(fp);
            data[2] = c;
            data[3] = '\0';
            if(!SearchData(d2, data))
            {
                d2->weight++;
                d3 = (LHFMData)malloc(sizeof(HFMData));
                d3->data = (char*)malloc(sizeof(char)*3);
                strcpy(d3->data, data);
                d3->weight = 1;
                d3->next = d2->next;
                d2->next = d3;
            }
        }
        else if(c == '\n')
        {
            d1[95].data = (char*)malloc(sizeof(char));
            *d1[95].data = c;
            d1[95].weight++;
        }
    }
    fclose(fp);
    fp = fopen("hfmTree.txt", "w");
    for(int i = 0; i < 128; i++)
    {
        if(d1[i].weight != 0)
        {
            fprintf(fp,"%d\t%d\n", d1[i].data2, d1[i].weight);
        }
    }
    d3 = d2->next;
    while(d3)
    {
        fprintf(fp, "%s\t%d\n", d3->data, d3->weight);
        d3 = d3->next;
    }
    fclose(fp);
    printf("\t\t\t");print(31,1);
    printf("\t\t\t*\t");
    printf("  鍒涘缓瀹屾瘯\t      *\n");
    printf("\t\t\t*");
    printf("缁撴灉宸茬粡瀛樺湪hfmTree.txt鏂囦欢涓?\n");
    printf("\t\t\t");print(31,1);

}
void InitHfm(LHFMData d, int n)
{
    for(int i = 0; i < n; i++)
    {
        d[i].weight = 0;
        d[i].data2 = -1;
        d[i].next = NULL;
    }
}

// 杩涜huffman缂栫爜
status HfmEncoding(HuffmanTree &ht, int &flag)
{
    int p1, p2;
    char ch, data[4];
    int n = 0, i = 0, m;
    FILE *fp;
    if((fp = fopen("hfmTree.txt", "r")) == NULL)
    {
        return ERROR;
    }
    while((ch = fgetc(fp))!= EOF)
    {
        if(ch == '\n')
        {
            n++;
        }
    }
    //HTNode ht[2*n];
    ht = (HuffmanTree)malloc(sizeof(HTNode)*(2*n));
    m = n;
    flag = m;
    // 鍒濆鍖栦竴涓媓t
    for(int i = 1; i < 2*n; i++)
    {
        ht[i].lchild = 0;
        ht[i].parent = 0;
        ht[i].rchild = 0;
        ht[i].weight = 0;
    }


    fseek(fp, 0, SEEK_SET);
    i = 1;
    while((ch = fgetc(fp))!= EOF)
    {
        if(ch < 0)
        {
            data[0] = ch;
            ch = fgetc(fp);
            data[1] = ch;
            ch = fgetc(fp);
            data[2] = ch;
            data[3] = '\0';
            strcpy(ht[i].data, data);
            fscanf(fp, "%d", &n);
            ht[i].weight = n;
            fgetc(fp);
            i++;
        }
        else
        {
            fseek(fp, -1, SEEK_CUR);
            fscanf(fp, "%d %d", &ht[i].data2,&n);
            ht[i].weight = n;
            fgetc(fp);
            i++;
        }
    }
    fclose(fp);


    for(n = m+1; n < 2*m; n++)
    {
        MinSearchData(ht, m, p1, p2);
        ht[n].lchild = p1;
        ht[n].rchild = p2;
        ht[n].weight = ht[p1].weight+ht[p2].weight;
        ht[p1].parent = n;
        ht[p2].parent = n;
    }
    char encode[m+1];
    int p, k;
    for(i = 1; i <= m; i++)
    {
        n = m;
        k = i;
        encode[n--] = '\0';
        while(ht[k].parent != 0)
        {
            p = ht[k].parent;
            if(ht[p].lchild == k)
            {
                encode[n--] = '1';
            }
            else
            {
                encode[n--] = '0';
            }
            k = p;
        }
        ht[i].Code = (char*)malloc(sizeof(char)*(m-n));
        strcpy(ht[i].Code, &encode[n+1]);
    }
    fp = fopen("file.txt", "w");
    fprintf(fp, "Data\tWeight\tParent\tLchild\tRchild\tHuffmanCode\n");

    for(i = 1; i <= m; i++)
    {
        if(ht[i].data[0] >= 32)
        {
            fprintf(fp,"%c\t%d\t%d\t%d\t%d\t%s\n",ht[i].data2,ht[i].weight, ht[i].parent, ht[i].lchild,ht[i].rchild, ht[i].Code);
        }
        else if(ht[i].data[0] < 0)
        {
            fprintf(fp,"%s\t%d\t%d\t%d\t%d\t%s\n",ht[i].data,ht[i].weight, ht[i].parent, ht[i].lchild,ht[i].rchild, ht[i].Code);
        }
        else
        {
            fprintf(fp,"(绌哄瓧绗?\t%d\t%d\t%d\t%d\t%s\n",ht[i].weight, ht[i].parent, ht[i].lchild,ht[i].rchild, ht[i].Code);

        }

    }
    fclose(fp);

    FILE *fpr;
    if((fp = fopen("Datafile.txt", "r")) == NULL)
    {
        return ERROR;
    }
    fpr = fopen("CodeFile.txt", "w");

    while((ch = fgetc(fp))!= EOF)
    {
        i = ch;
        if(i >= 0)
        {
            data[0] = ch;
            data[1] = '\0';
            k = SearchEncoding(ht, data, m);
            fprintf(fpr, "%s", ht[k].Code);
        }
        else if(i < 0)
        {

            data[0] = ch;
            ch = fgetc(fp);
            data[1] = ch;
            ch = fgetc(fp);
            data[2] = ch;
            data[3] = '\0';
            k = SearchEncoding(ht, data, m);
            fprintf(fpr, "%s", ht[k].Code);
        }
    }
    fclose(fp);
    fclose(fpr);
    printf("\t\t\t");print(32,1);
    printf("\t\t\t*\t");
    printf("  缂栫爜瀹屾瘯\t       *\n");
    printf("\t\t\t*");
    printf("缁撴灉宸茬粡瀛樺湪CodeFile.txt鏂囦欢涓?\n");
    printf("\t\t\t");print(32,1);

}

// 鍦ㄨ繘琛岀紪璇戠殑鏃跺€欏鎵剧浉鍚岀殑鍏冪礌
int SearchEncoding(HuffmanTree hc, char *ch, int n)
{
    int i;
    for(i = 1; i <= n; i++)
    {
        if(ch[0] < 0)
        {
            if(!strcmp(hc[i].data, ch))
            {
                return i;
            }
        }
        else
        {
            if(hc[i].data2 == ch[0])
            {
                return i;
            }
        }

    }
    return 0;
}

// 瀵绘壘鐖惰妭鐐逛负0 骞朵笖weight鏈€灏忕殑涓や釜鍏冪礌锛?
status MinSearchData(HuffmanTree ht, int n, int &p1, int &p2)
{
    int i = 0;
    p1 = 0, p2 = 0;
    for( i = 0; i < 2*n; i++)
    {
        if(ht[i].parent == 0)
        {
            if(p1 == 0)
            {
                p1 = i;
            }
            else
            {
                p2 = i;
                break;
            }

        }
    }
    if(p2 == 0)
    {
        return OK;
    }
    if(ht[p1].weight > ht[p2].weight)
    {
        p2 = p1;
        p1 = i;
    }
    for(i++;i < 2*n; i++)
    {
        if(ht[i].parent == 0)
        {
            if(ht[i].weight!=0)
            {
                if(ht[i].weight > ht[p1].weight)
                {
                    if(ht[i].weight < ht[p2].weight)
                    {
                        p2 = i;
                    }
                }
                else
                {
                    p2 = p1;
                    p1 = i;
                }
            }
        }
    }
}

status SearchData(LHFMData d, char *data)
{
    LHFMData p;
    p = d->next;
    while(p)
    {
        if(!strcmp(p->data, data))
        {
            p->weight++;
            d->weight++;
            return OK;
        }
        p = p->next;
    }
    return ERROR;
}

// 鎵撳嵃缂栫爜
status printCode(int flag)
{
    int n = 0;
    char ch;
    if(flag == 0)
    {
        printf("\t\t\t");print(30,1);
        printf("\t\t\t*\t");
        printf("璇峰厛缂栬瘧锛?锛?       *\n");
        printf("\t\t\t");print(30,1);
        return ERROR;
    }
    FILE *fp;
    if((fp = fopen("CodeFile.txt", "r")) == NULL)
    {
        return ERROR;
    }
    printf("Huffman Code :  ");
    while((ch = fgetc(fp))!= EOF)
    {
        printf("%c", ch);
        n++;
        if(n == 50)
        {
            printf("\n\t\t");
            n = 0;
        }
    }
    printf("\n");

}


// 杩涜Huffman缈昏瘧
status Decoding(HuffmanTree ht, int flag)
{
    char ch;
    int n ;
    if(flag == 0)
    {
        printf("\t\t\t");print(30,1);
        printf("\t\t\t*\t");
        printf("璇峰厛缂栬瘧锛?锛?       *\n");
        printf("\t\t\t");print(30,1);
        return ERROR;
    }
    /*for(int n = 1; n < 2*flag; n++)
    {
        printf("%d %d %d\n", ht[n].parent, ht[n].lchild, ht[n].rchild);
    }*/
    FILE *fp,*fpr;
    if((fp = fopen("CodeFile.txt", "r")) == NULL)
    {
        return ERROR;
    }
    fpr = fopen("TextFile.txt", "w");
    while((ch = fgetc(fp))!= EOF)
    {
        n = flag*2-1;
        do
        {
            if(ch == '1')
            {
                n = ht[n].lchild;
            }
            else
            {
                n = ht[n].rchild;
            }
            if(ht[n].lchild == 0 && ht[n].rchild == 0)
            {
                if(ht[n].data[0] < 0)
                {
                    fprintf(fpr, "%s", ht[n].data);
                }
                else
                {
                    fprintf(fpr, "%c", ht[n].data2);
                }
                break;
            }
        }while((ch = fgetc(fp))!= EOF);
    }
    fclose(fpr);
    printf("\t\t\t");print(32,1);
    printf("\t\t\t*\t");
    printf("  瑙ｇ爜瀹屾瘯\t       *\n");
    printf("\t\t\t*");
    printf("缁撴灉宸茬粡瀛樺湪TextFile.txt鏂囦欢涓?\n");
    printf("\t\t\t");print(32,1);
}

// 杈撳嚭*鍑芥暟锛?n琛ㄧず杈撳嚭鐨勪釜鏁帮紝flag琛ㄧず鏄惁杈撳叆瀹屼箣鍚庡洖杞?NO 1 YES
void print(int n, int flag)
{
    for(int m = 1; m <= n; m++)
    {
        printf("*");
    }
    if(flag == 1)
    {
        printf("\n");
    }
}

status TreePrint(HuffmanTree ht, int flag)
{
    system("cls");
    if(flag == 0)
    {
        printf("\t\t\t");print(30,1);
        printf("\t\t\t*\t");
        printf("璇峰厛缂栬瘧锛?锛?       *\n");
        printf("\t\t\t");print(30,1);
        return ERROR;
    }

    printf("\t\t");
    print(65, 1);
    printf("\t\t* \t\t\t鎵撳嵃HuffmanTree  \t\t\t*\n");
    printf("\t\t");
    print(65, 1);
    printf("\t\t* \t\t姹夊瓧鏄剧ず鏈夎锛岀敤锛堟眽瀛楋級鏉ヤ唬鏇挎眽瀛? \t\t*\n");
    printf("\t\t");
    print(65, 1);
    printf("\t\t* 鏁版嵁\t  鏉冮噸\t  宸﹀瀛怽t  鍙冲瀛怽t  Huffman Code  *\n");
    for(int i = 1; i < flag*2; i++)
    {
        if(i<=flag)
        {
            if(ht[i].data[0] < 0)
            {

                printf("\t\t*姹夊瓧\t    %d\t    %d\t\t    %d\t\t    ", ht[i].weight,ht[i].lchild,ht[i].rchild);
                if(strlen(ht[i].Code) <= 3)
                {
                    printf("%s\t\t*\n", ht[i].Code);
                }
                else
                {
                    printf("%s\t*\n", ht[i].Code);
                }
            }
            else
            {

                printf("\t\t* %c\t    %d\t    %d\t\t    %d\t\t    ", ht[i].data2, ht[i].weight,ht[i].lchild,ht[i].rchild);
                if(strlen(ht[i].Code) <= 3)
                {
                    printf("%s\t\t*\n", ht[i].Code);
                }
                else
                {
                    printf("%s\t*\n", ht[i].Code);
                }
            }


        }
        else
        {
            printf("\t\t*\t    %d\t    %d\t\t    %d\t\t\t\t*\n",  ht[i].weight,ht[i].lchild,ht[i].rchild);
        }

    }
    printf("\t\t");
    print(65, 1);
    system("pause");
}
```

　　