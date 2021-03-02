<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="wrapper-content-box flex-box">
      <div class="wrapper">
        <input type="checkbox" />
        <div class="btn"></div>
        <div class="tooltip">
          <svg>
            <use xlink:href="#icon-01" class="icon icon-01" />
          </svg>
          <svg>
            <use xlink:href="#icon-02" class="icon icon-02" />
          </svg>
          <svg>
            <use xlink:href="#icon-03" class="icon icon-03" />
          </svg>
        </div>
        <svg>
          <use xlink:href="#shape-01" class="shape shape-01" />
          <use xlink:href="#shape-02" class="shape shape-02" />
          <use xlink:href="#shape-03" class="shape shape-03" />
          <use xlink:href="#shape-04" class="shape shape-04" />
          <use xlink:href="#shape-05" class="shape shape-05" />
          <use xlink:href="#shape-06" class="shape shape-06" />
          <use xlink:href="#shape-07" class="shape shape-07" />
          <use xlink:href="#shape-08" class="shape shape-08" />
          <use xlink:href="#shape-09" class="shape shape-09" />
        </svg>
      </div>
      <!-- SVG -->
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-01"
        >
          <path
            d="M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z"
            transform="translate(0 -2)"
          />
          <ellipse cx="13" cy="12.99" rx="4.52" ry="4.49" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-02"
        >
          <line x1="25" y1="12.58" x2="25" y2="9.42" />
          <line x1="21" y1="14.16" x2="21" y2="7.84" />
          <line x1="17" y1="15.74" x2="17" y2="6.26" />
          <line x1="13" y1="21" x2="13" y2="1" />
          <line x1="9" y1="17.32" x2="9" y2="4.68" />
          <line x1="5" y1="13.63" x2="5" y2="8.37" />
          <line x1="1" y1="11.53" x2="1" y2="10.47" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-03"
        >
          <polygon
            points="8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10"
          />
          <circle cx="8" cy="4" r="3" />
        </symbol>

        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-01"
        >
          <polygon
            stroke="var(--shape-color-03)"
            points="155.77 140.06 141.08 152.42 159.12 158.96 155.77 140.06"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-02"
        >
          <g stroke="var(--shape-color-02)">
            <line x1="158.66" y1="146.73" x2="141.54" y2="152.29" />
            <line x1="147.32" y1="140.95" x2="152.88" y2="158.07" />
          </g>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-03"
        >
          <circle
            stroke="var(--shape-color-01)"
            cx="150.1"
            cy="149.51"
            r="13"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-04"
        >
          <circle fill="var(--shape-color-01)" cx="150.1" cy="149.51" r="4" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-05"
        >
          <rect
            stroke="var(--shape-color-03)"
            x="141.1"
            y="140.51"
            width="18"
            height="18"
            transform="translate(40.44 -31.76) rotate(13.94)"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-06"
        >
          <g stroke="var(--shape-color-02)">
            <line x1="158.48" y1="152.78" x2="141.72" y2="146.24" />
            <line x1="153.37" y1="141.13" x2="146.83" y2="157.89" />
          </g>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-07"
        >
          <rect
            stroke="var(--shape-color-03)"
            x="138.1"
            y="137.51"
            width="24"
            height="24"
            transform="translate(-42.94 62.23) rotate(-20.56)"
          />
        </symbol>

        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-08"
        >
          <circle fill="var(--shape-color-01)" cx="150.1" cy="149.51" r="4" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-09"
        >
          <circle stroke="var(--shape-color-01)" cx="150.1" cy="149.51" r="8" />
        </symbol>
      </svg>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "弹出工具提示栏动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {};
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
.wrapper-content-box {
  width: 100%;
  height: calc(500px - 64px);
  align-items: center;
  justify-content: center;
  background-color: #e8ebf3;
  .wrapper {
    --background: #62abff;
    --icon-color: #414856;
    --shape-color-01: #b8cbee;
    --shape-color-02: #7691e8;
    --shape-color-03: #fdd053;
    --width: 90px;
    --height: 90px;
    --border-radius: var(--height);
    width: var(--width);
    height: var(--height);
    position: relative;
    border-radius: var(--border-radius);
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    .btn {
      background: var(--background);
      width: var(--width);
      height: var(--height);
      position: relative;
      z-index: 3;
      border-radius: var(--border-radius);
      box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
      display: -webkit-box;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      -webkit-animation: plus-animation-reverse 0.5s ease-out forwards;
      animation: plus-animation-reverse 0.5s ease-out forwards;
      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 4px;
        background: #fff;
      }
      &::before {
        width: 4px;
        height: 28px;
      }
      &::after {
        width: 28px;
        height: 4px;
      }
    }
    .tooltip {
      width: 90px;
      height: 75px;
      border-radius: 70px;
      position: absolute;
      background: #fff;
      z-index: 2;
      padding: 0 15px;
      box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);
      opacity: 0;
      top: 0;
      display: -webkit-box;
      display: flex;
      justify-content: space-around;
      -webkit-box-align: center;
      align-items: center;
      -webkit-transition: opacity 0.15s ease-in, top 0.15s ease-in,
        width 0.15s ease-in;
      transition: opacity 0.15s ease-in, top 0.15s ease-in, width 0.15s ease-in;
      &::after {
        content: "";
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: -8px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        z-index: 0;
      }
    }
    .tooltip > svg {
      width: 100%;
      height: 26px;
      display: -webkit-box;
      display: flex;
      justify-content: space-around;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      .icon {
        fill: none;
        stroke: var(--icon-color);
        stroke-width: 2px;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.4;
        -webkit-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
      }
      &:hover {
        .icon {
          opacity: 1;
        }
      }
    }
    input {
      height: 100%;
      width: 100%;
      border-radius: var(--border-radius);
      cursor: pointer;
      position: absolute;
      z-index: 5;
      opacity: 0;
    }
  }
  .wrapper > svg {
    width: 300px;
    height: 300px;
    position: absolute;
    z-index: 1;
    -webkit-transform: scale(0);
    transform: scale(0);
    .shape {
      fill: none;
      stroke: none;
      stroke-width: 3px;
      stroke-linecap: round;
      stroke-linejoin: round;
      -webkit-transform-origin: 50% 20%;
      transform-origin: 50% 20%;
    }
  }
  .wrapper input:checked ~ svg {
    -webkit-animation: pang-animation 1.2s ease-out forwards;
    animation: pang-animation 1.2s ease-out forwards;
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(1) {
    -webkit-transform: translate(-17px, 30%) rotate(40deg);
    transform: translate(-17px, 30%) rotate(40deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(2) {
    -webkit-transform: translate(15px, 30%) rotate(80deg);
    transform: translate(15px, 30%) rotate(80deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(3) {
    -webkit-transform: translate(11px, 30%) rotate(120deg);
    transform: translate(11px, 30%) rotate(120deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(4) {
    -webkit-transform: translate(20px, 30%) rotate(160deg);
    transform: translate(20px, 30%) rotate(160deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(5) {
    -webkit-transform: translate(-20px, 30%) rotate(200deg);
    transform: translate(-20px, 30%) rotate(200deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(6) {
    -webkit-transform: translate(10px, 30%) rotate(240deg);
    transform: translate(10px, 30%) rotate(240deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(7) {
    -webkit-transform: translate(3px, 30%) rotate(280deg);
    transform: translate(3px, 30%) rotate(280deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(8) {
    -webkit-transform: translate(0px, 30%) rotate(320deg);
    transform: translate(0px, 30%) rotate(320deg);
  }
  .wrapper input:checked ~ svg .shape:nth-of-type(9) {
    -webkit-transform: translate(25px, 30%) rotate(360deg);
    transform: translate(25px, 30%) rotate(360deg);
  }
  .wrapper input:checked ~ .btn {
    -webkit-animation: plus-animation 0.5s ease-out forwards;
    animation: plus-animation 0.5s ease-out forwards;
  }
  .wrapper input:checked ~ .tooltip {
    width: 190px;
    height: 70px;
    -webkit-animation: stretch-animation 1s ease-out forwards 0.15s;
    animation: stretch-animation 1s ease-out forwards 0.15s;
    top: -90px;
    opacity: 1;
  }
  @-webkit-keyframes pang-animation {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: 0;
    }
  }
  @keyframes pang-animation {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
      opacity: 0;
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: 0;
    }
  }
  @-webkit-keyframes plus-animation {
    0% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
    }
    20% {
      -webkit-transform: rotate(60deg) scale(0.93);
      transform: rotate(60deg) scale(0.93);
    }
    55% {
      -webkit-transform: rotate(35deg) scale(0.97);
      transform: rotate(35deg) scale(0.97);
    }
    80% {
      -webkit-transform: rotate(48deg) scale(0.94);
      transform: rotate(48deg) scale(0.94);
    }
    100% {
      -webkit-transform: rotate(45deg) scale(0.95);
      transform: rotate(45deg) scale(0.95);
    }
  }
  @keyframes plus-animation {
    0% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
    }
    20% {
      -webkit-transform: rotate(60deg) scale(0.93);
      transform: rotate(60deg) scale(0.93);
    }
    55% {
      -webkit-transform: rotate(35deg) scale(0.97);
      transform: rotate(35deg) scale(0.97);
    }
    80% {
      -webkit-transform: rotate(48deg) scale(0.94);
      transform: rotate(48deg) scale(0.94);
    }
    100% {
      -webkit-transform: rotate(45deg) scale(0.95);
      transform: rotate(45deg) scale(0.95);
    }
  }
  @-webkit-keyframes plus-animation-reverse {
    0% {
      -webkit-transform: rotate(45deg) scale(0.95);
      transform: rotate(45deg) scale(0.95);
    }
    20% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    55% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    80% {
      -webkit-transform: rotate(-3deg);
      transform: rotate(-3deg);
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
    }
  }
  @keyframes plus-animation-reverse {
    0% {
      -webkit-transform: rotate(45deg) scale(0.95);
      transform: rotate(45deg) scale(0.95);
    }
    20% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    55% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    80% {
      -webkit-transform: rotate(-3deg);
      transform: rotate(-3deg);
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
    }
  }
  @-webkit-keyframes stretch-animation {
    0% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    10% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }
    30% {
      -webkit-transform: scale(0.9, 1.1);
      transform: scale(0.9, 1.1);
    }
    50% {
      -webkit-transform: scale(1.05, 0.95);
      transform: scale(1.05, 0.95);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
  @keyframes stretch-animation {
    0% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    10% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }
    30% {
      -webkit-transform: scale(0.9, 1.1);
      transform: scale(0.9, 1.1);
    }
    50% {
      -webkit-transform: scale(1.05, 0.95);
      transform: scale(1.05, 0.95);
    }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }
}
</style>