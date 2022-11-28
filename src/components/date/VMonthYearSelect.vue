<template>
  <VSelect :options="months"/>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import VSelect from '../form/select/VSelect.vue';
import StringHelper from '@/utils/helpers/String';

const months = computed(() => {
  const months = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 12; j++) {
      months.push({
        value: `${currentYear + i}-${j}`,
        label: StringHelper.capitalizeFirstLetter(new Date(currentYear + i, j, 1).toLocaleString('default', { month: 'long', year: 'numeric' })),
      });
    }
  }
  return months;
});

</script>