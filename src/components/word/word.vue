<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div
      class="chart-box"
      ref="wordChart"
      :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"
    ></div>
  </div>
</template>

<script>
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min"; 
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "词云图",
      type: String,
    },
    data: {
      type: Array,
    }
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
        wordChart = that.$echarts.init(that.$refs.wordChart),
        randcolor = () => {
          let r = 100 + ~~(Math.random() * 100);
          let g = 135 + ~~(Math.random() * 100);
          let b = 100 + ~~(Math.random() * 100);
          return `rgb(${r}, ${g}, ${b})`;
        },
        option = {
          tooltip: {
            trigger: "item",
            padding: [10, 15],
            textStyle: {
              fontSize: 20,
            },
            formatter: (params) => {
              const { name, value } = params;
              return ` 平台：${name} <br/> 数量：${value} `;
            },
          },
          series: [
            {
              type: "wordCloud",
              gridSize: 20,
              sizeRange: [12, 50],
              rotationRange: [0, 0],
              shape: "circle",
              textStyle: {
                normal: {
                  color: (params) => {
                    return randcolor();
                  },
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: "#333",
                },
              },
              data: that.data,
            },
          ],
        };
      window.addEventListener("resize", function () {
        wordChart.resize();
      });
      wordChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
