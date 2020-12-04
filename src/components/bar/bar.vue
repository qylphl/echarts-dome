<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="barChart"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar'
export default {
  props: {
    title: {
      default: "普通饼图",
      type: String,
    },
    option: {
        type: Object
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
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this,
        barChart = this.$echarts.init(this.$refs.barChart),
        data = this.data;
        option = this.option;
      window.addEventListener("resize", function () {
        barChart.resize();
      });
      barChart.setOption(option, true);
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
