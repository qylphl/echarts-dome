<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="barChart" :style="{'background-color': themeType==1?'#07124a':'#fff'}"></div>
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
    deploy: {
        type: Object,
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
        option = that.deploy;
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
