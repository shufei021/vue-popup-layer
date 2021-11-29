# vue-popup-layer

这是一个基于vue2.0的物理返回组件。 在移动端编写H5页面时，往往只想在当前页面打开一个弹出层。 不想操作，点击左上角物理返回按钮返回当前页面。 即始终在当前页面，这样做的好处就是能保持数据的状态不变 



# Requirements

```js
Vue.js 2.x
```



# Installation

```js
npm i vue-popup-layer -S
```



# Usage

main.js:

```js
import Vue from 'vue'
import PopupLayer from 'vue-popup-layer'
Vue.use(PopupLayer)
// If you don’t want to use the default name (historyState) for the local cache name, you can customize the storeName 
//Vue.use(PopupLayer, {
//  storeName: 'historyState', // default
// storeType:'localStorage' // The default is localStorage ,Only sessionStorage and localStorage and select 
//})
```

# feature

+ visible : 是否显示弹出层，其值为布尔值
+ isAnimation: 是否需要过渡动画效果，其值为布尔值
+ zIndex：弹出层的层级
+ extra：弹出层的附加数据
+ autoIndex：弹出层是否自适应页面最高层DOM，优先级高于设置的zIndex 

# methods

+ onOpen：打开弹出层的回调函数
+ onClose：关闭弹出层的回调函数
+ backLvBy：通过条件返回指定级别，页面级别为0


home:

[codesandbox](https://codesandbox.io/s/blissful-microservice-0q3mo?file=/src/App.vue)

```html
<template>
  <div>
    <h1>home</h1>
    <button @click="layer.show1=true">Open the first shell </button>

    <!-- First shell  -->
    <popup-layer :visible.sync="layer.show1" @onOpen="open" @onClose="close">
      <h1>First shell </h1>
      <button @click="layer.show1=false">
        Close the first shell layer (you can also click the physical return button
      </button>
      <button @click="layer.show2=true">Open the second bomb layer </button>
    </popup-layer>

    <!-- Second bomb layer  -->
    <popup-layer :visible.sync="layer.show2">
      <h1>Second bomb layer </h1>
      <button @click="layer.show2=false">
        Close the second bomb layer (you can also click the physical return button)
        </van-button>
        <button @click="layer.show3=true">Open the third bomb layer </button>
      </button></popup-layer>

    <!-- Third bomb layer -->
    <popup-layer :visible.sync="layer.show3">
      <h1>Third bomb layer</h1>
      <button @click="layer.show3=false">
        Close the second bomb layer (you can also click the physical return button)
      </button>
    </popup-layer>
  </div>
</template>

<script>
export default {
  name: 'PopupLayerDemo',
  data () {
    return {
      layer: {
        show1: false,
        show2: false,
        show3: false
      }
    }
  },
  methods: {
    open () {
      console.log('The first bomb layer opened')
    },
    /**
     * @param {Boolean} isPopstate：Whether the close shell event comes from the physical return key
     */
    close ({ isPopstate }) {
      console.log(
        isPopstate ? 
        'Click the physical return button to close the first layer of bullets.' : 
        'Use other non-physical return key methods to close the first layer of bullets.')
    }
  }
}
</script>
```
## update log
+ 新增backLvBy方法，按条件返回指定图层，页面级别为0 (2021/11/20)
+ 添加弹性层DOM自适应z-index属性autoIndex (2021/11/18)
+ 修复刷新页面时打开多个弹窗返回无效的问题 (2021/11/17)


