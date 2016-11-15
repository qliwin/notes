### XX-Net

1. 集成GoAgent、GoGoTest等扫描IP，省事省力
2. Web界面，人性化交互，傻瓜易用
3. 内置了公共 appid, 方便新手
4. 方便易用的细节、细节提示

而且支持：Window（xp & 7 & 8 & 10）、Linux以及Mac
以下只介绍如何在ubuntu（14.04）)使用：

#### 下载：

> https://github.com/XX-net/XX-Net/blob/master/code/default/download.md

#### 解压：

下载稳定版得到XX-Net-3.2.7.zip，解压
unzip XX-Net-3.2.7.zip

#### 前期工作:

自动导入证书，需安装 libnss3-tools 包
sudo apt-get install libnss3-tools 
没有安装PyGtk的，需要先安装gtk：
sudo apt-get install python-gtk2 

#### 安装启动：

cd到XX-Net解压的目录地址，第一次启动, 请用sudo ./start.sh, 以安装CA证书
sudo ./start.sh 
之后将启动终端，并打开浏览器显示（URL为：127.0.0.1:8085 ）：