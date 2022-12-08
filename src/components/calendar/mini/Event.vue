<template>
  <v-event-card
    :title="event.title"
    :aplication="eventShow.getApplicationsReferenceName()"
    :subtitle="eventShow.getSubtitle()"
    :responsable="event.responsable"
  ></v-event-card>
</template>
<script lang="ts" setup>
import { EventShow } from "@/utils/helpers/EventShow";
import { PropType } from "vue";
import VEventCard from "@/components/eventCard/VEventCard.vue";

const props = defineProps({
  event: {
    type: Object as PropType<any>,
    required: true,
  },
});

const eventShow = new EventShow(props.event);
</script>
