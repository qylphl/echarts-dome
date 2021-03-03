<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"
    ></navBar>
    <div class="chart-box" ref="solidBar"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import HighCharts from "highcharts";
import cylinder from 'highcharts/modules/cylinder';
cylinder(HighCharts);

export default {
  props: {
    title: {
      default: "3D立体圆柱图",
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
      tipTitle: "注：请注意该图表使用的是highcharts，可以在src/components/bar/3dSolidBar.vue中找到直接使用。",
      dataList: [ 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var option = {
        chart: {
          type: "cylinder",
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25,
          },
        },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        title: {
          text: "Highcharts 3D 圆柱图",
        },
        plotOptions: {
          series: {
            depth: 25,
            colorByPoint: true,
          },
        },
        series: [
          {
            data: this.dataList,
            name: "Cylinders",
            showInLegend: false,
          },
        ],
      };
      this.optionString = option;
      HighCharts.chart(this.$refs.solidBar, option);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
