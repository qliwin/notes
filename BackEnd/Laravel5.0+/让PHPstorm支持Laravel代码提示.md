## Laraval IDE 自动补全助手：Laravel IDE Helper Generator 

### 安装

1. 使用composer命令安装扩展包相关依赖
> composer require barryvdh/laravel-ide-helper

2. 安装完成后我们需要到config/app.php的providers选项中注册服务提供者 
> Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class,


### 自动生成Laravel门面对应的phpDoc

1. 我们使用如下命令生成包含补全信息的文件：
> php artisan ide-helper:generate

2. 为了后续方便，你也可以在composer.json文件中作如下配置：
```json
"scripts":{
    "post-update-cmd": [
        "php artisan clear-compiled",
        "php artisan ide-helper:generate",
        "php artisan optimize"
    ]
},
```

### 自动生成模型对应的phpDoc

1. 在使用本特性之前，需要先安装doctrine/dbal: ~2.3：
> composer require doctrine/dbal

如果不想自己编写模型属性，可以使用
> php artisan ide-helper:models

命令来基于数据表字段、关联关系以及getter和setter生成对应的PHPDoc，我们可以通过 *-write(-W)*     选项来编写模型文件的注释，也可以通过 *-nowrite(-N)*不做更改，可以通过 *-reset(-R)*选项忽略已存在的phpdoc，值增加新增的字段和关系。

默认情况下，app中的模型会被遍历，也可以指定哪个或哪些模型被使用：
> php artisan ide-helper:models Post User

还可以通过--dir选项遍历一个其他目录，例如：
> php artisan ide-helper:models --dir="app/model"

