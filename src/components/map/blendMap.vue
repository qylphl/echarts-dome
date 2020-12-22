<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div class="chart-box" ref="mapChart" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
//   import 'echarts/map/js/world.js'
import "echarts/map/js/china.js"; // 引入中国地图数据
export default {
  props: {
    title: {
      default: "散点气泡地图",
      type: String,
    },
  },
  data() {
    return {
      data: [
        {
          name: "北京",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "天津",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "上海",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "重庆",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "河北",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "河南",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "云南",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "辽宁",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "黑龙江",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "湖南",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "安徽",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "山东",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "新疆",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "江苏",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "浙江",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "江西",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "湖北",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "广西",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "甘肃",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "山西",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "内蒙古",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "陕西",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "吉林",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "福建",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "贵州",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "广东",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "青海",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "西藏",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "四川",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "宁夏",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "海南",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "台湾",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "香港",
          value1: this.randomData(),
          value2: this.randomData(),
        },
        {
          name: "澳门",
          value1: this.randomData(),
          value2: this.randomData(),
        },
      ],
      resultdata0: [],
      resultdata1: [],
      resultdata2: [],
      sum0: 0,
      sum1: 0,
      sum2: 0,
      titledata: [],
      optionString: {},
      tipTitle: '注：该组件可以在src/components/map/blendMap.vue找到直接使用。'
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.getDataInfo(this.data);
    this.initChart();
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 1000);
    },
    getDataInfo(data) {
      let that = this;
      for (var i = 0; i < data.length; i++) {
        var d0 = {
          name: data[i].name,
          value: data[i].value1 + data[i].value2,
        };
        var d1 = {
          name: data[i].name,
          value: data[i].value1,
        };
        var d2 = {
          name: data[i].name,
          value: data[i].value2,
        };
        that.titledata.push(data[i].name);
        that.resultdata0.push(d0);
        that.resultdata1.push(d1);
        that.resultdata2.push(d2);
        that.sum0 += data[i].value1 + data[i].value2;
        that.sum1 += data[i].value1;
        that.sum2 += data[i].value2;
      }
      that.resultdata0.sort(that.numDescSort);
      that.resultdata1.sort(that.numDescSort);
      that.resultdata2.sort(that.numDescSort);
    },
    numDescSort(a, b) {
      return a.value - b.value;
    },
    initChart() {
      let that = this,
        mapChart = that.$echarts.init(that.$refs.mapChart),
        option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: ["全部", "门板", "拼框门"],
            selectedMode: "single",
          },
          visualMap: {
            min: 0,
            max: 2500,
            left: "left",
            top: "bottom",
            text: ["高", "低"],
            calculable: true,
            colorLightness: [0.2, 100],
            color: ["#c05050", "#e5cf0d", "#5ab1ef"],
            dimension: 0,
          },
          toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              dataView: {
                readOnly: false,
              },
              restore: {},
              saveAsImage: {},
            },
          },
          grid: {
            right: 40,
            top: 100,
            bottom: 40,
            width: "30%",
          },
          xAxis: [
            {
              position: "top",
              type: "value",
              boundaryGap: false,
              splitLine: {
                show: false,
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
            },
          ],
          yAxis: [
            {
              type: "category",
              data: that.titledata,
              axisTick: {
                alignWithLabel: true,
              },
            },
          ],
          series: [
            {
              z: 1,
              name: "全部",
              type: "map",
              map: "china",
              left: "10",
              right: "35%",
              top: 100,
              bottom: "35%",
              zoom: 0.75,
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              //roam: true,
              data: that.resultdata0,
            },
            {
              z: 1,
              name: "门板",
              type: "map",
              map: "china",
              left: "10",
              right: "35%",
              top: 100,
              bottom: "35%",
              zoom: 0.75,
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              //roam: true,
              data: that.resultdata1,
            },
            {
              z: 1,
              name: "拼框门",
              type: "map",
              map: "china",
              left: "10",
              right: "35%",
              top: 100,
              bottom: "35%",
              zoom: 0.85,
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              //roam: true,
              data: that.resultdata2,
            },
            {
              name: "全部",
              z: 2,
              type: "bar",
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                emphasis: {
                  color: "rgb(254,153,78)",
                },
              },
              data: that.resultdata0,
            },
            {
              name: "门板",
              z: 2,
              type: "bar",
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                emphasis: {
                  color: "rgb(254,153,78)",
                },
              },
              data: that.resultdata1,
            },
            {
              name: "拼框门",
              z: 2,
              type: "bar",
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                emphasis: {
                  color: "rgb(254,153,78)",
                },
              },
              data: that.resultdata2,
            },
            {
              name: "全部",
              z: 2,
              type: "pie",
              radius: ["17%", "25%"],
              center: ["30%", "82.5%"],
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                emphasis: {
                  color: "rgb(254,153,78)",
                },
              },
              data: that.resultdata0,
            },
            {
              name: "门板",
              z: 2,
              type: "pie",
              radius: ["17%", "25%"],
              center: ["30%", "82.5%"],
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                emphasis: {
                  color: "rgb(254,153,78)",
                },
              },
              data: that.resultdata1,
            },
            {
              name: "拼框门",
              z: 2,
              type: "pie",
              radius: ["17%", "25%"],
              center: ["30%", "82.5%"],
              label: {
                normal: {
                  show: true,
                },
                emphasis: {
                  show: true,
                },
              },
              itemStyle: {
                emphasis: {
                  color: "rgb(254,153,78)",
                },
              },
              data: that.resultdata2,
            },
          ],
        };
      this.optionString = option;
      window.addEventListener("resize", function () {
        mapChart.resize();
      });
      mapChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
