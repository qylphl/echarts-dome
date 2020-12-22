<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="scatter"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import HighCharts from "highcharts";
export default {
  props: {
    title: {
      default: "3D散点气泡图",
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
      tipTitle: '注：请注意该图表使用的是highcharts，可以在src/components/scatter/3dScatter.vue中找到直接使用。'
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var option = {
        colors: this.color,
        chart: {
          backgroundColor: "rgba(0,0,0,0)",//改变背景颜色
          renderTo: "container",
          margin: 30,
          type: "scatter",
          options3d: {
            enabled: true,
            alpha: 10,
            beta: 30,
            depth: 250,
            viewDistance: 5,
            frame: {
              bottom: { size: 1, color: "rgba(0,0,0,0.02)" },
              back: { size: 1, color: "rgba(0,0,0,0.04)" },
              side: { size: 1, color: "rgba(0,0,0,0.06)" },
            },
          },
        },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        title: {
          text: "3D散点图",
        },
        subtitle: {
          text: "单击并拖动鼠标可旋转绘图区",
        },
        plotOptions: {
          scatter: {
            width: 10,
            height: 10,
            depth: 10,
          },
        },
        yAxis: {
          min: 0,
          max: 10,
          title: null,
        },
        xAxis: {
          min: 0,
          max: 10,
          gridLineWidth: 1,
        },
        zAxis: {
          min: 0,
          max: 10,
        },
        legend: {
          enabled: false,
        },
        series: [
          {
            name: "随机数据",
            colorByPoint: true,
            data: [
              [1, 6, 5],
              [8, 7, 9],
              [1, 3, 4],
              [4, 6, 8],
              [5, 7, 7],
              [6, 9, 6],
              [7, 0, 5],
              [2, 3, 3],
              [3, 9, 8],
              [3, 6, 5],
              [4, 9, 4],
              [2, 3, 3],
              [6, 9, 9],
              [0, 7, 0],
              [7, 7, 9],
              [7, 2, 9],
              [0, 6, 2],
              [4, 6, 7],
              [3, 7, 7],
              [0, 1, 7],
              [2, 8, 6],
              [2, 3, 7],
              [6, 4, 8],
              [3, 5, 9],
              [7, 9, 5],
              [3, 1, 7],
              [4, 4, 2],
              [3, 6, 2],
              [3, 1, 6],
              [6, 8, 5],
              [6, 6, 7],
              [4, 1, 1],
              [7, 2, 7],
              [7, 7, 0],
              [8, 8, 9],
              [9, 4, 1],
              [8, 3, 4],
              [9, 8, 9],
              [3, 5, 3],
              [0, 2, 4],
              [6, 0, 2],
              [2, 1, 3],
              [5, 8, 9],
              [2, 1, 1],
              [9, 7, 6],
              [3, 0, 2],
              [9, 9, 0],
              [3, 4, 8],
              [2, 6, 1],
              [8, 9, 2],
              [7, 6, 5],
              [6, 3, 1],
              [9, 3, 1],
              [8, 9, 3],
              [9, 1, 0],
              [3, 8, 7],
              [8, 0, 0],
              [4, 9, 7],
              [8, 6, 2],
              [4, 3, 0],
              [2, 3, 5],
              [9, 1, 4],
              [1, 1, 4],
              [6, 0, 2],
              [6, 1, 6],
              [3, 8, 8],
              [8, 8, 7],
              [5, 5, 0],
              [3, 9, 6],
              [5, 4, 3],
              [6, 8, 3],
              [0, 1, 5],
              [6, 7, 3],
              [8, 3, 2],
              [3, 8, 3],
              [2, 1, 6],
              [4, 6, 7],
              [8, 9, 9],
              [5, 4, 2],
              [6, 1, 3],
              [6, 9, 5],
              [4, 8, 2],
              [9, 7, 4],
              [5, 4, 2],
              [9, 6, 1],
              [2, 7, 3],
              [4, 5, 4],
              [6, 8, 1],
              [3, 4, 0],
              [2, 2, 6],
              [5, 1, 2],
              [9, 9, 7],
              [6, 9, 9],
              [8, 4, 3],
              [4, 1, 7],
              [6, 2, 5],
              [0, 4, 9],
              [3, 5, 9],
              [6, 9, 1],
              [1, 9, 2],
            ],
          },
        ],
      };
      this.optionString = option;
      HighCharts.chart(this.$refs.scatter, option);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
