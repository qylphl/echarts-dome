<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="wordChart" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"></div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "热力图",
      type: String,
    },
    color: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      optionString: {},
      tipTitle: "注：该组件可以在src/components/heat/heat.vue找到直接使用。",
      colorList: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196027"]
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
        wordChart = that.$echarts.init(that.$refs.wordChart),
        getVirtulData = () => {
          var today = echarts.number.parseDate(new Date());
          var dayTime = 3600 * 24 * 1000;
          var thatday = today - dayTime * 365;
          var data = [];
          for (var time = thatday; time < today; time += dayTime) {
            data.push([
              echarts.format.formatTime("yyyy-MM-dd", time),
              Math.floor(Math.random() * 10000),
            ]);
          }
          return {
            data,
            today: echarts.format.formatTime("yyyy-MM-dd", today),
            thatday: echarts.format.formatTime("yyyy-MM-dd", thatday),
          };
        },
        option = {
          visualMap: {
            min: 0,
            max: 10000,
            inRange: {
              color: that.colorList,
            },
            show: false,
          },
          calendar: {
            top: '35%',
            bottom: '35%',
            left: '5%',
            right: '5%',
            cellSize: [14, 14],
            range: [getVirtulData()["thatday"], getVirtulData()["today"]],
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 4,
            },
            splitLine: {
              show: false,
            },
            yearLabel: { show: false },
          },
          series: {
            type: "heatmap",
            coordinateSystem: "calendar",
            data: getVirtulData()["data"],
          },
        };
      that.optionString = option;
      window.addEventListener("resize", function () {
        wordChart.resize();
      });
      wordChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
