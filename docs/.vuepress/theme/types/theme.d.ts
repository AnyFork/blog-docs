import type { DefaultThemeOptions } from "vuepress";

declare interface AnyForkThemeOptions extends DefaultThemeOptions {
    author?: string;
    authorAvatar?: string
    socialLinks?: Array<Record<{ icon: string, link: string }>>
    friendLink?: Array<Record<{ title: string, link: string }>>
}