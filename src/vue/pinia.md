---
title: Pinia
---


<!-- more -->

有三个概念 [state](https://pinia.vuejs.org/zh/core-concepts/state.html)、[getter](https://pinia.vuejs.org/zh/core-concepts/getters.html) 和 [action](https://pinia.vuejs.org/zh/core-concepts/actions.html) ，相当于组件中的 `data`、 `computed` 和 `methods`

1.  store 里面的数据要先定义才能使用
2.  getter 里面使用 箭头函数是 可以把 store 作为参数传进去使用。如果 getter 中需要传参数，可以使用返回一个 函数接受参数 来实现
3.  action 可以是异步的，用正常函数编写，可以用this获取 store 上的属性

**用 const { name, id } = storeToRefs(userObj)  ，来解构数据**

```javascript
// 1. 定义pinia stores/counter.js 
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // 也可以这样定义
  // state: () => ({ count: 0 })
  actions: {
	// 定义异步操作
    increment() {
      this.count++
    },
  },
})


// 2. 使用
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()
</script>

<template>
  <!-- 直接从 store 中访问 state -->
  <div>Current Count: {{ counter.count }}</div>
</template>


// 在 main.js 中使用pinia
app.use(pinia)

```

