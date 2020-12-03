<template>
  <div class="main-content">
    <v-head
      :color="color"
      :themeColor="themeColor"
      :porpThemeType="themeType"
      @themeChoose="themeChoose"
    ></v-head>
    <div class="inner flex-box" :style="{'background-color': navColor[themeType]}"> 
      <v-nav :backgroundColor="navColor" :themeType="themeType"></v-nav>
      <div class="inner-content" :style="{'background-color': innerColor[themeType]}">

      </div>
    </div>
  </div>
</template>
<script>
import constant from "utils/constant";
import head from "components/head/head";
import nav from "components/nav/nav";
export default {
  data() {
    return {
      color: constant.COLOR,
      themeColor: constant.THEME_COLOR, // 主题的颜色
      themeType: 0, // 默认选中的主题
      navColor: constant.NAV_COLOR, // nav的背景颜色
      innerColor: constant.CONTENT_COLOR, // inner-content的背景颜色
    };
  },
  mounted() {},
  methods: {
    themeChoose(v) {
      this.themeType = v;
    },
  },
  components: { "v-head": head, "v-nav": nav },
};
</script>
<style lang="scss" scoped>
.main-content {
  .inner {
    width: 100%;
    height: calc(100vh - 70px);
    overflow: hidden;
    .inner-content{
        flex: 1;
        height: calc(100% - 32px);
        margin: 16px;
        padding: 24px;
        box-sizing: border-box;
    }
  }
}
</style>
