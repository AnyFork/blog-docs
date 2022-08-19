import { o as openBlock, c as createElementBlock, J as normalizeClass, e as createBaseVNode, Y as withKeys, A as createCommentVNode, F as Fragment, B as renderList, S as renderSlot, g as createTextVNode, t as toDisplayString, _ as _export_sfc$1, d as defineComponent, I as computed, a3 as ref, a1 as watch, f as createVNode, a9 as isRef, h as unref, Z as withDirectives, aa as vModelText, ab as vModelSelect } from "./app.f21c36fe.js";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  data() {
    return {
      innerValue: 1
    };
  },
  props: {
    modelValue: {
      type: Number
    },
    pageCount: {
      type: Number,
      required: true
    },
    initialPage: {
      type: Number,
      default: 1
    },
    forcePage: {
      type: Number
    },
    clickHandler: {
      type: Function,
      default: () => {
      }
    },
    pageRange: {
      type: Number,
      default: 3
    },
    marginPages: {
      type: Number,
      default: 1
    },
    prevText: {
      type: String,
      default: "Prev"
    },
    nextText: {
      type: String,
      default: "Next"
    },
    breakViewText: {
      type: String,
      default: "\u2026"
    },
    containerClass: {
      type: String,
      default: "pagination"
    },
    pageClass: {
      type: String,
      default: "page-item"
    },
    pageLinkClass: {
      type: String,
      default: "page-link"
    },
    prevClass: {
      type: String,
      default: "page-item"
    },
    prevLinkClass: {
      type: String,
      default: "page-link"
    },
    nextClass: {
      type: String,
      default: "page-item"
    },
    nextLinkClass: {
      type: String,
      default: "page-link"
    },
    breakViewClass: {
      type: String
    },
    breakViewLinkClass: {
      type: String
    },
    activeClass: {
      type: String,
      default: "active"
    },
    disabledClass: {
      type: String,
      default: "disabled"
    },
    noLiSurround: {
      type: Boolean,
      default: false
    },
    firstLastButton: {
      type: Boolean,
      default: false
    },
    firstButtonText: {
      type: String,
      default: "First"
    },
    lastButtonText: {
      type: String,
      default: "Last"
    },
    hidePrevNext: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selected: {
      get: function() {
        return this.modelValue || this.innerValue;
      },
      set: function(newValue) {
        this.innerValue = newValue;
      }
    },
    pages: function() {
      let items = {};
      if (this.pageCount <= this.pageRange) {
        for (let index = 0; index < this.pageCount; index++) {
          let page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        }
      } else {
        const halfPageRange = Math.floor(this.pageRange / 2);
        let setPageItem = (index) => {
          let page = {
            index,
            content: index + 1,
            selected: index === this.selected - 1
          };
          items[index] = page;
        };
        let setBreakView = (index) => {
          let breakView = {
            disabled: true,
            breakView: true
          };
          items[index] = breakView;
        };
        for (let i = 0; i < this.marginPages; i++) {
          setPageItem(i);
        }
        let selectedRangeLow = 0;
        if (this.selected - halfPageRange > 0) {
          selectedRangeLow = this.selected - 1 - halfPageRange;
        }
        let selectedRangeHigh = selectedRangeLow + this.pageRange - 1;
        if (selectedRangeHigh >= this.pageCount) {
          selectedRangeHigh = this.pageCount - 1;
          selectedRangeLow = selectedRangeHigh - this.pageRange + 1;
        }
        for (let i = selectedRangeLow; i <= selectedRangeHigh && i <= this.pageCount - 1; i++) {
          setPageItem(i);
        }
        if (selectedRangeLow > this.marginPages) {
          setBreakView(selectedRangeLow - 1);
        }
        if (selectedRangeHigh + 1 < this.pageCount - this.marginPages) {
          setBreakView(selectedRangeHigh + 1);
        }
        for (let i = this.pageCount - 1; i >= this.pageCount - this.marginPages; i--) {
          setPageItem(i);
        }
      }
      return items;
    }
  },
  methods: {
    handlePageSelected(selected) {
      if (this.selected === selected)
        return;
      this.innerValue = selected;
      this.$emit("update:modelValue", selected);
      this.clickHandler(selected);
    },
    prevPage() {
      if (this.selected <= 1)
        return;
      this.handlePageSelected(this.selected - 1);
    },
    nextPage() {
      if (this.selected >= this.pageCount)
        return;
      this.handlePageSelected(this.selected + 1);
    },
    firstPageSelected() {
      return this.selected === 1;
    },
    lastPageSelected() {
      return this.selected === this.pageCount || this.pageCount === 0;
    },
    selectFirstPage() {
      if (this.selected <= 1)
        return;
      this.handlePageSelected(1);
    },
    selectLastPage() {
      if (this.selected >= this.pageCount)
        return;
      this.handlePageSelected(this.pageCount);
    }
  },
  beforeMount() {
    this.innerValue = this.initialPage;
  },
  beforeUpdate() {
    if (this.forcePage === void 0)
      return;
    if (this.forcePage !== this.selected) {
      this.selected = this.forcePage;
    }
  }
};
const _hoisted_1$1 = ["tabindex", "innerHTML"];
const _hoisted_2$1 = ["tabindex", "innerHTML"];
const _hoisted_3$1 = ["onClick", "onKeyup"];
const _hoisted_4$1 = ["tabindex", "innerHTML"];
const _hoisted_5$1 = ["tabindex", "innerHTML"];
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = ["innerHTML"];
const _hoisted_8$1 = ["onClick", "onKeyup"];
const _hoisted_9$1 = ["innerHTML"];
const _hoisted_10 = ["innerHTML"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return !$props.noLiSurround ? (openBlock(), createElementBlock("ul", {
    key: 0,
    class: normalizeClass($props.containerClass)
  }, [
    $props.firstLastButton ? (openBlock(), createElementBlock("li", {
      key: 0,
      class: normalizeClass([$props.pageClass, $options.firstPageSelected() ? $props.disabledClass : ""])
    }, [
      createBaseVNode("a", {
        onClick: _cache[0] || (_cache[0] = ($event) => $options.selectFirstPage()),
        onKeyup: _cache[1] || (_cache[1] = withKeys(($event) => $options.selectFirstPage(), ["enter"])),
        class: normalizeClass($props.pageLinkClass),
        tabindex: $options.firstPageSelected() ? -1 : 0,
        innerHTML: $props.firstButtonText
      }, null, 42, _hoisted_1$1)
    ], 2)) : createCommentVNode("", true),
    !($options.firstPageSelected() && $props.hidePrevNext) ? (openBlock(), createElementBlock("li", {
      key: 1,
      class: normalizeClass([$props.prevClass, $options.firstPageSelected() ? $props.disabledClass : ""])
    }, [
      createBaseVNode("a", {
        onClick: _cache[2] || (_cache[2] = ($event) => $options.prevPage()),
        onKeyup: _cache[3] || (_cache[3] = withKeys(($event) => $options.prevPage(), ["enter"])),
        class: normalizeClass($props.prevLinkClass),
        tabindex: $options.firstPageSelected() ? -1 : 0,
        innerHTML: $props.prevText
      }, null, 42, _hoisted_2$1)
    ], 2)) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.pages, (page) => {
      return openBlock(), createElementBlock("li", {
        key: page.index,
        class: normalizeClass([$props.pageClass, page.selected ? $props.activeClass : "", page.disabled ? $props.disabledClass : "", page.breakView ? $props.breakViewClass : ""])
      }, [
        page.breakView ? (openBlock(), createElementBlock("a", {
          key: 0,
          class: normalizeClass([$props.pageLinkClass, $props.breakViewLinkClass]),
          tabindex: "0"
        }, [
          renderSlot(_ctx.$slots, "breakViewContent", {}, () => [
            createTextVNode(toDisplayString($props.breakViewText), 1)
          ])
        ], 2)) : page.disabled ? (openBlock(), createElementBlock("a", {
          key: 1,
          class: normalizeClass($props.pageLinkClass),
          tabindex: "0"
        }, toDisplayString(page.content), 3)) : (openBlock(), createElementBlock("a", {
          key: 2,
          onClick: ($event) => $options.handlePageSelected(page.index + 1),
          onKeyup: withKeys(($event) => $options.handlePageSelected(page.index + 1), ["enter"]),
          class: normalizeClass($props.pageLinkClass),
          tabindex: "0"
        }, toDisplayString(page.content), 43, _hoisted_3$1))
      ], 2);
    }), 128)),
    !($options.lastPageSelected() && $props.hidePrevNext) ? (openBlock(), createElementBlock("li", {
      key: 2,
      class: normalizeClass([$props.nextClass, $options.lastPageSelected() ? $props.disabledClass : ""])
    }, [
      createBaseVNode("a", {
        onClick: _cache[4] || (_cache[4] = ($event) => $options.nextPage()),
        onKeyup: _cache[5] || (_cache[5] = withKeys(($event) => $options.nextPage(), ["enter"])),
        class: normalizeClass($props.nextLinkClass),
        tabindex: $options.lastPageSelected() ? -1 : 0,
        innerHTML: $props.nextText
      }, null, 42, _hoisted_4$1)
    ], 2)) : createCommentVNode("", true),
    $props.firstLastButton ? (openBlock(), createElementBlock("li", {
      key: 3,
      class: normalizeClass([$props.pageClass, $options.lastPageSelected() ? $props.disabledClass : ""])
    }, [
      createBaseVNode("a", {
        onClick: _cache[6] || (_cache[6] = ($event) => $options.selectLastPage()),
        onKeyup: _cache[7] || (_cache[7] = withKeys(($event) => $options.selectLastPage(), ["enter"])),
        class: normalizeClass($props.pageLinkClass),
        tabindex: $options.lastPageSelected() ? -1 : 0,
        innerHTML: $props.lastButtonText
      }, null, 42, _hoisted_5$1)
    ], 2)) : createCommentVNode("", true)
  ], 2)) : (openBlock(), createElementBlock("div", {
    key: 1,
    class: normalizeClass($props.containerClass)
  }, [
    $props.firstLastButton ? (openBlock(), createElementBlock("a", {
      key: 0,
      onClick: _cache[8] || (_cache[8] = ($event) => $options.selectFirstPage()),
      onKeyup: _cache[9] || (_cache[9] = withKeys(($event) => $options.selectFirstPage(), ["enter"])),
      class: normalizeClass([$props.pageLinkClass, $options.firstPageSelected() ? $props.disabledClass : ""]),
      tabindex: "0",
      innerHTML: $props.firstButtonText
    }, null, 42, _hoisted_6$1)) : createCommentVNode("", true),
    !($options.firstPageSelected() && $props.hidePrevNext) ? (openBlock(), createElementBlock("a", {
      key: 1,
      onClick: _cache[10] || (_cache[10] = ($event) => $options.prevPage()),
      onKeyup: _cache[11] || (_cache[11] = withKeys(($event) => $options.prevPage(), ["enter"])),
      class: normalizeClass([$props.prevLinkClass, $options.firstPageSelected() ? $props.disabledClass : ""]),
      tabindex: "0",
      innerHTML: $props.prevText
    }, null, 42, _hoisted_7$1)) : createCommentVNode("", true),
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.pages, (page) => {
      return openBlock(), createElementBlock(Fragment, null, [
        page.breakView ? (openBlock(), createElementBlock("a", {
          key: page.index,
          class: normalizeClass([$props.pageLinkClass, $props.breakViewLinkClass, page.disabled ? $props.disabledClass : ""]),
          tabindex: "0"
        }, [
          renderSlot(_ctx.$slots, "breakViewContent", {}, () => [
            createTextVNode(toDisplayString($props.breakViewText), 1)
          ])
        ], 2)) : page.disabled ? (openBlock(), createElementBlock("a", {
          key: page.index,
          class: normalizeClass([$props.pageLinkClass, page.selected ? $props.activeClass : "", $props.disabledClass]),
          tabindex: "0"
        }, toDisplayString(page.content), 3)) : (openBlock(), createElementBlock("a", {
          key: page.index,
          onClick: ($event) => $options.handlePageSelected(page.index + 1),
          onKeyup: withKeys(($event) => $options.handlePageSelected(page.index + 1), ["enter"]),
          class: normalizeClass([$props.pageLinkClass, page.selected ? $props.activeClass : ""]),
          tabindex: "0"
        }, toDisplayString(page.content), 43, _hoisted_8$1))
      ], 64);
    }), 256)),
    !($options.lastPageSelected() && $props.hidePrevNext) ? (openBlock(), createElementBlock("a", {
      key: 2,
      onClick: _cache[12] || (_cache[12] = ($event) => $options.nextPage()),
      onKeyup: _cache[13] || (_cache[13] = withKeys(($event) => $options.nextPage(), ["enter"])),
      class: normalizeClass([$props.nextLinkClass, $options.lastPageSelected() ? $props.disabledClass : ""]),
      tabindex: "0",
      innerHTML: $props.nextText
    }, null, 42, _hoisted_9$1)) : createCommentVNode("", true),
    $props.firstLastButton ? (openBlock(), createElementBlock("a", {
      key: 3,
      onClick: _cache[14] || (_cache[14] = ($event) => $options.selectLastPage()),
      onKeyup: _cache[15] || (_cache[15] = withKeys(($event) => $options.selectLastPage(), ["enter"])),
      class: normalizeClass([$props.pageLinkClass, $options.lastPageSelected() ? $props.disabledClass : ""]),
      tabindex: "0",
      innerHTML: $props.lastButtonText
    }, null, 42, _hoisted_10)) : createCommentVNode("", true)
  ], 2));
}
var Paginate = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
var Pagination_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "w-full flex items-center justify-center"
};
const _hoisted_2 = { class: "my-[20px] flex ml-[50px]" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u8DF3\u81F3: ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6BCF\u9875: ");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("option", { value: 10 }, "10", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("option", { value: 15 }, "15", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("option", { value: 20 }, "20", -1);
const _hoisted_8 = [
  _hoisted_5,
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u6761");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  props: {
    pageTotal: null,
    pageNumber: null,
    pageSize: null
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const clickEvent = (pageNumber2, pageSize2) => {
      emit("click", { page: pageNumber2, pageSize: pageSize2 });
    };
    const pageCount = computed(() => Math.ceil(props.pageTotal / props.pageSize));
    const jumpPageNumber = ref(void 0);
    watch(jumpPageNumber, (newVal) => {
      if (newVal) {
        if (parseInt(newVal) > pageCount.value) {
          alert(`\u8F93\u5165\u7684\u9875\u9762\u4E0D\u80FD\u8D85\u8FC7\uFF1A${pageCount.value}`);
        } else {
          clickEvent(parseInt(newVal), props.pageSize);
        }
      }
    });
    watch(() => props.pageNumber, (newVal) => {
      newVal + "" != jumpPageNumber.value ? jumpPageNumber.value = void 0 : "";
      newVal ? clickEvent(newVal, props.pageSize) : "";
    });
    watch(() => props.pageSize, (newVal) => {
      clickEvent(1, newVal);
    });
    return (_ctx, _cache) => {
      return __props.pageTotal > 10 ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(Paginate), {
          modelValue: __props.pageNumber,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(pageNumber) ? pageNumber.value = $event : null),
          "page-count": unref(pageCount),
          "prev-text": "\u4E0A\u4E00\u9875",
          "next-text": "\u4E0B\u4E00\u9875",
          "container-class": "pagination",
          "page-class": "page-item",
          "page-range": 3,
          "margin-pages": 3,
          "hide-prev-next": true
        }, null, 8, ["modelValue", "page-count"]),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("span", null, [
            _hoisted_3,
            withDirectives(createBaseVNode("input", {
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => jumpPageNumber.value = $event),
              class: "w-5 h-[20px]"
            }, null, 512), [
              [vModelText, jumpPageNumber.value]
            ])
          ]),
          createBaseVNode("span", null, [
            _hoisted_4,
            withDirectives(createBaseVNode("select", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(pageSize) ? pageSize.value = $event : null),
              class: "h-[25px]"
            }, _hoisted_8, 512), [
              [vModelSelect, __props.pageSize]
            ]),
            _hoisted_9
          ]),
          createBaseVNode("span", null, "\u5171: " + toDisplayString(props.pageTotal) + "\u6761", 1)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
var Pagination = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__file", "Pagination.vue"]]);
export { Pagination as default };
