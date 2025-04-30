# Button 按钮

按钮用于触发一个操作，例如表单提交或打开对话框。

## 基本用法

<div class="example-container">
  <corn-button>默认按钮</corn-button>
  <corn-button type="secondary">次要按钮</corn-button>
  <corn-button disabled>禁用按钮</corn-button>
</div>

```html
<corn-button>默认按钮</corn-button>
<corn-button type="secondary">次要按钮</corn-button>
<corn-button disabled>禁用按钮</corn-button>
```

## 属性

| 属性名   | 类型    | 默认值    | 说明                                     |
| -------- | ------- | --------- | ---------------------------------------- |
| type     | string  | 'primary' | 按钮类型，可选值：'primary', 'secondary' |
| disabled | boolean | false     | 是否禁用                                 |

## 事件

| 事件名     | 说明           | 回调参数           |
| ---------- | -------------- | ------------------ |
| corn-click | 点击按钮时触发 | event: CustomEvent |

## 插槽

| 插槽名 | 说明       |
| ------ | ---------- |
| 默认   | 按钮的内容 |

## 示例

### 处理点击事件

<div class="example-container">
  <corn-button id="demo-button">点击我</corn-button>
  <p id="click-result">点击状态: 未点击</p>
</div>

```html
<corn-button id="demo-button">点击我</corn-button>
<p id="click-result">点击状态: 未点击</p>

<script>
  const button = document.getElementById("demo-button")
  const result = document.getElementById("click-result")

  button.addEventListener("corn-click", () => {
    result.textContent = "点击状态: 已点击"
    setTimeout(() => {
      result.textContent = "点击状态: 未点击"
    }, 2000)
  })
</script>
```

<script>
  // 确保代码只在客户端执行
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const button = document.getElementById('demo-button');
      const result = document.getElementById('click-result');
      
      if (button && result) {
        button.addEventListener('corn-click', () => {
          result.textContent = '点击状态: 已点击';
          setTimeout(() => {
            result.textContent = '点击状态: 未点击';
          }, 2000);
        });
      }
    }, 1000);
  }
</script>

## 设计指南

- 按钮文字应简洁明了，通常使用动词或动词短语
- 主要操作使用 primary 类型，次要操作使用 secondary 类型
- 禁用状态用于表示按钮暂时不可用，但需要显示其存在
