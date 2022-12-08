const __defProp = Object.defineProperty;
const __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
const __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import {
  defineComponent,
  openBlock,
  createElementBlock,
  mergeProps,
  createElementVNode,
  createCommentVNode,
  renderSlot,
  useSlots,
  ref,
  Fragment,
  renderList,
  normalizeClass,
  withModifiers,
  toDisplayString,
  normalizeProps,
  createTextVNode,
  watch,
  computed,
  unref,
  withDirectives,
  normalizeStyle,
  vShow,
  createBlock,
  withCtx,
  vModelDynamic,
  createVNode,
  resolveComponent,
  onMounted,
  Transition,
  vModelText,
} from "vue";
const VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$j = defineComponent({
  name: "VButton",
  props: {
    size: {
      type: String,
      default: "md",
    },
    status: {
      type: String,
      default: "primary",
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    style_type: {
      type: String,
      default: "solid",
    },
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
    },
  },
});
const _hoisted_1$i = ["disabled"];
const _hoisted_2$d = {
  key: 0,
  class: "v-btn--img",
};
const _hoisted_3$b = ["src"];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      "button",
      mergeProps(
        {
          class: [_ctx.setSizeClass, _ctx.setStatus],
          disabled: _ctx.disabled,
          type: "button",
        },
        _ctx.$attrs
      ),
      [
        _ctx.icon
          ? (openBlock(),
            createElementBlock("div", _hoisted_2$d, [
              createElementVNode(
                "img",
                { src: _ctx.setIcon },
                null,
                8,
                _hoisted_3$b
              ),
            ]))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default"),
      ],
      16,
      _hoisted_1$i
    )
  );
}
const VButton = /* @__PURE__ */ _export_sfc(_sfc_main$j, [
  ["render", _sfc_render$a],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/button/VButton.vue",
  ],
]);
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
const VTable_scss_vue_type_style_index_0_src_52ffde09_lang = "";
const _sfc_main$i = defineComponent({
  name: "VTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
    headers: {
      type: Array,
      required: true,
    },
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
          sortDesc: newSortType === "desc",
        };
      }
      emit("update-sort-field", {
        sortType: newSortType,
        sortBy: newSortBy,
      });
    };
    return {
      slots,
      clickRow,
      generateColumnContent,
      updateSortField,
    };
  },
});
const _hoisted_1$h = { class: "v-table" };
const _hoisted_2$c = { class: "v-table__body-wrapper" };
const _hoisted_3$a = { class: "responsive-table" };
const _hoisted_4$6 = ["onClick"];
const _hoisted_5$4 = ["onClick"];
const _hoisted_6$4 = { class: "v-table__cell" };
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock("div", _hoisted_1$h, [
      createElementVNode("div", _hoisted_2$c, [
        createElementVNode("table", _hoisted_3$a, [
          createElementVNode("thead", null, [
            createElementVNode("tr", null, [
              (openBlock(true),
              createElementBlock(
                Fragment,
                null,
                renderList(_ctx.headers, (col) => {
                  return (
                    openBlock(),
                    createElementBlock(
                      "th",
                      {
                        class: normalizeClass([
                          "v-table__cell",
                          [
                            {
                              sortable: col.sortable,
                              none: col.sortable && col.sortType === "none",
                              desc: col.sortable && col.sortType === "desc",
                              asc: col.sortable && col.sortType === "asc",
                            },
                          ],
                        ]),
                        onClick: withModifiers(
                          ($event) =>
                            col.sortable && col.sortType
                              ? _ctx.updateSortField(col.prop, col.sortType)
                              : null,
                          ["stop"]
                        ),
                      },
                      toDisplayString(col.label),
                      11,
                      _hoisted_4$6
                    )
                  );
                }),
                256
              )),
            ]),
          ]),
          createElementVNode("tbody", null, [
            (openBlock(true),
            createElementBlock(
              Fragment,
              null,
              renderList(_ctx.data, (item, index) => {
                return (
                  openBlock(),
                  createElementBlock(
                    "tr",
                    {
                      key: index,
                      class: "v-table__row",
                      onClick: ($event) => _ctx.clickRow(item),
                    },
                    [
                      (openBlock(true),
                      createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.headers, (col) => {
                          return (
                            openBlock(),
                            createElementBlock("td", _hoisted_6$4, [
                              _ctx.slots[`item-${col.prop}`]
                                ? renderSlot(
                                    _ctx.$slots,
                                    `item-${col.prop}`,
                                    normalizeProps(mergeProps({ key: 0 }, item))
                                  )
                                : (openBlock(),
                                  createElementBlock(
                                    Fragment,
                                    { key: 1 },
                                    [
                                      createTextVNode(
                                        toDisplayString(
                                          _ctx.generateColumnContent(
                                            col.prop,
                                            item
                                          )
                                        ),
                                        1
                                      ),
                                    ],
                                    64
                                  )),
                            ])
                          );
                        }),
                        256
                      )),
                    ],
                    8,
                    _hoisted_5$4
                  )
                );
              }),
              128
            )),
          ]),
        ]),
      ]),
    ])
  );
}
const VTable = /* @__PURE__ */ _export_sfc(_sfc_main$i, [
  ["render", _sfc_render$9],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/table/VTable.vue",
  ],
]);
const VSelect_scss_vue_type_style_index_0_src_4a2786ac_lang = "";
const _hoisted_1$g = { class: "v-select" };
const _hoisted_2$b = {
  key: 0,
  class: "v-select--label",
};
const _hoisted_3$9 = ["for"];
const _hoisted_4$5 = { class: "v-selec--content" };
const _hoisted_5$3 = ["name", "id", "required", "disabled"];
const _hoisted_6$3 = {
  key: 0,
  value: "",
};
const _hoisted_7$2 = ["value", "selected"];
const _sfc_main$h = defineComponent({
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
    borderNone: { type: Boolean, required: false, default: false },
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
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$g, [
          __props.label
            ? (openBlock(),
              createElementBlock("div", _hoisted_2$b, [
                createElementVNode(
                  "label",
                  { for: __props.id },
                  toDisplayString(__props.label),
                  9,
                  _hoisted_3$9
                ),
              ]))
            : createCommentVNode("v-if", true),
          createElementVNode("div", _hoisted_4$5, [
            createElementVNode(
              "select",
              {
                class: normalizeClass([
                  { "v-select--border": props.borderNone },
                  `v-select--input v-select--size-${__props.size}`,
                ]),
                name: __props.name,
                id: __props.id,
                required: __props.required,
                disabled: __props.disable,
                onChange:
                  _cache[0] || (_cache[0] = ($event) => selectChange($event)),
              },
              [
                __props.placeholder
                  ? (openBlock(),
                    createElementBlock(
                      "option",
                      _hoisted_6$3,
                      toDisplayString(__props.placeholder),
                      1
                    ))
                  : createCommentVNode("v-if", true),
                (openBlock(true),
                createElementBlock(
                  Fragment,
                  null,
                  renderList(__props.options, (option) => {
                    return (
                      openBlock(),
                      createElementBlock(
                        "option",
                        {
                          value: option.value,
                          selected: option.value == selected.value,
                          "aria-checked": "false",
                        },
                        toDisplayString(option.label),
                        9,
                        _hoisted_7$2
                      )
                    );
                  }),
                  256
                )),
              ],
              42,
              _hoisted_5$3
            ),
          ]),
        ])
      );
    };
  },
});
const VSelect = /* @__PURE__ */ _export_sfc(_sfc_main$h, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/form/select/VSelect.vue",
  ],
]);
const _imports_0$1 =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE5LDYuNDFMMTcuNTksNUwxMiwxMC41OUw2LjQxLDVMNSw2LjQxTDEwLjU5LDEyTDUsMTcuNTlMNi40MSwxOUwxMiwxMy40MUwxNy41OSwxOUwxOSwxNy41OUwxMy40MSwxMkwxOSw2LjQxWiIgLz48L3N2Zz4=";
const VPopUp_scss_vue_type_style_index_0_src_12e74449_lang = "";
const _hoisted_1$f = { class: "v-popup" };
const _hoisted_2$a = { class: "v-popup__content--head" };
const _hoisted_3$8 = { class: "v-popup__content--head-title" };
const _hoisted_4$4 = /* @__PURE__ */ createElementVNode(
  "img",
  { src: _imports_0$1 },
  null,
  -1
);
const _hoisted_5$2 = [_hoisted_4$4];
const _hoisted_6$2 = { class: "v-popup__content--body" };
const _hoisted_7$1 = { class: "v-popup__content--footer" };
const _hoisted_8$1 = /* @__PURE__ */ createElementVNode(
  "a",
  {
    href: "#",
    target: "_blank",
  },
  "Ir para vis\xE3o completa",
  -1
);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPopUp",
  props: {
    title: {
      type: String,
      default: "",
    },
    positionContent: {
      type: String,
      default: "bottom center",
    },
    widthContent: {
      type: String,
      default: "25rem",
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    showPopUp: {
      type: Boolean,
      default: false,
    },
  },
  setup(__props) {
    const props = __props;
    const show = props.showIcon ? ref(false) : computed(() => props.showPopUp);
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$f, [
          createElementVNode(
            "div",
            {
              onClick:
                _cache[0] ||
                (_cache[0] = ($event) => (show.value = !unref(show))),
              class: "v-popup--click",
            },
            [
              renderSlot(_ctx.$slots, "event-area", {}, () => [
                createTextVNode("INSERIR ICONE AQUI"),
              ]),
            ]
          ),
          withDirectives(
            createElementVNode(
              "div",
              {
                class: normalizeClass([
                  "v-popup__content",
                  __props.positionContent,
                ]),
                style: normalizeStyle(`min-width: ${__props.widthContent}`),
              },
              [
                createElementVNode("div", _hoisted_2$a, [
                  createElementVNode(
                    "h3",
                    _hoisted_3$8,
                    toDisplayString(__props.title),
                    1
                  ),
                  createElementVNode(
                    "span",
                    {
                      class: "v-popup__content--head-close",
                      onClick:
                        _cache[1] ||
                        (_cache[1] = ($event) => (show.value = !unref(show))),
                    },
                    _hoisted_5$2
                  ),
                ]),
                createElementVNode("div", _hoisted_6$2, [
                  renderSlot(_ctx.$slots, "popup-body"),
                ]),
                createElementVNode("div", _hoisted_7$1, [
                  renderSlot(_ctx.$slots, "popup-footer", {}, () => [
                    _hoisted_8$1,
                  ]),
                ]),
              ],
              6
            ),
            [[vShow, unref(show)]]
          ),
        ])
      );
    };
  },
});
const VPopUp = /* @__PURE__ */ _export_sfc(_sfc_main$g, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/popUp/VPopUp.vue",
  ],
]);
const VCard_scss_vue_type_style_index_0_src_28d3c952_lang = "";
const _hoisted_1$e = { class: "v-section__header" };
const _hoisted_2$9 = { class: "v-section__header--title" };
const _hoisted_3$7 = { class: "v-section__body" };
const _sfc_main$f = defineComponent({
  __name: "VCard",
  props: {
    title: { type: String, required: true, default: "Titulo" },
    type: { type: String, required: true, default: "default" },
  },
  setup(__props) {
    const props = __props;
    const setType = computed(() => `card--${props.type}`);
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          "div",
          {
            class: normalizeClass(["card", [unref(setType)]]),
          },
          [
            createElementVNode("div", _hoisted_1$e, [
              createElementVNode("div", _hoisted_2$9, [
                createElementVNode("h3", null, toDisplayString(props.title), 1),
              ]),
              createElementVNode("div", null, [
                renderSlot(_ctx.$slots, "buttons"),
                renderSlot(_ctx.$slots, "input"),
              ]),
            ]),
            createElementVNode("div", _hoisted_3$7, [
              renderSlot(_ctx.$slots, "default"),
            ]),
          ],
          2
        )
      );
    };
  },
});
const VCard = /* @__PURE__ */ _export_sfc(_sfc_main$f, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/card/VCard.vue",
  ],
]);
const VTab_scss_vue_type_style_index_0_src_a3c685ae_lang = "";
const _sfc_main$e = defineComponent({
  name: "VTab",
  props: {
    eixo: {
      type: String,
      default: "x",
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
  },
});
const _hoisted_1$d = { class: "box" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock("div", _hoisted_1$d, [
      createElementVNode(
        "div",
        {
          class: normalizeClass([
            { "tab--border": _ctx.borderBottom },
            `tab--${_ctx.eixo}`,
          ]),
        },
        [renderSlot(_ctx.$slots, "header")],
        2
      ),
      renderSlot(_ctx.$slots, "default"),
    ])
  );
}
const VTab = /* @__PURE__ */ _export_sfc(_sfc_main$e, [
  ["render", _sfc_render$8],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/tab/VTab.vue",
  ],
]);
const VTag_scss_vue_type_style_index_0_src_73d26849_lang = "";
const _sfc_main$d = defineComponent({
  name: "VTag",
  props: {
    status: {
      type: String,
      default: "helper",
    },
    type: {
      type: String,
      default: "solid",
    },
    icon: {
      type: String,
      required: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setIcon() {
      return `/static/icons/${this.icon}.svg`;
    },
  },
});
const _hoisted_1$c = {
  key: 0,
  class: "v-tag--img",
};
const _hoisted_2$8 = ["src"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      "div",
      {
        class: normalizeClass([
          `v-tag__${_ctx.type}--${_ctx.status}`,
          { "v-tag--square": _ctx.square },
        ]),
      },
      [
        _ctx.icon
          ? (openBlock(),
            createElementBlock("div", _hoisted_1$c, [
              createElementVNode(
                "img",
                { src: _ctx.setIcon },
                null,
                8,
                _hoisted_2$8
              ),
            ]))
          : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default"),
      ],
      2
    )
  );
}
const VTag = /* @__PURE__ */ _export_sfc(_sfc_main$d, [
  ["render", _sfc_render$7],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/tag/VTag.vue",
  ],
]);
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
  constructor(
    firstDayOfWeek = "monday",
    locale = null,
    dayBoundaries = {
      start: 0,
      end: 2400,
    }
  ) {
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
      0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1100, 1200, 1300,
      1400, 1500, 1600, 1700, 1800, 1900, 2e3, 2100, 2200, 2300, 2400,
    ];
    this.DAY_START = dayBoundaries.start;
    this.DAY_END = dayBoundaries.end;
    this.HOURS_PER_DAY = (() => {
      const convertTimePointToHours = (timePoint) => {
        if (timePoint === 0) return 0;
        return timePoint / 100;
      };
      return (
        convertTimePointToHours(this.DAY_END) -
        convertTimePointToHours(this.DAY_START)
      );
    })();
    this.MS_PER_DAY = 864e5;
  }
  getDatesBetweenTwoDates(start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
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
      subtractedDaysToGetFirstDate =
        selectedDate.getDay() === 0 ? 6 : selectedDate.getDay() - 1;
    const dateOfFirstDayOfWeek =
      selectedDate.getDate() - subtractedDaysToGetFirstDate;
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
    const selectedDate = ![typeof yyyy, typeof mm].includes("undefined")
      ? new Date(yyyy, mm, 1)
      : new Date();
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
      minutes: +minutes,
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
      hour: "2-digit",
    });
    if (hourLocaleString[0] === "0") return hourLocaleString.substring(1);
    return hourLocaleString;
  }
  getLocalizedNameOfWeekday(date, weekdayNameLength = "short") {
    return String$1.capitalizeFirstLetter(
      date.toLocaleDateString(this.CALENDAR_LOCALE, {
        weekday: weekdayNameLength,
      })
    );
  }
  getLocalizedNameOfMonth(date, monthNameLength = "short") {
    return date.toLocaleDateString(this.CALENDAR_LOCALE, {
      month: monthNameLength,
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
      return `${fullDate} ${hour >= 10 ? hour : "0" + hour}:${
        minutes >= 10 ? minutes : "0" + minutes
      }`;
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
      minute: "numeric",
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
      minutes: +dateTimeString.substring(14, 16),
    };
  }
  dateIsToday(date) {
    const {
      fullYear: yearToday,
      month: monthToday,
      date: dateToday,
    } = new EDate();
    const {
      fullYear: dateYear,
      month: dateMonth,
      date: dateDate,
    } = new EDate(date);
    return (
      yearToday === dateYear &&
      monthToday === dateMonth &&
      dateToday === dateDate
    );
  }
  dateIsInWeek(dateToCheck, week) {
    const { date, month, fullYear } = new EDate(dateToCheck);
    for (const weekDay of week) {
      const dateIsSame = date === weekDay.getDate();
      const monthIsSame = month === weekDay.getMonth();
      const yearIsSame = fullYear === weekDay.getFullYear();
      if (dateIsSame && monthIsSame && yearIsSame) return true;
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
      minutes: oldMinutes,
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
      date: date1,
    } = this.getAllVariablesFromDateTimeString(dateTimeString1);
    const {
      year: year2,
      month: month2,
      date: date2,
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
    if (minutePoints < 10) return "0" + minutePoints;
    return minutePoints.toString();
  }
  getPercentageOfDayFromDateTimeString(dateTimeString, dayStart, dayEnd) {
    const pointsInDay = dayEnd - dayStart;
    const hour = dateTimeString.substring(11, 13);
    const minutes = dateTimeString.substring(14, 16);
    const minutesPoints = this.turnMinutesIntoPercentageOfHour(+minutes);
    const eventPoints = +(hour + minutesPoints);
    const eventPointsIntoDay = eventPoints - dayStart;
    return (eventPointsIntoDay / pointsInDay) * 100;
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
    "fr-FR": "Semaine",
  },
  month: {
    "it-IT": "Mese",
    "en-US": "Month",
    "de-DE": "Monat",
    "sv-SE": "M\xE5nad",
    "zh-CN": "\u6708",
    "pt-BR": "M\xEAs",
    "fr-FR": "Mois",
  },
  day: {
    "it-IT": "Giorno",
    "en-US": "Day",
    "de-DE": "Tag",
    "sv-SE": "Dag",
    "zh-CN": "\u65E5",
    "pt-BR": "Dia",
    "fr-FR": "Jour",
  },
  personalized: {
    "it-IT": "Personalizzato",
    "en-US": "Personalized",
    "de-DE": "Personalisiert",
    "sv-SE": "Personlig",
    "zh-CN": "\u4E2A\u6027\u5316",
    "pt-BR": "Personalizado",
    "fr-FR": "Personnalis\xE9",
  },
  mini: {
    "it-IT": "Mini",
    "en-US": "Mini",
    "de-DE": "Mini",
    "sv-SE": "Mini",
    "zh-CN": "\u8FF7\u4F60",
    "pt-BR": "Mini",
    "fr-FR": "Mini",
  },
  moreEvents: {
    "it-IT": "+ altri eventi",
    "en-US": "+ more events",
    "de-DE": "+ weitere Ereignisse",
    "sv-SE": "+ fler h\xE4ndelser",
    "zh-CN": "\u5217\u51FA\u5176\u4ED6\u7ED3\u679C",
    "pt-BR": "+ mais eventos",
    "fr-FR": "+ d'autres \xE9v\xE9nements",
  },
};
const getLanguage = {
  data() {
    return {
      languageKeys,
    };
  },
  methods: {
    getLanguage(languageKeys2, locale) {
      if (locale.startsWith("de")) locale = "de-DE";
      if (locale.startsWith("en")) locale = "en-US";
      if (locale.startsWith("it")) locale = "it-IT";
      if (locale.startsWith("sv")) locale = "sv-SE";
      if (locale.startsWith("zh")) locale = "zh-CN";
      if (locale.startsWith("pt")) locale = "pt-BR";
      if (locale.startsWith("fr")) locale = "fr-FR";
      return languageKeys2[locale]
        ? languageKeys2[locale]
        : languageKeys2["en-US"] || "";
    },
  },
};
const VDropdown_scss_vue_type_style_index_0_src_12d7f8ce_lang = "";
const _hoisted_1$b = { key: 0 };
const _hoisted_2$7 = { key: 1 };
const _hoisted_3$6 = ["for"];
const _hoisted_4$3 = { class: "v-dropdow__options" };
const _hoisted_5$1 = ["value", "id", "type"];
const _hoisted_6$1 = ["for"];
const _sfc_main$c = defineComponent({
  __name: "VDropdown",
  props: {
    id: { type: String, required: false },
    name: { type: String, required: false, default: "exemplo" },
    placeholder: { type: String, required: false, default: "Selecione" },
    label: { type: String, required: false },
    options: { type: Array, required: true, default: () => [] },
    required: { type: Boolean, required: false },
    disable: { type: Boolean, required: false },
    size: { type: String, required: false },
    modelValue: { type: null, required: false, default: [] },
    borderNone: { type: Boolean, required: false },
    multiple: { type: Boolean, required: false, default: false },
    type: { type: String, required: false, default: "1" },
  },
  emits: ["onChange", "update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const setMultiple = computed(() => (props.multiple ? "checkbox" : "radio"));
    const showValue = computed(() => {
      if (valueOption.value.length == 0) {
        return props.placeholder;
      }
      if (!props.multiple) {
        const option = props.options.find(
          (element) => element.value == valueOption.value
        );
        return option == null ? void 0 : option.label;
      } else {
        const options = [];
        valueOption.value.forEach((item) => {
          const find = props.options.find((element) => element.value == item);
          options.push(find);
        });
        return options;
      }
    });
    const valueOption = ref(props.modelValue);
    const showOptions = ref(false);
    function selectChange() {
      emit("onChange", valueOption.value);
      emit("update:modelValue", valueOption.value);
    }
    const setTypeStyle = computed(() => {
      if (props.type == "2") {
        return "v-dropdow__style--2";
      }
      return "";
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock(
          Fragment,
          null,
          [
            createElementVNode(
              "div",
              {
                class: normalizeClass(["v-dropdow", unref(setTypeStyle)]),
              },
              [
                createElementVNode(
                  "div",
                  {
                    class: "v-dropdow__input",
                    onClick:
                      _cache[0] ||
                      (_cache[0] = ($event) =>
                        (showOptions.value = !showOptions.value)),
                  },
                  [
                    !__props.multiple || unref(showValue) == __props.placeholder
                      ? (openBlock(),
                        createElementBlock(
                          "span",
                          _hoisted_1$b,
                          toDisplayString(unref(showValue)),
                          1
                        ))
                      : (openBlock(),
                        createElementBlock("span", _hoisted_2$7, [
                          (openBlock(true),
                          createElementBlock(
                            Fragment,
                            null,
                            renderList(unref(showValue), (selected, index) => {
                              return (
                                openBlock(),
                                createBlock(
                                  VTag,
                                  {
                                    status: "secondary",
                                    square: "",
                                    key: index,
                                  },
                                  {
                                    default: withCtx(() => [
                                      createTextVNode(
                                        toDisplayString(selected.label) + " ",
                                        1
                                      ),
                                      createElementVNode(
                                        "label",
                                        {
                                          class: "icon--close",
                                          for:
                                            __props.name + "-" + selected.value,
                                        },
                                        null,
                                        8,
                                        _hoisted_3$6
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              );
                            }),
                            128
                          )),
                        ])),
                    createElementVNode(
                      "div",
                      {
                        class: normalizeClass([
                          "v-dropdow__input--arrow",
                          {
                            "v-dropdow__input--arrow--open": showOptions.value,
                          },
                        ]),
                      },
                      null,
                      2
                    ),
                  ]
                ),
                withDirectives(
                  createElementVNode(
                    "div",
                    _hoisted_4$3,
                    [
                      createElementVNode("ul", null, [
                        (openBlock(true),
                        createElementBlock(
                          Fragment,
                          null,
                          renderList(__props.options, (option) => {
                            return (
                              openBlock(),
                              createElementBlock("li", null, [
                                withDirectives(
                                  createElementVNode(
                                    "input",
                                    {
                                      "onUpdate:modelValue":
                                        _cache[1] ||
                                        (_cache[1] = ($event) =>
                                          (valueOption.value = $event)),
                                      name: "option",
                                      value: option.value,
                                      id: __props.name + "-" + option.value,
                                      type: unref(setMultiple),
                                      onChange:
                                        _cache[2] ||
                                        (_cache[2] = ($event) =>
                                          selectChange()),
                                    },
                                    null,
                                    40,
                                    _hoisted_5$1
                                  ),
                                  [[vModelDynamic, valueOption.value]]
                                ),
                                createElementVNode(
                                  "label",
                                  {
                                    for: __props.name + "-" + option.value,
                                  },
                                  toDisplayString(option.label),
                                  9,
                                  _hoisted_6$1
                                ),
                              ])
                            );
                          }),
                          256
                        )),
                      ]),
                    ],
                    512
                  ),
                  [[vShow, showOptions.value]]
                ),
              ],
              2
            ),
            withDirectives(
              createElementVNode(
                "div",
                {
                  class: "v-dropdow__fullscreen",
                  onClick:
                    _cache[3] ||
                    (_cache[3] = ($event) =>
                      (showOptions.value = !showOptions.value)),
                },
                null,
                512
              ),
              [[vShow, showOptions.value]]
            ),
          ],
          64
        )
      );
    };
  },
});
const VDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$c, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/dropdown/VDropdown.vue",
  ],
]);
const VMonthYearSelect_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$a = { class: "vmonth-year" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "VMonthYearSelect",
  emits: ["updated"],
  setup(__props, { emit }) {
    const monthYearSelected = ref(
      String(`${new Date().getFullYear()}-${new Date().getMonth() + 1}`)
    );
    const months = computed(() => {
      const months2 = [];
      const currentYear = new Date().getFullYear();
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 12; j++) {
          months2.push({
            value: String(`${currentYear + i}-${j + 1}`),
            label: String$1.capitalizeFirstLetter(
              new Date(currentYear + i, j, 1).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })
            ),
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
        selectedDate: date,
      };
      emit("updated", period);
    };
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$a, [
          createVNode(
            VDropdown,
            {
              options: unref(months),
              type: "2",
              modelValue: monthYearSelected.value,
              "onUpdate:modelValue":
                _cache[0] ||
                (_cache[0] = ($event) => (monthYearSelected.value = $event)),
              onOnChange: onChangeMonth,
              size: "lg",
            },
            null,
            8,
            ["options", "modelValue"]
          ),
        ])
      );
    };
  },
});
const VMonthYearPicker = /* @__PURE__ */ _export_sfc(_sfc_main$b, [
  ["__scopeId", "data-v-59a07538"],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/date/VMonthYearSelect.vue",
  ],
]);
const VCalendarHeaderMini_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = defineComponent({
  name: "VCalendarHeaderMini",
  components: {
    VMonthYearPicker,
  },
  mixins: [getLanguage],
  emits: ["updated-period"],
  data() {
    return {
      currentPeriod: this.period,
    };
  },
  methods: {
    handlePeriodChange(period) {
      this.currentPeriod = period;
      this.$emit("updated-period", period);
    },
  },
});
const _hoisted_1$9 = { class: "calendar-header" };
const _hoisted_2$6 = { class: "calendar-header__period" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VMonthYearPicker = resolveComponent("VMonthYearPicker");
  return (
    openBlock(),
    createElementBlock("div", _hoisted_1$9, [
      createElementVNode("div", _hoisted_2$6, [
        createVNode(
          _component_VMonthYearPicker,
          {
            ref: "periodSelect",
            onUpdated: _ctx.handlePeriodChange,
          },
          null,
          8,
          ["onUpdated"]
        ),
      ]),
    ])
  );
}
const AppHeaderMini = /* @__PURE__ */ _export_sfc(_sfc_main$a, [
  ["render", _sfc_render$6],
  ["__scopeId", "data-v-16b59cd2"],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/calendar/VCalendarHeaderMini.vue",
  ],
]);
const WeekCarousel_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = defineComponent({
  name: "Weekcarousel",
  props: {
    days: {
      type: Array,
      required: true,
    },
    time: {
      type: Object,
      required: true,
    },
  },
  emits: ["event-was-clicked", "day-was-clicked"],
  data() {
    return {
      now: new Date(),
      selectedDay: "",
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
      this.time.getAllVariablesFromDateTimeString(day.dateTimeString);
    },
    onHandleDayWasClicked(day) {
      this.$emit("day-was-clicked", day);
    },
  },
});
const _hoisted_1$8 = { class: "week-carousel" };
const _hoisted_2$5 = ["onClick"];
const _hoisted_3$5 = { class: "week-carousel__day-name" };
const _hoisted_4$2 = { class: "week-carousel__date" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock("div", _hoisted_1$8, [
      (openBlock(true),
      createElementBlock(
        Fragment,
        null,
        renderList(_ctx.days, (day, dayIndex) => {
          return (
            openBlock(),
            createElementBlock(
              "div",
              {
                key: dayIndex,
                class: normalizeClass([
                  "week-carousel__day",
                  [
                    {
                      "is-today":
                        _ctx.time.getDateTimeStringFromDate(
                          _ctx.now,
                          "start"
                        ) === day.dateTimeString,
                    },
                    {
                      "is-selected":
                        day.dateTimeString.substring(0, 10) ===
                        _ctx.selectedDay,
                    },
                  ],
                ]),
                onClick: ($event) => _ctx.onHandleDayWasClicked(day),
              },
              [
                createElementVNode(
                  "div",
                  _hoisted_3$5,
                  toDisplayString(day.dayName.substring(0, 3)),
                  1
                ),
                createElementVNode(
                  "div",
                  _hoisted_4$2,
                  toDisplayString(_ctx.getDaysDate(day)),
                  1
                ),
              ],
              10,
              _hoisted_2$5
            )
          );
        }),
        128
      )),
    ])
  );
}
const WeekCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$9, [
  ["render", _sfc_render$5],
  ["__scopeId", "data-v-5d140c4b"],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/calendar/mini/WeekCarousel.vue",
  ],
]);
const Mini_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$7 = { class: "vcalendar-mini" };
const _hoisted_2$4 = { class: "vcalendar-mini--week" };
const _hoisted_3$4 = { class: "vcalendar-mini--day" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Mini",
  props: {
    time: {
      type: Object,
      required: true,
    },
    period: {
      type: Object,
      required: true,
    },
    nDays: {
      type: Number,
      default: 7,
    },
  },
  emits: {
    "day-was-clicked": (day) => true,
  },
  setup(__props, { emit: emits }) {
    const props = __props;
    const days = ref([]);
    const dayNameSelected = ref("");
    const setDays = () => {
      const days_ = props.time
        .getCalendarWeekDateObjects(props.period.start)
        .map((day) => {
          const dayName = props.time.getLocalizedNameOfWeekday(day, "long");
          const dateTimeString = props.time.getDateTimeStringFromDate(
            day,
            "start"
          );
          if (props.time.dateIsToday(day)) {
            getDateAndDayLongName(day, true);
          }
          return { dayName, dateTimeString };
        });
      days.value = days_;
    };
    const setInitialEvents = () => {
      setDays();
    };
    const getDateAndDayLongName = (day, isToday = false) => {
      const { date } = props.time.getAllVariablesFromDateTimeString(
        props.time.getDateTimeStringFromDate(day, "start")
      );
      dayNameSelected.value =
        (isToday ? "Hoje - " : "") +
        props.time.getLocalizedNameOfWeekday(day, "short") +
        ", " +
        date +
        " de " +
        String$1.capitalizeFirstLetter(
          props.time.getLocalizedNameOfMonth(day, "short")
        );
      return dayNameSelected.value;
    };
    const handleDayWasClicked = (day) => {
      const replate_date = day.dateTimeString.replace("-", ",");
      const dayDate = new Date(replate_date);
      day.dayName = getDateAndDayLongName(
        dayDate,
        props.time.dateIsToday(dayDate)
      );
      emits("day-was-clicked", day);
    };
    onMounted(() => {
      setInitialEvents();
    });
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$7, [
          createElementVNode("div", _hoisted_2$4, [
            createVNode(
              WeekCarousel,
              {
                days: days.value,
                time: __props.time,
                onDayWasClicked: handleDayWasClicked,
              },
              null,
              8,
              ["days", "time"]
            ),
          ]),
          createElementVNode(
            "div",
            _hoisted_3$4,
            toDisplayString(dayNameSelected.value),
            1
          ),
        ])
      );
    };
  },
});
const Mini = /* @__PURE__ */ _export_sfc(_sfc_main$8, [
  ["__scopeId", "data-v-7d7d84ae"],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/calendar/mini/Mini.vue",
  ],
]);
const VCalendarMini_vue_vue_type_style_index_0_lang = "";
const _sfc_main$7 = defineComponent({
  name: "VCalendarMini",
  components: {
    AppHeaderMini,
    Mini,
  },
  props: {
    events: {
      type: Array,
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
  },
  emits: ["event-was-clicked", "day-was-clicked"],
  data() {
    return {
      wasInitialized: 0,
      period: {
        start: new Date(),
        end: new Date(),
        selectedDate: this.selectedDate ? this.selectedDate : new Date(),
      },
      week: {
        nDays: 7,
      },
      mode: "mini",
      time: new Time(),
    };
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
  },
});
const _hoisted_1$6 = { class: "calendar-root-wrapper" };
const _hoisted_2$3 = { class: "calendar-root mode-is-mini" };
const _hoisted_3$3 = {
  key: 0,
  class: "top-bar-loader",
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppHeaderMini = resolveComponent("AppHeaderMini");
  const _component_Mini = resolveComponent("Mini");
  return (
    openBlock(),
    createElementBlock("div", _hoisted_1$6, [
      createElementVNode("div", _hoisted_2$3, [
        createVNode(
          Transition,
          { name: "loading" },
          {
            default: withCtx(() => [
              _ctx.isLoading
                ? (openBlock(), createElementBlock("div", _hoisted_3$3))
                : createCommentVNode("v-if", true),
            ]),
            _: 1,
          }
        ),
        (openBlock(),
        createBlock(_component_AppHeaderMini, {
          key: _ctx.wasInitialized + _ctx.mode + "-header",
        })),
        (openBlock(),
        createBlock(
          _component_Mini,
          {
            key: _ctx.period.start.getTime() + _ctx.period.end.getTime(),
            time: _ctx.time,
            period: _ctx.period,
            "n-days": _ctx.week.nDays,
            onDayWasClicked:
              _cache[0] ||
              (_cache[0] = ($event) => _ctx.$emit("day-was-clicked", $event)),
          },
          null,
          8,
          ["time", "period", "n-days"]
        )),
      ]),
    ])
  );
}
const VCalendarMini = /* @__PURE__ */ _export_sfc(_sfc_main$7, [
  ["render", _sfc_render$4],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/calendar/VCalendarMini.vue",
  ],
]);
const _imports_0 =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik03LDEwSDEyVjE1SDdNMTksMTlINVY4SDE5TTE5LDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjg5LDMgMywzLjkgMyw1VjE5QTIsMiAwIDAsMCA1LDIxSDE5QTIsMiAwIDAsMCAyMSwxOVY1QTIsMiAwIDAsMCAxOSwzWiIgLz4KPC9zdmc+";
const _sfc_main$6 = defineComponent({
  name: "CalendarDay",
});
const _hoisted_1$5 = {
  src: _imports_0,
  width: "24",
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("img", _hoisted_1$5);
}
const IconCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [
  ["render", _sfc_render$3],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/icons/CalendarDay.vue",
  ],
]);
/*!
 * perfect-scrollbar v1.5.3
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */
function get(element) {
  return getComputedStyle(element);
}
function set(element, obj) {
  for (const key in obj) {
    let val = obj[key];
    if (typeof val === "number") {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}
function div(className) {
  const div2 = document.createElement("div");
  div2.className = className;
  return div2;
}
const elMatches =
  typeof Element !== "undefined" &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);
function matches(element, query) {
  if (!elMatches) {
    throw new Error("No element matching method supported");
  }
  return elMatches.call(element, query);
}
function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) {
    return matches(child, selector);
  });
}
const cls = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function (x) {
      return "ps__thumb-" + x;
    },
    rail: function (x) {
      return "ps__rail-" + x;
    },
    consuming: "ps__child--consume",
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function (x) {
      return "ps--active-" + x;
    },
    scrolling: function (x) {
      return "ps--scrolling-" + x;
    },
  },
};
const scrollingClassTimeout = { x: null, y: null };
function addScrollingClass(i, x) {
  const classList = i.element.classList;
  const className = cls.state.scrolling(x);
  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}
function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(function () {
    return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
  }, i.settings.scrollingThreshold);
}
function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}
const EventElement = function EventElement2(element) {
  this.element = element;
  this.handlers = {};
};
const prototypeAccessors = { isEmpty: { configurable: true } };
EventElement.prototype.bind = function bind(eventName, handler) {
  if (typeof this.handlers[eventName] === "undefined") {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};
EventElement.prototype.unbind = function unbind(eventName, target) {
  const this$1$1 = this;
  this.handlers[eventName] = this.handlers[eventName].filter(function (
    handler
  ) {
    if (target && handler !== target) {
      return true;
    }
    this$1$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};
EventElement.prototype.unbindAll = function unbindAll() {
  for (const name in this.handlers) {
    this.unbind(name);
  }
};
prototypeAccessors.isEmpty.get = function () {
  const this$1$1 = this;
  return Object.keys(this.handlers).every(function (key) {
    return this$1$1.handlers[key].length === 0;
  });
};
Object.defineProperties(EventElement.prototype, prototypeAccessors);
const EventManager = function EventManager2() {
  this.eventElements = [];
};
EventManager.prototype.eventElement = function eventElement(element) {
  let ee = this.eventElements.filter(function (ee2) {
    return ee2.element === element;
  })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};
EventManager.prototype.bind = function bind2(element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};
EventManager.prototype.unbind = function unbind2(element, eventName, handler) {
  const ee = this.eventElement(element);
  ee.unbind(eventName, handler);
  if (ee.isEmpty) {
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};
EventManager.prototype.unbindAll = function unbindAll2() {
  this.eventElements.forEach(function (e) {
    return e.unbindAll();
  });
  this.eventElements = [];
};
EventManager.prototype.once = function once(element, eventName, handler) {
  const ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};
function createEvent(name) {
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(name);
  } else {
    const evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(name, false, false, void 0);
    return evt;
  }
}
function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  let fields;
  if (axis === "top") {
    fields = [
      "contentHeight",
      "containerHeight",
      "scrollTop",
      "y",
      "up",
      "down",
    ];
  } else if (axis === "left") {
    fields = [
      "contentWidth",
      "containerWidth",
      "scrollLeft",
      "x",
      "left",
      "right",
    ];
  } else {
    throw new Error("A proper axis should be provided");
  }
  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}
function processScrollDiff$1(
  i,
  diff,
  ref2,
  useScrollingClass,
  forceFireReachEvent
) {
  const contentHeight = ref2[0];
  const containerHeight = ref2[1];
  const scrollTop = ref2[2];
  const y = ref2[3];
  const up = ref2[4];
  const down = ref2[5];
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  const element = i.element;
  i.reach[y] = null;
  if (element[scrollTop] < 1) {
    i.reach[y] = "start";
  }
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = "end";
  }
  if (diff) {
    element.dispatchEvent(createEvent("ps-scroll-" + y));
    if (diff < 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + up));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + down));
    }
    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }
  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
  }
}
function toInt(x) {
  return parseInt(x, 10) || 0;
}
function isEditable(el) {
  return (
    matches(el, "input,[contenteditable]") ||
    matches(el, "select,[contenteditable]") ||
    matches(el, "textarea,[contenteditable]") ||
    matches(el, "button,[contenteditable]")
  );
}
function outerWidth(element) {
  const styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}
const env = {
  isWebKit:
    typeof document !== "undefined" &&
    "WebkitAppearance" in document.documentElement.style,
  supportsTouch:
    typeof window !== "undefined" &&
    ("ontouchstart" in window ||
      ("maxTouchPoints" in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== "undefined" && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== "undefined" &&
    /Chrome/i.test(navigator && navigator.userAgent),
};
function updateGeometry(i) {
  const element = i.element;
  const roundedScrollTop = Math.floor(element.scrollTop);
  const rect = element.getBoundingClientRect();
  i.containerWidth = Math.round(rect.width);
  i.containerHeight = Math.round(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;
  if (!element.contains(i.scrollbarXRail)) {
    queryChildren(element, cls.element.rail("x")).forEach(function (el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    queryChildren(element, cls.element.rail("y")).forEach(function (el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarYRail);
  }
  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }
  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }
  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }
  updateCss(element, i);
  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active("x"));
  } else {
    element.classList.remove(cls.state.active("x"));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active("y"));
  } else {
    element.classList.remove(cls.state.active("y"));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}
function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}
function updateCss(element, i) {
  const xRailOffset = { width: i.railXWidth };
  const roundedScrollTop = Math.floor(element.scrollTop);
  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);
  const yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);
  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}
function clickRail(i) {
  i.element;
  i.event.bind(i.scrollbarY, "mousedown", function (e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarYRail, "mousedown", function (e) {
    const positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    const direction = positionTop > i.scrollbarYTop ? 1 : -1;
    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);
    e.stopPropagation();
  });
  i.event.bind(i.scrollbarX, "mousedown", function (e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarXRail, "mousedown", function (e) {
    const positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    const direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);
    e.stopPropagation();
  });
}
function dragThumb(i) {
  bindMouseScrollHandler(i, [
    "containerWidth",
    "contentWidth",
    "pageX",
    "railXWidth",
    "scrollbarX",
    "scrollbarXWidth",
    "scrollLeft",
    "x",
    "scrollbarXRail",
  ]);
  bindMouseScrollHandler(i, [
    "containerHeight",
    "contentHeight",
    "pageY",
    "railYHeight",
    "scrollbarY",
    "scrollbarYHeight",
    "scrollTop",
    "y",
    "scrollbarYRail",
  ]);
}
function bindMouseScrollHandler(i, ref2) {
  const containerHeight = ref2[0];
  const contentHeight = ref2[1];
  const pageY = ref2[2];
  const railYHeight = ref2[3];
  const scrollbarY = ref2[4];
  const scrollbarYHeight = ref2[5];
  const scrollTop = ref2[6];
  const y = ref2[7];
  const scrollbarYRail = ref2[8];
  const element = i.element;
  let startingScrollTop = null;
  let startingMousePageY = null;
  let scrollBy = null;
  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);
    e.stopPropagation();
    if (e.type.startsWith("touch") && e.changedTouches.length > 1) {
      e.preventDefault();
    }
  }
  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, "mousemove", mouseMoveHandler);
  }
  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, "mousemove", mouseMoveHandler);
      i.event.once(i.ownerDocument, "mouseup", mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, "touchmove", mouseMoveHandler);
    }
    i[scrollbarYRail].classList.add(cls.state.clicking);
    e.stopPropagation();
  }
  i.event.bind(i[scrollbarY], "mousedown", function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], "touchstart", function (e) {
    bindMoves(e, true);
  });
}
function keyboard(i) {
  const element = i.element;
  const elementHovered = function () {
    return matches(element, ":hover");
  };
  const scrollbarFocused = function () {
    return matches(i.scrollbarX, ":focus") || matches(i.scrollbarY, ":focus");
  };
  function shouldPreventDefault(deltaX, deltaY) {
    const scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    const scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }
  i.event.bind(i.ownerDocument, "keydown", function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }
    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }
    let activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === "IFRAME") {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }
    let deltaX = 0;
    let deltaY = 0;
    switch (e.which) {
      case 37:
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38:
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39:
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40:
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32:
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33:
        deltaY = i.containerHeight;
        break;
      case 34:
        deltaY = -i.containerHeight;
        break;
      case 36:
        deltaY = i.contentHeight;
        break;
      case 35:
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }
    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }
    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);
    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}
function wheel(i) {
  const element = i.element;
  function shouldPreventDefault(deltaX, deltaY) {
    const roundedScrollTop = Math.floor(element.scrollTop);
    const isTop = element.scrollTop === 0;
    const isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    const isLeft = element.scrollLeft === 0;
    const isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;
    let hitsBound;
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }
    return hitsBound ? !i.settings.wheelPropagation : true;
  }
  function getDeltaFromEvent(e) {
    let deltaX = e.deltaX;
    let deltaY = -1 * e.deltaY;
    if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }
    if (e.deltaMode && e.deltaMode === 1) {
      deltaX *= 10;
      deltaY *= 10;
    }
    if (deltaX !== deltaX && deltaY !== deltaY) {
      deltaX = 0;
      deltaY = e.wheelDelta;
    }
    if (e.shiftKey) {
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }
  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!env.isWebKit && element.querySelector("select:focus")) {
      return true;
    }
    if (!element.contains(target)) {
      return false;
    }
    let cursor = target;
    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }
      const style = get(cursor);
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        const maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        const maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }
      cursor = cursor.parentNode;
    }
    return false;
  }
  function mousewheelHandler(e) {
    const ref2 = getDeltaFromEvent(e);
    const deltaX = ref2[0];
    const deltaY = ref2[1];
    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }
    let shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }
    updateGeometry(i);
    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  if (typeof window.onwheel !== "undefined") {
    i.event.bind(element, "wheel", mousewheelHandler);
  } else if (typeof window.onmousewheel !== "undefined") {
    i.event.bind(element, "mousewheel", mousewheelHandler);
  }
}
function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }
  const element = i.element;
  function shouldPrevent(deltaX, deltaY) {
    const scrollTop = Math.floor(element.scrollTop);
    const scrollLeft = element.scrollLeft;
    const magnitudeX = Math.abs(deltaX);
    const magnitudeY = Math.abs(deltaY);
    if (magnitudeY > magnitudeX) {
      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }
    return true;
  }
  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;
    updateGeometry(i);
  }
  let startOffset = {};
  let startTime = 0;
  const speed = {};
  let easingLoop = null;
  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      return e;
    }
  }
  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === "pen" && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== "mouse" &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }
  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }
    const touch2 = getTouch(e);
    startOffset.pageX = touch2.pageX;
    startOffset.pageY = touch2.pageY;
    startTime = new Date().getTime();
    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }
  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }
    let cursor = target;
    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }
      const style = get(cursor);
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        const maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        const maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }
      cursor = cursor.parentNode;
    }
    return false;
  }
  function touchMove(e) {
    if (shouldHandle(e)) {
      const touch2 = getTouch(e);
      const currentOffset = { pageX: touch2.pageX, pageY: touch2.pageY };
      const differenceX = currentOffset.pageX - startOffset.pageX;
      const differenceY = currentOffset.pageY - startOffset.pageY;
      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }
      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;
      const currentTime = new Date().getTime();
      const timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }
      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function () {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }
        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }
        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }
        if (!i.element) {
          clearInterval(easingLoop);
          return;
        }
        applyTouchMove(speed.x * 30, speed.y * 30);
        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }
  if (env.supportsTouch) {
    i.event.bind(element, "touchstart", touchStart);
    i.event.bind(element, "touchmove", touchMove);
    i.event.bind(element, "touchend", touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, "pointerdown", touchStart);
      i.event.bind(element, "pointermove", touchMove);
      i.event.bind(element, "pointerup", touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, "MSPointerDown", touchStart);
      i.event.bind(element, "MSPointerMove", touchMove);
      i.event.bind(element, "MSPointerUp", touchEnd);
    }
  }
}
const defaultSettings = function () {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1,
  };
};
const handlers = {
  "click-rail": clickRail,
  "drag-thumb": dragThumb,
  keyboard,
  wheel,
  touch,
};
const PerfectScrollbar = function PerfectScrollbar2(element, userSettings) {
  const this$1$1 = this;
  if (userSettings === void 0) userSettings = {};
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if (!element || !element.nodeName) {
    throw new Error("no element is specified to initialize PerfectScrollbar");
  }
  this.element = element;
  element.classList.add(cls.main);
  this.settings = defaultSettings();
  for (const key in userSettings) {
    this.settings[key] = userSettings[key];
  }
  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;
  const focus = function () {
    return element.classList.add(cls.state.focus);
  };
  const blur = function () {
    return element.classList.remove(cls.state.focus);
  };
  this.isRtl = get(element).direction === "rtl";
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    const originalScrollLeft = element.scrollLeft;
    let result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;
  this.scrollbarXRail = div(cls.element.rail("x"));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb("x"));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute("tabindex", 0);
  this.event.bind(this.scrollbarX, "focus", focus);
  this.event.bind(this.scrollbarX, "blur", blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  const railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  set(this.scrollbarXRail, { display: "block" });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: "" });
  this.railXWidth = null;
  this.railXRatio = null;
  this.scrollbarYRail = div(cls.element.rail("y"));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb("y"));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute("tabindex", 0);
  this.event.bind(this.scrollbarY, "focus", focus);
  this.event.bind(this.scrollbarY, "blur", blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  const railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: "block" });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: "" });
  this.railYHeight = null;
  this.railYRatio = null;
  this.reach = {
    x:
      element.scrollLeft <= 0
        ? "start"
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? "end"
        : null,
    y:
      element.scrollTop <= 0
        ? "start"
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? "end"
        : null,
  };
  this.isAlive = true;
  this.settings.handlers.forEach(function (handlerName) {
    return handlers[handlerName](this$1$1);
  });
  this.lastScrollTop = Math.floor(element.scrollTop);
  this.lastScrollLeft = element.scrollLeft;
  this.event.bind(this.element, "scroll", function (e) {
    return this$1$1.onScroll(e);
  });
  updateGeometry(this);
};
PerfectScrollbar.prototype.update = function update() {
  if (!this.isAlive) {
    return;
  }
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;
  set(this.scrollbarXRail, { display: "block" });
  set(this.scrollbarYRail, { display: "block" });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);
  set(this.scrollbarXRail, { display: "none" });
  set(this.scrollbarYRail, { display: "none" });
  updateGeometry(this);
  processScrollDiff(this, "top", 0, false, true);
  processScrollDiff(this, "left", 0, false, true);
  set(this.scrollbarXRail, { display: "" });
  set(this.scrollbarYRail, { display: "" });
};
PerfectScrollbar.prototype.onScroll = function onScroll(e) {
  if (!this.isAlive) {
    return;
  }
  updateGeometry(this);
  processScrollDiff(this, "top", this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    "left",
    this.element.scrollLeft - this.lastScrollLeft
  );
  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};
PerfectScrollbar.prototype.destroy = function destroy() {
  if (!this.isAlive) {
    return;
  }
  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;
  this.isAlive = false;
};
PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
  this.element.className = this.element.className
    .split(" ")
    .filter(function (name) {
      return !name.match(/^ps([-_].+|)$/);
    })
    .join(" ");
};
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
  black: "#171919",
};
const APPLICATIONS_NAME = {
  1: "Obriga\xE7\xF5es",
  2: "Eventos de pagamentos",
  3: "Integraliza\xE7\xF5es",
  4: "Subscri\xE7\xF5es",
  5: "Atualiza\xE7\xE3o de status dos patrim\xF4nios",
  6: "Marcos dos patrim\xF4nios",
  7: "Vencimento das s\xE9ries",
  8: "Status das s\xE9ries",
};
const APPLICATIONS_COLORS = {
  1: { color: "#3DA5A5", disabled: "#77C0C0", hover: "#2B7373" },
  2: { color: "#F28E83", disabled: "#F2B5B0", hover: "#C15A4F" },
  3: { color: "#3B634E", disabled: "#6E8C7C", hover: "#2B3F3A" },
  4: { color: "#86381D", disabled: "#B36A4D", hover: "#5A2412" },
  5: { color: "#F4A053", disabled: "#F4CFA3", hover: "#C17A2B" },
  6: { color: "#A5AF80", disabled: "#C0C9A5", hover: "#737B4F" },
  7: { color: "#E6CF42", disabled: "#E6E0A5", hover: "#B3A12B" },
  8: { color: "#171919", disabled: "#4F4F4F", hover: "#000000" },
};
const APPLICATIONS_REFERENCE_NAME = {
  1: "obligations",
  2: "payment_events",
  3: "integrations",
  4: "subscriptions",
  5: "patrimony_status",
  6: "patrimony",
  7: "series_expiration",
  8: "series_status",
};
const constants = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      DATE_TIME_PATTERN,
      DATE_PATTERN,
      ITENS_COLOR,
      APPLICATIONS_NAME,
      APPLICATIONS_COLORS,
      APPLICATIONS_REFERENCE_NAME,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
class EventShow {
  constructor(data) {
    __publicField(this, "id");
    __publicField(this, "title");
    __publicField(this, "application");
    __publicField(this, "patrimony");
    __publicField(this, "series");
    __publicField(this, "emission");
    __publicField(this, "time");
    __publicField(this, "event_data");
    __publicField(this, "data");
    __publicField(this, "responsable");
    __publicField(this, "timeHelper", new Time());
    this.id = data == null ? void 0 : data.id;
    this.title = data == null ? void 0 : data.title;
    this.application = (data == null ? void 0 : data.application) || 1;
    this.patrimony = data == null ? void 0 : data.patrimony;
    this.series = data == null ? void 0 : data.series;
    this.emission = data == null ? void 0 : data.emission;
    this.time = (data == null ? void 0 : data.time) || {
      start: this.timeHelper.getDateTimeStringFromDate(new Date()),
      end: this.timeHelper.getDateTimeStringFromDate(new Date()),
    };
    this.event_data =
      (data == null ? void 0 : data.event_data) ||
      this.timeHelper.getDateStringFromDate(new Date());
    this.data = data ? data.data : {};
    this.responsable = data == null ? void 0 : data.responsable;
  }
  getApplicationName() {
    return APPLICATIONS_NAME[this.application];
  }
  getApplicationColors() {
    return APPLICATIONS_COLORS[this.application];
  }
  getApplicationsReferenceName() {
    return APPLICATIONS_REFERENCE_NAME[this.application];
  }
  getSubtitle() {
    let subtitle = "";
    if (this.patrimony) {
      subtitle += `Patrim\xF4nio: ${this.patrimony}`;
    }
    if (this.series) {
      subtitle += ` S\xE9rie: ${this.series}`;
    }
    if (this.emission) {
      subtitle += ` Emiss\xE3o: ${this.emission}`;
    }
    return subtitle;
  }
}
const VEventCard_scss_vue_type_style_index_0_src_67fe39ee_lang = "";
const _hoisted_1$4 = { class: "event-card" };
const _hoisted_2$2 = { class: "break-ellipsis break-ellipsis--three_line" };
const _hoisted_3$2 = { class: "break-ellipsis break-ellipsis--one_line" };
const _hoisted_4$1 = {
  key: 1,
  class: "break-ellipsis break-ellipsis--one_line",
};
const _sfc_main$5 = defineComponent({
  __name: "VEventCard",
  props: {
    title: {
      type: String,
      default: "T\xEDtulo do evento",
    },
    subtitle: {
      type: String,
      default: "",
    },
    responsable: {
      type: String,
    },
    size: {
      type: String,
      default: "default",
    },
    aplication: {
      type: String,
      default: "obligation",
    },
    status: {
      type: String,
    },
  },
  setup(__props) {
    const props = __props;
    const setAplicationClass = computed(
      () => `event-status--${props.aplication}`
    );
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createElementBlock("div", _hoisted_1$4, [
          createElementVNode(
            "div",
            {
              class: normalizeClass([
                "event-status",
                unref(setAplicationClass),
              ]),
            },
            [
              createElementVNode(
                "div",
                {
                  class: normalizeClass([
                    "event-body",
                    `event-body--${__props.size}`,
                  ]),
                },
                [
                  __props.size !== "small"
                    ? renderSlot(_ctx.$slots, "tag", { key: 0 })
                    : createCommentVNode("v-if", true),
                  createElementVNode(
                    "h4",
                    _hoisted_2$2,
                    toDisplayString(__props.title),
                    1
                  ),
                  createElementVNode(
                    "p",
                    _hoisted_3$2,
                    toDisplayString(__props.subtitle),
                    1
                  ),
                  __props.size !== "small" && __props.responsable
                    ? (openBlock(),
                      createElementBlock(
                        "p",
                        _hoisted_4$1,
                        toDisplayString(__props.responsable),
                        1
                      ))
                    : createCommentVNode("v-if", true),
                ],
                2
              ),
            ],
            2
          ),
        ])
      );
    };
  },
});
const VEventCard = /* @__PURE__ */ _export_sfc(_sfc_main$5, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/eventCard/VEventCard.vue",
  ],
]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Event",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  setup(__props) {
    const props = __props;
    const eventShow = new EventShow(props.event);
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createBlock(
          VEventCard,
          {
            title: __props.event.title,
            aplication: unref(eventShow).getApplicationsReferenceName(),
            subtitle: unref(eventShow).getSubtitle(),
            responsable: __props.event.responsable,
          },
          null,
          8,
          ["title", "aplication", "subtitle", "responsable"]
        )
      );
    };
  },
});
const Event = /* @__PURE__ */ _export_sfc(_sfc_main$4, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/calendar/mini/Event.vue",
  ],
]);
const VCalendarButton_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$3 = { class: "search-events" };
const _hoisted_2$1 = {
  id: "container-list",
  class: "list-events",
};
const _hoisted_3$1 = { class: "list-events__item" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "VCalendarButton",
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["search-event", "event-was-clicked", "day-was-clicked"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const calendarSelectedDate = ref(new Date());
    function onHandleDayClicked(payload) {
      const date = new Date(payload.dateTimeString);
      calendarSelectedDate.value = date;
      const dateTimeString = payload.dateTimeString.substring(0, 10);
      eventsOfDay.value = eventsDataProperty.value.filter((event) => {
        let _a;
        const eventIsInDay =
          ((_a = event == null ? void 0 : event.time) == null
            ? void 0
            : _a.start.substring(0, 10)) === dateTimeString;
        return eventIsInDay;
      });
      emits("day-was-clicked", payload);
    }
    const search = ref("");
    function searchEvent() {
      emits("search-event", search.value);
    }
    function onHandleEventClicked(event) {
      emits("event-was-clicked", event);
    }
    const scrollbar = ref(null);
    function initScrollbar() {
      scrollbar.value = new PerfectScrollbar(".list-events", {
        wheelSpeed: 0.5,
        wheelPropagation: true,
      });
    }
    onMounted(() => {
      initScrollbar();
    });
    const eventsDataProperty = ref(props.events);
    const eventsOfDay = ref(props.events);
    const eventRenderingKey = ref(0);
    watch(
      () => props.events,
      (newVal, oldVal) => {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          eventsDataProperty.value = props.events;
          const dateTimeString = calendarSelectedDate.value
            .toISOString()
            .substring(0, 10);
          eventsOfDay.value = eventsDataProperty.value.filter((event) => {
            let _a;
            const eventIsInDay =
              ((_a = event == null ? void 0 : event.time) == null
                ? void 0
                : _a.start.substring(0, 10)) === dateTimeString;
            return eventIsInDay;
          });
          eventRenderingKey.value = eventRenderingKey.value + 1;
        }
      },
      { deep: true, immediate: true }
    );
    return (_ctx, _cache) => {
      return (
        openBlock(),
        createBlock(
          unref(VPopUp),
          { "position-content": "center center" },
          {
            "event-area": withCtx(() => [createVNode(IconCalendar)]),
            "popup-body": withCtx(() => [
              createVNode(
                unref(VCalendarMini),
                {
                  events: __props.events,
                  "selected-date": calendarSelectedDate.value,
                  onDayWasClicked: onHandleDayClicked,
                },
                null,
                8,
                ["events", "selected-date"]
              ),
              createElementVNode("div", _hoisted_1$3, [
                withDirectives(
                  createElementVNode(
                    "input",
                    {
                      "onUpdate:modelValue":
                        _cache[0] ||
                        (_cache[0] = ($event) => (search.value = $event)),
                      placeholder: "Search",
                      onInput: searchEvent,
                    },
                    null,
                    544
                  ),
                  [[vModelText, search.value]]
                ),
              ]),
              createElementVNode("div", _hoisted_2$1, [
                (openBlock(true),
                createElementBlock(
                  Fragment,
                  null,
                  renderList(eventsOfDay.value, (event) => {
                    return (
                      openBlock(),
                      createElementBlock("div", _hoisted_3$1, [
                        createVNode(
                          Event,
                          {
                            event,
                            onClick: ($event) => onHandleEventClicked(event),
                          },
                          null,
                          8,
                          ["event", "onClick"]
                        ),
                      ])
                    );
                  }),
                  256
                )),
              ]),
            ]),
            _: 1,
          }
        )
      );
    };
  },
});
const VCalendarButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/calendar/VCalendarButton.vue",
  ],
]);
const defaultOptions = {
  page: 1,
  pageSize: 5,
  numItems: 0,
  numButtons: 5,
};
const usePaginator = (userOptions) => {
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
    },
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
    if (hasPrev.value) [page.value--];
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
    buttons,
  };
};
function fullButtons(page, numPages) {
  return consecutiveSlots(1, page)
    .concat({ page, active: true, ellipsis: false })
    .concat(consecutiveSlots(page + 1, numPages + 1));
}
function partialButtons(page, numPages, numButtons) {
  let slotsLeft = 0,
    slotsRight = 0;
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
    list = consecutiveSlots(1, ellipsis)
      .concat({ page: ellipsisPage, active: false, ellipsis: true })
      .concat(consecutiveSlots(page - remaining, page));
  }
  list.push({ page, active: true, ellipsis: false });
  if (pagesNext <= slotsRight) {
    list = list.concat(consecutiveSlots(page + 1, numPages + 1));
  } else if (slotsRight > 0) {
    const ellipsis = slotsRight === 2 ? 1 : Math.floor(slotsRight / 2) + 1;
    const remaining = slotsRight - ellipsis;
    const ellipsisPage = page + Math.ceil(pagesNext / 2);
    list = list
      .concat(consecutiveSlots(page + 1, page + ellipsis))
      .concat({ page: ellipsisPage, active: false, ellipsis: true })
      .concat(consecutiveSlots(numPages - remaining + 1, numPages + 1));
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
const VPagination_scss_vue_type_style_index_0_src_3245b22b_lang = "";
const VPagination_scss_vue_type_style_index_1_src_3245b22b_lang = "";
const _sfc_main$2 = defineComponent({
  name: "VPagination",
  components: { VSelect },
  props: {
    count: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    sizeDefault: {
      type: Number,
      default: 5,
    },
    sizeOptions: {
      type: Array,
      default: () => [
        {
          value: "5",
          label: "5 items",
        },
        {
          value: "10",
          label: "10 items",
        },
        {
          value: "30",
          label: "30 items",
        },
        {
          value: "50",
          label: "50 items",
        },
        {
          value: "100",
          label: "100 items",
        },
      ],
    },
    qtdeButtonsPaginate: {
      type: Number,
      default: 8,
    },
  },
  emits: ["onChangePagination"],
  setup(props, { emit }) {
    const {
      page,
      pageSize,
      hasPrev,
      hasNext,
      goPrev,
      goNext,
      buttons,
      numPages,
      numItems,
    } = usePaginator({
      pageSize: props.sizeDefault,
      numButtons: props.qtdeButtonsPaginate,
    });
    watch(
      () => props.count,
      (count) => {
        numItems.value = count;
      }
    );
    watch([page, pageSize], ([newPage, newPageSize]) => {
      emit("onChangePagination", { page: newPage, page_size: newPageSize });
    });
    return {
      hasPrev,
      hasNext,
      pageSize,
      goPrev,
      goNext,
      buttons,
      page,
      numPages,
    };
  },
});
const _hoisted_1$2 = { class: "box--pagination" };
const _hoisted_2 = { class: "box--pagination-count" };
const _hoisted_3 = { class: "box--pagination-pages" };
const _hoisted_4 = { class: "box--pagination-pages-size" };
const _hoisted_5 = { class: "box--pagination-pages-itens" };
const _hoisted_6 = { class: "pagination" };
const _hoisted_7 = /* @__PURE__ */ createElementVNode(
  "a",
  { class: "pagination_li--item" },
  null,
  -1
);
const _hoisted_8 = [_hoisted_7];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = /* @__PURE__ */ createElementVNode(
  "a",
  { class: "pagination_li--item" },
  null,
  -1
);
const _hoisted_11 = [_hoisted_10];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_select = resolveComponent("v-select");
  return (
    openBlock(),
    createElementBlock("div", _hoisted_1$2, [
      createElementVNode(
        "div",
        _hoisted_2,
        toDisplayString(_ctx.count) + " items ",
        1
      ),
      createElementVNode("div", _hoisted_3, [
        createElementVNode("div", _hoisted_4, [
          createVNode(
            _component_v_select,
            {
              id: "select_page_size",
              name: "select_page_size",
              options: _ctx.sizeOptions,
              size: "sm",
              modelValue: _ctx.pageSize,
              "onUpdate:modelValue":
                _cache[0] || (_cache[0] = ($event) => (_ctx.pageSize = $event)),
            },
            null,
            8,
            ["options", "modelValue"]
          ),
        ]),
        createElementVNode("div", _hoisted_5, [
          createElementVNode("ol", _hoisted_6, [
            createElementVNode(
              "li",
              {
                class: normalizeClass([
                  "pagination_li",
                  !_ctx.hasPrev && "disabled",
                ]),
                onClick:
                  _cache[1] ||
                  (_cache[1] = (...args) =>
                    _ctx.goPrev && _ctx.goPrev(...args)),
              },
              _hoisted_8,
              2
            ),
            (openBlock(true),
            createElementBlock(
              Fragment,
              null,
              renderList(_ctx.buttons, (button, idx) => {
                return (
                  openBlock(),
                  createElementBlock(
                    "li",
                    {
                      class: "pagination_li",
                      key: idx,
                      onClick: ($event) => (_ctx.page = button.page),
                    },
                    [
                      createElementVNode(
                        "a",
                        {
                          class: normalizeClass([
                            "pagination_li--item",
                            { active: button.active },
                          ]),
                        },
                        toDisplayString(button.ellipsis ? "..." : button.page),
                        3
                      ),
                    ],
                    8,
                    _hoisted_9
                  )
                );
              }),
              128
            )),
            createElementVNode(
              "li",
              {
                class: normalizeClass([
                  "pagination_li",
                  !_ctx.hasNext && "disabled",
                ]),
                onClick:
                  _cache[2] ||
                  (_cache[2] = (...args) =>
                    _ctx.goNext && _ctx.goNext(...args)),
              },
              _hoisted_11,
              2
            ),
          ]),
        ]),
      ]),
    ])
  );
}
const VPagination = /* @__PURE__ */ _export_sfc(_sfc_main$2, [
  ["render", _sfc_render$2],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/pagination/VPagination.vue",
  ],
]);
const _sfc_main$1 = defineComponent({
  name: "VTabContent",
  props: {
    eixo: {
      type: String,
      default: "x",
    },
    contentId: {
      type: String,
      required: true,
    },
  },
});
const _hoisted_1$1 = ["id", "data-tab-content-type"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      "div",
      {
        id: _ctx.contentId,
        class: "tab--content",
        "data-tab-content-type": _ctx.eixo,
      },
      [renderSlot(_ctx.$slots, "default")],
      8,
      _hoisted_1$1
    )
  );
}
const VTabContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  ["render", _sfc_render$1],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/tab/VTabContent.vue",
  ],
]);
const _sfc_main = defineComponent({
  name: "VTabContent",
  props: {
    actived: {
      type: Boolean,
      default: false,
    },
    eixo: {
      type: String,
      default: "x",
    },
    tabTo: {
      type: String,
      required: true,
    },
  },
  methods: {
    activeTab(event) {
      const tabHead = event.path[1].children;
      for (const item of tabHead) item.classList.remove("active");
      event.target.classList.add("active");
      this.showContentTab(
        event == null ? void 0 : event.target.dataset.tabTo,
        event == null ? void 0 : event.target.dataset.tabType
      );
    },
    showContentTab(contentId, typeTab) {
      const tabContents = document.getElementsByClassName("tab--content");
      for (const item of tabContents) {
        if (typeTab == item.dataset.tabContentType) item.style.display = "none";
        if (contentId == item.getAttribute("id")) {
          item.style.display = "block";
        }
      }
    },
  },
});
const _hoisted_1 = ["data-tab-type", "data-tab-to"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (
    openBlock(),
    createElementBlock(
      "button",
      {
        class: normalizeClass({ active: _ctx.actived }),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.activeTab($event)),
        "data-tab-type": _ctx.eixo,
        "data-tab-to": _ctx.tabTo,
      },
      [renderSlot(_ctx.$slots, "default")],
      10,
      _hoisted_1
    )
  );
}
const VTabHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ["render", _sfc_render],
  [
    "__file",
    "/home/debora/www/vert_design_system_ui/src/components/tab/VTabHeader.vue",
  ],
]);
export {
  VButton,
  VCalendarButton,
  VCalendarMini,
  VCard,
  VEventCard,
  VPagination,
  VPopUp,
  VSelect,
  VTab,
  VTabContent,
  VTabHeader,
  VTable,
  VTag,
  constants,
};
