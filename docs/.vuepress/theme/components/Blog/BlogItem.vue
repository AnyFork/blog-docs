<template>
  <div class="blog-item relative w-full py-[8px] px-[10px] sm:px-[20px] sm:py-[16px] rounded dark:bg-[#181818] bg-[#fff] shadow-box mb-[20px] cursor-pointer box-border">
    <div v-if="!isMobile">
      <div class="left-box flex mt-[15px] items-center z-[300]" v-if="position == 'left'">
        <div class="img h-[200px] rounded-[8px] overflow-hidden flex-[0_0_50%]">
          <img :src="page.data.frontmatter.image ? page.data.frontmatter.image : withBase('/images/index/bg1.jpg')" class="w-full h-full scale-100 transition-transform duration-[.6s] sm:hover:scale-[1.5]" />
        </div>
        <div class="content flex-1 pl-[40px] flex flex-wrap m-0 px-[0.2rem] overflow-hidden">
          <div class="title w-full text-[1.28rem]">
            <router-link :to="page.data.path" class="font-bold text-[color:var(--text-color)] truncate block" :title="page.data.title">{{ page.data.title }}</router-link>
          </div>
          <div class="abstract w-full h-[180px] font-normal indent-6" v-html="page.data.excerpt"></div>
        </div>
      </div>
      <div class="right-box flex mt-[15px] items-center z-[300]" v-else>
        <div class="content flex-1 pr-[40px] flex flex-wrap m-0 px-[0.2rem] overflow-hidden">
          <div class="title w-full text-[1.28rem]">
            <router-link :to="page.data.path" class="font-bold text-[color:var(--text-color)] truncate block" :title="page.data.title">{{ page.data.title }}</router-link>
          </div>
          <div class="abstract w-full h-[180px] font-normal indent-6" v-html="page.data.excerpt"></div>
        </div>
        <div class="img h-[200px] rounded-[8px] overflow-hidden flex-[0_0_50%] mr-[1rem]">
          <img :src="page.data.frontmatter.image ? page.data.frontmatter.image : withBase('/images/index/bg1.jpg')" class="w-full h-full scale-100 transition-transform duration-[.6s] sm:hover:scale-[1.5]" />
        </div>
      </div>
    </div>
    <div class="mobile-box flex flex-wrap z-[300] !h-auto" v-else>
      <div class="img w-full h-[150px] rounded-[8px] overflow-hidden">
        <img :src="page.data.frontmatter.image ? page.data.frontmatter.image : withBase('/images/index/bg1.jpg')" class="w-full h-full" />
      </div>
      <div class="content w-full flex flex-wrap overflow-hidden">
        <div class="title w-full !text-[0.9rem] mt-2">
          <router-link :to="page.data.path" class="font-bold text-[color:var(--text-color)] truncate block" :title="page.data.title">{{ page.data.title }}</router-link>
        </div>
        <div class="abstract w-full h-[100px] font-normal text-[0.8rem] overflow-hidden" v-html="page.data.excerpt"></div>
      </div>
    </div>
    <div class="toTop absolute top-[10px] right-[10px] z-0" v-if="page.data.frontmatter.sticky">
      <Icon icon="VerticalAlignTopOutlined" :iconSize="28" iconColor="#fff"> </Icon>
    </div>
    <BlogItemInfo :page="page.data"></BlogItemInfo>
  </div>
</template>

<script setup lang="ts">
import { withBase } from '@vuepress/client'
import BlogItemInfo from './BlogItemInfo.vue'
import { isMobile } from '../../utils'
const props = defineProps<{
  page: Record<string, any>
  position: string
}>()
</script>

<style lang="scss" scoped>
.blog-item {
  .abstract {
    /**对象作为伸缩盒子模型展示**/
    display: -webkit-box;
    /**设置或检索伸缩盒子对象的子元素的排列方式**/
    -webkit-box-orient: vertical;
    /**显示的行数**/
    -webkit-line-clamp: 6;
  }

  .title {
    position: relative;
    font-size: 1.28rem;
    display: inline-block;
    z-index: 100;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--c-text-accent);
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: transform 0.7s ease-in-out;
    }

    &:hover a {
      color: var(--c-text-accent);
    }

    &:hover:after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }

  .toTop::before {
    content: '';
    width: 0px;
    height: 0px;
    border-left: 50px solid transparent;
    border-top: 50px solid #3eaf7c;
    position: absolute;
    left: -20px;
    z-index: -10;
  }
}
</style>
