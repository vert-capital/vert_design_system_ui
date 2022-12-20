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
    actived: {
      type: Boolean,
      default: false,
    },
    eixo: {
      type: String,
      default: "x",
    },
    tabTo: {
      type: String,
      required: true,
    },
  },
  methods: {
    activeTab(event: any): void {
      const tabHead = event.path[1].children;
      for (const item of tabHead) item.classList.remove("active");
      event.target.classList.add("active");
      showContentTab(
        event?.target.dataset.tabTo,
        event?.target.dataset.tabType
      );
    },
  },
});
</script>
