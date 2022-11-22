<template>
  <div :id="contentId" class="tab--content" :data-tab-content-type="eixo">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTabContent",
  props: {
    eixo: {
      type: String,
      default: "x",
    },
    contentId: {
      type: String,
      required: true,
    },
  },
});
</script>
