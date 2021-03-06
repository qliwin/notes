#### 什么是https
> 引自[维基百科](http://www.tuicool.com/articles/6NJVVvq)
超文本传输安全协议（英语：Hypertext Transfer Protocol Secure，缩写：HTTPS）是一种网络安全传输协议。在计算机网络上，HTTPS经由超文本传输协议进行通信，但利用SSL/TLS来对数据包进行加密。HTTPS开发的主要目的，是提供对网络服务器的身份认证，保护交换数据的隐私与完整性。
HTTPS的主要思想是在不安全的网络上创建一安全信道，并可在使用适当的加密包和服务器证书可被验证且可被信任时，对窃听和中间人攻击提供合理的防护。

HTTPS的信任继承基于预先安装在浏览器中的证书颁发机构（如VeriSign、Microsoft等）（意即“我信任证书颁发机构告诉我应该信任的”）。因此，一个到某网站的HTTPS连接可被信任，当且仅当：
用户相信他们的浏览器正确实现了HTTPS且安装了正确的证书颁发机构；
用户相信证书颁发机构仅信任合法的网站；
被访问的网站提供了一个有效的证书，意即，它是由一个被信任的证书颁发机构签发的（大部分浏览器会对无效的证书发出警告）；
该证书正确地验证了被访问的网站（如，访问https://example时收到了给“Example Inc.”而不是其它组织的证书）；
或者互联网上相关的节点是值得信任的，或者用户相信本协议的加密层（TLS或SSL）不能被窃听者破坏。
HTTPS不应与在 RFC 2660 中定义的安全超文本传输协议（S-HTTP）相混淆。

#### http和https去区别

HTTP协议传输的数据都是未加密的，也就是明文的，因此使用HTTP协议传输隐私信息非常不安全，为了保证这些隐私数据能加密传输，于是网景公司设计了SSL（Secure Sockets Layer）协议用于对HTTP协议传输的数据进行加密，从而就诞生了HTTPS。简单来说，HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全。
HTTPS和HTTP的区别主要如下：

1. https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。
2. http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。
3. http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
4. http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。

#### https工作原理


客户端在使用HTTPS方式与Web服务器通信时有以下几个步骤，如图所示。
![](https://ws1.sinaimg.cn/large/6aedb651gy1fhckb2syzfj20pr0k5aao.jpg)

- 客户使用https的URL访问Web服务器，要求与Web服务器建立SSL连接。

- Web服务器收到客户端请求后，会将网站的证书信息（证书中包含公钥）传送一份给客户端。

- 客户端的浏览器与Web服务器开始协商SSL连接的安全等级，也就是信息加密的等级。

- 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站。

- Web服务器利用自己的私钥解密出会话密钥。

- Web服务器利用会话密钥加密与客户端之间的通信。

#### 关于TLS/SSL

> 传输层安全协议（英语：Transport Layer Security，缩写：TLS），及其前身安全套接层（Secure Sockets Layer，缩写：SSL）是一种安全协议，目的是为互联网通信，提供安全及数据完整性保障


#### 为什么要部署https

说到底，就是 https 更安全。甚至为了安全，一个专业可靠的网站， https 是必须的。 Firefox 和 Chrome 都计划将没有配置 SSL 加密的 http 网站标记为不安全（貌似 Firefox 50 已经这么干了），目前它们也正在联合其他相关的基金会与公司推动整个互联网 https 化，现在大家访问的一些主要的网站。如 Google 多年前就已经全部启用 https ，国内的淘宝、搜狗、知乎、百度等等也全面 https 了。甚至 Google 的搜索结果也正在给予 https 的网站更高的排名和优先收录权。


#### 怎么部署 https 呢

你只需要有一张被信任的 CA （ Certificate Authority ）也就是证书授权中心颁发的 SSL 安全证书，并且将它部署到你的网站服务器上。一旦部署成功后，当用户访问你的网站时，浏览器会在显示的网址前加一把小绿锁，表明这个网站是安全的，当然同时你也会看到网址前的前缀变成了 https ，不再是 http 了。


#### 怎么获得 SSL 安全证书

理论上，我们自己也可以签发 SSL 安全证书，但是我们自己签发的安全证书不会被主流的浏览器信任，所以我们需要被信任的证书授权中心（ CA ）签发的安全证书。而一般的 SSL 安全证书签发服务都比较贵，比如 Godaddy 、 GlobalSign 等机构签发的证书一般都需要20美金一年甚至更贵，不过为了加快推广 https 的普及， EEF 电子前哨基金会、 Mozilla 基金会和美国密歇根大学成立了一个公益组织叫 ISRG （ Internet Security Research Group ），这个组织从 2015 年开始推出了 Let’s Encrypt 免费证书。这个免费证书不仅免费，而且还相当好用，所以我们就可以利用 Let’s Encrypt 提供的免费证书部署 https 了

####  Let’s Encrypt 及 Certbot 简介

 Let’s Encrypt 是 一个叫 ISRG （ Internet Security Research Group ，互联网安全研究小组）的组织推出的免费安全证书计划。参与这个计划的组织和公司可以说是互联网顶顶重要的先驱，除了前文提到的三个牛气哄哄的发起单位外，后来又有思科（全球网络设备制造商执牛耳者）、 Akamai 加入，甚至连 Linux 基金会也加入了合作，这些大牌组织的加入保证了这个项目的可信度和可持续性。


#### Certbot 使用方法

Certbot 的官方网站是 https://certbot.eff.org/ ，打开这个链接选择自己使用的 web server 和操作系统，EFF 官方会给出详细的使用方法，如下图
![](https://ws1.sinaimg.cn/large/6aedb651gy1fhckotqlhhj20t10jsgmq.jpg)

#### 开始安装https

假设运行环境为centos7.1,Web 服务器是 Nginx 1.12.0(因为我的生产环境是),当前工作目录为 `/root`

1. 获取certbot客户端
```
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
```

2. 停止`nginx`yunx
```
service nginx stop
```

3. 生成证书
```
./certbot-auto certonly --standalone --email `你的邮箱地址` -d `你的域名地址`
```
当前网站有多个域名时需在后面增加，例如
```
./certbot-auto certonly --standalone --email `你的邮箱地址` -d `你的域名1` -d `你的域名2`
```

4. 查看生产的证书
```
tree /etc/letsencrypt/live/
```
5. 将证书用于nginx

在nginx网站配置文件中增加

```
 # TLS 基本设置
ssl_certificate /etc/letsencrypt/live/www.just4fun.site/fullchain.pem;#证书位置
ssl_certificate_key /etc/letsencrypt/live/www.just4fun.site/privkey.pem;# 证书位置
```
> 启动nginx
```
service nginx start
```

至此https配置完成


#### 证书续签
Let’s Encrypt 生成的免费证书为3个月时间，但是我们可以无限次续签证书

```
./certbot-auto renew 
```