//侧边栏
module.exports = {
  '/java/': [''],
  '/vue/': [''],
  '/nuxt/': ['', 'nuxtdeploy'],
  '/node/': ['', 'pm2', 'nohup'],
  '/devOps/nginx/': ['', 'nginxInstall', 'nginxGzip', 'nginxCache', 'nginxLocation', 'nginxLog'],
  '/devOps/docker/': [''],
  '/others/2022/': [
    '',
    {
      title: '杂聊',
      collapsable: true,
      children: ['20220215']
    }
  ],
  '/others/other/': ['', '20220302'],
  '/others/linux/': ['', 'baseCommand'],
  '/others/mysql/': ['', 'mysqlInstall']
}
