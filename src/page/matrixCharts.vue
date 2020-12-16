<template>
  <div class="content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 矩阵图 -->
      <div class="content-box flex-box">
        <div class="pie-box" v-for="(item, index) in matrixOption" :key="index" :style="{ 'width': item.boxWidth ? item.boxWidth : '32.4%','border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <LineArea :deploy="item" :title="item.boxTitle"></LineArea>
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
import LineArea from "components/line/line";
import MatrixChart from "utils/matrixOption";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: [
        { name: "美国", value: 14964.4 },
        { name: "中国", value: 6039.547 },
        { name: "日本", value: 5498.719 },
        { name: "德国", value: 3423.466 },
        { name: "英国", value: 2407.351 },
        { name: "印度", value: 1708.46 },
        { name: "法国", value: 2651.772 },
        { name: "意大利", value: 2130.586 },
        { name: "巴西", value: 2209.266 },
        { name: "加拿大", value: 1614.072 },
        { name: "韩国", value: 1094.499 },
        { name: "俄罗斯", value: 1524.917 },
        { name: "澳大利亚", value: 1244.973 },
        { name: "西班牙", value: 1434.257 },
        { name: "墨西哥", value: 1051.128 },
        { name: "印度尼西亚", value: 755.256 },
        { name: "荷兰", value: 837.949 },
        { name: "土耳其", value: 731.539 },
        { name: "沙特阿拉伯", value: 526.811 },
        { name: "瑞士", value: 580.764 },
        { name: "波兰", value: 476.524 },
        { name: "台湾", value: 446.141 },
        { name: "阿根廷", value: 461.652 },
        { name: "尼日利亚", value: 373.839 },
        { name: "瑞典", value: 488.378 },
        { name: "比利时", value: 485.307 },
        { name: "伊朗", value: 463.971 },
        { name: "马来西亚", value: 255.024 },
        { name: "菲律宾", value: 199.591 },
        { name: "泰国", value: 340.924 },
        { name: "挪威", value: 428.527 },
        { name: "阿拉伯联合酋长国", value: 286.049 },
        { name: "奥地利", value: 390.939 },
        { name: "哥伦比亚", value: 286.954 },
        { name: "中国香港特别行政区", value: 228.637 },
        { name: "新加坡", value: 236.42 },
        { name: "南非", value: 375.304 },
        { name: "丹麦", value: 319.812 },
        { name: "以色列", value: 234.323 },
        { name: "孟加拉国", value: 122.039 },
        { name: "爱尔兰", value: 220.063 },
        { name: "智利", value: 217.283 },
        { name: "越南", value: 112.771 },
        { name: "芬兰", value: 248.262 },
        { name: "伊拉克", value: 138.517 },
        { name: "哈萨克斯坦", value: 148.047 },
        { name: "卡塔尔", value: 125.122 },
        { name: "罗马尼亚", value: 167.986 },
        { name: "葡萄牙", value: 238.748 },
        { name: "秘鲁", value: 148.562 },
        { name: "希腊", value: 300.156 },
        { name: "阿尔及利亚", value: 161.207 },
        { name: "捷克共和国", value: 207.016 },
        { name: "新西兰", value: 144.165 },
        { name: "委内瑞拉", value: 271.961 },
        { name: "科威特", value: 115.401 },
        { name: "匈牙利", value: 129.585 },
        { name: "摩洛哥", value: 93.217 },
        { name: "乌克兰", value: 136.011 },
        { name: "安哥拉", value: 82.471 },
        { name: "斯里兰卡", value: 49.552 },
        { name: "苏丹", value: 65.622 },
        { name: "厄瓜多尔", value: 69.555 },
        { name: "斯洛伐克", value: 89.18 },
        { name: "缅甸", value: 49.628 },
        { name: "肯尼亚", value: 40 },
        { name: "埃塞俄比亚", value: 29.917 },
        { name: "白俄罗斯", value: 55.221 },
        { name: "乌兹别克斯坦", value: 38.963 },
        { name: "阿塞拜疆", value: 52.913 },
        { name: "危地马拉", value: 41.338 },
        { name: "多米尼加共和国", value: 53.803 },
        { name: "土库曼斯坦", value: 22.148 },
        { name: "卢森堡", value: 52.446 },
        { name: "阿曼", value: 56.827 },
        { name: "哥斯达黎加", value: 36.298 },
        { name: "巴拿马", value: 27.053 },
        { name: "黎巴嫩", value: 38.01 },
        { name: "乌拉圭", value: 40.285 },
        { name: "坦桑尼亚", value: 31.086 },
        { name: "克罗地亚", value: 59.611 },
        { name: "保加利亚", value: 48.782 },
        { name: "也门", value: 30.907 },
        { name: "加纳", value: 32.174 },
        { name: "立陶宛", value: 37.166 },
        { name: "刚果（金）", value: 20.641 },
        { name: "约旦", value: 26.425 },
        { name: "利比亚", value: 74.804 },
        { name: "突尼斯", value: 44.054 },
        { name: "斯洛文尼亚", value: 48.103 },
        { name: "科特迪瓦", value: 24.931 },
        { name: "塞尔维亚", value: 39.035 },
        { name: "玻利维亚", value: 19.786 },
        { name: "喀麦隆", value: 23.667 },
        { name: "巴林", value: 25.708 },
        { name: "拉脱维亚", value: 24.112 },
        { name: "乌干达", value: 20.212 },
        { name: "赞比亚", value: 20.265 },
        { name: "特立尼达和多巴哥", value: 21.038 },
        { name: "巴拉圭", value: 20.674 },
        { name: "莫桑比克", value: 10.468 },
        { name: "尼泊尔", value: 16.002 },
        { name: "爱沙尼亚", value: 19.542 },
        { name: "萨尔瓦多", value: 21.418 },
        { name: "柬埔寨", value: 11.232 },
        { name: "阿富汗", value: 15.325 },
        { name: "塞浦路斯", value: 25.294 },
        { name: "洪都拉斯", value: 15.73 },
        { name: "塞内加尔", value: 12.937 },
        { name: "巴布亚新几内亚", value: 9.716 },
        { name: "波斯尼亚和黑塞哥维那", value: 16.847 },
        { name: "老挝", value: 6.842 },
        { name: "格鲁吉亚", value: 11.638 },
        { name: "冰岛", value: 13.237 },
        { name: "文莱", value: 13.707 },
        { name: "加蓬", value: 14.359 },
        { name: "纳米比亚", value: 11.283 },
        { name: "乍得", value: 10.678 },
        { name: "布基纳法索", value: 9.123 },
        { name: "蒙古", value: 7.185 },
        { name: "津巴布韦", value: 9.445 },
        { name: "博茨瓦纳", value: 12.794 },
        { name: "牙买加", value: 13.191 },
        { name: "阿尔巴尼亚", value: 11.927 },
        { name: "尼加拉瓜", value: 8.741 },
        { name: "马里", value: 9.44 },
        { name: "毛里求斯", value: 9.795 },
        { name: "马其顿", value: 9.415 },
        { name: "卢旺达", value: 5.698 },
        { name: "南苏丹", value: "n/a" },
        { name: "亚美尼亚", value: 9.26 },
        { name: "马耳他", value: 8.757 },
        { name: "刚果（布）", value: 12.029 },
        { name: "马达加斯加", value: 8.73 },
        { name: "贝宁", value: 6.57 },
        { name: "尼日尔", value: 5.729 },
        { name: "塔吉克斯坦", value: 5.642 },
        { name: "海地", value: 6.62 },
        { name: "赤道几内亚", value: 12.709 },
        { name: "吉尔吉斯斯坦", value: 4.806 },
        { name: "巴哈马", value: 7.91 },
        { name: "几内亚", value: 4.929 },
        { name: "摩尔多瓦", value: 5.813 },
        { name: "科索沃", value: 5.841 },
        { name: "马拉维", value: 6.957 },
        { name: "厄立特里亚", value: 2.117 },
        { name: "苏里南", value: 4.368 },
        { name: "多哥", value: 3.179 },
        { name: "塞拉利昂", value: 2.578 },
        { name: "毛里塔尼亚", value: 4.344 },
        { name: "斐济", value: 3.14 },
        { name: "黑山共和国", value: 4.118 },
        { name: "巴巴多斯", value: 4.446 },
        { name: "斯威士兰", value: 4.54 },
        { name: "布隆迪", value: 2.032 },
        { name: "马尔代夫", value: 2.332 },
        { name: "圭亚那", value: 2.262 },
        { name: "不丹", value: 1.433 },
        { name: "东帝汶", value: 4.069 },
        { name: "利比里亚", value: 1.292 },
        { name: "中非共和国", value: 1.986 },
        { name: "吉布提", value: 1.129 },
        { name: "莱索托", value: 2.25 },
        { name: "佛得角", value: 1.664 },
        { name: "伯利兹", value: 1.398 },
        { name: "圣马力诺", value: 2.143 },
        { name: "塞舌尔", value: 0.97 },
        { name: "圣卢西亚", value: 1.249 },
        { name: "所罗门群岛", value: 0.672 },
        { name: "安提瓜和巴布达", value: 1.136 },
        { name: "几内亚比绍", value: 0.848 },
        { name: "格林纳达", value: 0.771 },
        { name: "圣基茨和尼维斯", value: 0.692 },
        { name: "瓦努阿图", value: 0.701 },
        { name: "冈比亚", value: 0.952 },
        { name: "萨摩亚", value: 0.653 },
        { name: "圣文森特和格林纳丁斯", value: 0.681 },
        { name: "科摩罗", value: 0.544 },
        { name: "多米尼克", value: 0.494 },
        { name: "汤加", value: 0.39 },
        { name: "圣多美和普林西比", value: 0.209 },
        { name: "密克罗尼西亚", value: 0.294 },
        { name: "帕劳", value: 0.184 },
        { name: "马绍尔群岛", value: 0.164 },
        { name: "基里巴斯", value: 0.156 },
        { name: "图瓦卢", value: 0.032 },
      ],
      // 右侧导航菜单
      rightList: [{ title: "矩阵图", num: "1" }],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
      matrixOption: [], // 折线图配置项
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
      };
      this.matrixOption = new MatrixChart(info).MATRIX_CHARTS;
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
      let total =
        document.getElementsByClassName("content-box")[index].offsetTop -
        this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: {
    Subnuv,
    LineArea,
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
</style>
