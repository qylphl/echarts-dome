<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="funnelChart" :style="{'background-color': themeType==1?'#07124a':'#fff'}"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
export default {
  props: {
    title: {
      default: "漏斗图",
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
          funnelChart = that.$echarts.init(that.$refs.funnelChart),
          option = that.deploy;
      window.addEventListener("resize", function () {
        funnelChart.resize();
      });
      funnelChart.setOption(option, true);
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
