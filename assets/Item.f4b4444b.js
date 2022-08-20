import { _ as _export_sfc, d as defineComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, t as toDisplayString, C as normalizeStyle } from "./app.fe719da3.js";
var Item_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "shadow-item bg-[#fff] hover:bg-[#3eaf7c] dark:bg-[#181818] dark:hover:bg-[#3eaf7c]" };
const _hoisted_2 = { class: "flex items-center text-[#666] py-[8px] px-[14px] dark:hover:text-[#fff]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Item",
  props: {
    categoryItem: null,
    color: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1, [
        createBaseVNode("a", _hoisted_2, [
          createBaseVNode("span", null, toDisplayString(__props.categoryItem.name), 1),
          createBaseVNode("span", {
            class: "ml-[4px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
            style: normalizeStyle({ "background-color": __props.color })
          }, toDisplayString(__props.categoryItem.path.length), 5)
        ])
      ]);
    };
  }
});
var Item = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0c104478"], ["__file", "Item.vue"]]);
export { Item as default };
