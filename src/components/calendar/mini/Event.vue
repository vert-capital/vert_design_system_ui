<template>
  <v-event-card
    :title="event.title"
    :subtitle="event.subtitle"
    :responsable="event.responsable"
    :color="event.color"
    :is-loading="loading"
    @on-clicked="handleClick"
    no-wrap
  >
    <template v-if="event.tag" #tag>
      <v-tag
        style="margin-bottom: 0.5rem"
        type="ice"
        :status="event.tag?.status"
      >
        {{ event.tag?.text }}
      </v-tag>
    </template>
  </v-event-card>
</template>
<script lang="ts" setup>
import { PropType } from "vue";
import VEventCard from "@/components/eventCard/VEventCard.vue";
import VTag from "@/components/tag/VTag.vue";
const props = defineProps({
  event: {
    type: Object as PropType<any>,
    required: true,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["on-clicked"]);

function handleClick() {
  emit("on-clicked", props.event);
}
</script>
