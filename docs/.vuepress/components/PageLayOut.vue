<template>
  <Common :sidebarItems="sidebarItems" :showModule="recoShowModule">
    <Page :sidebar-items="sidebarItems" />
    <!-- 这里使用 v-show，否则影响 SSR -->
        <!-- <Content class="theme-reco-content" /> -->
    <Footer v-if="$frontmatter.footer" class="footer" />
  </Common>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import Page from './Page'
import Footer from 'vuepress-theme-reco/components/Footer'
import Common from 'vuepress-theme-reco/components/Common'
import { resolveSidebarItems } from 'vuepress-theme-reco/helpers/utils'
import moduleTransitonMixin from 'vuepress-theme-reco/mixins/moduleTransiton'
import { useInstance } from 'vuepress-theme-reco/helpers/composable'

export default defineComponent({
  mixins: [moduleTransitonMixin],
  components: { Page, Common, Footer },
  setup(props, ctx) {
    const instance = useInstance()
    console.log(instance)
    const sidebarItems = computed(() => {
      const { $page, $site, $localePath } = instance
      if ($page) {
        return resolveSidebarItems($page, $page.regularPath, $site, $localePath)
      } else {
        return []
      }
    })
    console.log(sidebarItems)
    return { sidebarItems }
  }
})
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="vuepress-theme-reco/styles/theme.styl" lang="stylus"></style>
