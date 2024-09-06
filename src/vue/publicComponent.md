---
title: 全局组件
category:
  - Vue
---

<!-- more -->

### 1. 在Vue中使用插件

```javascript
1.  main.js 中使用自定义组件

import globalComponent from '@components/index'

app.use(globalComponent)

2. 在自定义组件批量注册全局组件
import Pagination from './Pagination/index.vue';
import Category from './Category/index.vue';

// 全局对象
const allGlobalComponent: any = { Pagination, Category };

// 对外暴露一个插件对象
export default {
    install(app: any) {
        // 注uy册项目全部的全局组件
        Object.keys(allGlobalComponent).forEach((key) => {
            // 注册为全局组件
            app.component(key, allGlobalComponent[key]);
        });
    },
};

3. 在自定义组件中接收父组件传递的属性
defineProps(['scene'])

// 定义类型
defineProps({
	name: String,
	color: {
		type: String,
		default: '16px' // 设置默认值
	}
})
```