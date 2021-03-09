<template>
  <div class="content flex-box animation-content one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 动画效果 -->
      <!-- SVG相关 -->
      <div class="content-box flex-box">
        <!-- <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <HoverLayer></HoverLayer>
        </div> -->
        <div class="pie-box" :style="{'width': '49.3%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Likes></Likes>
        </div>
        <div class="pie-box" :style="{'width': '49.3%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Weather></Weather>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <WeatherTwo></WeatherTwo>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <CloseBtn></CloseBtn>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <SendBtn></SendBtn>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <ToolBar></ToolBar>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <SvgLoading></SvgLoading>
        </div>
        <div class="pie-box hidden"></div>
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
// SVG相关动画组件
import HoverLayer from "components/animation/svg/hoverLayer";
import Weather from "components/animation/svg/weather";
import WeatherTwo from "components/animation/svg/weather2";
import Likes from "components/animation/svg/likes";
import CloseBtn from "components/animation/svg/closeBtn";
import SendBtn from "components/animation/svg/sendBtn";
import ToolBar from "components/animation/svg/toolBar";
import SvgLoading from "components/animation/svg/svgLoading";
export default {
  data() {
    return {
      // 右侧导航菜单
      rightList: [{ title: "SVG相关动画", num: "6" }],
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
    HoverLayer,
    Weather,
    WeatherTwo,
    Likes,
    CloseBtn,
    SendBtn,
    ToolBar,
    SvgLoading,
  },
};
</script>

<style lang="scss">
@import "style/innerContent.scss";
</style>