<template>
  <div class="v-popup">
    <div class="v-popup--click">
      <a @click="show = !show"
        ><slot name="event-area">INSERIR ICONE AQUI</slot></a
      >
    </div>
    <div
      v-show="show"
      class="v-popup__content"
      :class="positionContent"
      :style="`min-width: ${widthContent}`"
    >
      <div class="v-popup__content--head">
        <h3 class="v-popup__content--head-title">{{ title }}</h3>
        <span class="v-popup__content--head-close" @click="show = !show"
          ><img src="/static/icons/close.svg"
        /></span>
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
import { computed, ref } from "vue";
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
  showIcon: {
    type: Boolean,
    default: true,
  },
  showPopUp: {
    type: Boolean,
    default: false,
  },
});

const show = props.showIcon ? ref(false) : computed(() => props.showPopUp);
</script>

<style src="./VPopUp.scss" lang="scss"></style>
