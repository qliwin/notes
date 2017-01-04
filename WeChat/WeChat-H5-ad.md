## 微信H5活动页面相关

### 设计稿尺寸

去除微信导航栏及手机自带导航栏高度后，设计稿尺寸
> 1080X1698


### 正常全屏手机设计尺寸

屏幕分辨率: 1080 X 1920
屏幕比例：9 ：16

> 推荐设计稿尺寸（沉浸式，即包含导航栏）为：


### 解决ios下的微信打开的页面背景音乐无法自动播放

在做各种HTML5场景页面的时候，插入背景音乐是一个很普遍的需求。我们都知道，IOS下的safari是无法自动播放音乐的，以至一直以来造成一种错误的认识，iso是无法自动播放媒体资源的。直到微信火爆起来，我们发现IOS的微信里面打开的页面却可以实现自动播放。但是，但是....最近的项目，又发现了一个头疼的问题。部分的IOS微信，打开有自动播放背景音乐的页面没有声音！！最头疼的是同款机子，相同的IOS系统，相同的微信版本！！没错，前端就是要经常这么折腾的，同一个问题，你以为找到了最终的解决方案，但是各种浏览器更新快速，昨天没问题，也许今天就有问题了。还好，这个问题暂时找到原因了，详情请看下文。

#### 通常背景音乐的处理方法

```html
<audio id="Jaudio" class="media-audio" src="http://game.163.com/weixin/gfxm3_gc/images/bg.mp3" autoplay preload loop="loop"></audio >
```
正常来说，以上代码在安卓和大部分IOS机子的微信是可以播放的（不包括Safari），但是部分iPhone手机的微信端是不能播放的

那代码有办法解决这少部分用户呢？如何解决呢？

答案的关键就是微信的WeixinJSBridgeReady事件。这个是微信自带提供的事件，测试发现，上面说的少部分的机子微信只要做微信ready后执行播放，就可以用代码实现自动播放功能了！具体代码请看下面：

```html
<audio id="Jaudio" class="media-audio" src="http://game.163.com/weixin/gfxm3_gc/images/bg.mp3" preload loop="loop"></audio >
function audioAutoPlay(id){
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
    }, false);
}
audioAutoPlay('Jaudio');
```

### 综合解决音乐自动播放方法

```html
<audio id="Jaudio" class="media-audio" src="http://game.163.com/weixin/gfxm3_gc/images/bg.mp3" preload loop="loop"></audio >
function audioAutoPlay(id){
    var audio = document.getElementById(id),
        play = function(){
        audio.play();
        document.removeEventListener("touchstart",play, false);
    };
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {//微信
       play();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {//易信
              play();
        }, false);
    document.addEventListener("touchstart",play, false);
}
audioAutoPlay('Jaudio');
```