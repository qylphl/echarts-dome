<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="slider-nav-box flex-box">
      <div class="screen-box">
        <button
          v-for="(msg, index) in sliderNavList"
          :key="index"
          type="button"
          :class="{ basic_tab_select: true, active: chooseType == index }"
          @click="chooseType = index"
        >
          {{ msg }}
        </button>
        <p class="screen-box-content" :style="{'transform':'translate(' + chooseType * 80 + 'px, 0)'}"></p>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "滑块导航动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      sliderNavList: ["全部", "待办", "办结"],
      chooseType: 0,
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
.slider-nav-box {
  width: 100%;
  height: 120px;
  align-items: center;
  justify-content: center;
  .screen-box {
    position: relative;
    border: 1px solid #e2e1e1;
    border-radius: 30px;
    padding: 4px;
    background-color: #fff;
    margin: 0 auto;
    font-size: 0;
    button {
      position: relative;
      width: 80px;
      height: 36px;
      line-height: 36px;
      font-size: 20px;
      text-align: center;
      color: #333;
      border: 0;
      z-index: 1;
    }
    .active {
      color: #fff;
    }
    .screen-box-content {
      display: inline-block;
      position: absolute;
      width: 80px;
      height: 36px;
      background-color: #0874eb;
      border-radius: 30px;
      transition: all 0.35s;
      z-index: 0;
      left: 4px;
      top: 4px;
    }
  }
}
</style>