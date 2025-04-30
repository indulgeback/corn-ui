import head from "./theme/head"

export default {
  title: "Corn UI",
  description: "轻量级WebComponent组件库",
  lang: "zh-CN",
  head,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith("corn-"),
      },
    },
  },
  markdown: {
    config: (md) => {
      // 可以在这里添加自定义Markdown处理
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/button" },
      { text: "GitHub", link: "https://github.com/indulgeback/corn-ui" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "快速开始", link: "/guide/getting-started" },
            { text: "安装", link: "/guide/installation" },
            { text: "按需导入", link: "/guide/import" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件使用示例",
          items: [
            { text: "组件概览", link: "/components/index" },
            { text: "按需加载演示", link: "/components/lazy-loading-demo" },
          ],
        },
        {
          text: "基础组件",
          items: [{ text: "Button 按钮", link: "/components/button" }],
        },
        {
          text: "展示组件",
          items: [{ text: "Card 卡片", link: "/components/card" }],
        },
        {
          text: "表单组件",
          items: [{ text: "Input 输入框", link: "/components/input" }],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/indulgeback/corn-ui" },
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "Copyright © 2023-present Corn UI",
    },
  },
}
