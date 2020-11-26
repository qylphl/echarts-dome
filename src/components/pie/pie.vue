<template>
  <div class="chart-content">
    <p class="title-bar">{{title}}</p>
    <div class="chart-box" ref="pieChart"></div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      default: "普通饼图",
      type: String,
    },
  },
  data() {
    return {
      data: [
        { value: 1438, name: "违纪行为" },
        { value: 109, name: "职务违法犯罪行为" },
        { value: 2865, name: "其他违法犯罪行为" },
      ],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let pieChart = this.$echarts.init(this.$refs.pieChart);
      let option = {
        color: ["#328ff6", "#f56e6b", "#c956d7"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          icon: "roundRect",
          orient: "horizontal",
          bottom: '10%',
          itemGap: 20,
          align: "left",
          padding: [5, 25, 5, 10],
          itemWidth: 17,
          itemHeight: 8,
          selectedMode: false,
          textStyle: {
            color: "#666",
            fontSize: 12, //字体大小
            padding: [0, 15, 0, 0],
          },
          data: this.data.map((v) => v.name),
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "40%"],
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      window.addEventListener("resize", function () {
        pieChart.resize();
      });
      pieChart.setOption(option, true);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
