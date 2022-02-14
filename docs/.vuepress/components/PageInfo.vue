<template>
  <div style="margin-top: 15px">
    <reco-icon v-if="pageInfo.frontmatter.author || $themeConfig.author" icon="reco-account">
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author }}</span>
    </reco-icon>
    <reco-icon v-if="pageInfo.frontmatter.date" icon="reco-date">
      <span>{{ formatDateValue(pageInfo.frontmatter.date) }}</span>
    </reco-icon>
    <br v-if="windowsWidth < 500" />
    <reco-icon v-if="pageInfo.frontmatter.tags" icon="reco-tag" class="tags">
      <span v-for="(subItem, subIndex) in pageInfo.frontmatter.tags" :key="subIndex" class="tag-item" :class="{ active: currentTag == subItem }" @click.stop="goTags(subItem)">{{ subItem }}</span>
    </reco-icon>
    <reco-icon v-if="pageInfo.frontmatter.categories" icon="reco-category" class="tags">
      <span v-for="(subItem, subIndex) in pageInfo.frontmatter.categories" :key="subItem + '_' + subIndex" class="tag-item" :class="{ active: currentTag == subItem }" @click.stop="goCategory(subItem)">{{ subItem }}</span>
    </reco-icon>
    <reco-icon v-if="showAccessNumber === true" icon="reco-eye">
      <AccessNumber :idVal="pageInfo.path" :numStyle="{ fontSize: '.9rem', fontWeight: 'normal', color: '#999' }" />
    </reco-icon>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { defineComponent } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { useInstance } from 'vuepress-theme-reco/helpers/composable'
export default defineComponent({
  components: { RecoIcon },
  props: {
    pageInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    currentTag: {
      type: String,
      default: ''
    },
    showAccessNumber: {
      type: Boolean,
      default: false
    },
    windowsWidth: {
      type: Number,
      default: 800
    }
  },
  setup(props, ctx) {
    const instance = useInstance()
    //标签跳转
    const goTags = (tag) => {
      if (instance.$route.path !== `/tag/${tag}/`) {
        instance.$router.push({ path: `/tag/${tag}/` })
      }
    }
    //分类跳转
    const goCategory = (category) => {
      if (instance.$route.path !== `/categories/${category}/`) {
        instance.$router.push({ path: `/categories/${category}/` })
      }
    }
    //时间格式化
    const formatDateValue = (value) => {
      return dayjs(value).add(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
    }
    return { goTags, formatDateValue, goCategory }
  },
  mounted() {
    console.log(this.windowsWidth)
  }
})
</script>

<style lang="stylus" scoped>
.iconfont
  display inline-block
  line-height 1.5rem
  &:not(:last-child)
    margin-right 1rem
  span
    margin-left 0.5rem
.tags
  .tag-item
    font-family Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
    cursor pointer
    &.active
      color $accentColor
    &:hover
      color $accentColor
@media (max-width: $MQMobile)
  .tags
    display inline;
    width:50%;
    overflow: hidden;
    margin-left 0 !important
</style>
