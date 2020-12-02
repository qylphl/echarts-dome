<template>
  <div class="chart-content">
    <p class="title-bar">{{ title }}</p>
    <div class="chart-box" ref="cockScombPie"></div>
  </div>
</template>

<script>
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
      for (var i = 0; i < this.data.length; i++) {
        this.newData.push(this.data[i]);
      }
      this.newData = this.newData.sort(this.object());
      let that = this,
        cockScombPie = this.$echarts.init(this.$refs.cockScombPie),
        alist = this.newData.map(v => v.value),
        tcname = sortdata.map(v => v.name),
        msg = new Array(),
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
      for (i = 0; i < alist.length; i++) {
        var ms = new Array();
        if (i == 0) {
          //添加一组标题数据
          var ns = new Array();
          for (j = 0; j < alist.length; j++) {
            ns.push({
              value: alist[j],
              hoverAnimation: false,
              itemStyle: {
                color: that.color[j],
              },
            });
          }
          msg.push({
            type: "pie",
            radius: [0, 0],
            center: ["50%", "40%"],
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
        for (j = 0; j < alist.length; j++) {
          //封装构造数据
          if (i == j) {
            ms.push({
              value: alist[j],
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
          name: pname,
          type: "pie",
          radius: [55, 55 + blist[i] * length],
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
      }
      window.addEventListener("resize", function () {
        cockScombPie.resize();
      });
      cockScombPie.setOption(option, true);
    },
    object(a, b) {
      return b.value - a.value;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
