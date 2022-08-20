import { i as isLinkHttp, j as removeLeadingSlash, k as removeEndingSlash, l as resolveRepoType, m as usePageFrontmatter, n as onMounted, p as nextTick, q as onUnmounted, s as withBase, v as __vitePreload, T as Typed, _ as _export_sfc, d as defineComponent, x as usePostData, y as useCategory, z as useTags, r as resolveComponent, o as openBlock, c as createElementBlock, e as createBaseVNode, h as unref, A as createCommentVNode, t as toDisplayString, f as createVNode, F as Fragment, B as renderList, C as normalizeStyle, D as useRandomColor, E as createBlock, G as useThemeData, H as reactive, I as computed, J as normalizeClass, K as BlogItem, b as useThemeLocaleData, L as AutoLink, w as withCtx, g as createTextVNode, M as usePageData, N as useSidebarItems, O as useRoute, P as isString, Q as useNavLink, R as isPlainObject, S as renderSlot, U as toRefs, V as useRouter, W as useToggle, X as onBeforeUnmount, Y as withKeys, Z as withDirectives, $ as vShow, a0 as DropdownTransition, a1 as watch, a2 as NavbarItems, a3 as ref, a4 as Navbar, a5 as Transition, a6 as useScrollPromise, a7 as BlogItemInfo } from "./app.42e0c4aa.js";
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const modules = { "../../public/images/index/bg1.jpg": () => true ? __vitePreload(() => import("./bg1.209fc7c3.js"), []) : null, "../../public/images/index/bg2.jpg": () => true ? __vitePreload(() => import("./bg2.54e00d96.js"), []) : null, "../../public/images/index/bg3.jpg": () => true ? __vitePreload(() => import("./bg3.8e18e102.js"), []) : null, "../../public/images/index/bg4.jpg": () => true ? __vitePreload(() => import("./bg4.f47177d1.js"), []) : null, "../../public/images/index/bg5.jpg": () => true ? __vitePreload(() => import("./bg5.3c52e119.js"), []) : null, "../../public/images/index/bg6.jpg": () => true ? __vitePreload(() => import("./bg6.0888bac7.js"), []) : null };
const useBanner = () => {
  const frontmatter = usePageFrontmatter();
  const {
    bgImage,
    bgImageSec = 4e3,
    isBgImagetrigger = true,
    needDefaultImages = true,
    heroText,
    tagline,
    bgImageStyle = { height: "550px", color: "#fff" },
    showArrow = true,
    bubbles = true
  } = frontmatter.value;
  const bannerOptions = {
    bgImageSec,
    isBgImagetrigger,
    showArrow,
    tagline,
    heroText,
    bgImageStyle,
    bubbles
  };
  const getPublicImages = () => {
    const imageArray = [];
    Object.keys(modules).forEach((path) => {
      const fileName = path.replace(/(.*\/)*([\s\S]*?)/gi, "$2");
      const filePath = withBase("/images/index/" + fileName);
      imageArray.push(filePath);
    });
    return imageArray;
  };
  const getRandomImage = () => {
    const imageArray = needDefaultImages ? mixImage(bgImage) : bgImage;
    return isBgImagetrigger ? imageArray : imageArray[Math.floor(Math.random() * imageArray.length)];
  };
  const mixImage = (mixImageArray) => {
    const imageArray = getPublicImages();
    return mixImageArray ? Array.from(new Set(imageArray.concat(mixImageArray))) : imageArray;
  };
  onMounted(() => {
    nextTick(() => {
      new flux.slider("#banner", {
        autoplay: bannerOptions.isBgImagetrigger,
        pagination: false,
        width: "100%",
        height: Number(bgImageStyle.height.slice(0, -2)),
        delay: bannerOptions.bgImageSec
      });
    });
  });
  onUnmounted(() => {
  });
  return { getRandomImage, bannerOptions };
};
function circleMagic(options) {
  let width;
  let height;
  let canvas;
  let ctx;
  let animateHeader = true;
  const circles = [];
  const settings = options || {
    color: "rgba(255,255,255,.5)",
    radius: 10,
    density: 0.3,
    clearOffset: 0.2
  };
  let container = document.getElementById("bubbles");
  if (!container) {
    throw new Error("bubbles dom is not exist !!");
  }
  const initContainer = () => {
    width = container.offsetWidth;
    height = container.offsetHeight - 120;
    initCanvas();
    canvas = document.getElementById("homeTopCanvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.bottom = "0";
    ctx = canvas.getContext("2d");
    for (let x = 0; x < width * settings.density; x++) {
      const c = new Circle();
      circles.push(c);
    }
    animate();
  };
  initContainer();
  addListeners();
  function initCanvas() {
    const canvasElement = document.createElement("canvas");
    canvasElement.id = "homeTopCanvas";
    canvasElement.style.pointerEvents = "none";
    container.appendChild(canvasElement);
    canvasElement.parentElement.style.overflow = "hidden";
  }
  function addListeners() {
    window.addEventListener("scroll", scrollCheck, false);
    window.addEventListener("resize", resize, false);
  }
  function scrollCheck() {
    if (document.body.scrollTop > height) {
      animateHeader = false;
    } else {
      animateHeader = true;
    }
  }
  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    container.height = height + "px";
    canvas.width = width;
    canvas.height = height;
  }
  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (const i in circles) {
        circles[i].draw();
      }
    }
    requestAnimationFrame(animate);
  }
  function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const alpha = Math.random().toPrecision(2);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  }
  function Circle() {
    const that = this;
    (function() {
      that.pos = {};
      init();
    })();
    function init() {
      that.pos.x = Math.random() * width;
      that.pos.y = height + Math.random() * 100;
      that.alpha = 0.1 + Math.random() * settings.clearOffset;
      that.scale = 0.1 + Math.random() * 0.2;
      that.speed = Math.random() * 0.6;
      if (settings.color === "random") {
        that.color = randomColor();
      } else {
        that.color = settings.color;
      }
    }
    this.draw = function() {
      if (that.alpha <= 0) {
        init();
      }
      that.pos.y -= that.speed;
      that.alpha -= 5e-4;
      ctx.beginPath();
      ctx.arc(
        that.pos.x,
        that.pos.y,
        that.scale * settings.radius,
        0,
        2 * Math.PI,
        false
      );
      ctx.fillStyle = that.color;
      ctx.fill();
      ctx.closePath();
    };
  }
}
const useCircleMagic = () => {
  onMounted(() => {
    circleMagic({
      radius: 15,
      density: 0.3,
      color: "random",
      clearOffset: 0.2
    });
  });
};
const useTyped = (domRemark) => {
  const frontmatter = usePageFrontmatter();
  const dom = domRemark ? domRemark : ".typed";
  const typedFction = () => {
    new Typed(dom, {
      strings: frontmatter.value.heroText,
      typeSpeed: 300,
      startDelay: 300,
      backSpeed: 500,
      loop: true,
      smartBackspace: true
    });
  };
  onMounted(() => {
    if (frontmatter.value.heroText && frontmatter.value.heroText instanceof Array) {
      nextTick(() => {
        setTimeout(() => {
          const el = document.querySelector(dom);
          if (el) {
            typedFction();
          }
        }, 500);
      });
    }
  });
  onUnmounted(() => {
  });
};
const _hoisted_1$a = { class: "w-full pb-[100px] rounded px-[15px] dark:bg-[#181818] bg-[#fff] shadow-box cursor-pointer border-box" };
const _hoisted_2$7 = { class: "w-full flex flex-wrap items-center justify-center" };
const _hoisted_3$4 = ["src"];
const _hoisted_4$3 = {
  key: 1,
  class: "block w-full text-center m-0 font-[500]"
};
const _hoisted_5$2 = { class: "w-[80%] flex flex-wrap items-center justify-center my-[20px] mx-auto" };
const _hoisted_6$2 = { class: "text-center flex-[0_0_33%] border-r-[#333] border-r border-solid border-y-0 border-l-0" };
const _hoisted_7$2 = { class: "m-0" };
const _hoisted_8$1 = /* @__PURE__ */ createBaseVNode("h6", { class: "m-0 font-normal mt-[10px]" }, "\u6587\u7AE0", -1);
const _hoisted_9$1 = { class: "text-center flex-[0_0_33%] border-r-[#333] border-r border-solid border-y-0 border-l-0" };
const _hoisted_10$1 = { class: "m-0" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h6", { class: "m-0 font-normal mt-[10px]" }, "\u5206\u7C7B", -1);
const _hoisted_12 = { class: "text-center flex-[0_0_33%]" };
const _hoisted_13 = { class: "m-0" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode("h6", { class: "m-0 font-normal mt-[10px]" }, "\u6807\u7B7E", -1);
const _hoisted_15 = {
  key: 0,
  class: "leading-[30px] border-solid border-l-[10px] border-l-[#67cc86] border-y-0 border-r-0 bg-[#ebe9e9] pl-[10px] my-[10px] dark:text-[#000]"
};
const _hoisted_16 = { key: 1 };
const _hoisted_17 = { style: { "margin-top": "5px" } };
const _hoisted_18 = {
  key: 2,
  style: { "margin-top": "5px" }
};
const _hoisted_19 = { class: "pt-2" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_21 = { class: "w-full flex my-[10px] flex-wrap" };
const _hoisted_22 = { class: "w-full" };
const _hoisted_23 = { class: "flex items-center justify-between text-[#666] py-[8px] px-[14px] dark:hover:text-[#fff] text-[13px]" };
const _hoisted_24 = { class: "w-full flex my-[10px] flex-wrap" };
const _hoisted_25 = { class: "w-full" };
const _hoisted_26 = { class: "flex items-center justify-between text-[#666] py-[8px] px-[14px] dark:hover:text-[#fff] text-[13px]" };
const _hoisted_27 = { class: "w-full flex my-[10px] flex-wrap" };
const _hoisted_28 = { class: "w-full" };
const _hoisted_29 = ["href"];
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "BlogSider",
  setup(__props) {
    const { posts } = usePostData();
    const { category } = useCategory();
    const { tags } = useTags();
    const themeData = useThemeData();
    const frontmatter = usePageFrontmatter();
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$7, [
          unref(themeData).authorAvatar ? (openBlock(), createElementBlock("img", {
            key: 0,
            class: "rounded-[50%] h-[6rem] w-[6rem] mt-[2rem] mb-[1rem] inline-block",
            src: unref(withBase)(unref(themeData).authorAvatar),
            alt: "author-avatar"
          }, null, 8, _hoisted_3$4)) : createCommentVNode("", true),
          unref(themeData).author ? (openBlock(), createElementBlock("h3", _hoisted_4$3, toDisplayString(unref(themeData).author), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5$2, [
          createBaseVNode("div", _hoisted_6$2, [
            createBaseVNode("h3", _hoisted_7$2, toDisplayString(unref(posts).length), 1),
            _hoisted_8$1
          ]),
          createBaseVNode("div", _hoisted_9$1, [
            createBaseVNode("h3", _hoisted_10$1, toDisplayString(unref(category).length), 1),
            _hoisted_11
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("h3", _hoisted_13, toDisplayString(unref(tags).length), 1),
            _hoisted_14
          ])
        ]),
        unref(frontmatter).summary ? (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(unref(frontmatter).summary), 1)) : createCommentVNode("", true),
        unref(frontmatter).hobby ? (openBlock(), createElementBlock("div", _hoisted_16, [
          createVNode(_component_Icon, {
            icon: "DribbbleOutlined",
            text: "\u5174\u8DA3\u7231\u597D",
            textSize: 15
          }),
          createBaseVNode("div", _hoisted_17, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(frontmatter).hobby, (item, index) => {
              return openBlock(), createElementBlock("span", {
                key: index,
                style: normalizeStyle({ backgroundColor: unref(useRandomColor)() }),
                class: "p-[4px_8px] m-[4px_4px_10px] rounded-[0.25rem] inline-block text-[13px] text-[#fff]"
              }, toDisplayString(item), 5);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        unref(themeData).socialLinks ? (openBlock(), createElementBlock("div", _hoisted_18, [
          createVNode(_component_Icon, {
            icon: "FolderOpenOutlined",
            text: "\u535A\u5BA2\u5730\u5740",
            textSize: 15
          }),
          createBaseVNode("div", _hoisted_19, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(themeData).socialLinks, (item, index) => {
              return openBlock(), createBlock(_component_Icon, {
                key: index,
                icon: item.icon,
                iconSize: 25,
                iconColor: unref(useRandomColor)(),
                link: item.link,
                target: "_target",
                class: "mx-2 hover:scale-110"
              }, null, 8, ["icon", "iconColor", "link"]);
            }), 128))
          ])
        ])) : createCommentVNode("", true),
        _hoisted_20,
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createVNode(_component_Icon, {
              icon: "AppstoreTwotone",
              text: "\u5206\u7C7B\u5217\u8868",
              textSize: 15,
              class: "dark:hover:text-[#fff]"
            })
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(category), (item, index) => {
            return openBlock(), createElementBlock("span", {
              class: "shadow-item w-full mt-[10px] bg-[#fff] hover:bg-[#3eaf7c] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] hover:scale-110",
              key: index
            }, [
              createBaseVNode("a", _hoisted_23, [
                createBaseVNode("span", null, toDisplayString(item.name), 1),
                createBaseVNode("span", {
                  class: "ml-[4px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
                  style: normalizeStyle({ "background-color": unref(useRandomColor)() })
                }, toDisplayString(item.path.length), 5)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_24, [
          createBaseVNode("div", _hoisted_25, [
            createVNode(_component_Icon, {
              icon: "TagsOutlined",
              text: "\u6807\u7B7E\u5217\u8868",
              textSize: 15,
              class: "dark:hover:text-[#fff]"
            })
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tags), (item, index) => {
            return openBlock(), createElementBlock("span", {
              class: "shadow-item mt-[10px] bg-[#fff] hover:bg-[#3eaf7c] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] hover:scale-110",
              key: index
            }, [
              createBaseVNode("a", _hoisted_26, [
                createBaseVNode("span", null, toDisplayString(item.name), 1),
                createBaseVNode("span", {
                  class: "ml-[4px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]",
                  style: normalizeStyle({ "background-color": unref(useRandomColor)() })
                }, toDisplayString(item.path.length), 5)
              ])
            ]);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_27, [
          createBaseVNode("div", _hoisted_28, [
            createVNode(_component_Icon, {
              icon: "LinkOutlined",
              text: "\u53CB\u60C5\u94FE\u63A5",
              textSize: 15,
              class: "dark:hover:text-[#fff]"
            })
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(themeData).friendLink, (item, index) => {
            return openBlock(), createElementBlock("span", {
              class: "shadow-item mt-[10px] bg-[#fff] dark:bg-[#181818] hover:scale-110",
              key: index
            }, [
              createBaseVNode("a", {
                href: item.link,
                target: "_blank",
                class: "flex items-center justify-between text-[#3eaf7c] py-[8px] px-[14px] text-[13px]"
              }, [
                createBaseVNode("span", null, toDisplayString(item.title), 1)
              ], 8, _hoisted_29)
            ]);
          }), 128))
        ])
      ]);
    };
  }
});
var BlogSider = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "BlogSider.vue"]]);
const _hoisted_1$9 = { class: "w-[1120px] my-0 mx-auto mt-5 flex" };
const _hoisted_2$6 = { class: "flex-1" };
const _hoisted_3$3 = { class: "w-[300px] ml-[15px]" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "HomeBlog",
  setup(__props) {
    const { posts } = usePostData();
    const pages = reactive({
      pageTotal: posts.length,
      pageNumber: 1,
      pageSize: 10
    });
    const blogData = computed(() => posts.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize));
    const getBack = (value) => {
      const { page, pageSize } = value;
      pages.pageNumber = page;
      pages.pageSize = pageSize;
    };
    return (_ctx, _cache) => {
      const _component_Pagination = resolveComponent("Pagination");
      return openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$6, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(blogData), (item, index) => {
            return openBlock(), createBlock(BlogItem, {
              class: normalizeClass(["border", index % 3 == 0 ? "draw" : index % 3 == 1 ? "draw meet" : "center"]),
              key: index,
              page: item.data,
              position: index % 2 == 0 ? "left" : "right"
            }, null, 8, ["page", "position", "class"]);
          }), 128)),
          createVNode(_component_Pagination, {
            pageTotal: pages.pageTotal,
            pageNumber: pages.pageNumber,
            pageSize: pages.pageSize,
            onClick: getBack
          }, null, 8, ["pageTotal", "pageNumber", "pageSize"])
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          createVNode(BlogSider)
        ])
      ]);
    };
  }
});
var HomeBlog = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "HomeBlog.vue"]]);
const _sfc_main$a = {};
const _hoisted_1$8 = { class: "p-[15px] mt-[25px] text-center border-t-[1px] border-t-[color:#eee] border-solid border-x-0 border-b-0" };
function _sfc_render(_ctx, _cache) {
  const _component_Icon = resolveComponent("Icon");
  return openBlock(), createElementBlock("div", _hoisted_1$8, [
    createVNode(_component_Icon, {
      icon: "SketchOutlined",
      iconSize: 20,
      text: "vuepress-theme-AnyFork",
      textSize: 15,
      class: "mr-[30px]"
    }),
    createVNode(_component_Icon, {
      icon: "SafetyCertificateOutlined",
      text: "\u9655ICP\u590717067667\u53F7-1",
      textSize: 15,
      class: "mr-[30px]"
    }),
    createVNode(_component_Icon, {
      icon: "CopyrightCircleOutlined",
      text: "\u5C0F\u7D2B\u5FF5\u6C81 2022",
      textSize: 15,
      class: "mr-[30px]"
    })
  ]);
}
var HomeFooter = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render], ["__file", "HomeFooter.vue"]]);
const _hoisted_1$7 = {
  id: "banner",
  class: "w-full absolute z-0 overflow-hidden"
};
const _hoisted_2$5 = ["src"];
const _hoisted_3$2 = { class: "index z-100 absolute text-[#fff] text-center" };
const _hoisted_4$2 = {
  key: 0,
  class: "typed inline-block text-[2.5rem] font-[500]"
};
const _hoisted_5$1 = {
  key: 1,
  class: "typed inline-block text-[2.5rem] font-[500]"
};
const _hoisted_6$1 = {
  key: 0,
  class: "my-5 text-[1.6rem]"
};
const _hoisted_7$1 = {
  key: 0,
  id: "bubbles",
  class: "absolute w-full h-full z-[10]"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "HomeBanner",
  setup(__props) {
    const homeBanner = useBanner();
    useTyped();
    useCircleMagic();
    const mixImage = homeBanner.getRandomImage();
    const scrollFn = () => {
      const windowH = document.getElementsByClassName("hero")[0].clientHeight;
      document.documentElement.scrollTop = windowH;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "hero w-full relative h-[500px] flex justify-center items-center",
        style: normalizeStyle(unref(homeBanner).bannerOptions.bgImageStyle)
      }, [
        createBaseVNode("div", _hoisted_1$7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(mixImage), (item) => {
            return openBlock(), createElementBlock("img", {
              src: item,
              key: item
            }, null, 8, _hoisted_2$5);
          }), 128))
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", null, [
            `${unref(homeBanner).bannerOptions.heroText instanceof Array}` ? (openBlock(), createElementBlock("h1", _hoisted_4$2)) : (openBlock(), createElementBlock("h1", _hoisted_5$1, " vuePress-theme-Anyfork "))
          ]),
          unref(homeBanner).bannerOptions.tagline ? (openBlock(), createElementBlock("p", _hoisted_6$1, toDisplayString(unref(homeBanner).bannerOptions.tagline || "Welcome to your vuePress-theme-AnyFork site"), 1)) : createCommentVNode("", true),
          unref(homeBanner).bannerOptions.showArrow ? (openBlock(), createElementBlock("a", {
            key: 1,
            class: "anchor-down",
            onClick: scrollFn
          })) : createCommentVNode("", true)
        ]),
        unref(homeBanner).bannerOptions.bubbles ? (openBlock(), createElementBlock("div", _hoisted_7$1)) : createCommentVNode("", true)
      ], 4);
    };
  }
});
var HomeBanner = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "HomeBanner.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  setup(__props) {
    usePostData();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        createVNode(HomeBanner),
        createVNode(HomeBlog),
        createVNode(HomeFooter)
      ]);
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "Home.vue"]]);
const _hoisted_1$6 = { class: "page-meta" };
const _hoisted_2$4 = {
  key: 0,
  class: "meta-item edit-link"
};
const _hoisted_3$1 = {
  key: 1,
  class: "meta-item last-updated"
};
const _hoisted_4$1 = { class: "meta-item-label" };
const _hoisted_5 = { class: "meta-item-info" };
const _hoisted_6 = {
  key: 2,
  class: "meta-item contributors"
};
const _hoisted_7 = { class: "meta-item-label" };
const _hoisted_8 = { class: "meta-item-info" };
const _hoisted_9 = ["title"];
const _hoisted_10 = /* @__PURE__ */ createTextVNode(", ");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PageMeta",
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _cache) => {
      const _component_ClientOnly = resolveComponent("ClientOnly");
      return openBlock(), createElementBlock("footer", _hoisted_1$6, [
        unref(editNavLink) ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
          createVNode(AutoLink, {
            class: "meta-item-label",
            item: unref(editNavLink)
          }, null, 8, ["item"])
        ])) : createCommentVNode("", true),
        unref(lastUpdated) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          createBaseVNode("span", _hoisted_4$1, toDisplayString(unref(themeLocale).lastUpdatedText) + ": ", 1),
          createVNode(_component_ClientOnly, null, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_5, toDisplayString(unref(lastUpdated)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true),
        unref(contributors) && unref(contributors).length ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createBaseVNode("span", _hoisted_7, toDisplayString(unref(themeLocale).contributorsText) + ": ", 1),
          createBaseVNode("span", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contributors), (contributor, index) => {
              return openBlock(), createElementBlock(Fragment, { key: index }, [
                createBaseVNode("span", {
                  class: "contributor",
                  title: `email: ${contributor.email}`
                }, toDisplayString(contributor.name), 9, _hoisted_9),
                index !== unref(contributors).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_10
                ], 64)) : createCommentVNode("", true)
              ], 64);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var PageMeta = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "PageMeta.vue"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "page-nav"
};
const _hoisted_2$3 = { class: "inner" };
const _hoisted_3 = {
  key: 0,
  class: "prev"
};
const _hoisted_4 = {
  key: 1,
  class: "next"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PageNav",
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index !== -1) {
        const targetItem = sidebarItems2[index + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(
            item.children,
            currentPath,
            offset
          );
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = useRoute();
    const prevNavLink = computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _cache) => {
      return unref(prevNavLink) || unref(nextNavLink) ? (openBlock(), createElementBlock("nav", _hoisted_1$5, [
        createBaseVNode("p", _hoisted_2$3, [
          unref(prevNavLink) ? (openBlock(), createElementBlock("span", _hoisted_3, [
            createVNode(AutoLink, { item: unref(prevNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true),
          unref(nextNavLink) ? (openBlock(), createElementBlock("span", _hoisted_4, [
            createVNode(AutoLink, { item: unref(nextNavLink) }, null, 8, ["item"])
          ])) : createCommentVNode("", true)
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
var PageNav = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "PageNav.vue"]]);
const _hoisted_1$4 = { class: "page" };
const _hoisted_2$2 = { class: "theme-default-content" };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createElementBlock("main", _hoisted_1$4, [
        renderSlot(_ctx.$slots, "top"),
        createBaseVNode("div", _hoisted_2$2, [
          renderSlot(_ctx.$slots, "content-top"),
          createVNode(_component_Content),
          renderSlot(_ctx.$slots, "content-bottom")
        ]),
        createVNode(PageMeta),
        createVNode(PageNav),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Page = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "Page.vue"]]);
const _hoisted_1$3 = ["onKeydown"];
const _hoisted_2$1 = { class: "sidebar-item-children" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const [isOpen, toggleIsOpen] = useToggle(isActive.value);
    const onClick = (e) => {
      if (item.value.collapsible) {
        e.preventDefault();
        toggleIsOpen();
      }
    };
    const unregisterRouterHook = router.afterEach((to) => {
      nextTick(() => {
        isOpen.value = item.value.collapsible ? isActive.value : true;
      });
    });
    onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_SidebarItem = resolveComponent("SidebarItem", true);
      return openBlock(), createElementBlock("li", null, [
        unref(item).link ? (openBlock(), createBlock(AutoLink, {
          key: 0,
          class: normalizeClass(unref(itemClass)),
          item: unref(item)
        }, null, 8, ["class", "item"])) : (openBlock(), createElementBlock("p", {
          key: 1,
          tabindex: "0",
          class: normalizeClass(unref(itemClass)),
          onClick,
          onKeydown: withKeys(onClick, ["enter"])
        }, [
          createTextVNode(toDisplayString(unref(item).text) + " ", 1),
          unref(item).collapsible ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["arrow", unref(isOpen) ? "down" : "right"])
          }, null, 2)) : createCommentVNode("", true)
        ], 42, _hoisted_1$3)),
        ((_a = unref(item).children) == null ? void 0 : _a.length) ? (openBlock(), createBlock(DropdownTransition, { key: 2 }, {
          default: withCtx(() => [
            withDirectives(createBaseVNode("ul", _hoisted_2$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(item).children, (child) => {
                return openBlock(), createBlock(_component_SidebarItem, {
                  key: `${unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: unref(depth) + 1
                }, null, 8, ["item", "depth"]);
              }), 128))
            ], 512), [
              [vShow, unref(isOpen)]
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var SidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "SidebarItem.vue"]]);
const _hoisted_1$2 = {
  key: 0,
  class: "sidebar-items"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SidebarItems",
  setup(__props) {
    const route = useRoute();
    const sidebarItems = useSidebarItems();
    onMounted(() => {
      watch(
        () => route.hash,
        (hash) => {
          const sidebar = document.querySelector(".sidebar");
          if (!sidebar)
            return;
          const activeSidebarItem = document.querySelector(
            `.sidebar a.sidebar-item[href="${route.path}${hash}"]`
          );
          if (!activeSidebarItem)
            return;
          const { top: sidebarTop, height: sidebarHeight } = sidebar.getBoundingClientRect();
          const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
          if (activeSidebarItemTop < sidebarTop) {
            activeSidebarItem.scrollIntoView(true);
          } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
            activeSidebarItem.scrollIntoView(false);
          }
        }
      );
    });
    return (_ctx, _cache) => {
      return unref(sidebarItems).length ? (openBlock(), createElementBlock("ul", _hoisted_1$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sidebarItems), (item) => {
          return openBlock(), createBlock(SidebarItem, {
            key: `${item.text}${item.link}`,
            item
          }, null, 8, ["item"]);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
});
var SidebarItems = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "SidebarItems.vue"]]);
const _hoisted_1$1 = { class: "sidebar" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("aside", _hoisted_1$1, [
        createVNode(NavbarItems),
        renderSlot(_ctx.$slots, "top"),
        createVNode(SidebarItems),
        renderSlot(_ctx.$slots, "bottom")
      ]);
    };
  }
});
var Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "Sidebar.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = computed(
      () => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false
    );
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e) => {
      touchStart.x = e.changedTouches[0].clientX;
      touchStart.y = e.changedTouches[0].clientY;
    };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - touchStart.x;
      const dy = e.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80) {
          toggleSidebar(true);
        } else {
          toggleSidebar(false);
        }
      }
    };
    const containerClass = computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    onMounted(() => {
      const router = useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    onUnmounted(() => {
      unregisterRouterHook();
    });
    const scrollPromise = useScrollPromise();
    const onBeforeEnter = scrollPromise.resolve;
    const onBeforeLeave = scrollPromise.pending;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["theme-container", unref(containerClass)]),
        onTouchstart: onTouchStart,
        onTouchend: onTouchEnd
      }, [
        renderSlot(_ctx.$slots, "navbar", {}, () => [
          unref(shouldShowNavbar) ? (openBlock(), createBlock(Navbar, {
            key: 0,
            onToggleSidebar: toggleSidebar
          }, {
            before: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-before")
            ]),
            after: withCtx(() => [
              renderSlot(_ctx.$slots, "navbar-after")
            ]),
            _: 3
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", {
          class: "sidebar-mask",
          onClick: _cache[0] || (_cache[0] = ($event) => toggleSidebar(false))
        }),
        renderSlot(_ctx.$slots, "sidebar", {}, () => [
          createVNode(Sidebar, null, {
            top: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-top")
            ]),
            bottom: withCtx(() => [
              renderSlot(_ctx.$slots, "sidebar-bottom")
            ]),
            _: 3
          })
        ]),
        renderSlot(_ctx.$slots, "page", {}, () => [
          unref(frontmatter).home ? (openBlock(), createBlock(Home, { key: 0 })) : (openBlock(), createBlock(Transition, {
            key: 1,
            name: "fade-slide-y",
            mode: "out-in",
            onBeforeEnter: unref(onBeforeEnter),
            onBeforeLeave: unref(onBeforeLeave)
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Page, {
                key: unref(page).path
              }, {
                top: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-top")
                ]),
                "content-top": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-top")
                ]),
                "content-bottom": withCtx(() => [
                  renderSlot(_ctx.$slots, "page-content-bottom")
                ]),
                bottom: withCtx(() => [
                  renderSlot(_ctx.$slots, "page-bottom")
                ]),
                _: 3
              }))
            ]),
            _: 3
          }, 8, ["onBeforeEnter", "onBeforeLeave"]))
        ])
      ], 34);
    };
  }
});
var ParentLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "Layout.vue"]]);
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
