import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

/**
 * corn-input - 输入框组件
 */
@customElement("corn-input")
export class CornInput extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: 100%;
    }

    .input-wrapper {
      position: relative;
      width: 100%;
    }

    .input {
      width: 100%;
      padding: 8px 12px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 4px;
      transition: all 0.2s;
      box-sizing: border-box;
    }

    .input:focus {
      border-color: #4f8bff;
      outline: none;
      box-shadow: 0 0 0 2px rgba(79, 139, 255, 0.2);
    }

    .input:disabled {
      background-color: #f5f5f5;
      cursor: not-allowed;
      opacity: 0.7;
    }

    .error .input {
      border-color: #ff4d4f;
    }

    .error-message {
      color: #ff4d4f;
      font-size: 12px;
      margin-top: 4px;
    }

    .label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      color: #333;
    }
  `

  /**
   * 输入框的值
   */
  @property()
  value = ""

  /**
   * 占位文本
   */
  @property()
  placeholder = ""

  /**
   * 输入框类型
   */
  @property()
  type: "text" | "password" | "number" | "email" = "text"

  /**
   * 禁用状态
   */
  @property({ type: Boolean })
  disabled = false

  /**
   * 错误信息
   */
  @property()
  error = ""

  /**
   * 标签文本
   */
  @property()
  label = ""

  render() {
    return html`
      ${this.label ? html`<label class="label">${this.label}</label>` : ""}
      <div class="input-wrapper ${this.error ? "error" : ""}">
        <input
          class="input"
          .value=${this.value}
          placeholder=${this.placeholder}
          type=${this.type}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
        />
        ${this.error
          ? html`<div class="error-message">${this.error}</div>`
          : ""}
      </div>
    `
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement
    this.value = input.value

    this.dispatchEvent(
      new CustomEvent("corn-input", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    )
  }
}
