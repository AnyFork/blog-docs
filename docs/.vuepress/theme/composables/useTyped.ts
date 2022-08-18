import Typed from 'typed.js'
import { usePageFrontmatter, PageFrontmatterRef } from "@vuepress/client";
import { nextTick, onMounted, onUnmounted } from 'vue';
export const useTyped = (domRemark?: string) => {
  const frontmatter = usePageFrontmatter() as PageFrontmatterRef<Blog.Home>;
  const dom: string = domRemark ? domRemark : '.typed'
  let typedObject: any
  const typedFction = () => {
    typedObject = new Typed(dom, {
      //打印的字符串数组
      strings: frontmatter.value.heroText as Array<string>,
      //打印速度
      typeSpeed: 300,
      //开始之前的延迟300毫秒
      startDelay: 300,
      //退格速度
      backSpeed: 500,
      //是否循环
      loop: true,
      //Default value
      smartBackspace: true
    })
  }
  onMounted(() => {
    if (frontmatter.value.heroText && frontmatter.value.heroText instanceof Array) {
      //打印字符
      nextTick(() => {
        setTimeout(() => {
          const el = document.querySelector(dom)
          if (el) {
            typedFction()
          }
        }, 500)
      })
    }
  })
  onUnmounted(() => {
    if (typedObject) {
      typedObject = null
    }
  })
}