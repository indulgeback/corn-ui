---
layout: home
hero:
  name: Corn UI
  text: 轻量级WebComponent组件库
  tagline: 基于Web Components标准，跨框架兼容的现代UI组件库
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/indulgeback/corn-ui
  image:
    src: /logo.svg
    alt: Corn UI Logo
features:
  - icon: 🚀
    title: 跨框架兼容
    details: 基于Web Components标准，可以在任何现代框架中使用，包括React、Vue和Angular
  - icon: 🎨
    title: 简洁美观
    details: 精心设计的UI组件，提供现代化的外观和用户体验
  - icon: 📦
    title: 轻量级
    details: 无外部依赖，体积小，加载快速
  - icon: 🔧
    title: 易于定制
    details: 提供丰富的定制选项，可以轻松适应各种设计需求
---

<style>
/* 主光晕脉冲动画 */
@keyframes mainPulse {
  0% {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    transform: scale(1) translate(-50%, -50%);
    opacity: 0.7;
  }
  50% {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    transform: scale(1.1) translate(-50%, -50%);
    opacity: 0.3;
  }
  100% {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    transform: scale(1) translate(-50%, -50%);
    opacity: 0.7;
  }
}

/* 次光晕脉冲动画 */
@keyframes secondaryPulse {
  0% {
    background: linear-gradient(45deg, rgba(56, 169, 240, 0.6) 0%, rgba(79, 254, 245, 0.6) 100%);
    transform: scale(0.8) translate(-50%, -50%) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    background: linear-gradient(45deg, rgba(0, 242, 254, 0.6) 0%, rgba(79, 172, 254, 0.6) 100%);
    transform: scale(1.3) translate(-50%, -50%) rotate(180deg);
    opacity: 0.2;
  }
  100% {
    background: linear-gradient(45deg, rgba(56, 169, 240, 0.6) 0%, rgba(79, 254, 245, 0.6) 100%);
    transform: scale(0.8) translate(-50%, -50%) rotate(360deg);
    opacity: 0.3;
  }
}

.VPHero .name {
  background: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 2;
}

/* 创建光晕容器 */
.VPHero .image-container {
  position: relative;
  overflow: visible;
}

/* 主光晕效果 */
.image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180%;
  height: 180%;
  border-radius: 50% !important;
  filter: blur(68px) !important;
  animation: mainPulse 4s ease-in-out infinite;
}

/* 添加次级光晕 */
.image-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 50%;
  filter: blur(50px);
  z-index: -1;
  animation: secondaryPulse 6s ease-in-out infinite;
}

/* 添加浮动效果到logo */
.VPHero .image {
  animation: float 3s ease-in-out infinite;
  position: relative;
  z-index: 3;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 响应式调整 */
@media (max-width: 640px) {
  .image-bg, .image-container::before {
    width: 120%;
    height: 120%;
  }
}
</style>
