<template>
  <ParentLayout>
    <template #page>
      <main class="page h-screen">
        <div class="mt-[40px] sm:w-[var(--content-width)] my-0 relative ul-item mx-[15px] sm:mx-auto">
          <h3 class="title relative pl-[1.2rem]">时间轴</h3>
          <ul class="relative mt-[50px]">
            <li v-for="(item, index) in timelineData" :key="index" class="leading-[50px]">
              <h3 class="point relative">{{ item.year }}</h3>
              <ul class="pl-0">
                <li v-for="{ info, path } in item.value" class="relative leading-[50px]">
                  <span class="point mr-[10px]">{{ dateFormat(info.data.frontmatter.date) }}</span>
                  <span class="hover:text-[#3eaf7c] cursor-pointer" @click="$router.push(path)">{{ info.data.title }}</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>
<script setup lang="ts">
import { useBlogType } from 'vuepress-plugin-blog2/lib/client'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { computed } from 'vue'
import { dateFormat } from '../utils'
const timelines = useBlogType('timeline')
const timelineData: any = computed(() => {
  const items = timelines.value.items
  const objData: Record<string, Array<unknown>> = {}
  let objArray: Array<Record<string, unknown>> = []
  items.forEach((item: any) => {
    const date = item.info.data.frontmatter?.date
    if (date) {
      const year = dateFormat(date, 'year')
      objData[year] ? objData[year].push(item) : (objData[year] = [item])
    }
  })
  Object.keys(objData).forEach((item) => {
    objArray.unshift({ year: item, value: objData[item] })
  })
  return objArray
})
</script>
<style lang="css" scoped>
ul {
  list-style: none;
}
li {
  border-bottom: 1px dashed #e4e0e0a3;
}
.ul-item::after {
  content: ' ';
  position: absolute;
  top: 14px;
  left: 0;
  z-index: -1;
  margin-left: -2px;
  width: 2px;
  height: 100%;
  background: #eee;
}
.title:before {
  content: ' ';
  position: absolute;
  z-index: 2;
  top: 50%;
  margin-left: -6px;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  left: 0px;
}
.point::before {
  content: ' ';
  position: absolute;
  z-index: 2;
  left: -20px;
  top: 50%;
  margin-left: -4px;
  margin-top: -4px;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
}
</style>
