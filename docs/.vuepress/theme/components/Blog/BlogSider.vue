<template>
  <div class="w-full pb-[100px] rounded px-[15px] dark:bg-[#181818] bg-[#fff] shadow-box cursor-pointer border-box sticky top-[70px]">
    <div class="w-full flex flex-wrap items-center justify-center">
      <img class="rounded-[50%] h-[6rem] w-[6rem] mt-[2rem] mb-[1rem] inline-block" v-if="themeData.authorAvatar" :src="withBase(themeData.authorAvatar)" alt="author-avatar" />
      <h3 class="block w-full text-center m-0 font-[500]" v-if="themeData.author">{{ themeData.author }}</h3>
    </div>
    <div class="w-[80%] flex flex-wrap items-center justify-center my-[20px] mx-auto">
      <div class="text-center flex-[0_0_33%] border-r-[#333] border-r border-solid border-y-0 border-l-0">
        <h3 class="m-0">{{ post.items.length }}</h3>
        <h6 class="m-0 font-normal mt-[10px]">文章</h6>
      </div>
      <div class="text-center flex-[0_0_33%] border-r-[#333] border-r border-solid border-y-0 border-l-0">
        <h3 class="m-0">{{ Object.keys(category.map).length }}</h3>
        <h6 class="m-0 font-normal mt-[10px]">分类</h6>
      </div>
      <div class="text-center flex-[0_0_33%]">
        <h3 class="m-0">{{ Object.keys(tag.map).length }}</h3>
        <h6 class="m-0 font-normal mt-[10px]">标签</h6>
      </div>
    </div>
    <!--个人摘要 -->
    <div v-if="frontmatter.summary" class="leading-[30px] border-solid border-l-[10px] border-l-[#67cc86] border-y-0 border-r-0 bg-[#ebe9e9] pl-[10px] my-[10px] dark:text-[#000]">{{ frontmatter.summary }}</div>
    <!--个人兴趣爱好 -->
    <div v-if="frontmatter.hobby">
      <Icon icon="DribbbleOutlined" text="兴趣爱好" :textSize="15"></Icon>
      <div style="margin-top: 5px">
        <span v-for="(item, index) in frontmatter.hobby" :key="index" :style="{ backgroundColor: useRandomColor() }" class="p-[4px_8px] m-[4px_4px_10px] rounded-[0.25rem] inline-block text-[13px] text-[#fff]">{{ item }}</span>
      </div>
    </div>
    <!--其他链接-->
    <div v-if="themeData.socialLinks" style="margin-top: 5px">
      <Icon icon="FolderOpenOutlined" text="博客地址" :textSize="15"></Icon>
      <div class="pt-2">
        <span v-for="(item, index) in themeData.socialLinks" :key="index">
          <client-only>
            <Icon :icon="item.icon" :link="item.link" target="_blank" :iconSize="25" :iconColor="useRandomColor()" class="mx-2 hover:scale-110"></Icon>
          </client-only>
        </span>
      </div>
    </div>
    <hr />
    <!--分类 -->
    <div class="w-full flex my-[10px] flex-wrap">
      <div class="w-full">
        <Icon icon="AppstoreTwotone" text="分类列表" :textSize="15" class="dark:hover:text-[#fff]" />
      </div>
      <RouterLink
        v-for="({ items, path }, name) in category.map"
        :key="name"
        :to="path"
        class="shadow-item w-full flex items-center justify-between text-[#666] px-[14px] my-[5px] font-normal h-[40px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]"
      >
        <span class="text-[13px]">{{ name }}</span>
        <span class="ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]" :style="{ 'background-color': useRandomColor() }"> {{ items.length }}</span>
      </RouterLink>
    </div>
    <!--标签-->
    <div class="w-full flex my-[10px] flex-wrap">
      <div class="w-full">
        <Icon icon="TagsOutlined" text="标签列表" :textSize="15" class="dark:hover:text-[#fff]" />
      </div>
      <RouterLink v-for="({ items, path }, name) in tag.map" :key="name" :to="path" class="shadow-item flex items-center text-[#666] px-[8px] my-[5px] font-normal h-[30px] bg-[#fff] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]">
        <span class="text-[11px]">{{ name }}</span>
        <span class="ml-[5px] w-[1rem] h-[1rem] leading-[1rem] text-center text-[9px] text-[#fff]" :style="{ 'background-color': useRandomColor() }"> {{ items.length }}</span>
      </RouterLink>
    </div>
    <!--友情链接-->
    <div class="w-full flex my-[10px] flex-wrap">
      <div class="w-full">
        <Icon icon="LinkOutlined" text="友情链接" :textSize="15" class="dark:hover:text-[#fff]" />
      </div>
      <span class="shadow-item mt-[10px] bg-[#fff] dark:bg-[#181818] hover:scale-110" v-for="(item, index) in themeData.friendLink" :key="index">
        <a :href="item.link" target="_blank" class="flex items-center justify-between text-[#3eaf7c] py-[8px] px-[14px] text-[13px]">
          <span>{{ item.title }}</span>
        </a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
import { usePageFrontmatter, withBase } from '@vuepress/client'
import { useRandomColor } from '../../utils/useColor'
import { useBlogCategory, useBlogType } from 'vuepress-plugin-blog2/lib/client'
const themeData: any = useThemeData()
const frontmatter = usePageFrontmatter()
const category = useBlogCategory('category')
const tag = useBlogCategory('tag')
const post = useBlogType('article')
</script>
