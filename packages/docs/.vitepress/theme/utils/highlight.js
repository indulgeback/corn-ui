/**
 * 简单语法高亮函数
 * @param {string} code 代码字符串
 * @param {string} lang 语言
 * @returns {string} 高亮后的HTML
 */
export function highlight(code, lang) {
  // 简单的实现，实际项目中可以使用prismjs等库
  let highlighted = code.replace(/</g, "&lt;").replace(/>/g, "&gt;")

  // 简单的HTML高亮
  if (lang === "html") {
    highlighted = highlighted
      // 标签
      .replace(
        /(&lt;\/?)([a-zA-Z0-9-]+)/g,
        '$1<span class="token tag">$2</span>'
      )
      // 属性
      .replace(/([a-zA-Z0-9-]+)=/g, '<span class="token attr-name">$1</span>=')
      // 属性值
      .replace(
        /=(&quot;|")([^&quot;"]+)(&quot;|")/g,
        '=<span class="token attr-value">$1$2$3</span>'
      )
  }

  return highlighted
}
