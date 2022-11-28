<template>
  <div class="box">
    <div :class="[{ 'tab--border': borderBottom }, `tab--${eixo}`]">
      <slot name="header"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTab",
  props: {
    eixo: {
      type: String,
      default: "x",
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style src="./VTab.scss" />
