# Card 卡片

卡片是一种容器组件，用于组织和展示相关内容和操作。

## 基本用法

<ComponentDemo code='<corn-card header="卡片标题">

  <p>这是卡片内容区域，可以放置任何内容。</p>
  <corn-button>操作按钮</corn-button>
</corn-card>'>
  <corn-card header="卡片标题">
    <p>这是卡片内容区域，可以放置任何内容。</p>
    <corn-button>操作按钮</corn-button>
  </corn-card>
</ComponentDemo>

## 带页脚的卡片

<ComponentDemo code='<corn-card header="带页脚的卡片" show-footer>

  <p>这是卡片内容区域。</p>
  <div slot="footer">
    <corn-button type="secondary">取消</corn-button>
    <corn-button>确定</corn-button>
  </div>
</corn-card>'>
  <corn-card header="带页脚的卡片" show-footer>
    <p>这是卡片内容区域。</p>
    <div slot="footer">
      <corn-button type="secondary">取消</corn-button>
      <corn-button>确定</corn-button>
    </div>
  </corn-card>
</ComponentDemo>

## 属性

| 属性名     | 类型    | 默认值 | 说明             |
| ---------- | ------- | ------ | ---------------- |
| header     | string  | ''     | 卡片标题         |
| showFooter | boolean | false  | 是否显示页脚区域 |

## 插槽

| 插槽名 | 说明                                         |
| ------ | -------------------------------------------- |
| 默认   | 卡片主要内容                                 |
| footer | 卡片页脚内容，仅在 showFooter 为 true 时显示 |

## 设计指南

- 卡片通常用于展示相关内容和操作，例如产品信息、数据汇总等
- 可以通过标题清晰地传达卡片内容的主题
- 卡片页脚通常用于放置与内容相关的操作按钮
- 卡片内部的内容应当保持一致的边距和对齐方式
