<template>
  <div class="w-full h-9 mt-[15px] flex items-center">
    <!--作者 -->
    <Icon icon="UserOutlined" :text="author" class="text-[#7F7F7F] text-[13px] mr-[1rem]" v-if="author"></Icon>
    <!--文章日期 -->
    <Icon icon="FieldTimeOutlined" :text="formatDateValue(page.frontmatter.date)" v-if="formatDateValue(page.frontmatter.date)" class="text-[#7F7F7F] text-[13px] mr-[1rem]"> </Icon>
    <!-- 分类 -->
    <Icon icon="AppstoreOutlined" :text="page.frontmatter.categories" class="text-[#7F7F7F] text-[13px] mr-[1rem]" v-if="page.frontmatter.categories"></Icon>
    <!-- 标签 -->
    <Icon icon="TagsOutlined" :text="page.frontmatter.tags" class="text-[#7F7F7F] text-[13px] mr-[1rem]" v-if="page.frontmatter.tags"></Icon>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
import { computed } from 'vue'
dayjs.extend(utc)
dayjs.extend(timezone)
const themeData: any = useThemeData()
const props = defineProps<{
  page: Record<string, any>
}>()
const author = computed(() => props.page.frontmatter.author || themeData.value.author)
//时间格式化
const formatDateValue = (value: string) => {
  return value ? dayjs.tz(value, 'Asia/Shanghai').format('YYYY-MM-DD HH:mm:ss') : ''
}
</script>
