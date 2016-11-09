#### 安装git后的操作


1. 设置Git的user name和email：
> git config --global user.name "linganmin"
> git config --global user.email "saboran@163.com"

2. 生成SSH密钥
> ssh-keygen -t rsa -C "saboran@163.com"


#### git常用命令

> git branch 查看本地所有分支
> git status 查看当前状态 
> git commit 提交 
> git branch -a 查看所有的分支
> git branch -r 查看远程所有分支
> git commit -am "init" 提交并且加注释 
> git remote add origin git@192.168.1.119:ndshow 添加远端服务器
> git push origin master 将文件给推到服务器上 
> git remote show origin 显示远程库origin里的资源 
> git checkout -b dev 建立一个新的本地分支dev
> git checkout dev 切换到本地dev分支
> git add -A 添加所有文件
> git rm 文件名(包括路径) 从git中删除指定文件
> git clone git://github.com/schacon/grit.> git 从服务器上将代码给拉下来
> git config --list 看所有用户
> git rm [file name] 删除一个文件
> git add [file name] 添加一个文件到> git index
> git log 看你commit的日志
> git diff 查看尚未暂存的更新
---------------------------------------------------------
> git remote add origin git@github.com:username/Hello-World.git
> git push origin master 将本地项目给提交到服务器中
> git pull 本地与服务器端同步
> git fetch 相当于是从远程获取最新版本到本地，不会自动merge
> git checkout branch_1.0/master 切换到branch_1.0/master分支
