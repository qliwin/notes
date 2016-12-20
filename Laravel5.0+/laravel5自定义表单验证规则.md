## 自定义表单验证规则

Laravel 提供了许多有用的验证规则。但你可能想自定义一些规则。注册自定义验证规则的方法之一，就是使用 Validator facade 中的 extend 方法，让我们在服务提供者中使用这个方法来注册自定义的验证规则：

> AppServiceProvider.php所在目录如下图

![](http://ww4.sinaimg.cn/large/6aedb651gw1faxatndhqnj207r075gm8.jpg)

> AppServiceProvider.php中代码如下
```php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
      
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

```

在boot方法中自定义验证闭包函数，自定义的验证闭包接收四个参数：要被验证的属性名称 $attribute，属性的值 $value，传入验证规则的参数数组 $parameters，及 Validator 实例，代码如下：

```php
 Validator::extend('foo', function($attribute, $value, $parameters, $validator) {

     // do something to deal $value ...
    
     // 返回处理后的值
     return $value == 'foo';
});
```

### 以下代码是增加一个自定义验证表单手机号的规则

```php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 增加验证手机号码方法

      \Validator::extend('phone',function($attribute,$value,$parameters,$validator){
            return preg_match('/^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\\d{8}$/',$value);
      });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}


```