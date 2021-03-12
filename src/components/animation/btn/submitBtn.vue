<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="container flex-box" ref="container">
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
      <canvas id="canvas"></canvas>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { Confetto, Sequin } from "utils/submitBtnClass";
export default {
  props: {
    title: {
      default: "SVG + Canvas纸屑按钮提交动效",
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
      // canvas需要数据
      confettiCount: 20,
      sequinCount: 10,
      // add Confetto/Sequin objects to arrays to draw them
      confetti: [],
      sequins: [],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      // init other global elements
      const button = document.getElementById("button"),
        canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d");
      canvas.width = this.$refs.container.offsetWidth;
      canvas.height = this.$refs.container.offsetHeight;

      let that = this,
        cx = ctx.canvas.width / 2,
        cy = ctx.canvas.height / 2;

      var render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        that.confetti.forEach((confetto, index) => {
          let width = confetto.dimensions.x * confetto.scale.x,
            height = confetto.dimensions.y * confetto.scale.y;

          // move canvas to position and rotate
          ctx.translate(confetto.position.x, confetto.position.y);
          ctx.rotate(confetto.rotation);

          // update confetto "physics" values
          confetto.update();

          // get front or back fill color
          ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

          // draw confetto
          ctx.fillRect(-width / 2, -height / 2, width, height);

          // reset transform matrix
          ctx.setTransform(1, 0, 0, 1, 0, 0);

          // clear rectangle where button cuts off
          if (confetto.velocity.y < 0) {
            ctx.clearRect(
              canvas.width / 2 - button.offsetWidth / 2,
              canvas.height / 2 + button.offsetHeight / 2,
              button.offsetWidth,
              button.offsetHeight
            );
          }
        });

        that.sequins.forEach((sequin, index) => {
          // move canvas to position
          ctx.translate(sequin.position.x, sequin.position.y);

          // update sequin "physics" values
          sequin.update();

          // set the color
          ctx.fillStyle = sequin.color;

          // draw sequin
          ctx.beginPath();
          ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
          ctx.fill();

          // reset transform matrix
          ctx.setTransform(1, 0, 0, 1, 0, 0);

          // clear rectangle where button cuts off
          if (sequin.velocity.y < 0) {
            ctx.clearRect(
              canvas.width / 2 - button.offsetWidth / 2,
              canvas.height / 2 + button.offsetHeight / 2,
              button.offsetWidth,
              button.offsetHeight
            );
          }
        });

        // remove confetti and sequins that fall off the screen
        // must be done in seperate loops to avoid noticeable flickering
        that.confetti.forEach((confetto, index) => {
          if (confetto.position.y >= canvas.height) that.confetti.splice(index, 1);
        });
        that.sequins.forEach((sequin, index) => {
          if (sequin.position.y >= canvas.height) that.sequins.splice(index, 1);
        });

        window.requestAnimationFrame(render);
      };

      render();
    },
    initBurst() {
      for (let i = 0; i < this.confettiCount; i++) {
        this.confetti.push(new Confetto());
      }
      for (let i = 0; i < this.sequinCount; i++) {
        this.sequins.push(new Sequin());
      }
    },
    clickButton() {
      let that = this;
      if (!that.disabled) {
        that.disabled = true;
        that.btnClassName = "loading";
        setTimeout(() => {
          that.btnClassName = "complete";
          setTimeout(() => {
            that.initBurst();
            setTimeout(() => {
              that.disabled = false;
              that.btnClassName = "ready";
            }, 5000);
          }, 320);
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
  height: calc(100% - 64px);
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
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
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