<template>
  <div class="calendar-header">
    <div v-if="periodName" class="calendar-header__period-name">
      {{ periodName }}
    </div>

    <div class="calendar-header__period">
      <div class="calendar-header__chevron-arrows">
        <chevron-left @click="goToPeriod($event, 'previous')" />
        <chevron-right @click="goToPeriod($event, 'next')" />
      </div>

      <DatePicker
        ref="periodSelect"
        :mode="mode"
        :time-prop="time"
        :period-prop="period"
        @updated="handlePeriodChange"
      />

      <div v-if="!onlyDayModeIsEnabled" class="calendar-header__mode-picker">
        <div class="calendar-header__mode-value" @click="showModePicker = true">
          {{ modeName }}
        </div>

        <div
          v-if="showModePicker"
          class="calendar-header__mode-options"
          @mouseleave="showModePicker = false"
        >
          <div
            v-if="
              !config.disableModes || !config.disableModes.includes('month')
            "
            class="calendar-header__mode-option is-month-mode"
            @click="$emit('change-mode', 'month')"
          >
            {{ getLanguage(languageKeys.month, time.CALENDAR_LOCALE) }}
          </div>

          <div
            v-if="!config.disableModes || !config.disableModes.includes('week')"
            class="calendar-header__mode-option is-week-mode"
            @click="$emit('change-mode', 'week')"
          >
            {{ getLanguage(languageKeys.week, time.CALENDAR_LOCALE) }}
          </div>

          <div
            class="calendar-header__mode-option is-day-mode"
            @click="$emit('change-mode', 'day')"
          >
            {{ getLanguage(languageKeys.day, time.CALENDAR_LOCALE) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DatePicker from '@/components/datepicker/DatePicker.vue';
import ChevronLeft from '@/components/icons/ChevronLeft.vue';
import ChevronRight from '@/components/icons/ChevronRight.vue';
import { IConfig, modeType } from '@/utils/types/calendar';
import Time from '@/utils/helpers/Time';
import getLanguage from '@/utils/language';
import String from '@/utils/helpers/String';

interface IPeriod {
  start: Date;
  end: Date;
  selectedDate: Date;
}

export default defineComponent({
  name: 'VCalendarHeader',

  components: {
    DatePicker,
    ChevronLeft,
    ChevronRight
  },

  mixins: [getLanguage],

  props: {
    config: {
      type: Object as PropType<IConfig>,
      default: () => ({}),
    },
    mode: {
      type: String,
      validator: (value: modeType) => ['month', 'week', 'day'].includes(value),
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
      modeOptions: [
        { value: 'week', label: 'Week' },
        { value: 'month', label: 'Month' },
      ],
      currentPeriod: this.period,
      showModePicker: false,
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
          ? `${startMonth} - ${fullYear}`
          : `${startMonth} - ${endMonth}`;
      }

      return (
        this.time.getLocalizedNameOfMonth(
          this.currentPeriod?.selectedDate,
          'long'
        ) +
        ' - ' +
        this.currentPeriod.selectedDate.getFullYear()
      );
    },

    modeName() {
      // @ts-ignore
      return this.getLanguage(
        this.languageKeys[this.mode],
        this.time?.CALENDAR_LOCALE
      );
    },

    onlyDayModeIsEnabled() {
      const weekIsDisabled = this.config.disableModes?.includes('week');
      const monthIsDisabled = this.config.disableModes?.includes('month');

      return this.config.disableModes && weekIsDisabled && monthIsDisabled;
    },
  },

  methods: {
    handlePeriodChange(value: { start: Date; end: Date; selectedDate: Date }) {
      this.currentPeriod = value;

      this.$emit('updated-period', value);
    },

    goToPeriod(event: MouseEvent, direction: 'previous' | 'next') {
      // @ts-ignore
      this.$refs.periodSelect.goToPeriod(direction);
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
  padding: var(--v-calendar-spacing-half);
  border-radius: var(--v-calendar-border-radius);

  @include screen-size-m {
    justify-content: space-between;
    grid-gap: var(--v-calendar-spacing);
  }

  &__period {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--v-calendar-spacing);
  }

  &__period-name {
    font-size: var(--v-calendar-font-l);
    text-align: center;

    @include screen-size-m {
      margin-bottom: 0;
      text-align: left;
    }
  }

  &__multiselects {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--v-calendar-spacing);
  }

  &__chevron-arrows {
    display: flex;
    align-items: center;
    grid-gap: 20px;

    .calendar-header__chevron-arrow {
      cursor: pointer;
      transition: color 0.2s ease;
      font-size: var(--v-calendar-font-m);

      @include hover {
        color: var(--v-calendar-gray-quite-dark);
      }
    }
  }

  &__mode-picker {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 36px;
    border-radius: 4px;
    font-size: var(--v-calendar-font-m);
    cursor: pointer;
    border: var(--v-calendar-border-gray-thin);

    .calendar-header__mode-value {
      padding: 0 var(--v-calendar-spacing);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      user-select: none;
    }

    .v-calendar-is-small & {
      display: none;
    }

    .calendar-header__mode-options {
      position: absolute;
      z-index: 51;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border: var(--v-calendar-border-gray-thin);
      background-color: #fff;

      .calendar-header__mode-option {
        padding: var(--v-calendar-spacing-half) var(--v-calendar-spacing);

        @include hover {
          background-color: var(--v-calendar-light-gray);
        }
      }
    }
  }
}
</style>
