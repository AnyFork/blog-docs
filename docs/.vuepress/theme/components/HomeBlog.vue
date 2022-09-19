<template>
  <div class="mx-[5px] mt-[10px] flex sm:w-[1120px] sm:mx-auto">
    <div class="w-full sm:flex-1">
      <BlogItem class="border" v-for="(item, index) in blogData" :key="index" :page="item.info" :position="index % 2 == 0 ? 'left' : 'right'" :class="index % 3 == 0 ? 'draw' : index % 3 == 1 ? 'draw meet' : 'center'"></BlogItem>
      <Pagination :pageTotal="pages.pageTotal" :pageSize="pages.pageSize" @click="getBack"> </Pagination>
    </div>
    <div class="sm:w-[300px] ml-[15px]" v-if="!isMobile">
      <BlogSider></BlogSider>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogItem from '../components/Blog/BlogItem.vue'
import BlogSider from '../components/Blog/BlogSider.vue'
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import { computed, reactive } from 'vue'
import { useCount } from '../composables'
import { isMobile } from '../utils'
const articles = useBlogType('article')
const pages = reactive({
  pageTotal: articles.value.items.length,
  pageNumber: 1,
  pageSize: 10
})
const blogData = computed(() => articles.value.items.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize))
const getBack = (value: { page: number; pageSize: number }) => {
  const { page, pageSize } = value
  pages.pageNumber = page
  pages.pageSize = pageSize
}
//触发首页浏览量统计
useCount(false)
</script>
