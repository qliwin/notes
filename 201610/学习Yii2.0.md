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