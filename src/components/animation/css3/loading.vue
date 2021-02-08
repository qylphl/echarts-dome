<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loading-content-box flex-box">
      <h1>
        <span style="animation-delay: 0s">L</span>
        <span style="animation-delay: 0.3s">O</span>
        <span style="animation-delay: 0.6s">A</span>
        <span style="animation-delay: 0.9s">D</span>
        <span style="animation-delay: 1.2s">I</span>
        <span style="animation-delay: 1.5s">N</span>
        <span style="animation-delay: 1.8s">G</span>
        <span style="animation-delay: 2.1s">.</span>
        <span style="animation-delay: 2.4s">.</span>
        <span style="animation-delay: 2.7s">.</span>
      </h1>
      <div class="progress-bar"></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "进度条加载动画",
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
.loading-content-box {
  width: 100%;
  padding-top: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font: 1.5rem Roboto, sans-serif;
    font-weight: 900;
    padding-bottom: 1rem;
    span {
      animation: load-text 1s infinite cubic-bezier(0.1, 0.15, 0.9, 1);
      display: inline-block;
    }
  }
  .progress-bar {
    background-color: #eaeaea;
    width: 300px;
    height: 25px;
    box-shadow: 1px 0px 2px rgba(0, 0, 0, .25), 0px 1px 2px rgba(0, 0, 0, .25);
    border-radius: 10px;
    position: relative;
    &:after {
      content: "";
      background-color: green;
      position: absolute;
      border-radius: 10px;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      animation: load 4s infinite linear;
    }
  }
}
@keyframes load-text {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes load {
  0% {
    width: 5%;
    background-color: red;
  }
  25% {
    background-color: orange;
  }
  50% {
    background-color: yellow;
  }
  75% {
    background-color: lightgreen;
  }
  90% {
    background-color: green;
    width: 100%;
  }
}
</style>
