<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="box">
      <ul class="box-ul">
        <li
          :class="{ 'show': isShow == index, 'hide': isHide == index }"
          v-for="(color, index) in bgColor"
          :key="index"
          :style="{ 'background-color': color }"
        >{{index + 1}}</li>
      </ul>
      <a @click="choose(1)">上一张</a>
      <a @click="choose(2)">下一张</a>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "上下翻动切换动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      isShow: 0,
      isHide: -1,
      bgColor: ["blueviolet", "burlywood", "chartreuse", "coral", "darkcyan"],
      len: 4,
      oValue: 0,
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {
    choose(num) {
      if (num == 1) { // 上一张
        this.isHide = this.oValue;
        this.oValue--;
        this.oValue = this.oValue < 0 ? this.len : this.oValue;
        this.isShow = this.oValue;
      } else if (num == 2) { // 下一张
        this.isHide = this.oValue;
        this.oValue++;
        this.oValue = this.oValue > this.len ? 0 : this.oValue;
        this.isShow = this.oValue;
      }
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 60%;
  height: 150px;
  margin: 60px auto 140px;
  .box-ul,
  .box-ul li {
    width: 100%;
    height: 100%;
  }
  .box-ul {
    transform-style: preserve-3d;
    perspective: 800px;
    li {
      position: absolute;
      background-size: cover;
      background-position: -50% -50%;
      transform: rotateX(180deg);
      transform-origin: bottom;
      opacity: 0;
      text-align: center;
      line-height: 150px;
      font-size: 34px;
      color: #fff;
    }
    .show {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-animation: show 0.6s;
      animation: show 0.6s;
      opacity: 1;
    }
    .hide {
      -webkit-transform: rotateX(180deg);
      transform: rotateX(180deg);
      -webkit-animation: hide 0.6s;
      animation: hide 0.6s;
      opacity: 0;
    }
  }
  a {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    text-align: center;
    &:nth-of-type(1) {
      left: -60px;
    }
    &:nth-of-type(2) {
      right: -60px;
    }
  }
}
@-webkit-keyframes show {
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  50% {
    transform: rotateX(-25deg);
    opacity: 1;
  }
  60% {
    transform: rotateX(18deg);
    opacity: 1;
  }
  70% {
    transform: rotateX(-13deg);
    opacity: 1;
  }
  80% {
    transform: rotateX(8deg);
    opacity: 1;
  }
  90% {
    transform: rotateX(-6deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@keyframes show {
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  50% {
    transform: rotateX(-25deg);
    opacity: 1;
  }
  60% {
    transform: rotateX(18deg);
    opacity: 1;
  }
  70% {
    transform: rotateX(-13deg);
    opacity: 1;
  }
  80% {
    transform: rotateX(8deg);
    opacity: 1;
  }
  90% {
    transform: rotateX(-6deg);
    opacity: 1;
  }
  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
}
@-webkit-keyframes hide {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }

  100% {
    transform: rotateX(-180deg);
    opacity: 0;
  }
}
@keyframes hide {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }

  100% {
    transform: rotateX(-180deg);
    opacity: 0;
  }
}
</style>
