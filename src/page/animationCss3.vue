<template>
  <div class="content flex-box animation-content one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 动画效果 -->
      <!-- css3相关 -->
      <div class="content-box flex-box">
        <!-- 数字翻转 -->
        <div class="pie-box" :style="{'width': '49.3%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <DigitalFlip></DigitalFlip>
        </div>
        <!-- 时钟 -->
         <div class="pie-box" :style="{'width': '49.3%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Clock></Clock>
        </div>
        <!-- 字体抖动 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Shake></Shake>
        </div>
        <!-- 水球碰撞 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Collision></Collision>
        </div>
        <!-- 边框线性运动 -->
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <BorderLinearMotion></BorderLinearMotion>
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
// css3相关动画组件
import DigitalFlip from "components/animation/css3/digitalFlip";
import Clock from "components/animation/css3/clock";
import Shake from "components/animation/css3/shake";
import Collision from "components/animation/css3/collision";
import BorderLinearMotion from "components/animation/css3/borderLinearMotion";
export default {
  data() {
    return {
      // 右侧导航菜单
      rightList: [{ title: "css3相关动画", num: "5" }],
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
    DigitalFlip,
    Clock,
    Shake,
    Collision,
    BorderLinearMotion,
  },
};
</script>

<style lang="scss">
@import "style/innerContent.scss";
</style>
