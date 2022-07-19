export default {
  data() {
    return {
      winWidth: 800,
      winHeight: 1000
    }
  },
  mounted() {
    this.getWindowSize()
    this.bulletinPopoverShowSetting()
    //监听浏览器窗口变化修改高度和宽度
    window.onresize = this.resize()
  },
  methods: {
    getWindowSize() {
      this.winWidth = document.body.clientWidth
      this.winHeight = document.body.clientHeight
    },
    bulletinPopoverShowSetting() {
      //当窗口小于500自动隐藏公告栏
      if (this.winWidth > 500) {
        sessionStorage.setItem('closeNote', 'true')
      }
    },
    resize() {
      this.$nextTick(() => {
        this.getWindowSize()
        this.bulletinPopoverShowSetting()
      })
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.resize())
  }
}
