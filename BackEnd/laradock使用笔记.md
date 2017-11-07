## laradock 使用笔记

### 写在前面

最近用上了`laradock`来搭建环境和开发一个`laravel5.5`的项目，也顺带学习使用docker。

关于`laradock`的学习，请移步[官方文档](http://laradock.io/)


### mysql数据库连接的问题

今天踩了一个数据库连接的坑，记录之。

在`laravel`的配置文件`.env`中配置的数据库连接信息如下

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bbs
DB_USERNAME=root
DB_PASSWORD=root
```
执行数据库连接时报错如下：
```
SQLSTATE[HY000] [2002] Connection refused
```

当把`DB_HOST`改为`localhost`数据库连接报错又变成了这样
```
SQLSTATE[HY000] [2002] No such file or directory
```

- 原因
用`127.0.0.1`访问的是php容器，php容器里是没有mysql的

- 解决
```
DB_HOST=mysql
```

- 参考文档
http://laradock.io/getting-started/#usage


### 执行`php artisan`命令的问题

在使用laradock的时候想要执行`php artisan`相关命令，需要进入`Workspace容器`

```
# 找到Workspace容器名称
docker-compose ps

# 进入工作区容器
docker-compose exec workspace bash

# 运行你想要的
php artisan
composer update
phpunit
```