<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <!-- 边框线性运动特效 -->
    <div class="border-content-box">
      <div class="link link_miss">
        <a href="" class="a">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div class="bb"></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "边框线性运动动画",
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
/*设置幽灵按钮*/
.chart-content {
  height: 100%;
  .border-content-box {
    position: relative;
    width: 100%;
    height: calc(100% - 64px);
    background-color: rgba(2, 13, 70, 0.9);
    padding-top: 20px;
    box-sizing: border-box;
    .a {
      display: block;
      width: 180px;
      height: 50px;
      text-decoration: none;
      line-height: 50px;
      color: aquamarine;
      font-family: "微软雅黑";
      font-weight: bolder;
      border: 2px solid rgba(200, 155, 155, 0.3);
      padding-left: 20px;
      margin: 0 auto;
      box-sizing: border-box;
      -ms-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      transition: all 0.3s linear;
      position: relative;
      overflow: hidden;
      span {
        position: absolute;
        display: block;
        &:nth-child(1) {
          top: 0;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #03e9f4);
          animation: btn-anim1 2s linear infinite;
        }
        &:nth-child(2) {
          top: -100%;
          right: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(180deg, transparent, #03e9f4);
          animation: btn-anim2 2s linear infinite;
          animation-delay: 0.5s;
        }
        &:nth-child(3) {
          bottom: 0;
          right: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(270deg, transparent, #03e9f4);
          animation: btn-anim3 2s linear infinite;
          animation-delay: 1s;
        }
        &:nth-child(4) {
          bottom: -100%;
          left: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(360deg, transparent, #03e9f4);
          animation: btn-anim4 2s linear infinite;
          animation-delay: 1.5s;
        }
      }
    }
    .bb,
    .bb::before,
    .bb::after {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .bb {
      width: 200px;
      height: 200px;
      margin: auto;
      color: #69ca62;
      box-shadow: inset 0 0 0 1px rgba(105, 202, 98, 0.5);
      top: 20%;
      &::before,
      &::after {
        content: "";
        margin: -5%;
        box-shadow: inset 0 0 0 2px;
        animation: clipMe 8s linear infinite;
      }
      &::before {
        animation-delay: -4s;
      }
      &:hover {
        &::after,
        &::before {
          background-color: rgba(255, 0, 0, 0.3);
        }
      }
    }
  }
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}
@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}
@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}
@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

@keyframes clipMe {
  0%,
  100% {
    clip: rect(0px, 220px, 2px, 0px);
  }
  25% {
    clip: rect(0px, 2px, 220px, 0px);
  }
  50% {
    clip: rect(218px, 220px, 220px, 0px);
  }
  75% {
    clip: rect(0px, 220px, 220px, 218px);
  }
}
</style>
