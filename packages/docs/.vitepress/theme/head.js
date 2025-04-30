export default [
  ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
  ["link", { rel: "icon", type: "image/png", href: "/favicon.png" }],
  ["link", { rel: "apple-touch-icon", href: "/apple-touch-icon.png" }],
  ["meta", { name: "theme-color", content: "#4F8BFF" }],
  [
    "script",
    { id: "client-scripts" },
    `
    // 只在客户端执行
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        // 所有的document相关操作将延迟到这里执行
        setTimeout(() => {
          // 页面完全加载后执行DOM操作
          // 交互脚本会在客户端执行
        }, 500);
      });
    }
  `,
  ],
]
