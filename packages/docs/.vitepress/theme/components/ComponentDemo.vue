<template>
  <div class="component-demo">
    <ClientOnly>
      <div class="example-container">
        <slot></slot>
      </div>
    </ClientOnly>

    <div v-if="code" class="demo-code">
      <div class="language-html">
        <pre><code v-html="highlightedCode"></code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { highlight } from "../utils/highlight"

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
})

const highlightedCode = computed(() => {
  return props.code ? highlight(props.code, "html") : ""
})
</script>

<style scoped>
.component-demo {
  margin: 2rem 0;
}

.demo-code {
  margin-top: 1rem;
  border-radius: 6px;
  overflow: hidden;
}
</style>
