<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="roseAnnularPie"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
export default {
  props: {
    title: {
      default: "玫瑰环图",
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
       tipTitle: '注：请注意该图表使用的是highcharts，可以在src/components/pie/roseAnnularPie.vue中找到直接使用。'
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let that = this,
        roseAnnularPie = this.$echarts.init(this.$refs.roseAnnularPie),
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
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            textStyle: {
              fontSize: 18,
            },
          },
          series: [
            {
              type: "pie",
              radius: ["20%", "50%"],
              center: ["50%", "40%"],
              roseType: "radius",
              label: {
                show: true,
                normal: {
                  position: "outside",
                  fontSize: 16,
                },
              },
              labelLine: {
                length: 2,
                length2: 7,
              },
              data: that.data.map((it, i) => {
                return {
                  value: it.value,
                  name: it.name,
                  itemStyle: {
                    color: `${that.color[i]}`,
                    borderColor: `${that.color[i]}`,
                    borderWidth: 1,
                  },
                };
              }),
            },
          ],
        };
      that.optionString = option;
      window.addEventListener("resize", function () {
        roseAnnularPie.resize();
      });
      roseAnnularPie.setOption(option, true);
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
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
