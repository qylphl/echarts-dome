<template>
  <div class="content flex-box one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 漏斗图 -->
      <div class="content-box flex-box">
        <div class="pie-box" v-for="(item, index) in funnelOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Funnel :deploy="item" :title="item.boxTitle"></Funnel>
        </div>
      </div>
      <!-- 3d立体漏斗图 -->
      <div class="content-box flex-box">
        <div class="pie-box" v-for="(item, index) in solidFunnelOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Funnel :deploy="item" :title="item.boxTitle"></Funnel>
        </div>
         <!-- 3d立体漏斗图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <SolidFunnel></SolidFunnel>
        </div>
         <!-- 3d立体金字塔图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <PyramidFunnel></PyramidFunnel>
        </div>
      </div>
    </div>
    <div class="right-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6'}">
      <Subnuv
        ref="subnuv"
        :dataList="rightList"
        :titleColor="themeType == 1 ? '#b0c9f0' : '#333'"
        @chooseTitle="chooseRightTitle"
      ></Subnuv>
    </div>
  </div>
</template>

<script>
import Subnuv from "components/nav/subnav";
import Funnel from "components/chartsPublic/charts";
import SolidFunnel from "components/funnel/3dFunnel";
import PyramidFunnel from "components/funnel/3dPyramid";
import FunnelOption from "utils/funnelOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: [{ value: 40, name: "违纪行为" }, { value: 30, name: "违法行为" }, { value: 20, name: "违法乱纪" }, { value: 10, name: "其他" }],
      nailData: [{ value: 30, name: '挪用资金' }, { value: 30, name: '行使权利过程中发生的其他违法犯罪行为' }, { value: 30, name: '破坏选举' }, { value: 30, name: '造谣传播丑化党和国家形象' }, { value: 120, name: '非法转让、倒卖土地使用权' }],
      gradientData: [{ value: 100, name: '展现', color: '#0083c7' },{ value: 80, name: '点击', color: '#398bd8' },{ value: 60, name: '访问', color: '#4e99de' },{ value: 40, name: '咨询', color: '#4da7db' },{ value: 20, name: '订单', color: '#53b8e2' }],
      // 右侧导航菜单
      rightList: [
        { title: "漏斗图", num: "16" },
        { title: "3d漏斗图", num: "5" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      funnelOption: [], // 折线图配置项
      solidFunnelOption: [], // 3d立体漏斗图配置项
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  watch: {
    scroll() {
      this.loadSroll();
    },
  },
  mounted() {
    this.differ = document.getElementsByClassName("content-box")[0].offsetTop;
    this.$refs.leftBox.addEventListener("scroll", this.dataScroll);
    this.initPieOption();
  },
  methods: {
    initPieOption() {
      let info = {
        data: this.data,
        nailData: this.nailData,
        color: this.color,
        gradientData: this.gradientData,
      };
      this.funnelOption = new FunnelOption(info).FUNNEL_CHARTS;
      this.solidFunnelOption = new FunnelOption(info).SOLID_FUNNEL_CHARTS;
    },
    // 锚点双向监听
    dataScroll() {
      this.scroll = this.$refs.leftBox.scrollTop;
    },
    loadSroll() {
      var that = this,
        sections = document.getElementsByClassName("content-box"),
        leftBoxscollHeight =
          this.$refs.leftBox.scrollHeight - this.$refs.leftBox.clientHeight;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (that.scroll >= sections[i].offsetTop - that.differ) {
          if (that.scroll == leftBoxscollHeight) {
            that.chooseIndex = sections.length - 1;
            that.$refs.subnuv.chooseIndex = that.chooseIndex;
            break;
          } else {
            that.chooseIndex = i;
            that.$refs.subnuv.chooseIndex = that.chooseIndex;
            break;
          }
        }
      }
    },
    chooseRightTitle(index) {
      let total = document.getElementsByClassName("content-box")[index].offsetTop - this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: {
    Subnuv,
    Funnel,
    SolidFunnel,
    PyramidFunnel,
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
