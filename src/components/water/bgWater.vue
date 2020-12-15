<template>
  <div class="chart-content water-content-box">
    <navBar :title="title"></navBar>
    <div class="chart-box water-bg flex-box" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }">
      <div class="water-content" ref="waterChart"></div>
    </div>
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
    bgColor: {
      default: "#527afe",
      type: String,
    },
    color: {
      default: "#82c9ff",
      type: String,
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
        waterChart = that.$echarts.init(that.$refs.waterChart),
        option = {
          backgroundColor: that.bgColor,
          series: [
            {
              type: "liquidFill",
              data: [
                that.data.map((v) => v.value)[0],
                {
                  value: +that.data.map((v) => v.value)[0] + 0.04,
                  direction: "left",
                  itemStyle: {
                    normal: {
                      color: that.color,
                      opacity: 0.2,
                    },
                  },
                },
                {
                  value: that.data.map((v) => v.value)[0],
                  direction: "left",
                  itemStyle: {
                    normal: {
                      color: that.color,
                      opacity: 0.3,
                    },
                  },
                },
              ],
              amplitude: 9, // 波浪波动起伏大小
              waveLength: "100%", // 波浪长度
              radius: "100%", //调整大小
              shape: "circle", //修改形状，目前支持	'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
              color: ["#1598ED", "#45BDFF"],
              backgroundStyle: {
                color: "#527afe",
              },
              outline: {
                show: false, //是否显示外圈线
              },
              itemStyle: {
                color: that.color,
                opacity: 0.95, //透明度
                // shadowBlur: 50,
                // shadowColor: 'rgba(0, 0, 0, 0.4)'
              },
              label: {
                normal: {
                  textStyle: {
                    fontSize: 35, //修改字体大小
                    color: "#fff",
                  },
                },
              },
            },
          ],
        };
      window.addEventListener("resize", function () {
        waterChart.resize();
      });
      waterChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.water-content-box {
  .water-bg {
    background: url("../../../src/assets/img/repeatPiece_echarts_bg.png") no-repeat center;
    background-size: contain;
    justify-content: center;
    .water-content {
      width: 288px;
      height: 288px;
      border-radius: 50%;
      overflow: hidden;
      background-color: #527afe;
      box-shadow: 0 13px 13px rgba(49, 74, 203, 1);
      margin-top: 74px;
    }
  }
}
</style>
