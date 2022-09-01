<template>
  <div class="w-full items-center mt-[5px] sm:mt-[15px] sm:flex sm:h-9">
    <!--作者 -->
    <Icon icon="UserOutlined" :text="author" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14" class="text-[#7F7F7F] text-[13px] mr-[5px] sm:mr-[1rem]" v-if="author"></Icon>
    <!--文章日期 -->
    <Icon icon="FieldTimeOutlined" :text="formatDateValue(page.frontmatter.date)" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14" v-if="formatDateValue(page.frontmatter.date)" class="text-[#7F7F7F] text-[13px] mr-[5px] sm:mr-[1rem]"> </Icon>
    <!-- 分类 -->
    <Icon icon="AppstoreOutlined" :text="page.frontmatter.category" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14" type="category" class="text-[#7F7F7F] text-[13px] mr-[5px] sm:mr-[1rem] z-[300]" v-if="page.frontmatter.category"></Icon>
    <!-- 标签 -->
    <Icon icon="TagsOutlined" :text="page.frontmatter.tag" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14" type="tag" class="text-[#7F7F7F] text-[13px] mr-[5px] sm:mr-[1rem] z-[300]" v-if="page.frontmatter.tag"></Icon>
    <!-- 字数 -->
    <Icon icon="ReadOutlined" :text="timeAndWord.words" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14" class="text-[#7F7F7F] text-[13px] mr-[5px] sm:mr-[1rem]" v-if="timeAndWord.words"></Icon>
    <!-- 阅读时间 -->
    <Icon icon="HourglassOutlined" :text="timeAndWord.minutes" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14" class="text-[#7F7F7F] text-[13px] mr-[5px] sm:mr-[1rem]" v-if="timeAndWord.minutes"></Icon>
    <!-- 浏览量-->
    <Icon icon="FireOutlined" class="text-[#7F7F7F] text-[13px] sm:mr-[1rem]" :iconSize="isMobile ? 12 : 18" :textSize="isMobile ? 10 : 14">
      <span class="waline-pageview-count" :data-path="page.path" :style="isMobile ? { fontSize: '10px' } : { 'padding-left': '5px' }"></span>
    </Icon>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
import { computed } from 'vue'
import { isMobile } from '../../utils'
dayjs.extend(utc)
dayjs.extend(timezone)
const themeData: any = useThemeData()
const props = defineProps<{
  page: Record<string, any>
}>()
const author = computed(() => props.page.frontmatter.author || themeData.value.author)
//时间格式化
const formatDateValue = (value: string) => {
  return value ? dayjs.tz(value, 'Asia/Shanghai').format('YYYY-MM-DD') : ''
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
