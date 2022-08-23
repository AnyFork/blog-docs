<template>
  <ParentLayout>
    <template #page-top>
      <div class="title w-[var(--content-width)] my-0 mx-auto">
        <div class="flex items-center justify-between">
          <h1>{{ page.title }}</h1>
          <Icon icon="RollbackOutlined" text="返回" @click="$router.go(-1)" class="cursor-pointer"></Icon>
        </div>
        <BlogItemInfo :page="page"></BlogItemInfo>
      </div>
    </template>
    <template #page-bottom>
      <CommentService />
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import BlogItemInfo from '../components/Blog/BlogItemInfo.vue'
import { usePageData } from '@vuepress/client'
const page = usePageData()
</script>
