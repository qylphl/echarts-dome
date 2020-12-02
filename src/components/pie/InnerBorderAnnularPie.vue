<template>
  <div class="chart-content">
    <p class="title-bar">{{ title }}</p>
    <div class="chart-box" ref="innerBorderAnnularChart"></div>
  </div>
</template>

<script>
import {setBorderPieHighlight} from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "带内边框的环形图",
      type: String,
    },
    data: {
      type: Array,
    },
    color: {
      //只能是普通颜色不能是渐变色
      type: Array,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this,
        colorList = this.color,
        innerBorderAnnularChart = this.$echarts.init(
          this.$refs.innerBorderAnnularChart
        ),
        option = {
          legend: {
            icon: "roundRect",
            orient: "horizontal",
            bottom: "10%",
            itemGap: 20,
            align: "left",
            padding: [5, 25, 5, 10],
            itemWidth: 17,
            itemHeight: 8,
            selectedMode: false,
            textStyle: {
              color: "#666",
              fontSize: 12, //字体大小
              padding: [0, 15, 0, 0],
            },
            data: this.data.map((v) => v.name),
          },
          // color: ['#fcb83d','#fc7e68','#da7cee','#3f96ff'],
          series: [
            // 饼图
            {
              type: "pie",
              radius: ["40%", "55%"],
              center: ["50%", "40%"],
              avoidLabelOverlap: false,
              tooltip: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              label: {
                normal: {
                  show: false,
                  position: "center",
                },
                emphasis: {
                  show: true,
                  color: "#333",
                  formatter: (params) => {
                    return (
                      "{name|" + params.name + "}\n{value|" + params.value + "}"
                    );
                  },
                  rich: {
                    name: {
                      fontSize: 14,
                      color: "#333",
                      padding: [5, 0, 5, 0],
                    },
                    value: {
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#333",
                      padding: [5, 0, 5, 0],
                    },
                  },
                },
              },
              itemStyle: {
                borderWidth: 0, //设置border的宽度有多大
                borderColor: "#fff",
                normal: {
                  color: function (params) {
                    return colorList[params.dataIndex];
                  },
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
              data: that.data,
            },
            {
              type: "pie",
              radius: ["33%", "33%"],
              center: ["50%", "40%"],
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
              hoverOffset: 2,
              tooltip: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              legend: {
                show: false,
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              itemStyle: {
                show: true,
                borderColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                shadowBlur: 0,
                normal: {
                  color: function (params) {
                    return colorList[params.dataIndex];
                  },
                },
              },
              data: that.data,
            },
          ],
        };
      window.addEventListener("resize", function () {
        innerBorderAnnularChart.resize();
      });
      innerBorderAnnularChart.setOption(option, true);
      setBorderPieHighlight(
        innerBorderAnnularChart,
        that.data.map((v) => v.value)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
