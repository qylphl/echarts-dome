<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="box">
      <div class="ib">
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
        <div class="i"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "数字翻转动画",
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
  width: 100%;
  margin-top: 110px;
  .ib {
    position: relative;
    width: 140px;
    height: 200px;
    margin: 0 auto;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    .i {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      counter-increment: i ii;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-animation: r 10s infinite;
      animation: r 10s infinite;
      &::before {
        content: counter(i);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 12em;
        background-color: #fff;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-shadow: inset 0 0 20px 5px rgba(0, 0, 0, 0.5);
        clip: rect(0, 140px, 100px, 0);
      }
      &::after {
        content: counter(ii);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 12em;
        background-color: #fff;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-shadow: inset 0 0 20px 5px rgba(0, 0, 0, 0.5);
        clip: rect(100px, 140px, 200px, 0);
        -webkit-transform: rotateX(180.1deg);
        transform: rotateX(180.1deg);
      }
      &:nth-of-type(1) {
        -webkit-animation-delay: -9s;
        animation-delay: -9s;
        z-index: 9;
      }
      &:nth-of-type(2) {
        -webkit-animation-delay: -8s;
        animation-delay: -8s;
        z-index: 8;
      }
      &:nth-of-type(3) {
        -webkit-animation-delay: -7s;
        animation-delay: -7s;
        z-index: 7;
      }
      &:nth-of-type(4) {
        -webkit-animation-delay: -6s;
        animation-delay: -6s;
        z-index: 6;
      }
      &:nth-of-type(5) {
        -webkit-animation-delay: -5s;
        animation-delay: -5s;
        z-index: 5;
      }
      &:nth-of-type(6) {
        -webkit-animation-delay: -4s;
        animation-delay: -4s;
        z-index: 4;
      }
      &:nth-of-type(7) {
        -webkit-animation-delay: -3s;
        animation-delay: -3s;
        z-index: 3;
      }
      &:nth-of-type(8) {
        -webkit-animation-delay: -2s;
        animation-delay: -2s;
        z-index: 2;
      }
      &:nth-of-type(9) {
        -webkit-animation-delay: -1s;
        animation-delay: -1s;
        z-index: 1;
      }
      &:nth-of-type(10) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        z-index: 0;
      }
      &:nth-of-type(1) {
        counter-reset: i -1;
      }
      &:nth-of-type(10) {
        counter-reset: ii -1;
      }
    }
  }
}
@-webkit-keyframes r {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  10%,
  19% {
    visibility: visible;
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
  }
  20%,
  90% {
    visibility: hidden;
  }
  90.1%,
  100% {
    visibility: visible;
    -webkit-transform: rotateX(-360deg);
    transform: rotateX(-360deg);
  }
}
@keyframes r {
  0% {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  10%,
  19% {
    visibility: visible;
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
  }
  20%,
  90% {
    visibility: hidden;
  }
  90.1%,
  100% {
    visibility: visible;
    -webkit-transform: rotateX(-360deg);
    transform: rotateX(-360deg);
  }
}
</style>
