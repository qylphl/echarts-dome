<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 散点气泡图 -->
      <div class="content-box flex-box">
        <!-- 散点气泡图 -->
        <div class="pie-box" v-for="(item, index) in scatterOption" :key="index" :style="{ 'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <Scatter :deploy="item" :title="item.boxTitle"></Scatter>
        </div>
      </div>
      <!-- 3d散点气泡图 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <SolidScatter :color="color"></SolidScatter>
        </div> 
      </div>
    </div>
    <div class="right-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6' }">
      <Subnuv
        ref="subnuv"
        :dataList="rightList"
        :titleColor="themeType == 1 ? '#b0c9f0' : '#333'"
        @chooseTitle="chooseRightTitle"
      ></Subnuv>
    </div>
  </div>
</template>

<script>
import Subnuv from "components/nav/subnav";
import Scatter from "components/chartsPublic/charts";
import SolidScatter from "components/scatter/3dScatter";
import scatterCharts from "utils/scatterOption";
import constant from "utils/constant";
import echarts from "echarts/lib/echarts";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: {
        2010: [
          {
            name: ["SCI", "SSCI", "EI", "ISTP", "AHCI", "ISSHP", "其他"],
            value: [1811, 868, 320, 208, 190, 120, 100],
            amount: [1.8, 1.0, 0.65, 0.52, 0.33, 0.25, 0.11],
            orderCount: [65000, 45000, 23000, 10000, 9000, 74000, 52121],
          },
        ],
        2020: [
          {
            name: ["SCI", "SSCI", "EI", "ISTP", "AHCI", "ISSHP", "其他"],
            value: [2811,1568,420,308,290,220,190],
            amount: [2.3,1.2,0.95,0.82,0.73,0.35,0.18],
            orderCount: [105000,90000,49000,34000,25000,20000,19121],
          },
        ],
      },
      dataList: [
          { name: '违反政治纪律行为', value: '512' },
          { name: '违反行为纪律行为', value: '51' },
          { name: '违反群众纪律行为', value: '134' },
          { name: '违反组织纪律行为', value: '120' },
          { name: '违反生活纪律行为', value: '22' },
          { name: '违反工作纪律行为', value: '20' }
      ],
      colorList: [{
          offset: [28, 19],
          symbolSize: 100,
          color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7,
              [{ offset: 0, color: '#1ba6fc' }, { offset: 1, color: '#1260f8' }])
      }, {
          offset: [31, 6],
          symbolSize: 80,
          color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7,
              [{ offset: 0, color: '#33d8e7' }, { offset: 1, color: '#0badbc' }])
      }, {
          offset: [37, 16],
          symbolSize: 90,
          color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7,
              [{ offset: 0, color: '#fe8d51' }, { offset: 1, color: '#e83608' }])
      }, {
          offset: [43, 7],
          symbolSize: 70,
          color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7,
              [{ offset: 0, color: '#ffb45a' }, { offset: 1, color: '#e57C00' }])
      }, {
          offset: [48, 18],
          symbolSize: 60,
          color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7,
              [{ offset: 0, color: '#896ffe' }, { offset: 1, color: '#5942f4' }])
      }, {
          offset: [50, 12],
          symbolSize: 60,
          color: new echarts.graphic.RadialGradient(0.3, 0.5, 0.7,
              [{ offset: 0, color: '#17dca4' }, { offset: 1, color: '#03b388' }])
      }],
      colorListInfo: [
        [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
        ],
        [
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
        '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
        '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
        '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
        '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]
      ][2],
      dataListInfo: [
        {name: '女篮两连胜后大喊武汉加油', value: '5449', symbolSize: '73'},
        {name: '火神山医院开微博', value: '2289', symbolSize: '67'},
        {name: '缅怀疫情中逝去的人们', value: '4730', symbolSize: '88'},
        {name: '妨害疫情防控的违法行为', value: '1952', symbolSize: '45'},
        {name: '抗击新型肺炎第一线', value: '8694000', symbolSize: '114'},
        {name: '12项疫情防控惠民政策', value: '5668', symbolSize: '75'},
        {name: '战疫一线的别样团圆', value: '339', symbolSize: '68'},
        {name: '31省区市心理援助热线', value: '671', symbolSize: '62'},
        {name: '疫情中的逆行者', value: '92000', symbolSize: '93'},
      ],
      // 右侧导航菜单
      rightList: [
        { title: "散点气泡图", num: "6" },
        { title: "3d散点气泡图", num: "1" },
      ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      scatterOption: [], // 散点气泡图配置项
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  watch: {
    scroll() {
      this.loadSroll();
    },
  },
  mounted() {
    this.differ = document.getElementsByClassName("content-box")[0].offsetTop;
    this.$refs.leftBox.addEventListener("scroll", this.dataScroll);
    this.initPieOption();
  },
  methods: {
    initPieOption() {
      let info = {
        data: this.data,
        color: this.color,
        dataList: this.dataList,
        colorList: this.colorList,
        dataListInfo: this.dataListInfo,
        colorListInfo: this.colorListInfo,
      };
      this.scatterOption = new scatterCharts(info).SCATTER_CHARTS;
    },
    // 锚点双向监听
    dataScroll() {
      this.scroll = this.$refs.leftBox.scrollTop;
    },
    loadSroll() {
      var that = this,
        sections = document.getElementsByClassName("content-box"),
        leftBoxscollHeight =
          this.$refs.leftBox.scrollHeight - this.$refs.leftBox.clientHeight;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (that.scroll >= sections[i].offsetTop - that.differ) {
          if (that.scroll == leftBoxscollHeight) {
            that.chooseIndex = sections.length - 1;
            that.$refs.subnuv.chooseIndex = that.chooseIndex;
            break;
          } else {
            that.chooseIndex = i;
            that.$refs.subnuv.chooseIndex = that.chooseIndex;
            break;
          }
        }
      }
    },
    chooseRightTitle(index) {
      let total = document.getElementsByClassName("content-box")[index].offsetTop - this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: {
    Subnuv,
    Scatter,
    SolidScatter
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
