##### 关于data属性
> data-* 属性是 HTML 5 的新特性，允许用户在 DOM 中存储自定义信息。
> 以前，需要存储含有特定含义的信息通常是通过 class 完成的，但这并不是 class 本来的用途。现在，利用 HTML 5，可以为元素添加data-*属性，从而存储自定义信息。其中*是可以自定义的部分。例如：
```
<article id="tu" data-category="Web Development" data-author="1">xxxx</article>
```
##### 通过jquery选择器获取属性值
$("#tu").data('category'); 
$("#tu").data('category'); 