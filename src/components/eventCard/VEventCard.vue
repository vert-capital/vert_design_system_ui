<template>
  <div class="event-card">
    <div class="event-status" :style="`border-color: ${color};`">
      <div class="event-body" :class="[`event-body--${size}`]">
        <slot v-if="size === 'default'" name="tag"></slot>
        <p class="break-ellipsis event-body--title break-ellipsis--title">
          {{ title }}
        </p>

        <p
          v-if="subtitle != '' && size !== 'very-small'"
          class="break-ellipsis break-ellipsis--subtitle"
        >
          {{ subtitle }}
        </p>
        <p v-if="size === 'default' && responsable != ''">
          {{ responsable }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { eventsTypes } from "@/utils/types/calendar";

export interface Props {
  title: string;
  subtitle: string;
  responsable: string;
  size: string;
  aplication: eventsTypes;
  status: string;
  color: string;
}

const props = defineProps({
  title: {
    type: String,
    default: "Título do evento",
  },
  subtitle: {
    type: String,
    default: "",
  },
  responsable: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "default",
  },
  status: {
    type: String,
    default: "pending",
  },
  color: {
    type: String,
    default: "inerent",
  },
});
</script>

<style src="./VEventCard.scss" lang="scss" />
