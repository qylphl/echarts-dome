<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div id="stage-1" class="stage stage-state-default">
      <div class="stage-content">
        <ul class="stage-1-icon">
          <li :class="'stage-1-icon-' + Number(index + 1)" v-for="(list, index) in stageImgList" :key="index">
            <span class="stage-1-icon-top" :style="{'z-index': Number(7 - index), 'background-image': 'url(' + list + ')',}"></span>
            <span class="stage-1-icon-bottom" :style="{'z-index': Number(7 - index), 'background-image': 'url(' + list + ')',}"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import bgNumber1 from "../../../../src/assets/img/digitalFlip/bg-number-1_d055a87.png";
import bgNumber2 from "../../../../src/assets/img/digitalFlip/bg-number-2_8474a71.png";
import bgNumber3 from "../../../../src/assets/img/digitalFlip/bg-number-3_5180f47.png";
import bgNumber4 from "../../../../src/assets/img/digitalFlip/bg-number-4_23d785e.png";
import bgNumber5 from "../../../../src/assets/img/digitalFlip/bg-number-5_517e73d.png";
import bgNumber6 from "../../../../src/assets/img/digitalFlip/bg-number-6_e104400.png";
import bgNumber7 from "../../../../src/assets/img/digitalFlip/bg-number-7_5c57e30.png";
export default {
  props: {
    title: {
      default: "数字翻转动画",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      stageNum: 7,
      stageImgList: [
        bgNumber1,
        bgNumber2,
        bgNumber3,
        bgNumber4,
        bgNumber5,
        bgNumber6,
        bgNumber7,
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
.stage-state-default {
  width: 100%;
}
#stage-1 .stage-content {
  width: 700px;
  height: 450px;
  margin: 70px auto 0;
}

.stage-1-icon {
  width: 204px;
  height: 289px;
  margin: 0 auto 68px;
  position: relative;
  -webkit-perspective: 900;
  perspective: 900;
}

.stage-1-icon-top,
.stage-1-icon-bottom {
  width: 184px;
  position: absolute;
  left: 0;
  background-color: #fff;
  background-repeat: no-repeat;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.stage-1-icon-top {
  height: 134px;
  padding: 10px 10px 0;
  top: 0;
  background-position: center 10px;
  -webkit-transform-origin: center bottom;
  -moz-transform-origin: center bottom;
  -ms-transform-origin: center bottom;
  -o-transform-origin: center bottom;
  transform-origin: center bottom;
}

.stage-1-icon-bottom {
  height: 135px;
  top: 144px;
  padding: 0 10px 10px;
  background-position: center -134px;
  -webkit-transform-origin: center top;
  -moz-transform-origin: center top;
  -ms-transform-origin: center top;
  -o-transform-origin: center top;
  transform-origin: center top;
}


#stage-1.stage-state-default {
  z-index: 1;
}
#stage-1.stage-state-default .stage-1-icon {
  opacity: 0;
  -webkit-animation: first-1 0.8s ease-out 0.6s 1 forwards,
    first-2 0.5s ease-out 2.7s 1 forwards;
  -moz-animation: first-1 0.8s ease-out 0.6s 1 forwards,
    first-2 0.5s ease-out 2.7s 1 forwards;
  -ms-animation: first-1 0.8s ease-out 0.6s 1 forwards,
    first-2 0.5s ease-out 2.7s 1 forwards;
  -o-animation: first-1 0.8s ease-out 0.6s 1 forwards,
    first-2 0.5s ease-out 2.7s 1 forwards;
  animation: first-1 0.8s ease-out 0.6s 1 forwards,
    first-2 0.5s ease-out 2.7s 1 forwards;
}
#stage-1.stage-state-default .stage-1-icon-bottom {
  -webkit-transform: translateX(0) translateY(0) translateZ(0) rotateX(180deg)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
  -moz-transform: translateX(0) translateY(0) translateZ(0) rotateX(180deg)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
  -ms-transform: translateX(0) translateY(0) translateZ(0) rotateX(180deg)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
  -o-transform: translateX(0) translateY(0) translateZ(0) rotateX(180deg)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
  transform: translateX(0) translateY(0) translateZ(0) rotateX(180deg)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
}
#stage-1.stage-state-default .stage-1-icon-1 .stage-1-icon-bottom {
  -webkit-transform: translateX(0) translateY(0) translateZ(0) rotateX(0)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
  -moz-transform: translateX(0) translateY(0) translateZ(0) rotateX(0)
    rotateY(0) rotateZ(0) rotate(0) scale(1);
  -ms-transform: translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0)
    rotateZ(0) rotate(0) scale(1);
  -o-transform: translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0)
    rotateZ(0) rotate(0) scale(1);
  transform: translateX(0) translateY(0) translateZ(0) rotateX(0) rotateY(0)
    rotateZ(0) rotate(0) scale(1);
}
#stage-1.stage-state-default .stage-1-icon-1 .stage-1-icon-top {
  -webkit-animation: flipover-top 0.15s linear 1.2s 1 normal forwards;
  -moz-animation: flipover-top 0.15s linear 1.2s 1 normal forwards;
  -ms-animation: flipover-top 0.15s linear 1.2s 1 normal forwards;
  -o-animation: flipover-top 0.15s linear 1.2s 1 normal forwards;
  animation: flipover-top 0.15s linear 1.2s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-2 .stage-1-icon-bottom {
  -webkit-animation: flipover-bottom 0.15s linear 1.2s 1 normal forwards;
  -moz-animation: flipover-bottom 0.15s linear 1.2s 1 normal forwards;
  -ms-animation: flipover-bottom 0.15s linear 1.2s 1 normal forwards;
  -o-animation: flipover-bottom 0.15s linear 1.2s 1 normal forwards;
  animation: flipover-bottom 0.15s linear 1.2s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-2 .stage-1-icon-top {
  -webkit-animation: flipover-top 0.15s linear 1.3499999999999999s 1 normal
    forwards;
  -moz-animation: flipover-top 0.15s linear 1.3499999999999999s 1 normal
    forwards;
  -ms-animation: flipover-top 0.15s linear 1.3499999999999999s 1 normal forwards;
  -o-animation: flipover-top 0.15s linear 1.3499999999999999s 1 normal forwards;
  animation: flipover-top 0.15s linear 1.3499999999999999s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-3 .stage-1-icon-bottom {
  -webkit-animation: flipover-bottom 0.15s linear 1.3499999999999999s 1 normal
    forwards;
  -moz-animation: flipover-bottom 0.15s linear 1.3499999999999999s 1 normal
    forwards;
  -ms-animation: flipover-bottom 0.15s linear 1.3499999999999999s 1 normal
    forwards;
  -o-animation: flipover-bottom 0.15s linear 1.3499999999999999s 1 normal
    forwards;
  animation: flipover-bottom 0.15s linear 1.3499999999999999s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-3 .stage-1-icon-top {
  -webkit-animation: flipover-top 0.15s linear 1.4999999999999998s 1 normal
    forwards;
  -moz-animation: flipover-top 0.15s linear 1.4999999999999998s 1 normal
    forwards;
  -ms-animation: flipover-top 0.15s linear 1.4999999999999998s 1 normal forwards;
  -o-animation: flipover-top 0.15s linear 1.4999999999999998s 1 normal forwards;
  animation: flipover-top 0.15s linear 1.4999999999999998s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-4 .stage-1-icon-bottom {
  -webkit-animation: flipover-bottom 0.15s linear 1.4999999999999998s 1 normal
    forwards;
  -moz-animation: flipover-bottom 0.15s linear 1.4999999999999998s 1 normal
    forwards;
  -ms-animation: flipover-bottom 0.15s linear 1.4999999999999998s 1 normal
    forwards;
  -o-animation: flipover-bottom 0.15s linear 1.4999999999999998s 1 normal
    forwards;
  animation: flipover-bottom 0.15s linear 1.4999999999999998s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-4 .stage-1-icon-top {
  -webkit-animation: flipover-top 0.2s linear 1.6499999999999997s 1 normal
    forwards;
  -moz-animation: flipover-top 0.2s linear 1.6499999999999997s 1 normal forwards;
  -ms-animation: flipover-top 0.2s linear 1.6499999999999997s 1 normal forwards;
  -o-animation: flipover-top 0.2s linear 1.6499999999999997s 1 normal forwards;
  animation: flipover-top 0.2s linear 1.6499999999999997s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-5 .stage-1-icon-bottom {
  -webkit-animation: flipover-bottom 0.2s linear 1.6499999999999997s 1 normal
    forwards;
  -moz-animation: flipover-bottom 0.2s linear 1.6499999999999997s 1 normal
    forwards;
  -ms-animation: flipover-bottom 0.2s linear 1.6499999999999997s 1 normal
    forwards;
  -o-animation: flipover-bottom 0.2s linear 1.6499999999999997s 1 normal
    forwards;
  animation: flipover-bottom 0.2s linear 1.6499999999999997s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-5 .stage-1-icon-top {
  -webkit-animation: flipover-top 0.35s linear 1.8499999999999996s 1 normal
    forwards;
  -moz-animation: flipover-top 0.35s linear 1.8499999999999996s 1 normal
    forwards;
  -ms-animation: flipover-top 0.35s linear 1.8499999999999996s 1 normal forwards;
  -o-animation: flipover-top 0.35s linear 1.8499999999999996s 1 normal forwards;
  animation: flipover-top 0.35s linear 1.8499999999999996s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-6 .stage-1-icon-bottom {
  -webkit-animation: flipover-bottom 0.35s linear 1.8499999999999996s 1 normal
    forwards;
  -moz-animation: flipover-bottom 0.35s linear 1.8499999999999996s 1 normal
    forwards;
  -ms-animation: flipover-bottom 0.35s linear 1.8499999999999996s 1 normal
    forwards;
  -o-animation: flipover-bottom 0.35s linear 1.8499999999999996s 1 normal
    forwards;
  animation: flipover-bottom 0.35s linear 1.8499999999999996s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-6 .stage-1-icon-top {
  -webkit-animation: flipover-top 0.5s linear 2.1999999999999997s 1 normal
    forwards;
  -moz-animation: flipover-top 0.5s linear 2.1999999999999997s 1 normal forwards;
  -ms-animation: flipover-top 0.5s linear 2.1999999999999997s 1 normal forwards;
  -o-animation: flipover-top 0.5s linear 2.1999999999999997s 1 normal forwards;
  animation: flipover-top 0.5s linear 2.1999999999999997s 1 normal forwards;
}
#stage-1.stage-state-default .stage-1-icon-7 .stage-1-icon-bottom {
  -webkit-animation: flipover-bottom 0.5s linear 2.1999999999999997s 1 normal
    forwards;
  -moz-animation: flipover-bottom 0.5s linear 2.1999999999999997s 1 normal
    forwards;
  -ms-animation: flipover-bottom 0.5s linear 2.1999999999999997s 1 normal
    forwards;
  -o-animation: flipover-bottom 0.5s linear 2.1999999999999997s 1 normal
    forwards;
  animation: flipover-bottom 0.5s linear 2.1999999999999997s 1 normal forwards;
}
// 动画效果
@-webkit-keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-ms-keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-ms-keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-o-keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes first-1 {
  0% {
    top: 20%;
    opacity: 0;
    -webkit-transform: scale(0.1);
  }
  100% {
    top: 20%;
    opacity: 1;
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes first-1 {
  0% {
    top: 20%;
    opacity: 0;
    -moz-transform: scale(0.1);
  }
  100% {
    top: 20%;
    opacity: 1;
    -moz-transform: scale(1);
  }
}
@-ms-keyframes first-1 {
  0% {
    top: 20%;
    opacity: 0;
    -ms-transform: scale(0.1);
  }
  100% {
    top: 20%;
    opacity: 1;
    -ms-transform: scale(1);
  }
}
@-o-keyframes first-1 {
  0% {
    top: 20%;
    opacity: 0;
    -o-transform: scale(0.1);
  }
  100% {
    top: 20%;
    opacity: 1;
    -o-transform: scale(1);
  }
}
@keyframes first-1 {
  0% {
    top: 20%;
    opacity: 0;
    transform: scale(0.1);
  }
  100% {
    top: 20%;
    opacity: 1;
    transform: scale(1);
  }
}
@-webkit-keyframes first-2 {
  0% {
    top: 20%;
  }
  100% {
    top: 0;
  }
}
@-moz-keyframes first-2 {
  0% {
    top: 20%;
  }
  100% {
    top: 0;
  }
}
@-ms-keyframes first-2 {
  0% {
    top: 20%;
  }
  100% {
    top: 0;
  }
}
@-o-keyframes first-2 {
  0% {
    top: 20%;
  }
  100% {
    top: 0;
  }
}
@keyframes first-2 {
  0% {
    top: 20%;
  }
  100% {
    top: 0;
  }
}
@-webkit-keyframes flipover-top {
  0% {
    z-index: 8;
    background-color: #fff;
    -webkit-transform: rotateX(0);
  }
  50% {
    z-index: 8;
    background-color: #efefef;
    -webkit-transform: rotateX(-90deg);
  }
  51% {
    z-index: 7;
    opacity: 1;
  }
  100% {
    z-index: 7;
    background-color: #fff;
    opacity: 0;
    -webkit-transform: rotateX(-180deg);
  }
}
@-moz-keyframes flipover-top {
  0% {
    z-index: 8;
    background-color: #fff;
    -moz-transform: rotateX(0);
  }
  50% {
    z-index: 8;
    background-color: #efefef;
    -moz-transform: rotateX(-90deg);
  }
  51% {
    z-index: 7;
    opacity: 1;
  }
  100% {
    z-index: 7;
    background-color: #fff;
    opacity: 0;
    -moz-transform: rotateX(-180deg);
  }
}
@-ms-keyframes flipover-top {
  0% {
    z-index: 8;
    background-color: #fff;
    -ms-transform: rotateX(0);
  }
  50% {
    z-index: 8;
    background-color: #efefef;
    -ms-transform: rotateX(-90deg);
  }
  51% {
    z-index: 7;
    opacity: 1;
  }
  100% {
    z-index: 7;
    background-color: #fff;
    opacity: 0;
    -ms-transform: rotateX(-180deg);
  }
}
@-o-keyframes flipover-top {
  0% {
    z-index: 8;
    background-color: #fff;
    -o-transform: rotateX(0);
  }
  50% {
    z-index: 8;
    background-color: #efefef;
    -o-transform: rotateX(-90deg);
  }
  51% {
    z-index: 7;
    opacity: 1;
  }
  100% {
    z-index: 7;
    background-color: #fff;
    opacity: 0;
    -o-transform: rotateX(-180deg);
  }
}
@keyframes flipover-top {
  0% {
    z-index: 8;
    background-color: #fff;
    transform: rotateX(0);
  }
  50% {
    z-index: 8;
    background-color: #efefef;
    transform: rotateX(-90deg);
  }
  51% {
    z-index: 7;
    opacity: 1;
  }
  100% {
    z-index: 7;
    background-color: #fff;
    opacity: 0;
    transform: rotateX(-180deg);
  }
}
@-webkit-keyframes flipover-bottom {
  0% {
    z-index: 7;
    background-color: #fff;
    -webkit-transform: rotateX(180deg);
  }
  50% {
    z-index: 7;
    background-color: #efefef;
    -webkit-transform: rotateX(90deg);
  }
  51% {
    z-index: 8;
  }
  100% {
    z-index: 8;
    background-color: #fff;
    -webkit-transform: rotateX(0);
  }
}
@-moz-keyframes flipover-bottom {
  0% {
    z-index: 7;
    background-color: #fff;
    -moz-transform: rotateX(180deg);
  }
  50% {
    z-index: 7;
    background-color: #efefef;
    -moz-transform: rotateX(90deg);
  }
  51% {
    z-index: 8;
  }
  100% {
    z-index: 8;
    background-color: #fff;
    -moz-transform: rotateX(0);
  }
}
@-ms-keyframes flipover-bottom {
  0% {
    z-index: 7;
    background-color: #fff;
    -ms-transform: rotateX(180deg);
  }
  50% {
    z-index: 7;
    background-color: #efefef;
    -ms-transform: rotateX(90deg);
  }
  51% {
    z-index: 8;
  }
  100% {
    z-index: 8;
    background-color: #fff;
    -ms-transform: rotateX(0);
  }
}
@-o-keyframes flipover-bottom {
  0% {
    z-index: 7;
    background-color: #fff;
    -o-transform: rotateX(180deg);
  }
  50% {
    z-index: 7;
    background-color: #efefef;
    -o-transform: rotateX(90deg);
  }
  51% {
    z-index: 8;
  }
  100% {
    z-index: 8;
    background-color: #fff;
    -o-transform: rotateX(0);
  }
}
@keyframes flipover-bottom {
  0% {
    z-index: 7;
    background-color: #fff;
    transform: rotateX(180deg);
  }
  50% {
    z-index: 7;
    background-color: #efefef;
    transform: rotateX(90deg);
  }
  51% {
    z-index: 8;
  }
  100% {
    z-index: 8;
    background-color: #fff;
    transform: rotateX(0);
  }
}
@-webkit-keyframes fadein-from-bottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(300px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
@-moz-keyframes fadein-from-bottom {
  0% {
    opacity: 0;
    -moz-transform: translateY(300px);
  }
  100% {
    opacity: 1;
    -moz-transform: translateY(0);
  }
}
@-ms-keyframes fadein-from-bottom {
  0% {
    opacity: 0;
    -ms-transform: translateY(300px);
  }
  100% {
    opacity: 1;
    -ms-transform: translateY(0);
  }
}
@-o-keyframes fadein-from-bottom {
  0% {
    opacity: 0;
    -o-transform: translateY(300px);
  }
  100% {
    opacity: 1;
    -o-transform: translateY(0);
  }
}
@keyframes fadein-from-bottom {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
