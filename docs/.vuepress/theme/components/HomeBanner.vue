<template>
  <div
    class="hero w-full relative h-[500px] flex justify-center items-center"
    :style="homeBanner.bannerOptions.bgImageStyle"
  >
    <!--轮播图 -->
    <div id="banner" class="w-full absolute z-0 overflow-hidden">
      <img :src="item" v-for="item in mixImage" :key="item" />
    </div>
    <!--标题 -->
    <div class="index z-100 absolute text-[#fff] text-center">
      <!--主标题，主标题为数组时通过typed.js进行打印，反之正常显示 -->
      <div>
        <h1
          v-if="`${homeBanner.bannerOptions.heroText instanceof Array}`"
          class="typed inline-block text-[2.5rem] font-[500]"
        ></h1>
        <h1 v-else class="typed inline-block text-[2.5rem] font-[500]">
          vuePress-theme-Anyfork
        </h1>
      </div>
      <!--副标题-->
      <p v-if="homeBanner.bannerOptions.tagline" class="my-5 text-[1.6rem]">
        {{
          homeBanner.bannerOptions.tagline ||
          "Welcome to your vuePress-theme-AnyFork site"
        }}
      </p>
      <!--向下箭头，点击跳到文章列表-->
      <a
        v-if="homeBanner.bannerOptions.showArrow"
        class="anchor-down"
        @click="scrollFn"
      ></a>
    </div>
    <!--首页图片气泡-->
    <div
      v-if="homeBanner.bannerOptions.bubbles"
      id="bubbles"
      class="absolute w-full h-full z-[10]"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { useTyped, useBanner, useCircleMagic } from "../composables";
const homeBanner = useBanner();
const typed = useTyped();
const circleMagic=useCircleMagic()
const mixImage = homeBanner.getRandomImage();
const scrollFn = () => {
  // 获取窗口高度
  const windowH = document.getElementsByClassName("hero")[0].clientHeight;
  // 滚动条滚动到指定位置
  document.documentElement.scrollTop = windowH;
};
</script>
