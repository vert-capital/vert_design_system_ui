<template>
  <div class="event-card">
    <div class="event-status" :class="setAplicationClass">
      <div class="event-body" :class="`event-body--${size}`">
        <slot v-if="size !== 'small'" name="tag"></slot>
        <h4 class="break-ellipsis break-ellipsis--three_line">{{ title }}</h4>
        <p class="break-ellipsis break-ellipsis--one_line">{{ subtitle }}</p>
        <p
          class="break-ellipsis break-ellipsis--one_line"
          v-if="size !== 'small' && responsible"
        >
          {{ responsible }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { applicationReference } from "@/utils/types/calendar";

export interface Props {
  title: string;
  subtitle: string;
  responsible: string;
  size: string;
  aplication: applicationReference;
  status: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "Titulo",
  size: "default",
});

const setAplicationClass = computed(
  (): string => `event-status--${props.aplication}`
);
</script>

<style src="./VEventCard.scss" lang="scss" />
