<template>
  <div class="content flex-box animation-content one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 动画效果 -->
      <!-- 轮播和切换相关 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'width': '49.3%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <CarouselMap></CarouselMap>
        </div>
        <div class="pie-box" :style="{'width': '49.3%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Flip></Flip>
        </div> 
      </div>
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <RadioBtn></RadioBtn>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <SwitchBtn></SwitchBtn>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <DayNightSwitch></DayNightSwitch>
        </div>
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <SwitchBtnTwo></SwitchBtnTwo>
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
// 轮播相关动画组件
import CarouselMap from "components/animation/switch/carouselMap";
import Flip from "components/animation/switch/flip";
// 切换相关动画组件
import RadioBtn from "components/animation/switch/radioBtn";
import SwitchBtn from "components/animation/switch/switchBtn";
import DayNightSwitch from "components/animation/switch/dayNightSwitch";
import SwitchBtnTwo from "components/animation/switch/switchBtn2";
export default {
  data() {
    return {
      // 右侧导航菜单
      rightList: [{ title: "轮播相关动画", num: "2" },{ title: "切换相关动画", num: "4" }],
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
    // 锚点双向监听
    dataScroll() {
      this.scroll = this.$refs.leftBox.scrollTop;
    },
    loadSroll() {
      var that = this,
        sections = document.getElementsByClassName("content-box"),
        leftBoxscollHeight = this.$refs.leftBox.scrollHeight - this.$refs.leftBox.clientHeight;
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
    Flip,
    CarouselMap,
    RadioBtn,
    SwitchBtn,
    DayNightSwitch,
    SwitchBtnTwo,
  },
};
</script>

<style lang="scss">
@import "style/innerContent.scss";
</style>
