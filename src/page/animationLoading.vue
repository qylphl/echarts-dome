<template>
  <div class="content flex-box animation-content one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 动画效果 -->
      <!-- 进度条动效 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'width': '66.15%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <ProgressBar></ProgressBar>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Loading2></Loading2>
        </div>
      </div>
      <!-- loading动效 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <Loading></Loading>
        </div>
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <SimpleLoading></SimpleLoading>
        </div>
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <StyleLoading></StyleLoading>
        </div>
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <LoadingThree></LoadingThree>
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
// 进度条相关动画
import ProgressBar from "components/animation/loading/progressBar";
import Loading2 from "components/animation/loading/loading2";
// 加载相关动画组件
import Loading from "components/animation/loading/loading";
import StyleLoading from "components/animation/loading/styleLoading";
import SimpleLoading from "components/animation/loading/simpleLoading";
import LoadingThree from "components/animation/loading/loading3";
export default {
  data() {
    return {
      // 右侧导航菜单
      rightList: [{ title: "进度条相关动画", num: "2" },{ title: "加载相关动画", num: "4" }],
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
    Loading,
    StyleLoading,
    SimpleLoading,
    ProgressBar,
    Loading2,
    LoadingThree,
  },
};
</script>

<style lang="scss">
@import "style/innerContent.scss";
</style>
