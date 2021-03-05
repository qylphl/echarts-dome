<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="wrapper flex-box">
      <div class="swanky-wrapper">
        <div 
          v-for="(item, index) in menuList" 
          :key="index" 
          :class="{ 'swanky-wrapper-box': true, 'choose-content': chooseType == index }" 
          :style="{'height': (chooseType == index ? (64 * item.second.length + 72) + 'px' : '72px')}" 
          @click="chooseType = index"
        >
          <div class="item-content flex-box">
            <i :class="'iconfont ' + item.icon"></i>
            <span>{{ item.title }}</span>
            <div class="lil_arrow"></div>
            <div class="bar"></div>
          </div>
          <ul class="swanky-wrapper-content">
            <li v-for="(msg, i) in item.second" :key="i" :style="{ 'animation-delay': Number(0.575 + 0.125 * i) + 's' }">
              {{ msg }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "下拉收缩菜单动画",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      chooseType: -1,
      menuList: [
        { icon: "iconyibiaopan", title: "仪表盘", second: ["工具", "报告", "分析", "代码块"]},
        { icon: "iconzhuzhuangtu", title: "柱状图", second: ["柱状(条形)图", "堆积柱状图", "分组柱状图", "3D柱状图", "双向柱状图"]},
        { icon: "iconbingtu", title: "饼状图", second: [ "饼(环)状图", "3D饼(环)状图", "玫瑰图", "环饼嵌套图", "旭日图"]},
        { icon: "iconzhexiantu", title: "折线图", second: ["折线图", "面积图"]},
        { icon: "iconditu", title: "地图", second: ["普通地图", "轨迹地图", "气泡地图", "多功能地图"]},
      ],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {},
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: max-content;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  .swanky-wrapper {
    width: 225px;
    height: auto;
    overflow: hidden;
    border-radius: 4px;
    background: #2a394f;
    margin: 60px auto;
    .swanky-wrapper-box {
      cursor: pointer;
      float: left;
      height: 72px;
      border-bottom: 1px solid #293649;
      position: relative;
      width: 100%;
      color: #eff4fa;
      transition: text-indent 0.15s, height 0.3s;
      &:hover {
        background: #212e41;
        border-bottom: 1px solid #2a394f;
        text-indent: 4px;
        .item-content {
          .bar {
            width: 100%;
          }
        }
      }
      // 一级菜单
      .item-content {
        width: 100%;
        padding: 25px;
        align-items: center;
        box-sizing: border-box;
        i {
          margin-right: 10px;
          width: 16px;
          height: 16px;
          color: #fff;
        }
        .lil_arrow {
          width: 5px;
          height: 5px;
          margin-left: auto;
          transition: -webkit-transform 0.8s;
          transition: transform 0.8s;
          transition: transform 0.8s, -webkit-transform 0.8s;
          -webkit-transition-timing-function: cubic-bezier(
            0.68,
            -0.55,
            0.265,
            1.55
          );
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          border-top: 2px solid white;
          border-right: 2px solid white;
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        }
        .bar {
          width: 0px;
          transition: width 0.15s;
          height: 2px;
          position: absolute;
          display: block;
          background: #355789;
          bottom: 0;
          left: 0;
        }
      }
      // 二级菜单
      .swanky-wrapper-content {
        position: relative;
        display: none;
        overflow: hidden;
        left: 0;
        width: 100%;
        li {
          list-style-type: none;
          width: 100%;
          opacity: 0;
          left: -100%;
          background: #15a4fa;
          height: 64px;
          line-height: 64px;
          text-indent: 25px;
          box-shadow: 0px 0px #126ca1 inset;
          transition: box-shadow 0.3s, text-indent 0.3s;
          position: relative;
          &:hover {
            background: #0c93e4;
            box-shadow: 3px 0px #126ca1 inset;
            transition: box-shadow 0.3s linear, text-indent 0.3s linear;
            text-indent: 31px;
          }
        }
      }
    }
    .choose-content {
      height: 325px;
      background: #212e41;
      text-indent: 4px;
      transition-property: height;
      transition-duration: 0.6s;
      -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
      .item-content {
        .lil_arrow {
          transition: -webkit-transform 0.8s;
          transition: transform 0.8s;
          transition: transform 0.8s, -webkit-transform 0.8s;
          -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
          border-top: 2px solid #14a3f9;
          border-right: 2px solid #14a3f9;
        }
        .bar {
          width: 0 !important;
        }
      }
      .swanky-wrapper-content {
        display: block;
        border-bottom: 1px solid #212e41;
        li {
          -webkit-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          -moz-transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation: in 0.15s 0.575s forwards;
        }
      }
    }
  }
}
::-webkit-scrollbar {
  display: none;
}

@-webkit-keyframes in {
  from {
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}

@keyframes in {
  from {
    left: -100%;
    opacity: 0;
  }
  to {
    left: 0;
    opacity: 1;
  }
}
</style>