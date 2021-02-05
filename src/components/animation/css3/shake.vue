<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="shake-content-box">
      <div :class="'loader font' + Number(index + 1)" v-for="(list, index) in shakeNum" :key="index">
        <span>L</span>
        <span class="span2">O</span>
        <span class="span3">A</span>
        <span class="span4">D</span>
        <span class="span5">I</span>
        <span class="span6">N</span>
        <span class="span7">G</span>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "字体抖动动画",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      shakeNum: 4,
    };
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
.shake-content-box {
  width: 100%;
  height: 400px;
  margin-top: 70px;
  padding-left: 14%;
  box-sizing: border-box;
  .loader {
    width: 100%;
    overflow: hidden;
    font-size: 45px;
    text-align: center;
    margin-top: 30px;
    span {
      -moz-animation: loading 1s linear infinite -0.8s;
      -webkit-animation: loading 1s linear infinite -0.8s;
      animation: loading 1s linear infinite -0.8s;
      float: left;
    }
    .span2 {
      -moz-animation: loading 1s linear infinite -0.2s;
      -webkit-animation: loading 1s linear infinite -0.2s;
      animation: loading 1s linear infinite -0.2s;
    }
    .span3 {
      -moz-animation: loading 1s linear infinite -0.5s;
      -webkit-animation: loading 1s linear infinite -0.5s;
      animation: loading 1s linear infinite -0.5s;
    }
    .span4 {
      -moz-animation: loading 1s linear infinite -1.1s;
      -webkit-animation: loading 1s linear infinite -1.1s;
      animation: loading 1s linear infinite -1.1s;
    }
    .span5 {
      -moz-animation: loading 1s linear infinite -0.36s;
      -webkit-animation: loading 1s linear infinite -0.36s;
      animation: loading 1s linear infinite -0.36s;
    }
    .span6 {
      -moz-animation: loading 1s linear infinite -0.65s;
      -webkit-animation: loading 1s linear infinite -0.65s;
      animation: loading 1s linear infinite -0.65s;
    }
    .span7 {
      -moz-animation: loading 1s linear infinite -0.93s;
      -webkit-animation: loading 1s linear infinite -0.93s;
      animation: loading 1s linear infinite -0.93s;
    }
  }
  .font1 {
    font-family: "Helvetica", Arial, sans-serif;
  }
  .font2 {
    font-family: Impact;
  }
  .font3 {
    font-family: "Webdings";
  }
  .font4 {
    font-family: "Comic Sans MS", sans-serif;
    font-weight: bold;
  }
}
@-moz-keyframes loading {
  0%,
  100% {
    -moz-transform: scale(1) rotateZ(0deg);
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }
  26% {
    -moz-transform: scale(1.1) rotateZ(12deg);
    transform: scale(1.1) rotateZ(12deg);
    opacity: 0.2;
  }
  76% {
    -moz-transform: scale(0.8) rotateZ(-8deg);
    transform: scale(0.8) rotateZ(-8deg);
    opacity: 0.6;
  }
}
@-webkit-keyframes loading {
  0%,
  100% {
    -webkit-transform: scale(1) rotateZ(0deg);
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }
  26% {
    -webkit-transform: scale(1.1) rotateZ(12deg);
    transform: scale(1.1) rotateZ(12deg);
    opacity: 0.2;
  }
  76% {
    -webkit-transform: scale(0.8) rotateZ(-8deg);
    transform: scale(0.8) rotateZ(-8deg);
    opacity: 0.6;
  }
}
@keyframes loading {
  0%,
  100% {
    -moz-transform: scale(1) rotateZ(0deg);
    -ms-transform: scale(1) rotateZ(0deg);
    -webkit-transform: scale(1) rotateZ(0deg);
    transform: scale(1) rotateZ(0deg);
    opacity: 1;
  }
  26% {
    -moz-transform: scale(1.1) rotateZ(12deg);
    -ms-transform: scale(1.1) rotateZ(12deg);
    -webkit-transform: scale(1.1) rotateZ(12deg);
    transform: scale(1.1) rotateZ(12deg);
    opacity: 0.2;
  }
  76% {
    -moz-transform: scale(0.8) rotateZ(-8deg);
    -ms-transform: scale(0.8) rotateZ(-8deg);
    -webkit-transform: scale(0.8) rotateZ(-8deg);
    transform: scale(0.8) rotateZ(-8deg);
    opacity: 0.6;
  }
}
</style>
