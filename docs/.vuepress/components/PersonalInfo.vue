<template>
  <div class="personal-info-wrapper">
    <img class="personal-img" v-if="$themeConfig.authorAvatar" :src="$withBase($themeConfig.authorAvatar)" alt="author-avatar" />
    <h3 class="name" v-if="$themeConfig.author">
      {{ $themeConfig.author }}
    </h3>
    <div class="num">
      <div>
        <h3>{{ $recoPosts.length }}</h3>
        <h6>{{ $recoLocales.article }}</h6>
      </div>
      <div style="border-right: 1px solid #333">
        <h3>{{ $tags.list.length }}</h3>
        <h6>{{ $recoLocales.tag }}</h6>
      </div>
      <div>
        <h3>{{ $categories.list.length }}</h3>
        <h6>{{ $recoLocales.category }}</h6>
      </div>
    </div>
    <!--个人摘要 -->
    <div v-if="$frontmatter.summary" class="custom-block tip" style="line-height: 30px">{{ $frontmatter.summary }}</div>
    <!--个人兴趣爱好 -->
    <div v-if="$frontmatter.hobby">
      <span><reco-icon icon="reco-document"></reco-icon>兴趣爱好</span>
      <div style="margin-top: 5px">
        <span v-for="(item, index) in $frontmatter.hobby" :key="index" :style="{ backgroundColor: color }" class="hobbySpan">{{ item }}</span>
      </div>
    </div>
    <!--其他链接-->
    <div v-if="$frontmatter.hobby" style="margin-top: 5px">
      <span><reco-icon icon="reco-document"></reco-icon>其他链接</span>
    </div>
    <ul class="social-links">
      <li class="social-item" v-for="(item, index) in socialLinks" :key="index">
        <reco-icon :icon="item.icon" :link="item.link" :style="{ color: item.color }" />
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { getOneColor } from 'vuepress-theme-reco/helpers/other'
import { useInstance } from 'vuepress-theme-reco/helpers/composable'

export default defineComponent({
  components: { RecoIcon },
  setup(props, ctx) {
    const instance = useInstance()
    const socialLinks = computed(() =>
      ((instance.$themeConfig.blogConfig && instance.$themeConfig.blogConfig.socialLinks) || []).map((item) => {
        if (!item.color) item.color = getOneColor()
        return item
      })
    )
    //兴趣爱好颜色
    const color = ref(getOneColor())
    //10秒更新一次
    setInterval(() => {
      color.value = getOneColor()
    }, 10000)
    return { socialLinks, color }
  }
})
</script>

<style lang="stylus" scoped>
.personal-info-wrapper {
  .personal-img {
    display block
    margin 2rem auto 1rem
    width 6rem
    height 6rem
    border-radius 50%
  }
  .name {
    font-size 1rem
    text-align center
    color var(--text-color)
  }
  .num {
    display flex
    margin 0 auto 1rem
    width 80%
    > div {
      text-align center
      flex 0 0 33.3333%
      &:first-child {
        border-right 1px solid #333
      }
      h3 {
        line-height auto
        margin 0 0 .6rem
        color var(--text-color)
      }
      h6 {
        line-height auto
        color var(--text-color)
        margin 0
      }
    }
  }
  .hobbySpan{
    vertical-align: middle;
    margin: 4px 4px 10px;
    padding: 4px 8px;
    display: inline-block;
    cursor: pointer;
    border-radius: 0.25rem;
    background: #fff;
    color: #fff;
    line-height: 13px;
    font-size: 13px;
    box-shadow: var(--box-shadow);
    transition: all 0.5s;
  }
  .social-links {
    margin-top:5px
    box-sizing border-box
    display flex
    flex-wrap wrap
    padding 1px
    .social-item {
      width 39px
      height 36px
      line-height 36px
      text-align center
      list-style none
      transition transform .3s
      &:hover {
        transform scale(1.08)
      }
      i {
        cursor pointer
        font-size 22px
      }
    }
  }
}
</style>
