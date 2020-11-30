<template>
  <div class="chart-content">
    <p class="title-bar">{{ title }}</p>
    <div class="chart-box" ref="dotAnnularChart"></div>
  </div>
</template>

<script>
import chartsUtils from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "带小圆点的环形图",
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
        dotAnnularChart = this.$echarts.init(this.$refs.dotAnnularChart),
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
          series: [
            {
              type: "pie",
              radius: ["40%", "55%"],
              center: ["50%", "40%"],
              label: {
                normal: {
                  show: false,
                  position: "center",
                },
                emphasis: {
                  show: true,
                  formatter: (params) => {
                    return (
                      "{name|" +
                      params.name +
                      "}\n{value|" +
                      params.value +
                      "}{percent|" +
                      "\n" +
                      "占比" +
                      params.percent.toFixed(2) +
                      "%}"
                    );
                  },
                  rich: {
                    name: {
                      fontSize: 14,
                      padding: [5, 0, 5, 0],
                      color: "#333",
                    },
                    value: {
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#333",
                      padding: [5, 0, 5, 0],
                    },
                    percent: {
                      color: "#333",
                      fontSize: 12,
                      padding: [5, 0, 5, 0],
                    },
                  },
                },
              },
              labelLine: {
                show: false,
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    return that.color[params.dataIndex];
                  },
                  borderColor: "#fff",
                  borderWidth: 1,
                },
                show: false,
                emphasis: {
                  borderColor: "#fff",
                  borderWidth: 1,
                },
              },
              data: that.data,
            },
            {
              type: "pie",
              radius: ["70%", "70%"],
              center: ["50%", "40%"],
              color: "rgba(0,0,0,0)",
              hoverOffset: 0,
              legend: {
                show: false,
              },
              label: {
                normal: {
                  show: false,
                  position: "inner",
                  formatter: (params) => {
                    const index = params.dataIndex;
                    return [`{hr${index}|}`].join("\n");
                  },
                  rich: that.getRich(),
                },
                emphasis: {
                  // 强调样式
                  show: true,
                },
              },
              labelLine: {
                normal: {
                  show: false,
                  length: 8,
                  smooth: 1,
                  width: 0,
                },
                emphasis: {
                  // 强调样式
                  show: false,
                },
              },
              itemStyle: {
                borderType: "dashed",
                show: true,
                borderColor: "#17acf6",
                borderWidth: 1,
              },
              data: that.data,
            },
          ],
        };
      window.addEventListener("resize", function () {
        dotAnnularChart.resize();
      });
      dotAnnularChart.setOption(option, true);
      new chartsUtils().setBorderPieHighlight(
        dotAnnularChart,
        that.data.map((v) => v.value)
      );
    },
    getRich() {
      let result = {},
        colorRich = this.color;
      colorRich.forEach((v, i) => {
        result[`hr${i}`] = {
          backgroundColor: colorRich[i],
          borderRadius: 6,
          width: 1,
          height: 1,
          padding: [-6, -6, -6, -6],
        };
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
