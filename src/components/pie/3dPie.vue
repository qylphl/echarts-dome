<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="stereoscopicPie"></div>
  </div>
</template>

<script>
import navBar from 'components/nav/navBar';
import HighCharts from "highcharts";
export default {
  props: {
    title: {
      default: "3D饼状图",
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
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      var newData = JSON.parse(JSON.stringify(this.data).replace(/value/g, "y"));
      newData.forEach((item) => {
        item.y = +item.y;
      });
      var option = {
        colors: this.color,
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
          },
          backgroundColor: "rgba(0,0,0,0)",
        },
        title: {
          text: "",
        },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        lang: {
          noData: "暂无数据", //真正显示的文本
        },
        noData: {
          position: {
            //相对于绘图区定位无数据标签的位置。 默认值：[object Object].
            //align: 'right',
            //verticalAlign: 'bottom'
          },
          attr: {
            //无数据标签中额外的SVG属性
            //'stroke-width': 1,
            //stroke: '#cccccc'
          },
          style: {
            //对无数据标签的CSS样式。 默认值：[object Object].
            fontWeight: "bold",
            fontSize: "15px",
          },
        },
        tooltip: {
          enabled: true,
          distance: -70, //通过设置这个属性，将每个小bai饼图的显示名称和每个饼du图重叠
          pointFormat: "<b>占比 {point.percentage:.1f}%</b>",
          backgroundColor: "rgba(0,0,0,0.6)", // 背景颜色
          borderRadius: 3, // 边框圆角
          borderWidth: 0, // 边框宽度
          style: {
            // 文字内容相关样式
            color: "#fff",
            fontSize: "12px",
          },
        },
        plotOptions: {
          pie: {
            size: "85%",
            allowPointSelect: true,
            cursor: "pointer",
            depth: 50,
            dataLabels: {
              enabled: false,
              // format: '{point.name}{point.y}',
              formatter: function () {
                return (
                  '<span style="display:block;width:7px;height:7px;background-color:' +
                  this.color +
                  '"></span>' +
                  this.key +
                  this.y
                );
              },
              style: {
                color: "#333",
                fontSize: "12px",
                fontWeight: "400",
                textOutline: "none",
              },
            },
            states: {
              halo: {
                pacity: 1,
              },
            },
            borderWidth: 0.5,
            center: ["50%", "45%"],
            showInLegend: true,
          },
        },
        legend: {
          align: "center",
          useHTML: true,
          symbolHeight: 9,
          symbolWidth: 20,
          itemGap: 20,
          symbolRadius: 2,
          itemDistance: 5,
          y: -25,//距离Y轴的距离
          itemStyle: {
            fontSize: "14px",
            letterSpacing: 0,
            color: "#333",
            fontWeight: "nomol",
          },
        },
        series: [
          {
            type: "pie",
            // size: '68%',
            zIndex: 1,
            data: newData,
          },
        ],
      };
      HighCharts.chart(this.$refs.stereoscopicPie, option);
    },
  },
  components:{navBar}
};
</script>

<style lang="scss" scoped>
</style>
