<template>
  <div class="calendar-root-wrapper">
    <div class="calendar-root mode-is-mini">
      <Transition name="loading">
        <div v-if="isLoading" class="top-bar-loader" />
      </Transition>

      <div class="calendar-header">
        <div class="calendar-header__period">
          <v-dropdown
            :model-value="monthYearSelected"
            :options="months"
            type="2"
            size="lg"
            @on-change="onChangeMonth"
          />
        </div>
      </div>
      <Mini
        :key="period.start.getTime() + period.end.getTime()"
        :time="time"
        :period="period"
        :n-days="week.nDays"
        @day-was-clicked="$emit('day-was-clicked', $event)"
        @change-period="onChangePeriod"
      >
      </Mini>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, PropType, ref } from "vue";
import { IEvent } from "@/utils/types/calendar";
import Time from "@/utils/helpers/Time";
import Mini from "@/components/calendar/mini/Mini.vue";
import VDropdown from "@/components/dropdown/VDropdown.vue";
import StringHelper from "@/utils/helpers/String";

interface IPeriod {
  start: Date;
  end: Date;
  selectedDate: Date;
}

const props = defineProps({
  events: {
    type: Array as PropType<IEvent[]>,
    default: () => [],
  },
  selectedDate: {
    type: Date,
    default: new Date(),
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

defineEmits<{
  (e: "event-was-clicked", event: any): void;
  (e: "day-was-clicked", event: any): void;
}>();

const monthYearSelected: any = ref(
  String(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
);

const months = computed(() => {
  const months = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 12; j++) {
      const month = j <= 8 ? `0${j + 1}` : j + 1;
      months.push({
        value: String(`${currentYear + i}-${month}`),
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

const week = { nDays: 7 };
const time = new Time() as Time | any;

const period = ref<IPeriod>({
  start: new Date(),
  end: new Date(),
  selectedDate: props.selectedDate ? props.selectedDate : new Date(),
});

function setPeriodOnMount() {
  const currentWeek = time.getCalendarWeekDateObjects(
    period.value.selectedDate
  );
  period.value.start = currentWeek[0];
  period.value.end = currentWeek[6];
}

const onChangeMonth = (monthYear: string) => {
  const [year, month] = monthYear.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1, 1);
  period.value = {
    start: date,
    end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
    selectedDate: date,
  };
};

function onChangePeriod(value: string) {
  if (!months.value.find((m) => m.value === value)) {
    const year = Number(value.substring(0, 4));
    const month = value.substring(5, 7);
    months.value.push({
      value: String(`${year}-${month}`),
      label: StringHelper.capitalizeFirstLetter(
        new Date(year, Number(month) - 1, 1).toLocaleString("default", {
          month: "long",
          year: "numeric",
        })
      ),
    });
  }
  monthYearSelected.value = String(value);
}

onMounted(() => {
  setPeriodOnMount();
});
</script>

<style lang="scss">
.calendar-root-wrapper {
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 00px;
  display: flex;

  .calendar-root {
    flex: 1;
    border: #aaa;
    border-radius: #ccc;
    font-family: "Lato", sans-serif;

    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: column;

    .top-bar-loader {
      position: absolute;
      top: 1px;
      left: 2px;
      width: calc(100% - 4px);
      height: 3px;
      background: rgba(241, 241, 241, 0.2);
      border-radius: 16px;
      overflow: hidden;
    }

    .top-bar-loader:before {
      content: "";
      height: 4px;
      width: calc(100% - 4px);
      position: absolute;
      top: 1px;
      left: 2px;
      background: rgb(38, 132, 255);
      background: linear-gradient(
        90deg,
        rgba(38, 132, 255, 1) 0%,
        rgba(38, 132, 255, 0.5088410364145659) 48%,
        rgba(38, 132, 255, 1) 100%
      );
      animation: load 1.8s infinite;
      border-radius: 16px;
    }

    @keyframes load {
      0% {
        width: 0;
        left: -100%;
      }
      50% {
        left: 0;
        width: 100%;
      }
      100% {
        width: 0;
        left: 100%;
      }
    }

    .loading-enter-active,
    .loading-leave-active {
      transition: background 0.5s ease;
    }

    .loading-leave-to,
    .loading-enter-from {
      background-color: rgba(255, 255, 255, 0);
    }
  }
}

.calendar-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-radius: 2px;
  cursor: default;
  color: $neutral-color-low-pure;
  font-size: 0.843rem;

  @include screen-size-m {
    justify-content: space-between;
    grid-gap: 10px;
  }

  &__period {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    width: 60%;
    color: $neutral-color-low-pure;
    padding-bottom: 0.4rem;
  }

  &__period-name {
    font-size: "Lato, sans-serif ";
    text-align: center;

    @include screen-size-m {
      margin-bottom: 0;
      text-align: left;
    }
  }
}
</style>
