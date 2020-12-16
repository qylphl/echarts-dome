<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div
      class="chart-box"
      ref="mapChart"
      :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"
    ></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
//   import 'echarts/map/js/world.js'
import "echarts/map/js/china.js"; // 引入中国地图数据
export default {
  props: {
    title: {
      default: "地图",
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
        mapChart = that.$echarts.init(that.$refs.mapChart),
        option = {
          tooltip: {}, // 鼠标移到图里面的浮动提示框
          dataRange: {
            show: false,
            min: 0,
            max: 1000,
            text: ["High", "Low"],
            realtime: true,
            calculable: true,
            color: ["orangered", "yellow", "lightskyblue"],
          },
          geo: {
            // 这个是重点配置区
            map: "china", // 表示中国地图
            roam: true,
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: "rgba(0,0,0,0.4)",
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
          series: [
            {
              type: "scatter",
              coordinateSystem: "geo", // 对应上方配置
            },
            {
              name: "启动次数", // 浮动框的标题
              type: "map",
              geoIndex: 0,
              data: [
                {
                  name: "北京",
                  value: 599,
                },
                {
                  name: "上海",
                  value: 142,
                },
                {
                  name: "黑龙江",
                  value: 44,
                },
                {
                  name: "深圳",
                  value: 92,
                },
                {
                  name: "湖北",
                  value: 810,
                },
                {
                  name: "四川",
                  value: 453,
                },
              ],
            },
          ],
        };
      window.addEventListener("resize", function () {
        mapChart.resize();
      });
      mapChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
