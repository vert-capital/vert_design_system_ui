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
import { IConfig, modeType } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import getLanguage from '@/utils/language';
import String from '@/utils/helpers/String';
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
    config: {
      type: Object as PropType<IConfig>,
      default: () => ({}),
    },
    mode: {
      type: String,
      validator: (value: modeType) => ['month', 'week', 'day', 'personalized', 'mini'].includes(value),
      default: 'week',
    },
    time: {
      type: Object as PropType<Time>,
      default: () => ({}),
    },
    period: {
      type: Object as PropType<IPeriod>,
      required: true,
    },
  },

  emits: ['change-mode', 'updated-period'],

  data() {
    return {
      currentPeriod: this.period,
    };
  },

  computed: {
    periodName() {
      if (this.mode === 'week') {
        const startMonth = this.time.getLocalizedNameOfMonth(
          this.currentPeriod?.start,
          'long'
        );
        const endMonth = this.time.getLocalizedNameOfMonth(
          this.currentPeriod?.end,
          'long'
        );

        const fullYear = this.currentPeriod?.start.getFullYear();

        return startMonth === endMonth
          ? `${String.capitalizeFirstLetter(startMonth)} - ${fullYear}`
          : `${String.capitalizeFirstLetter(startMonth)} - ${String.capitalizeFirstLetter(endMonth)}`;
      }

      return (
        String.capitalizeFirstLetter(this.time.getLocalizedNameOfMonth(
          this.currentPeriod?.selectedDate,
          'long'
        )) +
        ' - ' +
        this.currentPeriod.selectedDate.getFullYear()
      );
    },

    modeName() {
      // @ts-ignore
      return this.getLanguage(
        this.languageKeys['mini'],
        this.time?.CALENDAR_LOCALE
      );
    },
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
