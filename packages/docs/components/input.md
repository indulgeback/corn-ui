# Input 输入框

输入框组件用于获取用户输入的信息。

## 基本用法

<div class="example-container">
  <corn-input label="用户名" placeholder="请输入用户名"></corn-input>
</div>

```html
<corn-input label="用户名" placeholder="请输入用户名"></corn-input>
```

## 不同类型的输入框

<div class="example-container">
  <corn-input type="text" label="文本输入" placeholder="请输入文本"></corn-input>
  <corn-input type="password" label="密码输入" placeholder="请输入密码"></corn-input>
  <corn-input type="number" label="数字输入" placeholder="请输入数字"></corn-input>
  <corn-input type="email" label="邮箱输入" placeholder="请输入电子邮箱"></corn-input>
</div>

```html
<corn-input type="text" label="文本输入" placeholder="请输入文本"></corn-input>
<corn-input
  type="password"
  label="密码输入"
  placeholder="请输入密码"
></corn-input>
<corn-input
  type="number"
  label="数字输入"
  placeholder="请输入数字"
></corn-input>
<corn-input
  type="email"
  label="邮箱输入"
  placeholder="请输入电子邮箱"
></corn-input>
```

## 禁用状态

<div class="example-container">
  <corn-input label="禁用输入框" placeholder="不可输入" disabled></corn-input>
</div>

```html
<corn-input label="禁用输入框" placeholder="不可输入" disabled></corn-input>
```

## 错误状态

<div class="example-container">
  <corn-input label="错误输入框" error="请输入有效的值"></corn-input>
</div>

```html
<corn-input label="错误输入框" error="请输入有效的值"></corn-input>
```

## 属性

| 属性名      | 类型    | 默认值 | 说明                                              |
| ----------- | ------- | ------ | ------------------------------------------------- |
| value       | string  | ''     | 输入框的值                                        |
| placeholder | string  | ''     | 占位文本                                          |
| type        | string  | 'text' | 输入框类型：'text', 'password', 'number', 'email' |
| disabled    | boolean | false  | 是否禁用                                          |
| error       | string  | ''     | 错误信息，为空时不显示错误状态                    |
| label       | string  | ''     | 标签文本                                          |

## 事件

| 事件名     | 说明             | 回调参数                              |
| ---------- | ---------------- | ------------------------------------- |
| corn-input | 输入值变化时触发 | event.detail.value: string (输入的值) |

## 示例

### 表单提交

<div class="example-container">
  <div id="login-form">
    <corn-input id="username" label="用户名" placeholder="请输入用户名"></corn-input>
    <corn-input id="password" type="password" label="密码" placeholder="请输入密码"></corn-input>
    <corn-button id="submit-btn">登录</corn-button>
    <p id="form-result"></p>
  </div>
</div>

```html
<div id="login-form">
  <corn-input
    id="username"
    label="用户名"
    placeholder="请输入用户名"
  ></corn-input>
  <corn-input
    id="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  ></corn-input>
  <corn-button id="submit-btn">登录</corn-button>
  <p id="form-result"></p>
</div>

<script>
  const usernameInput = document.getElementById("username")
  const passwordInput = document.getElementById("password")
  const submitBtn = document.getElementById("submit-btn")
  const formResult = document.getElementById("form-result")

  submitBtn.addEventListener("corn-click", () => {
    const username = usernameInput.value
    const password = passwordInput.value

    if (!username) {
      usernameInput.error = "用户名不能为空"
      return
    } else {
      usernameInput.error = ""
    }

    if (!password) {
      passwordInput.error = "密码不能为空"
      return
    } else {
      passwordInput.error = ""
    }

    formResult.textContent = `表单提交成功！用户名: ${username}`
  })
</script>
```

## 设计指南

- 始终提供清晰的标签帮助用户理解需要输入什么信息
- 使用适合的输入类型来提供特定的键盘布局和验证
- 使用占位文本提供额外的提示，但不要依赖它作为主要标签
- 错误信息应当具体且有指导性，帮助用户理解并修复问题

<script>
  // 确保代码只在客户端执行
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const submitBtn = document.getElementById('submit-btn');
      const formResult = document.getElementById('form-result');
      
      if (submitBtn && usernameInput && passwordInput && formResult) {
        submitBtn.addEventListener('corn-click', () => {
          const username = usernameInput.value;
          const password = passwordInput.value;
          
          if (!username) {
            usernameInput.error = '用户名不能为空';
            return;
          } else {
            usernameInput.error = '';
          }
          
          if (!password) {
            passwordInput.error = '密码不能为空';
            return;
          } else {
            passwordInput.error = '';
          }
          
          formResult.textContent = `表单提交成功！用户名: ${username}`;
        });
      }
    }, 1000);
  }
</script>
