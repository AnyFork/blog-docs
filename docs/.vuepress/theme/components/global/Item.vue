<template>
  <span class="shadow-item bg-[#fff] hover:bg-[#3eaf7c] dark:bg-[#181818] dark:hover:bg-[#3eaf7c]">
    <a class="flex items-center text-[#666] py-[8px] px-[14px] dark:hover:text-[#fff]">
      <span>{{ categoryItem.name }}</span>
      <span class="ml-[4px] w-[1.2rem] h-[1.2rem] leading-[1.2rem] text-center text-[.7rem] text-[#fff]" :style="{ 'background-color': color }"> {{ categoryItem.path.length }}</span></a
    >
  </span>
</template>

<script setup lang="ts">
defineProps<{
  categoryItem: Blog.category
  color: string
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
