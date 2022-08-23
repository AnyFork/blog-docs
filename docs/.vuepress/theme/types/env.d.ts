/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<object, object, any>
    export default component
}

/**flux.js */
declare const flux: any

declare module 'vuejs-paginate-next'

declare namespace Blog {
    interface Home {
        /**背景图片，可以为数组,可以为远程背景图片，图片资源网：https://pic.netbian.com/4kmeinv/ */
        bgImage: Array<string>
        /**背景图片切换时间间隔：默认4秒，单位毫秒 */
        bgImageSec: number
        /**背景图片是否动态切换,默认不开启，每次刷新会更换图片 */
        isBgImagetrigger: boolean
        /**是否使用系统默认的背景图片，开启后会和自定义的背景图片一起使用*/
        needDefaultImages: boolean
        /**#背景图片样式 */
        bgImageStyle: any
        /**是否展示箭头 */
        showArrow: boolean
        /**个人摘要 */
        summary: string
        /**主标题文本，为数组时会使用打印机打印功能，非数组静态文本*/
        heroText: Array<string> | string
        /**副标题 */
        tagline: string,
        /**是否显示首页气泡 */
        bubbles: boolean
    }
}