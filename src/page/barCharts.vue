<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 柱状（条形）图 -->
      <div class="content-box flex-box" ref="barCharts">
         <!-- 排行榜柱状图 -->
        <div class="pie-box" :style="{'width': '66.15%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <RankingBar :data="rankingData" :color="rankingColor"></RankingBar>
        </div>
        <!-- 普通柱状（条形）图 -->
        <div class="pie-box" v-for="(item, index) in ordinaryBarOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Bar :deploy="item" :title="item.boxTitle"></Bar>
        </div> 
        <!-- 带阴影柱状图 -->
        <div class="pie-box" :style="{'width': '66.15%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <ShadowBar :data="shadowData" :color="shadowColor"></ShadowBar>
        </div>
      </div>
      <!-- 堆积柱状（条形）图 -->
      <div class="content-box flex-box" ref="cumulateCharts">
        <div class="pie-box" v-for="(item, index) in cumulateBarOption" :key="index" :style="{width: item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Bar :deploy="item" :title="item.boxTitle"></Bar>
        </div>
      </div>
      <!-- 分组柱状图 -->
      <div class="content-box flex-box" ref="groupCharts">
        <div class="pie-box" v-for="(item, index) in groupBarOption" :key="index" :style="{width: item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Bar :deploy="item" :title="item.boxTitle"></Bar>
        </div>
      </div>
      <!-- 3D柱状图 -->
      <div class="content-box flex-box" ref="solidCharts">
        <div class="pie-box" v-for="(item, index) in solidBarOption" :key="index" :style="{'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Bar :deploy="item" :title="item.boxTitle"></Bar>
        </div>
        <!-- 3d立体圆柱图 -->
        <div class="pie-box" :style="{ 'width': '100%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <SolidBar></SolidBar>
        </div>
      </div>
      <!-- 双向柱状图 -->
      <div class="content-box flex-box" ref="twoWayCharts">
        <div class="pie-box" :style="{'width': '100%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <TwoWayBar :data="twoWayData"></TwoWayBar>
        </div>
      </div>
    </div>
    <div class="right-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6'}">
      <Subnuv ref="subnuv" :dataList="rightList" :titleColor="themeType == 1 ? '#b0c9f0' : '#333'" @chooseTitle="chooseRightTitle"></Subnuv>
    </div>
  </div>
</template>

<script>
import Subnuv from "components/nav/subnav";
import Bar from "components/chartsPublic/charts";
import RankingBar from "components/bar/rankingBar";
import ShadowBar from "components/bar/shadowBar";
import SolidBar from "components/bar/3dSolidBar";
import TwoWayBar from "components/bar/twoWayBar";
import BarChart from "utils/barOption";
export default {
  data() {
    return {
      color: ["#328ff6", "#f56e6b", "#c956d7"],
      colorList: [
          '#13d2de', '#09adf1', '#127bf2', '#2748ef', '#5627ef',
          '#8527ef', '#be27ef', '#ed27ef', '#ef27af', '#ef277c',
          '#ef273f', '#ef4d27', '#ef6427',
      ],
      data: [
        { name: "违反政治纪律行为", value: "150" },
        { name: "违反组织纪律行为", value: "228" },
        { name: "违反廉洁纪律行为", value: "344" },
        { name: "违反群众纪律行为", value: "205" },
        { name: "违反工作纪律行为", value: "125" },
        { name: "贪污贿赂类行为", value: "109" },
        { name: "其他违法犯罪行为", value: "185" },
      ],
      // 排行榜数据
      rankingData: [
        { name: '杭州市', value: '3.66' },
        { name: '宁波市', value: '2.86' },
        { name: '温州市', value: '1.82' },
        { name: '湖州市', value: '1.8' },
        { name: '嘉兴市', value: '1.53' },
        { name: '绍兴市', value: '1.47' },
        { name: '金华市', value: '1.3' },
        { name: '衢州市', value: '1.25' },
        { name: '舟山市', value: '1.1' },
        { name: '台州市', value: '1.02' },
        { name: '丽水市', value: '1' },
      ],
      rankingColor: ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'],
      // 带阴影的柱状图数据
      shadowData: [{ "value": "84", "name": "违反政治纪律行为" }, { "value": "434", "name": "违反组织纪律行为" }, { "value": "1856", "name": "违反廉洁纪律行为" }, { "value": "1715", "name": "违反群众纪律行为" }, { "value": "1152", "name": "违反工作纪律行为" }, { "value": "350", "name": "违反生活纪律行为" }, { "value": "1236", "name": "贪污贿赂类行为" }, { "value": "651", "name": "滥用职权类行为" }, { "value": "178", "name": "玩忽职守类行为" }, { "value": "142", "name": "徇私舞弊类行为" }, { "value": "6", "name": "重大责任事故类行为" }, { "value": "678", "name": "其他违法犯罪行为" }],
      shadowColor: [
        '#13d2de', '#09adf1', '#127bf2', '#2748ef', '#5627ef',
        '#8527ef', '#be27ef', '#ed27ef', '#ef27af', '#ef277c',
        '#ef273f', '#ef4d27', '#ef6427',
      ],
      cumulateData: { "personCountList": ["0", "7", "47", "51", "720", "704", "754"], "caseLinkRelativeRatio": ["--", "--", "642.86", "5.77", "1470.91", "12.96", "51.64"], "personLinkRelativeRatio": ["--", "--", "571.43", "8.51", "1311.76", "-2.22", "7.10"], "category": [1, 2, 3, 4, 5, 6, 7], "caseCountList": ["0", "7", "52", "55", "864", "976", "1480"] },
      groupData: {
        xAxisData: [],
        data1: [],
        data2: []
      },
      // 极坐标系下堆积柱状图数据
      ringColumnData:[
        { value: [38, 78], name: "北京" }, 
        { value: [38, 76], name: "上海" }, 
        { value: [38, 70], name: "深圳" },
        { value: [32, 68], name: "江苏" },
        { value: [24, 52], name: "重庆" }, 
        { value: [20, 43], name: "广东" },
        { value: [16, 32], name: "湖南" },
        { value: [14.4, 32], name: "湖北" },
        { value: [20, 32], name: "河北" },
        { value: [16, 32], name: "河南" },
        { value: [16, 24], name: "辽宁" },
        { value: [14, 30], name: "黑龙江" },
      ],
      // 3D立体柱状图2数据
      solidData:[
        {'name': '关井数', 'value': '981', 'color': ['#00fff5','#43bafe','rgba(0,255,245,0.5)']},
        {'name': '开井数', 'value': '1000', 'color': ['#ffcc00','#ff7800','rgba(255,204,0,0.5)']},
        {'name': '不在线', 'value': '900', 'color': ['#b9b7ff','#e9a5ff','rgba(185,183,255,0.5)']}
      ],
      // 双向柱状图数据
      twoWayData: {
        female: { name: '女性', data: [{ value: 5, label: '小于1岁' }, { value: 12, label: '1 ～ 9 岁' }, { value: 10, label: '10 ～ 19 岁' }, { value: 7, label: '20 ～ 29 岁' }, { value: 32, label: '30 ～ 39 岁' }, { value: 40, label: '40 ～ 49 岁' }, { value: 28, label: '50 ～ 59 岁' }, { value: 34, label: '大于60岁' }] },
        male: { name: '男性', data: [{ value: 5, label: '小于1岁' }, { value: 19, label: '1 ～ 9 岁' }, { value: 23, label: '10 ～ 19 岁' }, { value: 43, label: '20 ～ 29 岁' }, { value: 34, label: '30 ～ 39 岁' }, { value: 53, label: '40 ～ 49 岁' }, { value: 12, label: '50 ～ 59 岁' }, { value: 34, label: '大于60岁' }] }
      },
      // 右侧导航菜单
      rightList: [
        {title: "柱状(条形)图",num: '9'},
        {title: "堆积柱状图",num: '3'},
        {title: "分组柱状图",num: '2'},
        {title: "3D柱状图",num: '4'},
        {title: "双向柱状图",num: '1'},
      ],
      scroll: '',
      chooseIndex: 0,    // 选中右侧导航的index值
      differ: 0,
      ordinaryBarOption: [],   // 普通柱状（条形）图
      cumulateBarOption: [],   // 堆积柱状图
      groupBarOption: [],      // 分组柱状图
      solidBarOption: [],      // 3D柱状图
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  watch: {
    scroll() {
      this.loadSroll()
    }
  },
  mounted() {
    this.differ = document.getElementsByClassName('content-box')[0].offsetTop;
    this.$refs.leftBox.addEventListener('scroll', this.dataScroll);
    this.initGroupData();
    this.initBarOption();
  },
  methods: {
    initBarOption() {
      let info = {
        data: this.data,
        color: this.color,
        colorList: this.colorList,
        cumulateData: this.cumulateData,
        ringColumnData: this.ringColumnData,
        groupData: this.groupData,
        solidData: this.solidData,
      };
      this.ordinaryBarOption = new BarChart(info).ORDINARY_BAR_CHARTS;
      this.cumulateBarOption = new BarChart(info).CUMULATE_BAR_CHARTS;
      this.groupBarOption = new BarChart(info).GROUP_BAR_CHARTS;
      this.solidBarOption = new BarChart(info).SOLID_BAR_CHARTS;
    },
    // 初始化分组柱状图的数据
    initGroupData(){
      for (var i = 0; i < 100; i++) {
        this.groupData.xAxisData.push(i);
        this.groupData.data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
        this.groupData.data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
      }
    },
    // 锚点双向监听
    dataScroll() {
      this.scroll = this.$refs.leftBox.scrollTop;
    },
    loadSroll() {
      var that = this,
          sections = document.getElementsByClassName('content-box'),
          leftBoxscollHeight = this.$refs.leftBox.scrollHeight - this.$refs.leftBox.clientHeight;
      for (var i = sections.length - 1; i >= 0; i--) {
        if (that.scroll >= sections[i].offsetTop - that.differ) {
          if(that.scroll == leftBoxscollHeight){
            that.chooseIndex = sections.length - 1;
            that.$refs.subnuv.chooseIndex = that.chooseIndex;
            break;
          }else{
            that.chooseIndex = i;
            that.$refs.subnuv.chooseIndex = that.chooseIndex;
            break;
          } 
        }
      }
    },
    chooseRightTitle(index) {
      let total = document.getElementsByClassName('content-box')[index].offsetTop - this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: { Bar,RankingBar,ShadowBar,SolidBar,TwoWayBar,Subnuv },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
