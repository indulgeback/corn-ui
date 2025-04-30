import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * corn-card - 卡片容器组件
 */
@customElement("corn-card")
export class CornCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .card {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: box-shadow 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .card-header {
      padding: 16px;
      border-bottom: 1px solid #f0f0f0;
      font-weight: 500;
    }

    .card-body {
      padding: 16px;
    }

    .card-footer {
      padding: 12px 16px;
      border-top: 1px solid #f0f0f0;
      background-color: #fafafa;
    }
  `

  /**
   * 卡片标题
   */
  @property({ type: String })
  header = ""

  /**
   * 是否显示底部
   */
  @property({ type: Boolean })
  showFooter = false

  render() {
    return html`
      <div class="card">
        ${this.header
          ? html`<div class="card-header">${this.header}</div>`
          : ""}
        <div class="card-body">
          <slot></slot>
        </div>
        ${this.showFooter
          ? html`
              <div class="card-footer">
                <slot name="footer"></slot>
              </div>
            `
          : ""}
      </div>
    `
  }
}
