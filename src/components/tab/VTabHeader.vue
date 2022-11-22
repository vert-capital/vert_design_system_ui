<template>
  <button :class="{ active: actived }" @click="activeTab($event)" :data-tab-type="eixo" :data-tab-to="tabTo">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

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
      for (let item of tabHead) item.classList.remove("active");
      event.target.classList.add("active");
      this.showContentTab(
        event?.target.dataset.tabTo,
        event?.target.dataset.tabType
      );
    },
    showContentTab(contentId: String, typeTab: String): void {
      const tabContents = document.getElementsByClassName("tab--content");
      for (let item of tabContents as any) {
        if (typeTab == item.dataset.tabContentType) item.style.display = "none";

        if (contentId == item.getAttribute("id")) {
          item.style.display = "block";
        }
      }
    },
  },
});
</script>
