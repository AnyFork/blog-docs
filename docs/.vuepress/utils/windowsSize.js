//获取窗口尺寸大小
const windowsSize = {
  getWindowSize: () => {
    let winWidth = ''
    let winHeight = ''
    // 获取窗口宽度
    if (window.innerWidth) {
      winWidth = window.innerWidth
    } else if (document.body && document.body.clientWidth) {
      winWidth = document.body.clientWidth
    }
    // 获取窗口高度
    if (window.innerHeight) {
      winHeight = window.innerHeight
    } else if (document.body && document.body.clientHeight) {
      winHeight = document.body.clientHeight
    }
    // 通过深入 Document 内部对 body 进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
      winHeight = document.documentElement.clientHeight
      winWidth = document.documentElement.clientWidth
    }
    return { winHeight, winWidth }
  },
  bulletinPopoverShowSetting: () => {
    const { winWidth } = windowsSize.getWindowSize()
    //当窗口小于500自动隐藏公告栏
    if (winWidth > 500) {
      sessionStorage.setItem('closeNote', 'true')
    }
  }
}

export default windowsSize
