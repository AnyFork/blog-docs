import { _ as _export_sfc, e as defineComponent, r as resolveComponent, o as openBlock, i as createBlock, w as withCtx, a as createBaseVNode, t as toDisplayString, h as unref, g as createVNode, j as usePageData } from "./app.ed27189e.js";
import { P as ParentLayout, B as BlogItemInfo } from "./Layout.350c3af2.js";
const _hoisted_1 = { class: "title w-[var(--content-width)] my-0 mx-auto" };
const _hoisted_2 = { class: "flex items-center justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createBlock(ParentLayout, null, {
        "page-top": withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h1", null, toDisplayString(unref(page).title), 1),
              createVNode(_component_Icon, {
                icon: "RollbackOutlined",
                text: "\u8FD4\u56DE",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.go(-1)),
                class: "cursor-pointer"
              })
            ]),
            createVNode(BlogItemInfo, { page: unref(page) }, null, 8, ["page"])
          ])
        ]),
        _: 1
      });
    };
  }
});
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Layout.vue"]]);
export { Layout as default };
