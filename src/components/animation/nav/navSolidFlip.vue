<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="nav_menu flex-box">
      <div class="menu_item" v-for="(msg,index) in listData" :key="index">
        <div class="home">{{ msg.home }}</div>
        <div class="web_home">{{ msg.list }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "导航立体翻转效果",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
        listData: [{home:'首页',list:'网站首页'},{home:'首页1',list:'网站首页1'},{home:'首页2',list:'网站首页2'},{home:'首页3',list:'网站首页3'},]
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
  width: calc(100% - 120px);
  height: 50px;
  justify-content: space-around;
  align-items: center;
  margin: 80px 60px;
  color: #fff;
  .menu_item {
    position: relative;
    flex: 1;
    height: 100%;
    line-height: 50px;
    text-align: center;
    transform-style: preserve-3d;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
      transform: rotateX(90deg);
    }
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      perspective: 300px;
    }
    .home {
      background-color: #2094FB;
      z-index: 11;
      transform: translateZ(25px);
    }
    .web_home {
      background-color: rgba(137, 59, 232,.7);
      transform: translateY(25px) rotateX(-90deg);
    }
  }
}
</style>