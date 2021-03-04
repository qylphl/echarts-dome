<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="funnelChart"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import HighCharts from "highcharts";
import funnel3d from 'highcharts/modules/funnel3d';
import cylinder from 'highcharts/modules/cylinder';
funnel3d(HighCharts);
cylinder(HighCharts);

export default {
  props: {
    title: {
      default: "3D漏斗图",
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
      tipTitle: "注：请注意该图表使用的是highcharts，可以在src/components/funnel/3dFunnel.vue中找到直接使用。",
      dataList: [
        {
          name: "Unique users",
          data: [
            ["信访", 5654],
            ["线索", 4064],
            ["案件", 1987],
            ["党风", 1576],
            ["补录", 1046],
          ],
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
          type: "funnel3d",
          backgroundColor: 'rgba(0,0,0,0)',
          options3d: {
            enabled: true,
            alpha: 10,
            depth: 50,
            viewDistance: 50,
          },
        },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        title: {
          text: "Highcharts 3D 漏斗图",
        },
        plotOptions: {
          series: {
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b> ({point.y:,.0f})",
              color: (HighCharts.theme && HighCharts.theme.contrastTextColor) || "black",
              allowOverlap: true,
              y: 10,
            },
            neckWidth: "30%",
            neckHeight: "25%",
            width: "75%",
            height: "80%",
          },
        },
        series: this.dataList,
      };
      this.optionString = option;
      HighCharts.chart(this.$refs.funnelChart, option);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
