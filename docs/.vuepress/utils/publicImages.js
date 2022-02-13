//获取public/images/index文件下所有的图片,用于系统默认首页顶部图片和用户自定义图片混合或单独使用
export default {
  //获取指定文件夹下面的图片
  getPublicImages: () => {
    const imageArray = []
    const files = require.context('../public/images/index', false, /.png|jpg$/)
    // 遍历输出匹配结果
    files.keys().forEach((path) => {
      //匹配path为./xx的格式，匹配./的后面的部分名称
      const fileName = path.replace(/(.*\/)*([\s\S]*?)/gi, '$2')
      //使用this.publicPath 拼接图片路径
      const filePath = 'images/index/' + fileName
      imageArray.push(filePath)
    })
    return imageArray
  },
  //随机获取一张图片
  getRandomImage: (imageArray) => {
    const randomIndex = Math.floor(Math.random() * imageArray.length)
    return imageArray[randomIndex]
  }
}
