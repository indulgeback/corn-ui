# 🌽 Corn UI

<div align="center">

![Corn UI Banner](https://via.placeholder.com/800x200?text=Corn+UI)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/badge/npm-v0.1.0-blue)](https://www.npmjs.com/package/corn-ui)
[![Lit](https://img.shields.io/badge/Lit-v3.3.0-orange)](https://lit.dev/)
[![WebComponents](https://img.shields.io/badge/WebComponents-v1-green)](https://www.webcomponents.org/)

**轻量级、高性能的 WebComponent 组件库，支持按需加载**

[文档](https://corn-ui.example.com) · [快速开始](https://corn-ui.example.com/guide/getting-started) · [组件](https://corn-ui.example.com/components/) · [GitHub](https://github.com/yourusername/corn-ui)

</div>

## ✨ 特性

- 🧩 **基于标准**: 使用 Web Components 和 Shadow DOM，可在任何框架中使用
- 📦 **按需加载**: 优化包体积，只加载你需要的组件
- 🎨 **可定制**: 简单易用的主题和样式定制
- ⚡ **高性能**: 采用 Lit 框架，性能出色
- 🔍 **类型安全**: 使用 TypeScript 编写，提供完整类型支持
- 📱 **响应式**: 适配各种屏幕尺寸

## 🚀 快速开始

### 安装

```bash
# 使用 npm
npm install corn-ui

# 使用 pnpm
pnpm add corn-ui

# 使用 yarn
yarn add corn-ui
```

### 使用

```js
// 按需导入
import "corn-ui/button"

// HTML中使用
;<corn-button type="primary">我是按钮</corn-button>
```

## 🧩 组件

| 组件名 | 导入路径         | 描述                         |
| ------ | ---------------- | ---------------------------- |
| Button | `corn-ui/button` | 按钮组件，支持多种类型和尺寸 |
| Card   | `corn-ui/card`   | 卡片容器，用于信息展示       |
| Input  | `corn-ui/input`  | 输入框，支持各种表单输入需求 |

## 📦 按需加载

Corn UI 支持 ESM 按需加载，有效减少应用体积：

```js
// 仅导入需要的组件
import "corn-ui/button"
import "corn-ui/card"
```

## 🔧 项目结构

```
corn-ui/
├── packages/             # Monorepo包目录
│   ├── corn-ui/          # 核心组件库
│   │   ├── components/   # 组件源码
│   │   ├── dist/         # 构建输出
│   └── docs/             # 文档站点
```

## 💻 开发

```bash
# 安装依赖
pnpm install

# 启动组件库开发环境
pnpm dev

# 启动文档站点开发环境
pnpm docs:dev

# 构建所有包
pnpm build
```

## 💡 设计原则

- **轻量级**：最小的依赖和最简单的 API
- **标准化**：遵循 Web Components 标准
- **可定制**：提供灵活的主题和样式定制
- **可访问性**：符合 WCAG 标准的可访问性设计

## 🛣️ 路线图

- [ ] 添加更多核心组件
- [ ] 支持暗色主题
- [ ] 添加动画效果
- [ ] 提供更多样式定制选项
- [ ] 发布到 NPM

## 📄 许可证

[MIT](LICENSE)
