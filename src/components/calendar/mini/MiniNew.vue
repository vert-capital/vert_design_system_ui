<template>
  <div class="vcalendar-mini">
    <div class="vcalendar-mini--week">
      <div
        v-for="(week, weekIndex) in month"
        :key="weekIndex"
        class="vcalendar-mini--day"
      >
        <Day
          v-for="(day, dayIndex) in week"
          :key="dayIndex"
          :is-first-week="weekIndex === 0"
          :config="config"
          :day="day"
          :time="time"
          @event-was-clicked="handleClickOnEvent"
          @event-was-dragged="handleEventWasDragged"
          @day-was-clicked="$emit('day-was-clicked', $event)"
          @updated-period="$emit('updated-period', $event)"
        />
      </div>
    </div>
    <!-- event control -->
  </div>
</template>
<script lang="ts" setup>
import Day from './Day.vue';
import EventFlyout from '../partials/EventFlyout.vue';

</script>