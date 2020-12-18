<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="lineChart" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { sortByKey } from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "折线图",
      type: String,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      optionString: {},
      tipTitle: '注：该代码只是柱状图区域的，并不包含右侧图例，如果需要全部，请找到src/components/line/barLine.vue组件直接使用。'
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this,
        lineChart = that.$echarts.init(that.$refs.lineChart),
        // dataList = sortByKey(that.data, "value"),
        dataList = that.data,
        option = {
          tooltip: {
            trigger: "axis",
            padding: [10, 20], // 内边距
            backgroundColor: "rgba(255,255,255,0.9)", //通过设置rgba调节背景颜色与透明度
            extraCssText: "box-shadow: 0 2px 10px 0 rgba(4, 0, 0, 0.15);",
            color: "#0f0f0f",
            textStyle: {
              color: "black",
            },
            formatter: function (params, ticket, callback) {
              var htmlStr = "<div'>";
              htmlStr += "<p style='font-size:15px;color:#000;'>" + params[0].name + "<span style='display:inline-block;font-size:20px;padding:0 5px 0 10px;color:#0b74e9;'>" + params[0].value + "</span>件</p>";
              htmlStr += "</div>";
              return htmlStr;
            },
          },
          grid: {
            left: "10%",
            top: "10%",
            bottom: "15%",
            width: "85%",
          },
          xAxis: [
            {
              type: "category",
              axisTick: {
                //刻度线
                show: false,
              },
              axisLine: {
                lineStyle: {
                  color: "#e8e8e8",
                  width: 2,
                },
              },
              axisLabel: {
                show: true,
                interval: 0,
                fontSize: 14,
                color: "#666",
                rotate: 45,
                margin: 15,
                formatter: function (params) {
                  var val = "";
                  if (params.length > 7) {
                    val = params.substr(0, 7) + "...";
                    return val;
                  } else {
                    return params;
                  }
                },
              },
              axisPointer: {
                type: "line",
                lineStyle: {
                  color: "rgba(65,163,252,.4)",
                },
              },
              data: dataList.map((v) => v.name),
            },
          ],
          yAxis: [
            {
              type: "value",
              axisLine: {
                //y轴
                show: false,
              },
              axisTick: {
                //y轴刻度线
                show: false,
              },
              axisLabel: {
                textStyle: {
                  color: "#666",
                  fontSize: 14,
                },
              },
              splitLine: {
                lineStyle: {
                  color: "#e8e8e8",
                },
              },
            },
          ],
          series: [
            {
              type: "bar",
              barWidth: 10,
              label: {
                normal: {
                  show: true,
                  position: "top",
                  color: "#1c92fe",
                  padding: [3, 6],
                  distance: 7,
                },
                emphasis: {
                  show: true,
                  backgroundColor: "rgba(255,255,255,0.9)",
                  borderRadius: 3,
                  borderWidth: 1,
                  shadowColor: "rgba(0,0,0,0.3)",
                  shadowBlur: 6,
                  distance: 14,
                },
              },
              itemStyle: {
                normal: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: "rgba(65,163,252,.6)" },
                      { offset: 1, color: "rgba(65,163,252,.1)" },
                    ],
                    globalCoord: false,
                  },
                  barBorderRadius: [20, 20, 0, 0],
                },
              },
              data: dataList.map((v) => v.value),
            },
            // 折线图
            {
              type: "line",
              showSymbol: true,
              symbolSize: 8, //设定点的大小
              hoverAnimation: false,
              tooltip: {
                show: false,
              },
              label: {
                normal: {
                  show: false,
                },
                emphasis: {
                  show: false,
                },
              },
              itemStyle: {
                normal: {
                  borderColor: "rgba(65,163,252,1)",
                  lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: "rgba(65,163,252,1)",
                  },
                },
                emphasis: {
                  color: "#fb6763",
                  borderColor: "rgba(0,0,0,0)",
                },
              },
              data: dataList.map((v) => v.value > 0 ? +v.value + 0.6 : v.value),
            },
          ],
        };
      that.optionString = option;
      window.addEventListener("resize", function () {
        lineChart.resize();
      });
      lineChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
