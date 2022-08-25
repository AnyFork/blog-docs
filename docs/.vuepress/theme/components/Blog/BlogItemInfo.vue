<template>
  <div class="w-full h-9 mt-[15px] flex items-center">
    <!--作者 -->
    <Icon icon="UserOutlined" :text="author" class="text-[#7F7F7F] text-[13px] mr-[1rem]" v-if="author"></Icon>
    <!--文章日期 -->
    <Icon icon="FieldTimeOutlined" :text="formatDateValue(page.frontmatter.date)" v-if="formatDateValue(page.frontmatter.date)" class="text-[#7F7F7F] text-[13px] mr-[1rem]"> </Icon>
    <!-- 分类 -->
    <Icon icon="AppstoreOutlined" :text="page.frontmatter.category" type="category" class="text-[#7F7F7F] text-[13px] mr-[1rem] z-[300]" v-if="page.frontmatter.category"></Icon>
    <!-- 标签 -->
    <Icon icon="TagsOutlined" :text="page.frontmatter.tag" type="tag" class="text-[#7F7F7F] text-[13px] mr-[1rem] z-[300]" v-if="page.frontmatter.tag"></Icon>
    <!-- 字数 -->
    <Icon icon="ReadOutlined" :text="timeAndWord.words" class="text-[#7F7F7F] text-[13px] mr-[1rem]" v-if="timeAndWord.words"></Icon>
    <!-- 阅读时间 -->
    <Icon icon="HourglassOutlined" :text="timeAndWord.minutes" class="text-[#7F7F7F] text-[13px] mr-[1rem]" v-if="timeAndWord.minutes"></Icon>
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
//阅读时间
const timeAndWord = computed(() => {
  const { minutes, words } = props.page.readingTime
  if (minutes && words) {
    if (minutes < 1) {
      return { minutes: '少于1分钟', words: `${words}字` }
    } else {
      return { minutes: `大约${Math.floor(minutes)}分钟`, words: `${words}字` }
    }
  } else {
    return { minutes: undefined, words: undefined }
  }
})
</script>
