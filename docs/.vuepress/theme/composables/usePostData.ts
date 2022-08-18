import { Page } from "vuepress"
declare const POSTS: Page<Record<never, never>, Record<string, unknown>, Record<never, never>>[]
export const usePostData = () => {
    const posts = POSTS.filter(item => item.path != "/" && item.path != "/404.html")
    return { posts }
}