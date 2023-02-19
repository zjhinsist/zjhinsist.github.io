---
title: JDBC教程
date: 2022-12-29 20:19:47
description:
mathjax:
cover: https://s2.loli.net/2022/12/29/oFUefWrVSE1Zi9C.jpg
categories:
tags: JAVA
---

# JDBC概述

## 数据持久化

- 持久化(persistence):{% span red, 把数据保存到可掉电式存储设备中以供之后使用 %}。大多数情况下，特别是企业级应用，{% span red, 数据持久化意味着将内存中的数据保存到硬盘 %}上加以"固化”，{% span red, 而持久化的实现过程大多通过各种关系数据库来完成 %}。
- 持久化的主要应用是将内存中的数据存储在关系型数据库中，当然也可以存储在磁盘文件、XM数据文件中。
- 主要是选择数据库，因为数据库可以存储多个类型，不像文本文件一样没有格式

![1566741430592.png](https://s2.loli.net/2023/01/07/uCpq7L6jHf9SBNo.png)



## JDBC介绍

- JDBC(Java Database Connectivity)是一个{% span red, 独立于特定数据库管理系统、通用的SQL数据库存取和操作的公共接口 %}(一组API）)，定义了用来访问数据库的标准Java类库，( {% span red, java.sql.javax.sql %} )使用这些类库可以以一种标准的方法、方便地访问数据库资源。

- JDBC为访问不同的数据库提供了一种{% span red, 统一的途径 %}，为开发者屏蔽了一些细节问题。

- JDBC的目标是使Java程序员使用JDBC可以连接任何{% span red, 提供了JDBC驱动程序 %}的数据库系统，这样就使得程序员无需对特定的数据库系统的特点有过多的了解，从而大大简化和加快了开发过程。

- 如果没有JDBC，那么Java程序访问数据库时是这样的︰

  ![1555575760234.png](https://s2.loli.net/2023/01/07/gI63vGJSpPkOQn8.png)

- 有了JDBC，Java程序访问数据库时是这样的：

  ![1555575981203](https://s2.loli.net/2023/01/07/EvqUQZXWR3n5KbB.png)

  ![1566741692804](https://s2.loli.net/2023/01/07/ufZ9IzTpdViG1Kt.png)

## JDBC编写步骤

![1565969323908](https://s2.loli.net/2023/01/07/OwYZJSlF8xqosmD.png)



# 获取数据库连接

获取数据库连接需要四个要素

- Driver：数据库连接对象
- url：数据库连接地址
- user：数据库登录用户
- password：数据库登录密码

## Driver接口实现

先从对应的数据库厂商下载对应的数据库接口，以MySQL为例：进入网址[MySQL驱动下载地址](https://dev.mysql.com/downloads/connector/j/5.1.html)

### 下载接口

选中平台依赖

![image-20221230121841110](https://s2.loli.net/2023/01/07/eJvsiAomROH6LVC.png)

下载即可

![image-20221230121923835](https://s2.loli.net/2023/01/07/ebmi2uCJLGfDvxI.png)



### 导入接口

在项目顶部右击创建名称为lib的目录

![image-20221230122033888](https://s2.loli.net/2023/01/07/INJWpxB1PwhCAHu.png)

将我们创建的目录标记为库

![image-20221230122141376](https://s2.loli.net/2023/01/07/I3tVKFdY6R4T9nk.png)

再将我们下载好的压缩包解压，将其中的jar包复制到lib的目录下

![image-20221230122236258](https://s2.loli.net/2023/01/07/AtpDzJgfM15Pk7v.png)

## URL介绍

JDBC URL的标准由三部分组成，各部分间用冒号分隔。 

- **jdbc:子协议:子名称**
- **协议**：JDBC URL中的协议总是jdbc 
- **子协议**：子协议用于标识一个数据库驱动程序
- **子名称**：一种标识数据库的方法。子名称可以依不同的子协议而变化，用子名称的目的是为了**定位数据库**提供足够的信息。包含**主机名**(对应服务端的ip地址)**，端口号，数据库名**

![1555576477107](https://s2.loli.net/2023/01/07/GX4a6jeW3pQcCxD.png)

**几种常用数据库的 JDBC URL**

- MySQL的连接URL编写方式：

  - jdbc:mysql://主机名称:mysql服务端口号/数据库名称?参数=值&参数=值
  - jdbc:mysql://localhost:3306/test
  - jdbc:mysql://localhost:3306/test**?useUnicode=true&characterEncoding=utf8**（如果JDBC程序与服务器端的字符集不一致，会导致乱码，那么可以通过参数指定服务器端的字符集）
  - jdbc:mysql://localhost:3306/test?user=root&password=123456

- Oracle 9i的连接URL编写方式：

  - jdbc:oracle:thin:@主机名称:oracle服务端口号:数据库名称
  - jdbc:oracle:thin:@localhost:1521:test

- SQLServer的连接URL编写方式：

  - jdbc:sqlserver://主机名称:sqlserver服务端口号:DatabaseName=数据库名称

  - jdbc:sqlserver://localhost:1433:DatabaseName=test



## 连接方式

### 连接方式一

我们将连接方式中的url写死

```Java
@Test
public void test() throws SQLException {

    // 获取Driver的实现类对象
    Driver driver = new com.mysql.cj.jdbc.Driver();
    //url:http://localhost:8080/gmall/keyboard.jpg
    // jdbc:mysql:协议
    // localhost:ip地址
    // 3306: 端口号
    //  test: test数据库名称
    //
    String url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8";
    
   	// 载入用户密码
    Properties properties = new Properties();
    properties.setProperty("user","root");
    properties.setProperty("password", "admin");

    Connection connect = driver.connect(url, properties);

    System.out.println(connect);

}
```

### 连接方式二

对方式一的改进

方式一的缺点：将URL写死了，大大削弱了代码的可移植性，所以我们可以采用映射的方式，在代码运行的时候动态生成对应的数据库类

```JAVA
// 方式二：对方式一的迭代：在如下程序中不出现第三方的API，使得程序具有更好的可移植性
@Test
public void TestConnection2() throws Exception {
    // 获取Driver实现类的对象，使用反射，这时候代码不是死的，可以通过传入的变量动态生成相应的类
    String SqlClass = "com.mysql.cj.jdbc.Driver"
    Class clazz = Class.forName(SqlClass);
    Driver driver = (Driver) clazz.newInstance();

    // 提供需要连接的数据库
    String url = "jdbc:mysql://localhost:3306/test?CharacterEncoding=utf8&useUnicode=true";

    // 提供用户密码
    Properties properties = new Properties();
    properties.setProperty("user", "root");
    properties.setProperty("password","admin");

    // 连接数据库
    Connection connect = driver.connect(url, properties);

    System.out.println(connect);

}
```



### 连接方式三

使用DriverManager替换Driver

```JAVA
// 方法三：使用DriverManager替换Driver
@Test
public void TestConnection3() throws Exception {
    // 获取Driver实现类的对象，使用反射，这时候代码不是死的，可以通过传入的变量动态生成相应的类
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");
    Driver driver = (Driver) clazz.newInstance();

    // 提供需要连接的数据库
    String url = "jdbc:mysql://localhost:3306/test?CharacterEncoding=utf8&useUnicode=true";
    String user = "root";
    String password = "admin";

    // 注册驱动
    DriverManager.registerDriver(driver);

    // 连接数据库
    Connection connection = DriverManager.getConnection(url, user, password);

    System.out.println(connection);
}
```



### 连接方式四

省略一部分，有些代码，数据库厂商已经为我们封装好了，例如Driver的实现

```JAVA
@Test
public void TestConnection4() throws Exception {
    // 提供需要连接的数据库
    String url = "jdbc:mysql://localhost:3306/test?CharacterEncoding=utf8&useUnicode=true";
    String user = "root";
    String password = "admin";

    // 获取Driver实现类的对象，使用反射，这时候代码不是死的，可以通过传入的变量动态生成相应的类
    Class clazz = Class.forName("com.mysql.cj.jdbc.Driver");

    // 可以省略如下操作，因为在mysql连接中，有静态方法帮我们实现了
    //Driver driver = (Driver) clazz.newInstance();
    //
    //注册驱动
    //DriverManager.registerDriver(driver);

    // 连接数据库
    Connection connection = DriverManager.getConnection(url, user, password);

    System.out.println(connection);
}
```



### 连接方式五

通过读取配置文件的内容来进行连接

配置文件内容

```properties
user=root
password=admin
url=jdbc:mysql://localhost:3306/test?CharacterEncoding=utf8&useUnicode=true
driverClass=com.mysql.cj.jdbc.Driver
```

连接数据库的内容

```JAVA
 @Test
public void TestConnection5() throws Exception {

    // 读取配置文件的中的四个基本信息
    InputStream is = ConnectionTest.class.getClassLoader().getResourceAsStream("jdbc.properties");

    Properties pros = new Properties();
    pros.load(is);

    String user = pros.getProperty("user");
    String password = pros.getProperty("password");
    String url = pros.getProperty("url");
    String driverClass = pros.getProperty("driverClass");

    // 加载驱动
    Class clazz = Class.forName(driverClass);

    // 获取连接
    Connection connection = DriverManager.getConnection(url, user, password);
    System.out.println(connection);
}
```



# 使用PreparedStatement实现CRUE操作

- 数据库连接被用于向数据库服务器发送命令和 SQL 语句，并接受数据库服务器返回的结果。其实一个数据库连接就是一个Socket连接。

- 在 java.sql 包中有 3 个接口分别定义了对数据库的调用的不同方式：

  - Statement：用于执行静态 SQL 语句并返回它所生成结果的对象。 

  - PrepatedStatement：SQL 语句被预编译并存储在此对象中，可以使用此对象多次高效地执行该语句。

  - CallableStatement：用于执行 SQL 存储过程

    ![1566573842140](https://s2.loli.net/2023/01/07/4EUKcnhOVBxqyf9.png)



## Statement的弊端

- **问题一：存在拼串操作，繁琐**
- **问题二：存在SQL注入问题**
- SQL 注入是利用某些系统没有对用户输入的数据进行充分的检查，而在用户输入数据中注入非法的 SQL 语句段或命令(如：SELECT user, password FROM user_table WHERE user='a' OR 1 = ' AND password = ' OR '1' = '1') ，从而利用系统的 SQL 引擎完成恶意行为的做法。
- 对于 Java 而言，要防范 SQL 注入，只要用 PreparedStatement(从Statement扩展而来) 取代 Statement 就可以了。

```JAVA
public class StatementTest {

	// 使用Statement的弊端：需要拼写sql语句，并且存在SQL注入的问题
	@Test
	public void testLogin() {
		Scanner scan = new Scanner(System.in);

		System.out.print("用户名：");
		String userName = scan.nextLine();
		System.out.print("密   码：");
		String password = scan.nextLine();

		// SELECT user,password FROM user_table WHERE USER = '1' or ' AND PASSWORD = '='1' or '1' = '1';
		String sql = "SELECT user,password FROM user_table WHERE USER = '" + userName + "' AND PASSWORD = '" + password
				+ "'";
		User user = get(sql, User.class);
		if (user != null) {
			System.out.println("登陆成功!");
		} else {
			System.out.println("用户名或密码错误！");
		}
	}

	// 使用Statement实现对数据表的查询操作
	public <T> T get(String sql, Class<T> clazz) {
		T t = null;

		Connection conn = null;
		Statement st = null;
		ResultSet rs = null;
		try {
			// 1.加载配置文件
			InputStream is = StatementTest.class.getClassLoader().getResourceAsStream("jdbc.properties");
			Properties pros = new Properties();
			pros.load(is);

			// 2.读取配置信息
			String user = pros.getProperty("user");
			String password = pros.getProperty("password");
			String url = pros.getProperty("url");
			String driverClass = pros.getProperty("driverClass");

			// 3.加载驱动
			Class.forName(driverClass);

			// 4.获取连接
			conn = DriverManager.getConnection(url, user, password);

			st = conn.createStatement();

			rs = st.executeQuery(sql);

			// 获取结果集的元数据
			ResultSetMetaData rsmd = rs.getMetaData();

			// 获取结果集的列数
			int columnCount = rsmd.getColumnCount();

			if (rs.next()) {

				t = clazz.newInstance();

				for (int i = 0; i < columnCount; i++) {
					// //1. 获取列的名称
					// String columnName = rsmd.getColumnName(i+1);

					// 1. 获取列的别名
					String columnName = rsmd.getColumnLabel(i + 1);

					// 2. 根据列名获取对应数据表中的数据
					Object columnVal = rs.getObject(columnName);

					// 3. 将数据表中得到的数据，封装进对象
					Field field = clazz.getDeclaredField(columnName);
					field.setAccessible(true);
					field.set(t, columnVal);
				}
				return t;
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// 关闭资源
			if (rs != null) {
				try {
					rs.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (st != null) {
				try {
					st.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}

			if (conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}

		return null;
	}
}
```

使用PrepareStatement来解决

![1566569819744](https://s2.loli.net/2023/01/07/bOJL2szZRj3x91V.png)



## PrepareStatement使用

### 介绍

- 可以通过调用 Connection 对象的 **preparedStatement(String sql)** 方法获取 PreparedStatement 对象

- **PreparedStatement 接口是 Statement 的子接口，它表示一条预编译过的 SQL 语句**

- PreparedStatement 对象所代表的 SQL 语句中的参数用问号(?)来表示，调用 PreparedStatement 对象的 setXxx() 方法来设置这些参数. setXxx() 方法有两个参数，第一个参数是要设置的 SQL 语句中的参数的索引(从 1 开始)，第二个是设置的 SQL 语句中的参数的值

### PreparedStatement vs Statement

- 代码的可读性和可维护性。

- **PreparedStatement 能最大可能提高性能：**
  - DBServer会对**预编译**语句提供性能优化。{% span red, 因为预编译语句有可能被重复调用 %}，所以<u>语句在被DBServer的编译器编译后的执行代码被缓存下来，那么下次调用时只要是相同的预编译语句就不需要编译，只要将参数直接传入编译过的语句执行代码中就会得到执行。</u>
  - 在statement语句中,即使是相同操作但因为数据内容不一样,所以整个语句本身不能匹配,没有缓存语句的意义.事实是没有数据库会对普通语句编译后的执行代码缓存。这样<u>每执行一次都要对传入的语句编译一次。</u>
  - (语法检查，语义检查，翻译成二进制命令，缓存)

- PreparedStatement 可以防止 SQL 注入 

###  Java与SQL对应数据类型转换表

| Java类型           | SQL类型                  |
| ------------------ | ------------------------ |
| boolean            | BIT                      |
| byte               | TINYINT                  |
| short              | SMALLINT                 |
| int                | INTEGER                  |
| long               | BIGINT                   |
| String             | CHAR,VARCHAR,LONGVARCHAR |
| byte   array       | BINARY  ,    VAR BINARY  |
| java.sql.Date      | DATE                     |
| java.sql.Time      | TIME                     |
| java.sql.Timestamp | TIMESTAMP                |

### PreparedStatement的使用

提前将通用的获取连接和关闭资源的操作放到一个工具类中

```JAVA
public class JDBCUtils {
    /**
     * 获取数据库的链接
     * @return
     * @throws Exception
     */
    public static Connection getConnection() throws Exception {
        // 读取到配置文件
        InputStream is = ClassLoader.getSystemClassLoader().getResourceAsStream("jdbc.properties");
        // 创建一个类来进行分析配置文件
        Properties pros = new Properties();
        pros.load(is);
        // 获取配置文件中的内容
        String user = pros.getProperty("user");
        String password = pros.getProperty("password");
        String url = pros.getProperty("url");
        String driverClass = pros.getProperty("driverClass");

        // 加载驱动
        Class clazz = Class.forName(driverClass);

        // 获取连接
        Connection connection = DriverManager.getConnection(url, user, password);
        return connection;
    }

    /**
     * 关闭资源和PreparedStatement操作
     * @param connection
     * @param ps
     */
    public static void closeConnection(Connection connection, PreparedStatement ps){
        // 关闭资源
        try {
            if(ps != null){
                ps.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        try {
            if(connection != null ){
                connection.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * 关闭资源
     * @param connection
     * @param ps
     * @param resultSet
     */
    public static void closeConnection(Connection connection, PreparedStatement ps, ResultSet resultSet){
        // 关闭资源
        try {
            if(ps != null){
                ps.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        try {
            if(connection != null ){
                connection.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        try {
            if(resultSet != null ){
                resultSet.close();
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}
```



1. 添加操作

   ```JAVA
   public void testInsert() throws Exception {
       // 获取连接
       Connection connection = JDBCUtils.getConnection();
   
       // 编译Sql语句
       String sql = "INSERT INTO customers(name,email,birth) VALUES (?,?,?)"; //?占位符
       PreparedStatement ps = connection.prepareStatement(sql);
       ps.setString(1, "修改1");
       ps.setString(2, "zkh@qq.com");
       // 格式化字符串
       SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
       Date parse = sdf.parse("2007-05-16");
       ps.setDate(3, new java.sql.Date(parse.getTime()));
       System.out.println(ps.toString());
       //6.执行操作
       ps.execute();
       //7.关闭资源
       JDBCUtils.closeConnection(connection,ps);
   
   }
   ```

2. 修改操作

   ```JAVA
   // 修改操作
   @Test
   public void testModify() throws Exception {
       // 获取连接
       Connection connection = JDBCUtils.getConnection();
   
       // 预编译SQL语句,返回PreparedStatement实例
       // 什么叫做预编译，在我们生成SQL对象的时候就已经知道我们要做的操作有哪些
       String sql = "UPDATE customers SET name=? WHERE id=?";
   
       // 填充占位符
       PreparedStatement ps = connection.prepareStatement(sql);
       ps.setString(1,"修改2");
       ps.setInt(2,19);
       // 执行
       ps.execute();
       // 资源关闭
       JDBCUtils.closeConnection(connection,ps);
   }
   ```

3. 通用增删改操作

   通用增删改操作就是将我们上述操作中的特定sql语句改成变量即可

   ```JAVA
   public void upDate(String sql, Object ...args) {
       Connection connection = null;
       PreparedStatement ps = null;
       try {
           // 获取连接
           connection = JDBCUtils.getConnection();
   
           // 预编译SQL，返回PreparedStatement
           ps = connection.prepareStatement(sql);
           // 填充占位符
           for(int i = 0; i < args.length; i++){
               ps.setObject(i+1,args[i]);
           }
           System.out.println(ps.toString());
           // 执行SQL语句
           ps.execute();
       } catch (Exception e) {
           throw new RuntimeException(e);
       } finally {
           // 关闭资源信息
           JDBCUtils.closeConnection(connection,ps);
       }
   }
   ```

4. 查询操作

   查询操作和增删改操作不同的是查询操作有返回值，而增删改操作没有返回值，所以查询操作多了一个处理返回值的步骤

   处理方法：

   1. 使用executeQuery()函数的返回值resultSet来接收返回值

   2. 使用resultSet.getXxx(num);来进行获取返回值中某一行中的某一个元素
   3. 创建一个数据库中表对应的java类，将我们获取到的元素通过java对象存储起来

   ```JAVA
   // 查询操作
   @Test
   public void  testSelect() throws Exception {
       // 获取连接
       Connection connection = JDBCUtils.getConnection();
   
       // 预编译SQL语句
       String sql = "SELECT id,name,email,birth FROM customers WHERE id = ?";
       PreparedStatement ps = connection.prepareStatement(sql);
       // 填充占位符
       ps.setInt(1, 1);
   
       // 执行sql语句
       ResultSet resultSet = ps.executeQuery();
   
       // 获取结果中的数据
       while(resultSet.next()){
           int id = resultSet.getInt(1);
           String name = resultSet.getString(2);
           String email = resultSet.getString(3);
           java.sql.Date birth = resultSet.getDate(4);
   
           Customers customers = new Customers(id, name, email, birth);
           System.out.println(customers);
       }
       // 关闭连接
       JDBCUtils.closeConnection(connection,ps, resultSet);
   
   }
   ```

5. 对于某一个表的通用查询操作

   通用查询操作相比于查询操作难点在与：

   1. 无法确定我们查询了几个元素
   2. 无法确定查询后的元素的顺序

   解决方法：

   1. 通过使用元数据来进行获取，resultSet.getMetaData()来获取元数据
      1. 获取列数：metaData.getColumnCount();来进行获取列数
      2. 获取第num列的列名:metaData.getColumnName(num);
   2. 我们可以通过返反射的方法对特定的属性进行赋值
      1. 先通过某个类中特定的属性名获取反射对象   Field declaredField = Customers.class.getDeclaredField(columnName);
      2. 通过反射对象，实现对某个特定类的特定属性进行赋值   declaredField.set(customers,value);

   ```JAVA
   public ArrayList<Customers> testSelect2(String sql, Object ...args){
       Connection connection = null;
       PreparedStatement ps = null;
       ResultSet resultSet = null;
       ArrayList<Customers> customerList = new ArrayList<>();
       try {
           // 获取连接
           connection = JDBCUtils.getConnection();
           // 预编译SQL语句
           ps = connection.prepareStatement(sql);
           // 填充占位符
           for(int i = 0; i < args.length; i++){
               ps.setObject(i+1, args[i]);
           }
           // 执行sql语句
           resultSet = ps.executeQuery();
   
           // 获取一共查询了几个列，也就是需要取几次值
           ResultSetMetaData metaData = resultSet.getMetaData();
           // 获取列数
           int columnCount = metaData.getColumnCount();
           System.out.println(columnCount);
   
           // 显示SQL语句
           while(resultSet.next()){
               Customers customers = new Customers();
               for(int i = 0; i < columnCount; i++){
                   Object value = resultSet.getObject(i + 1);
   
                   // 获取列名，用来给类中的属性赋值
                   String columnName = metaData.getColumnName(i + 1);
                   // 通过反射给这个属性赋值
                   // 先获取到这个属性
                   Field declaredField = Customers.class.getDeclaredField(columnName);
                   // 这个属性可能是私有的，需要将其设置为我们都可访问的
                   declaredField.setAccessible(true);
                   // 给属性赋值,给customers这个类的catalogName属性赋值
                   declaredField.set(customers,value);
               }
               customerList.add(customers);
           }
       } catch (Exception e) {
           throw new RuntimeException(e);
       } finally {
           // 关闭资源
           JDBCUtils.closeConnection(connection,ps,resultSet);
       }
       return customerList;
   }
   ```

6. 查询的特殊情况

   当我们创建的类中的各个属性，没有和数据库中的列名相同的话，这时候我们如果在通过metaData.getColumnName(i + 1);获取列名，并且根据数据库中的列名进行对某个特定的属性进行赋值的话，会出错，找不到对应的属性名

   解决方法：

   1. 在SQL语句中使用别名，别名和我们设置的java类中的属性名相同
   2. metaData.getColumnLabel(i + 1); 使用该函数来进行别名的获取，并且如果没有别名的话也{% span red, 建议使用该函数进行获取列名 %}.

   ```JAVA
   public ArrayList<Order> selectOrder(String sql, Object ...args) {
       Connection connection = null;
       PreparedStatement ps = null;
       ResultSet rs = null;
       ArrayList<Order> orders = null;
       try {
           // 获取连接
           connection = JDBCUtils.getConnection();
           // 执行预编译
           ps = connection.prepareStatement(sql);
           // 填充占位符
           for(int i = 0; i < args.length; i++){
               ps.setObject(i+1, args[i]);
           }
   
           // 执行语句
           rs = ps.executeQuery();
           // 获取表中变量
           ResultSetMetaData metaData = rs.getMetaData();
           // 获取列数
           int columnCount = metaData.getColumnCount();
   
           // 开始进行输入提取
           orders = new ArrayList<>();
           while(rs.next()){
               Order order = new Order();
               for (int i = 0; i < columnCount; i++){
                   Object value = rs.getObject(i + 1);
   
                   // 获取列的别名
                   String columnLabel = metaData.getColumnLabel(i + 1);
                   // 通过反射进行赋值
                   Field field = Order.class.getDeclaredField(columnLabel);
                   field.setAccessible(true);
                   field.set(order, value);
               }
               orders.add(order);
           }
       } catch (Exception e) {
           throw new RuntimeException(e);
       } finally {
           // 资源关闭
           JDBCUtils.closeConnection(connection,ps, rs);
       }
       return orders;
   }
   ```

7. 多表的通用查询

   相对于单表的通用查询，多表的通用查询难点在于，将单表的通用查询中的特定表改成泛型即可

   使用Class< T > clazz来获取对应表的类型

   ```JAVA
   /**
        * 多表通用查询操作
        * @param clazz
        * @param sql
        * @param args
        * @return
        * @param <T>
        */
   public <T> ArrayList<T> manyTable(Class<T> clazz, String sql, Object ...args){
       Connection connection = null;
       PreparedStatement ps = null;
       ResultSet rs = null;
       ArrayList<T> Ts = null;
       try {
           // 获取连接
           connection = JDBCUtils.getConnection();
           // 执行预编译
           ps = connection.prepareStatement(sql);
           // 填充占位符
           for(int i = 0; i < args.length; i++){
               ps.setObject(i+1, args[i]);
           }
   
           // 执行语句
           rs = ps.executeQuery();
           // 获取表中变量
           ResultSetMetaData metaData = rs.getMetaData();
           // 获取列数
           int columnCount = metaData.getColumnCount();
   
           // 开始进行输入提取
           Ts = new ArrayList<>();
           while(rs.next()){
               // getDeclaredConstructor()方法会根据他的参数对该类的构造函数进行搜索并返回对应的构造函数，
               // 没有参数就返回该类的无参构造函数，然后再通过newInstance进行实例化。
               T t = clazz.getDeclaredConstructor().newInstance();
               for (int i = 0; i < columnCount; i++){
                   Object value = rs.getObject(i + 1);
   
                   // 获取列的别名
                   String columnLabel = metaData.getColumnLabel(i + 1);
                   // 通过反射进行赋值
                   Field field = clazz.getDeclaredField(columnLabel);
                   field.setAccessible(true);
                   field.set(t, value);
               }
               Ts.add(t);
           }
       } catch (Exception e) {
           throw new RuntimeException(e);
       } finally {
           // 资源关闭
           JDBCUtils.closeConnection(connection,ps, rs);
       }
       return Ts;
   }
   ```


###  JDBC API小结

- 两种思想

  - 面向接口编程的思想

  - ORM思想(object relational mapping)
    - 一个数据表对应一个java类
    - 表中的一条记录对应java类的一个对象
    - 表中的一个字段对应java类的一个属性

  > sql是需要结合列名和表的属性名来写。注意起别名。

- 两种技术

  - JDBC结果集的元数据：ResultSetMetaData
    - 获取列数：getColumnCount()
    - 获取列的别名：getColumnLabel()
  - 通过反射，创建指定类的对象，获取指定的属性并赋值





# 操作BLOB类型字段

## MySQL BLOB类型

- MySQL中，BLOB是一个二进制大型对象，是一个可以存储大量数据的容器，它能容纳不同大小的数据。
- 插入BLOB类型的数据必须使用PreparedStatement，因为BLOB类型的数据无法使用字符串拼接写的。

- MySQL的四种BLOB类型(除了在存储的最大信息量上不同外，他们是等同的)

![1555581069798](https://s2.loli.net/2023/01/07/e4PTixHBafSInuo.png)

- 实际使用中根据需要存入的数据大小定义不同的BLOB类型。
- 需要注意的是：如果存储的文件过大，数据库的性能会下降。
- 如果在指定了相关的Blob类型以后，还报错：xxx too large，那么在mysql的安装目录下，找my.ini文件加上如下的配置参数： **max_allowed_packet=16M**。同时注意：修改了my.ini文件之后，需要重新启动mysql服务。



## 插入操作

```JAVA
public void testBlobInsert() throws Exception {
    Connection connection = JDBCUtils.getConnection();
    String sql = "INSERT INTO customers(name, email, birth, photo) VALUES(?,?,?,?) ";
    PreparedStatement ps = connection.prepareStatement(sql);
    ps.setString(1,"张锦昊");
    ps.setString(2,"2@qq.com");
    ps.setString(3,"2002-05-16");
    File file = new File("C:\\Users\\Nuyoah\\Pictures\\Camera Roll\\wallhaven-g7zzkl.jpg");
    FileInputStream is = new FileInputStream(file);
    ps.setBlob(4,is);

    ps.execute();

    JDBCUtils.closeConnection(connection, ps);
}
```

## 读取操作

```JAVA
@Test
public void testBlobSave() throws Exception {
    Connection connection = JDBCUtils.getConnection();
    String sql = "SELECT name, email, birth, photo FROM customers WHERE id = ?";
    PreparedStatement ps = connection.prepareStatement(sql);
    ps.setInt(1,20);
    ResultSet resultSet = ps.executeQuery();
    InputStream is = null;
    FileOutputStream fos = null;
    if (resultSet.next()){
        // // 方式一：
        // String name = resultSet.getString(1);
        // String email = resultSet.getString(2);
        // String birth = resultSet.getString(3);
        // 方式二：
        String name = resultSet.getString("name");
        String email = resultSet.getString("email");
        String birth = resultSet.getString("birth");
        // 获取Blob文件
        Blob photo = resultSet.getBlob("photo");
        // 将二进制文件转换成流的形式
        is = photo.getBinaryStream();
        // 获取输出流
        fos = new FileOutputStream("C:\\Users\\Nuyoah\\Desktop\\zjh.jpg");

        byte[] buffer = new byte[1024];
        int len;
        while((len = is.read(buffer))!=-1){
            fos.write(buffer,0,len);
        }
    }

    is.close();
    fos.close();
    JDBCUtils.closeConnection(connection,ps,resultSet);
}
```



# 批量插入

## 批量执行SQL语句

当需要成批插入或者更新记录时，可以采用Java的批量**更新**机制，这一机制允许多条语句一次性提交给数据库批量处理。通常情况下比单独提交处理更有效率

JDBC的批量处理语句包括下面三个方法：

- **addBatch(String)：添加需要批量处理的SQL语句或是参数；**
- **executeBatch()：执行批量处理语句；**
- **clearBatch():清空缓存的数据**

通常我们会遇到两种批量执行SQL语句的情况：

- 多条SQL语句的批量处理；
- 一个SQL语句的批量传参；

## 高效插入方法

### 方式一：Statement

```JAVA
Connection conn = JDBCUtils.getConnection();
Statement st = conn.createStatement();
for(int i = 1;i <= 20000;i++){
	String sql = "insert into goods(name) values('name_' + "+ i +")";
	st.executeUpdate(sql);
}
```

### 方式二：PreparedStatement

方式二，采用PreparedStatement方式，优点在于可以不用每次提交的时候都需要改变sql语句

```JAVA
@Test
public void testBatch(){
    Connection connection = null;
    PreparedStatement ps = null;
    try {
        connection = JDBCUtils.getConnection();
        String sql = "INSERT INTO goods(name) value(?)";
        ps = connection.prepareStatement(sql);
        long start = System.currentTimeMillis();
        for (int i = 0; i < 200000; i++) {
            ps.setString(1,("name_"+i+1));
            ps.execute();
        }
        long end = System.currentTimeMillis(); // 208848
        System.out.println(end-start);
    } catch (Exception e) {
        throw new RuntimeException(e);
    } finally {
        JDBCUtils.closeConnection(connection,ps);
    }
}
```



### 方式三：等待提交

方式二的缺点在于，每次修改完数据都要进行执行，每一条数据都会和数据库进行交互，

方式三改进方法：我们在执行sql语句的时候可以先存起来，等攒够一定数量的sql语句后在提交

```JAVA
@Test
public void testBatch2(){
    Connection connection = null;
    PreparedStatement ps = null;
    try {
        connection = JDBCUtils.getConnection();
        String sql = "INSERT INTO goods(name) value(?)";
        ps = connection.prepareStatement(sql);
        long start = System.currentTimeMillis();
        for (int i = 0; i < 200000; i++) {
            ps.setString(1,("name_"+i+1));
            ps.addBatch();
            if(i % 500 == 0){
                ps.execute();
            }
        }
        long end = System.currentTimeMillis(); // 200000: 208848 --- 815
        System.out.println(end-start);
    } catch (Exception e) {
        throw new RuntimeException(e);
    } finally {
        JDBCUtils.closeConnection(connection,ps);
    }
}
```

### 方式四：暂停自动提交


方式三的缺点在于，每次提交的时候都是写死到数据库中，我们可以先将我们提交的数据放到缓存中，等全部写完之后在真正的放到数据库中

方式三改进方法：我们在执行sql语句的时候可以先存起来，等攒够一定数量的sql语句后在提交

```JAVA
@Test
public void testBatch3(){
    Connection connection = null;
    PreparedStatement ps = null;
    try {
        connection = JDBCUtils.getConnection();
        String sql = "INSERT INTO goods(name) value(?)";
        ps = connection.prepareStatement(sql);
        long start = System.currentTimeMillis();
        connection.setAutoCommit(false);
        for (int i = 0; i < 1000000; i++) {
            ps.setString(1,("name_"+i+1));
            ps.addBatch();
            if(i % 500 == 0){
                ps.execute();
            }
        }
        connection.commit();
        long end = System.currentTimeMillis(); // 200000: 208848 --- 815
        System.out.println(end-start);
    } catch (Exception e) {
        throw new RuntimeException(e);
    } finally {
        JDBCUtils.closeConnection(connection,ps);
    }
}
```





# 数据库事务

##  数据库事务介绍

- **事务：一组逻辑操作单元,使数据从一种状态变换到另一种状态。**

- **事务处理（事务操作）：**保证所有事务都作为一个工作单元来执行，即使出现了故障，都不能改变这种执行方式。当在一个事务中执行多个操作时，要么所有的事务都**被提交(commit)**，那么这些修改就永久地保存下来；要么数据库管理系统将放弃所作的所有修改，整个事务**回滚(rollback)**到最初状态。

- 为确保数据库中数据的**一致性**，数据的操纵应当是离散的成组的逻辑单元：当它全部完成时，数据的一致性可以保持，而当这个单元中的一部分操作失败，整个事务应全部视为错误，所有从起始点以后的操作应全部回退到开始状态。 

## JDBC事务处理

- 数据一旦提交，就不可回滚。

- 数据什么时候意味着提交？

  - **当一个连接对象被创建时，默认情况下是自动提交事务**：每次执行一个 SQL 语句时，如果执行成功，就会向数据库自动提交，而不能回滚。
  - **关闭数据库连接，数据就会自动的提交。**如果多个操作，每个操作使用的是自己单独的连接，则无法保证事务。即同一个事务的多个操作必须在同一个连接下。

- **JDBC程序中为了让多个 SQL 语句作为一个事务执行：**

  - 调用 Connection 对象的 **setAutoCommit(false);** 以取消自动提交事务
  - 在所有的 SQL 语句都成功执行后，调用 **commit();** 方法提交事务
  - 在出现异常时，调用 **rollback();** 方法回滚事务

  > 若此时 Connection 没有被关闭，还可能被重复使用，则需要恢复其自动提交状态 setAutoCommit(true)。尤其是在使用数据库连接池技术时，执行close()方法前，建议恢复自动提交状态。

## 处理方法

【案例：用户AA向用户BB转账100】

### 未使用事务的时候

AA向BB转账100，如果中间不出现错误的话能够转账成功，但是如果出现错误之后，将无法挽回。

AA账户-100，如果中间出错的话，BB账户不但不会+100，而且AA账户的-100已经写到数据库中并且提交这时候将无法挽回

```JAVA
@Test
public void testWork(){
    String sql = "UPDATE user_table SET balance = balance-100 WHERE user=?";
    upDate(sql, "AA");
    // 如果这个时候出错的话则非但BB不会执行+100操作
    // AA的-100也无法回滚
    String sql2 = "UPDATE user_table SET balance = balance+100 WHERE user=?";
    upDate(sql2, "BB");
}

public void upDate(String sql, Object ...args) {
    Connection connection = null;
    PreparedStatement ps = null;
    try {
        // 获取连接
        connection = JDBCUtils.getConnection();

        // 预编译SQL，返回PreparedStatement
        ps = connection.prepareStatement(sql);
        // 填充占位符
        for(int i = 0; i < args.length; i++){
            ps.setObject(i+1,args[i]);
        }
        // 执行SQL语句
        ps.execute();
    } catch (Exception e) {
        throw new RuntimeException(e);
    } finally {
        // 关闭资源信息
        JDBCUtils.closeConnection(connection,ps);
    }

}
```



### 使用事务

使用事务的优点是，将两个操作捆绑起来，这种情况下只有两个结果

1. 捆绑的事件都执行完毕
2. 捆绑中有未执行的，那么执行完的操作也要回滚为上一步操作

使用事务需要注意点：

1. 我们需要将我们写的代码改为不自动提交
2. 我们需要将关闭资源的操作放到函数外面，因为关闭资源的话，会触发自动提交，前提是AUTOCOMMIT 为true的时候才自动提交
3. 如果执行失败的话需要进行回滚操作
4. 执行完操作之后需要将我们设置的不自动提交改为自动提交，防止以后使用出错

```JAVA
@Test
public void testWork(){
    Connection connection = null;
    try {
        // 连接数据库
        connection = JDBCUtils.getConnection();
        // 设置不自动提交
        connection.setAutoCommit(false);
        // 开始转账
        String sql = "UPDATE user_table SET balance = balance-100 WHERE user=?";
        upDate(connection,sql, "AA");
        String sql2 = "UPDATE user_table SET balance = balance+100 WHERE user=?";
        upDate(connection,sql2, "BB");

        // 如果转账成功，则提交结果
        connection.commit();
    } catch (Exception e) {
        e.printStackTrace();
        try {
            connection.rollback();
        } catch (SQLException ex) {
            throw new RuntimeException(ex);
        }
    } finally {
        // 将我们原来设置的不自动提交改回来，防止以后有人用这个连接的时候出错
        try {
            connection.setAutoCommit(true);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        // 关闭连接
        JDBCUtils.closeConnection(connection,null);
    }

}

public void upDate(Connection connection,String sql, Object ...args) {
    PreparedStatement ps = null;
    try {
        // 获取连接
        connection = JDBCUtils.getConnection();
        // 预编译SQL，返回PreparedStatement
        ps = connection.prepareStatement(sql);
        // 填充占位符
        for(int i = 0; i < args.length; i++){
            ps.setObject(i+1,args[i]);
        }
        // 执行SQL语句
        ps.execute();
    } catch (Exception e) {
        throw new RuntimeException(e);
    } finally {
        // 关闭资源信息
        // 不关闭连接，只关闭预编译的sql语句
        JDBCUtils.closeConnection(null,ps);
    }

}
```

## 事务的ACID属性    

1. **原子性（Atomicity）**
   原子性是指事务是一个不可分割的工作单位，事务中的操作要么都发生，要么都不发生。 

2. **一致性（Consistency）**
   事务必须使数据库从一个一致性状态变换到另外一个一致性状态。

3. **隔离性（Isolation）**
   事务的隔离性是指一个事务的执行不能被其他事务干扰，即一个事务内部的操作及使用的数据对并发的其他事务是隔离的，并发执行的各个事务之间不能互相干扰。

4. **持久性（Durability）**
   持久性是指一个事务一旦被提交，它对数据库中数据的改变就是永久性的，接下来的其他操作和数据库故障不应该对其有任何影响。

### 数据库的并发问题

- 对于同时运行的多个事务, 当这些事务访问数据库中相同的数据时, 如果没有采取必要的隔离机制, 就会导致各种并发问题:
  - **脏读**: 对于两个事务 T1, T2, T1 读取了已经被 T2 更新但还**没有被提交**的字段。之后, 若 T2 回滚, T1读取的内容就是临时且无效的。
  - **不可重复读**: 对于两个事务T1, T2, T1 读取了一个字段, 然后 T2 **更新**了该字段。之后, T1再次读取同一个字段, 值就不同了。
  - **幻读**: 对于两个事务T1, T2, T1 从一个表中读取了一个字段, 然后 T2 在该表中**插入**了一些新的行。之后, 如果 T1 再次读取同一个表, 就会多出几行。

- **数据库事务的隔离性**: 数据库系统必须具有隔离并发运行各个事务的能力, 使它们不会相互影响, 避免各种并发问题。

- 一个事务与其他事务隔离的程度称为隔离级别。数据库规定了多种事务隔离级别, 不同隔离级别对应不同的干扰程度, **隔离级别越高, 数据一致性就越好, 但并发性越弱。**

###  四种隔离级别

- 数据库提供的4种事务隔离级别：

  ![1555586275271](https://s2.loli.net/2023/01/07/szmeqNZBGWCOUhJ.png)

- Oracle 支持的 2 种事务隔离级别：**READ COMMITED**, SERIALIZABLE。 Oracle 默认的事务隔离级别为: **READ COMMITED** 。


- Mysql 支持 4 种事务隔离级别。Mysql 默认的事务隔离级别为: **REPEATABLE READ。**

###  在MySql中设置隔离级别

- 每启动一个 mysql 程序, 就会获得一个单独的数据库连接. 每个数据库连接都有一个全局变量 @@tx_isolation, 表示当前的事务隔离级别。

- 查看当前的隔离级别: 

  ```mysql
  SELECT @@tx_isolation;
  ```

- 设置当前 mySQL 连接的隔离级别:  

  ```mysql
  set  transaction isolation level read committed;
  ```

- 设置数据库系统的全局的隔离级别:

  ```mysql
  set global transaction isolation level read committed;
  ```

- 补充操作：

  - 创建mysql数据库用户：

    ```mysql
    create user tom identified by 'abc123';
    ```

  - 授予权限

    ```mysql
    #授予通过网络方式登录的tom用户，对所有库所有表的全部权限，密码设为abc123.
    grant all privileges on *.* to tom@'%'  identified by 'abc123'; 
    
     #给tom用户使用本地命令行方式，授予atguigudb这个库下的所有表的插删改查的权限。
    grant select,insert,delete,update on atguigudb.* to tom@localhost identified by 'abc123'; 
    
    ```




```JAVA
public void tsetSelect throws Exception{
    // 获取连接
    Connection connection = JDBCUtils.getConnection();
    // 获取当前隔离级别，对应上面的分为1,2,3,4
    System.out.println(connection.getTransactionIsolation());
    // 设置数据库的隔离级别
    connection.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);
    // 取消自动提交
    connection.setAutoCommit(false);
    String sql = "SELECT user,password,balance from user_table WHERE user = ?";
    User user = select(connection,User.class, sql, "AA");
    System.out.println(user);
        
}

public void testSelect2 {
    Connection connection = JDBCUtils.getConnection();
    connection.setAutoCommit(false);
    String sql = "UPDATE user_table set balance = ? WHERE user=?";
    update(connection, sql, 5000, "AA");
    Thread.sleep(15000);
}
```



```JAVA
public <T> ArrayList<T> select(Connection connection,Class<T> clazz, String sql, Object ...args){
    PreparedStatement ps = null;
    ResultSet resultSet = null;
    ArrayList<T> ts = null;
    try {
        // 获取连接
        connection = JDBCUtils.getConnection();

        // 预编译sql语句
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

        ts = new ArrayList<T>();

        // 获取数据
        while(resultSet.next()){
            T t = clazz.getDeclaredConstructor().newInstance();
            for (int i = 0; i < columnCount; i++) {
                // 获取数据
                Object value = resultSet.getObject(i + 1);
                // 获取列名
                String columnLabel = metaData.getColumnLabel(i + 1);

                // 进行反射赋值
                Field field = clazz.getDeclaredField(columnLabel);
                field.setAccessible(true);
                field.set(t, value);
            }
            ts.add(t);
        }
    } catch (Exception e) {
        throw new RuntimeException(e);
    } finally {
        // 关闭资源
        JDBCUtils.closeConnection(null,ps,resultSet);
    }
    return ts;

}

public void upDate(Connection connection,String sql, Object ...args) {
        PreparedStatement ps = null;
        try {
            // 获取连接
            connection = JDBCUtils.getConnection();
            // 预编译SQL，返回PreparedStatement
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for(int i = 0; i < args.length; i++){
                ps.setObject(i+1,args[i]);
            }
            // 执行SQL语句
            ps.execute();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            // 关闭资源信息
            // 不关闭连接，只关闭预编译的sql语句
            JDBCUtils.closeConnection(null,ps);
        }

    }
```



# DAO及相关实现类

{% tip warning %}DAO主要实现的是和数据库的交互{% endtip %}

DAO分为三个部分

1. BaseDAO 基本操作
2. xxxDAO 接口
3. xxxDAOImpl 接口实现类

## BaseDAO

实现了数据库通用的增删改查操作，以及一些特殊的查询总数，平均数的一些基本操作

```JAVA
package com.hgu.DAO;

import com.hgu.utils.JDBCUtils;

import java.lang.reflect.Field;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.sql.*;
import java.util.ArrayList;

/**
 * 封装了对针对于数据表的通用的增删改查操作
 */
public abstract class BaseDAO<T> {

    private Class<T> clazz = null;
    {
        // 获取带泛型的父类
        Type genericSuperclass = this.getClass().getGenericSuperclass();
        // 获取运行时类的带泛型的父类的泛型
        ParameterizedType paramType = (ParameterizedType) genericSuperclass;
        // 获取泛型参数
        Type[] actualTypeArguments = paramType.getActualTypeArguments();
        clazz = (Class<T>) actualTypeArguments[0];

    }

    /**
     * 查询操作，可返回一到多条记录
     * @param connection
     * @param sql
     * @param args
     * @return
     */
    public ArrayList<T> searchList(Connection connection, String sql, Object ...args){
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

            // 执行
            resultSet = ps.executeQuery();

            // 获取元数据
            ResultSetMetaData metaData = resultSet.getMetaData();
            // 获取列数
            int columnCount = metaData.getColumnCount();

            ts = new ArrayList<T>();

            // 获取数据
            while(resultSet.next()){
                T t = clazz.getDeclaredConstructor().newInstance();
                for (int i = 0; i < columnCount; i++) {
                    // 获取数据
                    Object value = resultSet.getObject(i + 1);
                    // 获取列名
                    String columnLabel = metaData.getColumnLabel(i + 1);

                    // 进行反射赋值
                    Field field = clazz.getDeclaredField(columnLabel);
                    field.setAccessible(true);
                    field.set(t, value);
                }
                ts.add(t);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            // 关闭资源
            JDBCUtils.closeConnection(null,ps,resultSet);
        }
        return ts;
    }

    /**
     * 获取一个实例
     * @param connection
     * @param sql
     * @param args
     * @return
     */
    public T searchInstance(Connection connection, String sql, Object ...args){
        PreparedStatement ps = null;
        ResultSet resultSet = null;
        T t = null;
        try {
            // 预编译sql语句
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

            // 获取数据
            t = clazz.getDeclaredConstructor().newInstance();
            if(resultSet.next()){
                for (int i = 0; i < columnCount; i++) {
                    // 获取数据
                    Object value = resultSet.getObject(i + 1);
                    // 获取列名
                    String columnLabel = metaData.getColumnLabel(i + 1);

                    // 进行反射赋值
                    Field field = clazz.getDeclaredField(columnLabel);
                    field.setAccessible(true);
                    field.set(t, value);
                }
            }
            return t;
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            // 关闭资源
            JDBCUtils.closeConnection(null,ps,resultSet);
        }
    }

    /**
     * 增删改操作
     * @param connection
     * @param sql
     * @param args
     */
    public void upDate(Connection connection,String sql, Object ...args) {
        PreparedStatement ps = null;
        try {
            // 预编译SQL，返回PreparedStatement
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for(int i = 0; i < args.length; i++){
                ps.setObject(i+1,args[i]);
            }
            // 执行SQL语句
            ps.execute();
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            // 关闭资源信息
            // 不关闭连接，只关闭预编译的sql语句
            JDBCUtils.closeConnection(null,ps);
        }
    }

    public <E> E getValue(Connection connection, String sql, Object ...args){
        PreparedStatement ps = null;
        ResultSet resultSet = null;
        try {
            // 预编译
            ps = connection.prepareStatement(sql);
            // 填充占位符
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i+1, args[i]);
            }
            // 执行语句
            resultSet = ps.executeQuery();

            if(resultSet.next()){
                return (E) resultSet.getObject(1);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        } finally {
            JDBCUtils.closeConnection(null, ps, resultSet);
        }
        return null;
    }
}

```



## xxxDAO 接口

针对xxx对应的类进行增删改查操作，以及一些获取特殊值的操作

```JAVA
package com.hgu.DAO.inter;

import com.hgu.pojo.Customers;

import java.sql.Connection;
import java.sql.Date;
import java.util.List;

public interface CustomerDAO {

    /**
     * 向customers表中添加一个记录
     * @param connection
     * @param customer
     */
    void insert(Connection connection, Customers customer);

    /**
     * 删除customers表中指定id的内容
     * @param connection
     * @param id
     */
    void deleteByID(Connection connection, int id);

    /**
     * 针对内容中customer中的内容修改表中指定的记录
     * @param connection
     * @param customer
     */
    void update(Connection connection, Customers customer);

    /**
     * 针对执行ID获取指定内容
     * @param connection
     * @param id
     * @return
     */
    Customers getCustomerByID(Connection connection, int id);


    /**
     * 获取指定表中的所有内容
     * @param connection
     * @return
     */
    List<Customers> getALL(Connection connection);

    /**
     * 获取指定表中的数量
     * @param connection
     * @return
     */
    long getCount(Connection connection);

    /**
     * 获取Customers表中最大的生日信息
     * @param connection
     * @return
     */
    Date getMaxBirth(Connection connection);
}

```



## xxxDAOImpl

将接口中的操作具体化

```JAVA
package com.hgu.DAO;

import com.hgu.DAO.inter.CustomerDAO;
import com.hgu.pojo.Customers;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.sql.Connection;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

public class CustomerDAOImpl extends BaseDAO<Customers> implements CustomerDAO {


    @Override
    public void insert(Connection connection, Customers customer) {
        String sql = "INSERT INTO customers(name,email,birth) VALUES(?,?,?)";
        upDate(connection,sql,customer.getName(),customer.getEmail(),customer.getBirth());
    }

    @Override
    public void deleteByID(Connection connection, int id) {
        String sql = "DELETE FROM customers WHERE id = ?";
        upDate(connection, sql, id);
    }

    @Override
    public void update(Connection connection, Customers customer) {
        String sql = "UPDATE customers SET name=?,email=?,birth=? WHERE id = ?";
        upDate(connection, sql, customer.getName(),customer.getEmail(), customer.getBirth(), customer.getId());
    }

    @Override
    public Customers getCustomerByID(Connection connection, int id) {
        String sql = "SELECT id, name, email, birth FROM customers WHERE id = ?";
        Customers customers = searchInstance(connection, sql, id);
        return customers;
    }

    @Override
    public List<Customers> getALL(Connection connection) {
        String sql = "SELECT id, name, email, birth FROM customers";
        ArrayList<Customers> customers = searchList(connection, sql);
        return customers;
    }

    @Override
    public long getCount(Connection connection) {
        String sql = "SELECT COUNT(*) FROM customers";
        long value = getValue(connection, sql);
        return value;
    }

    @Override
    public Date getMaxBirth(Connection connection) {
        String sql = "SELECT MAX(birth) FROM customers";
        Date date = getValue(connection, sql);
        return date;
    }
}

```





# 数据库连接池

## JDBC数据库连接池的必要性

- 在使用开发基于数据库的web程序时，传统的模式基本是按以下步骤：　　
  - **在主程序（如servlet、beans）中建立数据库连接**
  - **进行sql操作**
  - **断开数据库连接**

- 这种模式开发，存在的问题:
  - 普通的JDBC数据库连接使用 DriverManager 来获取，每次向数据库建立连接的时候都要将 Connection 加载到内存中，再验证用户名和密码(得花费0.05s～1s的时间)。需要数据库连接的时候，就向数据库要求一个，执行完成后再断开连接。这样的方式将会消耗大量的资源和时间。**数据库的连接资源并没有得到很好的重复利用。**若同时有几百人甚至几千人在线，频繁的进行数据库连接操作将占用很多的系统资源，严重的甚至会造成服务器的崩溃。
  - **对于每一次数据库连接，使用完后都得断开。**否则，如果程序出现异常而未能关闭，将会导致数据库系统中的内存泄漏，最终将导致重启数据库。（回忆：何为Java的内存泄漏？）
  - **这种开发不能控制被创建的连接对象数**，系统资源会被毫无顾及的分配出去，如连接过多，也可能导致内存泄漏，服务器崩溃。 

## 数据库连接池技术

- 为解决传统开发中的数据库连接问题，可以采用数据库连接池技术。
- **数据库连接池的基本思想**：就是为数据库连接建立一个“缓冲池”。预先在缓冲池中放入一定数量的连接，当需要建立数据库连接时，只需从“缓冲池”中取出一个，使用完毕之后再放回去。

- **数据库连接池**负责分配、管理和释放数据库连接，它**允许应用程序重复使用一个现有的数据库连接，而不是重新建立一个**。
- 数据库连接池在初始化时将创建一定数量的数据库连接放到连接池中，这些数据库连接的数量是由**最小数据库连接数来设定**的。无论这些数据库连接是否被使用，连接池都将一直保证至少拥有这么多的连接数量。连接池的**最大数据库连接数量**限定了这个连接池能占有的最大连接数，当应用程序向连接池请求的连接数超过最大连接数量时，这些请求将被加入到等待队列中。

![1555593464033](https://s2.loli.net/2023/01/07/gpoiqzTOZ6wb2ma.png)

- **工作原理：**

![1555593598606](https://s2.loli.net/2023/01/07/nRP81hXpQKBmH3E.png)

- **数据库连接池技术的优点**

  **1. 资源重用**

  由于数据库连接得以重用，避免了频繁创建，释放连接引起的大量性能开销。在减少系统消耗的基础上，另一方面也增加了系统运行环境的平稳性。

  **2. 更快的系统反应速度**

  数据库连接池在初始化过程中，往往已经创建了若干数据库连接置于连接池中备用。此时连接的初始化工作均已完成。对于业务请求处理而言，直接利用现有可用连接，避免了数据库连接初始化和释放过程的时间开销，从而减少了系统的响应时间

  **3. 新的资源分配手段**

  对于多应用共享同一数据库的系统而言，可在应用层通过数据库连接池的配置，实现某一应用最大可用数据库连接数的限制，避免某一应用独占所有的数据库资源

  **4. 统一的连接管理，避免数据库连接泄漏**

  在较为完善的数据库连接池实现中，可根据预先的占用超时设定，强制回收被占用连接，从而避免了常规数据库连接操作中可能出现的资源泄露


## 多种开源的数据库连接池

- JDBC 的数据库连接池使用 javax.sql.DataSource 来表示，DataSource 只是一个接口，该接口通常由服务器(Weblogic, WebSphere, Tomcat)提供实现，也有一些开源组织提供实现：
  - **DBCP** 是Apache提供的数据库连接池。tomcat 服务器自带dbcp数据库连接池。**速度相对c3p0较快**，但因自身存在BUG，Hibernate3已不再提供支持。
  - **C3P0** 是一个开源组织提供的一个数据库连接池，**速度相对较慢，稳定性还可以。**hibernate官方推荐使用
  - **Proxool** 是sourceforge下的一个开源项目数据库连接池，有监控连接池状态的功能，**稳定性较c3p0差一点**
  - **BoneCP** 是一个开源组织提供的数据库连接池，速度快
  - **Druid** 是阿里提供的数据库连接池，据说是集DBCP 、C3P0 、Proxool 优点于一身的数据库连接池，但是速度不确定是否有BoneCP快
- DataSource 通常被称为数据源，它包含连接池和连接池管理两个部分，习惯上也经常把 DataSource 称为连接池
- **DataSource用来取代DriverManager来获取Connection，获取速度快，同时可以大幅度提高数据库访问速度。**
- 特别注意：
  - 数据源和数据库连接不同，数据源无需创建多个，它是产生数据库连接的工厂，因此**整个应用只需要一个数据源即可。**
  - 当数据库访问结束后，程序还是像以前一样关闭数据库连接：conn.close(); 但conn.close()并没有关闭数据库的物理连接，它仅仅把数据库连接释放，归还给了数据库连接池。



###  C3P0数据库连接池

#### 方式一

```JAVA
//使用C3P0数据库连接池的方式，获取数据库的连接：不推荐
public static Connection getConnection1() throws Exception{
	ComboPooledDataSource cpds = new ComboPooledDataSource();
	cpds.setDriverClass("com.mysql.jdbc.Driver"); 
	cpds.setJdbcUrl("jdbc:mysql://localhost:3306/test");
	cpds.setUser("root");
	cpds.setPassword("admin");
		
//	cpds.setMaxPoolSize(100);
	
	Connection conn = cpds.getConnection();
	return conn;
}
```



#### 方式二

```JAVA
//使用C3P0数据库连接池的配置文件方式，获取数据库的连接：推荐
private static DataSource cpds = new ComboPooledDataSource("helloc3p0");
public static Connection getConnection2() throws SQLException{
	Connection conn = cpds.getConnection();
	return conn;
}
```

其中，src下的配置文件为：【c3p0-config.xml】

```XML
<?xml version="1.0" encoding="UTF-8"?>
<c3p0-config>
    <named-config name="helloc3p0">
        <!-- 提供获取连接的4个基本信息 -->
        <property name="driverClass">com.mysql.jdbc.Driver</property>
        <property name="jdbcUrl">jdbc:mysql://localhost:3306/test</property>
        <property name="user">root</property>
        <property name="password">admin</property>

        <!-- 进行数据库连接池管理的基本信息 -->
        <!-- 数据库连接池中连接数不够时，c3p0一次性向数据库服务器中申请的链接的个数 -->
        <property name="acquireIncrement">5</property>
        <!-- c3p0数据库链接池中初始化连接数 -->
        <property name="initialPoolSize">10</property>
        <!-- c3p0数据库链接池中最少的连接数 -->
        <property name="minPoolSize">10</property>
        <!-- c3p0数据库链接池中最大的连接数 -->
        <property name="maxPoolSize">100</property>
        <!-- c3p0数据库链接池最多维护的Statement的个数 -->
        <property name="maxStatements">0</property>
        <!-- 每个连接中最多可以使用的Statement的个数 -->
        <property name="maxStatementsPerConnection">2</property>
    </named-config>
</c3p0-config>
```



### DBCP数据库连接池

- DBCP 是 Apache 软件基金组织下的开源连接池实现，该连接池依赖该组织下的另一个开源系统：Common-pool。如需使用该连接池实现，应在系统中增加如下两个 jar 文件：
  - Commons-dbcp.jar：连接池的实现
  - Commons-pool.jar：连接池实现的依赖库
- **Tomcat 的连接池正是采用该连接池来实现的。**该数据库连接池既可以与应用服务器整合使用，也可由应用程序独立使用。
- 数据源和数据库连接不同，数据源无需创建多个，它是产生数据库连接的工厂，因此整个应用只需要一个数据源即可。
- 当数据库访问结束后，程序还是像以前一样关闭数据库连接：conn.close(); 但上面的代码并没有关闭数据库的物理连接，它仅仅把数据库连接释放，归还给了数据库连接池。
- 配置属性说明

| 属性                       | 默认值 | 说明                                                         |
| -------------------------- | ------ | ------------------------------------------------------------ |
| initialSize                | 0      | 连接池启动时创建的初始化连接数量                             |
| maxActive                  | 8      | 连接池中可同时连接的最大的连接数                             |
| maxIdle                    | 8      | 连接池中最大的空闲的连接数，超过的空闲连接将被释放，如果设置为负数表示不限制 |
| minIdle                    | 0      | 连接池中最小的空闲的连接数，低于这个数量会被创建新的连接。该参数越接近maxIdle，性能越好，因为连接的创建和销毁，都是需要消耗资源的；但是不能太大。 |
| maxWait                    | 无限制 | 最大等待时间，当没有可用连接时，连接池等待连接释放的最大时间，超过该时间限制会抛出异常，如果设置-1表示无限等待 |
| poolPreparedStatements     | false  | 开启池的Statement是否prepared                                |
| maxOpenPreparedStatements  | 无限制 | 开启池的prepared 后的同时最大连接数                          |
| minEvictableIdleTimeMillis |        | 连接池中连接，在时间段内一直空闲， 被逐出连接池的时间        |
| removeAbandonedTimeout     | 300    | 超过时间限制，回收没有用(废弃)的连接                         |
| removeAbandoned            | false  | 超过removeAbandonedTimeout时间后，是否进 行没用连接（废弃）的回收 |



#### 方式一

```JAVA
public void testGetConnection() throws SQLException {
    // 创建DBCP的数据库连接池
    BasicDataSource source = new BasicDataSource();

    // 设置基本信息
    source.setDriverClassName("com.mysql.jdbc.Driver");
    source.setUrl("jdbc:mysql://localhost:3306/test");
    source.setUsername("root");
    source.setPassword("admin");

    // 设置其他相关属性
    source.setInitialSize(10);
    source.setMaxTotal(10);

    Connection connection = source.getConnection();
    System.out.println(connection);
}
```

#### 方式二

```JAVA
public void testGetConnection1() throws Exception {
    Properties pros = new Properties();
    FileInputStream is = new FileInputStream(new File("src/dbcp.properties"));
    pros.load(is);
    BasicDataSource source = BasicDataSourceFactory.createDataSource(pros);
    Connection connection = source.getConnection();
    System.out.println(connection);
}
```

方式二的配置文件

```properties
driverClassName=com.mysql.jdbc.Driver
url=jdbc:mysql://localhost:3306/test
username=root
password=admin
InitialSize=10
maxTotal=10
```

### Druid数据库连接池

Druid是阿里巴巴开源平台上一个数据库连接池实现，它结合了C3P0、DBCP、Proxool等DB池的优点，同时加入了日志监控，可以很好的监控DB池连接和SQL的执行情况，可以说是针对监控而生的DB连接池，**可以说是目前最好的连接池之一。**

```JAVA
public void testGetConnection() throws Exception {
    Properties pros = new Properties();
    FileInputStream is = new FileInputStream(new File("src/druid.properties"));
    pros.load(is);
    DataSource source = DruidDataSourceFactory.createDataSource(pros);
    Connection connection = source.getConnection();
    System.out.println(connection);

}
```

配置文件

```properties
url=jdbc:mysql://localhost:3306/test
username=root
password=admin
driverClassName=com.mysql.jdbc.Driver

InitialSize=10
maxTotal=10
```

- 详细配置参数：

| **配置**                      | **缺省** | **说明**                                                     |
| ----------------------------- | -------- | ------------------------------------------------------------ |
| name                          |          | 配置这个属性的意义在于，如果存在多个数据源，监控的时候可以通过名字来区分开来。   如果没有配置，将会生成一个名字，格式是：”DataSource-” +   System.identityHashCode(this) |
| url                           |          | 连接数据库的url，不同数据库不一样。例如：mysql :   jdbc:mysql://10.20.153.104:3306/druid2      oracle :   jdbc:oracle:thin:@10.20.149.85:1521:ocnauto |
| username                      |          | 连接数据库的用户名                                           |
| password                      |          | 连接数据库的密码。如果你不希望密码直接写在配置文件中，可以使用ConfigFilter。详细看这里：<https://github.com/alibaba/druid/wiki/%E4%BD%BF%E7%94%A8ConfigFilter> |
| driverClassName               |          | 根据url自动识别   这一项可配可不配，如果不配置druid会根据url自动识别dbType，然后选择相应的driverClassName(建议配置下) |
| initialSize                   | 0        | 初始化时建立物理连接的个数。初始化发生在显示调用init方法，或者第一次getConnection时 |
| maxActive                     | 8        | 最大连接池数量                                               |
| maxIdle                       | 8        | 已经不再使用，配置了也没效果                                 |
| minIdle                       |          | 最小连接池数量                                               |
| maxWait                       |          | 获取连接时最大等待时间，单位毫秒。配置了maxWait之后，缺省启用公平锁，并发效率会有所下降，如果需要可以通过配置useUnfairLock属性为true使用非公平锁。 |
| poolPreparedStatements        | false    | 是否缓存preparedStatement，也就是PSCache。PSCache对支持游标的数据库性能提升巨大，比如说oracle。在mysql下建议关闭。 |
| maxOpenPreparedStatements     | -1       | 要启用PSCache，必须配置大于0，当大于0时，poolPreparedStatements自动触发修改为true。在Druid中，不会存在Oracle下PSCache占用内存过多的问题，可以把这个数值配置大一些，比如说100 |
| validationQuery               |          | 用来检测连接是否有效的sql，要求是一个查询语句。如果validationQuery为null，testOnBorrow、testOnReturn、testWhileIdle都不会其作用。 |
| testOnBorrow                  | true     | 申请连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能。 |
| testOnReturn                  | false    | 归还连接时执行validationQuery检测连接是否有效，做了这个配置会降低性能 |
| testWhileIdle                 | false    | 建议配置为true，不影响性能，并且保证安全性。申请连接的时候检测，如果空闲时间大于timeBetweenEvictionRunsMillis，执行validationQuery检测连接是否有效。 |
| timeBetweenEvictionRunsMillis |          | 有两个含义： 1)Destroy线程会检测连接的间隔时间2)testWhileIdle的判断依据，详细看testWhileIdle属性的说明 |
| numTestsPerEvictionRun        |          | 不再使用，一个DruidDataSource只支持一个EvictionRun           |
| minEvictableIdleTimeMillis    |          |                                                              |
| connectionInitSqls            |          | 物理连接初始化的时候执行的sql                                |
| exceptionSorter               |          | 根据dbType自动识别   当数据库抛出一些不可恢复的异常时，抛弃连接 |
| filters                       |          | 属性类型是字符串，通过别名的方式配置扩展插件，常用的插件有：   监控统计用的filter:stat日志用的filter:log4j防御sql注入的filter:wall |
| proxyFilters                  |          | 类型是List，如果同时配置了filters和proxyFilters，是组合关系，并非替换关系 |



# Apache-DBUtils实现CRUD操作

## Apache-DBUtils简介

- commons-dbutils 是 Apache 组织提供的一个开源 JDBC工具类库，它是对JDBC的简单封装，学习成本极低，并且使用dbutils能极大简化jdbc编码的工作量，同时也不会影响程序的性能。

- API介绍：
  - org.apache.commons.dbutils.QueryRunner
  - org.apache.commons.dbutils.ResultSetHandler
  - 工具类：org.apache.commons.dbutils.DbUtils   



## 主要API的使用

### DbUtils

- DbUtils ：提供如关闭连接、装载JDBC驱动程序等常规工作的工具类，里面的所有方法都是静态的。主要方法如下：
  - **public static void close(…) throws java.sql.SQLException**：　DbUtils类提供了三个重载的关闭方法。这些方法检查所提供的参数是不是NULL，如果不是的话，它们就关闭Connection、Statement和ResultSet。
  - public static void closeQuietly(…): 这一类方法不仅能在Connection、Statement和ResultSet为NULL情况下避免关闭，还能隐藏一些在程序中抛出的SQLEeception。
  - public static void commitAndClose(Connection conn)throws SQLException： 用来提交连接的事务，然后关闭连接
  - public static void commitAndCloseQuietly(Connection conn)： 用来提交连接，然后关闭连接，并且在关闭连接时不抛出SQL异常。 
  - public static void rollback(Connection conn)throws SQLException：允许conn为null，因为方法内部做了判断
  - public static void rollbackAndClose(Connection conn)throws SQLException
  - rollbackAndCloseQuietly(Connection)
  - public static boolean loadDriver(java.lang.String driverClassName)：这一方装载并注册JDBC驱动程序，如果成功就返回true。使用该方法，你不需要捕捉这个异常ClassNotFoundException。

### QueryRunner类

- **该类简单化了SQL查询，它与ResultSetHandler组合在一起使用可以完成大部分的数据库操作，能够大大减少编码量。**

- QueryRunner类提供了两个构造器：
  - 默认的构造器
  - 需要一个 javax.sql.DataSource 来作参数的构造器

- QueryRunner类的主要方法：
  - **更新**
    - public int update(Connection conn, String sql, Object... params) throws SQLException:用来执行一个更新（插入、更新或删除）操作。
    - ......
  - **插入**
    - public <T> T insert(Connection conn,String sql,ResultSetHandler<T> rsh, Object... params) throws SQLException：只支持INSERT语句，其中 rsh - The handler used to create the result object from the ResultSet of auto-generated keys.  返回值: An object generated by the handler.即自动生成的键值
    - ....
  - **批处理**
    - public int[] batch(Connection conn,String sql,Object[][] params)throws SQLException： INSERT, UPDATE, or DELETE语句
    - public <T> T insertBatch(Connection conn,String sql,ResultSetHandler<T> rsh,Object[][] params)throws SQLException：只支持INSERT语句
    - .....
  - **查询**
    - public Object query(Connection conn, String sql, ResultSetHandler rsh,Object... params) throws SQLException：执行一个查询操作，在这个查询中，对象数组中的每个元素值被用来作为查询语句的置换参数。该方法会自行处理 PreparedStatement 和 ResultSet 的创建和关闭。
    - ...... 

- 测试

```java
// 测试添加
@Test
public void testInsert() throws Exception {
	QueryRunner runner = new QueryRunner();
	Connection conn = JDBCUtils.getConnection3();
	String sql = "insert into customers(name,email,birth)values(?,?,?)";
	int count = runner.update(conn, sql, "何成飞", "he@qq.com", "1992-09-08");

	System.out.println("添加了" + count + "条记录");
		
	JDBCUtils.closeResource(conn, null);

}
```

```java
// 测试删除
@Test
public void testDelete() throws Exception {
	QueryRunner runner = new QueryRunner();
	Connection conn = JDBCUtils.getConnection3();
	String sql = "delete from customers where id < ?";
	int count = runner.update(conn, sql,3);

	System.out.println("删除了" + count + "条记录");
		
	JDBCUtils.closeResource(conn, null);

}
```



### ResultSetHandler接口及实现类

- 该接口用于处理 java.sql.ResultSet，将数据按要求转换为另一种形式。

- ResultSetHandler 接口提供了一个单独的方法：Object handle (java.sql.ResultSet .rs)。

- 接口的主要实现类：

  - ArrayHandler：把结果集中的第一行数据转成对象数组。

  - ArrayListHandler：把结果集中的每一行数据都转成一个数组，再存放到List中。

  - **BeanHandler：**将结果集中的第一行数据封装到一个对应的JavaBean实例中。

  - **BeanListHandler：**将结果集中的每一行数据都封装到一个对应的JavaBean实例中，存放到List里。

  - ColumnListHandler：将结果集中某一列的数据存放到List中。

  - KeyedHandler(name)：将结果集中的每一行数据都封装到一个Map里，再把这些map再存到一个map里，其key为指定的key。

  - **MapHandler：**将结果集中的第一行数据封装到一个Map里，key是列名，value就是对应的值。

  - **MapListHandler：**将结果集中的每一行数据都封装到一个Map里，然后再存放到List

  - **ScalarHandler：**查询单个值对象

    

- 测试

```java
/*
 * 测试查询:查询一条记录
 * 
 * 使用ResultSetHandler的实现类：BeanHandler
 */
@Test
public void testQueryInstance() throws Exception{
	QueryRunner runner = new QueryRunner();

	Connection conn = JDBCUtils.getConnection3();
		
	String sql = "select id,name,email,birth from customers where id = ?";
		
	//
	BeanHandler<Customer> handler = new BeanHandler<>(Customer.class);
	Customer customer = runner.query(conn, sql, handler, 23);
	System.out.println(customer);	
	JDBCUtils.closeResource(conn, null);
}
```

```java
/*
 * 测试查询:查询多条记录构成的集合
 * 
 * 使用ResultSetHandler的实现类：BeanListHandler
 */
@Test
public void testQueryList() throws Exception{
	QueryRunner runner = new QueryRunner();

	Connection conn = JDBCUtils.getConnection3();
		
	String sql = "select id,name,email,birth from customers where id < ?";
		
	//
	BeanListHandler<Customer> handler = new BeanListHandler<>(Customer.class);
	List<Customer> list = runner.query(conn, sql, handler, 23);
	list.forEach(System.out::println);
		
	JDBCUtils.closeResource(conn, null);
}
```

```java
/*
 * 自定义ResultSetHandler的实现类
 */
@Test
public void testQueryInstance1() throws Exception{
	QueryRunner runner = new QueryRunner();

	Connection conn = JDBCUtils.getConnection3();
		
	String sql = "select id,name,email,birth from customers where id = ?";
		
	ResultSetHandler<Customer> handler = new ResultSetHandler<Customer>() {

		@Override
		public Customer handle(ResultSet rs) throws SQLException {
			System.out.println("handle");
//			return new Customer(1,"Tom","tom@126.com",new Date(123323432L));
				
			if(rs.next()){
				int id = rs.getInt("id");
				String name = rs.getString("name");
				String email = rs.getString("email");
				Date birth = rs.getDate("birth");
					
				return new Customer(id, name, email, birth);
			}
			return null;
				
		}
	};
		
	Customer customer = runner.query(conn, sql, handler, 23);
		
	System.out.println(customer);
		
	JDBCUtils.closeResource(conn, null);
}
```

```java
/*
 * 如何查询类似于最大的，最小的，平均的，总和，个数相关的数据，
 * 使用ScalarHandler
 * 
 */
@Test
public void testQueryValue() throws Exception{
	QueryRunner runner = new QueryRunner();

	Connection conn = JDBCUtils.getConnection3();
		
	//测试一：
//	String sql = "select count(*) from customers where id < ?";
//	ScalarHandler handler = new ScalarHandler();
//	long count = (long) runner.query(conn, sql, handler, 20);
//	System.out.println(count);
		
	//测试二：
	String sql = "select max(birth) from customers";
	ScalarHandler handler = new ScalarHandler();
	Date birth = (Date) runner.query(conn, sql, handler);
	System.out.println(birth);
		
	JDBCUtils.closeResource(conn, null);
}
```





# 总结



