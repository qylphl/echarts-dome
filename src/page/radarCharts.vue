<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 雷达图 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Radar :data="data" :dataInfo="dataInfo" :color="color"></Radar>
        </div>
        <div class="pie-box" v-for="(item, index) in radarOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <RadarArea :deploy="item" :title="item.boxTitle"></RadarArea>
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
import Radar from "components/radar/radar";
import RadarArea from "components/chartsPublic/charts";
import RadarChart from "utils/radarOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: [{value: [830, 1000, 780, 650, 900, 790],name: '预算分配'},{value: [500, 740, 980, 710, 620, 810],name: '实际开销'}],
      data2: [[582, 421.2, 622.1, 625.3, 265, 224]],
      dataInfo: [{
              name: '套餐1',
              max: 1000
          },
          {
              name: '套餐2',
              max: 1000
          },
          {
              name: '套餐3',
              max: 1000
          },
          {
              name: '套餐4',
              max: 1000
          },
          {
              name: '套餐5',
              max: 1000
          },
          {
              name: '套餐6',
              max: 1000
          },
      ],
      // 右侧导航菜单
      rightList: [
        { title: "雷达图", num: "3" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      radarOption: [],  // 雷达图配置
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
        data: this.data2,
        dataTwo: this.data,
        dataInfo: this.dataInfo,
      };
      this.radarOption = new RadarChart(info).RADAR_CHARTS;
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
    Radar,
    RadarArea
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
