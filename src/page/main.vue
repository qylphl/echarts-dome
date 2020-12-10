<template>
  <div class="main-content">
    <v-head
      :color="color"
      :themeColor="themeColor"
      :porpThemeType="themeType"
      @themeChoose="themeChoose"
    ></v-head>
    <div class="inner flex-box" :style="{ 'background-color': themeColor[themeType] }">
      <v-nav
        :defaultActive="this.$route.path"
        :backgroundColor="themeColor[themeType]"
        :navListColor="navListColor[themeType]"
        :themeType="themeType"
        :menuList="menuList"
      ></v-nav>
      <div class="inner-content" :style="{ 'background-color': innerColor[themeType] }">
        <router-view />
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
      color: constant.COLOR, // 图表配色选择
      themeColor: constant.THEME_COLOR, // 主题的颜色
      navListColor: constant.NAV_LIST_COLOR, // 导航字体的颜色
      themeType: 0, // 默认选中的主题
      innerColor: constant.CONTENT_COLOR, // inner-content的背景颜色
      // 导航菜单标题
      menuList: [
        { title: "柱状图", iconCls: "iconfont iconzhuzhuangtu", Vrouter: "barCharts" },
        { title: "饼状图", iconCls: "iconfont iconbingtu", Vrouter: "pieCharts" },
        { title: "折线图", iconCls: "iconfont iconzhexiantu", Vrouter: "" },
        { title: "漏斗图", iconCls: "iconfont iconloudoutu", Vrouter: "" },
        { title: "地图", iconCls: "iconfont iconditu", Vrouter: "" },
        { title: "雷达图", iconCls: "iconfont iconleidatu", Vrouter: "" },
        { title: "词云图", iconCls: "iconfont iconciyun", Vrouter: "" },
        { title: "气泡散点图", iconCls: "iconfont iconqipao", Vrouter: "" },
        { title: "双轴图", iconCls: "iconfont iconshuangzhoutu", Vrouter: "" },
        { title: "水滴图", iconCls: "iconfont iconshuiditu", Vrouter: "" },
        { title: "矩阵图", iconCls: "iconfont iconjuzhentu", Vrouter: "" },
        { title: "热力图", iconCls: "iconfont iconrelitu", Vrouter: "" },
        { title: "仪表盘", iconCls: "iconfont iconyibiaopan", Vrouter: "" },
      ],
    };
  },
  mounted() {},
  methods: {
    themeChoose(v) {
      this.themeType = v;
      this.$store.commit("changeThemType", this.themeType);
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
    .inner-content {
      flex: 1;
      height: calc(100% - 32px);
      margin: 16px;
      padding: 24px;
      box-sizing: border-box;
    }
  }
}
</style>
