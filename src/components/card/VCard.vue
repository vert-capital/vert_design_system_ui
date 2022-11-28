<template>
  <div class="card" :class="[setType]">
    <div class="v-section__header">
      <div class="v-section__header--title">
        <h3>{{ props.title }}</h3>
      </div>
      <div>
        <slot name="buttons"></slot>
        <slot name="input"></slot>
      </div>
    </div>
    <div class="v-section__body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface Props {
  title: string;
  type: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Titulo",
  type: "default",
});

const setType = computed(() => `card--${props.type}`);
</script>

<style src="./VCard.scss" lang="scss" />
