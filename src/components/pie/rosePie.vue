<template>
  <div class="chart-content">
    <p class="title-bar">{{ title }}</p>
    <div class="chart-box" ref="rosePieChart"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: "玫瑰饼图",
      type: String,
    },
    data: {
      type: Array,
    },
    color: {  // 只能传普通颜色不能为渐变色
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
        rosePieChart = this.$echarts.init(this.$refs.rosePieChart),
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
          tooltip: {
            trigger: "item",
            textStyle: {
              color: "#fff",
              fontSize: 14,
            },
            formatter: "{b}<br/>{c} <br/>占比{d}%",
          },
          series: [
            {
              type: "pie",
              radius: "60%",
              center: ["50%", "40%"],
              clockwise: true,
              avoidLabelOverlap: true,
              // minAngle: 50,           　　 //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
              label: {
                show: false,
                position: "outside",
                formatter: function (params) {
                  const name = params.name;
                  const value = params.value;
                  const percent = params.percent + "%";
                  const index = params.dataIndex;
                  return [
                    `{hr${index}|}`,
                    `{a${index}|${value} ${percent}}`,
                    `{b${index}|${name}}`,
                  ].join("\n");
                },
                rich: that.getRich(),
              },
              labelLine: {
                normal: {
                  // lineStyle: {
                  //     color: 'rgb(98,137,169)',
                  // },
                  show: false,
                  smooth: 0.2,
                  length: 10,
                  // length2: 10,
                },
              },
              itemStyle: {
                normal: {
                  color: function (params) {
                    return that.color[params.dataIndex];
                  },
                },
                emphasis: {
                  borderColor: "#fff",
                  borderWidth: 2,
                  shadowColor: "rgba(158,223,253,0.1)",
                  shadowBlur: 5,
                  shadowOffsetY: 5,
                },
              },
              data: that.data,
              roseType: "radius",
            },
          ],
        };
      window.addEventListener("resize", function () {
        rosePieChart.resize();
      });
      rosePieChart.setOption(option, true);
    },
    getRich() {
      let that = this,
        result = {};
      that.color.forEach((v, i) => {
        result[`hr${i}`] = {
          backgroundColor: that.color[i],
          borderRadius: 3,
          width: 3,
          height: 3,
          padding: [3, 3, 0, -12],
        };
        result[`a${i}`] = {
          padding: [8, -20, -10, 0],
          color: "#333",
          fontSize: 12,
        };
        result[`b${i}`] = {
          padding: [8, -20, 0, 0],
          color: "#333",
          fontSize: 12,
        };
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
