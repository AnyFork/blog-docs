<template>
  <div class="w-[1120px] my-0 mx-auto mt-5 flex">
    <div class="flex-1">
      <BlogItem class="border" v-for="(item, index) in blogData" :key="index" :page="item" :position="index % 2 == 0 ? 'left' : 'right'" :class="index % 3 == 0 ? 'draw' : index % 3 == 1 ? 'draw meet' : 'center'"></BlogItem>
      <pagination :pageTotal="pages.pageTotal" :pageNumber="pages.pageNumber" :pageSize="pages.pageSize" @click="getBack"> </pagination>
    </div>
    <div class="w-[300px] ml-[15px]">
      <BlogSider></BlogSider>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogItem from '../components/Blog/BlogItem.vue'
import BlogSider from '../components/Blog/BlogSider.vue'
import pagination from '../components/common/pagination.vue'
import { usePostData } from '../composables'
import { computed, reactive } from 'vue'
const { posts } = usePostData()
const pages = reactive({
  pageTotal: posts.length,
  pageNumber: 1,
  pageSize: 10
})
const blogData = computed(() => posts.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize))
const getBack = (value: { page: number; pageSize: number }) => {
  const { page, pageSize } = value
  pages.pageNumber = page
  pages.pageSize = pageSize
}
</script>
