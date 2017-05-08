### centos7开启root的ssh登录

```
sudo vim /etc/ssh/sshd_config 
```
修改`PermitRootLogin`的值为`yes`


### 修改防火墙
1. 安装centos7选择基本安装,配置完网络后首先要先关闭firewall：
停止firewall
  
>systemctl stop firewalld.service

禁止firewall开机启动
  
>systemctl disable firewalld.service

2. 安装iptables防火墙
yum方式安装iptables
  
>yum install iptables-services

编辑防火墙配置文件
  
> vi /etc/sysconfig/iptables


#添加下面三句话到默认的22端口这条规则的下面
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT
-A INPUT -m state --state NEW -m udp -p udp --dport 161 -j ACCEPT
最后重启防火墙使配置生效

> systemctl restart iptables.service
设置防火墙开机启动
  
> systemctl enable iptables.service
 
3. 闭SELINUX
编辑selinux的配置文件

> vi /etc/selinux/config

```
#注释掉下面两行
#SELINUX=enforcing 
#SELINUXTYPE=targeted 
#增加一行
SELINUX=disabled
```
保存，关闭
ESC 
:wq 
重启系统
  
> shutdown -r now