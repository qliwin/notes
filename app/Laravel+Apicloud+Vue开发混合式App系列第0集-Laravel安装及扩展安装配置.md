## 这篇文章主要记录该项目所使用的后端PHP框架Laravel的安装和其周边扩展的使用，会随着后面扩展的增加而增加

## 安装Laravel

### 要安装laravel首先要知道什么是``composer``

1. 那什么是composer呢？

> Composer 是 PHP 的一个依赖管理工具。它允许你申明项目所依赖的代码库，它会在你的项目中为你安装他们。

如果你是前端开发者你应该使用过``npm``或者``yarn``,如果你是Ruby开发者你肯定使用过``gem``,如果你是Python开发者你应该会用过``Pip``，那如果你是PHP开发者你就应该了解并去使用``composer``了，``composer``就是PHP这门编程语言的包管理器，我们可以使用它来安装框架或者你项目所需的优秀的资源包，详细的使用请移步 [composer中文文档](http://docs.phpcomposer.com/)

2. 安装``composer``

因为我们使用的Windows操作系统，所以这里只简单说一下Windows环境下的composer的安装。
首先去 [composer官网下载地址](https://getcomposer.org/download/)下载最新版的安装文件，如下图
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd2jbvekmyj20z70apmy8)
安装过程中composer会提示你选择电脑中已安装的``php.exe``的可执行文件路径，如下图
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd2jf1seaoj20ks0fot92)
然后会提示你选择是否设置代理（因为众所周知的原因，国内访问国外的技术站比如``GitHub``等都会很慢，所以当我们使用包管理器的时候也经常遇到安装失败的问题，但是这里也可以不填，因为我们可以使用  [composer中国镜像站](https://pkg.phpcomposer.com/)来安装我们需要的扩展包），所以如下图的安装过程可以直接点下一步:
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd2jlpmcg3j20ks0fodga)
然后直接安装即可，安装过程如下图，在这个过程中要访问国外的站点下载资源，所以可能会有点慢，如果电脑上有翻墙软件的话，尽量开一下，避免浪费过多时间
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd2jmflad7j20ks0fodg1)
安装完成后会有下图的提示
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd2jpkm5x8j20ks0fo0us)
现在打开命令行工具，输入``composer``后会输出以下图开始的一堆介绍和使用方法，至此我们安装``composer``完成
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd2jsevv18j20g5071ab8)

3. 将composer配置中国镜像

上面也说到，因为一些众所周知的原因在国内访问国外站点会特别慢，更别说下载国外的资源了，当然如果你也可以24h翻墙，个人觉得太过奢侈，所以我们将安装好的composer配置上国内镜像站，具体的配置方式请移步 [composer中国镜像站](https://pkg.phpcomposer.com/),一般用户只需在终端执行如下命令即可
```bash
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```

## 安装Laravel

上面介绍完``composer``的安装，下面我们来说使用``composer``安装Laravel框架
安装Laravel有两种方式，1.通过 Laravel 安装工具 2.通过 Composer Create-Project 安装，我个人更喜欢第二种方式，所以下面也只简单介绍第二种安装Laravel的方式，更详细安装教程请参考 [laravel官方文档](https://laravel-china.org/docs/5.3/installation)

### 通过 Composer Create-Project方式 安装Laravel

通过这种方式安装laravel只需要执行一行命令即可

> composer create-project --prefer-dist laravel/laravel blog

这样机会在那你当前目录下创建一个目录为``blog``项目文件夹，里面便是新鲜出炉的laravel框架，我们也可以指定自己想建立的项目的名字，就可以直接把命令中的``blog``更换为你心仪的项目名称

通过这种方式安装的Laravel框架默认为最新版本(目前最新版为5.4)，如果你想安装指定版本的Laravel框架，只需要在你项目名称的后面指定已有版本号即可，比如我现在要创建一个5.3版本的blog项目，只需执行如下命令即可：
> composer create-project --prefer-dist laravel/laravel blog "5.3.*"

至此，laravel框架的安装简单记录结束，下面介绍一下项目使用的到laravel扩展包的安装、配置和使用


## 安装扩展

目前项目使用到的laravel扩展列表安装和配置如下

### 代码编辑器助手，用于生成代码提示文件,
> "barryvdh/laravel-ide-helper": "^2.3", 

点击进入[GitHub仓库地址](https://github.com/barryvdh/laravel-ide-helper)

- 安装和使用

1. 使用composer安装
> composer require barryvdh/laravel-ide-helper
2. 修改Laravel配置文件``app.php``
在``config/app.php``的``providers``配置项中添加如下配置：
> Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class,
3. 发布扩展的配置文件,
> php artisan vendor:publish --provider="Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider" --tag=config
4. 生成代码提示辅助文件
> php artisan ide-helper:generate
5. 为了方便后面每次安装新的扩展都需执行第4部的生成操作，我们可以在composer的配置文件``composer.json``中添加生成命令，添加的对应位置如下：
```json
"scripts":{
    "post-update-cmd": [
        "Illuminate\\Foundation\\ComposerScripts::postUpdate",
        "php artisan ide-helper:generate", // 将生成代码提示需要执行的命令添加到此处，后面每次安装扩展后，该命令会自动执行生成操作
        "php artisan ide-helper:meta",
        "php artisan optimize"
    ]
},
```

6. 更详细使用方法请移步 [LaravelIdeHelper官方文档](https://github.com/barryvdh/laravel-ide-helper/blob/master/readme.md)



### 解决使用apicloud构建page时使用浏览器测试会出现的跨域问题
> "barryvdh/laravel-cors": "^0.8.6", 

点击进入 [GitHub仓库地址](https://github.com/barryvdh/laravel-cors/),
我已经写了一篇关于这个扩展使用的文章和可能遇到的问题，链接地址 [Laravel-cors填坑手记](https://segmentfault.com/a/1190000008445102)



### 实现前后端分离后的用户认证
> "tymon/jwt-auth": "0.5.*", 

点击进入 [GitHub仓库地址](https://github.com/tymondesigns/jwt-auth/)

1. 安装
在``composer.json``添加依赖如下
```json
"require": {
    "tymon/jwt-auth": "0.5.*"
}
```
执行命令：
> composer update

2. 修改Laravel配置文件``app.php``
在``config/app.php``的``providers``配置项中添加如下配置：
> Tymon\JWTAuth\Providers\JWTAuthServiceProvider::class,

在``config/app.php``的``aliases``配置项中添加别名配置如下：
> 'JWTAuth' => 'Tymon\JWTAuth\Facades\JWTAuth'
> 'JWTFactory' => 'Tymon\JWTAuth\Facades\JWTFactory'

3. 发布配置文件
执行如下命令
> php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\JWTAuthServiceProvider"

4. 生成token加密钥匙串
执行如下命令
> php artisan jwt:generate

5. 使用

具体使用方法请见 [jwt-auth官方文档](https://github.com/tymondesigns/jwt-auth/wiki)






---
---
下篇文章将主要介绍本项目的前端实现即如何使用Apicloud快速构建一个支持双平台的app

>注：不管使用什么技术去做怎样的事情，一定要学会去看官方的技术文档，要学的不是哪一项技术而是学会如何更快的去适应并使用一项技术的能力
