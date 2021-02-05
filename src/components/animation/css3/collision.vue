<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <!-- 元素临近相融合特效 -->
    <div class="box">
      <div class="ball1"></div>
      <div class="ball2"></div>
    </div>
    <!-- 小球上下运动 -->
    <div>
      <div class="animate-bounce animate-bounce-up"></div>
      <div class="animate-bounce animate-bounce-down"></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "水球碰撞相融动画",
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
  mounted() {},
  methods: {},
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 100px;
  margin: 50px auto;
  position: relative;
  filter: contrast(15);
  background: #fff;
  .ball1 {
    width: 60px;
    height: 60px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 20px;
    animation: lef ease-out 4s infinite;
    filter: blur(6px);
  }
  .ball2 {
    width: 30px;
    height: 30px;
    background: #0000ff;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 35px;
    animation: rig ease-out 4s infinite;
    filter: blur(6px);
  }
 
}
 .animate-bounce {
    border-radius: 50%;
    background: #f00;
    width: 60px;
    height: 60px;
    margin: 40px auto;
  }
  .animate-bounce-up {
    -webkit-animation: bounce-up 1.4s linear infinite;
    animation: bounce-up 1.4s linear infinite;
  }
  .animate-bounce-down {
    background: #000;
    -webkit-animation: bounce-down 1.5s linear infinite;
    animation: bounce-down 1.5s linear infinite;
  }
@keyframes lef {
  0% {
    left: 0;
  }

  100% {
    left: 50%;
  }
}
@keyframes rig {
  0% {
    right: 0;
  }

  100% {
    right: 50%;
  }
}

@-webkit-keyframes bounce-down {
  25% {
    -webkit-transform: translateY(-10px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(10px);
  }
}
@keyframes bounce-down {
  25% {
    transform: translateY(-10px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(10px);
  }
}
@-webkit-keyframes bounce-up {
  25% {
    -webkit-transform: translateY(10px);
  }
  50%,
  100% {
    -webkit-transform: translateY(0);
  }
  75% {
    -webkit-transform: translateY(-10px);
  }
}
@keyframes bounce-up {
  25% {
    transform: translateY(10px);
  }
  50%,
  100% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
}
</style>
