<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div
      class="chart-box"
      ref="mapChart"
      :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"
    ></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
//   import 'echarts/map/js/world.js'
import "echarts/map/js/china.js"; // 引入中国地图数据
export default {
  props: {
    title: {
      default: "轨迹地图",
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
        mapChart = that.$echarts.init(that.$refs.mapChart),
        option = {
          geo: {
            map: "china",
            aspectScale: 0.75, //长宽比
            zoom: 1.1,
            roam: false,
            itemStyle: {
              normal: {
                areaColor: {
                  type: "radial",
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#274d68", // 100% 处的颜色
                    },
                  ],
                  globalCoord: true, // 缺省为 false
                },
                shadowColor: "rgb(58,115,192)",
                shadowOffsetX: 10,
                shadowOffsetY: 11,
              },
              emphasis: {
                areaColor: "#2AB8FF",
                borderWidth: 0,
                color: "green",
                label: {
                  show: false,
                },
              },
            },
            regions: [
              {
                name: "南海诸岛",
                itemStyle: {
                  areaColor: "rgba(0, 10, 52, 1)",

                  borderColor: "rgba(0, 10, 52, 1)",
                  normal: {
                    opacity: 0,
                    label: {
                      show: false,
                      color: "#009cc9",
                    },
                  },
                },
              },
            ],
          },
          series: [
            {
              type: "map",
              roam: false,
              label: {
                normal: {
                  show: true,
                  textStyle: {
                    color: "#1DE9B6",
                  },
                },
                emphasis: {
                  textStyle: {
                    color: "rgb(183,185,14)",
                  },
                },
              },
              itemStyle: {
                normal: {
                  borderColor: "rgb(147, 235, 248)",
                  borderWidth: 1,
                  areaColor: {
                    type: "radial",
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#09132c", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "#274d68", // 100% 处的颜色
                      },
                    ],
                    globalCoord: true, // 缺省为 false
                  },
                },
                emphasis: {
                  areaColor: "rgb(46,229,206)",
                  //    shadowColor: 'rgb(12,25,50)',
                  borderWidth: 0.1,
                },
              },
              zoom: 1.1,
              //     roam: false,
              map: "china", //使用
              // data: this.difficultData //热力图数据   不同区域 不同的底色
            },
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              showEffectOn: "render",
              zlevel: 1,
              rippleEffect: {
                period: 15,
                scale: 4,
                brushType: "fill",
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: "{b}",
                  position: "right",
                  offset: [15, 0],
                  color: "#1DE9B6",
                  show: true,
                },
              },
              itemStyle: {
                normal: {
                  color:
                    "#1DE9B6" /* function (value){ //随机颜色
                    return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
                    }*/,
                  shadowBlur: 10,
                  shadowColor: "#333",
                },
              },
              symbolSize: 12,
              data: [
                { value: [118.8062, 31.9208], itemStyle: { color: "#4ab2e5" } },
                { value: [127.9688, 45.368], itemStyle: { color: "#4fb6d2" } },
                { value: [125.8154, 44.2584], itemStyle: { color: "#5abead" } },
                { value: [116.4551, 40.2539], itemStyle: { color: "#f34e2b" } },
                { value: [117.4219, 39.4189], itemStyle: { color: "#f58414" } },    
                { value: [102.9199, 25.46639], itemStyle: { color: "#96cc34" } },
                { value: [119.4543, 25.9222] },
              ],
            }, //地图线的动画效果
            {
              type: "lines",
              zlevel: 2,
              effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 7, //图标大小
              },
              lineStyle: {
                normal: {
                  color: "#1DE9B6",
                  /* function (value){ //随机颜色
                                ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                                '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                                '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                                '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                                '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                                '#52b9c7','#4fb6d2','#4ab2e5']
                                return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
                            }*/
                  width: 1, //线条宽度
                  opacity: 0.1, //尾迹线条透明度
                  curveness: 0.3, //尾迹线条曲直度
                },
              },
              data: [
                {
                  coords: [
                    [118.8062, 31.9208],
                    [119.4543, 25.9222],
                  ],
                  lineStyle: { color: "#4ab2e5" },
                },
                {
                  coords: [
                    [127.9688, 45.368],
                    [119.4543, 25.9222],
                  ],
                  lineStyle: { color: "#4fb6d2" },
                },
                {
                  coords: [
                    [125.8154, 44.2584],
                    [119.4543, 25.9222],
                  ],
                  lineStyle: { color: "#5abead" },
                },
                {
                  coords: [
                    [116.4551, 40.2539],
                    [119.4543, 25.9222],
                  ],
                  lineStyle: { color: "#f34e2b" },
                },
                {
                  coords: [
                    [102.9199, 25.46639],
                    [119.4543, 25.9222],
                  ],
                  lineStyle: { color: "#96cc34" },
                },
              ],
            },
          ],
        };
      window.addEventListener("resize", function () {
        mapChart.resize();
      });
      mapChart.showLoading();
      mapChart.hideLoading();
      mapChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
