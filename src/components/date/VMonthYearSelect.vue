<template>
  <div class="vmonth-year">
    <v-dropdown
      v-model="monthYearSelected"
      :options="months"
      type="2"
      size="lg"
      @on-change="onChangeMonth"
    />
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { StringHelper } from "@/utils/helpers/String";
import VDropdown from "@/components/dropdown/VDropdown.vue";

const monthYearSelected: any = ref(
  String(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
);

const months = computed(() => {
  const months = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 12; j++) {
      months.push({
        value: String(`${currentYear + i}-${j + 1}`),
        label: StringHelper.capitalizeFirstLetter(
          new Date(currentYear + i, j, 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })
        ),
      });
    }
  }
  return months;
});

const emit = defineEmits<{
  (e: "updated", selected: any): void;
}>();

const onChangeMonth = (monthYear: string) => {
  const [year, month] = monthYear.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  const period = {
    start: date,
    end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    selectedDate: date,
  };
  emit("updated", period);
};
</script>
<style lang="scss" scoped>
.vmonth-year {
  width: 200px;
  margin-bottom: 0.5rem;
}
</style>
