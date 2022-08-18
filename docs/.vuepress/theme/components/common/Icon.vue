<template>
  <a :href="link" :target="target" v-if="text" class="inline-flex items-center !text-[color:var(--c-text)]">
    <component :is="icons[icon]" :key="icon" :style="iconStyle"></component>
    <span class="ml-[5px]" v-if="text && text.length > 0" v-for="(item, index) in textRef" :key="index" :style="textStyle">{{ item }} </span>
  </a>
  <component v-else :is="icons[icon]" :key="icon" :style="iconStyle"></component>
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
  }>(),
  {
    iconColor: 'inherit',
    iconSize: 18,
    text: '',
    textColor: 'inherit',
    textSize: 14
  }
)
const { icon, iconSize, iconColor, textColor, textSize } =toRefs(props)
const iconStyle = computed(() => {
  return { color: iconColor.value, width: `${iconSize.value}px`, height: `${iconSize.value}px`, fontSize: `${iconSize.value}px` }
})
const textStyle = computed(() => {
  return { color: textColor.value, fontSize: `${textSize.value}px` }
})
const textRef = computed(() => (typeof props.text == 'string' ? [props.text] : props.text))
</script>
