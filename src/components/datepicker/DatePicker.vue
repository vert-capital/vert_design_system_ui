<template>
  <div
    class="date-picker"
    :class="{ 'date-picker-root': isStandAloneComponent }"
    @mouseleave="hideDatePicker"
  >
    <div
      v-if="!isStandAloneComponent"
      class="date-picker__value-display"
      @click="togglePeriodSelector"
    >
      <calendar-day />
      <span class="date-picker__value-display-text">{{ periodText }}</span>
    </div>

    <div
      v-if="showDatePicker"
      class="date-picker__week-picker"
      :class="{ 'is-in-vcalendar': !isStandAloneComponent }"
      @mouseleave="hideDatePicker"
    >
      <div class="date-picker__week-picker-navigation">
        <cherevron-left @click="toggleDatePickerPeriod('previous')"/>
        <span class="date-picker__toggle-mode" @click="toggleDatePickerMode">
          <template v-if="datePickerMode === 'month'">
            {{
              datePickerCurrentDate.toLocaleString(getLocale(), {
                month: 'long',
                year: 'numeric',
              })
            }}
          </template>

          <template v-else-if="datePickerMode === 'year'">
            {{
              new Date(datePickerCurrentDate).toLocaleString(getLocale(), {
                year: 'numeric',
              })
            }}
          </template>
        </span>
        <cherevron-right @click="toggleDatePickerPeriod('next')"/>
      </div>

      <div
        v-if="datePickerMode === 'month'"
        class="date-picker__day-names week"
      >
        <span v-for="day in weekDays" :key="day.getDate()">
          {{ time.getLocalizedNameOfWeekday(day, 'short') }}
        </span>
      </div>

      <div
        v-for="(week, weekIndex) in weekPickerDates"
        v-show="datePickerMode === 'month'"
        :key="weekIndex"
        class="week"
        :class="
          time.dateIsInWeek(selectedDate, week) && !isStandAloneComponent
            ? 'is-active'
            : ''
        "
      >
        <span
          v-for="(day, dayIndex) in week"
          :key="weekIndex + dayIndex"
          :class="{
            'is-weekend': [5, 6].includes(dayIndex),
            'is-not-in-month':
              day.getMonth() !== datePickerCurrentDate.getMonth(),
            'has-day': day,
            'is-today': time.dateIsToday(day),
            'is-disabled': checkIfDateIsDisabled(day),
          }"
          @click="!checkIfDateIsDisabled(day) ? setWeek(day) : null"
        >
          {{ day ? day.getDate() : '' }}
        </span>
      </div>

      <div v-show="datePickerMode === 'year'" class="months">
        <span
          v-for="(date, monthIndex) in monthPickerDates"
          :key="monthIndex"
          class="has-month"
          @click="setMonth(date)"
        >
          {{ new Date(date).toLocaleString(getLocale(), { month: 'long' }) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CalendarDay from '@/components/icons/CalendarDay.vue';
import ChevronLeft from '@/components/icons/ChevronLeft.vue';
import ChevronRight from '@/components/icons/ChevronRight.vue';
import Time, {
  calendarMonthType,
  calendarWeekType,
  calendarYearMonths,
} from '@/utils/helpers/Time';
import { modeType } from '@/utils/types/calendar';

interface disableDates {
  before: Date;
  after: Date;
}

interface IPeriod {
  start: Date;
  end: Date;
  selectedDate: Date;
}

export default defineComponent({
  name: 'DatePicker',

  components: {
    CalendarDay,
    ChevronLeft,
    ChevronRight,
  },

  props: {
    mode: {
      type: String,
      validator: (value: modeType) => ['month', 'week', 'day', 'personalized', 'mini'].includes(value),
      default: 'week',
    },
    timeProp: {
      type: Object as PropType<Time>,
      default: null,
    },
    periodProp: {
      type: Object as PropType<IPeriod>,
      default: null,
    },
    firstDayOfWeek: {
      type: String as PropType<'sunday' | 'monday'>,
      default: '',
    },
    defaultDate: {
      type: Date,
      default: new Date(),
    },
    locale: {
      type: String,
      default: '',
    },
    disableDates: {
      type: Object as PropType<disableDates>,
      default: null,
    },
  },

  emits: ['updated'],

  data() {
    return {
      periodText: '',
      weekPickerDates: [] as calendarMonthType,
      monthPickerDates: [] as calendarYearMonths,
      icons: {
        calendarIcon: CalendarDay,
        chevronLeft: ChevronLeft,
        chevronRight: ChevronRight,
      },
      showDatePicker: !!(this.locale && this.firstDayOfWeek) as boolean,
      datePickerCurrentDate:
        this.periodProp?.selectedDate || this.defaultDate || new Date(),
      selectedDate: this.periodProp?.selectedDate || new Date(),
      datePickerMode: 'month' as 'month' | 'year',
      weekDays: [] as calendarWeekType,
      time: this.timeProp
        ? this.timeProp
        : new Time(this.firstDayOfWeek, this.locale),
      period: this.periodProp || {
        start: new Date(),
        end: new Date(),
        selectedDate: this.defaultDate ? this.defaultDate : new Date(),
      },
    };
  },

  computed: {
    isStandAloneComponent() {
      return this.locale && this.firstDayOfWeek;
    },
  },

  watch: {
    period: {
      deep: true,
      handler() {
        if (this.selectedDate.getTime() === this.period.selectedDate.getTime())
          return;

        this.hydrateDatePicker();
      },
    },
  },

  mounted() {
    this.hydrateDatePicker(true);
  },

  methods: {
    setMonthDaysInWeekPicker(
      month: number = new Date().getMonth(),
      year: number = new Date().getFullYear()
    ) {
      this.weekPickerDates = [];
      this.weekPickerDates = this.time.getCalendarMonthSplitInWeeks(
        year,
        month
      );
    },

    togglePeriodSelector() {
      this.weekPickerDates = this.time.getCalendarMonthSplitInWeeks(
        this.datePickerCurrentDate.getFullYear(),
        this.datePickerCurrentDate.getMonth()
      );
      this.showDatePicker = !this.showDatePicker;
    },

    setWeek(date: Date, isOnMountHook = false) {
      if (!isOnMountHook) this.datePickerCurrentDate = date;

      const currentWeek = this.time.getCalendarWeekDateObjects(date);
      this.weekDays = currentWeek;
      const start = currentWeek[0];
      const end = currentWeek[6];

      switch (this.mode) {
        case 'week':
          this.periodText = `${this.time.getLocalizedDateString(
            start
          )} - ${this.time.getLocalizedDateString(end)}`;
          break;
        case 'month':
          this.periodText = this.time.getLocalizedNameOfMonth(date);
          break;
        default:
          this.periodText = this.time.getLocalizedDateString(date);
      }

      if (isOnMountHook) return;

      this.emitChange(start, end);
    },

    setMonth(date: Date) {
      this.datePickerCurrentDate = date;
      this.setMonthDaysInWeekPicker(date.getMonth(), date.getFullYear());
      this.datePickerMode = 'month';
      this.showDatePicker = true;
    },

    emitChange(start: Date, end: Date) {
      this.selectedDate = this.datePickerCurrentDate;

      if (this.mode === 'month') {
        const month = this.time.getCalendarMonthSplitInWeeks(
          this.selectedDate.getFullYear(),
          this.selectedDate.getMonth()
        );
        start = month[0][0];
        const lastWeek = month[month.length - 1];
        end = lastWeek[lastWeek.length - 1];
      } else if (this.mode === 'day') {
        start = this.selectedDate;
        end = this.selectedDate;
      }

      if (!this.isStandAloneComponent) {
        this.$emit('updated', {
          start: new Date(
            start.getFullYear(),
            start.getMonth(),
            start.getDate(),
            0,
            0,
            0
          ),
          end: this.time.setDateToEndOfDay(end),
          selectedDate: this.datePickerCurrentDate,
        });
      } else {
        this.$emit('updated', {
          year: this.datePickerCurrentDate.getFullYear(),
          month: this.datePickerCurrentDate.getMonth(),
          date: this.datePickerCurrentDate.getDate(),
        });
      }
    },

    toggleDatePickerPeriod(direction: 'previous' | 'next') {
      const currentDate = new Date(this.datePickerCurrentDate);

      if (this.datePickerMode === 'month') {
        const dateToSet = new Date(
          currentDate.getFullYear(),
          direction === 'previous'
            ? currentDate.getMonth() - 1
            : currentDate.getMonth() + 1,
          1
        );
        this.setMonthDaysInWeekPicker(
          dateToSet.getMonth(),
          dateToSet.getFullYear()
        );
        this.datePickerCurrentDate = dateToSet;
      } else {
        this.monthPickerDates = this.time.getCalendarYearMonths(
          direction === 'previous'
            ? currentDate.getFullYear() - 1
            : currentDate.getFullYear() + 1
        );
        this.datePickerCurrentDate = new Date(this.monthPickerDates[0]);
      }
    },

    toggleDatePickerMode() {
      if (this.datePickerMode === 'month') {
        this.monthPickerDates = this.time.getCalendarYearMonths(
          this.datePickerCurrentDate.getFullYear()
        );

        return (this.datePickerMode = 'year');
      }

      if (this.datePickerMode === 'year') {
        this.weekPickerDates = this.time.getCalendarMonthSplitInWeeks(
          this.datePickerCurrentDate.getFullYear(),
          this.datePickerCurrentDate.getMonth()
        );

        return (this.datePickerMode = 'month');
      }
    },

    getLocale() {
      return this.time.CALENDAR_LOCALE;
    },

    goToPeriod(direction: 'next' | 'previous') {
      let newDate;
      let newDatePayload;

      if (this.mode === 'week') {
        const week = this.time.getCalendarWeekDateObjects(
          this.datePickerCurrentDate
        );
        newDate = new Date(week[0]);
        newDatePayload =
          direction === 'next' ? newDate.getDate() + 7 : newDate.getDate() - 7;
      } else if (this.mode === 'month') {
        newDate = new Date(this.datePickerCurrentDate);
        const nDaysNextMonth = new Date(
          this.datePickerCurrentDate.getFullYear(),
          this.datePickerCurrentDate.getMonth() + 2,
          0
        ).getDate();
        const nDaysPreviousMonth = new Date(
          this.datePickerCurrentDate.getFullYear(),
          this.datePickerCurrentDate.getMonth(),
          0
        ).getDate();

        newDatePayload =
          direction === 'next'
            ? newDate.getDate() + nDaysNextMonth
            : newDate.getDate() - nDaysPreviousMonth;
      } else {
        // day
        newDate = new Date(this.datePickerCurrentDate);
        newDatePayload =
          direction === 'next' ? newDate.getDate() + 1 : newDate.getDate() - 1;
      }

      newDate.setDate(newDatePayload);
      this.setWeek(newDate);
    },

    hideDatePicker() {
      if (!this.isStandAloneComponent)
        setTimeout(() => (this.showDatePicker = false), 100);
    },

    hydrateDatePicker(isOnMountHook = false) {
      const date = isOnMountHook
        ? this.datePickerCurrentDate
        : this.selectedDate;
      this.setMonthDaysInWeekPicker(date.getMonth(), date.getFullYear());
      this.setWeek(date, isOnMountHook);
    },

    checkIfDateIsDisabled(date: Date) {
      if (!this.disableDates) return false;
      if (date.getTime() < this.disableDates.before.getTime()) return true;

      return date.getTime() > this.disableDates.after.getTime();
    },
  },
});
</script>

<style scoped lang="scss">

.date-picker {
  position: relative;
  width: fit-content;

  @include screen-size-m {
    min-width: 300px;
  }

  &:not(.is-in-vcalendar) {
    margin: 0 auto;

    @include screen-size-m {
      min-width: initial;
    }
  }

  &__value-display {
    height: 36px;
    border-radius: 4px;
    padding: 0 var(--vcalendar-spacing);
    font-size: var(--vcalendar-font-m);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--vcalendar-spacing-half);
    user-select: none;

    @include screen-size-m {
      border: var(--vcalendar-border-gray-thin);
    }

    .date-picker__value-display-text {
      display: none;

      @include screen-size-m {
        display: initial;
      }
    }

    svg {
      font-size: var(--vcalendar-font-l);

      @include screen-size-m {
        font-size: initial;
      }
    }
  }

  &__week-picker {
    padding: var(--vcalendar-spacing-half);
    z-index: 51;
    background-color: #fff;
    border: var(--vcalendar-border-gray-thin);
    border-radius: 4px;
    min-width: 250px;
    box-shadow: 0 2px 4px rgb(240 236 236 / 76%);

    &.is-in-vcalendar {
      top: calc(100% - 1px);
      position: absolute;
      right: 0;

      .mode-is-month,
      .mode-is-week & {
        @include screen-size-m {
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }

  &__week-picker-navigation {
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--vcalendar-spacing-half);
    margin-bottom: 0.25em;
    user-select: none;

    .is-icon {
      transition: var(--vcalendar-text-transition);
      color: #131313;

      @include hover {
        color: var(--vcalendar-primary);
        cursor: pointer;
      }
    }
  }

  &__toggle-mode {
    transition: var(--vcalendar-text-transition);

    @include hover {
      color: var(--vcalendar-primary);
      cursor: pointer;
    }
  }

  .week {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4px 0;

    &.is-active {
      border: 1px dashed var(--vcalendar-theme-color);
      border-radius: 4px;
    }

    span {
      display: flex;
      min-height: 32px;
      min-width: 32px;
      justify-content: center;
      align-items: center;
      flex: 1 1 100%;
      cursor: pointer;
      border-radius: 50%;
      font-size: var(--vcalendar-font-xs);

      &.is-weekend {
        color: gray;
      }

      &.has-day {
        @include hover {
          background-color: var(--vcalendar-light-gray);
        }
      }

      &.is-today {
        background-color: var(--vcalendar-primary);
        color: #fff;
      }

      &.is-not-in-month {
        color: darkgray;
      }

      &.is-disabled {
        color: darkgray;
        cursor: not-allowed;
      }
    }
  }

  &__day-names {
    text-transform: uppercase;
    font-weight: 700;
    font-size: var(--vcalendar-font-s);
  }

  .months {
    display: flex;
    flex-wrap: wrap;
    gap: var(--vcalendar-spacing-half);
    max-width: 20rem;

    span {
      padding: 4px;
      border: var(--vcalendar-border-gray-thin);
      border-radius: 2px;
      flex: 1 0 33%;
      text-align: center;
      cursor: pointer;
      font-size: var(--vcalendar-font-xs);
      transition: all 0.2s ease;

      @include hover {
        background-color: var(--vcalendar-theme-color);
        color: #fff;
        border: var(--vcalendar-border-primary-thin);
      }
    }
  }
}
</style>
