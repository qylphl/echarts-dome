<template>
  <div class="content flex-box animation-content one-content-charts-content">
    <div class="left-box" ref="leftBox">
      <!-- 动画效果 -->
      <!-- 表单动效 -->
       <div class="content-box flex-box">
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <InputClick></InputClick>
        </div>
        <div class="pie-box" :style="{'width': '66.15%', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <FormProgress></FormProgress>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <FormVeri></FormVeri>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <FormVeriTwo></FormVeriTwo>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
          <SearchBox></SearchBox>
        </div>
      </div>
      <!-- 按钮动效 -->
      <div class="content-box flex-box">
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <HoverBtn></HoverBtn>
        </div>
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <HoverBtnTwo></HoverBtnTwo>
        </div>
        <div class="pie-box" :style="{'width': '100%', 'height': 'max-content', 'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <ClickBtn></ClickBtn>
        </div>
        <div class="pie-box" :style="{'border-color': themeType == 1 ? '#082b7d' : '#eaeaea', }">
         <CssClickBtn></CssClickBtn>
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
// 表单相关动画
import InputClick from "components/animation/form/inputClick";
import FormProgress from "components/animation/form/formProgress";
import FormVeri from "components/animation/form/formVeri";
import FormVeriTwo from "components/animation/form/formVeri2";
import SearchBox from "components/animation/form/searchBox";
// 按钮相关动画组件
import HoverBtn from "components/animation/btn/hoverBtn";
import HoverBtnTwo from "components/animation/btn/hoverBtn2";
import ClickBtn from "components/animation/btn/clickBtn";
import CssClickBtn from "components/animation/btn/cssClickBtn";
export default {
  data() {
    return {
      // 右侧导航菜单
      rightList: [{ title: "表单相关动画", num: "4" },{ title: "按钮相关动画", num: "4" },],
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
      let total = document.getElementsByClassName("content-box")[index].offsetTop - this.differ; // 获取需要滚动的距离
      this.$refs.leftBox.scrollTop = total;
      this.$refs.leftBox.pageYOffset = total;
      this.chooseIndex = index;
    },
  },
  components: {
    Subnuv,
    InputClick,
    FormProgress,
    FormVeri,
    FormVeriTwo,
    SearchBox,
    HoverBtn,
    HoverBtnTwo,
    ClickBtn,
    CssClickBtn,
  },
};
</script>

<style lang="scss">
@import "style/innerContent.scss";
</style>
