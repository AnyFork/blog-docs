/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./docs/.vuepress/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        //首页blog box阴影
        box: '0 1px 8px 0 rgba(0, 0, 0, 0.1)',
        /**分类和标签box阴影 */
        item: '0 1px 8px 0 rgba(0, 0, 0, 0.1)'
      },
      color: {
        // 主题色
        primary: '#3eaf7c'
      }
    }
  },
  plugins: [],
  corePlugins: {
    // 禁用预检样式
    preflight: false
  }
}
