<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 水滴图 -->
      <div class="content-box flex-box">
        <!-- 水滴图 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <BgWater :data="data"></BgWater>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Water :data="data" :waveColor="waveColor" :bdColor="bdColor"></Water>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <WaterTwo :data="data" :waveColor="waveColor" :bdColor="bdColor"></WaterTwo>
        </div>
        <div class="pie-box hidden"></div>
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
import Water from "components/water/water";
import WaterTwo from "components/water/water2";
import BgWater from "components/water/bgWater";
import BiaxialChart from "utils/biaxialOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      waveColor: ["#55c9fc", "#328ae3"],
      bdColor: ["#5ecdfb", "#1647d4"],
      data: [{name:'name',value:0.5}],
      // 右侧导航菜单
      rightList: [
        { title: "水滴图", num: "3" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      biaxialOption: [], // 水滴图配置项
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
      this.biaxialOption = new BiaxialChart(info).BIAXIAL_CHARTS;
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
    Water,
    WaterTwo,
    BgWater,
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
