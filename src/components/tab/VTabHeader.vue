<template>
  <button
    :class="{ active: actived }"
    :data-tab-type="eixo"
    :data-tab-to="tabTo"
    @click="activeTab($event)"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { showContentTab } from "./VTab";

export default defineComponent({
  name: "VTabContent",
  props: {
    eixo: {
      type: String,
      default: "x",
    },
    tabTo: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["changeTab"],
  computed: {
    actived(): boolean {
      return this.modelValue === this.tabTo;
    },
  },
  watch: {
    modelValue(value: string) {
      showContentTab(value, this.eixo);
    },
  },
  methods: {
    activeTab(event: any): void {
      if (!event.target.dataset.tabTo) return;
      this.$emit("changeTab", event?.target.dataset.tabTo);
    },
  },
});
</script>
