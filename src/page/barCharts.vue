<template>
  <div class="content flex-box">
    <div class="left-box">
      <!-- 柱状（条形）图 -->
      <div class="content-box flex-box">
        <!-- 普通柱状（条形）图 -->
        <div class="pie-box" v-for="(item, index) in ordinaryBarOption" :key="index" :style="{width: item.boxWidth ? item.boxWidth : '32.8%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Bar :color="color" :deploy="item" :title="item.boxTitle"></Bar>
        </div>
      </div>
      <!-- 堆积柱状（条形）图 -->
      <div class="content-box flex-box"></div>
      <!-- 分组柱状图 -->
      <div class="content-box flex-box"></div>
      <!-- 3D柱状图 -->
      <div class="content-box flex-box"></div>
    </div>
    <div class="right-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6'}">
      <div :class="{'right-title': true,'choose-item': index == chooseIndex}" v-for="(item, index) in rightList" :key="index" :style="{'color':themeType == 1 ? '#b0c9f0' : '#333'}" @click="chooseRightTitle(index)">
        <el-tooltip :content="item.num" effect="light" placement="right">
        <p class="right-title-content">{{item.title}}</p>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "components/bar/bar";
import BarChart from "utils/barOption";
export default {
  data() {
    return {
      color: ["#328ff6", "#f56e6b", "#c956d7"],
      colorList: [
          '#13d2de', '#09adf1', '#127bf2', '#2748ef', '#5627ef',
          '#8527ef', '#be27ef', '#ed27ef', '#ef27af', '#ef277c',
          '#ef273f', '#ef4d27', '#ef6427',
      ],
      data: [
        { name: "违反政治纪律行为", value: "150" },
        { name: "违反组织纪律行为", value: "228" },
        { name: "违反廉洁纪律行为", value: "344" },
        { name: "违反群众纪律行为", value: "205" },
        { name: "违反工作纪律行为", value: "125" },
        { name: "贪污贿赂类行为", value: "109" },
        { name: "其他违法犯罪行为", value: "185" },
      ],
      rightList: [
        {title: "柱状图",num: '2'},
        {title: "堆积柱状图",num: '2'},
        {title: "分组柱状图",num: '2'},
        {title: "双向柱状图",num: '1'},
        {title: "3D柱状图",num: '1'},
      ],
      ordinaryBarOption: [],
      chooseIndex: 0,    // 选中右侧导航的index值
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initBarOption();
  },
  methods: {
    initBarOption() {
      let info = {
        data: this.data,
        color: this.color,
        colorList: this.colorList
      };
      this.ordinaryBarOption = new BarChart(info).ORDINARY_BAR_CHARTS;
    },
    chooseRightTitle(index) {
      this.chooseIndex = index;
    }
  },
  components: { Bar },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
