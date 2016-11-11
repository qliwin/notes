### 关于Sublime text 3如何编辑less并转(编译)成css文件

今天开始学习使用less这个强大方便的前端工具，本来是考虑用koala（专门编辑less的软件）来使用less的，但是发现sublime编辑器也可以实现对less的编译及高亮显示代码，这样既能少用一个软件还能扩展sublime的功能，何乐而不为。

> 在sublime里安装好less（less是指在sublime中less语法高亮的插件）和less2css（less2css是将less文件编译成css的sublime插件），以下为具体安装步骤:

- Ctrl+Shift+p打开命令面板，输入install并在下拉选项中选中install package（前提是事先安装好sublime的插件管理插件package control），弹出新搜索框之后再输入要安装的插件，然后下拉出现对应插件，点击安装。

> 安装好插件后还不能编译，必须安装nodeJs，并将nodejs配置为系统全局变量

- 使用nodejs的包管理工具npm安装nodejs扩展插件less和扩展插件less-plugin-clean-css，具体安装命令如下：（我使用的而是全局安装，另外nodejs插件less和less-plugin-clean-css必须安装在同一个目录下，即都是全局安装或都是局部安装）
```
# 全局安装less（使用的是cnpm）
cnpm install -g less

# 全局安装less-pligin-clean-css
cnpm install -g less-plugin-clean-css
```

安装完后就可以愉快的使用sublime编辑less
