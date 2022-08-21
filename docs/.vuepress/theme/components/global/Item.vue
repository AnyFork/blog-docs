<template>
  <span class="shadow-item bg-[#fff] hover:bg-[#3eaf7c] dark:bg-[#181818] dark:hover:bg-[#3eaf7c]">
    <a :href="itemLink?.link" :target="itemLink?.target" class="flex items-center text-[#666] py-[8px] px-[14px] dark:hover:text-[#fff]">
      <span :style="active ? { 'background-color': '#3eaf7c', color: '#fff' } : ''">{{ itemText.text }}</span>
      <span class="ml-[4px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]" :style="{ 'background-color': itemCount?.bgColor }"> {{ itemCount?.count }}</span></a
    >
  </span>
</template>

<script setup lang="ts">
defineProps<{
  itemText: { text: string; color: string }
  itemLink?: { link?: string; target?: string }
  itemCount?: { count: number; bgColor: string }
  active?: boolean
}>()
</script>

<style lang="scss" scoped>
span {
  margin: 4px 8px 10px;
  cursor: pointer;
  border-radius: 0.25rem;
  font-size: 13px;
  transition: all 0.5s;
}
</style>
