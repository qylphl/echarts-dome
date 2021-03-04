<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="waterChart" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "水滴图",
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
      tipTitle: '注：该组件可以在src/components/water/water.vue找到直接使用。'
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
          /*  title: {
            // 水球图标题样式
            text: that.data.map(v => v.name)[0],
            left: "center",
            top: "40",
            textStyle: {
              color: "#333",
              fontSize: 20,
              fontWeight: "normal",
            },
          }, */
          series: [
            {
              type: "liquidFill",
              center: ["50%", "50%"],
              data: [
                that.data.map((v) => v.value)[0],
                {
                  value: +that.data.map((v) => v.value)[0] + 0.03,
                  direction: "left",
                  itemStyle: {
                    normal: {
                      color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                          { offset: 0, color: that.waveColor[0] },
                          { offset: 1, color: that.waveColor[1] },
                        ],
                        globalCoord: false,
                      },
                      opacity: 0.2,
                    },
                  },
                },
                {
                  value: that.data.map((v) => v.value)[0],
                  direction: "left",
                  itemStyle: {
                    normal: {
                      color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                          { offset: 0, color: that.waveColor[0] },
                          { offset: 1, color: that.waveColor[1] },
                        ],
                        globalCoord: false,
                      },
                      opacity: 0.95,
                    },
                  },
                },
              ],
              radius: "300", //调整大小
              shape: "circle", //修改形状
              amplitude: 8, // 波浪波动起伏大小
              waveLength: "100%", // 波浪长度
              backgroundStyle: {
                color: that.bgcolor,
                borderWidth: 0, // 内部球边框宽度
                borderColor: "#fff", // 内部球边框颜色
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: that.waveColor[0] },
                    { offset: 1, color: that.waveColor[1] },
                  ],
                  globalCoord: false,
                },
                opacity: 0.3, //透明度
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.1)",
              },
              label: {
                normal: {
                  textStyle: {
                    color: that.bdColor[1], // 在波浪上方时的文字颜色
                    insideColor: "#fff", // 在波浪下方时的文字颜色
                    fontSize: 23, // 文字大小
                  },
                },
              },
              outline: {
                borderDistance: 4, // 外边框与内边框间的距离
                itemStyle: {
                  borderWidth: 5, // 外边框的宽度
                  borderColor: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      { offset: 0, color: that.bdColor[0] },
                      { offset: 1, color: that.bdColor[1] },
                    ],
                    globalCoord: false,
                  },
                },
              },
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
