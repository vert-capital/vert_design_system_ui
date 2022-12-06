<template>
    <v-event-card
      :title="event.title"
      :aplication="application"
    ></v-event-card>
</template>
<script lang="ts" setup>
import { EventShow } from '@/utils/helpers/EventShow';
import { applicationReference, IEvent } from '@/utils/types/calendar';
import { computed, PropType } from 'vue';
import VEventCard from "@/components/eventCard/VEventCard.vue";


const props = defineProps({
  event: {
    type: Object as PropType<any>,
    required: true,
  }
})

const eventShow = new EventShow(props.event);

const application = computed((): applicationReference => eventShow.getApplicationsReferenceName());
</script>