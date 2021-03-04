<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="solidCumulateBar"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import HighCharts from "highcharts";

export default {
  props: {
    title: {
      default: "3D立体堆积柱状图",
      type: String,
    },
    data: {
      type: Array,
    },
    color: {
      type: Array,
    },
  },
  data() {
    return {
      optionString: {},
      tipTitle:
        "注：请注意该图表使用的是highcharts，可以在src/components/bar/3dSolidCumulateBar.vue中找到直接使用。",
      dataList: [
        {
          name: "小张",
          data: [5, 3, 4, 7, 2],
          stack: "male",
        },
        {
          name: "小王",
          data: [3, 4, 4, 2, 5],
          stack: "male",
        },
        {
          name: "小彭",
          data: [2, 5, 6, 2, 1],
          stack: "female",
        },
        {
          name: "小潘",
          data: [3, 0, 4, 4, 3],
          stack: "female",
        },
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var option = {
        chart: {
          type: "column",
          backgroundColor: 'rgba(0,0,0,0)',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40,
          },
          marginTop: 80,
          marginRight: 40,
        },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        title: {
          text: "以性别划分的水果消费总量",
        },
        xAxis: {
          categories: ["苹果", "橘子", "梨", "葡萄", "香蕉"],
        },
        yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
            text: "水果数量",
          },
        },
        tooltip: {
          headerFormat: "<b>{point.key}</b><br>",
          pointFormat:
            '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}',
        },
        plotOptions: {
          column: {
            stacking: "normal",
            depth: 40,
          },
        },
        series: this.dataList,
      };
      this.optionString = option;
      HighCharts.chart(this.$refs.solidCumulateBar, option);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
