<template>
  <button
    :class="[setSizeClass, setStatus]"
    :disabled="disabled"
    type="button"
    v-bind="$attrs"
  >
    <div v-if="icon" class="v-btn--img">
      <img :src="setIcon" />
    </div>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
    status: {
      type: String,
      default: "primary",
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    style_type: {
      type: String,
      default: "solid",
    },
  },
  computed: {
    setSizeClass(): string {
      return `v-btn--${this.size}`;
    },
    setStatus(): string {
      return `v-btn__${this.style_type}--${this.status}`;
    },
    setIcon(): string {
      return `/static/icons/${this.icon}.svg`;
    },
  },
});
</script>

<style src="./VButton.scss" lang="scss" />
