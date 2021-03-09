<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox flex-box">
      <div
        class="slice slice-box"
        v-for="(msg, index) in classList"
        :key="index"
      >
        <div :data-loader="msg"></div>
        <div>data-loader="{{ msg }}"</div>
      </div>
      <!-- 纯css3方块跳动加载动效 -->
      <div class="slice square-bounce-slice flex-box" style="width: 79.7%">
        <div class="square-bounce-container flex-box">
          <span class="girl"></span>
          <div class="boys flex-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
      default: "加载动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      classList: [
        "circle",
        "circle-side",
        "arrow-circle",
        "ball-scale",
        "ball-circle",
        "rectangle",
        "heart",
        "ball-rotate",
        "ball-pulse",
        "jumping",
        "satellite",
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
@import "style/loading/loading.min.scss";
.loadbox {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .slice {
    position: relative;
    width: 19%;
    height: 180px;
    text-align: center;
    margin-bottom: 20px;
    background-color: rgba(2, 13, 70, 0.9);
    border-radius: 5px;
  }
  .slice-box {
    div {
      &:first-child {
        margin: 50px auto 0;
      }
      &:nth-child(2) {
        position: absolute;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 16px;
        bottom: 30px;
      }
    }
  }
  // 纯css3方块跳动加载动效
  .square-bounce-slice {
    align-items: center;
    justify-content: center;
    .square-bounce-container {
      position: relative;
      width: 8em;
      height: 1em;
      font-size: 35px;
      display: flex;
      justify-content: space-between;
      span {
        width: 1em;
        height: 1em;
        --duration: 1.5s;
        &::before {
          content: "";
          position: absolute;
          width: inherit;
          height: inherit;
          border-radius: 15%;
          box-shadow: 0 0 0.1em rgba(0, 0, 0, 0.3);
        }
      }
      .girl {
        animation: slide var(--duration) ease-in-out infinite alternate;
        &::before {
          background-color: hotpink;
        }
      }
      .boys {
        width: 6em;
        height: 100%;
        justify-content: space-between;
        span {
          animation: var(--duration) ease-in-out infinite alternate;
          &::before {
            background-color: dodgerblue;
            animation: var(--duration) ease-in-out infinite alternate;
          }
          &:nth-child(1) {
            animation-name: jump-off-1;
            &::before {
              filter: brightness(1);
              animation-name: jump-down-1;
            }
          }
          &:nth-child(2) {
            animation-name: jump-off-2;
            &::before {
              filter: brightness(1.15);
              animation-name: jump-down-2;
            }
          }
          &:nth-child(3) {
            animation-name: jump-off-3;
            &::before {
              filter: brightness(1.3);
              animation-name: jump-down-3;
            }
          }
          &:nth-child(4) {
            animation-name: jump-off-4;
            &::before {
              filter: brightness(1.45);
              animation-name: jump-down-4;
            }
          }
        }
      }
      @keyframes slide {
        from {
          transform: translateX(0);
          filter: brightness(1);
        }
        to {
          transform: translatex(calc(8em - (1em * 1.25)));
          filter: brightness(1.45);
        }
      }
      @keyframes jump-off-1 {
        0%,
        15% {
          transform: rotate(0deg);
        }
        35%,
        100% {
          transform-origin: -50% center;
          transform: rotate(-180deg);
        }
      }
      @keyframes jump-off-2 {
        0%,
        30% {
          transform: rotate(0deg);
        }
        50%,
        100% {
          transform-origin: -50% center;
          transform: rotate(-180deg);
        }
      }
      @keyframes jump-off-3 {
        0%,
        45% {
          transform: rotate(0deg);
        }
        65%,
        100% {
          transform-origin: -50% center;
          transform: rotate(-180deg);
        }
      }
      @keyframes jump-off-4 {
        0%,
        60% {
          transform: rotate(0deg);
        }
        80%,
        100% {
          transform-origin: -50% center;
          transform: rotate(-180deg);
        }
      }
      @keyframes jump-down-1 {
        5% {
          transform: scale(1, 1);
        }
        15% {
          transform-origin: center bottom;
          transform: scale(1.3, 0.7);
        }
        20%,
        25% {
          transform-origin: center bottom;
          transform: scale(0.8, 1.4);
        }
        40% {
          transform-origin: center top;
          transform: scale(1.3, 0.7);
        }
        55%,
        100% {
          transform: scale(1, 1);
        }
      }
      @keyframes jump-down-2 {
        20% {
          transform: scale(1, 1);
        }
        30% {
          transform-origin: center bottom;
          transform: scale(1.3, 0.7);
        }
        35%,
        40% {
          transform-origin: center bottom;
          transform: scale(0.8, 1.4);
        }
        55% {
          transform-origin: center top;
          transform: scale(1.3, 0.7);
        }
        70%,
        100% {
          transform: scale(1, 1);
        }
      }
      @keyframes jump-down-3 {
        35% {
          transform: scale(1, 1);
        }
        45% {
          transform-origin: center bottom;
          transform: scale(1.3, 0.7);
        }
        50%,
        55% {
          transform-origin: center bottom;
          transform: scale(0.8, 1.4);
        }
        70% {
          transform-origin: center top;
          transform: scale(1.3, 0.7);
        }
        85%,
        100% {
          transform: scale(1, 1);
        }
      }
      @keyframes jump-down-4 {
        50% {
          transform: scale(1, 1);
        }
        60% {
          transform-origin: center bottom;
          transform: scale(1.3, 0.7);
        }
        65%,
        70% {
          transform-origin: center bottom;
          transform: scale(0.8, 1.4);
        }
        85% {
          transform-origin: center top;
          transform: scale(1.3, 0.7);
        }
        100%,
        100% {
          transform: scale(1, 1);
        }
      }
    }
  }
}
</style>
