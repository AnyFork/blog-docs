import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import(/* webpackChunkName: "layout-404" */"C:/Users/Administrator/Desktop/blog-docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import(/* webpackChunkName: "layout-Layout" */"C:/Users/Administrator/Desktop/blog-docs/docs/.vuepress/theme/layouts/Layout.vue")),
}
