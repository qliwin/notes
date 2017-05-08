### Go语言暴力入门1

> 程序开发人员，不拘泥于语言与技术，合适和够用是最完美的追求，2017.05.04开始学习Go语言。

> 个人网站：http://www.linganmin.cn


#### Go语言简介

Go 是一个开源的编程语言，它能让构造简单、可靠且高效的软件变得容易。
Go是从2007年末由Robert Griesemer, Rob Pike, Ken Thompson主持开发，后来还加入了Ian Lance Taylor, Russ Cox等人，并最终于2009年11月开源，在2012年早些时候发布了Go 1稳定版本。现在Go的开发已经是完全开放的，并且拥有一个活跃的社区。

#### 安装Go语言环境

> 请自行Google/Baidu，或者参考官网：


#### 第一个Go程序

```go
package main // 给包命名

import "fmt" // 引入fmt包，告诉 Go 编译器这个程序需要使用 fmt 包（的函数，或其他元素）

/**
 * main函数 
 * main 函数是每一个可执行程序所必须包含的，
 * 一般来说都是在启动后第一个执行的函数
 * （如果有 init() 函数则会先执行该函数）
 */
func main() {
    fmt.Println("Hello, World!")
}

```

#### 执行Go程序

```bash
go run [编写的go程序文件]

// 例如
go run demo.go
```

#### Go语言基础语法

- 行分隔符

在 Go 程序中，一行代表一个语句结束。每个语句不需要像 C 家族中的其它语言一样以分号`;` 结尾，因为这些工作都将由 Go 编译器自动完成。
如果你打算将多个语句写在同一行，它们则必须使用 `;`人为区分，但在实际开发中并不鼓励这种做法。

- 注释

注释不会被编译，每一个包应该有相关注释。
单行注释是最常见的注释形式，你可以在任何地方使用以 `//` 开头的单行注释。多行注释也叫块注释，均已以 `/*` 开头，并以 `*/` 结尾。

```go
// 这是单行注释写法

/**
 * 这是块注释写法
 */
```

- 标识符

标识符用来命名变量、类型等程序实体。一个标识符实际上就是一个或是多个字母(A~Z和a~z)数字(0~9)、下划线_组成的序列，但是第一个字符必须是字母或下划线而不能是数字。

> 根据以往其他语言编程经验，推荐使用`驼峰法`命名

- 关键字

下面列举了 Go 代码中会使用到的 25 个关键字或保留字：

```
break|default|func|interface|select
case|defer|go|map|struct
chan|else|goto|package|switch
const|fallthrough|if|range|type
continue|for|import|return|var
```

> 除了以上介绍的这些关键字，Go 语言还有 36 个预定义标识符：

```
append|bool|byte|cap|close|complex|complex64|complex128|uint16
copy|false|float32|float64|imag|int|int8|int16|uint32
int32|int64|iota|len|make|new|nil|panic|uint64
print|println|real|recover|string|true|uint|uint8|uintptr
```

程序一般由`关键字`、`常量`、`变量`、`运算符`、`类型`和`函数`组成
程序中可能会使用到这些分隔符：括号 `()`，中括号 `[]` 和大括号 `{}`
程序中可能会使用到这些标点符号：`.`、`,`、`;`、`:` 和`…`

- Go语言的空格

Go 语言中变量的声明必须使用空格隔开，如：

```go
var age int;
```

#### Go语言数据类型


在 Go 编程语言中，数据类型用于声明函数和变量。
数据类型的出现是为了把数据分成所需内存大小不同的数据，编程的时候需要用大数据的时候才需要申请大内存，就可以充分利用内存。

- 布尔型 bool
> 布尔型的值只可以是常量 true 或者 false。一个简单的例子：var a bool = fale

- 数字类型 int/float
> 整型 `int` 和浮点型 `float`，Go 语言支持整型和浮点型数字，并且原生支持复数，其中位的运算采用补码。

- 字符串类型 string
> 字符串就是一串固定长度的字符连接起来的字符序列。Go的字符串是由单个字节连接起来的。Go语言的字符串的字节使用UTF-8编码标识Unicode文本。

- 派生类型
    
    - 指针类型(Pointer)
    - 数组类型 (array)
    - 结构化类型(struct)
    - Channel类型
    - 函数类型
    - 切片类型
    - 接口类型(interface)
    - Map 类型


