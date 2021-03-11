<template>
  <div class="content flex-box animation-content one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 动画效果 -->
      <!-- 导航动效 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{ 'width': '66.15%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <NavAnimationOne></NavAnimationOne>
        </div>
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <TextNav></TextNav>
        </div>
        <div class="pie-box" :style="{ 'width': '49.3%', 'height': 'auto', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <NavSolidFlip></NavSolidFlip>
        </div>
        <div class="pie-box" :style="{ 'width': '49.3%', 'height': 'auto', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <NavColor></NavColor>
        </div>
        <div class="pie-box" :style="{ 'height': 'auto', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <SliderNav></SliderNav>
        </div>
        <div class="pie-box" :style="{ 'width': '66.15%', 'height': 'auto', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <NavLight></NavLight>
        </div> 
      </div>
      <!-- 菜单动效 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <NavCircular></NavCircular>
        </div>
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <AccordionMenus></AccordionMenus>
        </div>
        <div class="pie-box" :style="{ 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <SvgMenus></SvgMenus>
        </div>
        <div class="pie-box" :style="{ 'height': 'auto', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <ContractionMenus></ContractionMenus>
        </div>
        <div class="pie-box" :style="{  'width': '66.15%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea' }">
          <PolygonMenu></PolygonMenu>
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
// 导航相关动画组件
import NavAnimationOne from "components/animation/nav/navAnimation";
import TextNav from "components/animation/nav/textNav";
import NavCircular from "components/animation/nav/navCircular";
import NavSolidFlip from "components/animation/nav/navSolidFlip";
import SliderNav from "components/animation/nav/sliderNav";
import NavLight from "components/animation/nav/navLight";
import NavColor from "components/animation/nav/navColor";
import AccordionMenus from "components/animation/nav/accordionMenus";
import SvgMenus from "components/animation/nav/svgMenus";
import ContractionMenus from "components/animation/nav/contractionMenus";
import PolygonMenu from "components/animation/nav/polygonMenu";
export default {
  data() {
    return {
      // 右侧导航菜单
      rightList: [
        { title: "导航相关动画", num: "6" },
        { title: "菜单相关动画", num: "5" },
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
    NavAnimationOne,
    TextNav,
    NavCircular,
    NavSolidFlip,
    SliderNav,
    NavLight,
    NavColor,
    AccordionMenus,
    SvgMenus,
    ContractionMenus,
    PolygonMenu,
  },
};
</script>

<style lang="scss">
@import "style/innerContent.scss";
</style>