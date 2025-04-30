# 组件

Corn UI 提供了一系列基于 Web Components 的 UI 组件，可以在任何现代框架中使用。

## 组件使用方法

### 在 HTML 中直接使用

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Corn UI 示例</title>
    <!-- 引入Corn UI组件库 -->
    <script
      type="module"
      src="https://unpkg.com/corn-ui@0.1.0/dist/corn-ui.js"
    ></script>
  </head>
  <body>
    <!-- 使用Corn UI组件 -->
    <corn-button>点击我</corn-button>
    <corn-input placeholder="请输入内容"></corn-input>
    <corn-card>
      <h3>卡片标题</h3>
      <p>卡片内容</p>
    </corn-card>
  </body>
</html>
```

### 在 Vue 中使用

```js
// main.js
import { createApp } from "vue"
import App from "./App.vue"
import "corn-ui" // 导入Corn UI组件库

const app = createApp(App)
app.mount("#app")
```

```vue
<!-- App.vue -->
<template>
  <div>
    <corn-button @corn-click="handleClick">Vue按钮</corn-button>
    <corn-input @input="handleInput" placeholder="Vue输入框"></corn-input>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("按钮被点击了")
}

const handleInput = (e) => {
  console.log("输入内容：", e.target.value)
}
</script>
```

### 在 React 中使用

```jsx
// index.jsx
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "corn-ui" // 导入Corn UI组件库

ReactDOM.render(<App />, document.getElementById("root"))
```

```jsx
// App.jsx
import React, { useRef, useEffect } from "react"

function App() {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("corn-click", () => {
        console.log("按钮被点击了")
      })
    }
  }, [])

  return (
    <div>
      <corn-button ref={buttonRef}>React按钮</corn-button>
      <corn-input placeholder="React输入框"></corn-input>
    </div>
  )
}

export default App
```

## 浏览组件

<div class="component-grid">
  <a href="/components/button" class="component-item">
    <div class="component-preview">
      <corn-button>按钮示例</corn-button>
    </div>
    <div class="component-info">
      <h3>Button 按钮</h3>
      <p class="component-desc">用于触发操作的按钮组件</p>
    </div>
  </a>
  
  <a href="/components/input" class="component-item">
    <div class="component-preview">
      <corn-input placeholder="输入框示例"></corn-input>
    </div>
    <div class="component-info">
      <h3>Input 输入框</h3>
      <p class="component-desc">用于用户输入的表单组件</p>
    </div>
  </a>
  
  <a href="/components/card" class="component-item">
    <div class="component-preview">
      <corn-card header="带页脚的卡片" show-footer>
        <p>这是卡片内容区域。</p>
        <div slot="footer">
          <corn-button type="secondary">取消</corn-button>
          <corn-button>确定</corn-button>
        </div>
      </corn-card>
    </div>
    <div class="component-info">
      <h3>Card 卡片</h3>
      <p class="component-desc">用于内容展示的卡片容器组件</p>
    </div>
  </a>
</div>

<style>
.component-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.component-item {
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  text-decoration: none !important;
  color: inherit;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.component-item:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
  border-color: var(--vp-c-brand-light);
}

.component-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  background: linear-gradient(135deg, rgba(var(--vp-c-brand-rgb), 0.05), rgba(var(--vp-c-brand-rgb), 0.15));
  min-height: 120px;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.component-info {
  padding: 16px 20px;
}

.component-info h3 {
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.component-desc {
  margin: 0;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}

@media (max-width: 640px) {
  .component-grid {
    grid-template-columns: 1fr;
  }
}
</style>

## 组件列表

目前，Corn UI 提供以下组件：

- [Button 按钮](/components/button) - 用于触发操作的按钮组件
- [Card 卡片](/components/card) - 用于内容展示的卡片容器组件
- [Input 输入框](/components/input) - 用于用户输入的表单组件

更多组件正在开发中，敬请期待！

## 组件设计原则

Corn UI 的组件设计遵循以下原则：

1. **简洁易用** - 组件 API 设计简单明了，减少学习成本
2. **响应式** - 组件自适应不同屏幕尺寸
3. **可定制** - 提供丰富的属性和插槽，满足不同场景需求
4. **无障碍** - 遵循 Web 无障碍标准，提高可访问性
5. **性能优先** - 注重性能优化，减少不必要的渲染和计算
