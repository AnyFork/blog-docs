<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <div class="pt-[20px] w-full sm:w-[var(--content-width)] my-0 mx-auto">
          <Icon icon="AppstoreTwotone" :iconSize="25" text="标签列表" :textSize="20" class="dark:hover:text-[#fff] ml-[10px]" />
          <div class="w-full flex flex-wrap my-[10px]">
            <RouterLink v-for="({ items, path }, name) in tagMap.map" :key="name" :to="path" class="shadow-item flex items-center text-[#666]  font-normal px-[8px] h-[35px] mt-[5px] sm:px-[14px] sm:h-[50px] hover:bg-[#3eaf7c] hover:text-[#fff] dark:bg-[#181818] dark:hover:bg-[#3eaf7c] dark:text-[#fff] rounded mx-[5px]">
              <span>{{ name }}</span>
              <span class="ml-[10px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]" :style="{ 'background-color': useRandomColor() }"> {{ items.length }}</span>
            </RouterLink>
          </div>
          <BlogItem v-for="(item, index) in blogData" :page="item.info" :position="index % 2 == 0 ? 'left' : 'right'" :key="index" />
          <Pagination :pageTotal="pages.pageTotal" :pageNumber="pages.pageNumber" :pageSize="pages.pageSize" @click="getBack"> </Pagination>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogCategory } from 'vuepress-plugin-blog2/lib/client'
import BlogItem from '../components/Blog/BlogItem.vue'
import { useRandomColor } from '../utils/useColor'
import { computed, reactive, watch } from 'vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const tagMap = useBlogCategory('tag')
const pages = reactive({
  pageTotal: tagMap.value.currentItems?.length || 0,
  pageNumber: 1,
  pageSize: 10
})
const blogData = computed(() => tagMap.value.currentItems?.slice((pages.pageNumber - 1) * pages.pageSize, pages.pageNumber * pages.pageSize))
const getBack = (value: { page: number; pageSize: number }) => {
  const { page, pageSize } = value
  pages.pageNumber = page
  pages.pageSize = pageSize
}
watch(
  route,
  (newVal) => {
    if (newVal.path == '/tag/') {
      const key = Object.keys(tagMap.value.map)[0]
      router.push(tagMap.value.map[key])
    }
  },
  { immediate: true }
)
</script>
<style scoped>
.router-link-exact-active {
  background: #3eaf7c;
}
</style>

