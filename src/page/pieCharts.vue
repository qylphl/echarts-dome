<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 饼图 -->
      <div class="content-box flex-box">
        <!-- 普通饼状图 -->
        <div class="pie-box" v-for="(item, index) in ordinaryPieOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea',}">
          <Pie :data="data" :deploy="item" :title="item.boxTitle" :isCheck="item.isCheck"></Pie>
        </div>
        <!-- 动画环状图 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <MotionAnnularPie :data="80"></MotionAnnularPie>
        </div>
      </div>
      <!-- 3D饼(环)状图 -->
      <div class="content-box flex-box">
        <!-- 3d饼状图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <StereoscopicPie :data="data" :color="color"></StereoscopicPie>
        </div>
        <!-- 3d环状图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <AnnularStereoscopicPie :data="data" :color="color"></AnnularStereoscopicPie>
        </div>
        <!-- 3d立体环状图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <SolidPie :data="data" :color="color"></SolidPie>
        </div>
      </div>
      <!-- 玫瑰饼图 -->
      <div class="content-box flex-box">
          <!-- 普通玫瑰饼图 -->
        <div class="pie-box" v-for="(item, index) in rosePieOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea',}">
          <Pie :data="data" :deploy="item" :title="item.boxTitle" :isCheck="item.isCheck"></Pie>
        </div>
        <!-- 鸡冠玫瑰饼图 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <CockScombPie :data="cockScombData" :color="cockScombColor"></CockScombPie>
        </div>
      </div>
      <!-- 环饼嵌套图 -->
      <div class="content-box flex-box">
        <div class="pie-box" v-for="(item, index) in nestPieOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea',}">
          <Pie :data="data" :deploy="item" :title="item.boxTitle" :isCheck="item.isCheck"></Pie>
        </div>
      </div>
      <!-- 旭日图 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'width': '66.15%','height': '900px','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <SunrisePie></SunrisePie>
        </div>
      </div>
    </div>
    <div class="right-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6'}">
      <Subnuv ref="subnuv" :dataList="rightList" :titleColor="themeType == 1 ? '#b0c9f0' : '#333'" @chooseTitle="chooseRightTitle"></Subnuv>
    </div>
  </div>
</template>

<script>
import Subnuv from "components/nav/subnav";
import Pie from "components/pie/pie";
import MotionAnnularPie from "components/pie/motionAnnularPie";
import StereoscopicPie from "components/pie/3dPie";
import AnnularStereoscopicPie from "components/pie/3dAnnularPie";
import SolidPie from "components/pie/3dSolidPie";
import CockScombPie from "components/pie/cockScombPie";
import SunrisePie from "components/pie/sunrisePie";
import PieChart from "utils/pieOption";
export default {
  data() {
    return {
      color: ["#328ff6", "#f56e6b", "#c956d7"],
      gradients: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#3b97fe", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#5dc8fe", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#fc6d67", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#fc896c", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#f8a928", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#fec669", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#a76dd1", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#b858d3", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#49e0b3", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#61dcbd", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      ],
      data: [
        { value: 1438, name: "违纪行为" },
        { value: 1090, name: "职务违法犯罪行为" },
        { value: 2865, name: "其他违法犯罪行为" },
      ],
      // 花瓣饼图数据
      petalData: [
        {
          name: "工程建设",
          value: 10,
        },
        {
          name: "产权交易",
          value: 10,
        },
        {
          name: "土地交易",
          value: 10,
        },
        {
          name: "其他交易",
          value: 10,
        },
        {
          name: "土地交易",
          value: 10,
        },
        {
          name: "其他交易",
          value: 10,
        },
      ],
      petalColor: [
        "rgb(255, 153, 153)",
        "rgb(255, 176, 63)",
        "rgb(61, 186, 45)",
        "rgb(43, 166, 254)",
        "rgb(255,222,0)",
        "rgb(255,0,0)",
      ],
      // 鸡冠玫瑰饼图数据
      cockScombData:[{ value: 14, name: "违纪行为2" }, { value: 19, name: "职务违法犯罪行为2" }, { value: 148, name: "违纪行为" }, { value: 109, name: "职务违法犯罪行为" }, { value: 165, name: "其他违法犯罪行为" }, { value: 265, name: "其他" }],
      cockScombColor:['#e37474', '#a885e8', '#9c746d', '#4ea9ff', '#20ccdc', '#f1e907', '#fec283', '#95c14c', '#f2925e'],
      // 右侧导航菜单
      rightList: [
        { title: "饼(环)状图", num: "6" },
        { title: "3D饼(环)状图", num: "3" },
        { title: "玫瑰图", num: "3" },
        { title: "环饼嵌套图", num: "3" },
        { title: "旭日图", num: "1" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      ordinaryPieOption: [], // 普通饼（环）状图数据
      rosePieOption: [], // 玫瑰图数据
      nestPieOption: [], // 环饼嵌套图数据
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
        color: this.color,
        gradients: this.gradients,
        petalData: this.petalData,
        petalColor: this.petalColor,
      };
      this.ordinaryPieOption = new PieChart(info).ORDINARY_PIE_CHARTS;
      this.rosePieOption = new PieChart(info).ROSE_PIE_CHARTS;
      this.nestPieOption = new PieChart(info).NEST_PIE_CHARTS;
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
      let total =
        document.getElementsByClassName("content-box")[index].offsetTop - this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: { Pie, MotionAnnularPie, StereoscopicPie, AnnularStereoscopicPie, SolidPie, CockScombPie, SunrisePie, Subnuv },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
