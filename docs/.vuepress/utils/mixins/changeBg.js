//首页typed特效和定时更新背景图片
import publicImages from '../publicImages.js'
import Typed from 'typed.js'
export default {
  data() {
    return {
      bgImageStyle: '',
      index: '',
      mixImage: [],
      typedObject: ''
    }
  },
  mounted() {
    this.changeBgImageStyle()
    this.setIntervalTimer()
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
      if (this.$frontmatter.needDefaultImages) {
        if (this.$frontmatter.bgImage instanceof Array) {
          this.mixImage = defaultImgaess.concat(this.$frontmatter.bgImage)
        } else {
          if (this.$frontmatter.bgImage) {
            this.mixImage.push(this.$frontmatter.bgImage)
            this.mixImage = mixImage.concat(defaultImgaess)
          } else {
            this.mixImage.push(defaultImgaess[0])
          }
        }
      } else {
        this.mixImage.push(this.$frontmatter.bgImage ? this.$frontmatter.bgImage : defaultImgaess[0])
      }
      //数组滤重
      this.mixImage = Array.from(new Set(this.mixImage))
      //获取随机图片
      let imageUrl = this.mixImage.length == 1 ? this.mixImage[0] : publicImages.getRandomImage(this.mixImage)
      //判断图片是否是远程图片
      const url = imageUrl.indexOf('http') > -1 || imageUrl.indexOf('http') > -1 ? imageUrl : this.$withBase(imageUrl)
      const initBgImageStyle = { textAlign: 'center', overflow: 'hidden', background: `url(${url}) center/cover no-repeat` }
      const { bgImageStyle } = this.$frontmatter
      this.bgImageStyle = bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
    },
    setIntervalTimer() {
      //判断是否被开启背景图片切换功能
      if (this.$frontmatter.isBgImagetrigger) {
        //定时切花背景图片
        this.index = window.setInterval(
          () => {
            const imageUrl = this.mixImage.length == 1 ? this.mixImage[0] : publicImages.getRandomImage(this.mixImage)
            //判断图片是否是远程图片
            const url = imageUrl.indexOf('http') > -1 || imageUrl.indexOf('http') > -1 ? imageUrl : this.$withBase(imageUrl)
            const initBgImageStyle = { textAlign: 'center', overflow: 'hidden', background: `url(${url}) center/cover no-repeat` }
            const { bgImageStyle } = this.$frontmatter
            this.bgImageStyle = bgImageStyle ? { ...initBgImageStyle, ...bgImageStyle } : initBgImageStyle
          },
          this.$frontmatter.bgImageSec ? this.$frontmatter.bgImageSec : 10000
        )
      }
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
    if (this.index) {
      window.clearInterval(this.index)
    }
    if (this.typedObject) {
      this.typedObject = null
    }
  }
}
