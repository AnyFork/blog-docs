import { defineClientConfig } from "@vuepress/client";
import Loading from './theme/components/global/Loading.vue'
import { useLoading } from './theme/composables'
export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const { showLoading, hiddenLoading } = useLoading()
    router.beforeEach((to, from, next) => {
      showLoading()
      next()
    })
    router.afterEach((to, from) => {
      hiddenLoading()
    })
  },
  setup() { },
  rootComponents: [Loading],
});
