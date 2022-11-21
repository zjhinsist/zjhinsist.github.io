---
title: python自动化
date: 2022-05-05 10:02:54
tags: Python
cover: "https://s2.loli.net/2022/11/21/jHkgUWLVo2lnuYF.webp"
description: giao,这几天Excel表的处理快把我弄趴下了，就学了一下python操作Excel处理的方法
categories: Python
---

# Excel处理模块

## 打开文件：

1. 创建：

   ```python
   from openpyxl import Workbook
   # 实例化
   wb = Workbook()
   # 获取当前active的sheet
   sheet = wb.active
   
   print(sheet.title)
   sheet.title = "Salary luffy"
   ```

   

2. 打开已有文件：

   ```python
   from openpyxl import load_workbook
   wb2 = load_workbook("文件名.xlsx")
   ```

## 写数据

```python
#方式一：数据可以直接分配到单元格中（可以输入公式）
sheet["C5"] = "hello"
sheet["C7"] = "hi"

# 方式二：可以附加行，从第一列开始附加（从最下方空白处）
sheet.append([1,2,3])

#方式三：Python类型会被自动转换
sheet["A3"] = datetime.datetime.now().strfrime("%Y-%m-%d")
```

## 选择表

```python
#sheet 名称可以作为key进行索引
ws3 = wb["New Title"]
ws4 = wb.get_sheet_by_name("New Title")

#打印所有的sheet
print(wb.get_sheet_name())

sheet = wb.worksheets[0] # 获取第一个sheet
```



## 保存表

```python
wb.sabe("文件名称.xlsx")
```

## 遍历表

### 按行遍历

```python
for row in sheet:
    for cell in row:
        print(cell.value, end=",")
    print()
```

### 按列遍历

```python
for column in sheet.columns:
    for cell in column:
        print(cell.value, end=",")
    print()
```

### 遍历指定行和列

```python
# 从第二行开始到第五行，每行打印五列
for row in sheet.iter_rows(min_row = 2,max_row = 5, max_col = 5):
    for cell in row:
        print(cell.value,end=",")
    print()
```

### 遍历指定几列的数据

```python
for col in sheet.iter_cols(min_col = 2, max_col = 5):
    for i in col:
        print(i.value,end = "")
    print()
```

### 删除工作表

```python
we.remove(sheet)
def wb[sheet]
```

### 给指定cell设置值

```python
sheet1.cell(row=i, column=m, value=dataRow[i-1][m-1])
```





## 设置表的格式

### 需要导入的类：

```python
from openpyxl.styles import Font,colors,Alignment
```

### 字体

下面的代码指定了等线24号，加粗斜体，字体颜色红色。直接使用cell的font属性，将Font对象赋值给它。

```python
bol_itatic_24_font = Font(name='等线'，size=24，italic=True,color=colors.RED，bold=True) #声明样式
sheet [ 'A1 ' ].font = bold_itatic_24_font # 给单元格设置样式
```

### 对齐方式

也是直接使用cell的属性aligment，这里指定垂直居中和水平居中。除了center，还可以使用

right、left等等参数。

```python
#设置B1中的数据垂直居中和水平居中
sheet[ 'B1 ' ].alignment = Alignment (horizontal='center ', vertical='center')
```

### 设置行高&列宽

```python
#第2行行高
sheet.row_dimensions[ 2 ].height = 40#c列列宽
sheet.column_dimensions[ 'C' ].width = 30
```

# 使用python发动邮件

## 邮件发送smtplib（邮件授权码：uxqgzxwrzjimebge）

SMTP(Simple Mail Transfer Protocol )简单邮件传输协议，它是一组用于由源地址到目的地址发送邮件的规则，由他控制信件的中转方式。

想实现发送邮件需要经过以下几步

1. 登录邮件服务器
2. 构造符合邮件协议规则要求的邮件内容
3. 发送

Python对SMTP支持有smtplib和email两个模块，email负责构造邮件， smtplib负责发送邮件，他对tmep协议进行了简单的封装

1. 发送纯文本文件

```python
import smtplib
from email.mime.text import MIMEText  # 邮件正文
from email.header import Header  # 邮件头

# 发件人邮箱中的smtp服务器，端口是25
stmp_obj = smtplib.SMTP_SSL("smtp.qq.com", 465)
# 括号中对应的是发件人邮箱账号 和 邮箱授权码
stmp_obj.login("2152889763@qq.com", "uxqgzxwrzjimebge")

# stmp_obj.set_debuglevel(1)

# 设置邮件头信息：
# 正文
msg = MIMEText("Hello, I'm from England. What's your name,Can I be your pen pal", "plain", "utf-8")
# 发送者
msg["From"] = Header("Dave", "utf-8")
# 接收者
msg["To"] = Header("Mr.zhang", "utf-8")
# 主题
msg["Subject"] = Header("Dave", "utf-8")

# 接收人
Receiver = ["2622599434@qq.com", "2174489554@qq.com"]
# 发送
stmp_obj.sendmail("2152889763@qq.com", Receiver, msg=msg.as_string())
print("OVER!")
```

2. 发送html文件：

   ```python
   mail_body = '''
   	<h5>你好啊！</h5>
   	<p>
   		<a href="网址">这是我新创建的网址，要来看看吗</a>
   	</P>
   '''
   # 正文
   msg = MIMEText(mail_body, "html", "utf-8")
   ```

3. 添加图片：

   ```python
   import smtplib
   from email .mime . image import MIMEImage
   from email .mime.multipart import MIMEMultipart
   from email.mime.text import MIMEText
   from email.header import Header
   #登录邮件服务器
   #发件人邮箱中的SMTP服务器，端口是25
   smtp_obj = smtplib.SMTP_SSL ("smtp.exmail.qq.com", 465)
   
   #括号中对应的是发件人邮箱账号、邮箱授权码
   smtp_obj.login ("nami@luffycity.com","333dsfsf#$#")
   
   #显示调试信息
   smtp_obj.set_debuglevel(1)
   #设置邮件头信息
   mail_body ='''
       <h5>hello</h5>
       <p>
          你好 <p><img src="cid :image1">
       </p>
   '''
   
   msg_root = MIMEMultipart ('related')#允许添加附件、图片等
   msg_root [ "From" ] = Header("来自娜美的问候", "utf-8")#发送者
   msg_root [ "To" ] = Header ( "有缘人","utf-8")#接收者
   msg_root [ "subject" ] = Header ("娜美的信", "utf-8" )#主题
   #允许添加图片
   msgAlternative = MIMEMultipart ( 'alternative ' )
   msgAlternative.attach (MIMEText ( mail_body,'html ', 'utf-8 ' ) )
   msg_root.attach (msgAlternative)#把邮件正文内容添加到msg_root里
   
   # 加载图片
   fp = open("image.jpg", 'rb')
   msgImage = MIMEImage(fp.read())
   fp.close()
   
   # 定义图片 ID，在html， 文本中的引用
   msgImage.add_header("Content-ID", "<image>")
   msg_root.attach(msgImage) # 添加图片到msg_root 对象中
   
   # 发送
   smtp_obj.sendmail("发件人邮箱", "收件人邮箱", msg=msg_root.as_string())
   
   ```

   
