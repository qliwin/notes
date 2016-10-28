### Yii2.0+的一些基础概念

> Yii是一个纯面向对象的框架。因此，本章主要介绍Yii中有关面向对象的基础知识：属性（property）、事件（event）、行为（behavior）等

#### 对象（Object）和组件(Component)
 Yii几乎所有的核心类都派生于（继承自） yii\base\Component

- 对象（Object）
比较轻量级些，通过getter和setter定义了类的属性（property）

- 组件（Component）
Component派生自Object，并支持事件（event）和行为（behavior）
因此，Component类具有三个重要的特性：
    + 属性（property）
    + 事件（event）
    + 行为（behavior）

#### 属性（Property）
1. 属性和成员变量
属性用于表明类的状态，从访问的形式上看，属性和成员变量没有区别，属性和成员变量的关系在于：
    - 成员变量是属性，而属性不一定是成员变量。但一般情况下，属性会由某个或某些成员变量来表示，这些成员变量一般是私有的
    - 成员变没有读写权限，而属性可以指定只读或只写。
    - 成员变量不对读出和写入做任何处理，而属性可以。

在Yii中，由 yii\base\Object 提供了对属性的支持，因此，如果要使你的类支持属性，必须继承自 yii\base\Object 。Yii中属性是通过PHP的魔法函数 __get() __set() 来产生作用的。

在访问和写入对象的一个不存在的变量时，__get()和__set()会被自动调用，Yii正是利用了这一点从而提供了对属性的支持。

2. 实现属性的三个步骤
    - 继承yii\base\Object
    - 声明一个用于保存该属性的私有成员变量
    - 提供getter或setter函数，或两者都提供，用于访问和修改上面提到的私有成员变量，如果只提供getter，那么该属性为只读属性，只提供setter，则为只写属性。
3. Object的其他与属性相关的方法
除了__get()和__set之外，yii\base\Object还提供了很多方法便于使用属性
    - __isset()：用于测试属性值是否为null，会在isset($object->property)时被自动调用，该属性需要相应的getter
    - __unset()：用于将属性值设置为null，在unset($object->property)时被自动调用，该属性需要相应的setter
    - hasProperty()：用于测试是否有某个属性。如果hasProperty()的参数默认为true，那么只要具有同名的成员变量也认为具有该属性
    - canGetProperty：测试一个属性是否可读
    - canSetProperty：测试一个属性是否可写



#### 事件（Event）




#### 行为(Behavior)