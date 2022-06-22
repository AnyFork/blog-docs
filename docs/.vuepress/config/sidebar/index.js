//侧边栏
module.exports = {
  '/java/': [''],
  '/vue/': [''],
  '/nuxt/': ['', 'nuxtdeploy', 'nuxtInfo'],
  '/node/': ['', 'pm2', 'nohup', 'tools'],
  '/devOps/nginx/': ['', 'nginxInstall', 'nginxGzip', 'nginxCache', 'nginxLocation', 'nginxLog'],
  '/devOps/docker/': [''],
  '/devOps/redis/': ['', 'install'],
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
