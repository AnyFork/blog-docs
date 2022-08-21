<template>
  <div class="w-[1120px] my-0 mx-auto mt-5 flex">
    <div class="flex-1">
      <BlogItem class="border" v-for="(item, index) in blogData" :key="index" :page="item.info" :position="index % 2 == 0 ? 'left' : 'right'" :class="index % 3 == 0 ? 'draw' : index % 3 == 1 ? 'draw meet' : 'center'"></BlogItem>
      <Pagination :pageTotal="pages.pageTotal" :pageNumber="pages.pageNumber" :pageSize="pages.pageSize" @click="getBack"> </Pagination>
    </div>
    <div class="w-[300px] ml-[15px]">
      <BlogSider></BlogSider>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogItem from '../components/Blog/BlogItem.vue'
import BlogSider from '../components/Blog/BlogSider.vue'
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import { computed, reactive } from 'vue'
const articles = useBlogType('article')
console.log(articles.value.items)
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
</script>
