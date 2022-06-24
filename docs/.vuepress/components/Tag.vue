<template>
  <!-- 公共布局 -->
  <Common class="tag-wrapper" :sidebar="false">
    <!-- 标签集合 -->
    <ModuleTransition>
      <div>
        <h1><reco-icon icon="reco-tag" style="font-size: 25px"></reco-icon>标签列表</h1>
        <TagList v-show="recoShowModule" class="tags" :currentTag="$currentTags.key" @getCurrentTag="tagClick"></TagList>
      </div>
    </ModuleTransition>

    <!-- 博客列表 -->
    <ModuleTransition delay="0.08">
      <note-abstract v-show="recoShowModule" class="list" :data="posts" :currentTag="$currentTags.key" @paginationChange="paginationChange"></note-abstract>
    </ModuleTransition>
  </Common>
</template>

<script>
import { defineComponent, computed } from 'vue-demi'
import Common from 'vuepress-theme-reco/components/Common'
import TagList from './TagList'
import NoteAbstract from './NoteAbstract'
import { ModuleTransition, RecoIcon } from '@vuepress-reco/core/lib/components'
import { sortPostsByStickyAndDate, filterPosts } from 'vuepress-theme-reco/helpers/postData'
import moduleTransitonMixin from 'vuepress-theme-reco/mixins/moduleTransiton'
import { useInstance } from 'vuepress-theme-reco/helpers/composable'

export default defineComponent({
  mixins: [moduleTransitonMixin],
  components: { Common, NoteAbstract, TagList, ModuleTransition, RecoIcon },

  setup(props, ctx) {
    const instance = useInstance()

    // 时间降序后的博客列表
    const posts = computed(() => {
      let posts = instance.$currentTags.pages
      posts = filterPosts(posts)
      sortPostsByStickyAndDate(posts)
      return posts
    })

    const getCurrentTag = (tag) => {
      ctx.emit('currentTag', tag)
    }

    const tagClick = (tagInfo) => {
      if (instance.$route.path !== tagInfo.path) {
        instance.$router.push({ path: tagInfo.path })
      }
    }

    const paginationChange = (page) => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 100)
    }

    return { posts, getCurrentTag, tagClick, paginationChange }
  }
})
</script>

<style src="vuepress-theme-reco/styles/theme.styl" lang="stylus"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" scoped>

.tag-wrapper
  max-width: $contentWidth;
  margin: 0 auto;
  padding: 4.6rem 2.5rem 0;

@media (max-width: $MQMobile)
  .tag-wrapper
    padding: 4.6rem 1rem 0;
</style>
