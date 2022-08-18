import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("Icon", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/blog-docs/docs/.vuepress/theme/components/global/Icon.vue"))),
      app.component("Item", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/blog-docs/docs/.vuepress/theme/components/global/Item.vue"))),
      app.component("Pagination", defineAsyncComponent(() => import("C:/Users/Administrator/Desktop/blog-docs/docs/.vuepress/theme/components/global/Pagination.vue")))
  },
}
