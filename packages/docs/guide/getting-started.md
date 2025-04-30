# 快速开始

本节将帮助您快速上手 Corn UI 组件库。

## 基本用法

### 在模块化环境中使用

如果您使用的是 webpack、Vite 或 Rollup 等构建工具，可以按照以下方式导入和使用组件：

```js
// 导入所有组件
import "corn-ui"
```

然后在 HTML 中使用：

```html
<corn-button>点击我</corn-button>
```

### 在 HTML 中直接使用

如果您想直接在 HTML 文件中使用，可以通过 script 标签引入：

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      src="https://unpkg.com/corn-ui/dist/index.js"
    ></script>
  </head>
  <body>
    <corn-button>点击我</corn-button>

    <corn-card header="卡片标题"> 这是卡片内容 </corn-card>

    <corn-input label="用户名" placeholder="请输入用户名"></corn-input>
  </body>
</html>
```

## 在各框架中使用

### React

```jsx
import "corn-ui"
import React from "react"

function App() {
  return (
    <div>
      <corn-button onClick={() => console.log("按钮被点击")}>
        React中的按钮
      </corn-button>
    </div>
  )
}
```

### Vue

```vue
<template>
  <div>
    <corn-button @corn-click="handleClick">Vue中的按钮</corn-button>
  </div>
</template>

<script>
import "corn-ui"

export default {
  methods: {
    handleClick() {
      console.log("按钮被点击")
    },
  },
}
</script>
```

### Angular

```typescript
// app.component.ts
import { Component } from "@angular/core"
import "corn-ui"

@Component({
  selector: "app-root",
  template: `
    <corn-button (corn-click)="handleClick()">Angular中的按钮</corn-button>
  `,
})
export class AppComponent {
  handleClick() {
    console.log("按钮被点击")
  }
}
```

## 事件处理

Corn UI 组件使用自定义事件进行交互，您可以通过标准的事件监听来捕获这些事件：

```js
// 按钮点击事件
const button = document.querySelector("corn-button")
button.addEventListener("corn-click", (e) => {
  console.log("按钮被点击")
})

// 输入框输入事件
const input = document.querySelector("corn-input")
input.addEventListener("corn-input", (e) => {
  console.log("输入值:", e.detail.value)
})
```

## 使用方法

### 在模块环境中引入

```js
import "corn-ui"
```

### 在 HTML 中使用

```html
<script type="module" src="path/to/corn-ui/dist/index.js"></script>
```

现在，你可以在你的项目中使用这些组件：

```html
<corn-button>点击我</corn-button>
<corn-input placeholder="请输入..."></corn-input>
<corn-card>卡片内容</corn-card>
```
