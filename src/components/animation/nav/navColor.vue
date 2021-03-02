<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="nav_menu flex-box">
      <div class="nav">
        <a
          href="#"
          :class="{ 'nav-item': true, 'is-active': chooseType == index }"
          :active-color="msg.color"
          v-for="(msg, index) in listItem"
          :key="index"
          :style="{ color: chooseType == index ? msg.color : '#83818c' }"
          @click="chooseType = index"
          >{{ msg.title }}</a>
        <span
          class="nav-indicator"
          :style="{'background-color': listItem[chooseType].color, 'left': Number(90 * chooseType + 20) + 'px' }"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "导航高亮变色动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      listItem: [
        { title: "首页", color: "orange" },
        { title: "关于我们", color: "green" },
        { title: "公司简介", color: "blue" },
        { title: "产品中心", color: "red" },
        { title: "联系我们", color: "rebeccapurple" },
      ],
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
.nav_menu {
  width: 100%;
  height: max-content;
  padding: 60px 0;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  box-sizing: border-box;
  .nav {
    display: inline-flex;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    background-color: #fff;
    padding: 0 20px;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, 0.8);
    box-sizing: border-box;
    .nav-item {
      width: 90px;
      color: #83818c;
      padding: 20px 0;
      text-decoration: none;
      text-align: center;
      transition: 0.3s;
      z-index: 1;
      font-size: 14px;
      font-family: "DM Sans", sans-serif;
      position: relative;
      box-sizing: border-box;
      &:before {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: #dfe2ea;
        border-radius: 8px 8px 0 0;
        opacity: 0;
        transition: 0.3s;
      }
    }
    .nav-item:not(.is-active):hover:before {
      opacity: 1;
      bottom: 0;
    }

    .nav-item:not(.is-active):hover {
      color: #333;
    }
    .nav-indicator {
      width: 90px;
      position: absolute;
      left: 0;
      bottom: 0;
      height: 4px;
      transition: 0.4s;
      height: 5px;
      z-index: 1;
      border-radius: 8px 8px 0 0;
    }
  }
}
</style>