<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 折线图 -->
      <div class="content-box flex-box">
        <!-- 折线图 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <BarLine :data="dynamicData"></BarLine>
        </div>
        <div class="pie-box" v-for="(item, index) in lineOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <LineArea :deploy="item" :title="item.boxTitle"></LineArea>
        </div>
      </div>
      <!-- 面积图 -->
      <div class="content-box flex-box">
        <div class="pie-box" v-for="(item, index) in areaOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <LineArea :deploy="item" :title="item.boxTitle"></LineArea>
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
import LineArea from "components/line/line";
import BarLine from "components/line/barLine";
import LineChart from "utils/lineOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: {
        monthData: ["1月", "2月", "3月", "4月", "5月"],
        dataInfo: [{ value: [8, 5, 9, 4, 3], name: "信访举报" }, { value: [5, 9, 6, 5, 8, 5], name: "问题线索" }, { value: [9, 1, 4, 2, 5], name: "案件管理" }]
      },
      dynamicData:[
        {name:'周一',value: 67},{name:'周二',value: 97},{name:'周三',value: 51},{name:'周四',value: 238},{name:'周五',value: 32},{name:'周六',value: 11},{name:'周日',value: 1},
      ],
      // 右侧导航菜单
      rightList: [
        { title: "折线图", num: "2" },
        { title: "面积图", num: "2" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      lineOption: [], // 折线图配置项
      areaOption: [], // 面积图配置项
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
      this.lineOption = new LineChart(info).LINE_CHARTS;
      this.areaOption = new LineChart(info).AREA_PIE_CHARTS;
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
    LineArea,
    BarLine
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
