<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="can-content">
      <canvas id="can" width="1300" height="500"></canvas>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "跟随鼠标小圆动画",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      var canvas = document.querySelector("#can");
      var ctx = canvas.getContext("2d");
      var ballArray = new Array();
      //小球数组
      setInterval(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < ballArray.length; i++) {
          //update可能把自己删了
          ballArray[i].update();
          if (ballArray[i]) {
            ballArray[i].render();
          }
        }
      }, 20);
      canvas.addEventListener("mousemove", function (event) {
        new Ball({ x: event.offsetX, y: event.offsetY });
      });
      class Ball {
        constructor(w) {
          this.x = w.x;
          this.y = w.y;
          this.r = 30;
          this.color =
            "rgba(" +
            parseInt(Math.random() * 255) +
            "," +
            parseInt(Math.random() * 255) +
            "," +
            parseInt(Math.random() * 255) +
            "," +
            ".6" +
            ")";
          //背景色随机变化0-255
          // X的移动大小
          this.dX = Math.random() * 10 - 5;
          this.dY = Math.random() * 10 - 5;
          //半径的衰减
          this.dR = Math.random() + 0.3;
          //将实例化的小球放到数组里边
          ballArray.push(this);
        }
        update() {
          this.x -= this.dX;
          this.y -= this.dY;
          this.r -= this.dR;
          if (this.r <= 0) {
            this.r = 0.1;
            delete this;
          }
        }
        render() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.can-content {
  width: 100%;
  height: 500px;
  #can {
    display: block;
    width: 100%;
    height: 100%;
    background: black;
  }
}
</style>
