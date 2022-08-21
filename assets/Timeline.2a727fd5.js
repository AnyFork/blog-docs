import { _ as _export_sfc, e as defineComponent, B as reactive, k as computed, r as resolveComponent, o as openBlock, i as createBlock, w as withCtx, a as createBaseVNode, c as createElementBlock, z as renderList, h as unref, F as Fragment, g as createVNode } from "./app.ed27189e.js";
import { c, P as ParentLayout, b as BlogItem } from "./Layout.350c3af2.js";
var Timeline_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "page" };
const _hoisted_2 = { class: "pt-[20px] w-[var(--content-width)] my-0 mx-auto" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", { class: "timeline-title" }, "\u65F6\u95F4\u8F74", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Timeline",
  setup(__props) {
    var _a;
    const timelines = c("timeline");
    console.log(timelines);
    const pages = reactive({
      pageTotal: ((_a = timelines.value.items) == null ? void 0 : _a.length) || 0,
      pageNumber: 1,
      pageSize: 10
    });
    const blogData = computed(() => {
      var _a2;
      return (_a2 = timelines.value.items) == null ? void 0 : _a2.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize);
    });
    const getBack = (value) => {
      const { page, pageSize } = value;
      pages.pageNumber = page;
      pages.pageSize = pageSize;
    };
    return (_ctx, _cache) => {
      const _component_Pagination = resolveComponent("Pagination");
      return openBlock(), createBlock(ParentLayout, null, {
        page: withCtx(() => [
          createBaseVNode("main", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              _hoisted_3,
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(blogData), (item, index) => {
                return openBlock(), createBlock(BlogItem, {
                  page: item.info,
                  position: index % 2 == 0 ? "left" : "right",
                  key: index
                }, null, 8, ["page", "position"]);
              }), 128)),
              createVNode(_component_Pagination, {
                pageTotal: pages.pageTotal,
                pageNumber: pages.pageNumber,
                pageSize: pages.pageSize,
                onClick: getBack
              }, null, 8, ["pageTotal", "pageNumber", "pageSize"])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var Timeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Timeline.vue"]]);
export { Timeline as default };
