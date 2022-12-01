var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { defineComponent, openBlock, createElementBlock, mergeProps, createElementVNode, createCommentVNode, renderSlot, useSlots, ref, Fragment, renderList, normalizeClass, withModifiers, toDisplayString, normalizeProps, createTextVNode, watch, computed, unref, createVNode, resolveComponent, normalizeStyle, createBlock, onMounted } from "vue";
var VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$c = defineComponent({
  name: "VButton",
  props: {
    size: {
      type: String,
      default: "md"
    },
    status: {
      type: String,
      default: "primary",
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    style_type: {
      type: String,
      default: "solid"
    }
  },
  computed: {
    setSizeClass() {
      return `v-btn--${this.size}`;
    },
    setStatus() {
      return `v-btn__${this.style_type}--${this.status}`;
    },
    setIcon() {
      return `/static/icons/${this.icon}.svg`;
    }
  }
});
const _hoisted_1$d = ["disabled"];
const _hoisted_2$9 = {
  key: 0,
  class: "v-btn--img"
};
const _hoisted_3$6 = ["src"];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: [_ctx.setSizeClass, _ctx.setStatus],
    disabled: _ctx.disabled,
    type: "button"
  }, _ctx.$attrs), [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_2$9, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_3$6)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 16, _hoisted_1$d);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$9], ["__file", "/home/debora/www/vert_design_system_ui/src/components/button/VButton.vue"]]);
function getItemValue(column, item) {
  if (column.includes(".")) {
    let content = "";
    const keysArr = column.split(".");
    keysArr.forEach((key, index) => {
      content = index === 0 ? item[key] : content[key];
    });
    return content;
  }
  return item[column];
}
function generateColumnContent(column, item) {
  const content = getItemValue(column, item);
  return Array.isArray(content) ? content.join(",") : content;
}
var VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _sfc_main$b = defineComponent({
  name: "VTable",
  props: {
    data: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  emits: ["click-row", "update-sort-field"],
  setup(props, { emit }) {
    const slots = useSlots();
    const clickRow = (item) => {
      emit("click-row", item);
    };
    const mustSort = ref(false);
    const clientSortOptions = ref({});
    const updateSortField = (newSortBy, oldSortType) => {
      console.log("newSortBy", newSortBy);
      console.log("oldSortType", oldSortType);
      let newSortType = null;
      if (oldSortType === "none") {
        newSortType = "asc";
      } else if (oldSortType === "asc") {
        newSortType = "desc";
      } else {
        newSortType = mustSort.value ? "asc" : null;
      }
      if (newSortType === null) {
        clientSortOptions.value = null;
      } else {
        clientSortOptions.value = {
          sortBy: newSortBy,
          sortDesc: newSortType === "desc"
        };
      }
      emit("update-sort-field", {
        sortType: newSortType,
        sortBy: newSortBy
      });
    };
    return {
      slots,
      clickRow,
      generateColumnContent,
      updateSortField
    };
  }
});
const _hoisted_1$c = { class: "v-table" };
const _hoisted_2$8 = { class: "v-table__body-wrapper" };
const _hoisted_3$5 = { class: "responsive-table" };
const _hoisted_4$3 = ["onClick"];
const _hoisted_5$3 = ["onClick"];
const _hoisted_6$2 = { class: "v-table__cell" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$c, [
    createElementVNode("div", _hoisted_2$8, [
      createElementVNode("table", _hoisted_3$5, [
        createElementVNode("thead", null, [
          createElementVNode("tr", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, (col) => {
              return openBlock(), createElementBlock("th", {
                class: normalizeClass(["v-table__cell", [{
                  "sortable": col.sortable,
                  "none": col.sortable && col.sortType === "none",
                  "desc": col.sortable && col.sortType === "desc",
                  "asc": col.sortable && col.sortType === "asc"
                }]]),
                onClick: withModifiers(($event) => col.sortable && col.sortType ? _ctx.updateSortField(col.prop, col.sortType) : null, ["stop"])
              }, toDisplayString(col.label), 11, _hoisted_4$3);
            }), 256))
          ])
        ]),
        createElementVNode("tbody", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
            return openBlock(), createElementBlock("tr", {
              key: index,
              class: "v-table__row",
              onClick: ($event) => _ctx.clickRow(item)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.headers, (col) => {
                return openBlock(), createElementBlock("td", _hoisted_6$2, [
                  _ctx.slots[`item-${col.prop}`] ? renderSlot(_ctx.$slots, `item-${col.prop}`, normalizeProps(mergeProps({ key: 0 }, item))) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(_ctx.generateColumnContent(col.prop, item)), 1)
                  ], 64))
                ]);
              }), 256))
            ], 8, _hoisted_5$3);
          }), 128))
        ])
      ])
    ])
  ]);
}
var VTable = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$8], ["__file", "/home/debora/www/vert_design_system_ui/src/components/table/VTable.vue"]]);
var VSelect_scss_vue_type_style_index_0_src_4a2786ac_lang = "";
const _hoisted_1$b = { class: "v-select" };
const _hoisted_2$7 = {
  key: 0,
  class: "v-select--label"
};
const _hoisted_3$4 = ["for"];
const _hoisted_4$2 = { class: "v-selec--content" };
const _hoisted_5$2 = ["name", "id", "required", "disabled"];
const _hoisted_6$1 = {
  key: 0,
  value: ""
};
const _hoisted_7$1 = ["value", "selected"];
const _sfc_main$a = defineComponent({
  __name: "VSelect",
  props: {
    id: { type: String, required: false },
    name: { type: String, required: false },
    placeholder: { type: String, required: false },
    label: { type: String, required: false },
    options: { type: Array, required: true, default: () => [] },
    required: { type: Boolean, required: false },
    disable: { type: Boolean, required: false },
    size: { type: String, required: false, default: "lg" },
    modelValue: { type: [String, Number], required: false, default: "" },
    borderNone: { type: Boolean, required: false, default: false }
  },
  emits: ["onChange", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const selected = ref(props.modelValue);
    watch(["modelValue"], (modelValue) => {
      if (modelValue !== selected.value) {
        selected.value = modelValue;
      }
    });
    function selectChange(event) {
      selected.value = event.target.value;
      emit("onChange", selected.value);
      emit("update:modelValue", selected.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$b, [
        __props.label ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
          createElementVNode("label", { for: __props.id }, toDisplayString(__props.label), 9, _hoisted_3$4)
        ])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_4$2, [
          createElementVNode("select", {
            class: normalizeClass([
              { "v-select--border": props.borderNone },
              `v-select--input v-select--size-${__props.size}`
            ]),
            name: __props.name,
            id: __props.id,
            required: __props.required,
            disabled: __props.disable,
            onChange: _cache[0] || (_cache[0] = ($event) => selectChange($event))
          }, [
            __props.placeholder ? (openBlock(), createElementBlock("option", _hoisted_6$1, toDisplayString(__props.placeholder), 1)) : createCommentVNode("v-if", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
              return openBlock(), createElementBlock("option", {
                value: option.value,
                selected: option.value == selected.value,
                "aria-checked": "false"
              }, toDisplayString(option.label), 9, _hoisted_7$1);
            }), 256))
          ], 42, _hoisted_5$2)
        ])
      ]);
    };
  }
});
var VSelect = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "/home/debora/www/vert_design_system_ui/src/components/form/select/VSelect.vue"]]);
var VPopUp_scss_vue_type_style_index_0_src_12e74449_lang = "";
var VCard_scss_vue_type_style_index_0_src_28d3c952_lang = "";
const _hoisted_1$a = { class: "v-section__header" };
const _hoisted_2$6 = { class: "v-section__header--title" };
const _hoisted_3$3 = { class: "v-section__body" };
defineComponent({
  __name: "VCard",
  props: {
    title: { type: String, required: true, default: "Titulo" },
    type: { type: String, required: true, default: "default" }
  },
  setup(__props) {
    const props = __props;
    const setType = computed(() => `card--${props.type}`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["card", [unref(setType)]])
      }, [
        createElementVNode("div", _hoisted_1$a, [
          createElementVNode("div", _hoisted_2$6, [
            createElementVNode("h3", null, toDisplayString(props.title), 1)
          ]),
          createElementVNode("div", null, [
            renderSlot(_ctx.$slots, "buttons"),
            renderSlot(_ctx.$slots, "input")
          ])
        ]),
        createElementVNode("div", _hoisted_3$3, [
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2);
    };
  }
});
var VTab_scss_vue_type_style_index_0_src_a3c685ae_lang = "";
const _sfc_main$9 = defineComponent({
  name: "VTab",
  props: {
    eixo: {
      type: String,
      default: "x"
    },
    borderBottom: {
      type: Boolean,
      default: false
    }
  }
});
const _hoisted_1$9 = { class: "box" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$9, [
    createElementVNode("div", {
      class: normalizeClass([{ "tab--border": _ctx.borderBottom }, `tab--${_ctx.eixo}`])
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ]);
}
var VTab = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$7], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tab/VTab.vue"]]);
var VTag_scss_vue_type_style_index_0_src_73d26849_lang = "";
const _sfc_main$8 = defineComponent({
  name: "VTag",
  props: {
    status: {
      type: String,
      default: "helper",
      required: true
    },
    type: {
      type: String,
      default: "solid",
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    square: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setIcon() {
      return `/static/icons/${this.icon}.svg`;
    }
  }
});
const _hoisted_1$8 = {
  key: 0,
  class: "v-tag--img"
};
const _hoisted_2$5 = ["src"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([`v-tag__${_ctx.type}--${_ctx.status}`, { "v-tag--square": _ctx.square }])
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_2$5)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var VTag = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$6], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tag/VTag.vue"]]);
class EDate extends Date {
  get fullYear() {
    return this.getFullYear();
  }
  get month() {
    return this.getMonth();
  }
  get date() {
    return this.getDate();
  }
}
class String$1 {
  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static isDate(date) {
    return date.match(/^\d{4}-\d{2}-\d{2}$/);
  }
  static isDateTime(date) {
    return date.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/);
  }
}
class Time {
  constructor(firstDayOfWeek = "monday", locale = null, dayBoundaries = {
    start: 0,
    end: 2400
  }) {
    __publicField(this, "FIRST_DAY_OF_WEEK");
    __publicField(this, "CALENDAR_LOCALE");
    __publicField(this, "ALL_HOURS");
    __publicField(this, "DAY_START");
    __publicField(this, "DAY_END");
    __publicField(this, "HOURS_PER_DAY", 24);
    __publicField(this, "MS_PER_DAY");
    this.FIRST_DAY_OF_WEEK = firstDayOfWeek;
    this.CALENDAR_LOCALE = locale ? locale : "pt-BR";
    this.ALL_HOURS = [
      0,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1e3,
      1100,
      1200,
      1300,
      1400,
      1500,
      1600,
      1700,
      1800,
      1900,
      2e3,
      2100,
      2200,
      2300,
      2400
    ];
    this.DAY_START = dayBoundaries.start;
    this.DAY_END = dayBoundaries.end;
    this.HOURS_PER_DAY = (() => {
      const convertTimePointToHours = (timePoint) => {
        if (timePoint === 0)
          return 0;
        return timePoint / 100;
      };
      return convertTimePointToHours(this.DAY_END) - convertTimePointToHours(this.DAY_START);
    })();
    this.MS_PER_DAY = 864e5;
  }
  getDatesBetweenTwoDates(start, end) {
    for (var arr = [], dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
      arr.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
    }
    return arr;
  }
  getCalendarWeekDateObjects(date = null) {
    const selectedDate = date ? date : new Date();
    let subtractedDaysToGetFirstDate;
    if (this.FIRST_DAY_OF_WEEK === "sunday")
      subtractedDaysToGetFirstDate = selectedDate.getDay();
    else
      subtractedDaysToGetFirstDate = selectedDate.getDay() === 0 ? 6 : selectedDate.getDay() - 1;
    const dateOfFirstDayOfWeek = selectedDate.getDate() - subtractedDaysToGetFirstDate;
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      dateOfFirstDayOfWeek
    );
    return this.getDatesBetweenTwoDates(
      firstDay,
      new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        firstDay.getDate() + 6
      )
    );
  }
  getCalendarMonthSplitInWeeks(yyyy, mm) {
    const month = [];
    const selectedDate = ![typeof yyyy, typeof mm].includes("undefined") ? new Date(yyyy, mm, 1) : new Date();
    const firstDateOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const firstWeekOfMonth = this.getCalendarWeekDateObjects(firstDateOfMonth);
    month.push(firstWeekOfMonth);
    let isInMonth = true;
    let mondayOfWeekToPush = firstWeekOfMonth[0];
    const specifiedMonth = selectedDate.getMonth();
    while (isInMonth) {
      const newMonday = new Date(
        mondayOfWeekToPush.getFullYear(),
        mondayOfWeekToPush.getMonth(),
        mondayOfWeekToPush.getDate() + 7
      );
      if (newMonday.getMonth() === specifiedMonth) {
        month.push(this.getCalendarWeekDateObjects(newMonday));
        mondayOfWeekToPush = newMonday;
      } else {
        isInMonth = false;
      }
    }
    return month;
  }
  getCalendarYearMonths(year = null) {
    const selectedYear = year ? year : new Date().getFullYear();
    const yearList = [];
    let month = 0;
    while (month <= 11) {
      yearList.push(new Date(selectedYear, month, 1));
      month++;
    }
    return yearList;
  }
  getHourAndMinutesFromTimePoints(timePoints) {
    const time = timePoints.toString();
    let hour = "0";
    let minutes = "0";
    if (time.length === 4) {
      hour = time[0] + time[1];
      minutes = time[2] + time[3];
    } else if (time.length === 3) {
      hour = time[0];
      minutes = time[1] + time[2];
    }
    return {
      hour: +hour,
      minutes: +minutes
    };
  }
  getHourLocaleStringFromHourDigits(timePoints) {
    const { hour, minutes } = this.getHourAndMinutesFromTimePoints(timePoints);
    const hourLocaleString = new Date(
      2100,
      0,
      1,
      +hour,
      +minutes,
      0
    ).toLocaleTimeString(this.CALENDAR_LOCALE, {
      hour: "2-digit"
    });
    if (hourLocaleString[0] === "0")
      return hourLocaleString.substring(1);
    return hourLocaleString;
  }
  getLocalizedNameOfWeekday(date, weekdayNameLength = "short") {
    return String$1.capitalizeFirstLetter(date.toLocaleDateString(this.CALENDAR_LOCALE, {
      weekday: weekdayNameLength
    }));
  }
  getLocalizedNameOfMonth(date, monthNameLength = "short") {
    return date.toLocaleDateString(this.CALENDAR_LOCALE, {
      month: monthNameLength
    });
  }
  getLocalizedDateString(date) {
    return date.toLocaleDateString(this.CALENDAR_LOCALE);
  }
  getDateTimeStringFromDate(date, timeIsStartOrEndOfDay) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const fullDate = `${y}-${m >= 10 ? m : "0" + m}-${d >= 10 ? d : "0" + d}`;
    if (!timeIsStartOrEndOfDay) {
      const hour = date.getHours();
      const minutes = date.getMinutes();
      return `${fullDate} ${hour >= 10 ? hour : "0" + hour}:${minutes >= 10 ? minutes : "0" + minutes}`;
    }
    const fullTime = timeIsStartOrEndOfDay === "start" ? "00:00" : "23:59";
    return `${fullDate} ${fullTime}`;
  }
  getLocalizedTime(dateTimeString) {
    const h = dateTimeString.substring(11, 13);
    const m = dateTimeString.substring(14, 16);
    const d = new Date();
    d.setHours(+h);
    d.setMinutes(+m);
    return d.toLocaleTimeString(this.CALENDAR_LOCALE, {
      hour: "numeric",
      minute: "numeric"
    });
  }
  getLocalizedHour(date) {
    return date.toLocaleTimeString(this.CALENDAR_LOCALE, { hour: "2-digit" });
  }
  getAllVariablesFromDateTimeString(dateTimeString) {
    return {
      year: +dateTimeString.substring(0, 4),
      month: +dateTimeString.substring(5, 7) - 1,
      date: +dateTimeString.substring(8, 10),
      hour: +dateTimeString.substring(11, 13),
      minutes: +dateTimeString.substring(14, 16)
    };
  }
  dateIsToday(date) {
    const {
      fullYear: yearToday,
      month: monthToday,
      date: dateToday
    } = new EDate();
    const {
      fullYear: dateYear,
      month: dateMonth,
      date: dateDate
    } = new EDate(date);
    return yearToday === dateYear && monthToday === dateMonth && dateToday === dateDate;
  }
  dateIsInWeek(dateToCheck, week) {
    const { date, month, fullYear } = new EDate(dateToCheck);
    for (const weekDay of week) {
      const dateIsSame = date === weekDay.getDate();
      const monthIsSame = month === weekDay.getMonth();
      const yearIsSame = fullYear === weekDay.getFullYear();
      if (dateIsSame && monthIsSame && yearIsSame)
        return true;
    }
    return false;
  }
  getDateStringFromDate(date) {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    return `${yyyy}-${mm >= 10 ? mm : "0" + mm}-${dd >= 10 ? dd : "0" + dd}`;
  }
  addMinutesToDateTimeString(minutes, dateTimeString) {
    const {
      year: oldYear,
      month: oldMonth,
      date: oldDate,
      hour: oldHour,
      minutes: oldMinutes
    } = this.getAllVariablesFromDateTimeString(dateTimeString);
    const oldDateObject = new Date(
      oldYear,
      oldMonth,
      oldDate,
      oldHour,
      oldMinutes
    );
    const newDateObject = new Date(oldDateObject.getTime() + minutes * 6e4);
    return this.getDateTimeStringFromDate(newDateObject);
  }
  addDaysToDateTimeString(days, dateTimeString) {
    return this.addMinutesToDateTimeString(days * 1440, dateTimeString);
  }
  dateStringsHaveEqualDates(dateTimeString1, dateTimeString2) {
    const {
      year: year1,
      month: month1,
      date: date1
    } = this.getAllVariablesFromDateTimeString(dateTimeString1);
    const {
      year: year2,
      month: month2,
      date: date2
    } = this.getAllVariablesFromDateTimeString(dateTimeString2);
    return year1 === year2 && month1 === month2 && date1 === date2;
  }
  setDateToEndOfDay(date) {
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23,
      59,
      59,
      999
    );
  }
  turnMinutesIntoPercentageOfHour(minutes) {
    const oneMinutePercentage = 100 / 60;
    const minutePoints = oneMinutePercentage * minutes;
    if (minutePoints < 10)
      return "0" + minutePoints;
    return minutePoints.toString();
  }
  getPercentageOfDayFromDateTimeString(dateTimeString, dayStart, dayEnd) {
    const pointsInDay = dayEnd - dayStart;
    const hour = dateTimeString.substring(11, 13);
    const minutes = dateTimeString.substring(14, 16);
    const minutesPoints = this.turnMinutesIntoPercentageOfHour(+minutes);
    const eventPoints = +(hour + minutesPoints);
    const eventPointsIntoDay = eventPoints - dayStart;
    return eventPointsIntoDay / pointsInDay * 100;
  }
  setSegmentOfDateTimeString(dateTimeString, segments) {
    if (segments.hour < 0 || segments.hour > 23)
      throw new Error("Invalid hour");
    segments.hour = String(
      segments.hour < 10 ? "0" + segments.hour : segments.hour
    );
    dateTimeString = dateTimeString.replace(/\d{2}:/, segments.hour + ":");
    return dateTimeString;
  }
}
const languageKeys = {
  week: {
    "it-IT": "Settimana",
    "en-US": "Week",
    "de-DE": "Woche",
    "sv-SE": "Vecka",
    "zh-CN": "\u5468",
    "pt-BR": "Semana",
    "fr-FR": "Semaine"
  },
  month: {
    "it-IT": "Mese",
    "en-US": "Month",
    "de-DE": "Monat",
    "sv-SE": "M\xE5nad",
    "zh-CN": "\u6708",
    "pt-BR": "M\xEAs",
    "fr-FR": "Mois"
  },
  day: {
    "it-IT": "Giorno",
    "en-US": "Day",
    "de-DE": "Tag",
    "sv-SE": "Dag",
    "zh-CN": "\u65E5",
    "pt-BR": "Dia",
    "fr-FR": "Jour"
  },
  personalized: {
    "it-IT": "Personalizzato",
    "en-US": "Personalized",
    "de-DE": "Personalisiert",
    "sv-SE": "Personlig",
    "zh-CN": "\u4E2A\u6027\u5316",
    "pt-BR": "Personalizado",
    "fr-FR": "Personnalis\xE9"
  },
  mini: {
    "it-IT": "Mini",
    "en-US": "Mini",
    "de-DE": "Mini",
    "sv-SE": "Mini",
    "zh-CN": "\u8FF7\u4F60",
    "pt-BR": "Mini",
    "fr-FR": "Mini"
  },
  moreEvents: {
    "it-IT": "+ altri eventi",
    "en-US": "+ more events",
    "de-DE": "+ weitere Ereignisse",
    "sv-SE": "+ fler h\xE4ndelser",
    "zh-CN": "\u5217\u51FA\u5176\u4ED6\u7ED3\u679C",
    "pt-BR": "+ mais eventos",
    "fr-FR": "+ d'autres \xE9v\xE9nements"
  }
};
var getLanguage = {
  data() {
    return {
      languageKeys
    };
  },
  methods: {
    getLanguage(languageKeys2, locale) {
      if (locale.startsWith("de"))
        locale = "de-DE";
      if (locale.startsWith("en"))
        locale = "en-US";
      if (locale.startsWith("it"))
        locale = "it-IT";
      if (locale.startsWith("sv"))
        locale = "sv-SE";
      if (locale.startsWith("zh"))
        locale = "zh-CN";
      if (locale.startsWith("pt"))
        locale = "pt-BR";
      if (locale.startsWith("fr"))
        locale = "fr-FR";
      return languageKeys2[locale] ? languageKeys2[locale] : languageKeys2["en-US"] || "";
    }
  }
};
var VMonthYearSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = { class: "vmonth-year" };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VMonthYearSelect",
  emits: ["updated"],
  setup(__props, { emit }) {
    const monthYearSelected = ref("2022-11");
    const months = computed(() => {
      const months2 = [];
      const currentYear = new Date().getFullYear();
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 12; j++) {
          months2.push({
            value: String(`${currentYear + i}-${j + 1}`),
            label: String$1.capitalizeFirstLetter(new Date(currentYear + i, j, 1).toLocaleString("default", { month: "long", year: "numeric" }))
          });
        }
      }
      return months2;
    });
    const onChangeMonth = (monthYear) => {
      const [year, month] = monthYear.split("-");
      const date = new Date(parseInt(year), parseInt(month) - 1, 1);
      const period = {
        start: date,
        end: new Date(date.getFullYear(), date.getMonth() + 1, 0),
        selectedDate: date
      };
      emit("updated", period);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createVNode(VSelect, {
          options: unref(months),
          borderNone: "",
          modelValue: monthYearSelected.value,
          onOnChange: onChangeMonth,
          size: "lg"
        }, null, 8, ["options", "modelValue"])
      ]);
    };
  }
});
var VMonthYearPicker = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-59a07538"], ["__file", "/home/debora/www/vert_design_system_ui/src/components/date/VMonthYearSelect.vue"]]);
var VCalendarHeaderMini_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent({
  name: "VCalendarHeaderMini",
  components: {
    VMonthYearPicker
  },
  mixins: [getLanguage],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    mode: {
      type: String$1,
      validator: (value) => ["month", "week", "day", "personalized", "mini"].includes(value),
      default: "week"
    },
    time: {
      type: Object,
      default: () => ({})
    },
    period: {
      type: Object,
      required: true
    }
  },
  emits: ["change-mode", "updated-period"],
  data() {
    return {
      currentPeriod: this.period
    };
  },
  computed: {
    periodName() {
      var _a, _b, _c, _d;
      if (this.mode === "week") {
        const startMonth = this.time.getLocalizedNameOfMonth(
          (_a = this.currentPeriod) == null ? void 0 : _a.start,
          "long"
        );
        const endMonth = this.time.getLocalizedNameOfMonth(
          (_b = this.currentPeriod) == null ? void 0 : _b.end,
          "long"
        );
        const fullYear = (_c = this.currentPeriod) == null ? void 0 : _c.start.getFullYear();
        return startMonth === endMonth ? `${String$1.capitalizeFirstLetter(startMonth)} - ${fullYear}` : `${String$1.capitalizeFirstLetter(startMonth)} - ${String$1.capitalizeFirstLetter(endMonth)}`;
      }
      return String$1.capitalizeFirstLetter(this.time.getLocalizedNameOfMonth(
        (_d = this.currentPeriod) == null ? void 0 : _d.selectedDate,
        "long"
      )) + " - " + this.currentPeriod.selectedDate.getFullYear();
    },
    modeName() {
      var _a;
      return this.getLanguage(
        this.languageKeys["mini"],
        (_a = this.time) == null ? void 0 : _a.CALENDAR_LOCALE
      );
    }
  },
  methods: {
    handlePeriodChange(value) {
      this.currentPeriod = value;
      this.$emit("updated-period", value);
    }
  }
});
const _hoisted_1$6 = { class: "calendar-header" };
const _hoisted_2$4 = { class: "calendar-header__period" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VMonthYearPicker = resolveComponent("VMonthYearPicker");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", _hoisted_2$4, [
      createVNode(_component_VMonthYearPicker, {
        ref: "periodSelect",
        mode: _ctx.mode,
        "time-prop": _ctx.time,
        "period-prop": _ctx.period,
        onUpdated: _ctx.handlePeriodChange
      }, null, 8, ["mode", "time-prop", "period-prop", "onUpdated"])
    ])
  ]);
}
var AppHeaderMini = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-16b59cd2"], ["__file", "/home/debora/www/vert_design_system_ui/src/components/calendar/VCalendarHeaderMini.vue"]]);
const DATE_TIME_PATTERN = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const ITENS_COLOR = {
  yellow: "#E6CF42",
  primary: "#00747A",
  green: "#41d394",
  red: "#F07363",
  orange: "#F4A053",
  purple: "#885DE2",
  blue: "#8CB3FF",
  black: "#171919"
};
class Errors {
  static checkEventProperties(event) {
    if (!event.id)
      console.warn(
        `${this.PREFIX} o campo 'id' \xE9 obrigat\xF3rio 
${this.SUFFIX}`
      );
    if (!event.title)
      console.warn(
        `${this.PREFIX}o campo 'title' \xE9 obrigat\xF3rio 
${this.SUFFIX}`
      );
    if (!event.time)
      console.warn(
        `${this.PREFIX} required event property 'time' is missing 
${this.SUFFIX}`
      );
    if (!event.time.start)
      console.warn(
        `${this.PREFIX} required event property 'time.start' is missing 
${this.SUFFIX}`
      );
    if (!event.time.end)
      console.warn(
        `${this.PREFIX} required event property 'time.end' is missing 
${this.SUFFIX}`
      );
    if (!["number", "string"].includes(typeof event.id))
      console.warn(
        `${this.PREFIX} event property 'id' expects a string or a number, received ${typeof event.id} 
${this.SUFFIX}`
      );
    if (typeof event.title !== "string")
      console.warn(
        `${this.PREFIX} event property 'title' expects a string, received ${typeof event.title} 
${this.SUFFIX}`
      );
    if (!DATE_TIME_PATTERN.test(event.time.start) && !DATE_PATTERN.test(event.time.start))
      console.warn(
        `${this.PREFIX} event property 'time.start' expects a string formatted like 'YYYY-MM-DD hh:mm', or 'YYYY-MM-DD', received ${event.time.start} 
${this.SUFFIX}`
      );
    if (!DATE_TIME_PATTERN.test(event.time.end) && !DATE_PATTERN.test(event.time.end))
      console.warn(
        `${this.PREFIX} event property 'time.end' expects a string formatted like 'YYYY-MM-DD hh:mm',  or 'YYYY-MM-DD', received ${event.time.end} 
${this.SUFFIX}`
      );
  }
  static checkConfig(config) {
    if (config.locale && !/^[a-z]{2}-[A-Z]{2}$/.test(config.locale))
      console.warn(
        `${this.PREFIX} config.locale expects a string of format xx-XX, received: ${config.locale}`
      );
    if (config.defaultMode && !["month", "week", "day"].some((mode) => mode === config.defaultMode))
      console.warn(
        `${this.PREFIX} config.defaultMode expects either one of the values "day", "week" or "month"`
      );
  }
}
__publicField(Errors, "PREFIX", "[VCalendar warning]");
__publicField(Errors, "SUFFIX", "");
var FullDayEvent_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  name: "FullDayEvent",
  props: {
    scheduleEvent: {
      type: Object,
      default: null
    },
    config: {
      type: Object,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  },
  emits: ["event-was-clicked"],
  data() {
    return {
      colors: ITENS_COLOR,
      eventColor: "#fff",
      eventBackgroundColor: "",
      eventElementIdPrefix: "week-carousel__event-id-"
    };
  },
  computed: {
    eventWidth() {
      if (this.mode !== "day")
        return `calc(${this.scheduleEvent.nDays * 100}% - 6px)`;
      return "calc(100% - 6px)";
    }
  },
  mounted() {
    this.setColors();
  },
  methods: {
    setColors() {
      var _a, _b, _c;
      if (((_a = this.scheduleEvent) == null ? void 0 : _a.colorScheme) && ((_b = this.config.style) == null ? void 0 : _b.colorSchemes) && this.config.style.colorSchemes[this.scheduleEvent.colorScheme]) {
        this.eventColor = this.config.style.colorSchemes[this.scheduleEvent.colorScheme].color;
        return this.eventBackgroundColor = this.config.style.colorSchemes[this.scheduleEvent.colorScheme].backgroundColor;
      }
      if ((_c = this.scheduleEvent) == null ? void 0 : _c.color) {
        this.eventColor = "#fff";
        return this.eventBackgroundColor = this.colors[this.scheduleEvent.color];
      }
      return this.eventBackgroundColor = this.colors.blue;
    },
    handleClickOnEvent() {
      const eventElement = document.getElementById(
        this.eventElementIdPrefix + this.scheduleEvent.id
      );
      this.$emit("event-was-clicked", {
        clickedEvent: this.scheduleEvent,
        eventElement
      });
    }
  }
});
const _hoisted_1$5 = ["id"];
const _hoisted_2$3 = {
  key: 1,
  class: "week-carousel__event"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.scheduleEvent ? (openBlock(), createElementBlock("div", {
    key: 0,
    id: `${_ctx.eventElementIdPrefix}${_ctx.scheduleEvent.id}`,
    class: "week-carousel__event is-event",
    style: normalizeStyle({
      width: _ctx.eventWidth,
      color: _ctx.eventColor,
      backgroundColor: _ctx.eventBackgroundColor,
      zIndex: 1
    }),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClickOnEvent && _ctx.handleClickOnEvent(...args))
  }, toDisplayString(_ctx.scheduleEvent.title), 13, _hoisted_1$5)) : (openBlock(), createElementBlock("div", _hoisted_2$3));
}
var FullDayEvent = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-113e4e64"], ["__file", "/home/debora/www/vert_design_system_ui/src/components/calendar/mini/FullDayEvent.vue"]]);
var WeekCarousel_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent({
  name: "Weekcarousel",
  components: { FullDayEvent },
  props: {
    days: {
      type: Array,
      required: true
    },
    time: {
      type: Object,
      required: true
    },
    fullDayEvents: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      required: true
    }
  },
  emits: ["event-was-clicked", "day-was-clicked"],
  data() {
    return {
      now: new Date(),
      selectedDay: ""
    };
  },
  methods: {
    getDaysDate(day) {
      const { date } = this.time.getAllVariablesFromDateTimeString(
        day.dateTimeString
      );
      return date;
    },
    isLastDayOfMonth(day) {
      this.time.getAllVariablesFromDateTimeString(
        day.dateTimeString
      );
    },
    onHandleDayWasClicked(day) {
      this.$emit("day-was-clicked", day);
    }
  }
});
const _hoisted_1$4 = { class: "week-carousel" };
const _hoisted_2$2 = ["onClick"];
const _hoisted_3$2 = { class: "week-carousel__day-name" };
const _hoisted_4$1 = { class: "week-carousel__date" };
const _hoisted_5$1 = { class: "week-carousel__events" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_FullDayEvent = resolveComponent("FullDayEvent");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.days, (day, dayIndex) => {
      return openBlock(), createElementBlock("div", {
        key: dayIndex,
        class: normalizeClass(["week-carousel__day", [{
          "is-today": _ctx.time.getDateTimeStringFromDate(_ctx.now, "start") === day.dateTimeString
        }, { "is-selected": day.dateTimeString.substring(0, 10) === _ctx.selectedDay }]]),
        onClick: ($event) => _ctx.onHandleDayWasClicked(day)
      }, [
        createElementVNode("div", _hoisted_3$2, toDisplayString(day.dayName.substring(0, 3)), 1),
        createElementVNode("div", _hoisted_4$1, toDisplayString(_ctx.getDaysDate(day)), 1),
        createElementVNode("div", _hoisted_5$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(day.fullDayEvents, (event, key) => {
            return openBlock(), createElementBlock(Fragment, { key }, [
              key !== "date" ? (openBlock(), createBlock(_component_FullDayEvent, {
                key: 0,
                "schedule-event": typeof event === "object" ? event : null,
                config: _ctx.config,
                mode: "week",
                onEventWasClicked: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("event-was-clicked", $event))
              }, null, 8, ["schedule-event", "config"])) : createCommentVNode("v-if", true)
            ], 64);
          }), 128))
        ])
      ], 10, _hoisted_2$2);
    }), 128))
  ]);
}
var WeekCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-5d140c4b"], ["__file", "/home/debora/www/vert_design_system_ui/src/components/calendar/mini/WeekCarousel.vue"]]);
var Mini_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { class: "vcalendar-mini" };
const _hoisted_2$1 = { class: "vcalendar-mini--week" };
const _hoisted_3$1 = { class: "vcalendar-mini--day" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Mini",
  props: {
    config: {
      type: Object,
      required: true
    },
    time: {
      type: Object,
      required: true
    },
    period: {
      type: Object,
      required: true
    },
    eventsProp: {
      type: Array,
      default: () => []
    },
    nDays: {
      type: Number,
      default: 7
    }
  },
  emits: {
    "event-was-clicked": (event) => true,
    "day-was-clicked": (day) => true
  },
  setup(__props, { emit: emits }) {
    const props = __props;
    const days = ref([]);
    const selectedEvent = ref(null);
    const selectedEventElement = ref(null);
    const events = ref(props.eventsProp);
    const fullDayEvents = ref([]);
    const dayNameSelected = ref("");
    const handleClickOnEvent = (event, element) => {
      selectedEvent.value = event;
      selectedEventElement.value = element;
      emits("event-was-clicked", event);
    };
    const setDays = () => {
      const days_ = props.time.getCalendarWeekDateObjects(props.period.start).map((day) => {
        const dayName = props.time.getLocalizedNameOfWeekday(day, "long");
        const dateTimeString = props.time.getDateTimeStringFromDate(day, "start");
        if (props.time.dateIsToday(day)) {
          getDateAndDayLongName(day, true);
        }
        const events_ = events.value.filter((event) => {
          const eventIsInDay = event.time.start.substring(0, 11) === dateTimeString.substring(0, 11);
          let eventIsInDayBoundaries = true;
          return eventIsInDay && eventIsInDayBoundaries;
        });
        return { dayName, dateTimeString, events: events_ };
      });
      if (props.nDays === 5 && props.time.FIRST_DAY_OF_WEEK === "monday") {
        days_.splice(5, 2);
        fullDayEvents.value.splice(5, 2);
      } else if (props.nDays === 5 && props.time.FIRST_DAY_OF_WEEK === "sunday") {
        days_.splice(6, 1);
        fullDayEvents.value.splice(6, 1);
        days_.splice(0, 1);
        fullDayEvents.value.splice(0, 1);
      }
      days.value = days_;
    };
    const mergeFullDayEventsIntoDays = () => {
      for (const [dayIndex] of days.value.entries()) {
        days.value[dayIndex].fullDayEvents = fullDayEvents.value[dayIndex];
      }
    };
    const setInitialEvents = () => {
      setDays();
      mergeFullDayEventsIntoDays();
    };
    const getDateAndDayLongName = (day, isToday = false) => {
      const { date } = props.time.getAllVariablesFromDateTimeString(props.time.getDateTimeStringFromDate(day, "start"));
      dayNameSelected.value = (isToday ? "Hoje - " : "") + props.time.getLocalizedNameOfWeekday(day, "short") + ", " + date + " de " + String$1.capitalizeFirstLetter(props.time.getLocalizedNameOfMonth(day, "short"));
      return dayNameSelected.value;
    };
    const handleDayWasClicked = (day) => {
      const replate_date = day.dateTimeString.replace("-", ",");
      const dayDate = new Date(replate_date);
      day.dayName = getDateAndDayLongName(dayDate, props.time.dateIsToday(dayDate));
      emits("day-was-clicked", day);
    };
    onMounted(() => {
      setInitialEvents();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$1, [
          createVNode(WeekCarousel, {
            days: days.value,
            time: __props.time,
            "full-day-events": fullDayEvents.value,
            config: __props.config,
            onEventWasClicked: handleClickOnEvent,
            onDayWasClicked: handleDayWasClicked
          }, null, 8, ["days", "time", "full-day-events", "config"])
        ]),
        createElementVNode("div", _hoisted_3$1, toDisplayString(dayNameSelected.value), 1)
      ]);
    };
  }
});
var Mini = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-7d7d84ae"], ["__file", "/home/debora/www/vert_design_system_ui/src/components/calendar/mini/Mini.vue"]]);
var VCalendarMini_vue_vue_type_style_index_0_lang = "";
defineComponent({
  name: "VCalendarMini",
  components: {
    AppHeaderMini,
    Mini
  },
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    events: {
      type: Array,
      default: () => []
    },
    selectedDate: {
      type: Date,
      default: new Date()
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "event-was-clicked",
    "day-was-clicked"
  ],
  data() {
    var _a, _b, _c, _d, _e;
    return {
      wasInitialized: 0,
      period: {
        start: new Date(),
        end: new Date(),
        selectedDate: this.selectedDate ? this.selectedDate : new Date()
      },
      week: {
        nDays: 7
      },
      mode: "mini",
      time: new Time(
        (_b = (_a = this.config) == null ? void 0 : _a.week) == null ? void 0 : _b.startsOn,
        ((_c = this.config) == null ? void 0 : _c.locale) || null
      ),
      fontFamily: ((_e = (_d = this.config) == null ? void 0 : _d.style) == null ? void 0 : _e.fontFamily) || "'Lato",
      calendarWidth: 0,
      eventRenderingKey: 0,
      eventsDataProperty: this.events || []
    };
  },
  watch: {
    events: {
      deep: true,
      handler(newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.eventsDataProperty = newVal;
          this.eventRenderingKey = this.eventRenderingKey + 1;
        }
        if (this.config.isSilent)
          return;
        this.events.forEach((e) => Errors.checkEventProperties(e));
      },
      immediate: true
    },
    config: {
      deep: true,
      handler(value) {
        Errors.checkConfig(value);
      },
      immediate: true
    }
  },
  mounted() {
    this.setConfigOnMount();
    this.setPeriodOnMount();
  },
  methods: {
    setConfigOnMount() {
      this.wasInitialized = 1;
    },
    setPeriodOnMount() {
      const currentWeek = this.time.getCalendarWeekDateObjects(
        this.period.selectedDate
      );
      this.period.start = currentWeek[0];
      this.period.end = currentWeek[6];
    },
    handleEventWasUpdated(calendarEvent, eventType) {
      const newEvents = this.eventsDataProperty.filter(
        (e) => e.id !== calendarEvent.id
      );
      this.eventsDataProperty = [calendarEvent, ...newEvents];
    }
  }
});
const defaultOptions = {
  page: 1,
  pageSize: 5,
  numItems: 0,
  numButtons: 5
};
var usePaginator = (userOptions) => {
  const options = { ...defaultOptions, ...userOptions };
  const _page = ref(options.page);
  const pageSize = ref(options.pageSize);
  const numItems = ref(options.numItems);
  const numButtons = ref(options.numButtons);
  const page = computed({
    get: () => _page.value,
    set: (val) => {
      if (val > 0 && val <= numPages.value) {
        _page.value = val;
      }
    }
  });
  const numPages = computed(() => Math.ceil(numItems.value / pageSize.value));
  watch([pageSize, numItems], () => {
    if (page.value > numPages.value) {
      page.value = numPages.value;
    }
  });
  const slice = computed(() => {
    const start = (page.value - 1) * pageSize.value;
    const end = Math.min(start + pageSize.value, numItems.value);
    return [start, end];
  });
  const hasPrev = computed(() => page.value > 1);
  const hasNext = computed(() => page.value < numPages.value);
  const goPrev = () => {
    if (hasPrev.value)
      [
        page.value--
      ];
    return page.value;
  };
  const goNext = () => {
    if (hasNext.value) {
      page.value++;
    }
    return page.value;
  };
  const goStart = () => {
    page.value = 1;
    return 1;
  };
  const goEnd = () => {
    page.value = numPages.value;
    return numPages.value;
  };
  const buttons = computed(() => {
    if (numPages.value <= numButtons.value) {
      return fullButtons(page.value, numPages.value);
    } else {
      return partialButtons(page.value, numPages.value, numButtons.value);
    }
  });
  return {
    page,
    pageSize,
    numItems,
    numButtons,
    numPages,
    slice,
    hasPrev,
    hasNext,
    goPrev,
    goNext,
    goStart,
    goEnd,
    buttons
  };
};
function fullButtons(page, numPages) {
  return consecutiveSlots(1, page).concat({ page, active: true, ellipsis: false }).concat(consecutiveSlots(page + 1, numPages + 1));
}
function partialButtons(page, numPages, numButtons) {
  let slotsLeft = 0, slotsRight = 0;
  const halvedButtons = Math.floor(numButtons / 2);
  if (page <= halvedButtons) {
    slotsLeft = page - 1;
    slotsRight = numButtons - slotsLeft - 1;
  } else if (page >= numPages - halvedButtons) {
    slotsRight = numPages - page;
    slotsLeft = numButtons - slotsRight - 1;
  } else if (numButtons % 2 === 0) {
    slotsLeft = halvedButtons - 1;
    slotsRight = halvedButtons;
  } else {
    slotsLeft = halvedButtons;
    slotsRight = halvedButtons;
  }
  const pagesPrev = page - 1;
  const pagesNext = numPages - page;
  let list = [];
  if (pagesPrev <= slotsLeft) {
    list = consecutiveSlots(1, pagesPrev + 1);
  } else if (slotsLeft > 0) {
    const ellipsis = slotsLeft === 2 ? 2 : Math.ceil(slotsLeft / 2);
    const remaining = slotsLeft - ellipsis;
    let ellipsisPage = Math.ceil(pagesPrev / 2);
    if (pagesPrev % 2 === 0) {
      ellipsisPage++;
    }
    list = consecutiveSlots(1, ellipsis).concat({ page: ellipsisPage, active: false, ellipsis: true }).concat(consecutiveSlots(page - remaining, page));
  }
  list.push({ page, active: true, ellipsis: false });
  if (pagesNext <= slotsRight) {
    list = list.concat(consecutiveSlots(page + 1, numPages + 1));
  } else if (slotsRight > 0) {
    const ellipsis = slotsRight === 2 ? 1 : Math.floor(slotsRight / 2) + 1;
    const remaining = slotsRight - ellipsis;
    const ellipsisPage = page + Math.ceil(pagesNext / 2);
    list = list.concat(consecutiveSlots(page + 1, page + ellipsis)).concat({ page: ellipsisPage, active: false, ellipsis: true }).concat(consecutiveSlots(numPages - remaining + 1, numPages + 1));
  }
  return list;
}
function consecutiveSlots(startIdx, endIdx) {
  const result = [];
  for (let idx = startIdx; idx < endIdx; idx++) {
    result.push({ page: idx, active: false, ellipsis: false });
  }
  return result;
}
var VPagination_scss_vue_type_style_index_0_src_3245b22b_lang = "";
var VPagination_scss_vue_type_style_index_1_src_3245b22b_lang = "";
const _sfc_main$2 = defineComponent({
  name: "VPagination",
  components: { VSelect },
  props: {
    count: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    sizeDefault: {
      type: Number,
      default: 5
    },
    sizeOptions: {
      type: Array,
      default: () => [
        {
          value: "5",
          label: "5 items"
        },
        {
          value: "10",
          label: "10 items"
        },
        {
          value: "30",
          label: "30 items"
        },
        {
          value: "50",
          label: "50 items"
        },
        {
          value: "100",
          label: "100 items"
        }
      ]
    },
    qtdeButtonsPaginate: {
      type: Number,
      default: 8
    }
  },
  emits: ["onChangePagination"],
  setup(props, { emit }) {
    const { page, pageSize, hasPrev, hasNext, goPrev, goNext, buttons, numPages, numItems } = usePaginator({
      pageSize: props.sizeDefault,
      numButtons: props.qtdeButtonsPaginate
    });
    watch(() => props.count, (count) => {
      numItems.value = count;
    });
    watch([page, pageSize], ([newPage, newPageSize]) => {
      emit("onChangePagination", { page: newPage, page_size: newPageSize });
    });
    return { hasPrev, hasNext, pageSize, goPrev, goNext, buttons, page, numPages };
  }
});
const _hoisted_1$2 = { class: "box--pagination" };
const _hoisted_2 = { class: "box--pagination-count" };
const _hoisted_3 = { class: "box--pagination-pages" };
const _hoisted_4 = { class: "box--pagination-pages-size" };
const _hoisted_5 = { class: "box--pagination-pages-itens" };
const _hoisted_6 = { class: "pagination" };
const _hoisted_7 = /* @__PURE__ */ createElementVNode("a", { class: "pagination_li--item" }, null, -1);
const _hoisted_8 = [
  _hoisted_7
];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ createElementVNode("a", { class: "pagination_li--item" }, null, -1);
const _hoisted_11 = [
  _hoisted_10
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_select = resolveComponent("v-select");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2, toDisplayString(_ctx.count) + " items ", 1),
    createElementVNode("div", _hoisted_3, [
      createElementVNode("div", _hoisted_4, [
        createVNode(_component_v_select, {
          id: "select_page_size",
          name: "select_page_size",
          options: _ctx.sizeOptions,
          size: "sm",
          modelValue: _ctx.pageSize,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.pageSize = $event)
        }, null, 8, ["options", "modelValue"])
      ]),
      createElementVNode("div", _hoisted_5, [
        createElementVNode("ol", _hoisted_6, [
          createElementVNode("li", {
            class: normalizeClass(["pagination_li", !_ctx.hasPrev && "disabled"]),
            onClick: _cache[1] || (_cache[1] = (...args) => _ctx.goPrev && _ctx.goPrev(...args))
          }, _hoisted_8, 2),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.buttons, (button, idx) => {
            return openBlock(), createElementBlock("li", {
              class: "pagination_li",
              key: idx,
              onClick: ($event) => _ctx.page = button.page
            }, [
              createElementVNode("a", {
                class: normalizeClass(["pagination_li--item", { "active": button.active }])
              }, toDisplayString(button.ellipsis ? "..." : button.page), 3)
            ], 8, _hoisted_9);
          }), 128)),
          createElementVNode("li", {
            class: normalizeClass(["pagination_li", !_ctx.hasNext && "disabled"]),
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.goNext && _ctx.goNext(...args))
          }, _hoisted_11, 2)
        ])
      ])
    ])
  ]);
}
var VPagination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/debora/www/vert_design_system_ui/src/components/pagination/VPagination.vue"]]);
const _sfc_main$1 = defineComponent({
  name: "VTabContent",
  props: {
    eixo: {
      type: String,
      default: "x"
    },
    contentId: {
      type: String,
      required: true
    }
  }
});
const _hoisted_1$1 = ["id", "data-tab-content-type"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.contentId,
    class: "tab--content",
    "data-tab-content-type": _ctx.eixo
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$1);
}
var VTabContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tab/VTabContent.vue"]]);
const _sfc_main = defineComponent({
  name: "VTabContent",
  props: {
    actived: {
      type: Boolean,
      default: false
    },
    eixo: {
      type: String,
      default: "x"
    },
    tabTo: {
      type: String,
      required: true
    }
  },
  methods: {
    activeTab(event) {
      const tabHead = event.path[1].children;
      for (let item of tabHead)
        item.classList.remove("active");
      event.target.classList.add("active");
      this.showContentTab(
        event == null ? void 0 : event.target.dataset.tabTo,
        event == null ? void 0 : event.target.dataset.tabType
      );
    },
    showContentTab(contentId, typeTab) {
      const tabContents = document.getElementsByClassName("tab--content");
      for (let item of tabContents) {
        if (typeTab == item.dataset.tabContentType)
          item.style.display = "none";
        if (contentId == item.getAttribute("id")) {
          item.style.display = "block";
        }
      }
    }
  }
});
const _hoisted_1 = ["data-tab-type", "data-tab-to"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass({ active: _ctx.actived }),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.activeTab($event)),
    "data-tab-type": _ctx.eixo,
    "data-tab-to": _ctx.tabTo
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1);
}
var VTabHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tab/VTabHeader.vue"]]);
export { VButton, VPagination, VSelect, VTab, VTabContent, VTabHeader, VTable, VTag };
