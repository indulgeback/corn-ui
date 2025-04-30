import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * corn-button - 一个基础按钮组件
 */
@customElement("corn-button")
export class CornButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      padding: 8px 16px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid transparent;
      outline: none;
    }

    button.primary {
      background-color: #4f8bff;
      color: white;
    }

    button.secondary {
      background-color: #f0f0f0;
      color: #333;
      border-color: #ddd;
    }

    button.small {
      padding: 4px 8px;
      font-size: 12px;
    }

    button.large {
      padding: 12px 24px;
      font-size: 16px;
    }

    button:hover {
      opacity: 0.9;
    }

    button:active {
      transform: scale(0.98);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `

  /**
   * 按钮类型
   */
  @property({ type: String })
  type: "primary" | "secondary" = "primary"

  /**
   * 按钮尺寸
   */
  @property({ type: String })
  size: "small" | "default" | "large" = "default"

  /**
   * 禁用状态
   */
  @property({ type: Boolean })
  disabled = false

  render() {
    const classes = {
      [this.type]: true,
      [this.size]: this.size !== "default",
    }

    return html`
      <button
        class=${Object.keys(classes)
          .filter((key) => classes[key])
          .join(" ")}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `
  }

  private _handleClick(e: Event) {
    if (this.disabled) {
      e.stopPropagation()
      return
    }

    this.dispatchEvent(
      new CustomEvent("corn-click", {
        bubbles: true,
        composed: true,
      })
    )
  }
}
