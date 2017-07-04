### 关于对象存存储

#### 什么是对象存储

对象存储，也叫做基于对象的存储，是用来描述解决和处理离散单元的方法的通用术语，这些离散单元被称作为对象。

#### 为什么使用对象存储

对象存储是云服务提供商面向企业和个人开发者提供的高可用，高稳定，强安全的云端存储服务。您可以在任何应用、任何时间、任何地点存储和访问任意类型的数据。


#### 什么是OSS

阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的海量、安全、低成本、高可靠的云存储服务。它具有与平台无关的RESTful API接口，能够提供99.99999999%的服务持久性。


### Laravel+OSS的使用

#### 官方SDK

阿里云官方给我们开发者提供了各大编程语言的SDK，详见[OSS官方SDK文档](https://help.aliyun.com/document_detail/52834.html?spm=5176.doc32099.6.664.06yR3F)

既然我们使用laravel就不推荐使用官方SDK，有前辈们基于官方SDK写了Laravel的扩展包[laravel-upload](https://github.com/tyua07/laravel-upload)

#### 关于laravel-upload

laravel-upload是(tyua07)[https://github.com/tyua07]基于国内各大对象云存储针对Laravel5.0以上版本写的扩展包，目前已支持七牛、又拍云、oss、cos，请参考[laravel-upload的readme](https://github.com/tyua07/laravel-upload)

#### 安装/配置laravel-upload扩展包

- 安装
```
composer require "yangyifan/upload:v0.2"
```

添加 `\Yangyifan\Upload\UploadServiceProvider::class` 到您项目 `config/app.php` 中。

- 配置

在 `config\filesystems.php` 中的 `disks` 数组下面加入以下配置
```
 'oss'   => [
            'driver'            => 'oss',
            'accessKeyId'       => '########', // 阿里云的accessid
            'accessKeySecret'   => '########', // 阿里云的accessKeySecret
            'endpoint'          => 'worthdaily-app.oss-cn-hangzhou.aliyuncs.com', // OSS外网域名或自定义的域名
            'isCName'           => true, // 是否使用cname,如果endpoint使用的是oss外网域名或或自定义域名，切记此致设置为true
            'securityToken'     => null,
            'bucket'            => 'worthdaily-app', // bucket 名字
            'timeout'           => '5184000',
            'connectTimeout'    => '10',
            'transport'         => 'http',//如果支持https，请填写https，如果不支持请填写http
            'max_keys'          => 1000,//max-keys用于限定此次返回object的最大数，如果不设定，默认为100，max-keys取值不能大于1000
        ],
```

然后将默认的存储介质改为`oss`如下
```
    /*
    |--------------------------------------------------------------------------
    | Default Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default filesystem disk that should be used
    | by the framework. The "local" disk, as well as a variety of cloud
    | based disks are available to your application. Just store away!
    |
    */

    'default' => 'oss',
```