<template>
  <div class="map-content content flex-box">
    <div class="left-box" ref="leftBox">
      <!-- 地图 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <Map :data="data" :color="color"></Map>
        </div>
        <!-- 区域地图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <AreaMap :data="areaData"></AreaMap>
        </div>
        <!-- 下钻地图 -->
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <RunInMap :data="areaData"></RunInMap>
        </div>
      </div>
      <!-- 轨迹地图 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{ 'width': '66.15%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <TrajectoryMap :data="trajectoryData" :yxData="yxData" :color="color"></TrajectoryMap>
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
import Map from "components/map/map";
import AreaMap from "components/map/areaMap";
import RunInMap from "components/map/runInMap";
import TrajectoryMap from "components/map/trajectoryMap";
import constant from "utils/constant";
export default {
  data() {
    return {
      color: constant.COLOR,
      data: [
        {
          name: "北京",
          value: 599,
        },
        {
          name: "上海",
          value: 142,
        },
        {
          name: "黑龙江",
          value: 44,
        },
        {
          name: "深圳",
          value: 92,
        },
        {
          name: "湖北",
          value: 810,
        },
        {
          name: "四川",
          value: 453,
        },
      ],
      areaData: [
        { name: "北京", value: "100" },
        { name: "天津", value: this.randomData() },
        { name: "上海", value: this.randomData() },
        { name: "重庆", value: this.randomData() },
        { name: "河北", value: this.randomData() },
        { name: "河南", value: this.randomData() },
        { name: "云南", value: this.randomData() },
        { name: "辽宁", value: this.randomData() },
        { name: "黑龙江", value: this.randomData() },
        { name: "湖南", value: this.randomData() },
        { name: "安徽", value: this.randomData() },
        { name: "山东", value: this.randomData() },
        { name: "新疆", value: this.randomData() },
        { name: "江苏", value: this.randomData() },
        { name: "浙江", value: this.randomData() },
        { name: "江西", value: this.randomData() },
        { name: "湖北", value: this.randomData() },
        { name: "广西", value: this.randomData() },
        { name: "甘肃", value: this.randomData() },
        { name: "山西", value: this.randomData() },
        { name: "内蒙古", value: this.randomData() },
        { name: "陕西", value: this.randomData() },
        { name: "吉林", value: this.randomData() },
        { name: "福建", value: this.randomData() },
        { name: "贵州", value: this.randomData() },
        { name: "广东", value: this.randomData() },
        { name: "青海", value: this.randomData() },
        { name: "西藏", value: this.randomData() },
        { name: "四川", value: this.randomData() },
        { name: "宁夏", value: this.randomData() },
        { name: "海南", value: this.randomData() },
        { name: "台湾", value: this.randomData() },
        { name: "香港", value: this.randomData() },
        { name: "澳门", value: this.randomData() },
      ],
      trajectoryData: ["西安 Top3", "西宁 Top3", "赣州 Top3"],
      yxData: [
        [{ name: "赣州" }, { name: "北京", value: 100 }],
        [{ name: "赣州" }, { name: "广州", value: 100 }],
        [{ name: "赣州" }, { name: "上海", value: 100 }],
        [{ name: "赣州" }, { name: "西安", value: 100 }],
        [{ name: "赣州" }, { name: "西宁", value: 100 }],
      ],
      // 右侧导航菜单
      rightList: [
        { title: "地图", num: "3" },
        { title: "轨迹地图", num: "3" },
        ],
      scroll: "",
      chooseIndex: 0, // 选中右侧导航的index值
      differ: 0, // 差值
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
  },
  methods: {
    randomData() {
      return Math.round(Math.random() * 500);
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
    Map,
    AreaMap,
    RunInMap,
    TrajectoryMap
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
@import "style/innerContent.scss";
.map-content {
  .left-box {
    .content-box {
      &:nth-child(2){
        .pie-box {
        // width: 49.3%;
        height: 600px;
      }
      }
    }
  }
}
</style>
