<template>
  <div class="v-popup">
    <div @click="show = !show" class="v-popup--click">
      <slot name="event-area">INSERIR ICONE AQUI</slot>
    </div>
    <div
      class="v-popup__content"
      :class="positionContent"
      v-show="show"
      :style="`min-width: ${widthContent}`"
    >
      <div class="v-popup__content--head">
        <h3 class="v-popup__content--head-title">{{ title }}</h3>
        <span class="v-popup__content--head-close" @click="show = !show"
          >x</span
        >
      </div>
      <div class="v-popup__content--body">
        <slot name="popup-body"></slot>
      </div>
      <div class="v-popup__content--footer">
        <slot name="popup-footer">
          <a href="#" target="_blank">Ir para visão completa</a>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  positionContent: {
    type: String,
    default: "bottom center",
  },
  widthContent: {
    type: String,
    default: "25rem",
  },
});
const show = ref(false);
</script>

<style src="./VPopUp.scss" lang="scss"></style>
