<template>
  <ParentLayout>
    <template #page-top>
      <div class="title sm:w-[var(--content-width)] my-0 mx-auto shadow-item py-0 px-6 rounded">
        <div class="flex items-center justify-between">
          <h1 class="text-[1.3rem] sm:text-[2rem]">{{ page.title }}</h1>
          <Icon icon="RollbackOutlined" @click="$router.go(-1)" class="cursor-pointer">
            <span v-if="!isMobile">返回</span>
          </Icon>
        </div>
        <BlogItemInfo :page="page" class="pb-5 mt-0"></BlogItemInfo>
      </div>
    </template>
    <template #page-bottom>
      <CommentService :darkmode="isDark" />
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import BlogItemInfo from '../components/Blog/BlogItemInfo.vue'
import { usePageData } from '@vuepress/client'
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables'
import { isMobile } from '../utils'
const page = usePageData()
const isDark = useDarkMode()
</script>
