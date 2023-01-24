<template>
  <v-event-card
    :title="event.title"
    :subtitle="event.subtitle"
    :responsable="event.responsable"
    :color="event.color"
    @on-clicked="handleClick"
  ></v-event-card>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import VEventCard from "@/components/eventCard/VEventCard.vue";
const props = defineProps({
  event: {
    type: Object as PropType<any>,
    required: true,
  },
});

const emit = defineEmits(["on-clicked"]);

function handleClick() {
  emit("on-clicked", props.event);
}
</script>
