<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="container flex-box">
      <button id="button" :class="btnClassName" @click="clickButton">
        <div class="message submitMessage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12.2">
            <polyline stroke="currentColor" points="2,7.1 6.5,11.1 11,7.1"/>
            <line stroke="currentColor" x1="6.5" y1="1.2" x2="6.5" y2="10.3"/>
          </svg>
          <span class="button-text">
            <span class="char0" style="--d: 0ms; --dr: 30ms">提</span>
            <span class="char1" style="--d: 30ms; --dr: 0ms">交</span>
          </span>
        </div>

        <div class="message loadingMessage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 17">
            <circle class="loadingCircle" cx="2.2" cy="10" r="1.6"/>
            <circle class="loadingCircle" cx="9.5" cy="10" r="1.6"/>
            <circle class="loadingCircle" cx="16.8" cy="10" r="1.6"/>
          </svg>
        </div>

        <div class="message successMessage">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11">
            <polyline stroke="currentColor" points="1.4,5.8 5.1,9.5 11.6,2.1"/>
          </svg>
          <span class="button-text">
            <span class="char0" style="--d: 0ms; --dr: 30ms">完</span>
            <span class="char1" style="--d: 30ms; --dr: 0ms">成</span>
          </span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "SVG提交按钮动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      disabled: false,
      btnClassName: "ready", // 按钮的class类名
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {
    clickButton() {
      let that = this;
      if (!that.disabled) {
        that.disabled = true;
        that.btnClassName = "loading";
        setTimeout(() => {
          that.btnClassName = "complete";
          setTimeout(() => {
            that.disabled = false;
            that.btnClassName = "ready";
          }, 5000);
        }, 1800);
      }
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  min-height: calc(500px - 64px);
  position: relative;
  button {
    background: none;
    border: none;
    color: #f4f7ff;
    cursor: pointer;
    font-family: "Quicksand", sans-serif;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    left: 50%;
    outline: none;
    overflow: hidden;
    padding: 0 10px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 190px;
    -webkit-tap-highlight-color: transparent;
    z-index: 1;
    &::before {
      background: #1f2335;
      border-radius: 50px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4) inset;
      content: "";
      display: block;
      height: 100%;
      margin: 0 auto;
      position: relative;
      transition: width 0.2s cubic-bezier(0.39, 1.86, 0.64, 1) 0.3s;
      width: 100%;
    }
    .message {
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      svg {
        display: inline-block;
        fill: none;
        margin-right: 5px;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
        .loadingCircle {
          &:nth-child(2) {
            animation-delay: 0.1s;
          }
          &:nth-child(3) {
            animation-delay: 0.2s;
          }
        }
      }
      .button-text {
        span {
          opacity: 0;
          position: relative;
        }
      }
    }
    .submitMessage {
      svg {
        color: #5c86ff;
        margin-left: -1px;
        opacity: 0;
        position: relative;
        top: 30px;
        transition: top 0.4s ease, opacity 0.3s linear;
        width: 14px;
      }
      .button-text {
        span {
          top: 8px;
          transition: all 0.2s ease var(--d);
        }
      }
    }
    .loadingMessage {
      opacity: 0;
      transition: opacity 0.3s linear 0.3s,
        top 0.4s cubic-bezier(0.22, 0, 0.41, -0.57);
      svg {
        fill: #5c86ff;
        margin: 0;
        width: 22px;
      }
    }
    .successMessage {
      svg {
        color: #5cffa1;
        stroke-dasharray: 20;
        stroke-dashoffset: 20;
        transition: stroke-dashoffset 0.3s ease-in-out;
        width: 14px;
      }
      .button-text {
        span {
          left: 5px;
          transition: all 0.2s ease var(--dr);
        }
      }
    }
  }
  .ready {
    .submitMessage {
      svg {
        opacity: 1;
        top: 1px;
        transition: top 0.4s ease 600ms, opacity 0.3s linear 600ms;
      }
      .button-text {
        span {
          top: 0;
          opacity: 1;
          transition: all 0.2s ease calc(var(--dr) + 600ms);
        }
      }
    }
  }
  .loading {
    cursor: default;
    &::before {
      transition: width 0.3s ease;
      width: 80%;
    }
    .loadingMessage {
      opacity: 1;
    }
    .loadingCircle {
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-name: loading;
      cy: 10;
    }
  }
  .complete {
    cursor: default;
    .submitMessage {
      svg {
        top: -30px;
        transition: none;
      }
      .button-text {
        span {
          top: -8px;
          transition: none;
        }
      }
    }
    .loadingMessage {
      top: 80px;
    }
    .successMessage {
      svg {
        stroke-dashoffset: 0;
        transition: stroke-dashoffset 0.3s ease-in-out 1.4s;
      }
      .button-text {
        span {
          left: 0;
          opacity: 1;
          transition: all 0.2s ease calc(var(--d) + 1000ms);
        }
      }
    }
  }
  canvas {
    height: 100vh;
    pointer-events: none;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
}
@keyframes loading {
  0% {
    cy: 10;
  }
  25% {
    cy: 3;
  }
  50% {
    cy: 10;
  }
}
</style>