<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div
      class="chart-box"
      ref="radarChart"
      :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"
    ></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "雷达图",
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
        radarChart = that.$echarts.init(that.$refs.radarChart),
        option = {
          tooltip: {},
          legend: {
            top: 10,
            data: that.data.map((v) => {
              return v.name;
            }),
          },
          color: that.color,
          radar: {
            // shape: 'circle',
            center: ["50%", "55%"],// 圆中心坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
            radius: 150,// 圆的半径，数组的第一项是内半径，第二项是外半径。
            startAngle: 90,  // 旋转的角度
            name: {
              textStyle: {
                color: "#fff",
                backgroundColor: "#999",
                borderRadius: 3,
                padding: [3, 5],
              },
            },
            indicator: [
              { name: "销售", max: 100 },
              { name: "管理", max: 100 },
              { name: "客服", max: 100 },
              { name: "信息技术", max: 100 },
              { name: "研发", max: 100 },
              { name: "市场", max: 100 },
            ],
          },
          series: [
            {
              type: "radar",
              name: "",
              data: that.data,
            },
          ],
        };
      window.addEventListener("resize", function () {
        radarChart.resize();
      });
      radarChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
