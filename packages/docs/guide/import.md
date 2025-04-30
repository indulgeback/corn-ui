# 按需导入

Corn UI 支持按需导入，可以有效减小应用的打包体积。

## 基本用法

### 方法一：直接导入（推荐）

```js
// 只导入需要的组件
import 'corn-ui/button';
import 'corn-ui/card';

// 在 HTML 中使用
<corn-button>按钮</corn-button>
<corn-card>卡片</corn-card>
```

### 方法二：具名导入

```js
// 导入特定组件
import { CornButton } from "corn-ui/button"
import { CornCard } from "corn-ui/card"

// 手动注册组件（如果需要）
customElements.define("corn-button", CornButton)
customElements.define("corn-card", CornCard)
```

### 方法三：全量导入

如果不关心包体积，也可以全量导入所有组件：

```js
// 导入所有组件
import 'corn-ui';

// 在 HTML 中使用
<corn-button>按钮</corn-button>
<corn-card>卡片</corn-card>
<corn-input></corn-input>
```

## 在不同框架中使用

### 在 Vue 中使用

```vue
<script setup>
// 按需导入
import "corn-ui/button"
</script>

<template>
  <corn-button>按钮</corn-button>
</template>
```

### 在 React 中使用

```jsx
import { useEffect } from "react"
import "corn-ui/button"

function MyComponent() {
  return <corn-button>按钮</corn-button>
}
```

### 在 Angular 中使用

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"

// 在组件中导入
import "corn-ui/button"

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // 添加此行支持自定义元素
})
export class AppModule {}
```

## 按需导入的好处

1. **减小包体积**：只加载实际使用的组件，减少不必要的代码
2. **提高加载速度**：更小的包体积意味着更快的加载时间
3. **更好的代码分割**：有助于实现更细粒度的代码分割
