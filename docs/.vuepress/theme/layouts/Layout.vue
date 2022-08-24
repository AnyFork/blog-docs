<template>
  <ParentLayout>
    <template #page-top>
      <div class="title w-[var(--content-width)] my-0 mx-auto shadow-item py-0 px-6 rounded">
        <div class="flex items-center justify-between">
          <h1>{{ page.title }}</h1>
          <Icon icon="RollbackOutlined" text="返回" @click="$router.go(-1)" class="cursor-pointer"></Icon>
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
const page = usePageData()
const isDark = useDarkMode()
</script>
