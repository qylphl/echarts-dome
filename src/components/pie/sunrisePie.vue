<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="optionString" :tipTitle="tipTitle"></navBar>
    <div
      class="chart-box"
      ref="sunrisePie"
      :style="{ 'background-color': themeType == 1 ? '#07124a' : '#fff' }"
    ></div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { setHighlight, setBorderPieHighlight } from "utils/chartsClass";
export default {
  props: {
    title: {
      default: "旭日图",
      type: String,
    },
    color: {
      type: Array,
    },
    data: {
      type: Array,
    },
  },
  data() {
    return {
      optionString: {},
      tipTitle: '注：请注意该图表使用的是highcharts，可以在src/components/pie/sunrisePie.vue中找到直接使用。'
    };
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
        sunrisePie = that.$echarts.init(that.$refs.sunrisePie),
        option = {
          series: {
            type: "sunburst",
            highlightPolicy: "ancestor",
            data: [
              {
                name: "经",
                itemStyle: {
                  color: "#187a2f",
                },
                label: {
                  fontSize: 20,
                  fontWeight: "bold",
                },
                children: [
                  {
                    name: "论语",
                    itemStyle: {
                      color: "#3aa255",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "半部《论语》治天下",
                        value: 1,
                        itemStyle: {
                          color: "#3aa255",
                        },
                      },
                    ],
                  },
                  {
                    name: "孟子",
                    itemStyle: {
                      color: "#5e9a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "孟文如潮\n传统散文写作之高峰",
                        value: 1,
                        itemStyle: {
                          color: "#5e9a80",
                        },
                      },
                    ],
                  },
                  {
                    name: "大学",
                    itemStyle: {
                      color: "#3aa255",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "孔氏之遗书，初学入德之门",
                        value: 1,
                        itemStyle: {
                          color: "#3aa255",
                        },
                      },
                    ],
                  },
                  {
                    name: "中庸",
                    itemStyle: {
                      color: "#5e9a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "善读中庸者，\n只得此一卷书，终身用不尽",
                        value: 1,
                        itemStyle: {
                          color: "#5e9a80",
                        },
                      },
                    ],
                  },
                  {
                    name: "书经（尚书）",
                    itemStyle: {
                      color: "#3aa255",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "中国第一部古典文集\n和最早的历史文献",
                        value: 1,
                        itemStyle: {
                          color: "#3aa255",
                        },
                      },
                    ],
                  },
                  {
                    name: "礼记",
                    itemStyle: {
                      color: "#5e9a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name:
                          "《礼记》为七十子后学之书，\n又多存礼家旧籍。\n读之，既可知孔门之经义，\n又可考古代之典章，实为可贵。",
                        value: 1,
                        itemStyle: {
                          color: "#5e9a80",
                        },
                      },
                    ],
                  },
                  {
                    name: "易经",
                    itemStyle: {
                      color: "#3aa255",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "群经之首，大道之源",
                        value: 1,
                        itemStyle: {
                          color: "#3aa255",
                        },
                      },
                    ],
                  },
                  {
                    name: "诗经",
                    itemStyle: {
                      color: "#5e9a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "诗三百，一言以蔽之，思无邪",
                        value: 1,
                        itemStyle: {
                          color: "#5e9a80",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                name: "史",
                itemStyle: {
                  color: "#FFA500",
                },
                label: {
                  fontSize: 20,
                  fontWeight: "bold",
                },
                children: [
                  {
                    name: "战国策",
                    itemStyle: {
                      color: "#FFDEAD",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "一部全面展现战国历史的重要典籍",
                        value: 1,
                        itemStyle: {
                          color: "#FFDEAD",
                        },
                      },
                    ],
                  },
                  {
                    name: "左传",
                    value: 1,
                    itemStyle: {
                      color: "#EEDC82",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "左氏之传，史之极也。\n文采若云月，高深若山海",
                        value: 1,
                        itemStyle: {
                          color: "#EEDC82",
                        },
                      },
                    ],
                  },
                  {
                    name: "史记",
                    itemStyle: {
                      color: "#FFDEAD",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "史家之绝唱，无韵之离骚",
                        value: 1,
                        itemStyle: {
                          color: "#FFDEAD",
                        },
                      },
                    ],
                  },
                  {
                    name: "汉书",
                    value: 1,
                    itemStyle: {
                      color: "#EEDC82",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "中国第一部\n纪传体断代史",
                        value: 1,
                        itemStyle: {
                          color: "#EEDC82",
                        },
                      },
                    ],
                  },
                  {
                    name: "后汉书",
                    itemStyle: {
                      color: "#FFDEAD",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "与《史记》、《汉书》、\n《三国志》合称“前四史”",
                        value: 1,
                        itemStyle: {
                          color: "#FFDEAD",
                        },
                      },
                    ],
                  },
                  {
                    name: "三国志",
                    value: 1,
                    itemStyle: {
                      color: "#EEDC82",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name:
                          "三国对峙的纪传体国别史，\n《三国演义》的创作源泉",
                        value: 1,
                        itemStyle: {
                          color: "#EEDC82",
                        },
                      },
                    ],
                  },
                  {
                    name: "资治通鉴\n通鉴纪事本末",
                    itemStyle: {
                      color: "#FFDEAD",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "鉴前世之兴衰，考当今之得失",
                        value: 1,
                        itemStyle: {
                          color: "#FFDEAD",
                        },
                      },
                    ],
                  },
                  {
                    name: "宋元明史纪事本末",
                    value: 1,
                    itemStyle: {
                      color: "#EEDC82",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "中国古代断代纪事本末体史书",
                        value: 1,
                        itemStyle: {
                          color: "#EEDC82",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                name: "子",
                itemStyle: {
                  color: "#0aa3b5",
                },
                label: {
                  fontSize: 20,
                  fontWeight: "bold",
                },
                children: [
                  {
                    name: "老子（道德经）",
                    itemStyle: {
                      color: "#9db2b7",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "内圣外王之学",
                        value: 1,
                        itemStyle: {
                          color: "#9d977f",
                        },
                      },
                    ],
                  },
                  {
                    name: "庄子",
                    itemStyle: {
                      color: "#76c0cb",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "汪洋捭阖，仪态万方，\n晚周诸子之作，莫能先也",
                        value: 1,
                        itemStyle: {
                          color: "#039fb8",
                        },
                      },
                    ],
                  },
                  {
                    name: "墨子",
                    itemStyle: {
                      color: "#9db2b7",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "战国百家中墨家的经典，\n墨家曾与儒家同称‘显学’",
                        value: 1,
                        itemStyle: {
                          color: "#9d977f",
                        },
                      },
                    ],
                  },
                  {
                    name: "荀子",
                    itemStyle: {
                      color: "#76c0cb",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "战国后期儒家学派最重要的著作",
                        value: 1,
                        itemStyle: {
                          color: "#039fb8",
                        },
                      },
                    ],
                  },
                  {
                    name: "韩非子",
                    itemStyle: {
                      color: "#9db2b7",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "先秦说理散文论辩艺术的优秀代表",
                        value: 1,
                        itemStyle: {
                          color: "#9d977f",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                name: "集",
                itemStyle: {
                  color: "#e65832",
                },
                label: {
                  fontSize: 20,
                  fontWeight: "bold",
                },
                children: [
                  {
                    name: "楚辞",
                    itemStyle: {
                      color: "#f89a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "中国文学史上\n第一部浪漫主义诗歌总集",
                        value: 1,
                        itemStyle: {
                          color: "#f89a80",
                        },
                      },
                    ],
                  },
                  {
                    name: "文选",
                    itemStyle: {
                      color: "#d45a59",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "《文选》烂，秀才半",
                        value: 1,
                        itemStyle: {
                          color: "#da5c1f",
                        },
                      },
                    ],
                  },
                  {
                    name: "李太白全集",
                    itemStyle: {
                      color: "#f89a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "笔落惊风雨，诗成泣鬼神",
                        value: 1,
                        itemStyle: {
                          color: "#f89a80",
                        },
                      },
                    ],
                  },
                  {
                    name: "杜工部集",
                    itemStyle: {
                      color: "#d45a59",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "为人性僻耽佳句，语不惊人死不休",
                        value: 1,
                        itemStyle: {
                          color: "#da5c1f",
                        },
                      },
                    ],
                  },
                  {
                    name: "白香山集",
                    itemStyle: {
                      color: "#f89a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "文章合为时而著，歌诗合为事而作",
                        value: 1,
                        itemStyle: {
                          color: "#f89a80",
                        },
                      },
                    ],
                  },
                  {
                    name: "韩昌黎集",
                    itemStyle: {
                      color: "#d45a59",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "文起八代之衰，而道济天下之溺",
                        value: 1,
                        itemStyle: {
                          color: "#da5c1f",
                        },
                      },
                    ],
                  },
                  {
                    name: "柳河东集",
                    itemStyle: {
                      color: "#f89a80",
                    },
                    label: {
                      fontSize: 14,
                      fontWeight: "bold",
                    },
                    children: [
                      {
                        name: "唐人惟子厚深得骚学",
                        value: 1,
                        itemStyle: {
                          color: "#f89a80",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            radius: [0, "90%"],
            sort: null,
            levels: [
              {},
              {
                r0: "7%",
                r: "21%",
                itemStyle: {
                  borderWidth: 3,
                },
                label: {
                  rotate: "tangential",
                },
              },
              {
                r0: "23%",
                r: "53%",
                label: {
                  align: "right",
                },
              },
              {
                r0: "55%",
                r: "57%",
                label: {
                  position: "outside",
                  padding: 3,
                  silent: false,
                },
                itemStyle: {
                  borderWidth: 3,
                },
              },
            ],
          },
        };
      that.optionString = option;
      window.addEventListener("resize", function () {
        sunrisePie.resize();
      });
      sunrisePie.setOption(option, true);
      if (this.isCheck == 1) {
        // 设置默认选中高亮
        setHighlight(
          sunrisePie,
          that.data.map((v) => v.value)
        );
      } else if (this.isCheck == 2) {
        // 带虚线边框饼图的默认高亮
        setBorderPieHighlight(
          sunrisePie,
          that.data.map((v) => v.value)
        );
      }
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
</style>
