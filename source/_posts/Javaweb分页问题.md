---
title: Javaweb查询分页问题
date: 2023-01-31 08:37:05
description: 解决一些在javaweb分页时遇到的问题，例如查询结果上一页等等
mathjax:
cover:
categories:
tags: JAVA
---



# 遇到的问题

1. {% span red, 在实现查询操作的时候，将查询操作分离出来了 %}，这样会导致代码冗余，其实直接在展示的Servlet页面写查询即可
2. 在点击上一页和下一页的时候会出现问题
   - 当查询完毕的时候，结果出现了，点击下一页会自动跳转到下一页，但是点击上一页的时候无法回到上一页

# 解决方法

## 代码冗余问题

在执行页面展示的时候，其实也是一个带参查询操作，只不过这次的参数为空。

所以我们可以将第一次展示页设置成为一个空参的带参查询操作

通过获取前端传过来的查询参数，如果为空的话我们就设置为 “”

```JAVA
// 判断上一次查询参数是否为空
if(JDBCUtils.isEmpty((String) req.getSession().getAttribute("kv"))){
    // 如果是空的话，则设置成“” 防止出现null问题
    kv = "";
}else{
    // 如果不是空的话，则获取
    kv = (String) req.getSession().getAttribute("kv");
}

```

我们在前端查询的时候可以设置一个隐含参数，传递给后端，让后端根据这个参数来确定是否要改变查询的参数,并将这个参数放置到session中

```JAVA
// 判断是查询操作
String tag = req.getParameter("tag");
// 初始化查询参数
String kv = "";
// 判断是否是查询操作
if(JDBCUtils.isNotEmpty(tag)){
    // 如果是的话，获取查询参数
    kv = req.getParameter("kv");
    // 将查询参数添加到Session中
    req.getSession().setAttribute("kv",kv);
}
```

通过以上两步即可将我们的展示页面和查询页面融合到一起

```JAVA
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 设置编码
    req.setCharacterEncoding("utf-8");
    // 判断是查询操作
    String tag = req.getParameter("tag");
    // 初始化查询参数
    String kv = "";
    // 判断是否是查询操作
    if(JDBCUtils.isNotEmpty(tag)){
        // 如果是的话，获取查询参数
        kv = req.getParameter("kv");
        // 将查询参数添加到Session中
        req.getSession().setAttribute("kv",kv);
    }

    // 判断上一次查询参数是否为空
    if(JDBCUtils.isEmpty((String) req.getSession().getAttribute("kv"))){
        // 如果是空的话，则设置成“” 防止出现null问题
        kv = "";
    }else{
        // 如果不是空的话，则获取
        kv = (String) req.getSession().getAttribute("kv");
    }

    // 初始化分页为第一页
    int pageNumber = 1;
    // 获取是第几页
    String pageNumberStr = req.getParameter("pageNumber");

    // 获取session
    HttpSession session = req.getSession();

    // 获取连接
    Connection connection = null;
    try {
        connection = JDBCUtils.getConnection();
    } catch (Exception e) {
        throw new RuntimeException(e);
    }

    // 判断前端是否传过来pageNumber
    if(JDBCUtils.isNotEmpty(pageNumberStr)){
        // 如果传过来了pageNumber的话，则将参数化为整形
        pageNumber = Integer.parseInt(pageNumberStr);
    }else{
        // 如果前端没有传过来pageNumber的话，表明是第一次访问，则计算一下总页数
        int count = fruitImp.getKeyValueCount(connection, kv);
        session.setAttribute("pageEndNumber", count/5 + 1);
    }

    // 将pageNumber放到session中
    session.setAttribute("pageNumber", pageNumber);

    // 获取fruitList
    ArrayList<Fruit> fruitList = fruitImp.getKeyValueFruit(connection, kv, pageNumber);
    // 将fruitList放置到session中
    session.setAttribute("fruitList",fruitList);
    // 通过Th渲染到index页面
    super.processTemplate("index", req, resp);
}
```



## 点击上一页和下一页问题

当我们查询出结果的时候

![image-20230131085049135](https://s2.loli.net/2023/02/18/x9vKqeH2IYl8p1Q.png)

点击下一页的时候就出现了问题，我们从这里看出，这和上一页完全相同

![image-20230131085049135](https://s2.loli.net/2023/02/18/x9vKqeH2IYl8p1Q.png)

点击上一页的时候，这个页面和初始化页面也相同

![image-20230131085131268](https://s2.loli.net/2023/02/18/NGV5ldkPxThrY9a.png)

又会出现这种情况



{% tip warning %}情况分析{% endtip %}

主要是在我们点击查询的时候，将我们的查询参数传递给了后端，后端根据查询操作，返回了相应的值，点击下一页的时候，由于不是点击查询按钮，所以我们的查询参数没有跟着传递，所以在查询的时候，还是按照无参的方式查询的

{% tip success %}情况解决{% endtip %}

我们在查询的时候将参数放到session中一直保存，直到下一次查询的时候再改变session中的参数，我们在查询的时候，不在根据前端传过来的参数，而是根据Session中的参数

```JAVA
// 判断上一次查询参数是否为空
if(JDBCUtils.isEmpty((String) req.getSession().getAttribute("kv"))){
    // 如果是空的话，则设置成“” 防止出现null问题
    kv = "";
}else{
    // 如果不是空的话，则获取
    kv = (String) req.getSession().getAttribute("kv");
}
```

```JAVA
// 将pageNumber放到session中
session.setAttribute("pageNumber", pageNumber);

// 获取fruitList
ArrayList<Fruit> fruitList = fruitImp.getKeyValueFruit(connection, kv, pageNumber);
// 将fruitList放置到session中
session.setAttribute("fruitList",fruitList);
// 通过Th渲染到index页面
```



# 分页完整代码

## HTML

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link href="css/index.css" rel="stylesheet" type="text/css"/>
    <script type="text/javascript" src="js/index.js"></script>
</head>
<body>
    <div id="div_container">
        <div style="width: 100%; text-align: center; margin-top: 10%">
            <a th:href="@{/add.html}" style="border: black 2px solid; font-size: 20px; width: 35px">添加新纪录</a>
        </div>
        <div style="width: 100%; text-align: center;margin-top: 10px;">
            <form action="search.do" method="post">
                <input type="text" hidden="true" value="search" name="tag"/>
                <input type="text" name="kv"/>
                <input type="submit" value="查询">
            </form>
        </div>
        <div id="div_furit_list">
            <table id="tbl_fruit">
                <tr>
                    <th>名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>操作</th>
                </tr>
                <tr th:if="${#lists.isEmpty(session.fruitList)}">
                    <td colspan="4">库存为空</td>
                </tr>
                <tr th:unless="${#lists.isEmpty(session.fruitList)}" th:each="fruit:${session.fruitList}">
                    <td><a th:text="${fruit.fname}" th:href="@{/edit.do(fid=${fruit.fid})}">梨</a></td>
                    <td th:text="${fruit.fprice}">6</td>
                    <td th:text="${fruit.fcount}">60</td>
                    <td><img src="picture/cha.png"  class="dekImg" th:onclick="|delFruit(${fruit.fid})|"></td>
                </tr>
            </table>
            <div id="page">
                <!-- 我们给分页按钮添加点击事件，并将页面信息传递回去  -->
                <input type="button" value="首页" th:onclick="page(1)" th:disabled="|${session.pageNumber == 1}|"/>
                <input type="button" value="上一页" th:onclick="|page(${session.pageNumber - 1})|" th:disabled="|${session.pageNumber == 1}|" />
                <input type="button" value="下一页" th:onclick="|page(${session.pageNumber + 1})|" th:disabled="|${session.pageNumber == session.pageEndNumber}|"/>
                <input type="button" value="尾页" th:onclick="|page(${session.pageEndNumber})|"  th:disabled="|${session.pageNumber == session.pageEndNumber}|"/>
            </div>
        </div>
    </div>
</body>
</html>
```

## CSS

```CSS
body{
    margin:0;
    padding: 0;
    background-color: cadetblue;
}
#div_container{
    height:100%;
    width:80%;
    background-color: antiquewhite;
    position: absolute;
    margin-left: 10%;
}
#tbl_fruit{
    border-style: solid;
    width: 60%;
    position: relative;
    border-collapse: collapse;
    margin-top: 3%;
    margin-left: 20%;
}
#tbl_fruit tr, #tbl_fruit th,#tbl_fruit td{
    border:1px solid;
    width: 20%;
    height: 40px;
    text-align: center;
}
.dekImg{
    width: 20px;
    height: 20px;
}
#div_add_furit{
    width: auto;
    margin-top: 40%;
    margin-left:40%;
    border:1px solid;
    float: left;
    text-align: center;
}
.button{
    width: 80px;
    height: 24px;
}
#page{
    float: left;
    position: relative;
    margin-left: 40%;
    margin-top: 30px;;
}
```



## JS

```JS
function page(pageNumber, flag) {
    window.location.href = "search.do?pageNumber="+pageNumber;
}
```



## Servlet

```JAVA
@WebServlet("/search.do")
public class SearchServlet extends ViewBaseServlet {
    private FruitImp fruitImp = new FruitImp();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        doPost(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置编码
        req.setCharacterEncoding("utf-8");
        // 判断是查询操作
        String tag = req.getParameter("tag");
        // 初始化查询参数
        String kv = "";
        // 判断是否是查询操作
        if(JDBCUtils.isNotEmpty(tag)){
            // 如果是的话，获取查询参数
            kv = req.getParameter("kv");
            // 将查询参数添加到Session中
            req.getSession().setAttribute("kv",kv);
        }

        // 判断上一次查询参数是否为空
        if(JDBCUtils.isEmpty((String) req.getSession().getAttribute("kv"))){
            // 如果是空的话，则设置成“” 防止出现null问题
            kv = "";
        }else{
            // 如果不是空的话，则获取
            kv = (String) req.getSession().getAttribute("kv");
        }

        // 初始化分页为第一页
        int pageNumber = 1;
        // 获取是第几页
        String pageNumberStr = req.getParameter("pageNumber");

        // 获取session
        HttpSession session = req.getSession();

        // 获取连接
        Connection connection = null;
        try {
            connection = JDBCUtils.getConnection();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        // 判断前端是否传过来pageNumber
        if(JDBCUtils.isNotEmpty(pageNumberStr)){
            // 如果传过来了pageNumber的话，则将参数化为整形
            pageNumber = Integer.parseInt(pageNumberStr);
        }else{
            // 如果前端没有传过来pageNumber的话，表明是第一次访问，则计算一下总页数
            int count = fruitImp.getKeyValueCount(connection, kv);
            session.setAttribute("pageEndNumber", count/5 + 1);
        }

        // 将pageNumber放到session中
        session.setAttribute("pageNumber", pageNumber);

        // 获取fruitList
        ArrayList<Fruit> fruitList = fruitImp.getKeyValueFruit(connection, kv, pageNumber);
        // 将fruitList放置到session中
        session.setAttribute("fruitList",fruitList);
        // 通过Th渲染到index页面
        super.processTemplate("index", req, resp);
    }
}

```



## FruitDAOImp

```JAVA
package com.hgu.fruit.dao;

import com.hgu.fruit.dao.inter.FruitDAO;
import com.hgu.fruit.pojo.Fruit;

import java.sql.Connection;
import java.util.ArrayList;

public class FruitImp extends BaseDao<Fruit> implements FruitDAO {
    @Override
    public void insert(Connection connection, Fruit fruit) {
        String sql = "INSERT INTO FRUIT(name, price, count, remark) VALUES(?,?,?,?)";
        upDate(connection, sql,fruit.getFname(), fruit.getFprice(), fruit.getFcount(), fruit.getRemark());
    }

    @Override
    public void update(Connection connection, Fruit fruit) {
        String sql = "UPDATE FRUIT SET name = ?, price = ?, count = ?, remark = ? WHERE ID = ?";
        upDate(connection, sql, fruit.getFname(), fruit.getFprice(), fruit.getFcount(), fruit.getRemark(), fruit.getFid());
    }

    @Override
    public void deleteByID(Connection connection, int id) {
        String sql = "DELETE FROM FRUIT WHERE ID = ?";
        upDate(connection, sql, id);
    }

    @Override
    public Fruit getFruitByID(Connection connection, int id) {
        String sql = "SELECT id as fid, name as fname, price fprice, count fcount, remark remark FROM FRUIT WHERE ID = ?";
        Fruit fruit = searchInstance(connection, sql, id);
        return fruit;
    }

    @Override
    public ArrayList<Fruit> getAll(Connection connection) {
        String sql = "SELECT id as fid, name as fname, price fprice, count fcount, remark remark FROM FRUIT";
        ArrayList<Fruit> fruits = searchList(connection, sql);
        return fruits;
    }

    @Override
    public ArrayList<Fruit> getFruitPage(Connection connection, int pageNumber) {
        String sql = "SELECT id as fid, name as fname, price fprice, count fcount, remark remark FROM FRUIT LIMIT ?, 5";
        ArrayList<Fruit> fruits = searchList(connection, sql, 5 * (pageNumber - 1));
        return fruits;
    }

    @Override
    public int getCount(Connection connection) {
        String sql = "SELECT COUNT(*) FROM FRUIT";
        int count = Integer.parseInt(getValue(connection, sql).toString());
        return count;
    }

    @Override
    public ArrayList<Fruit> getKeyValueFruit(Connection connection, String kv, int pageNumber) {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("%");
        for (int i = 0; i < kv.length(); i++) {
            stringBuffer.append(kv.charAt(i)+"%");
        }
        String s = stringBuffer.toString();
        String sql = "SELECT id as fid, name as fname, price fprice, count fcount, remark remark FROM FRUIT WHERE name LIKE ? LIMIT ?, 5";
        ArrayList<Fruit> fruits = searchKeyValue(connection, sql, s, (pageNumber-1)*5);
        return fruits;
    }

    @Override
    public int getKeyValueCount(Connection connection, String kv) {
        StringBuffer stringBuffer = new StringBuffer();
        stringBuffer.append("%");
        for (int i = 0; i < kv.length(); i++) {
            stringBuffer.append(kv.charAt(i)+"%");
        }
        String s = stringBuffer.toString();
        String sql = "SELECT COUNT(*) FROM FRUIT WHERE name LIKE ? ";
        int count = Integer.parseInt(getValue(connection, sql, s).toString());
        return count;
    }
}
```



## BaseDAO

```JAVA
package com.hgu.fruit.dao;

import com.hgu.utils.JDBCUtils;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.sql.*;
import java.util.ArrayList;

/**
 * 通用的数据表的增删改查操作
 */
public class BaseDao<T> {
    // 创建一个用于存放特定的类的属性
    private Class<T> clazz = null;
    // 创建静态代码块来获取当前的特定类
    {
        // 获取带泛型的父类
        Type type = this.getClass().getGenericSuperclass();
        // 获取运行时类的带泛型的父类的泛型
        ParameterizedType paramType = (ParameterizedType) type;
        // 获取泛型参数
        Type[] actualTypeArguments = paramType.getActualTypeArguments();
        clazz =(Class<T>)actualTypeArguments[0];

    }


    /**
     * 获取多个实例
     * @param connection
     * @param sql
     * @param args
     * @return
     */
    public ArrayList<T> searchList(Connection connection, String sql, Object ...args) {
        PreparedStatement ps = null;
        ResultSet resultSet = null;
        ArrayList<T> ts = null;
        try {
            // 预编译sql语句
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }
            System.out.println(ps);
            // 执行sql语句
            resultSet = ps.executeQuery();

            // 获取元数据,目的是为了能够获取到我们返回的结果中的数据列数和列名
            ResultSetMetaData metaData = resultSet.getMetaData();
            // 获取列数
            int columnCount = metaData.getColumnCount();

            // 创建一个列表用来存放多个数据
            ts = new ArrayList<T>();

            while(resultSet.next()){
                // 通过反射创建对应的类
                T t = clazz.getDeclaredConstructor().newInstance();
                for (int i = 0; i < columnCount; i++) {
                    // 获取这一行的第一个数据
                    Object value = resultSet.getObject(i + 1);
                    // 获取列名匿名
                    String columnLabel = metaData.getColumnLabel(i+1);
    
                    // 通过反射赋值，因为每次的属性都不相同
                    Field field = clazz.getDeclaredField(columnLabel);
                    // 将数据设置为可更改
                    field.setAccessible(true);
                    field.set(t, value);
                }
                ts.add(t);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.closeConnection(null,ps,resultSet);
        }
        return ts;
    }

    /**
     * 获取单个实例
     * @param connection
     * @param sql
     * @param args
     * @return
     */
    public T searchInstance(Connection connection, String sql, Object ...args){
        T t = null;
        PreparedStatement ps = null;
        ResultSet resultSet = null;
        try {
            // 预编译
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }

            // 执行
            resultSet = ps.executeQuery();

            // 获取元数据
            ResultSetMetaData metaData = resultSet.getMetaData();
            // 获取列数
            int columnCount = metaData.getColumnCount();

            // 新建实例
            t = clazz.getDeclaredConstructor().newInstance();

            while(resultSet.next()){
                for (int i = 0; i < columnCount; i++) {
                    // 获取数据
                    Object value = resultSet.getObject(i + 1);
                    // 获取列名
                    String name = metaData.getColumnLabel(i + 1);
                    
                    // 通过反射赋值
                    Field field = clazz.getDeclaredField(name);
                    field.setAccessible(true);
                    field.set(t, value);
                }    
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.closeConnection(null, ps, resultSet);
        }
        return t;
    }

    /**
     * 增删改操作
     * @param connection
     * @param sql
     * @param args
     */
    public void upDate(Connection connection, String sql, Object ...args){
        PreparedStatement ps = null;
        try {
            ps = null;
            // 预编译
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }

            ps.execute();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.closeConnection(null, ps);
        }
    }

    /**
     * 获取一个值
     * @param connection
     * @param sql
     * @param args
     */
    public <T>  T getValue(Connection connection, String sql, Object ...args){
        PreparedStatement ps = null;
        ResultSet resultSet = null;
        try {
            // 预编译指令
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }
            System.out.println(ps);
            // 执行语句
            resultSet = ps.executeQuery();

            // 获取数据
            if(resultSet.next()){
                return (T)resultSet.getObject(1);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.closeConnection(null, ps, resultSet);
        }
        return null;
    }
    
    public ArrayList<T> searchKeyValue(Connection connection, String sql, Object ...args){
        PreparedStatement ps = null;
        ResultSet resultSet = null;
        ArrayList<T> ts = null;
        try {
            // 预编译指令
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }
            resultSet = ps.executeQuery();

            ResultSetMetaData metaData = resultSet.getMetaData();
            int columnCount = metaData.getColumnCount();
            ts = new ArrayList<T>();

            while(resultSet.next()){
                // 通过反射创建类
                T t = clazz.getDeclaredConstructor().newInstance();
                for (int i = 1; i <= columnCount; i++) {
                    Object value = resultSet.getObject(i);
                    String label = metaData.getColumnLabel(i);
    
                    Field field = clazz.getDeclaredField(label);
                    field.setAccessible(true);
                    field.set(t, value);
                }
                ts.add(t);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.closeConnection(null, ps, resultSet);
        }
        return ts;
    }
}

```

