<template>
  <div class="home-blog">
    <!--首页背景图模块-->
    <div class="hero" :style="{ ...bgImageStyle }">
      <div class="index">
        <!--首页主标题上面img-->
        <ModuleTransition>
          <img class="hero-img" v-if="recoShowModule && $frontmatter.heroImage" :style="heroImageStyle || {}" :src="$withBase($frontmatter.heroImage)" alt="hero" />
        </ModuleTransition>
        <!--主标题，主标题为数组时通过typed.js进行打印，反之正常显示 -->
        <ModuleTransition delay="0.04">
          <div class="hero-main-title">
            <h1 v-if="recoShowModule && `${$frontmatter.heroText instanceof Array}`" class="mainTitle"></h1>
            <h1 v-if="recoShowModule && !($frontmatter.heroText instanceof Array)">{{ $frontmatter.heroText || $title || 'vuePress-theme-reco' }}</h1>
          </div>
        </ModuleTransition>
        <!--副标题-->
        <ModuleTransition delay="0.08">
          <p v-if="recoShowModule && $frontmatter.tagline" class="description">{{ $frontmatter.tagline || $description || 'Welcome to your vuePress-theme-reco site' }}</p>
        </ModuleTransition>
        <!--向下箭头，点击跳到文章列表-->
        <ModuleTransition delay="0.03">
          <a v-if="recoShowModule && $frontmatter.showArrow" class="anchor-down" @click="scrollFn"></a>
        </ModuleTransition>
      </div>
    </div>
    <!--中部主体博客列表 -->
    <ModuleTransition delay="0.16">
      <div v-show="recoShowModule" class="home-blog-wrapper">
        <div class="blog-list">
          <!-- 博客列表 -->
          <note-abstract :data="$recoPosts" @paginationChange="paginationChange" />
        </div>
        <!--右侧布局信息-->
        <div class="info-wrapper">
          <personal-info />
          <!--分类-->
          <h4>
            <reco-icon icon="reco-category" /> {{ $recoLocales.category }}
            <span style="float: right; margin-right: 10px"
              ><span style="font-weight: bold">{{ categoryArticleNum }}</span
              >篇</span
            >
          </h4>
          <ul class="category-wrapper">
            <li class="category-item" v-for="(item, index) in $categories.list" :key="index">
              <router-link :to="item.path">
                <span class="category-name">{{ item.name }}</span>
                <span class="post-num" :style="{ backgroundColor: getOneColor() }">{{ item.pages.length }}</span>
              </router-link>
            </li>
          </ul>
          <hr />
          <!--标签-->
          <h4 v-if="$tags.list.length !== 0">
            <reco-icon icon="reco-tag" />
            {{ $recoLocales.tag }}
          </h4>
          <tag-list @getCurrentTag="getPagesByTags" />
          <hr />
          <!--友情链接-->
          <h4 v-if="$themeConfig.friendLink && $themeConfig.friendLink.length !== 0">
            <reco-icon icon="reco-friend" />
            {{ $recoLocales.friendLink }}
          </h4>
          <friend-link />
        </div>
      </div>
    </ModuleTransition>

    <ModuleTransition delay="0.24">
      <Content v-show="recoShowModule" class="home-center" custom/>
    </ModuleTransition>
  </div>
</template>

<script>
import Typed from 'typed.js'
import { defineComponent, toRefs, reactive, computed, onMounted, ref, nextTick } from 'vue-demi'
import TagList from './TagList'
import FriendLink from './FriendLink'
import NoteAbstract from './NoteAbstract'
import { ModuleTransition, RecoIcon } from '@vuepress-reco/core/lib/components'
import PersonalInfo from './PersonalInfo'
import { getOneColor } from 'vuepress-theme-reco/helpers/other'
import { useInstance } from 'vuepress-theme-reco/helpers/composable'
import publicImages from '../utils/publicImages.js'
import windowsSize from '../utils/windowsSize.js'
export default defineComponent({
  components: { NoteAbstract, TagList, FriendLink, ModuleTransition, PersonalInfo, RecoIcon },
  setup(props, ctx) {
    const instance = useInstance()
    const state = reactive({
      recoShow: false,
      heroHeight: 0
    })
    //分类文章数目
    const categoryArticleNum = computed(() => {
      let num = 0
      instance.$categories.list.forEach((item) => {
        num = num + item.pages.length
      })
      return num
    })
    const recoShowModule = computed(() => instance && instance.$parent.recoShowModule)

    //index图片样式
    const heroImageStyle = computed(() => instance.$frontmatter.heroImageStyle || {})

    //顶部背景图片
    const bgImageStyle = computed(() => {
      let mixImage = []
      //默认的背景图片，目录public/images/index
      const defaultImgaess = publicImages.getPublicImages()
      if (instance.$frontmatter.needDefaultImages) {
        if (instance.$frontmatter.bgImage instanceof Array) {
          mixImage = defaultImgaess.concat(instance.$frontmatter.bgImage)
        } else {
          if (instance.$frontmatter.bgImage) {
            mixImage.push(instance.$frontmatter.bgImage)
            mixImage = mixImage.concat(defaultImgaess)
          } else {
            mixImage.push(defaultImgaess[0])
          }
        }
      } else {
        mixImage.push(instance.$frontmatter.bgImage ? instance.$frontmatter.bgImage : defaultImgaess[0])
      }
      //数组滤重
      mixImage = Array.from(new Set(mixImage))
      //获取随机图片
      let imageUrl = mixImage.length == 1 ? mixImage[0] : publicImages.getRandomImage(mixImage)
      //判断图片是否是远程图片
      const url = ref(imageUrl.indexOf('http') > -1 || imageUrl.indexOf('http') > -1 ? imageUrl : instance.$withBase(imageUrl))
      //判断是否被开启背景图片切换功能
      if (instance.$frontmatter.isBgImagetrigger) {
        //定时切花背景图片
        setInterval(
          () => {
            imageUrl = mixImage.length == 1 ? mixImage[0] : publicImages.getRandomImage(mixImage)
            //判断图片是否是远程图片
            url.value = imageUrl.indexOf('http://') > -1 || imageUrl.indexOf('https://') > -1 ? imageUrl : instance.$withBase(imageUrl)
          },
          instance.$frontmatter.bgImageSec ? instance.$frontmatter.bgImageSec : 10000
        )
      }
      const initBgImageStyle = { textAlign: 'center', overflow: 'hidden', background: `url(${url.value}) center/cover no-repeat` }
      const { bgImageStyle } = instance.$frontmatter
      return bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
    })
    const typedFction = () => {
      //输入的主标题为数组时，通过typed进行打印，否则原样显示
      if (instance.$frontmatter.heroText instanceof Array) {
        new Typed('.mainTitle', {
          //打印的字符串数组
          strings: instance.$frontmatter.heroText,
          //打印速度
          typeSpeed: 300,
          //开始之前的延迟300毫秒
          startDelay: 300,
          //退格速度
          backSpeed: 500,
          //是否循环
          loop: true,
          //Default value
          smartBackspace: true
        })
      }
    }
    onMounted(() => {
      //判断当前窗口是否小于500，小于500关闭公告栏，主要适配移动端
      windowsSize.bulletinPopoverShowSetting()
      console.log('sssssssssssssss')
      state.heroHeight = document.querySelector('.hero').clientHeight
      state.recoShow = true
      //打印字符
      nextTick(() => {
        setTimeout(() => {
          const el = document.querySelector('.mainTitle')
          if (el) {
            typedFction()
          }
        },500)
      })
    })

    return { recoShowModule, heroImageStyle, bgImageStyle, ...toRefs(state), getOneColor, categoryArticleNum }
  },
  methods: {
    paginationChange(page) {
      setTimeout(() => {
        window.scrollTo(0, this.heroHeight)
      }, 100)
    },
    getPagesByTags(tagInfo) {
      this.$router.push({ path: tagInfo.path })
    },
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight // 获取窗口高度
      document.documentElement.scrollTop = windowH // 滚动条滚动到指定位置
    }
  }
})
</script>

<style lang="stylus">
.anchor-down {
  display: block;
  width: 15px;
  height: 15px;
  font-size: 30px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 20%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
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
  content: "";
  width: 15px;
  height: 15px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
.typed-cursor {
  font-size: 2.3rem;
}
.home-blog {
  padding: 0;
  margin: 0px auto;
  .hero {
    margin $navbarHeight auto 0
    position relative
    box-sizing border-box
    padding 0 20px
    height 100vh
    display flex
    align-items center
    justify-content center
    .hero-img {
      max-width: 300px;
      margin: 0 auto 1.5rem
    }

    h1 {
      display: inline;
      margin:0 auto 1.8rem;
      font-size: 2.5rem;
    }

    .description {
      margin: 1.5rem auto;
      font-size: 1.6rem;
      line-height: 1.3;
    }
  }
  .home-blog-wrapper {
    display flex
    align-items: flex-start;
    margin 20px auto 0
    padding 0 20px
    max-width $homePageWidth
    .blog-list {
      flex auto
      width 0
      .abstract-wrapper {
        .abstract-item:last-child {
          margin-bottom: 0px;
        }
      }
    }
    .info-wrapper {
      position -webkit-sticky;
      position sticky;
      top 70px
      overflow hidden
      transition all .3s
      margin-left 15px
      flex 0 0 300px
      height auto
      box-shadow var(--box-shadow)
      border-radius $borderRadius
      box-sizing border-box
      padding 0 15px
      background var(--background-color)
      &:hover {
        box-shadow var(--box-shadow-hover)
      }
      h4 {
        color var(--text-color)
      }
      .category-wrapper {
        list-style none
        padding-left 0
        .category-item {
          margin-bottom .4rem
          padding: .4rem .8rem;
          transition: all .5s
          border-radius $borderRadius
          box-shadow var(--box-shadow)
          background-color var(--background-color)
          &:hover {
            transform scale(1.04)
            a {
              color $accentColor
            }
          }
          a {
            display flex
            justify-content: space-between
            align-items: center
            color var(--text-color)
            .post-num {
              width 1.6rem;
              height 1.6rem
              text-align center
              line-height 1.6rem
              border-radius $borderRadius
              background #eee
              font-size 13px
              color #fff
            }
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .home-blog {
    .hero {
      height 350px !important
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 1.2rem;
      }

      .description {
        font-size: 1rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }
    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .home-blog {
    .hero {
      height 350px !important
      img {
        max-height: 210px;
        margin: 2rem auto 1.2rem;
      }

      h1 {
        margin: 0 auto 1.8rem ;
        font-size: 1.2rem;
      }

      .description {
        font-size: 1rem;
      }

      .action-button {
        font-size: 1rem;
        padding: 0.6rem 1.2rem;
      }
    }

    .home-blog-wrapper {
      display block!important
      .blog-list {
        width auto
      }
      .info-wrapper {
        // display none!important
        margin-left 0
        .personal-info-wrapper {
          display none
        }
      }
    }
  }
}
</style>
