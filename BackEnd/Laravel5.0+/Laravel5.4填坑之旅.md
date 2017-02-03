## Laravel5.4填坑之旅-常见问题处理


### 数据库报错

在执行```php artisan migrate```进行数据库迁移时出现以下报错

![](http://ww1.sinaimg.cn/large/6aedb651gy1fcd2hc6brgj20fg05laa2.jpg)

> 原因：Laravel使用utf8mb4字符的默认设置，其中包括在数据库中存储“表情符号”的支持。如果您运行的MySQL版本小于5.7.7版本或MariaDB小于10.2.2版本，您可能需要手动配置迁移生成的默认字符串长度，以便MySQL为它们创建索引。

> 解决方法：可以通过调用这个配置Schema::defaultStringLength你的内法AppServiceProvider：
```php
use Illuminate\Support\Facades\Schema;

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    // 修改此项
    Schema::defaultStringLength(191); 
}
```
另外，您也可以使innodb_large_prefix你的数据库选项。有关如何正确启用此选项的说明，请参阅数据库[文档](https://github.com/laravel/docs/blob/5.4/migrations.md)。