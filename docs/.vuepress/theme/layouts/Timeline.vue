<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="pt-[20px] w-[var(--content-width)] my-0 mx-auto">
          <h1 class="timeline-title">时间轴</h1>
          <BlogItem v-for="(item, index) in blogData" :page="item.info" :position="index % 2 == 0 ? 'left' : 'right'" :key="index" />
          <Pagination :pageTotal="pages.pageTotal" :pageNumber="pages.pageNumber" :pageSize="pages.pageSize" @click="getBack"> </Pagination>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import BlogItem from '../components/Blog/BlogItem.vue'
import { computed, reactive } from 'vue'
const timelines = useBlogType('timeline')
console.log(timelines)
const pages = reactive({
  pageTotal: timelines.value.items?.length || 0,
  pageNumber: 1,
  pageSize: 10
})
const blogData = computed(() => timelines.value.items?.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize))
const getBack = (value: { page: number; pageSize: number }) => {
  const { page, pageSize } = value
  pages.pageNumber = page
  pages.pageSize = pageSize
}
</script>
<style lang="scss">
.timeline-title {
  padding: 0;
  text-align: center;
}
</style>
