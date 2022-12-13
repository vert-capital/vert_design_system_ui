<template>
  <div class="event-card">
    <div class="event-status" :class="setEventTypeClass">
      <div class="event-body" :class="`event-body--${size}`">
        <slot v-if="size !== 'small'" name="tag"></slot>
        <h4 class="break-ellipsis break-ellipsis--three_line">{{ title }}</h4>
        <p
          v-if="subtitle != ''"
          class="break-ellipsis break-ellipsis--one_line"
        >
          {{ subtitle }}
        </p>
        <p
          v-if="size !== 'small' && responsable != ''"
          class="break-ellipsis break-ellipsis--one_line"
        >
          {{ responsable }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";
import { eventsTypes } from "@/utils/types/calendar";

export interface Props {
  title: string;
  subtitle: string;
  responsable: string;
  size: string;
  aplication: eventsTypes;
  status: string;
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
  eventType: {
    type: String as PropType<eventsTypes>,
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
