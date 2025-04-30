import DefaultTheme from "vitepress/theme"
import "corn-ui" // 直接导入组件库
import "./custom.css"
import ComponentDemo from "./components/ComponentDemo.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册我们的示例容器组件
    app.component("ComponentDemo", ComponentDemo)

    // 客户端增强，只在浏览器中执行
    if (typeof window !== "undefined") {
      // 在这里注册组件或其他客户端初始化
    }
  },
}
