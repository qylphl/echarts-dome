<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="solidBar"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import HighCharts from "highcharts";

export default {
  props: {
    title: {
      default: "3D立体柱状图",
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
      dataList: [
        {
          name: "销售",
          data: [2, 3, null, 4, 0, 5, 1, 4, 6, 3],
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
          margin: 75,
          options3d: {
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 70,
            viewDistance: 100, // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
            frame: {
              // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
              // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
              // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
              bottom: {
                size: 10,
              },
              side: {
                size: 1,
                color: "transparent",
              },
              back: {
                size: 1,
                color: "transparent",
              },
            },
          },
        },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        title: {
          text: "包含空值的3D柱状图",
        },
        subtitle: {
          text: "请注意值为 0 和 null 的区别",
        },
        plotOptions: {
          column: {
            depth: 25,
          },
        },
        xAxis: {
        //   categories: HighCharts.getOptions().lang.shortMonths,
        },
        yAxis: {
          title: {
            text: null,
          },
        },
        series: this.dataList,
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
