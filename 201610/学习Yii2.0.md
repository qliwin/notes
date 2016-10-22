### 学习Yii2.0

#### 通过composer安装框架

1. 安装composer
> composer中文站：http://www.phpcomposer.com/

2. 安装composer Asset插件
```
php composer.phar global require "fxp/composer-asset-plugin:^1.2.0"
```
3. 安装YII2.0程序模板（以Yii2.0.9为例）
- 基础模板
```
php composer.phar create-project yiisoft/yii2-app-basic basic 2.0.9
```
- 高级模板
```
php composer.phar create-project yiisoft/yii2-app-advanced advanced 2.0.9
```

#### 初始化（高级模板）

1. 进入安装目录，执行  php init 进行项目初始化
2. 配置文件目录：/common/config/main.php
3. 本地数据库配置文件目录：/common/config/main-local.php
4. 配置URL规则
进入前后台对应站点配置文件目录，即：backend/config/main.php,/frontend/config/main.php 找到如下代码，去掉注释的代码就ok了
```
'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
            ],
        ],
```
5. 重写URL，去掉URL中的index.php（需要开启apache的rewrite模块）,然后在前后台的入口文件中加入.htaccess,文件内容如下
```
Options +FollowSymLinks
IndexIgnore */*


RewriteEngine on


# if a directory or a file exists, use it directly
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d


# otherwise forward it to index.php
RewriteRule . index.php
```


#### 后台用户添加和登录
1. 后台模板AdminLTE的整合
AdminLTE是一个基于bootstrap开发的后台模板，具有很多炫酷吊炸天的控件和效果，非常适合作为网站后台管理的模板。
- 使用composer安装
```
composer require dmstr/yii2-adminlte-asset "2.*"
```
安装完成之后，我们就可以使用了。由于菜单配置项在vendor目录下，我们不能随便修改，所以我吗可以直接copy示例的代码使用。copy整个vendor/dmstr/yii2-adminlte-asset/example-views/yiisoft/yii2-app下的layouts和site到backend/views，覆盖原始文件。

2. 创建后台管理员Admin数据表
```Sql
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `auth_key` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password_hash` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password_reset_token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` smallint(6) NOT NULL DEFAULT '10',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `password_reset_token` (`password_reset_token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

```
