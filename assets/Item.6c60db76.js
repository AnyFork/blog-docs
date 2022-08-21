import { _ as _export_sfc, e as defineComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, A as normalizeStyle, t as toDisplayString } from "./app.ed27189e.js";
var Item_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "shadow-item bg-[#fff] hover:bg-[#3eaf7c] dark:bg-[#181818] dark:hover:bg-[#3eaf7c]" };
const _hoisted_2 = ["href", "target"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Item",
  props: {
    itemText: null,
    itemLink: null,
    itemCount: null,
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return openBlock(), createElementBlock("span", _hoisted_1, [
        createBaseVNode("a", {
          href: (_a = __props.itemLink) == null ? void 0 : _a.link,
          target: (_b = __props.itemLink) == null ? void 0 : _b.target,
          class: "flex items-center text-[#666] py-[8px] px-[14px] dark:hover:text-[#fff]"
        }, [
          createBaseVNode("span", {
            style: normalizeStyle(__props.active ? { "background-color": "#3eaf7c", color: "#fff" } : "")
          }, toDisplayString(__props.itemText.text), 5),
          createBaseVNode("span", {
            class: "ml-[4px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
            style: normalizeStyle({ "background-color": (_c = __props.itemCount) == null ? void 0 : _c.bgColor })
          }, toDisplayString((_d = __props.itemCount) == null ? void 0 : _d.count), 5)
        ], 8, _hoisted_2)
      ]);
    };
  }
});
var Item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5e8525fe"], ["__file", "Item.vue"]]);
export { Item as default };
