<template>
  <div class="main-content">
    <v-head
      :color="color"
      :themeColor="themeColor"
      :porpThemeType="themeType"
      :headerNavList="headerNavList"
      :defaultHeaderNavType="defaultHeaderNavType"
      @themeChoose="themeChoose"
      @navMenuChoose="navMenuChoose"
    ></v-head>
    <div
      class="inner flex-box"
      :style="{ 'background-color': themeColor[themeType] }"
    >
      <v-nav
        :defaultNavType="defaultNavType"
        :backgroundColor="themeColor[themeType]"
        :navListColor="navListColor[themeType]"
        :themeType="themeType"
        :menuList="menuList[defaultHeaderNavType]"
      ></v-nav>
      <div
        class="inner-content"
        :style="{ 'background-color': innerColor[themeType] }"
      >
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
      // 头部相关数据
      headerNavList: [
        { title: "图表", navRouter: "/main" },
        { title: "动效", navRouter: "/animation" },
        { title: "组件", navRouter: "/assembly" },
        { title: "规范", navRouter: "" },
      ], // 头部导航菜单
      defaultHeaderNavType: 0, // 默认选中的头部导航菜单索引
      // 二级导航相关数据
      defaultActive: this.$route.path, // 默认展示的页面路由
      defaultNavType: 0,
      innerColor: constant.CONTENT_COLOR, // inner-content的背景颜色
      // 导航菜单标题
      menuList: [
        [
          { title: "柱状图", iconCls: "iconfont iconzhuzhuangtu", Vrouter: "barCharts" },
          { title: "饼状图", iconCls: "iconfont iconbingtu", Vrouter: "pieCharts" },
          { title: "折线图", iconCls: "iconfont iconzhexiantu", Vrouter: "lineCharts" },
          { title: "漏斗图", iconCls: "iconfont iconloudoutu", Vrouter: "funnelCharts" },
          { title: "地图", iconCls: "iconfont iconditu", Vrouter: "mapCharts" },
          { title: "雷达图", iconCls: "iconfont iconleidatu", Vrouter: "radarCharts" },
          { title: "仪表盘", iconCls: "iconfont iconyibiaopan", Vrouter: "dashboardCharts" },
          { title: "词云图", iconCls: "iconfont iconciyun", Vrouter: "wordCharts" },
          { title: "散点气泡图", iconCls: "iconfont iconqipao", Vrouter: "scatterCharts" },
          { title: "双轴图", iconCls: "iconfont iconshuangzhoutu", Vrouter: "biaxialCharts" },
          { title: "水滴图", iconCls: "iconfont iconshuiditu", Vrouter: "waterCharts" },
          { title: "矩阵图", iconCls: "iconfont iconjuzhentu", Vrouter: "matrixCharts" },
          { title: "热力图", iconCls: "iconfont iconrelitu", Vrouter: "heatCharts" },
        ],
        [
          { title: "导航和菜单", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "表单和按钮", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "选择和筛选", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "登录和背景", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "轮播和切换", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "加载和上传", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "CSS3动画", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "SVG动画", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "Canvas动画", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
          { title: "其他", iconCls: "iconfont iconrelitu", Vrouter: "animation" },
        ]
      ],
    };
  },
  watch: {
    $route: "getRouterName",
  },
  mounted() {
    this.getRouterName();
  },
  methods: {
    themeChoose(v) {
      this.themeType = v;
      this.$store.commit("changeThemType", this.themeType);
    },
    // 头部一级导航菜单的选择
    navMenuChoose(v) {
      this.defaultHeaderNavType = v.defaultHeaderNavType;
    },
    // 拿到刷新页面的路由
    getRouterName() {
      let that = this,
        pathLen = this.$route.path.lastIndexOf("/"),
        // 头部菜单导航
        headPathName =
          pathLen > -1 && pathLen == 0
            ? this.$route.path
            : pathLen > -1
            ? this.$route.path.substring(0, pathLen)
            : "",
        // 左侧导航菜单
        navPathName =
          pathLen > -1
            ? this.$route.path.substring(pathLen + 1, this.$route.path.length)
            : "";
      // 头部选中的导航菜单
      that.headerNavList.filter(function (item, index) {
        if (item.navRouter && item.navRouter == headPathName) {
          that.defaultHeaderNavType = index;
          return;
        }
      });
      // 左侧二级导航菜单
      that.menuList[that.defaultHeaderNavType].filter(function (item, index) {
        if (item.Vrouter && navPathName && item.Vrouter == navPathName) {
          that.defaultNavType = index;
          return;
        } else {
          that.defaultNavType = 0;
          return;
        }
      });
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
