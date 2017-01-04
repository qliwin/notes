### VueJs全家桶之vue-resource跨域使用（jsonp）

> 总结使用VueJs，跨域请求jsonp的使用,服务端使用PHP

#### 1. JavaScript代码部分（为了方便使用cdn的源）
```
  <!-- 引入vuejs -->
  <script type="text/javascript" src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- 引入vue-resource -->
  <script type="text/javascript" src="https://unpkg.com/vue-resource@1.0.3/dist/vue-resource.min.js"></script>

  <!-- 处理代码部分 -->
  <script type="text/javascript">
  // 实例化一个Vue对象
    var vm = new Vue({
      
      el: '#app',

      data: function(){
        return {
          items: [],
        }
      },

      // VueJs2.0的构建钩子函数，取代了1.0版本的ready函数
      mounted: function(){
        // 发送jsonp请求
        this.$http.jsonp('http://localarticle.com/json.php').then( (response) => {
          // Do something to deal response data
          console.log(response);
          this.items = response.data;
        });
      }
    });
  </script>
```

#### 2. PHP代码部分内容
```PHP
// 接收jsonp请求时自动生成的回调函数名称
$callback = isset($_GET['callback']) ? trim($_GET['callback']) : ''; 


// 定义数组数据，实际业务中会是从数据库里获取到的数据
$info = [
      [
      'name'=>'Saboran',
      'age'=>22,
      'addr'=>'上海'
      ],
      [
      'name'=>'Eren',
      'age'=>23,
      'addr'=>'南京'
      ],
      [
      'name'=>'Echo',
      'age'=>21,
      'addr'=>'重庆'
      ],
];

// 将数据格式化成Json字符串
$data = json_encode($info);

// 拼接回调函数名称和json字符串，
// ！！！！注意！！！！
// 在拼接时回调函数名称前和拼接最后记得加上分号";"，防止前端接收到数据后出错，止于为什么加分号自己想
$res = ';' . $callback . '(' . $data . ');';

// 输出
echo $res;

```