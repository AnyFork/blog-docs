<template>
  <Navbar></Navbar>
  <div class="pt-[100px] w-[var(--content-width)] my-0 mx-auto">
    <Icon icon="TagsOutlined" :iconSize="25" text="标签列表" class="dark:hover:text-[#fff]" :textSize="20" />
    <div class="w-full flex my-[10px]">
      <Item v-for="(item, index) in tags" :key="index" :categoryItem="item" :color="useRandomColor()" :style="styleBg(item)" @click="changeTag(item)"></Item>
    </div>
    <BlogItem v-for="(obj, index) in blogData" :page="obj" :position="index % 2 == 0 ? 'left' : 'right'" :key="obj" />
    <pagination :pageTotal="pages.pageTotal" :pageNumber="pages.pageNumber" :pageSize="pages.pageSize" @click="getBack"> </pagination>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@theme/Navbar.vue'
import BlogItem from '../Blog/BlogItem.vue'
import { useTags } from '../../composables'
import { useRandomColor } from '../../utils/useColor'
import pagination from '../common/pagination.vue'
import { ref, reactive, computed } from 'vue'
const { tags } = useTags()
const active = ref(tags[0])
const pages = reactive({
  pageTotal: active.value.path.length,
  pageNumber: 1,
  pageSize: 10
})
const blogData = computed(() => active.value.path.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize))
const getBack = (value: { page: number; pageSize: number }) => {
  const { page, pageSize } = value
  pages.pageNumber = page
  pages.pageSize = pageSize
}
const changeTag = (item: Blog.category) => {
  active.value = item
  pages.pageNumber = 1
  pages.pageSize = 10
  pages.pageTotal = item.path.length
}
const styleBg = (item: Blog.category) => (active.value.name == item.name ? { 'background-color': '#3eaf7c' } : '')
</script>
