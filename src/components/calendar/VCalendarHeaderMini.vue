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
import { defineComponent, PropType } from 'vue';
import Time from '@/utils/helpers/Time';
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

  props: {
    time: {
      type: Object as PropType<Time>,
      default: () => ({}),
    },
    period: {
      type: Object as PropType<IPeriod>,
      required: true,
    },
  },

  emits: ['updated-period'],

  data() {
    return {
      currentPeriod: this.period,
    };
  },

  methods: {
    handlePeriodChange(value: { start: Date; end: Date; selectedDate: Date }) {
      this.currentPeriod = value;

      this.$emit('updated-period', value);
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
