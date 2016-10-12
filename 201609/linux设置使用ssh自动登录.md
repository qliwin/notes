#### 设置linux使用ssh自动登录

1. 个人PC安装git软件包

2. 运行git生成ssh密钥
> ssh-keygen -t rsa -C "saboran@163.com"

3. 在linux中执行命令切换道.ssh目录
> cd ~/.ssh/

4. 新建文件authorized_keys，将自己电脑生成的id_rsa.pub文件中的内容追加到authorized_keys中
> vim authorized_keys

5. 之后便可这样连接linux
> ssh root@115.28.150.129