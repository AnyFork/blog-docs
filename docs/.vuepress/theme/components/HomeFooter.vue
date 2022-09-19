<template>
  <div class="p-[15px] mt-[25px] text-center border-t-[1px] border-t-[color:#eee] border-solid border-x-0 border-b-0">
    <Icon icon="SafetyCertificateOutlined" link="https://beian.miit.gov.cn/" target="_blank" text="陕ICP备2022010303号-1" :textSize="15" class="mr-[30px]" />
    <Icon icon="CopyrightCircleOutlined" text="小紫念沁 2022" :textSize="15" class="mr-[30px]" />
    <!-- 浏览量-->
    <Icon icon="FireOutlined" class="text-[13px] mr-[1rem]">
      <span class="waline-pageview-count" data-path="/" style="padding-left: 5px"></span>
    </Icon>
  </div>
</template>
<script setup lang="ts">
import { useCount } from '../composables'
useCount()
</script>
