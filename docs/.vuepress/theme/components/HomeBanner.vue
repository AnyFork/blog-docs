<template>
  <div class="hero w-full relative h-[250px] flex justify-center items-center overflow-hidden" :style="homeBanner.bannerOptions.bgImageStyle">
    <!--轮播图 -->
    <div id="banner" class="w-full absolute z-0 overflow-hidden">
      <img :src="item" v-for="item in mixImage" :key="item" />
    </div>
    <!--标题 -->
    <div class="index z-100 absolute text-[#fff] text-center">
      <!--主标题，主标题为数组时通过typed.js进行打印，反之正常显示 -->
      <div>
        <h1 v-if="`${homeBanner.bannerOptions.heroText instanceof Array}`" class="typed inline-block text-[1rem] font-[500] sm:text-[2.5rem]"></h1>
        <h1 v-else class="typed inline-block text-[1rem] font-[500] sm:text-[2.5rem]">vuePress-theme-Anyfork</h1>
      </div>
      <!--副标题-->
      <p v-if="homeBanner.bannerOptions.tagline" class="text-[0.8rem] sm:text-[1.6rem] sm:my-5">
        {{ homeBanner.bannerOptions.tagline || 'Welcome to your vuePress-theme-AnyFork site' }}
      </p>
      <!--向下箭头，点击跳到文章列表-->
      <a v-if="homeBanner.bannerOptions.showArrow" class="anchor-down" @click="scrollFn"></a>
    </div>
    <!--首页图片气泡-->
    <div v-if="homeBanner.bannerOptions.bubbles" id="bubbles" class="absolute w-full h-full z-[10]"></div>
  </div>
</template>
<script setup lang="ts">
import { useTyped, useBanner, useCircleMagic } from '../composables'
const homeBanner = useBanner()
useTyped()
useCircleMagic()
const mixImage = homeBanner.getRandomImage()
const scrollFn = () => {
  // 获取窗口高度
  const windowH = document.getElementsByClassName('hero')[0].clientHeight
  // 滚动条滚动到指定位置
  document.documentElement.scrollTop = windowH
}
</script>
<style lang="css">
@-webkit-keyframes bounce-in {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  80% {
    transform: translateY(0);
  }
  to {
    transform: translateY(0);
  }
}

.typed-cursor {
  font-size: 2.3rem;
}
.anchor-down {
  display: block;
  width: 15px;
  height: 15px;
  font-size: 30px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: -50%;
  margin-left: -10px;
  cursor: pointer;
  z-index: 10000;
}

.anchor-down::before {
  content: '';
  width: 15px;
  height: 15px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: '';
  width: 15px;
  height: 15px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
@media (max-width: 640px) {
  .typed-cursor {
    font-size: 1rem;
  }
  .anchor-down {
    display: block;
    width: 10px;
    height: 10px;
    font-size: 30px;
    text-align: center;
    animation: bounce-in 5s 3s infinite;
    position: absolute;
    left: 50%;
    bottom: -50%;
    margin-left: -10px;
    cursor: pointer;
    z-index: 10000;
  }

  .anchor-down::before {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    transform: rotate(135deg);
    position: absolute;
    bottom: 10px;
  }
  .anchor-down::after {
    content: '';
    width: 10px;
    height: 10px;
    display: block;
    border-right: 1px solid #fff;
    border-top: 1px solid #fff;
    transform: rotate(135deg);
  }
}
</style>
