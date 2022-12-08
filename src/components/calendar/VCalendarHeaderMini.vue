<template>
  <div class="calendar-header">
    <div class="calendar-header__period">
      <VMonthYearPicker
        ref="periodSelect"
        @updated="handlePeriodChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getLanguage from '@/utils/language';
import VMonthYearPicker from '@/components/date/VMonthYearSelect.vue';

interface IPeriod {
  start: Date;
  end: Date;
  selectedDate: Date;
}

export default defineComponent({
  name: 'VCalendarHeaderMini',

  components: {
    VMonthYearPicker
  },

  mixins: [getLanguage],

  emits: ['updated-period'],

  data() {
    return {
      currentPeriod: this.period as any,
    };
  },

  methods: {
    handlePeriodChange(period: any) {
      this.currentPeriod = period;
      this.$emit('updated-period', period);
    },
  },
});
</script>

<style scoped lang="scss">

.calendar-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-radius: 2px;

  @include screen-size-m {
    justify-content: space-between;
    grid-gap: 10px;
  }

  &__period {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  &__period-name {
    font-size: 'Lato, sans-serif ';
    text-align: center;

    @include screen-size-m {
      margin-bottom: 0;
      text-align: left;
    }
  }
}
</style>
