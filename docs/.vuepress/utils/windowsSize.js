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
    window.onresize = () => {
      this.$nextTick(() => {
        this.getWindowSize()
        this.bulletinPopoverShowSetting()
      })
    }
  },
  methods: {
    getWindowSize() {
      this.winWidth = document.body.clientWidth
      this.winHeight = document.body.clientHeight
      console.log(`窗口大小:width:${this.winWidth},height:${this.winHeight}`)
    },
    bulletinPopoverShowSetting() {
      //当窗口小于500自动隐藏公告栏
      if (this.winWidth > 500) {
        sessionStorage.setItem('closeNote', 'true')
      }
    }
  }
}
