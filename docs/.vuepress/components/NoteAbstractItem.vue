<template>
  <div class="abstract-item" @click.stop="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div v-if="item.frontmatter.listCell && item.frontmatter.listCell.mode === 'left' && winWidth > 500" class="box">
      <div class="box_img">
        <img :src="item.frontmatter.listCell.image" />
      </div>
      <div class="content">
        <div class="title">
          <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
          <router-link :to="item.path">{{ item.title }}</router-link>
        </div>
        <div class="abstract" v-html="item.excerpt"></div>
      </div>
    </div>
    <div v-if="item.frontmatter.listCell && item.frontmatter.listCell.mode === 'right' && winWidth > 500" class="box">
      <div class="content right">
        <div class="title">
          <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
          <router-link :to="item.path">{{ item.title }}</router-link>
        </div>
        <div class="abstract" v-html="item.excerpt"></div>
      </div>
      <div class="box_img">
        <img :src="item.frontmatter.listCell.image" />
      </div>
    </div>
    <div v-if="!item.frontmatter.listCell && winWidth > 500">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
    </div>
    <!--移动端样式，屏幕尺寸小于500布局样式-->
    <div v-if="winWidth < 500">
      <div class="title">
        <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
        <router-link :to="item.path">{{ item.title }}</router-link>
      </div>
      <div class="boxImg" v-if="item.frontmatter.listCell && item.frontmatter.listCell.image">
        <img :src="item.frontmatter.listCell.image" />
      </div>
      <div class="abstract" v-html="item.excerpt"></div>
    </div>
    <page-info :pageInfo="item" :currentTag="currentTag" :showAccessNumber="true" :windowsWidth="winWidth"></page-info>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag', 'winWidth']
})
</script>
<style lang="stylus" scoped>
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > *{
    pointer-events: auto;
  }
  &:hover
    box-shadow: var(--box-shadow-hover);
  &:hover .box .box_img img
    transform: scale(1);
  .box
    display: flex;
    align-items: center;
    margin-top: 15px;
    .box_img
      width: 50%;
      height: 200px;
      border-radius: 8px;
      overflow: hidden;
      flex: 0 0 50%;
      img
        width: 100%;
        height: 100%;
        transform: scale(1.5);
        transition: transform 0.6s;
    .right
      padding-right: 80px;
      padding-left: 0px !important;
    .content
      width: 50%;
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      padding-left: 80px;
      font-weight: normal
      .abstract
        width:100%

  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    width:100%;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .boxImg
    width:100%
    border-radius:5px;
    img
      width:100%
      transform: scale(1);
      transition: transform 0.6s;
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
