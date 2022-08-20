/* eslint-disable no-proto */
import postMixin from '@theme/mixins/posts'
import localMixin from '@theme/mixins/locales'
import { interceptRouterError, fixRouterError404 } from '@theme/helpers/other'
import { install } from 'vue-demi'
import Reward from '@theme/components/Reward.vue'

export default ({ Vue, siteData, isServer, router }) => {
  install(Vue)
  Vue.mixin(postMixin)
  Vue.mixin(localMixin)
  // if (!isServer) {
  //   addScriptToHead('//kit.fontawesome.com/51b01de608.js')
  //   registerCodeThemeCss(siteData.themeConfig.codeTheme)
  // }
  //全局注册组件
  Vue.component(Reward.name, Reward)
  interceptRouterError(router)
  fixRouterError404(router)
}
