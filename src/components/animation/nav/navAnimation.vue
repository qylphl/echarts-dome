<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <!-- dome1 -->
    <ul :class="{ dome1: true, 'themeType-ul': themeType == 1 ? true : false }">
      <li
        :class="{ 'choose-list': chooseType == index }"
        v-for="(msg, index) in domeList"
        :key="index"
        v-text="msg"
        @click="chooseType = index"
      ></li>
    </ul>
    <!-- END dome1 -->
    <!-- dome2 -->
    <ul :class="{ dome2: true, 'themeType-ul': themeType == 1 ? true : false }">
      <li v-for="(msg, index) in domeList" :key="index" :class="{'choose-list': chooseDomeTwotype == index}" @click="chooseDomeTwotype = index">{{ msg }}</li>
    </ul>
    <!-- END dome2 -->
    <!-- dome3 -->
    <div style="width: max-content;margin: 0 auto;">
      <ul :class="{ dome3: true, 'themeType-ul': themeType == 1 ? true : false }">
        <li v-for="(msg, index) in domeList" :key="index" @click="chooseDomeThreetype = index">{{ msg }}</li>
        <div id="marker" :style="{'transform': 'translate(' + chooseDomeThreetype * 90 + 'px, 0)'}"></div>
      </ul>
    </div>
    <!-- END dome3 -->
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "导航栏光标下划线跟随效果",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      domeList: ["柱状图", "饼状图", "折线图", "漏斗图", "地图"],
      chooseType: 0,
      chooseDomeTwotype: 0,
      chooseDomeThreetype: 0,
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
// dome1
.dome1 {
  display: flex;
  position: relative;
  width: max-content;
  max-width: 100%;
  margin: 50px auto;
  li {
    position: relative;
    padding: 20px;
    font-size: 18px;
    color: #000;
    line-height: 1;
    transition: 0.2s all linear;
    cursor: pointer;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      height: 100%;
      border-bottom: 3px solid #000;
      transition: 0.2s all linear;
    }
    &:hover {
      &::before {
        width: 100%;
        top: 0;
        left: 0;
        transition-delay: 0.1s;
        border-bottom-color: #000;
      }
    }
  }
  .choose-list {
    //选中的li样式
    &::before {
      width: 100%;
      top: 0;
      left: 0;
      transition-delay: 0.1s;
      border-bottom-color: #000;
    }
  }
}
.themeType-ul {
  // 切换主题的样式
  li {
    color: #fff !important;
    &::before {
      border-color: #fff !important;
    }
    &:hover {
      &::before {
        border-bottom-color: #fff;
      }
    }
  }
}
.dome1 li:hover ~ li::before {
  left: 0;
}
// dome2
.dome2 {
  margin: 0 auto 50px;
  text-align: center;
  li {
    display: inline-block;
    font-size: 18px;
    color: #000;
    position: relative;
    padding: 20px;
    cursor: pointer;
    transition: 0.2s all linear;
    &:after {
      content: "";
      width: 0;
      height: 3px;
      background: #337ab7;
      position: absolute;
      bottom: 0;
      left: 50%;
      transition: all 0.2s;
    }
    &:hover {
      &:after {
        left: 0%;
        width: 100%;
      }
    }
  }
  .choose-list {
    &:after {
      left: 0%;
      width: 100%;
    }
  }
}
// dome3
.dome3 {
  position: relative;
  list-style: none;
  font-size: 0;
  text-transform: uppercase;
  display: inline-block;
  padding: 0;
  li {
    font-size: 18px;
    display: inline-block;
    position: relative;
    padding: 15px 0;
    cursor: pointer;
    z-index: 5;
    min-width: 90px;
    text-align: center;
    box-sizing: border-box;
    transition: 0.2s all linear;
    &:hover ul div {
      -webkit-transform: translate(0, 0);
      -moz-transform: translate(0, 0);
      -ms-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    &:nth-child(1):hover ~ #marker {
      -webkit-transform: translate(0px, 0) !important;
      -moz-transform: translate(0px, 0) !important;
      -ms-transform: translate(0px, 0) !important;
      transform: translate(0px, 0) !important;
    }
    &:nth-child(2):hover ~ #marker {
      -webkit-transform: translate(90px, 0) !important;
      -moz-transform: translate(90px, 0) !important;
      -ms-transform: translate(90px, 0) !important;
      transform: translate(90px, 0) !important;
    }
    &:nth-child(3):hover ~ #marker {
      -webkit-transform: translate(180px, 0) !important;
      -moz-transform: translate(180px, 0) !important;
      -ms-transform: translate(180px, 0) !important;
      transform: translate(180px, 0) !important;
    }
    &:nth-child(4):hover ~ #marker {
      -webkit-transform: translate(270px, 0) !important;
      -moz-transform: translate(270px, 0) !important;
      -ms-transform: translate(270px, 0) !important;
      transform: translate(270px, 0) !important;
    }
    &:nth-child(5):hover ~ #marker {
      -webkit-transform: translate(360px, 0) !important;
      -moz-transform: translate(360px, 0) !important;
      -ms-transform: translate(360px, 0) !important;
      transform: translate(360px, 0) !important;
    }
  }
  #marker {
    height: 3px;
    background: #3e8760 !important;
    position: absolute;
    bottom: 0;
    width: 90px;
    z-index: 2;
    -webkit-transition: all 0.35s;
    -moz-transition: all 0.35s;
    -ms-transition: all 0.35s;
    transition: all 0.35s;
  }
}
</style>
