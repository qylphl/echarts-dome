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
      default: "竖状热力图",
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
      tipTitle: "注：该组件可以在src/components/heat/verticalHeat.vue找到直接使用。",
      colorList: ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196027"],
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
        getVirtulData = (year) => {
            year = year || '2018';
            var date = +echarts.number.parseDate(year + '-01-01');
            var end = +echarts.number.parseDate((+year + 1) + '-01-01');
            var dayTime = 3600 * 24 * 1000;
            var data = [];
            for (var time = date; time < end; time += dayTime) {
                data.push([
                    echarts.format.formatTime('yyyy-MM-dd', time),
                    Math.floor(Math.random() * 1000)
                ]);
            }
            return data;
        },
        option = {
          tooltip: {
            position: "top",
            formatter: function (p) {
              var format = echarts.format.formatTime("yyyy-MM-dd", p.data[0]);
              return format + ": " + p.data[1];
            },
          },
          visualMap: {
            min: 0,
            max: 1000,
            calculable: true,
            orient: "vertical",
            right: "6%",
            top: "center",
          },
          calendar: [
          /*   {
              orient: "vertical",
              range: "2018",
            },
            {
              left: 300,
              orient: "vertical",
              range: "2019",
            }, */
            {
              left: '20%',
              right: '30%',
              top: '8%',
              bottom: '5%',
              cellSize: [20, "auto"],
              orient: "vertical",
              range: "2020",
              dayLabel: {
                margin: 5,
              },
            },
          ],
          series: [
            /* {
              type: "heatmap",
              coordinateSystem: "calendar",
              calendarIndex: 0,
              data: getVirtulData(2018),
            },
            {
              type: "heatmap",
              coordinateSystem: "calendar",
              calendarIndex: 1,
              data: getVirtulData(2019),
            }, */
            {
              type: "heatmap",
              coordinateSystem: "calendar",
            //   calendarIndex: 2,
              calendarIndex: 0,
              data: getVirtulData(2020),
            },
          ],
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
