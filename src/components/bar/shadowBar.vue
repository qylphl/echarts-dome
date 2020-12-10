<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box shadow-charts-box" :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }">
      <div class="echarts_legend" v-if="data.length > 0">
        <span class="legend_sort_tip sort_tip_top">高</span>
        <span class="legend_sort_tip sort_tip_bottom">低</span>
        <p class="flex-box legend_content" v-for="(item, index) in data.map((v) => v.name)" :key="index">
          <span class="legend_index" :style="{'background': 'linear-gradient(to bottom,'+color[index]+' 0%,'+color[index]+' 100%'}">{{ index + 1 }}</span>
          <span class="legend_title">{{item}}</span>
        </p>
      </div>
      <div class="chart-box-content" ref="barChart"></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { sortByKey } from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "带阴影柱状图",
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
        barChart = that.$echarts.init(that.$refs.barChart),
        dataList = sortByKey(that.data,'value'),
        option = {
          color: [
            "rgba(80,136,249,1)",
            "rgba(80,136,249,1)",
            "rgba(80,136,249,1)",
            "rgba(80,136,249,1)",
            "rgba(80,136,249,1)",
            "rgba(80,136,249,1)",
            "rgba(180,67,233,1)",
            "rgba(180,67,233,1)",
            "rgba(180,67,233,1)",
            "rgba(180,67,233,1)",
            "rgba(180,67,233,1)",
            "rgba(180,67,233,1)",
            "rgba(253,125,124,1)",
          ],
          title: {
            text: "问题性质数量排行",
            left: '10',
            top: "10",
            textStyle: {
              color: "#333",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 16,
            },
          },
          grid: {
            left: '3%',
            top: "12%",
            right: '8%',
            bottom: 5,
            containLabel: true,
          },
          tooltip: {
            // trigger: 'item',
            trigger: "axis",
            padding: [10, 20], // 内边距
            backgroundColor: "rgba(255,255,255,0.9)", //通过设置rgba调节背景颜色与透明度
            color: "#0f0f0f",
            textStyle: {
              color: "black",
            },
            formatter: function (params, ticket, callback) {
              var htmlStr = "<div style='color: #0f0f0f;'>";
              htmlStr +=
                "<p style='font-size:15px;'>" + params[0].name + "</p>";
              htmlStr +=
                "<p style='font-size:15px;padding:5px 0;'><span style='dispaly:inline-block;color:#0b73ec;padding-right:8px;font-size:20px;font-weight: bold;'>" +
                params[0].value +
                "</span>件</p>";
              htmlStr += "<p style='font-size:15px;'></p>";
              htmlStr += "</div>";
              return htmlStr;
            },
          },
          xAxis: {
            type: "category",
            boundaryGap: true,
            data: dataList.map((v) => v.name),
            axisPointer: {
              show: true,
              type: "line",
              lineStyle: {
                color: "rgba(230,212,254,.8)",
              },
            },
            axisLine: {
              lineStyle: {
                fontSize: 16,
                color: "#c9c6c6",
              },
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              fontSize: 16,
              color: "#333",
              interval: 0,
              show: true,
              formatter: function (value, index) {
                return index + 1;
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                fontSize: 14,
                color: "#666",
              },
            },
            splitLine: {
              lineStyle: {
                color: "#ced3dc",
                width: 1,
                type: "dashed",
              },
            },
          },
          series: [
            // 柱状图上的小圆点
            {
              type: "line",
              smooth: true,
              symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
              showAllSymbol: true,
              symbolSize: 7,
              z: 4,
              itemStyle: {
                normal: {
                  color: "#bcc1eb", //折点颜色
                  borderColor: "#fffffb",
                  lineStyle: {
                    color: "rgba(0,0,0,0)", //折线颜色
                  },
                },
              },
              data: dataList.map((v) => v.value),
            },
            // 柱状图
            {
              type: "bar",
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: dataList.map((v) => v.value),
              barWidth: "30",
              z: 3,
              itemStyle: {
                barBorderRadius: [5, 5, 2, 2],
                emphasis: {
                  barBorderRadius: [5, 5, 2, 2],
                },
                normal: {
                  barBorderRadius: [5, 5, 2, 2],
                  color: function (params) {
                    return that.color[params.dataIndex];
                  },
                },
              },
            },
            // 柱状图后面的阴影背景部分
            {
              type: "line",
              smooth: true,
              symbol: "none", //取消折点圆圈
              clickable: false,
              areaStyle: {
                normal: {
                  color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "rgba(80,163,255,.6)", // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: "rgba(80,163,255,.1)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },

                  shadowColor: "rgba(80,163,255,.2)",
                },
              },
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: "rgba(0,0,0,0)", //折线颜色
                  },
                },
              },
              data: dataList.map((v) => +v.value + +100),
            },
          ],
        };
      window.addEventListener("resize", function () {
        barChart.resize();
      });
      barChart.setOption(option, true);
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.chart-content {
  .shadow-charts-box {
    position: relative;
    .echarts_legend {
      cursor: default;
      position: absolute;
      z-index: 99;
      right: 5px;
      top: 10px; 
      padding-left: 15px;
      border: 0;
      border-left: 2px solid #333;
      border-image: -webkit-linear-gradient(
          #30c0ff,
          #34beff,
          #3db6ff,
          #3eb4fe,
          #4da7ff,
          #51a2fe,
          #5f94fe,
          #648efe,
          #747fff,
          #7a78ff,
          #8769ff,
          #8f63ff,
          #9d55ff,
          #a350ff,
          #ae44fc,
          #b440fb,
          #be38f7,
          #c336f4,
          #cd36e7,
          #d335e1,
          #de3bcc,
          #e43fbf,
          #ea49a7,
          #ec4f9c,
          #f1598a,
          #f5607d
        )
        20 20;
      border-image: -moz-linear-gradient(
          #30c0ff,
          #34beff,
          #3db6ff,
          #3eb4fe,
          #4da7ff,
          #51a2fe,
          #5f94fe,
          #648efe,
          #747fff,
          #7a78ff,
          #8769ff,
          #8f63ff,
          #9d55ff,
          #a350ff,
          #ae44fc,
          #b440fb,
          #be38f7,
          #c336f4,
          #cd36e7,
          #d335e1,
          #de3bcc,
          #e43fbf,
          #ea49a7,
          #ec4f9c,
          #f1598a,
          #f5607d
        )
        20 20;
      border-image: -o-linear-gradient(
          #30c0ff,
          #34beff,
          #3db6ff,
          #3eb4fe,
          #4da7ff,
          #51a2fe,
          #5f94fe,
          #648efe,
          #747fff,
          #7a78ff,
          #8769ff,
          #8f63ff,
          #9d55ff,
          #a350ff,
          #ae44fc,
          #b440fb,
          #be38f7,
          #c336f4,
          #cd36e7,
          #d335e1,
          #de3bcc,
          #e43fbf,
          #ea49a7,
          #ec4f9c,
          #f1598a,
          #f5607d
        )
        20 20;
      border-image: linear-gradient(
          #30c0ff,
          #34beff,
          #3db6ff,
          #3eb4fe,
          #4da7ff,
          #51a2fe,
          #5f94fe,
          #648efe,
          #747fff,
          #7a78ff,
          #8769ff,
          #8f63ff,
          #9d55ff,
          #a350ff,
          #ae44fc,
          #b440fb,
          #be38f7,
          #c336f4,
          #cd36e7,
          #d335e1,
          #de3bcc,
          #e43fbf,
          #ea49a7,
          #ec4f9c,
          #f1598a,
          #f5607d
        )
        20 20;
      &::after {
        content: "";
        position: absolute;
        bottom: 3px;
        left: -8px;
        display: inline-block;
        width: 8px;
        height: 1px;
        border-bottom: 2px solid #f5607d;
        transform: rotate(45deg);
      }
      .legend_sort_tip {
        position: absolute;
        left: -23px;
        font-size: 14px;
        color: #333;
      }
      .sort_tip_top {
        top: -2px;
      }
      .sort_tip_bottom {
        bottom: -8px;
      }
      .legend_content {
        align-items: flex-start;
        padding-top: 8px;
        &:nth-child(3) {
          padding-top: 0;
          height: 18px;
          align-items: flex-end;
        }
        &:last-child {
          height: 18px;
        }
        span {
          display: inline-block;
          box-sizing: border-box;
        }
        .legend_index {
          width: 22px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          color: #fff;
          font-size: 12px;
          border-radius: 50%;
          background-color: #527afe;
        }
        .legend_title {
          max-width: 184px;
          padding-left: 15px;
          font-size: 16px;
          color: #333;
        }
      }
    }
    .chart-box-content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
