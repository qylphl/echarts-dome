<template>
  <div class="chart-content">
    <navBar :title="title"></navBar>
    <div class="chart-box" ref="cockScombPie"></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { sortByKey, setHighlight } from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "鸡冠玫瑰图",
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
      newData: [],
      blist: [1, 2, 3, 4, 5, 6, 7, 8, 9], // 扇形高度为blist数值决定
      length: 8,
      clist: [4.05, 2.95, 5, 2.1, 1.62, 2.25],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.newData = sortByKey(this.data, "value");
      let that = this,
        cockScombPie = this.$echarts.init(this.$refs.cockScombPie),
        alist = that.newData.map((v) => v.value),
        tcname = that.newData.map((v) => v.name),
        msg = new Array();
      for (var i = 0; i < alist.length; i++) {
        var ms = new Array();
        if (i == 0) {
          //添加一组标题数据
          var ns = new Array();
          for (var j = 0; j < alist.length; j++) {
            ns.push({
              value: alist[j],
              name: tcname[j],
              hoverAnimation: false,
              itemStyle: {
                color: that.color[j],
              },
            });
          }
          msg.push({
            name: '',
            type: "pie",
            radius: [0, 0],
            center: ["50%", "50%"],
            data: ns,
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },
          });
        }
        for (var j = 0; j < alist.length; j++) {
          //封装构造数据
          if (i == j) {
            ms.push({
              value: alist[j],
              name: tcname[j],
              hoverAnimation: false,
              // itemStyle: {
              // color: colorlist[i],
              // },
              label: {
                color: "rgba(255,255,255,.45)",
                fontSize: 12,
                formatter: "{a|" + tcname[i] + "({d}%)}",
                rich: {
                  a: {
                    color: "#fff",
                    fontSize: 12,
                    lineHeight: 12,
                  },
                },
              },
            });
          } else {
            ms.push({
              value: alist[j],
              name: tcname[j],
              itemStyle: {
                color: "transparent",
              },
            });
          }
        }
        msg.push({
          name: '',
          type: "pie",
          radius: [56, 68 + that.blist[i] * that.length],
          center: ["50%", "45%"],
          hoverAnimation: false,
          label: {
            normal: {
              show: false,
              position: "center",
            },
            emphasis: {
              show: false,
              formatter: (params) => {
                const name1 = params.name.slice(0, 5);
                const name2 = params.name.slice(5, 10);
                if (name2) {
                  name = name1 + "\n" + name2;
                } else {
                  name = name1;
                }
                return "{name|" + name + "}\n{value|" + params.value + "}";
              },
              rich: {
                name: {
                  fontSize: 14,
                  padding: [0, 0, 2, 0],
                  color: "#333",
                  lineHeight: 16,
                },
                value: {
                  fontSize: 28,
                  fontWeight: "bold",
                  color: "#333",
                  lineHeight: 36,
                  padding: [-10, 0, 5, 0],
                },
              },
            },
          },
          labelLine: {
            normal: {
              show: false,
              smooth: 0.2,
              length: 10,
              length2: 0,
            },
          },
          data: ms,
        });
      };
      let option = {
        color: that.color,
        legend: {
          icon: "roundRect",
          orient: "horizontal",
          bottom: 20,
          itemGap: 10,
          align: "left",
          padding: [5, 25, 5, 0],
          itemWidth: 17,
          itemHeight: 8,
          textStyle: {
            color: "#666",
            fontSize: 12, //字体大小
            padding: [0, 10, 0, 0],
          },
          selectedMode: false,
          data: tcname,
        },
        calculable: true,
        tooltip: {
          trigger: "item",
          show: true,
          alwaysShowContent: true,
          position: ["38%", "36%"],
          textStyle: {
            color: "#333",
            fontSize: 13,
            align: "center",
          },
          backgroundColor: "rgba(0,0,0,0)",
          formatter:
            "<div style='width: 100px;text-align: center;display: flex;align-items: center;justify-content: center;flex-direction: column;'>{b}<br/><span style='display: block;padding-top: 3px;'><strong style='font-size:20px;font-weight: bold;'>{c}</strong>人</span><br/><span style='display:block;margin-top: -20px;'>占比{d}%</span></div>",
        },
        toolbox: {
          show: true,
        },
        series: msg,
      };
      window.addEventListener("resize", function () {
        cockScombPie.resize();
      });
      cockScombPie.setOption(option, true);
      setHighlight(
        cockScombPie,
        that.newData.map((v) => v.value)
      );
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
