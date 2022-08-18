import { Page } from "vuepress"
import { usePostData } from './usePostData'
export const useTags = () => {
    const tags: Array<Blog.tag> = []
    const { posts } = usePostData()
    /**分类数据统计和封装*/
    const caclTags = (data: string, item: Page) => {
        const tagItem = tags.find(o => o.name == data)
        tagItem ? tagItem.path.push(item) : tags.push({ name: data, path: [item] })
    }
    /**获取所有分类*/
    posts.forEach(item => {
        const tags = item.frontmatter.tags
        if (typeof tags == "string") {
            caclTags(tags, item)
        }
        if (Array.isArray(tags)) {
            tags.forEach(obj => caclTags(obj, item))
        }
    })
    return { tags }
}