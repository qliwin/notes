### Vue组件间的通信（非Vuex）

> 关于什么是组件和Vuejs的组件相关详细基础知识请移步官方文档[VueJs文档组件篇](https://cn.vuejs.org/v2/guide/components.html)，下面简单说一下Vuejs组件的基础知识

#### Vuejs组件简单入门

- 什么是组件
套用官方文档的上的话，来说就是
> 组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。

- 简单举例
  - 假想的需求

  假设现在我们要做一个类似如下图新闻列表,按照正常的前端开发我们就会简单的将其使用ul+li布局，然后写css样式，当其他地方也是有到的时候就自然而然的将这段代码复制过去，这样写肯定是没有问题的只是当这段代码被N多个地方复用了之后如果哪天要改一下结构我们就得每个地方都得找一遍改一下，就算是使用IDE进行全局替换这也显然不是优雅的解决方案，以此像Vuejs的组件化开发就基本上完美的解决了这个问题。
 ![](https://ws1.sinaimg.cn/large/6aedb651gy1fj2mip0dxmj20m01887wh.jpg)
  
  - 如何使用Vue组件化解决之

  我们可以将此新闻列表的html结构从中抽离出来成为一个组件，该组件有且仅有新闻列表的结构，也就是上面所说的ul+li的布局，然后在每个需要新闻列表渲染的父组件中将其引入，并由父组件将需要渲染的数据传递给子组件，子组件获取到父组件传递过来的数据进行页面渲染，这样不仅可以大大提高代码的优雅度还能为开发人员节省很多时间，比如当需求变更，新闻列表不再需要这种布局，这时候我们只需要修改新闻列表组件的布局即可。
  - 代码的简单实现

  > 此代码实现的并非是新闻列表而是使用了之前自己项目中写的电视剧的接口数据，页面渲染使用的是bootstrap4的alpha版本样式

  父组件`home.vue`代码
  
```
<template>
  <div>
    <!-- 此处使用newslist组件，通过绑定items属性将数据传递给子组件 -->
    <newslist :items="items"></newslist>
  </div>
</template>

<script>
// 引用newslist组件文件
import Newslist from './newslist'
export default {
  components: {
    // 注册newlist组件
    Newslist
  },
  data() {
    return {
      //  定义数据
      items: []
    }
  },
  mounted() {
    //  ajax请求数据（此处使用的axios库）
    this.$http.get('tvs')
      .then(response => {
        //  将获取到的数据赋值给data中定义的变量
        this.items = response.data.data
      })
      .catch()
  }
}
</script>

<style>

</style>

```

子组件`newslist.vue`代码

```
<template>
  <div class="row ml-4">
    <!-- 将接收到的父组件传递的数据遍历 -->
    <b-card :title="item.title" :img-src="item.cover" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2 ml-2 mt-2 mr3" v-for="(item,index) in items" :key="item.id">
    </b-card>
  </div>
</template>

<script>
export default {
  // 接收父组件传递的数据
  props:['items']
}
</script>

<style>

</style>

```

#### 父组件->子组件

> 组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。要让子组件使用父组件的数据，我们需要通过子组件的 props 选项。详细文档请移步[使用prop传递数据](https://cn.vuejs.org/v2/guide/components.html#使用-Prop-传递数据)


- 静态数据
```
<!-- 父组件传递 -->
<child my-message="hello!"></child>

<!-- 子组件接收 -->
props: ['myMessage'],
```

- 动态数据
```
<!-- 父组件传递 -->
<child v-bind:my-message="parentMsg"></child>

<!-- 子组件接收 -->
```
#### 子组件->父组件



#### 非父子组件