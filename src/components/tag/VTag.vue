<template>
  <div :class="[`v-tag__${type}--${status}`, { 'v-tag--square': square }]">
    <div v-if="icon" class="v-tag--img">
      <img :src="setIcon" />
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VTag",
  props: {
    status: {
      type: String,
      default: "helper",
    },
    type: {
      type: String,
      default: "solid",
    },
    icon: {
      type: String,
      required: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setIcon(): string {
      return `/static/icons/${this.icon}.svg`;
    },
  },
});
</script>

<style src="./VTag.scss" lang="scss" />
