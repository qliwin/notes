##npm 使用介绍
NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：
> - 允许用户从NPM服务器下载别人编写的第三方包到本地使用。
> - 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
> - 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:
```
npm -v
3.10.3
```

### 升级
如果你安装的是旧版本的npm，可以很容易得通过npm 命令来升级，命令如下：
```
 sudo npm installnpm -g
```
如果是 Window 系统使用以下命令即可：
```
npm installnpm -g
```


### 使用npm 命令安装模块
npm 安装 Node.js 模块语法格式如下：
```
npm install <Module Name>
```
以下实例，我们使用npm 命令安装常用的 Node.js web框架模块 express:
```
npm install express
```
安装好之后，express 包就放在了工程目录下的 node_modules 目录中，因此在代码中只需要通过 require('express') 的方式就好，无需指定第三方包路径。
var express = require('express');


#### 1.全局安装与本地安装
npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如
```
npm install express          # 本地安装
npm install express -g       # 全局安装
```
如果出现以下错误：
>npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 

解决办法为：
```
npm config set proxy null
```

##### 1.1 本地安装
> - 将安装包放在 ./node_modules 下（运行npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行npm 命令的目录下生成 node_modules 目录。
> - 可以通过 require() 来引入本地安装的包。

##### 1.2 全局安装
> - 将安装包放在 /usr/local 下或者你 node 的安装目录。
> - 可以直接在命令行里使用。

如果你希望具备两者功能，则需要在两个地方安装它或使用npm link
你可以使用以下命令来查看所有全局安装的模块：
```
npm ls -g
```

##### 1.3 安装指定版本
默认安装的是最新版本，如果要安装指定版本则需在包名后面加@指定版本号，如下：
```
npm install gulp@3.9.1
```

##l## 2. 使用 package.json
package.json 位于模块的目录下，用于定义包的属性。

##### 2.1 Package.json 属性说明
> - "name"   - 包名
> - "version"  - 版本号
> - "author"   - 作者
> - "description"  - 包的描述
> - "dependencies"   - 包的依赖
> - "licenses"   - 包的许可证
> - "devDependencies"  - 包的开发依赖
> - "engines"  - 包的运行引擎
> - "homepage"   - 包的官网
> - "repository"   - 包的仓库，可以是 git 或 svn，git 可在 Github 上。
> - main - 字段是一个模块ID，它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express，然后用户安装它，然后require("express")。
> - keywords - 关键字

##### 2.2 将安装包写入生产环境的依赖
> -S, --save 安装包信息将加入到dependencies（生产阶段的依赖），例如：
```
npm install vue --save
```
package.json 文件的 dependencies 字段：
```
"dependencies": {
    "vue": "^2.0.1"
  }
```

##### 2.3 将安装包写入开发环境的依赖
> -D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它，例如：
```
npm install vue --save-dev
```
package.json 文件的 devDependencies字段：
```
"devDependencies": {
    "vue": "^2.0.1"
  }
```

###  模块依赖
项目对模块的依赖可以使用下面的 3 种方法来表示（假设当前版本号是 1.1.0 ）：

> 兼容模块新发布的补丁版本：~1.1.0、1.1.x、1.1
> 兼容模块新发布的小版本、补丁版本：^1.1.0、1.x、1
> 兼容模块新发布的大版本、小版本、补丁版本：*、x

### 卸载模块
我们可以使用以下命令来卸载 Node.js 模块。
```
npm uninstall express
```
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在

### 查看安装的模块
```
npm ls
```

### 检查模块是否已经过时
我们可以使用以下命令检查模块是否已经过时：
```
npm outdated express
```

### 更新模块
我们可以使用以下命令更新模块：
```
npm update express
```

### 搜索模块
使用以下来搜索模块：
```
npm search express
```

### 创建模块
创建模块，package.json 文件是必不可少的。我们可以使用npm 生成 package.json 文件，生成的文件包含了基本的结果。
```
npm init
```
命令执行后会出现很多提示输入，你需要根据你自己的情况输入。在最后输入 "yes" 后会生成 package.json 文件。
接下来我们可以使用以下命令在npm 资源库中注册用户（使用邮箱注册）：
```
npm adduser
Username: saboran
Password: 
Email: (this IS public) saboran@163.com
```

接下来我们就用以下命令来发布模块：
```
npm publish
```

如果你以上的步骤都操作正确，你就可以跟其他模块一样使用npm 来安装。


### 使用淘宝npm 镜像
大家都知道国内直接使用npm 的官方镜像是非常慢的，这里推荐使用淘宝npm 镜像。
淘宝npm 镜像是一个完整npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。
你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的npm
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

这样就可以使用 cnpm 命令来安装模块了：
```
 cnpm install [name]
```