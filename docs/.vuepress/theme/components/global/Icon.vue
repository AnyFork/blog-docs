<template>
  <div class="icon-link inline-flex items-center" v-if="!type">
    <a :href="link" :target="target" v-if="link || text" class="inline-flex items-center" style="color: inherit">
      <client-only>
        <component :is="icons[icon]" :key="icon" :style="iconStyle"></component>
      </client-only>
      <span class="sm:ml-[5px]" v-if="text && text.length > 0" v-for="(item, index) in textRef" :key="index" :style="textStyle">{{ item }} </span>
    </a>
    <client-only v-else>
      <component :is="icons[icon]" :key="icon" :style="iconStyle"></component>
    </client-only>
    <slot></slot>
  </div>
  <span v-else class="icon-router-link inline-flex items-center">
    <client-only>
      <component :is="icons[icon]" :key="icon" :style="iconStyle"></component>
    </client-only>
    <router-link :to="transformPath(item)" class="ml-[5px]" v-if="text && text.length > 0" v-for="(item, index) in textRef" :key="index" :style="textStyle">{{ item }} </router-link>
  </span>
</template>

<script setup lang="ts">
import * as vicon from '@vicons/antd'
import { computed, toRefs } from 'vue'
const icons: any = { ...vicon }
const props = withDefaults(
  defineProps<{
    icon: string
    iconSize?: number
    iconColor?: string
    text?: string | Array<string>
    textColor?: string
    textSize?: number
    link?: string
    target?: string
    type?: string
  }>(),
  {
    iconColor: 'inherit',
    iconSize: 18,
    text: '',
    textColor: 'inherit',
    textSize: 14
  }
)
const { icon, iconSize, iconColor, textColor, textSize } = toRefs(props)
const iconStyle = computed(() => {
  return { color: iconColor.value, width: `${iconSize.value}px`, height: `${iconSize.value}px`, fontSize: `${iconSize.value}px` }
})
const textStyle = computed(() => {
  return { color: textColor.value, fontSize: `${textSize.value}px` }
})
const textRef = computed(() => (typeof props.text == 'string' ? [props.text] : props.text))
//路径转换
const transformPath = (text: string) => {
  const newPath = text.toLowerCase().split(' ').join('-')
  return `/${props.type}/${newPath}`
}
</script>
