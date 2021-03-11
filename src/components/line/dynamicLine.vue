<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="dynamicLineChart" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import echarts from "echarts";
export default {
  props: {
    title: {
      default: "动态折线图",
      type: String,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      optionString: {},
      tipTitle: "注：该组件可以在src/components/line/dynamicLine.vue找到直接使用。",
    }
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
        dynamicLineChart = that.$echarts.init(that.$refs.dynamicLineChart),
        dataList = that.data[0],
        zrUtil = echarts.util,
        option = {};

      zrUtil.each(dataList.xcategory, function (item, index) {
        dataList.lowLine.push([
          {
            coord: [index, dataList.low[index]],
          },
          {
            coord: [index + 1, dataList.low[index + 1]],
          },
        ]);
      });

      option = {
        title: {
          show: false,
          text: "两种类型结合",
          x: "center",
          top: 50,
          textStyle: {
            color: "#747474",
            fontSize: 14,
            fontWeight: 100,
          },
        },
        grid: {
          bottom: 50,
          left: 50,
          top: 50,
          right: 50,
        },
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
            htmlStr +=
              "<p style='font-size:15px;color:#000;'>" +
              params[0].name +
              "<span style='display:inline-block;font-size:20px;padding:0 5px 0 10px;color:#0b74e9;'>" +
              params[0].value +
              "</span>件</p>";
            htmlStr += "</div>";
            return htmlStr;
          },
        },
        xAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            show: false,
          },
          data: dataList.xcategory,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
        },
        series: [
          {
            type: "line",
            // smooth: true,
            symbol: "circle",
            symbolSize: 25,
            lineStyle: {
              normal: {
                width: 4,
                shadowColor: "rgba(155, 18, 184, .3)",
                shadowBlur: 10,
                shadowOffsetY: 20,
                shadowOffsetX: 20,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "rgba(255, 255, 255,1)",
                  },
                  {
                    offset: 0.1,
                    color: "rgba(255, 75, 172,1)",
                  },
                  {
                    offset: 0.9,
                    color: "rgba(155, 18, 184,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(255, 255, 255,1)",
                  },
                ]),
              },
            },
            itemStyle: {
              color: "#fff",
              borderColor: "#7c1fa2",
              borderWidth: 4,
            },
            data: dataList.low,
          },
          {
            name: "",
            type: "lines",
            coordinateSystem: "cartesian2d",
            zlevel: 1,
            smooth: true,
            symbol: "circle",
            symbolSize: 25,
            effect: {
              show: true,
              smooth: false,
              period: 2,
              symbolSize: 8,
            },
            lineStyle: {
              normal: {
                color: "#f00",
                width: 0,
                opacity: 0,
                curveness: 0,
              },
            },
            data: dataList.lowLine,
          },
        ],
      };
      that.optionString = option;
      window.addEventListener("resize", function () {
        dynamicLineChart.resize();
      });
      dynamicLineChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>