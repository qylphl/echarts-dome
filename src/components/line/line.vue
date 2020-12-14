<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="lineChart" :style="{'background-color': themeType==1?'#07124a':'#fff'}"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
export default {
  props: {
    title: {
      default: "折线图",
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
          lineChart = that.$echarts.init(that.$refs.lineChart),
          option = that.deploy;
      window.addEventListener("resize", function () {
        lineChart.resize();
      });
      lineChart.setOption(option, true);
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
