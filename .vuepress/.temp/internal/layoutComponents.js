import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("G:/前端项目/vuepress博客系统/blog-docs-2.x/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("G:/前端项目/vuepress博客系统/blog-docs-2.x/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
