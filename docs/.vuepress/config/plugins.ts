import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
const { path } = require('@vuepress/utils')

export const plugins = [
    registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, '../theme/components/global'),
    })
]