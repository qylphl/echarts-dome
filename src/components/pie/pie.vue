<template>
  <div class="chart-content">
    <navBar :title="title ? title : '饼状图'" :optionString="deploy" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="pieChart" :style="{'background-color': themeType==1?'#07124a':'#fff'}"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
import {setHighlight,setBorderPieHighlight} from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "饼状图",
      type: String,
    },
    deploy: {
      type: Object,
    },
    data: {
      type: Array,
    },
    isCheck: {    // 是否默认选中高亮
      default: 0,
      type: Number,
    }
  },
  data() {
    return {
      tipTitle: '注："boxTitle"和"boxWidth"不是echart中option所需要的属性，可以删掉。',
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
          pieChart = that.$echarts.init(that.$refs.pieChart),
          option = that.deploy;
      window.addEventListener("resize", function () {
        pieChart.resize();
      });
      pieChart.setOption(option, true);
      if(this.isCheck == 1){ // 设置默认选中高亮
        that.tipTitle = '注："boxTitle"和"boxWidth"不是echart中option所需要的属性，可以删掉。如果需要默认选中高量的话，则要拷贝utils/chartsClass.js文件，使用setHighlight方法进行配置。',
        setHighlight(
          pieChart,
          that.data.map((v) => v.value)
        );
      }else if(this.isCheck == 2){  // 带虚线边框饼图的默认高亮
        that.tipTitle = '注："boxTitle"和"boxWidth"不是echart中option所需要的属性，可以删掉。如果需要默认选中高量的话，则要拷贝utils/chartsClass.js文件，使用setBorderPieHighlight方法进行配置。',
        setBorderPieHighlight(
          pieChart,
          that.data.map((v) => v.value)
        );
      }
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
