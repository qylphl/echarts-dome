<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox flex-box">
        <button class="btn btn1"><span class="btn-inner">查看更多<i class="fa fa-right"></i></span><div class="btnbg-x"></div></button>
        <button class="btn btn2"><span class="btn-inner">查看更多<i class="fa fa-right"></i></span><div class="btnbg-x"></div></button>
        <button class="btn btn3"><span class="btn-inner">查看更多</span><div class="btnbg-x"></div></button>
        <button class="btn btn4"><span class="btn-inner">查看更多</span><div class="btnbg-x"></div></button>
        <button class="btn btn5">
            <div class="line_tl"></div>
            <div class="line_tr"></div>
            <span class="btn-inner">查看更多</span>
            <div class="line_bl"></div>
            <div class="line_br"></div>
            <div class="line_all"></div>
        </button>
        <button class="btn btn6"><span class="btn-inner">查看更多</span><div class="bg_in"></div></button>
        <button class="btn btn7"><span class="btn-inner">查看更多</span></button>
        <button class="btn btn8"><div class="bg_brf"></div><span class="btn-inner">查看更多</span><div class="bg_aft"></div></button>
        <button class="btn btn9">
            <span class="btn-inner">查看更多</span>
            <div class="bgsqr1"></div>
            <div class="bgsqr2"></div>
            <div class="bgsqr3"></div>
            <div class="bgsqr4"></div>
        </button>
        <button class="btn btn10"><span class="btn-inner">查看更多</span><div class="bgsqr1"></div><div class="bgsqr2"></div></button>
        <button class="btn btn11">
            <span class="btn-inner">查看更多</span>
            <div class="bgsqr1"></div>
            <div class="bgsqr2"></div>
            <div class="bgsqr3"></div>
            <div class="bgsqr4"></div>
        </button>
        <button class="btn btn12"><span class="btn-inner">查看更多</span><div class="bgsqr1"></div><div class="bgsqr2"></div></button>
        <button class="btn btn13"><span class="btn-inner">查看更多</span><div class="bgsqr1"></div><div class="bgsqr2"></div></button>
        <button class="btn btn14">
            <span class="btn-inner">查看更多</span>
            <div class="bgsqr1"></div>
            <div class="bgsqr2"></div>
            <div class="bgsqr3"></div>
            <div class="bgsqr4"></div>
        </button>
        <button class="btn btn15"><span class="btn-inner">查看更多</span><div class="bgsqr1"></div></button>
        <button class="btn btn16" @mouseover="changeMask($event)" @mouseout="changeMask($event)">
          <span class="btn-inner">查看更多</span>
          <div class="bgsqr1" :style="{'top': relY + 'px', 'left': relX + 'px'}"></div>
        </button>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "按钮悬停动效类型二",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      relX: 0,
      relY: 0
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {
    changeMask(e) {
      var target = document.getElementsByClassName('btn16')[0];
      this.relX = e.pageX - this.offset(target).left;
      this.relY = e.pageY - this.offset(target).top;
    },
    offset(node) {
      var offest = {
        top: 0,
        left: 0
      };
      // 当前为IE11以下, 直接返回{top: 0, left: 0}
      if (!node.getClientRects().length) {
        return offest;
      }
      // 当前DOM节点的 display === 'node' 时, 直接返回{top: 0, left: 0}
      if (window.getComputedStyle(node)['display'] === 'none') {
        return offest;
      }
      // Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。
      // 返回值包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。
      // 返回如{top: 8, right: 1432, bottom: 548, left: 8, width: 1424…}
      offest = node.getBoundingClientRect();
      var docElement = node.ownerDocument.documentElement;
      return {
        top: offest.top + window.pageYOffset - docElement.clientTop,
        left: offest.left + window.pageXOffset - docElement.clientLeft
      };
    }   
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
@import "style/animationBtn/hoverBtn2.scss";
.loadbox {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .btn {
    min-width: 150px !important;
    width: 150px !important;
    height: 54px !important;
    box-sizing: border-box;
    margin: 1em;
    &:last-child {
        margin-right: auto;
    }
  }
}
</style>
