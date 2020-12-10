<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="solidPie"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import Highcharts from "highcharts/highcharts";
export default {
  props: {
    title: {
      default: "3D环形图",
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
      var each = Highcharts.each,
        round = Math.round,
        cos = Math.cos,
        sin = Math.sin,
        deg2rad = Math.deg2rad;
      Highcharts.wrap(Highcharts.seriesTypes.pie.prototype, "translate", function (proceed) {
          proceed.apply(this, [].slice.call(arguments, 1));
          if (!this.chart.is3d()) {
            return;
          }
          var series = this,
            chart = series.chart,
            options = chart.options,
            seriesOptions = series.options,
            depth = seriesOptions.depth || 0,
            options3d = options.chart.options3d,
            alpha = options3d.alpha,
            beta = options3d.beta,
            z = seriesOptions.stacking ? (seriesOptions.stack || 0) * depth : series._i * depth;
          z += depth / 2;
          if (seriesOptions.grouping !== false) {
            z = 0;
          }
          each(series.data, function (point) {
            var shapeArgs = point.shapeArgs,
              angle;
            point.shapeType = "arc3d";
            var ran = point.options.h;
            shapeArgs.z = z;
            shapeArgs.depth = depth * 0.75 + ran;
            shapeArgs.alpha = alpha;
            shapeArgs.beta = beta;
            shapeArgs.center = series.center;
            shapeArgs.ran = ran;
            angle = (shapeArgs.end + shapeArgs.start) / 2;
            point.slicedTranslation = {
              translateX: round(
                cos(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
              translateY: round(
                sin(angle) * seriesOptions.slicedOffset * cos(alpha * deg2rad)
              ),
            };
          });
      });
      (function (H) {
        H.wrap(Highcharts.SVGRenderer.prototype, "arc3dPath", function (proceed) {
          // Run original proceed method
          var ret = proceed.apply(this, [].slice.call(arguments, 1));
          ret.zTop = (ret.zOut + 0.5) / 100;
          return ret;
        });
      })(Highcharts);
      var option = {
        chart: {
          type: "pie",
          animation: false,
          marginTop: 20, //上边距99999
          backgroundColor: "rgba(255, 255, 255, 0)",
          events: {
            load: function () {
              var each = Highcharts.each,
                points = this.series[0].points;
              each(points, function (p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran,
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran,
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran,
                });
              });
            },
          },
          options3d: {
            enabled: true,
            alpha: 62, //内旋转角度
            beta: 0, //外选择角度
          },
        },
        // 去掉标题
        title: { text: null },
        credits: {
          //关闭版权信息的标签
          enabled: false,
        },
        //鼠标放在饼图上显示的字
        tooltip: {
          // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>', //小数点保留位数
          backgroundColor: "#fff", //数据提示框的背景颜色
          borderColor: "none", //边框颜色
          useHTML: true, //是否使用HTML编辑提示信息
          formatter: function () {
            // return '<b style="color:#000">' + this.key + '</b><p style="color:#fff;">' + this.y + '<span style="color:rgba(250, 250, 250, 0.66);">' + ' (' + Highcharts.numberFormat(this.percentage, 1) + '%' + ')' + '</span>' + '</p>'
            return '<b style="color:#333">' + this.key;
          },
        },
        //数据列配置
        plotOptions: {
          pie: {
            // 悬浮时背景不透明
            states: {
              inactive: {
                opacity: 1,
              },
            },
            borderColor: "#000",
            borderWidth: 1,
            allowPointSelect: true, //是否允许选中点
            cursor: "pointer", //同css
            // size: 100, //饼图大小
            // innerSize: 66, //用于绘制饼状图时，饼状图的圆心预留多大的空
            depth: 10, //饼图厚度
            size: '65%', //饼图大小
            innerSize: 70, //用于绘制饼状图时，饼状图的圆心预留多大的空
            center: ["50%", "45%"],
            dataLabels: {
              //数据标签
              enabled: true, //是否启用
              format: "{point.name}",
              style: {
                //样式配置
                textOutline: "none", //去掉文字白边
                color: "#333",
                fontSize: 12,
              },
            },
          },
        },
        series: [
          {
            type: "pie",
            // name: 'Browser share',
            data: [
              {
                name: "地厅级 15 件 <br> 占比 30%",
                y: 60,
                h: 50,
                color: "#4ea8ff",
              },
              {
                name: "县处级 15 件 <br> 占比 30%",
                y: 80,
                h: 10,
                color: "#fe8d51",
              },
              {
                name: "乡科级 15 件 <br> 占比 20%",
                y: 50,
                h: 22,
                color: "#ffb45a",
              },
              {
                name: "其他人员 15 件 <br> 占比 20%",
                y: 94,
                h: 38,
                color: "#9f8cff",
              },
            ],
          },
        ],
      };
      Highcharts.chart(this.$refs.solidPie, option);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped></style>
