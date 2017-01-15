### centos7最小化安装下搭建lamp服务环境


#### 最小化安装centos7之后的配置
停止firewall
```
systemctl stop firewalld.service
```
禁止firewall开机启动
```
systemctl disable firewalld.service
```
安装iptables防火墙
```
yum install iptables-services
```
编辑防火墙配置文件
```
vi /etc/sysconfig/iptables
```
添加下面到默认的22端口这条规则的下面
```
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 8080 -j ACCEPT
-A INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT
-A INPUT -m state --state NEW -m udp -p udp --dport 161 -j ACCEPT
```
最后重启防火墙使配置生效
```
systemctl restart iptables.service
```
设置防火墙开机启动
```
systemctl enable iptables.service
```
#### 关闭SELINUX
编辑selinux的配置文件
```
vi /etc/selinux/config
```
注释掉下面两行
```
SELINUX=enforcing
SELINUXTYPE=targeted
```
增加一行
```
SELINUX=disabled
```
重启
```
reboot
```
#### 安装工具
下载工具
```
yum install -y wget
```
vim编辑器
```
yum install –y vim
```
yum 升级：
```
yum update
```
其他工具
```
yum install net-tools
yum install -y gcc gcc-c++
```
***

#### 安装Apache

1. apr-1.5.2.tar.gz
```
tar zxvf apr-1.5.2.tar.gz
cd apr-1.5.2
./configure --prefix=/usr/local/apr
make
make install
```
2. apr-util-1.5.4.tar.gz
```
tar zxvf apr-util-1.5.4.tar.gz
cd apr-util-1.5.4
./configure  --prefix=/usr/local/apr-util --with-apr=/usr/local/apr/bin/apr-1-config
make
make install
```
3. pcre-8.39.tar.gz
```
tar zxvf pcre-8.39.tar.gz
cd pcre-8.39
./configure --prefix=/usr/local/pcre
make
make install
```
4. httpd-2.4.9.tar.gz
```
tar zxvf httpd-2.4.9.tar.gz
cd httpd-2.4.9
./configure --prefix=/usr/local/apache2 --enable-so --enable-rewrite --enable-mods-shared=most --with-apr=/usr/local/apr --with-apr-util=/usr/local/apr-util --with-pcre=/usr/local/pcre
make
make install
```
5. 将Apache加入service服务
```
cp /usr/local/apache2/bin/apachectl /etc/init.d/httpd
```
增加执行权限
```
chmod +x /etc/init.d/httpd
```
编辑httpd
```
vim /etc/init.d/httpd
```
在第二行加入以下两段（带#号）
```
#chkconfig:2345 10 90
#description:Activates/Deactivates Apache Web Server
```
增加apache服务，增加后可以使用service httpd start/stop/restart
```
chkconfig --add httpd
```

#### 安装PHP
1. 安装依赖库
```
yum -y install libxml2 libxml2-devel openssl openssl-devel curl-devel libjpeg-devel libpng-devel freetype-devel libmcrypt-devel epel-release libmcrypt-devel
```
2. 装php
```
tar zxvf php-7.0.7
cd php-7.0.7
./configure \
--prefix=/usr/local/php7 \
--exec-prefix=/usr/local/php7 \
--bindir=/usr/local/php7/bin \
--sbindir=/usr/local/php7/sbin \
--includedir=/usr/local/php7/include \
--libdir=/usr/local/php7/lib/php \
--mandir=/usr/local/php7/php/man \
--with-config-file-path=/usr/local/php7/etc \
--with-mysql-sock=/var/run/mysql/mysql.sock \
--with-mcrypt=/usr/include \
--with-apxs2=/usr/local/apache2/bin/apxs \
--with-mhash \
--with-openssl \
--with-mysqli=mysqlnd \
--with-pdo-mysql=mysqlnd \
--with-gd \
--with-iconv \
--with-zlib \
--enable-zip \
--enable-inline-optimization \
--disable-debug \
--disable-rpath \
--enable-shared \
--enable-xml \
--enable-bcmath \
--enable-shmop \
--enable-sysvsem \
--enable-mbregex \
--enable-mbstring \
--enable-ftp \
--enable-gd-native-ttf \
--enable-pcntl \
--enable-sockets \
--with-xmlrpc \
--enable-soap \
--without-pear \
--with-gettext \
--enable-session \
--with-curl \
--with-jpeg-dir \
--with-freetype-dir \
--enable-opcache \
--enable-fpm \
--with-fpm-user=nginx \
--with-fpm-group=nginx \
--without-gdbm \
--disable-fileinfo
make -j `grep processor /proc/cpuinfo | wc -l`
make install
```
3. 配置文件和脚本
```
cp ./php.ini-production /usr/local/php7/etc/php.ini
cp ./sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
cp /usr/local/php7/etc/php-fpm.conf.default /usr/local/php7/etc/php-fpm.conf
cp /usr/local/php7/etc/php-fpm.d/www.conf.default /usr/local/php7/etc/php-fpm.d/www.conf
```
4. 添加php的环境变量
```
echo -e '\nexport PATH=/usr/local/php7/bin:/usr/local/php7/sbin:$PATH\n' >> /etc/profile && source /etc/profile
```
5. 设置PHP日志目录和php-fpm的运行进程ID文件（php-fpm.sock）目录
```
mkdir -p /var/log/php-fpm/ && mkdir -p /var/run/php-fpm && cd /var/run/ && chown -R nginx:nginx php-fpm
```
6. 修改session的目录配置
```
mkdir -p /var/lib/php/session
chown -R nginx:nginx /var/lib/php
```
7. 设置PHP开机启动
```
chmod +x /etc/init.d/php-fpm
chkconfig --add php-fpm
chkconfig php-fpm on
```
8. 编辑php.ini的时区设置
```
vim /usr/local/php/etc/php.ini
date.timezone =PRC
```

9. 配置apache使其支持php
```
vim /usr/local/apache/conf/httpd.conf
```
1)	在httpd.conf(Apache主配置文件)中增加：
```
AddType application/x-httpd-php .php
```
2)	找到下面这段话,在index.html 前面添加index.php
```
<IfModule dir_module>
    DirectoryIndex index.html
</IfModule>
```

#### 安装MySQL5.6.19
1. 安装cmake
```
tar zxvf cmake-2.8.11.2.tar.gz
cd cmake-2.8.11.2
./bootstrap
gmake
make && make install
```
2. 安装MySQL
安装依赖包
```
yum install ncurses-devel
yum-y install autoconf
```
编译mysql
```
tar -zxvf mysql-5.6.19.tar.gz
cd mysql-5.6.19
cmake -DCMAKE_INSTALL_PREFIX=/usr/local/mysql \
-DMYSQL_DATADIR=/usr/local/mysql/data \
-DDEFAULT_CHARSET=utf8 \
-DDEFAULT_COLLATION=utf8_general_ci
```
若第一次的配置错误，需要先删除当前mysql源码目录中的CMakeCache.txt （不是cmake源码目录中的），然后再重新进行cmake配置(执行上述代码)。
```
make
make install
```
删除系统默认的配置文件（如果默认没有就不用删除）
```
rm -rf /etc/my.cnf
```
3. 配置并初始化MySQL
增加mysql用户（同时会创建mysql组）
```
useradd  mysql
```
设置mysql的的权限
```
chmod +x /usr/local/mysql
chown -R mysql.mysql /usr/local/mysql
```
初始化MySQL数据库
```
/usr/local/mysql/scripts/mysql_install_db \
--user=mysql \
--basedir=/usr/local/mysql \
--datadir=/usr/local/mysql/data &
```
添加到/etc目录的软连接
```
ln -s /usr/local/mysql/my.cnf /etc/my.cnf
```
把mysql安装文件(除了data)的主人都改为root，避免（重复执行mysql初始化）数据库恢复为出厂设置。
```
chown -R root /usr/local/mysql
chown -R mysql /usr/local/mysql/data
```
后台运行mysql
```
/usr/local/mysql/bin/mysqld_safe --user=mysql &
```
查看mysql是否有启动
```
ps -A | grep mysql
```
自己测试
```
cd /usr/local/mysql/bin
./mysql
show databases ;
```
4. 配置开机启动项
将mysqld复制到开机启动配置文件
```
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
chmod 755 /etc/init.d/mysqld
chkconfig mysqld on
```
配置文件路径
```
vi /etc/rc.d/rc.local
```
增加以下两行
```
/usr/local/apache/bin/apachectl start
/usr/local/mysql/bin/mysqld_safe --user=mysql &
```
mysql更新后刷新权限的命令
```
flush privileges;
```
