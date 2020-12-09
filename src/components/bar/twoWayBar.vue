<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="barChart" :style="{'background-color': themeType == 1 ? '#07124a' : '#fff'}"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "双向柱状图",
      type: String,
    },
    data: {
      type: Object,
    },
    color: {
      type: Array,
    },
  },
  data() {
    return {
      yAxisData: [],
      legendData: []
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initData();
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this,
        barChart = that.$echarts.init(that.$refs.barChart),
        option = {
          color: ["#3398DB"],
          tooltip: {
            show: true,
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            left: "center",
            bottom: 10,
            itemWidth: 15,
            itemHeight: 11,
            itemGap: 20,
            borderRadius: 4,
            textStyle: {
              color: "#262C41",
              fontSize: 14,
            },
            data: that.legendData,
          },
          grid: [
            {
              show: false,
              left: "5%",
              top: "20",
              bottom: "10%",
              containLabel: true,
              width: "38%",
            },
            {
              show: false,
              left: "50.5%",
              top: 0,
              bottom: "10%",
              width: "0%",
            },
            {
              show: false,
              right: "5%",
              top: "20",
              bottom: "10%",
              containLabel: true,
              width: "38%",
            },
          ],
          xAxis: [
            {
              type: "value",
              inverse: true,
              axisLabel: {
                show: true,
                color: "#949AA8",
                margin: 0,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#E0E0E0",
                  type: "dashed",
                },
              },
            },
            {
              gridIndex: 1,
              show: false,
            },
            {
              gridIndex: 2,
              type: "value",

              axisLabel: {
                show: true,
                color: "#949AA8",
                margin: 0,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "#E0E0E0",
                  type: "dashed",
                },
              },
            },
          ],
          yAxis: [
            {
              type: "category",
              inverse: true,
              position: "right",
              data: that.yAxisData,
              axisLabel: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#E0E0E0",
                },
              },
              axisTick: {
                show: false,
              },
            },
            {
              gridIndex: 1,
              type: "category",
              inverse: true,
              position: "center",
              data: that.yAxisData,
              axisLabel: {
                align: "center",
                padding: [8, 0, 0, 0],
                fontSize: 12,
                color: `#262C41`,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            },
            {
              gridIndex: 2,
              type: "category",
              inverse: true,
              position: "left",
              data: that.yAxisData,
              axisLabel: {
                show: false,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#E0E0E0",
                },
              },
              axisTick: {
                show: false,
              },
            },
          ],
          series: [
            {
              name: that.data[Object.keys(that.data)[0]].name,
              type: "bar",
              barWidth: 12,
              itemStyle: {
                color: "#01C5B2",
                barBorderRadius: [4, 0, 0, 4],
              },
              label: {
                show: true,
                position: "left",
              },
              data: that.data[Object.keys(that.data)[0]].data,
            },
            {
              xAxisIndex: 2,
              yAxisIndex: 2,
              name: that.data[Object.keys(that.data)[1]].name,
              type: "bar",
              barWidth: 12,
              itemStyle: {
                color: "#FB6F6C",
                barBorderRadius: [0, 4, 4, 0],
              },
              label: {
                show: true,
                position: "right",
              },
              data: that.data[Object.keys(that.data)[1]].data,
            },
          ],
        };
      window.addEventListener("resize", function () {
        barChart.resize();
      });
      barChart.setOption(option, true);
    },
    // 初始化data值
    initData() {
      let yAxisData = new Set();
      let legendData = [];
      for (var n in this.data) {
          legendData.push(this.data[n].name);
          (this.data[n].data).forEach(function (item) {
              yAxisData.add(item.label);
          })
      }
      this.yAxisData = [...yAxisData];
      this.legendData = legendData;
    }
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
