<template>
  <div class="one-content-charts-content content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 热力图 -->
      <div class="content-box flex-box">
        <div class="pie-box" v-for="(item, index) in heatOption" :key="index" :style="{ 'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <Heat :deploy="item" :title="item.boxTitle"></Heat>
        </div>
        <div class="pie-box vertical-heat-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <VerticalHeat></VerticalHeat>
        </div>
        <div class="pie-box" :style="{'width': '100%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <HeatTwo></HeatTwo>
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
import Heat from "components/chartsPublic/charts";
import VerticalHeat from "components/heat/verticalHeat";
import HeatTwo from "components/heat/heat";
import HeatChart from "utils/heatOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]],
      dataList: {
          XNameData: [
              "福建省", "安徽省", "浙江省", "广东省", "河南省", "湖北省", "宁夏"
          ],
          YNameData: [
              "福建省", "安徽省", "浙江省", "广东省", "河南省", "湖北省", "宁夏"
          ],
          resultData: [
              [0,0,5],[0,1,1],[0,2,2],[0,3,3],[0,4,4],[0,5,5],[0,6,6],[1,0,7],[1,1,10],[1,2,20],[1,3,20],[1,4,30],[1,5,10],[1,6,100],[2,0,1],[2,1,1],[2,2,10],[2,3,70],[2,4,6],[2,5,5],[2,6,4],[3,0,7],[3,1,73],[3,2,60],[3,3,50],[3,4,30],[3,5,20],[3,6,10],[4,0,1],[4,1,3],[4,2,22],[4,3,77],[4,4,66],[4,5,12],[4,6,23],[5,0,2],[5,1,1],[5,2,10],[5,3,3],[5,4,56],[5,5,35],[5,6,33],[6,0,1],[6,1,22],[6,2,14],[6,3,13],[6,4,12],[6,5,11],[6,6,10]
          ],
      },
      // 右侧导航菜单
      rightList: [{ title: "热力图", num: "4" }],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      heatOption: [], // 折线图配置项
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
        dataList: this.dataList,
      };
      this.heatOption = new HeatChart(info).HEAT_CHARTS;
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
    Heat,
    VerticalHeat,
    HeatTwo,
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
.content {
  .left-box {
    .content-box{
      position: relative;
      .vertical-heat-box{
        position: absolute;
        height: 1020px;
        top: 0;
        right: 0;
      }
      &:last-child {
        .pie-box {
          &:last-child,
          &:nth-last-child(2) {
            margin-bottom: 0 !important;
          }
        }
      }
    }
  }
}
</style>
