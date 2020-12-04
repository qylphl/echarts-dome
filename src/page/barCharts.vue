<template>
  <div class="content flex-box">
    <div class="left-box">
      <!-- 柱状（条形）图 -->
      <div class="content-box flex-box">
        <!-- 普通柱状（条形）图 -->
        <div class="pie-box" v-for="(item, index) in ordinaryBarOption" :key="index" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <Bar :color="color" :deploy="item"></Bar>
        </div>
      </div>
      <!-- 堆积柱状（条形）图 -->
      <div class="content-box flex-box"></div>
      <!-- 分组柱状图 -->
      <div class="content-box flex-box"></div>
      <!-- 3D柱状图 -->
      <div class="content-box flex-box"></div>
    </div>
    <div class="right-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6' }"></div>
  </div>
</template>

<script>
import Bar from "components/bar/bar";
import BarChart from "utils/barOption";
export default {
  data() {
    return {
      color: ["#328ff6", "#f56e6b", "#c956d7"],
      data: [
        { name: "违反政治纪律行为", value: "150" },
        { name: "违反组织纪律行为", value: "208" },
        { name: "违反廉洁纪律行为", value: "644" },
        { name: "违反群众纪律行为", value: "205" },
        { name: "违反工作纪律行为", value: "125" },
        { name: "违反生活纪律行为", value: "63" },
        { name: "贪污贿赂类行为", value: "121" },
        { name: "滥用职权类行为", value: "45" },
        { name: "玩忽职守类行为", value: "22" },
        { name: "徇私舞弊类行为", value: "21" },
        { name: "重大责任事故类行为", value: "15" },
        { name: "其他违法犯罪行为", value: "85" },
      ],
      ordinaryBarOption: [],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initBarOption()
  },
  methods: {
    initBarOption(){
      let info = {
        data: this.data,
        color: this.color
      };
      this.ordinaryBarOption = new BarChart(info).ORDINARY_BAR_CHARTS;
    }
  },
  components: { Bar },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
