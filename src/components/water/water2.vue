<template>
  <div class="chart-content">
    <navBar
      :title="title"
      :optionString="optionString"
      :tipTitle="tipTitle"
    ></navBar>
    <div
      class="chart-box"
      ref="waterChart"
      :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"
    ></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "水球图",
      type: String,
    },
    data: {
      type: Array,
    },
    waveColor: {
      // 波浪颜色
      type: Array,
    },
    bdColor: {
      // 边框颜色【注：波浪和边框颜色是渐变色要传数组】
      type: Array,
    },
    bgColor: {
      // 背景颜色
      default: "#eef7ff",
      type: String,
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      optionString: {},
      tipTitle: "注：该组件可以在src/components/water/water2.vue找到直接使用。",
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
        waterChart = that.$echarts.init(that.$refs.waterChart),
        option = {
        //   backgroundColor: "#050038",
          title: {
            text: "",
            textStyle: {
              fontWeight: "normal",
              fontSize: 25,
              color: "rgb(97, 142, 205)",
            },
          },
          series: [
            {
              type: "liquidFill",
              radius: "65%",
              center: ["50%", "50%"],
              data: [
                that.data.map((v) => v.value)[0],
                that.data.map((v) => v.value)[0],
                that.data.map((v) => v.value)[0],
              ], // data个数代表波浪数
              backgroundStyle: {
                borderWidth: 1,
                color: "rgb(255,0,255,0.1)",
              },
              label: {
                normal: {
                  formatter:
                    (that.data.map((v) => v.value)[0] * 100).toFixed(2) + "%",
                  textStyle: {
                    fontSize: 50,
                  },
                },
              },
              outline: {
                show: false,
              },
            },
            {
              type: "pie",
              center: ["50%", "50%"],
              radius: ["72%", "74%"],
              hoverAnimation: false,
              data: [
                {
                  name: "",
                  value: 500,
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#5886f0",
                  },
                  emphasis: {
                    labelLine: {
                      show: false,
                    },
                    itemStyle: {
                      color: "#5886f0",
                    },
                  },
                },
                {
                  //画中间的图标
                  name: "",
                  value: 4,
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#fff",
                    normal: {
                      color: "#5886f0",
                      borderColor: "#5886f0",
                      borderWidth: 20,
                      // borderRadius: '100%'
                    },
                  },
                  label: {
                    borderRadius: "100%",
                  },
                  emphasis: {
                    labelLine: {
                      show: false,
                    },
                    itemStyle: {
                      color: "#5886f0",
                    },
                  },
                },
                {
                  // 解决圆点过大后续部分显示明显的问题
                  name: "",
                  value: 4,
                  labelLine: {
                    show: false,
                  },
                  itemStyle: {
                    color: "#5886f0",
                  },
                  emphasis: {
                    labelLine: {
                      show: false,
                    },
                    itemStyle: {
                      color: "#5886f0",
                    },
                  },
                },
                {
                  //画剩余的刻度圆环
                  name: "",
                  value: 88,
                  itemStyle: {
                    // color: "#050038",
                    color: "#ffffff00",
                  },
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                  emphasis: {
                    labelLine: {
                      show: false,
                    },
                    itemStyle: {
                      color: "rgba(255,255,255,0)",
                    },
                  },
                },
              ],
            },
          ],
        };
      that.optionString = option;
      window.addEventListener("resize", function () {
        waterChart.resize();
      });
      waterChart.setOption(option, true);
      if (this.isCheck == 1) {
        // 设置默认选中高亮
        setHighlight(
          waterChart,
          that.data.map((v) => v.value)
        );
      } else if (this.isCheck == 2) {
        // 带虚线边框饼图的默认高亮
        setBorderPieHighlight(
          waterChart,
          that.data.map((v) => v.value)
        );
      }
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
