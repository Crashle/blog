---
title: 数组的常见操作
category:
  - JavaScript
sticky: true
---


<!-- more -->
### 数组去重、取交集、取差集、取并集
### 1. 数组去重
```js
let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9];

// 1. 利用Set去重
let newArr = [...new Set(arr)];

// 2.利用filter去重
let newArr = arr.filter((item, index, arr) => arr.indexOf(item) === index);

// 3. 利用reduce去重
let newArr = arr.reduce((prev, cur) => {
  if (!prev.includes(cur)) {
    prev.push(cur);
  }
  return prev;
}, []);


```

### 2. 数组取交集
```js
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9];

let newArr = arr1.filter((item) => arr2.includes(item))
```

### 3. 数组取差集
```js
let arr1 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9]
let arr2 = [1, 2, 3];

// arr1 - arr2
let newArr = arr1.filter(item => !arr2.includes(item))

```

### 4. 数组取并集
```js
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 9];

// 1. 使用new Set
let union = [...new Set([...arr1, ...arr2])];

// 2. 使用reduce
let union = arr1.concat(arr2.filter(item => !arr1.includes(item)))
```

