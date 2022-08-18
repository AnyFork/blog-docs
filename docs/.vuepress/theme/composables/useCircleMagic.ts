import { onMounted } from "vue";
/**
 * 冒泡效果canvas实现
 * @param options
 */
function circleMagic(options: any) {
  let width: number;
  let height: number;
  let canvas: any;
  let ctx: any;
  let animateHeader = true;
  const circles: Array<any> = [];

  //如果调用circleMagic函数没有传入参数options,会使用默认样式
  const settings = options || {
    color: "rgba(255,255,255,.5)",
    radius: 10,
    density: 0.3,
    clearOffset: 0.2,
  };

  //获取bubbles 元素节点, 这个节点在banner中
  let container = document.getElementById("bubbles") as HTMLElement;
  if (!container) {
    throw new Error("bubbles dom is not exist !!");
  }
  const initContainer = () => {
    width = container.offsetWidth;
    height = container.offsetHeight - 120;

    //创建canvas画布元素
    initCanvas();
    canvas = document.getElementById("homeTopCanvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "absolute";
    canvas.style.left = "0";
    canvas.style.bottom = "0";
    ctx = canvas.getContext("2d");

    //  create circles 画出泡泡
    for (let x = 0; x < width * settings.density; x++) {
      const c = new Circle();
      circles.push(c);
    }
    animate();
  };
  initContainer();
  addListeners();

  //Init canvas element
  function initCanvas() {
    const canvasElement = document.createElement("canvas") as HTMLCanvasElement;
    canvasElement.id = "homeTopCanvas";
    canvasElement.style.pointerEvents = "none";
    container.appendChild(canvasElement);
    canvasElement.parentElement.style.overflow = "hidden";
  }

   // Event handling
  function addListeners() {
    window.addEventListener("scroll", scrollCheck, false);
    window.addEventListener("resize", resize, false);
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) {
      animateHeader = false;
    } else {
      animateHeader = true;
    }
  }

  function resize() {
    width = container.clientWidth;
    height = container.clientHeight;
    container.height = height + "px";
    canvas.width = width;
    canvas.height = height;
  }

  function animate() {
    if (animateHeader) {
      // 刷新画布区域
      ctx.clearRect(0, 0, width, height);
      for (const i in circles) {
        circles[i].draw();
      }
    }
    requestAnimationFrame(animate);
  }

  // 设置随机颜色
  function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const alpha = Math.random().toPrecision(2);
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  }

  //  Canvas manipulation

  function Circle() {
    const that = this;

    // constructor
    (function () {
      that.pos = {};
      init();
    })();

    function init() {
      that.pos.x = Math.random() * width;
      that.pos.y = height + Math.random() * 100;
      that.alpha = 0.1 + Math.random() * settings.clearOffset;
      that.scale = 0.1 + Math.random() * 0.2;
      that.speed = Math.random() * 0.6;
      if (settings.color === "random") {
        that.color = randomColor();
      } else {
        that.color = settings.color;
      }
    }

    this.draw = function () {
      if (that.alpha <= 0) {
        init();
      }
      that.pos.y -= that.speed;
      that.alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(
        that.pos.x,
        that.pos.y,
        that.scale * settings.radius,
        0,
        2 * Math.PI,
        false
      );
      ctx.fillStyle = that.color;
      ctx.fill();
      ctx.closePath();
    };
  }
}

export const useCircleMagic = () => {
  onMounted(() => {
    circleMagic({
      radius: 15,
      density: 0.3,
      //气泡随机颜色
      color: "random",
      clearOffset: 0.2,
    });
  });
};
