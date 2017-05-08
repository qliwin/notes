## 工欲善其事-打造漂亮的Go语言编辑器

### 关于作者
> 程序开发人员，不拘泥于语言与技术，目前主要从事PHP和前端开发，使用Laravel和VueJs，App端使用Apicloud混合式开发。合适和够用是永不停息的追求。2017.05.04开始在空闲时间学习Go语言

> 个人网站：http://www.linganmin.cn

> 最近刚写了一个手机在线播放的H5电影站：http://www.ifilm.ltd


### 关于Gogland

> Gogland 是`JetBrains`专门为Go语言开发的商业化IDE的代号，旨在为Go开发提供符合人体工程学的环境。新的IDE通过针对Go语言的编码协助和工具集成扩展了IntelliJ平台的诸多功能

目前`Gogland`还在开发中，已经发布了几版预发行版本，因为是预览版本所以，目前`Gogland`还是免费的哦


### 为什么是Gogland

因为笔者本身是做PHP开发的，（`请抛开语言之争，PHP很优秀，Go语言也是，任何一门语言存在即合理，合理是因为他们都有自己所擅长的领域，哈哈跑题了`），在做PHP开发时一直使用的就是`JetBrains`他们家的`PHPStorm`，后来写前端，写JS，写Vue的时候又试了他们家的专注前端的IDE`Webstorm`,也很喜欢。当前，不可否认，`sublime`和`VS code`之类是很优秀的编辑器，而且有丰富的第三方扩展，但是在编写稍微复杂的项目的时候可能就不是那么得心应手了，或者也许是笔者自己有对他们有偏见吧，个人喜好勿喷，哈哈。

鉴于此，在看了Go语言的第二天就去`JetBrains`官网看了看有没有专门为Go语言发布的IDE，刚好看到了还在预览版的`Gogland`

`Gogland`继承了`JetBrains`家族IDE中诸如database管理的众多优秀的功能，下面就开始安装吧


### 安装Gogland并安装Material风格主题

Gogland的介绍及下载页面：https://www.jetbrains.com/go/download

笔者使用的是Windows OS下载的是对应的.exe文件，下载完成双击一路安装下去

安装之后打开编辑器你有木有发现，默认的主题其实是不那么好看，笔者深深迷恋`material`主题风格，在用的所有编辑器都换成了该主题风格，包括`Sublime`和`VS code`,所以怎么会放过`Gogland`

- 将默认主题设置为`Darcula`

点击左上角的File选项，找到Settings点击，然后找到如下图的选项卡，在右边选项框内选择你喜欢的主题，个人推荐`Darcula`，然后点击ok,这个主题是IDE导航及选项的主题

![](http://ww1.sinaimg.cn/large/6aedb651gy1ffe9ysh4v5j20sb0j03z5.jpg)

- 安装`material`主题

依然是点击上面说到的那个Settings选项，然后Plugins选项点击后如下图，然后在右边输入框搜索`material`,在你没安装过该主题的时候会在中间出现一句提示``点击提示右边的在线搜索，然后弹出搜索结果，找到`Material theme UI `install，安装完成重启一下IDE就可以看到漂亮的IDE界面了


![](http://ww1.sinaimg.cn/large/6aedb651gy1ffe9znmf7lj20sg0jb74m.jpg)

![](http://ww1.sinaimg.cn/large/6aedb651gy1ffe9zzxsnfj20my0jdt9j.jpg)

![](http://ww1.sinaimg.cn/large/6aedb651gy1ffea4p3h5qj20by0a0749.jpg)