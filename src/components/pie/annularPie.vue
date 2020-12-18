<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="annularChart"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
import {setHighlight} from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "环形图",
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
      tipTitle: '注：该组件可以在src/components/pie/annularPie.vue找到直接使用。'
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this,
        annularChart = this.$echarts.init(this.$refs.annularChart),
        colorList = this.color,
        option = {
          legend: {
            icon: "roundRect",
            orient: "horizontal",
            bottom: "10%",
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
          // color: ['#499bfe','#f67673','#ffc460','#bc5ccb','#40dea0','#08d471','#6ad408','#fff100','#ff7700','#ff0000','#ff5e66','#7c65f1','#601986'],
          series: [
            {
              type: "pie",
              radius: ["40%", "55%"],
              center: ["50%", "40%"],
              avoidLabelOverlap: true,
              label: {
                normal: {
                  show: false,
                  position: "center",
                },
                emphasis: {
                  show: true,
                  formatter: (params) => {
                    return (
                      "{name|" +
                      params.name +
                      "}\n{value|" +
                      params.value +
                      "}{percent|" +
                      "\n" +
                      "占比" +
                      params.percent.toFixed(2) +
                      "%}"
                    );
                  },
                  rich: {
                    name: {
                      fontSize: 14,
                      padding: [5, 0, 5, 0],
                      color: "#333",
                    },
                    value: {
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "#333",
                      padding: [5, 0, 5, 0],
                    },
                    percent: {
                      color: "#333",
                      fontSize: 12,
                      padding: [5, 0, 5, 0],
                    },
                  },
                },
              },
              labelLine: {
                normal: {
                  show: false,
                  length2: 10,
                },
              },
              data: this.data,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return colorList[params.dataIndex];
                  },
                  shadowBlur: 20,
                  shadowColor: "rgba(56,147,252,0.3)",
                  shadowBlur: 5,
                  shadowOffsetY: 5,
                },
                show: false,
                emphasis: {
                  borderColor: "#fff",
                  borderWidth: 1,
                },
                shadowBlur: 20,
                shadowColor: "rgba(56,147,252,0.3)",
                shadowBlur: 5,
                shadowOffsetY: 5,
              },
            },
          ],
        };
      that.optionString = option;
      window.addEventListener("resize", function () {
        annularChart.resize();
      });
      annularChart.setOption(option, true);
      setHighlight(
        annularChart,
        that.data.map((v) => v.value)
      );
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
