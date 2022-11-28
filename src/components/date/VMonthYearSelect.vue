<template>
  <VSelect :options="months" borderNone v-model="monthYearSelected" @onChange="onChangeMonth"/>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import VSelect from '../form/select/VSelect.vue';
import StringHelper from '@/utils/helpers/String';

const monthYearSelected: any = ref('2022-11');

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

const emit = defineEmits<{
  (e: 'updated', selected: any): void;
}>();

const onChangeMonth = (monthYear: string) => {
  emit('updated', monthYear);
  console.log(monthYear);
};

</script>