<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="simple-loadbox flex-box">
      <div class="loading-content flex-box" v-for="(msg, index) in classList" :key="index">
        <div :class="msg"></div>
      </div>
      <div class="loading-content flex-box">
        <div class="load-circle">
          <div class="load-container load-container1">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
          <div class="load-container load-container2">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
          <div class="load-container load-container3">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
            <div class="circle4"></div>
          </div>
        </div>
      </div>
      <div class="loading-content flex-box">
        <div class="fading-circle">
          <div class="sk-circle1 sk-circle"></div>
          <div class="sk-circle2 sk-circle"></div>
          <div class="sk-circle3 sk-circle"></div>
          <div class="sk-circle4 sk-circle"></div>
          <div class="sk-circle5 sk-circle"></div>
          <div class="sk-circle6 sk-circle"></div>
          <div class="sk-circle7 sk-circle"></div>
          <div class="sk-circle8 sk-circle"></div>
          <div class="sk-circle9 sk-circle"></div>
          <div class="sk-circle10 sk-circle"></div>
          <div class="sk-circle11 sk-circle"></div>
          <div class="sk-circle12 sk-circle"></div>
        </div>
      </div>
      <div class="loading-content flex-box">
        <div class="three-bounce">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
      <div class="loading-content flex-box">
        <div class="chasing-dots">
          <div class="dot1"></div>
          <div class="dot2"></div>
        </div>
      </div>
      <div class="loading-content flex-box">
        <div class="wave">
          <div class="rect1"></div>
          <div class="rect2"></div>
          <div class="rect3"></div>
          <div class="rect4"></div>
          <div class="rect5"></div>
        </div>
      </div>
      <div class="loading-content flex-box" style="width: 59.5%;">
        <div class="father">
          <div class="son1"></div>
          <div class="son2"></div>
          <div class="son3"></div>
          <div class="son4"></div>
          <div class="son5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "简约风格加载动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      classList: [
        "timer",
        "typing_loader",
        "location_indicator",
        "dashboard",
        // "battery",
        "magnifier",
        "help",
        "cloud",
        "eye",
        "coffee_cup",
        "square",
        "circle",
        "loader",
      ],
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
@import "style/loading/simpleLoading.scss";
@import "style/loading/simpleLoading2.scss";
.simple-loadbox {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .loading-content {
    width: 19%;
    height: 180px;
    text-align: center;
    margin-bottom: 20px;
    background-color: rgba(2, 13, 70, 0.9);
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  }
}
</style>
