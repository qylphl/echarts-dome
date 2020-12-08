<template>
  <div class="content flex-box">
    <div class="left-box">
      <!-- 柱状（条形）图 -->
      <div class="content-box flex-box">
        <!-- 普通柱状（条形）图 -->
        <div class="pie-box" v-for="(item, index) in ordinaryBarOption" :key="index" :style="{width: item.boxWidth ? item.boxWidth : '32.8%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <Bar :color="color" :deploy="item" :title="item.boxTitle"></Bar>
        </div>
        <!-- 带阴影柱状图 -->
        <div class="pie-box" :style="{'width': '100%','height':'max-content','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <ShadowBar :data="shadowData" :color="shadowColor"></ShadowBar>
        </div>
        <!-- 排行榜柱状图 -->
        <div class="pie-box" :style="{'width': '100%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea'}">
          <RankingBar :data="rankingData" :color="rankingColor"></RankingBar>
        </div>
      </div>
      <!-- 堆积柱状（条形）图 -->
      <div class="content-box flex-box"></div>
      <!-- 分组柱状图 -->
      <div class="content-box flex-box"></div>
      <!-- 3D柱状图 -->
      <div class="content-box flex-box"></div>
    </div>
    <div class="right-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#b6b6b6'}">
      <div :class="{'right-title': true,'choose-item': index == chooseIndex}" v-for="(item, index) in rightList" :key="index" :style="{'color':themeType == 1 ? '#b0c9f0' : '#333'}" @click="chooseRightTitle(index)">
        <el-tooltip :content="item.num" effect="light" placement="right">
        <p class="right-title-content">{{item.title}}</p>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "components/bar/bar";
import RankingBar from "components/bar/rankingBar";
import ShadowBar from "components/bar/shadowBar";
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
      shadowData: [{ "value": "84", "name": "违反政治纪律行为" }, { "value": "434", "name": "违反组织纪律行为" }, { "value": "1856", "name": "违反廉洁纪律行为" }, { "value": "1715", "name": "违反群众纪律行为" }, { "value": "1152", "name": "违反工作纪律行为" }, { "value": "350", "name": "违反生活纪律行为" }, { "value": "1236", "name": "贪污贿赂类行为" }, { "value": "651", "name": "滥用职权类行为" }, { "value": "178", "name": "玩忽职守类行为" }, { "value": "142", "name": "徇私舞弊类行为" }, { "value": "6", "name": "重大责任事故类行为" }, { "value": "705", "name": "行使公权力过程中发生的其他违法犯罪行为" }, { "value": "678", "name": "其他违法犯罪行为" }],
      shadowColor: [
        '#13d2de', '#09adf1', '#127bf2', '#2748ef', '#5627ef',
        '#8527ef', '#be27ef', '#ed27ef', '#ef27af', '#ef277c',
        '#ef273f', '#ef4d27', '#ef6427',
      ],
      // 右侧导航菜单
      rightList: [
        {title: "柱状图",num: '2'},
        {title: "堆积柱状图",num: '2'},
        {title: "分组柱状图",num: '2'},
        {title: "双向柱状图",num: '1'},
        {title: "3D柱状图",num: '1'},
      ],
      ordinaryBarOption: [],
      chooseIndex: 0,    // 选中右侧导航的index值
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initBarOption();
  },
  methods: {
    initBarOption() {
      let info = {
        data: this.data,
        color: this.color,
        colorList: this.colorList
      };
      this.ordinaryBarOption = new BarChart(info).ORDINARY_BAR_CHARTS;
    },
    chooseRightTitle(index) {
      this.chooseIndex = index;
    },
  },
  components: { Bar,RankingBar,ShadowBar },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
