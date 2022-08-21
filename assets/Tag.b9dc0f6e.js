import { _ as _export_sfc, e as defineComponent, v as useRoute, s as useRouter, B as reactive, k as computed, U as watch, r as resolveComponent, o as openBlock, i as createBlock, w as withCtx, a as createBaseVNode, g as createVNode, c as createElementBlock, z as renderList, t as toDisplayString, A as normalizeStyle, h as unref, F as Fragment } from "./app.ed27189e.js";
import { u, P as ParentLayout, a as useRandomColor, b as BlogItem } from "./Layout.350c3af2.js";
const _hoisted_1 = { class: "page" };
const _hoisted_2 = { class: "pt-[20px] w-[var(--content-width)] my-0 mx-auto" };
const _hoisted_3 = { class: "w-full flex my-[10px]" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Tag",
  setup(__props) {
    var _a;
    const route = useRoute();
    const router = useRouter();
    const tagMap = u("tag");
    const pages = reactive({
      pageTotal: ((_a = tagMap.value.currentItems) == null ? void 0 : _a.length) || 0,
      pageNumber: 1,
      pageSize: 10
    });
    const blogData = computed(() => {
      var _a2;
      return (_a2 = tagMap.value.currentItems) == null ? void 0 : _a2.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize);
    });
    const getBack = (value) => {
      const { page, pageSize } = value;
      pages.pageNumber = page;
      pages.pageSize = pageSize;
    };
    watch(
      route,
      (newVal) => {
        if (newVal.path == "/tag/") {
          const key = Object.keys(tagMap.value.map)[0];
          router.push(tagMap.value.map[key]);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      const _component_RouterLink = resolveComponent("RouterLink");
      const _component_Pagination = resolveComponent("Pagination");
      return openBlock(), createBlock(ParentLayout, null, {
        page: withCtx(() => [
          createBaseVNode("main", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_Icon, {
                icon: "AppstoreTwotone",
                iconSize: 25,
                text: "\u6807\u7B7E\u5217\u8868",
                textSize: 20,
                class: "dark:hover:text-[#fff]"
              }),
              createBaseVNode("div", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tagMap).map, ({ items, path }, name) => {
                  return openBlock(), createBlock(_component_RouterLink, {
                    key: name,
                    to: path,
                    class: "shadow-item flex items-center text-[#666] px-[14px] font-normal h-[50px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", null, toDisplayString(name), 1),
                      createBaseVNode("span", {
                        class: "ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
                        style: normalizeStyle({ "background-color": unref(useRandomColor)() })
                      }, toDisplayString(items.length), 5)
                    ]),
                    _: 2
                  }, 1032, ["to"]);
                }), 128))
              ]),
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
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "Tag.vue"]]);
export { Tag as default };
