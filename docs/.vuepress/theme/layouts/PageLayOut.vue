<template>
  <Common :sidebarItems="sidebarItems" :showModule="recoShowModule">
    <Page :sidebar-items="sidebarItems" />
    <!-- 这里使用 v-show，否则影响 SSR -->
    <!-- <Content class="theme-reco-content" /> -->
    <Footer v-if="$frontmatter.footer" class="footer" />
  </Common>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Page from '@theme/components/Page'
import Footer from '@theme/components/Footer'
import Common from '@theme/components/Common'
import { resolveSidebarItems } from '@theme/helpers/utils'
import moduleTransitonMixin from '@theme/mixins/moduleTransiton'
import { useInstance } from '@theme/helpers/composable'

export default defineComponent({
  mixins: [moduleTransitonMixin],
  components: { Page, Common, Footer },
  setup(props, ctx) {
    const instance = useInstance()
    const sidebarItems = computed(() => {
      const { $page, $site, $localePath } = instance
      if ($page) {
        return resolveSidebarItems($page, $page.regularPath, $site, $localePath)
      } else {
        return []
      }
    })
    return { sidebarItems }
  }
})
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
