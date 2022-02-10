---
home: true
heroText: vuepress-theme-reco
tagline: A simple and beautiful vuepress blog theme.
bgImage: bg.jpg
bgImageStyle: { height: '450px', color: '#fff' }
isShowTitleInHome: false
---

<style>
body{
  background-image: url('/bg.gif');
}
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 30px;
  width: 15px;
  height: 15px;
  font-size: 30px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
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
</style>
<script>
export default {
  mounted () {
    //  var options = {
    //   strings: ['vuepress-theme-reco', 'A simple and beautiful vuepress blog theme.'],
    //    typeSpeed: 100,   //打印速度
    //    startDelay: 30, //开始之前的延迟30毫秒
    //    loop: true     //是否循环
    // };
    // var typed = new Typed('.hero', options);
    const ifJanchor = document.getElementById("JanchorDown"); 
    ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
    let a = document.createElement('a');
    a.id = 'JanchorDown';
    a.className = 'anchor-down';
    document.getElementsByClassName('hero')[0].append(a);
    let targetA = document.getElementById("JanchorDown");
    targetA.addEventListener('click', e => { // 添加点击事件
      this.scrollFn();
    })   
  },

  methods: {
    scrollFn() {
      const windowH = document.getElementsByClassName('hero')[0].clientHeight; // 获取窗口高度
      document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
    }
  }
}
</script>
