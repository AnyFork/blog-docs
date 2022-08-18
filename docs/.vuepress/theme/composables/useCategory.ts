import { Page } from "vuepress"
import { usePostData } from './usePostData'
export const useCategory = () => {
    const category: Array<Blog.category> = []
    const { posts } = usePostData()
    /**分类数据统计和封装*/
    const caclCategory = (data: string, item: Page) => {
        const categoryItem = category.find(o => o.name == data)
        categoryItem ? categoryItem.path.push(item) : category.push({ name: data, path: [item] })
    }
    /**获取所有分类*/
    posts.forEach(item => {
        const categories = item.frontmatter.categories
        if (typeof categories == "string") {
            caclCategory(categories, item)
        }
        if (Array.isArray(categories)) {
            categories.forEach(obj => caclCategory(obj, item))
        }
    })
    return { category }
}