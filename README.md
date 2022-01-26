# vue-popup-layer

This is a physical return component based on vue2.0. When writing H5 pages on the mobile terminal, you often only want to open a pop-up layer on the current page. Do not want to operate, click the physical return button in the upper left corner to return to the current page. That is always on the current page, the advantage of doing so is to keep the state of the data unchanged 



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

+ visible : Whether to display the pop-up layer, its value is a Boolean  
+ isAnimation: Whether transition animation effect is needed, its value is a Boolean value 
+ zIndex: The level of the pop-up layer 
+ extra: Attached data of the pop-up layer 
+ autoIndex: Whether the pop-up layer is adaptive to the highest level of the page DOM, the priority is higher than the set zIndex 
+ isAsync : Whether the component is loaded asynchronously 
+ getContainer : Specifies the mount node, whose value can be a selection class name or a function 

# methods

+ onOpen：Callback function to open the popup layer 
+ onClose：Callback function to close the popup layer 
+ backLvBy：Return to the specified level by condition, the page level is 0 


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
+ Fix the bug that the initial get ID is null (2022/1/26)
+ Add mount to the specified node property getContainer    (2022/1/12)
+ Add a new feature isAsync to solve asynchronous loading of PopupLayer components   (2021/12/23)
+ Added the backLvBy method to return to the specified layer by condition, the page level is 0  (2021/11/20)
+ Add elastic layer DOM adaptive z-index attribute autoIndex  (2021/11/18)
+ Fixed the issue of returning invalid after opening multiple pop-up layers when refreshing the page (2021/11/17)
+ Added a new method closeLv that can close multiple bomb layers (2021/11/14)


