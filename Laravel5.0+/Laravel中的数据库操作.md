## 使用查询构造器（query building）

### 获取结果集

1. get() : 返回包含结果集的Illuminate\Support\Collection，其中每一个结果都是PHP的StdClass对象实例,可以像访问对象的属性一样访问字段的值
```php
$res = DB::table('users')
        ->get();
```

2. first() : 返回单个StdClass对象
```php
// 获取第一条数据
$res = DB::table('users')
        ->first();
```

3. value() : 如果你不需要完整的一行，可以使用value方法从结果中获取单个值，该方法会直接返回指定列的值
```php
// 获取第一条数据的username字段的值
$res = DB::table('users')
        ->value('username');
```

4. pluck() : 返回指定列的单个列值的数组，还可以在返回数组中为列值指定以哪个列作为数组的键（该自定义键必须是该表的其它字段列名，否则会报错）
```php
// 获取username字段的值
$res = DB::table('users')
        ->pluck('username');

// 获取username字段的值，并以其对应id作为键
$res = DB::table('users')
        ->pluck('username','id');
```

5. chunck() : 该方法一次获取结果集的一小块，然后传递每一小块数据到闭包函数进行处理,可以通过从闭包函数中返回false来终止组块的运行
```php

```


#### 聚合函数

1. count() : 统计数据表的总记录数

2. max() : 获取指定字段的最大值

3. min() : 获取指定字段的最小值

4. avg() : 获取指定字段的平均值

5. sum() : 获取指定字段的所有数据的和


### 查询（Select）


### Where子句

#### 简单的where子句

语法： 
> where('字段名','比较操作符','参考值')

当第二个参数（比较操作符）为“=”时，可以省略

```php

// 1. 单个条件where子句例子
// 1.1
$res = DB::table('test')
        ->where('age','>=','15')
        ->get();

// 1.2
$res = DB::table('users')
        ->where('email','like','%@163%')
        ->get();


// 2. 多个条件where子句例子,条件中传递二维数组
// 2.1 同时满足多个条件
$res = DB::table('users')
        ->where([
            ['email','!=','null'],
            ['username','like','%saboran%']
        ])
        ->get();

// 2.2 满足两者或者多者之一的条件，orWhere()
$res = DB::table('users')
        ->where('username','like','%saboran%')
        ->orWhere('email','saboran@163.com')
        ->get();
```

#### 复合的where子句

1. whereBetween() / whereNotBetween() : 字段值在给定值之间 / 字段值不在给定指之间

语法：
> whereBetween('字段名','参考区间值') / whereNotBetween('字段名','参考区间值')

```php

// 1.1 获取指定字段在指定区间的数据
$res = DB::table('test')
        ->whereBetween('age',[0,15])
        ->get();

// 1.2 获取指定字段不在指定区间的数据
$res = DB::table('test')
        ->whereNotBetween('age',[0,15])
        ->get();

```

2. whereIn() / whereNotIn() ： 字段值在给定的数组中/字段值不在给定的数组中

语法：
> whereIn('字段','参考值数组') / whereNotIn('字段','参考值数组')

```php
// 2.1 获取指定字段在指定数组中的数据
$res = DB::table('test')
        ->whereIn('age',[15,20])
        ->get();

// 2.2 获取指定字段不在指定数组中的数据
$res = DB::table('test')
        ->whereNotIn('age',[15,20])
        ->get();
```

3. whereNull() / whereNotNull() : 字段值为null / 字段值不为null

语法：
> whereNull('字段名') / whereNotNull('字段名')

```php
// 3.1 获取指定字段为null的数据
$res = DB::table('test')
        ->whereNull('age')
        ->get();

// 3.2 获取指定字段不为null的数据
$res = DB::table('test')
        ->whereNotNull('age')
        ->get();
```

4. whereDate() / whereMonth() / whereDay() / whereYear() : 字段和指定日期 / 月份 / 天 / 年份 比较

语法：
> whereDate('字段名','日期')

```php
// 4.1 获取指定月份创建的数据

$res = DB::table('users')
        ->whereYear('created_at','2016')
        ->get();

```

5. whereColumn() : 第一个字段和第二个字段是否相等

语法：
> whereColumn('字段1','字段2') 

还可以在第二个参数传递一个比较运算符，用于判断,语法:
> whereColumn('字段1','比较运算符','字段2')

还可以通过传递数组参数进行多条件比较，语法：
> whereColumn([
    ['字段1-1','字段1-2'],
    ['字段2-1','>=','字段2-2']
])

```php
// 5.1 获取创建和更新时间相同的数据
$res = DB::table('users')
        ->whereColumn('created_at','updated_at')
        ->get();

// 5.2 获取更新时间大于创建时间的数据
$res = DB::table('users')
        ->whereColumn('created_at','<','updated_at')
        ->get();
```


### 获取结果集

1. 


### 新增

```php

//

```php

``` 1. 新增一条，返回Boolean值，成功为true，失败为false

$res = DB::table('users')->insert([
        'username' => 'linganMin',
        'password' => '123456',
        'email' => 'saboran@2016.com'
    ]);


// 2. 新增多条，返回Boolean值，成功返回true，失败返回false

$res = DB::table('users')->insert([
    [
        'username' => 'username',
        'password' => '123456',
        'email' => 'saboran@2017.com'
    ],
    [
        'username' => 'test',
        'password' => '123456',
        'email' => 'saboran@test.com'
    ]
]);


// 3. 新增一条，返回增加的主键字段值

$res = DB::table('users')->insertGetId([
            'username' => 'username',
            'password' => '123456',
            'email' => 'saboran@2017.com'
]);
```


### 更新
> 更新数据一定要带条件！！！

```php

// 1. 更新满足指定条件的指定字段为指定数据，返回受影响行数

// 1.1 更新一条
$res = DB::table('users')
        ->where('id',7)
        ->update([
            'username'=>'saboranMin'
        ]);

// 1.2 更新多条
$res = DB::table('users')
        ->where('id','>=',7)
        ->update([
            'password'=>'654321'
        ]);

// 2. 自增，返回受影响行数，可通过where增加自增的条件
// 2.1 自增，默认值，默认值为1
$res = DB::table('test')
        ->increment('age');

// 2.2 自增，指定值，指定字段后面增加一个指定值作为参数
$res = DB::table('test')
        ->increment('age',5);

// 3. 自减（和自增用法相同）
// 3.1 自减，默认值，默认值为1
$res = DB::table('test')
        ->decrement('age');

// 3.2 自减，指定值，指定字段后面增加一个指定值作为参数
$res = DB::table('test')
        ->decrement('age',5);

// 4. 自增和自减的同时，可以更新其他字段，只需在increment或decrement上增加第三个参数即可，返回受影响行数，如：
$res = DB::table('test')
        ->where('id',2)
        ->decrement('age',2,['username'=>'saboran']);
```


### 删除

```php

// 1.1 删除数据表中的所有数据,返回受影响行数
$res =DB::table('test')->delete();

// 1.2 删除指定主键的数据，返回受影响行数
$res = DB::table('test')->delete(6);

// 1.3 删除指定条件的数据，返回受影响行数
$res = DB::table('test')
        ->where('id','>',10)
        ->delete();

// 1.4 删除指定条件的数据（多个条件），返回受影响行数
$res = DB::table('test')
        ->whereRaw('id > 30 and age > 18')
        ->delete();


// 2.1 清空数据表(尽量不要使用)
$res = DB::table('test')->truncate();

```



### 条件

### 排序


### 聚合


### 表连接


### 联合查询


### 缓存查询