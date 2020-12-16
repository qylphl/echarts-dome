<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
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
      default: "区域地图",
      type: String,
    },
    data: {
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
          title: {
            text: "",
            subtext: "",
            x: "center",
          },
          tooltip: {
            trigger: "item",
          },
          //左侧小导航图标
          /*  visualMap: {  
             show : true,  
             x: 'left',  
             y: 'center',  
             splitList: [   
                 {start: 500, end:600},{start: 400, end: 500},  
                 {start: 300, end: 400},{start: 200, end: 300},  
                 {start: 100, end: 200},{start: 0, end: 100},  
             ],  
             color: that.color 
         },    */
          //配置属性
          series: [
            {
              name: "数据",
              type: "map",
              mapType: "china",
              width: '96%',
              roam: false, //是否开启鼠标缩放和平移漫游  'scale' 或者 'move'。设置成 true 为都开启
              label: {
                //是否显示市
                show: true,
                textStyle: {
                  //文字颜色
                  color: "#cccce0",
                  //文字大小
                  fontSize: 12,
                  //透明度0清空文字背景
                  backgroundColor: "rgba(0,0,0,0)",
                },
              },
              viewControl: {
                //地图视角，控制初始大小
                distance: 100,
                //禁止旋转0，1可缩放
                rotateSensitivity: 0,
                zoomSensitivity: 0,
                //视角绕 x 轴，即上下旋转的角度
                alpha: 90,
              },
              itemStyle: {
                normal: {
                  areaColor: "rgba(0,255,255,.02)",
                  borderColor: "#00ffff",
                  borderWidth: 1.5,
                  shadowColor: "#00ffff",
                  shadowOffsetX: 0,
                  shadowOffsetY: 4,
                  shadowBlur: 10,
                },
              },
              emphasis: {
                label: {
                  //是否显示高亮
                  textStyle: {
                    //高亮文字颜色
                    color: "#cccce0",
                  },
                },
                itemStyle: {
                  //地图高亮颜色
                  areaColor: "rgba(0,255,255,.02)",
                  color: "none",
                },
              },
              data: that.data, //数据
            },
          ],
        };
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
