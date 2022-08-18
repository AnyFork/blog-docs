import type { Theme } from '@vuepress/core'
import { defaultTheme } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { AnyForkThemeOptions } from './types/theme'

export const AnyForkTheme = (options: AnyForkThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-AnyFork',
    extends: defaultTheme(options),
    alias: {
      '@theme/Home.vue': path.resolve(__dirname, './components/Home.vue'),
      '@theme/NavbarItems.vue': path.resolve(__dirname, './components/NavbarItems.vue'),
      '@theme/HomeFooter.vue': path.resolve(__dirname, './components/HomeFooter.vue'),
      // '@theme/AutoLink.vue': path.resolve(__dirname, './components/AutoLink.vue')
    },
    layouts: {
      Layout: path.resolve(__dirname, './layouts/Layout.vue'),
    }
  }
}
