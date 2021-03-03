<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="wordChart"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import HighCharts from "highcharts";
import wordcloud from "highcharts/modules/wordcloud";
wordcloud(HighCharts);

export default {
  props: {
    title: {
      default: "词云图",
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
    return {
      optionString: {},
      tipTitle: "注：请注意该图表使用的是highcharts，建议数值相差不大的情况下使用，否则字体相差太过大，可以在src/components/word/word2.vue中找到直接使用。",
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var newData = JSON.parse(JSON.stringify(this.data).replace(/value/g, "weight")),
      option = {
        series: [
          {
            type: "wordcloud",
            data: newData,
          },
        ],
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        title: {
          text: "",
        },
      };
      this.optionString = option;
      HighCharts.chart(this.$refs.wordChart, option);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
