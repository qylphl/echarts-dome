<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox flex-box">
      <div class="slice" v-for="(msg, index) in classList" :key="index">
        <div :data-loader="msg"></div>
        <div>data-loader="{{ msg }}"</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "加载动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      classList: [
        "circle",
        "circle-side",
        "arrow-circle",
        "ball-scale",
        "ball-circle",
        "rectangle",
        "heart",
        "ball-rotate",
        "ball-pulse",
        "jumping",
        "satellite",
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
@import "style/loading/loading.min.scss";
.loadbox {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .slice {
    position: relative;
    width: 19%;
    height: 180px;
    text-align: center;
    margin-bottom: 20px;
    background-color: rgba(2, 13, 70, .9);
    border-radius: 5px;
    div {
      &:first-child {
        margin: 50px auto 0;
      }
      &:nth-child(2) {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 16px;
        bottom: 30px;
      }
    }
  }
}
</style>
