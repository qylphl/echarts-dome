<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 散点气泡图 -->
      <div class="content-box flex-box">
        <!-- 散点气泡图 -->
        <div class="pie-box" v-for="(item, index) in scatterOption" :key="index" :style="{ 'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <Scatter :deploy="item" :title="item.boxTitle"></Scatter>
        </div>
      </div>
      <!-- 3d散点气泡图 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <SolidScatter :color="color"></SolidScatter>
        </div> 
      </div>
    </div>
    <div class="right-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6' }">
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
import Scatter from "components/chartsPublic/charts";
import SolidScatter from "components/scatter/3dScatter";
import scatterCharts from "utils/scatterOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: {
        2010: [
          {
            name: ["SCI", "SSCI", "EI", "ISTP", "AHCI", "ISSHP", "其他"],
            value: [1811, 868, 320, 208, 190, 120, 100],
            amount: [1.8, 1.0, 0.65, 0.52, 0.33, 0.25, 0.11],
            orderCount: [65000, 45000, 23000, 10000, 9000, 74000, 52121],
          },
        ],
        2020: [
          {
            name: ["SCI", "SSCI", "EI", "ISTP", "AHCI", "ISSHP", "其他"],
            value: [2811,1568,420,308,290,220,190],
            amount: [2.3,1.2,0.95,0.82,0.73,0.35,0.18],
            orderCount: [105000,90000,49000,34000,25000,20000,19121],
          },
        ],
      },
      // 右侧导航菜单
      rightList: [
        { title: "散点气泡图", num: "4" },
        { title: "3d散点气泡图", num: "1" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      scatterOption: [], // 散点气泡图配置项
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
      };
      this.scatterOption = new scatterCharts(info).SCATTER_CHARTS;
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
        document.getElementsByClassName("content-box")[index].offsetTop -
        this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: {
    Subnuv,
    Scatter,
    SolidScatter
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
