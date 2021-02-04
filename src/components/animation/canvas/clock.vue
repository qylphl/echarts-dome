<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="clock-content">
      <canvas id="clock" width="400" height="400"></canvas>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "时钟动画",
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
      // 画圆  表框
      var can = document.querySelector("#clock"),
        content = document.querySelector(".clock-content");
      content.style.height = content.offsetWidth + "px";
      var ctx = can.getContext("2d"); //给它做一个2d的绘画
      var x = 200, y = 200, r = 180;
      setInterval(() => {
        ctx.clearRect(0, 0, can.offsetWidth, can.offsetHeight);
        var now = new Date();
        var s = now.getSeconds();
        var m = now.getMinutes() + s / 60;
        var h = now.getHours() + m / 60;

        ctx.save(); //包裹有个独立的空间   下面不继承
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.restore(); //空间结束  与save成对出现   中间的只作用与这对中间的部分
        //    分刻度
        ctx.beginPath();
        for (var i = 0; i < 60; i++) {
          ctx.moveTo(x, y); //6度是  6*Math.Pi/180
          ctx.arc(x, y, r, (i * Math.PI) / 30, ((i + 1) * Math.PI) / 30);
        }
        ctx.closePath();
        ctx.stroke();
        //    画圆盖住分
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(x, y, (19 / 20) * r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        //    时刻度
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 2;
        for (var j = 0; j < 12; j++) {
          ctx.moveTo(x, y);
          ctx.arc(x, y, r, (j * Math.PI) / 6, ((j + 1) * Math.PI) / 6);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //    画圆盖住分
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(x, y, (9 / 10) * r, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        //    画秒针
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "gray";
        ctx.moveTo(x, y);
        ctx.arc(
          x,
          y,
          (r * 4) / 5,
          (s * Math.PI) / 30 - Math.PI / 2,
          (s * Math.PI) / 30 - Math.PI / 2
        );
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //    画分针
        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = 4;
        ctx.moveTo(x, y);
        ctx.arc(
          x,
          y,
          (r * 2) / 3,
          (m * Math.PI) / 30 - Math.PI / 2,
          (m * Math.PI) / 30 - Math.PI / 2
        );
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        //    画时针
        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 8;
        ctx.moveTo(x, y);
        ctx.arc(
          x,
          y,
          r / 2,
          (h * Math.PI) / 6 - Math.PI / 2,
          (h * Math.PI) / 6 - Math.PI / 2
        );
        ctx.closePath();
        ctx.stroke();
        ctx.restore();

        //中心点
        ctx.beginPath();
        ctx.save();
        ctx.fillStyle = "black";
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }, 1000);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.clock-content {
  width: 100%;
  #clock {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
