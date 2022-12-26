<template>
  <div class="box">
    <div :class="[{ 'tab--border': borderBottom }, `tab--${eixo}`]">
      <slot
        name="header"
        :change-tab="onChangeTab"
        :active-tab="modelValue"
      ></slot>
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
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue", "changeTab"],
  data() {
    return {
      tabActived: this.modelValue,
    };
  },
  watch: {
    modelValue(value: string) {
      this.tabActived = value;
      this.$emit("changeTab", value, this.eixo);
    },
  },
  methods: {
    onChangeTab(tabTo: string): void {
      this.tabActived = tabTo;
      this.$emit("update:modelValue", tabTo);
      this.$emit("changeTab", tabTo, this.eixo);
    },
  },
});
</script>

<style src="./VTab.scss" />
