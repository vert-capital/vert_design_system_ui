<template>
  <v-event-card
    :title="event.title"
    :event-type="event.event_type"
    :subtitle="event.subtitle"
    :responsable="event.responsable"
    :color="event.color"
  ></v-event-card>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import VEventCard from "@/components/eventCard/VEventCard.vue";
defineProps({
  event: {
    type: Object as PropType<any>,
    required: true,
  },
});
</script>
