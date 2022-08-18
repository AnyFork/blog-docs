import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
const { path } = require('@vuepress/utils')

export const plugins = [
    registerComponentsPlugin({
        // components: {
        //     Icon: path.resolve(__dirname, '../theme/components/common/Icon.vue'),
        //     Item: path.resolve(__dirname, '../theme/components/common/Item.vue'),
        // },
    })
]