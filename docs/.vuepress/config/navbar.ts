import { NavbarGroup, NavbarItem } from "vuepress";

interface NavbarItems extends NavbarItem {
    icon?:any
}
export const navbar: (NavbarItems | NavbarGroup | string)[] = [
    {
        text: '首页',
        link: '/',
        icon: 'HomeOutlined'
    },
    {
        text: '分类',
        link: '/category',
        icon: 'AppstoreOutlined'
    },
    {
        text: '标签',
        link: '/tags',
        icon: 'TagsOutlined'
    },
    // 控制元素何时被激活,最大深度2
    {
        text: 'Java文档',
        children: [
            {
                text: 'Java设计模式',
                link: '/design-pattern/',
                //该元素将一直处于激活状态
                activeMatch: '/design-pattern/',
            },
            {
                text: 'Active on /foo/',
                link: '/not-foo/',
                // 该元素在当前路由路径是 /foo/ 开头时激活
                // 支持正则表达式
                activeMatch: '^/foo/',
            },
        ],
    },
]