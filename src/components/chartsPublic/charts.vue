<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="chart-box" ref="chartsContainer" :style="{'background-color': themeType==1?'#07124a':'#fff'}"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
export default {
  props: {
    title: {
      default: "echart图",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      optionString: 'option='+JSON.stringify(this.deploy),
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
          chartsContainer = that.$echarts.init(that.$refs.chartsContainer),
          option = that.deploy;
      window.addEventListener("resize", function () {
        chartsContainer.resize();
      });
      chartsContainer.setOption(option, true);
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
