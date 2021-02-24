<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="container flex-box">
      <div class="box fleex-box">
        <div class="img">
          <img src="../../../../src/assets/img/echarts_logo.png" />
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
      default: "新拟态图标/按钮悬停动效",
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
.container {
  width: 100%;
  height: calc(100% - 64px);
  min-height: 438px;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  background-color: #efeeee;
  .box {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100px;
    height: 140px;
    margin: 20px;
    .img {
      width: 100px;
      height: 100px;
      box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.1),
        -18px -18px 30px rgba(255, 255, 255, 1);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #efeeee;
      transition: box-shadow 0.2s ease-out;
      position: relative;
      img {
        width: 60px;
        transition: width 0.2s ease-out;
      }
      &:hover {
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.2),
          0px 0px 0px rgba(255, 255, 255, 0.8),
          inset 18px 18px 30px rgba(0, 0, 0, 0.1),
          inset -18px -18px 30px rgba(255, 255, 255, 1);
        transition: box-shadow 0.2s ease-out;
        img {
          width: 58px;
          transition: width 0.2s ease-out;
        }
      }
    }
  }
}
</style>