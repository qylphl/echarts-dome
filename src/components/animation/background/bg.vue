<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="bg-content-box flex-box">
      <div class="content">
        <div class="nav">
          <a class="gv" v-for="(item,index) in navList" :key="index">{{item}}</a>
        </div>
        <canvas id="canvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
// import { animation } from "components/animation/background/js/star";
export default {
  props: {
    title: {
      default: "动态星空背景动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      hue: 217,
      stars: [],
      count: 0,
      maxStars: 1300, //星星数量
      w: window.innerWidth,
      h: window.innerHeight,
      navList: ['建站服务','仿站技术','作品案例','工 作 站','资讯中心','在线帮助'],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initCanvas();
    window.onresize = () => {
      this.initCanvas();
    };
    // animation();
  },
  methods: {
    initCanvas() {
      var oldThat = this;
      let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        winW = window.innerWidth,
        winH = window.innerHeight;
      canvas.width = winW;
      canvas.height = winH;
      this.w = canvas.width;
      this.h = canvas.height;
      let canvas2 = document.createElement("canvas"),
        ctx2 = canvas2.getContext("2d");
      canvas2.width = 100;
      canvas2.height = 100;
      var half = canvas2.width / 2,
        gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
      gradient2.addColorStop(0.025, "#CCC");
      gradient2.addColorStop(0.1, "hsl(" + oldThat.hue + ", 61%, 33%)");
      gradient2.addColorStop(0.25, "hsl(" + oldThat.hue + ", 64%, 6%)");
      gradient2.addColorStop(1, "transparent");

      ctx2.fillStyle = gradient2;
      ctx2.beginPath();
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill();

      var Star = function () {
        this.orbitRadius = oldThat.random(
          oldThat.maxOrbit(oldThat.w, oldThat.h)
        );
        this.radius = oldThat.random(60, this.orbitRadius) / 8;
        //星星大小
        this.orbitX = oldThat.w / 2;
        this.orbitY = oldThat.h / 2;
        this.timePassed = oldThat.random(0, oldThat.maxStars);
        this.speed = oldThat.random(this.orbitRadius) / 50000;
        //星星移动速度
        this.alpha = oldThat.random(2, 10) / 10;

        oldThat.count++;
        oldThat.stars[oldThat.count] = this;
      };

      Star.prototype.draw = function () {
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = oldThat.random(10);

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(
          canvas2,
          x - this.radius / 2,
          y - this.radius / 2,
          this.radius,
          this.radius
        );
        this.timePassed += this.speed;
      };

      for (var i = 0; i < this.maxStars; i++) {
        new Star();
      }

      function animation() {
        ctx.globalCompositeOperation = "source-over";
        ctx.globalAlpha = 0.5; //尾巴
        ctx.fillStyle = "hsla(" + oldThat.hue + ", 64%, 6%, 2)";
        ctx.fillRect(0, 0, oldThat.w, oldThat.h);

        ctx.globalCompositeOperation = "lighter";
        for (var i = 1, l = oldThat.stars.length; i < l; i++) {
          oldThat.stars[i].draw();
        }

        window.requestAnimationFrame(animation);
      }

      animation();
    },
    random(min, max) {
      if (arguments.length < 2) {
        max = min;
        min = 0;
      }
      if (min > max) {
        var hold = max;
        max = min;
        min = hold;
      }
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    maxOrbit(x, y) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      //星星移动范围，值越大范围越小，
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.bg-content-box {
  position: relative;
  height: 800px;
  width: 100%;
  .content {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: relative;
    .nav {
      width: 804px;
      height: auto;
      position: absolute;
      z-index: 30;
      top: 330px;
      left: 50%;
      margin-left: -402px;
      a.gv {
        text-decoration: none;
          background: url('../../../../src/assets/img/nav_gv.png') repeat 0px 0px;
        width: 130px;
        height: 43px;
        display: block;
        text-align: center;
        line-height: 43px;
        cursor: pointer;
        float: left;
        margin: 8px 2px 8px 2px;
        font: 18px/43px "microsoft yahei";
        color: #066197;
        span {
          display: none;
        }
        &:hover {
          background: url('../../../../src/assets/img/nav_gv.png') repeat 0px -43px;
          color: #1d7eb8;
          -webkit-box-shadow: 0 0 6px #1d7eb8;
          box-shadow: 0 0 6px #1d7eb8;
          transition-duration: 0.5s;
        }
      }
    }
    canvas {
      width: 100%;
      height: 100%;
      display: inline-block;
      vertical-align: baseline;
      position: absolute;
    }
  }
}
</style>
