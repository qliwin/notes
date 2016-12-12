## git/github创建新分支


### 创建新的git仓库

```bash
git init # 初始化

git add readme.md # 添加新文件

git commit -m "some description" 

git remote add origin  git@github.com:linganmin/learn-laravel5.3-wanli.git  # 添加远端仓库地址

git push -u origin master # 提交到远端
```

### 在新仓库中创建分支

```bash
git branch newbranch # 在本地创建分支

git checkout newbranch # 切换到新分支

git push origin newbranch # 将新分支提交到远端

git branch -d newbranch # 删除本地分支

git psuh origin :newbranch # 删除远端分支，分支前的冒号代表删除

```