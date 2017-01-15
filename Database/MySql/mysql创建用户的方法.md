### MySQL创建用户的两种方法


#### 账号名称的构成

- 账号的组成方式：用户名+主机
- 用户名：16字符以内
- 主机名：可以主机名和IP地址，也可以使用通配符

> 通配符说明：192.168.1.%（表示ip地址为192.168.1段的所有IP地址都可以访问）


#### 通过CREATE USER命令进行创建用户

脚本：
```sql
CREATE USER 'username'@'host' [IDENTIFIED BY 'PASSWORD'] 
```

例子：
```sql
CREATE USER 'saboran'@'192.168.1.100' IDENTIFIED BY '123456';
```
> 说明：该方法创建出来的用户只有连接数据库的权限，需要后续添加权限


#### 通过GRANT命令创建用户

脚本：
```sql
GRANT all privileges on database_name.* to username@ip IDENTIFIED BY 'password' ;
```

实例：
```sql
-- 数据库：shop
-- 用户名：saboran
-- 密码：123456
-- ip: localhost
grant all privileges on shop.* to saboran@localhost identified by '123456';
```

#### 完成用户创建后，刷新系统权限表

```sql
flush privileges;
```