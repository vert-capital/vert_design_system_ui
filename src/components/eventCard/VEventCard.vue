<template>
  <div class="event-card">
    <div class="event-status" :class="setEventTypeClass">
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
import { computed, PropType } from "vue";
import { eventTypes } from "@/utils/types/calendar";

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
  eventType: {
    type: String as PropType<eventTypes>,
    default: "obrigacoes",
  },
  status: {
    type: String,
    default: "pending",
  },
});

const setEventTypeClass = computed(
  (): string => `event-status--${props.eventType}`
);
</script>

<style src="./VEventCard.scss" lang="scss" />
