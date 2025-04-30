# 按需加载演示

这个页面演示了 Corn UI 的按需加载功能。

## 基础演示

每个组件都可以单独导入和使用：

```js
// 只导入按钮组件
import "corn-ui/button"

// 创建元素并添加到页面
const button = document.createElement("corn-button")
button.textContent = "这是按需加载的按钮"
document.getElementById("demo-container").appendChild(button)

// 稍后再加载卡片组件
setTimeout(async () => {
  await import("corn-ui/card")

  const card = document.createElement("corn-card")
  card.setAttribute("title", "动态加载的卡片")
  card.textContent = "这个卡片是在按钮加载2秒后动态导入的"
  document.getElementById("demo-container").appendChild(card)
}, 2000)
```

## 性能对比

下表显示了按需加载与全量导入的包体积对比：

| 导入方式     | 包体积 |
| ------------ | ------ |
| 全量导入     | ~XX KB |
| 只导入按钮   | ~X KB  |
| 只导入卡片   | ~X KB  |
| 只导入输入框 | ~X KB  |

## 使用建议

1. 在业务组件中直接导入所需的 Corn UI 组件
2. 如果使用频率较高，可以创建一个集中导入文件
3. 对于大型应用，建议结合路由进行代码分割和懒加载

## 实际效果

下面是按需加载的实际效果示例：

<div class="lazy-loading-demo">
  <button onclick="loadButtonDemo()">加载按钮组件</button>
  <button onclick="loadCardDemo()">加载卡片组件</button>
  <button onclick="loadInputDemo()">加载输入框组件</button>
  <div id="component-container"></div>
</div>

<div id="demo-container"></div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 设置按钮点击事件
  window.loadButtonDemo = async () => {
    // 这里模拟动态导入，实际环境中应使用真实导入
    console.log('加载按钮组件');
    const container = document.getElementById('component-container');
    const btn = document.createElement('div');
    btn.className = 'demo-component';
    btn.innerHTML = '<button class="corn-button-demo">按需加载的按钮</button>';
    container.appendChild(btn);
  };

  window.loadCardDemo = async () => {
    console.log('加载卡片组件');
    const container = document.getElementById('component-container');
    const card = document.createElement('div');
    card.className = 'demo-component demo-card';
    card.innerHTML = '<div class="card-title">按需加载的卡片</div><div>这是动态加载的卡片内容</div>';
    container.appendChild(card);
  };

  window.loadInputDemo = async () => {
    console.log('加载输入框组件');
    const container = document.getElementById('component-container');
    const input = document.createElement('div');
    input.className = 'demo-component';
    input.innerHTML = '<input class="corn-input-demo" placeholder="请输入内容">';
    container.appendChild(input);
  };
})
</script>

<style>
.lazy-loading-demo button {
  margin: 8px;
  padding: 8px 16px;
  background: #4f8bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.demo-component {
  margin: 10px 0;
  padding: 10px;
}

.corn-button-demo {
  padding: 8px 16px;
  background: #4f8bff;
  color: white;
  border: none;
  border-radius: 4px;
}

.demo-card {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-title {
  font-weight: bold;
  margin-bottom: 8px;
}

.corn-input-demo {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 200px;
}
</style>
