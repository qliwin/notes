## 在Chrome中模拟微信内置浏览器

### 微信和QQ内置浏览器UA

- 安卓QQ内置浏览器UA:
> Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) > AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 > Chrome/37.0.0.0 Mobile Safari/537.36 V1_AND_SQ_5.3.1_196_YYB_D > QQ/5.3.1.2335 NetType/WIFI

- 安卓微信内置浏览器UA:
> Mozilla/5.0 (Linux; Android 5.0; SM-N9100 Build/LRX21V) > AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 > Chrome/37.0.0.0 Mobile Safari/537.36 > MicroMessenger/6.0.2.56_r958800.520 NetType/WIFI

- IOSQQ内置浏览器UA:
> Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) > AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 > QQ/5.2.1.302 NetType/WIFI Mem/28

- IOS微信内置浏览器UA:
> Mozilla/5.0 (iPhone; CPU iPhone OS 7_1_2 like Mac OS X) > AppleWebKit/537.51.2 (KHTML, like Gecko) Mobile/11D257 > MicroMessenger/6.0.1 NetType/WIFI

### 在Chrome添加UA

- 打开Chrome调试工具（F12），点击右上角竖着的三个点，如下图

![](http://ww3.sinaimg.cn/large/6aedb651gw1fazm90jatmj20bc09ggof.jpg)

- 打开后选择Setting，如下图

![](http://ww1.sinaimg.cn/large/6aedb651gw1fazma2xwtqj206n06ewew.jpg)

- 选择左边栏Devices，如下图

![](http://ww2.sinaimg.cn/large/6aedb651gw1fazmcukbx4j20b30a4752.jpg)

- 选择右边栏Add custom device

![](http://ww2.sinaimg.cn/large/6aedb651gw1fazmcukbx4j20b30a4752.jpg)

- 填写要模拟的设备，添加，如下图

![](http://ww4.sinaimg.cn/large/6aedb651gw1fazmhu5yg4j20br06v74o.jpg)