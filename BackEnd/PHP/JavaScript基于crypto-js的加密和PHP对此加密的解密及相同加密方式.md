### JavaScript基于crypto-js的加密和PHP对此加密的解密及相同加密方式

> 最近使用php做了一个电影/电视剧在线播放的HTML5 的小站，使用到的是php的curl进行实时抓取，其中遇到了js加密的问题，遂Google解决之，才有了这篇总结。

#### 一波广告

个人主页：http://www.linganmin.cn
电影小站地址：http://www.ifilm.ltd


#### 先说js基于crypto-js的加密

CryptoJS是一个纯javascript写的加密类库,他的GitHub仓库地址 https://github.com/brix/crypto-js

> 在使用时我们需要引用该js文件，为了方便我引用了的CDN上的链接


上代码
```html
<script src="http://cdn.bootcss.com/crypto-js/3.1.9/crypto-js.js"></script>
<script>
var data = "en2JprK0nMyYgbd6dQO0O0OO0O0O" // 需要加密的字符串
var key_base="contentWindowHig"; // 加密秘钥的基值
var iv_base="contentDocuments"; // 加密所需iv基值
/**
 * 定义加密函数
 * @param  {[type]} a [形参，需要加密的值]
 * @return {[type]}   [加密后的值]
 */
 var get=function(a){
 	var key_hash=CryptoJS.MD5(key_base); 
 	var key=CryptoJS.enc.Utf8.parse(key_hash);
 	var iv=CryptoJS.enc.Utf8.parse(iv_base);
 	var res=CryptoJS.AES.encrypt(a,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding});
 	return res.toString()
 }

	console.log(get(data)) // tPYJv39iEbdFD/UqNejyvkLG8ATdifyfE+BDeld2jWk=
</script>

```

#### 再说PHP相同的加密与解密

为了文章的优雅，php将使用和js相同的变量命名

上代码
```php
// 定义变量
$data = "en2JprK0nMyYgbd6dQO0O0OO0O0O";
$key_base = "contentWindowHig";
$iv_base = "contentDocuments";

// 加密前处理
$key = md5($key_base);
$iv = $iv_base;

// 加密
$cryptText = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $data, MCRYPT_MODE_CBC, $iv);
$res = base64_encode($cryptText);

// 解密
$cryptText = base64_decode($res); 
$decode = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $cryptText, MCRYPT_MODE_CBC, $iv);

```