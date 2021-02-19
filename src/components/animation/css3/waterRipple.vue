<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="waves-content">
      <div class="waves"></div>
      <div class="radar">
        <div class="ripple"></div>
        <div class="ripple"></div>
        <!-- <div class="ripple"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "水波纹动画",
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
.waves-content {
  min-height: 300px;
  .waves {
    width: 25px;
    height: 25px;
    position: relative;
    background: rgba(0, 95, 240, 0.6);
    border-radius: 50%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    margin: 100px auto 150px;
    &:before,
    &:after {
      position: absolute;
      background: rgba(0, 95, 240, 0.3);
      margin-left: -12px;
      margin-top: -12px;
      width: 50px;
      height: 50px;
      content: "";
      display: block;
      border-radius: 50%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      animation: wave-animate 3s infinite ease-out;
    }
    &:after {
      opacity: 0;
      animation: wave-animate 3s 1.5s infinite ease-out;
    }
  }
  .radar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
    position: relative;
    margin: 0 auto;
    .ripple {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 1px solid red;
      animation: ripple 2s linear infinite;
      &:nth-child(1) {
        animation-delay: 0.666s;
      }
      &:nth-child(2) {
        animation-delay: 1.322s;
      }
    }
  }
}
@keyframes wave-animate {
  0% {
    transform: scale(0);
    opacity: 1;
    transform-origin: center;
  }
  100% {
    transform: scale(3);
    opacity: 0;
    transform-origin: center;
  }
}
@keyframes ripple {
  to {
    width: 90px;
    height: 90px;
    opacity: 0;
  }
}
</style>
