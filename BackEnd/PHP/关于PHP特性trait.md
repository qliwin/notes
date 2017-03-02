### 什么是trait

自 PHP 5.4.0 起，PHP 实现了一种代码复用的方法，称为 trait。

Trait 是为类似 PHP 的单继承语言而准备的一种代码复用机制。Trait 为了减少单继承语言的限制，使开发人员能够自由地在不同层次结构内独立的类中复用 method。Trait 和 Class 组合的语义定义了一种减少复杂性的方式，避免传统多继承和 Mixin 类相关典型问题。

Trait 和 Class 相似，但仅仅旨在用细粒度和一致的方式来组合功能。 无法通过 trait 自身来实例化。它为传统继承增加了水平特性的组合；也就是说，应用的几个 Class 之间不需要继承。


### 简单示例

```php

// 定义一个获商品信息的trait
trait GetGoodsInfo {
    // 
    public function getPrice() {

    }
}

// 定义一个商品类,类里面使用定义的trait，就相当于在这个类里面定义了一个getPrice的方法
class Goods{
    use GetGoodsInfo;
}

```

### PHP官方文档关于``trait``的介绍

PHP中文文档 [Trait实现代码复用方法](http://www.php.net/manual/zh/language.oop5.traits.php)


### 在Laravel中增加Trait的坑

使用PHPStorm新建``Trait``文件时一定要选新建``PHP Class``选项，然后会弹出如下对话框
![](http://ww1.sinaimg.cn/large/6aedb651gy1fd896jxtytj20ll0abdg7)

如果在创建Trait文件时，没有选新建``PHP Class``选项而是选了新建``PHP File``选项，就算在新建的文件中加上命名空间在使用的时候还是会报错，报错这个trait无法找到