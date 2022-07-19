//首页typed特效和定时更新背景图片
import publicImages from '../publicImages.js'
import Typed from 'typed.js'
export default {
  data() {
    return {
      bgImageStyle: '',
      mixImage: [],
      ImageHight: '',
      typedObject: '',
      isBgImagetrigger: false,
      bgImageSec:''
    }
  },
  mounted() {
    this.changeBgImageStyle()
    //打印字符
    this.$nextTick(() => {
      setTimeout(() => {
        const el = document.querySelector('.mainTitle')
        if (el) {
          this.typedFction()
        }
      }, 500)
    })
  },
  methods: {
    changeBgImageStyle() {
      //默认的背景图片，目录public/images/index
      const defaultImgaess = publicImages.getPublicImages()
      // 是否需要和默认图片合并
      const needDefaultImages = this.$frontmatter.needDefaultImages
      // 是否开启自动播放，不开启每次刷新更换一个
      this.isBgImagetrigger = this.$frontmatter.isBgImagetrigger
      // 图片轮播时间间隔
      this.bgImageSec=this.$frontmatter.bgImageSec
      if (needDefaultImages) {
        if (this.$frontmatter.bgImage instanceof Array) {
          this.mixImage = defaultImgaess.concat(this.$frontmatter.bgImage)
        } else {
          if (this.$frontmatter.bgImage) {
            this.mixImage.push(this.$frontmatter.bgImage)
            this.mixImage = this.mixImage.concat(defaultImgaess)
          } else {
            this.mixImage = this.mixImage.concat(defaultImgaess)
          }
        }
      } else {
        if (this.$frontmatter.bgImage instanceof Array) {
          this.mixImage = this.$frontmatter.bgImage
        } else {
          if (this.$frontmatter.bgImage) {
            this.mixImage.push(this.$frontmatter.bgImage)
          } else {
            this.mixImage = this.mixImage.concat(defaultImgaess)
          }
        }
      }
      //未开启自动播放，随机一张图片
      this.mixImage = this.isBgImagetrigger ? this.mixImage : [publicImages.getRandomImage(this.mixImage)]
      //数组滤重
      this.mixImage = Array.from(new Set(this.mixImage))
      //定义新数组
      const newImage = []
      //数组图片判断
      this.mixImage.forEach((imageUrl) => {
        //判断图片是否是远程图片
        const url = imageUrl.indexOf('http') > -1 || imageUrl.indexOf('https') > -1 ? imageUrl : this.$withBase(imageUrl)
        newImage.push(url)
      })
      this.mixImage = newImage
      const initBgImageStyle = { textAlign: 'center', overflow: 'hidden' }
      const { bgImageStyle } = this.$frontmatter
      this.bgImageStyle = bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
      //背景图高度
      this.ImageHight = Number(this.bgImageStyle.height.slice(0, -2))
    },
    typedFction() {
      //输入的主标题为数组时，通过typed进行打印，否则原样显示
      if (this.$frontmatter.heroText instanceof Array) {
        this.typedObject = new Typed('.mainTitle', {
          //打印的字符串数组
          strings: this.$frontmatter.heroText,
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
  },
  destroyed() {
    if (this.typedObject) {
      this.typedObject = null
    }
  }
}
