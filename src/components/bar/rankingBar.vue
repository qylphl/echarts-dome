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
      default: "排行榜柱状图",
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
    return {};
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
        barChart = that.$echarts.init(that.$refs.barChart),
        option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {
            show: false,
          },
          grid: {
            left: '13%',
            top: '3%',
            bottom: '3%',
            with: '80%'
          },
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {},
            },
          },
          xAxis: {
            type: "value",
            splitLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
          },
          yAxis: {
            type: "category",
            inverse: true,
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisPointer: {
              label: {
                show: true,
                margin: 30,
              },
            },
            data: that.data.map((v) => v.name),
            axisLabel: {
              margin: 100,
              fontSize: 14,
              align: "left",
              color: "#333",
              rich: {
                a1: {
                  color: "#fff",
                  backgroundColor: that.color[0],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
                a2: {
                  color: "#fff",
                  backgroundColor: that.color[1],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
                a3: {
                  color: "#fff",
                  backgroundColor: that.color[2],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
                b: {
                  color: "#fff",
                  backgroundColor: that.color[3],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 2,
                },
              },
              formatter: function (params,index) {
                if (index == 11) {
                  index = 0;
                }
                index++;
                if (index - 1 < 3) {
                  return [ "{a" + index + "|" + index + "}" + "  " + params,].join("\n");
                } else {
                  return ["{b|" + index + "}" + "  " + params].join("\n");
                }
              },
            },
          },
          series: [
            {
              z: 2,
              name: "value",
              type: "bar",
              barWidth: 20,
              data: that.data.map((v) => v.value).map((item, i) => {
                var itemStyle = {
                  color: i > 3 ? that.color[3] : that.color[i],
                };
                return {
                  value: item,
                  itemStyle: itemStyle,
                };
              }),
              label: {
                show: true,
                position: "right",
                color: "#333",
                fontSize: 14,
                offset: [10, 0],
              },
            },
          ],
        };
      window.addEventListener("resize", function () {
        barChart.resize();
      });
      barChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
