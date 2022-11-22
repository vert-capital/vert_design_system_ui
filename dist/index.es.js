import { defineComponent, openBlock, createElementBlock, mergeProps, createElementVNode, createCommentVNode, renderSlot, useSlots, ref, Fragment, renderList, normalizeClass, withModifiers, toDisplayString, normalizeProps, createTextVNode, watch, computed, resolveComponent, createVNode } from "vue";
var VButton_scss_vue_type_style_index_0_src_6e5341db_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$7 = defineComponent({
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
const _hoisted_1$7 = ["disabled"];
const _hoisted_2$4 = {
  key: 0,
  class: "v-btn--img"
};
const _hoisted_3$3 = ["src"];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", mergeProps({
    class: [_ctx.setSizeClass, _ctx.setStatus],
    disabled: _ctx.disabled,
    type: "button"
  }, _ctx.$attrs), [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_3$3)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 16, _hoisted_1$7);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "/home/debora/www/vert_design_system_ui/src/components/button/VButton.vue"]]);
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
const _sfc_main$6 = defineComponent({
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
const _hoisted_1$6 = { class: "v-table" };
const _hoisted_2$3 = { class: "v-table__body-wrapper" };
const _hoisted_3$2 = { class: "responsive-table" };
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = ["onClick"];
const _hoisted_6$2 = { class: "v-table__cell" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("div", _hoisted_2$3, [
      createElementVNode("table", _hoisted_3$2, [
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
              }, toDisplayString(col.label), 11, _hoisted_4$2);
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
            ], 8, _hoisted_5$2);
          }), 128))
        ])
      ])
    ])
  ]);
}
var VTable = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "/home/debora/www/vert_design_system_ui/src/components/table/VTable.vue"]]);
var VSelect_scss_vue_type_style_index_0_src_4a2786ac_lang = "";
const _hoisted_1$5 = { class: "v-select" };
const _hoisted_2$2 = {
  key: 0,
  class: "v-select--label"
};
const _hoisted_3$1 = ["for"];
const _hoisted_4$1 = { class: "v-selec--content" };
const _hoisted_5$1 = ["name", "id", "required", "disabled"];
const _hoisted_6$1 = {
  key: 0,
  value: ""
};
const _hoisted_7$1 = ["value", "selected"];
const _sfc_main$5 = defineComponent({
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
    modelValue: { type: [String, Number], required: false }
  },
  emits: ["onChange", "update:modelValue"],
  setup(__props, { emit }) {
    const selected = ref(null);
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
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        __props.label ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
          createElementVNode("label", { for: __props.id }, toDisplayString(__props.label), 9, _hoisted_3$1)
        ])) : createCommentVNode("v-if", true),
        createElementVNode("div", _hoisted_4$1, [
          createElementVNode("select", {
            class: normalizeClass(`v-select--input v-select--size-${__props.size}`),
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
          ], 42, _hoisted_5$1)
        ])
      ]);
    };
  }
});
var VSelect = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "/home/debora/www/vert_design_system_ui/src/components/form/select/VSelect.vue"]]);
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
const _sfc_main$4 = defineComponent({
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
const _hoisted_1$4 = { class: "box--pagination" };
const _hoisted_2$1 = { class: "box--pagination-count" };
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
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_v_select = resolveComponent("v-select");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$1, toDisplayString(_ctx.count) + " items ", 1),
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
var VPagination = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/debora/www/vert_design_system_ui/src/components/pagination/VPagination.vue"]]);
var VTab_scss_vue_type_style_index_0_src_a3c685ae_lang = "";
const _sfc_main$3 = defineComponent({
  name: "VTab",
  props: {
    eixo: {
      type: String,
      default: "x"
    }
  }
});
const _hoisted_1$3 = { class: "box" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      class: normalizeClass(`tab--${_ctx.eixo}`)
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ]);
}
var VTab = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tab/VTab.vue"]]);
const _sfc_main$2 = defineComponent({
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
const _hoisted_1$2 = ["id", "data-tab-content-type"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    id: _ctx.contentId,
    class: "tab--content",
    "data-tab-content-type": _ctx.eixo
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 8, _hoisted_1$2);
}
var VTabContent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tab/VTabContent.vue"]]);
const _sfc_main$1 = defineComponent({
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
const _hoisted_1$1 = ["data-tab-type", "data-tab-to"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass({ active: _ctx.actived }),
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.activeTab($event)),
    "data-tab-type": _ctx.eixo,
    "data-tab-to": _ctx.tabTo
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$1);
}
var VTabHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tab/VTabHeader.vue"]]);
var VTag_scss_vue_type_style_index_0_src_73d26849_lang = "";
const _sfc_main = defineComponent({
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
const _hoisted_1 = {
  key: 0,
  class: "v-tag--img"
};
const _hoisted_2 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([`v-tag__${_ctx.type}--${_ctx.status}`, { "v-tag--square": _ctx.square }])
  }, [
    _ctx.icon ? (openBlock(), createElementBlock("div", _hoisted_1, [
      createElementVNode("img", { src: _ctx.setIcon }, null, 8, _hoisted_2)
    ])) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var VTag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/debora/www/vert_design_system_ui/src/components/tag/VTag.vue"]]);
export { VButton, VPagination, VSelect, VTab, VTabContent, VTabHeader, VTable, VTag };
