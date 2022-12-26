<template>
  <button
    :class="[setSizeClass, setStatus]"
    :disabled="disabled"
    type="button"
    v-bind="$attrs"
  >
    <div v-if="icon != ''" class="v-btn--img">
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
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    stypeType: {
      type: String,
      default: "solid",
    },
  },
  computed: {
    setSizeClass(): string {
      return `v-btn--${this.size}`;
    },
    setStatus(): string {
      return `v-btn__${this.stypeType}--${this.status}`;
    },
    setIcon(): string {
      return `/static/icons/${this.icon}.svg`;
    },
  },
});
</script>

<style src="./VButton.scss" lang="scss" />
