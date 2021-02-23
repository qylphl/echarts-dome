<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox-content flex-box">
      <div class="loader-content-box">
        <div class="loader loader-1">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-2">
          <svg
            class="loader-star"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <polygon
              points="29.8 0.3 22.8 21.8 0 21.8 18.5 35.2 11.5 56.7 29.8 43.4 48.2 56.7 41.2 35.1 59.6 21.8 36.8 21.8 "
              fill="#18ffff"
            />
          </svg>
          <div class="loader-circles"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-3">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-4"></div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-5">
          <div class="loader-pacman"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-6">
          <div class="loader-inner"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-7">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-9">
          <svg
            class="loader-star star1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            />
          </svg>
          <svg
            class="loader-star star3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#c6ff00"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            />
          </svg>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-12">
          <svg
            class="loader-star star1"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star4"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star5"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
          <svg
            class="loader-star star6"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="35px"
            height="35px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
            />
          </svg>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-13">
          <div class="css-heart heart1"></div>
          <div class="css-heart heart2"></div>
          <div class="css-heart heart3"></div>
          <div class="css-heart heart4"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-14">
          <svg
            class="loader-star star-small"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#01579b"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            ></polygon>
          </svg>
          <svg
            class="loader-star star-big"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="23.172px"
            height="23.346px"
            viewBox="0 0 23.172 23.346"
            xml:space="preserve"
          >
            <polygon
              fill="#40c4ff"
              points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
            ></polygon>
          </svg>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-18">
          <div class="css-star star1"></div>
          <div class="css-star star2"></div>
          <div class="css-star star3"></div>
          <div class="css-star star4"></div>
          <div class="css-star star5"></div>
          <div class="css-star star6"></div>
          <div class="css-star star7"></div>
          <div class="css-star star8"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-17">
          <div class="css-square square1"></div>
          <div class="css-square square2"></div>
          <div class="css-square square3"></div>
          <div class="css-square square4"></div>
          <div class="css-square square5"></div>
          <div class="css-square square6"></div>
          <div class="css-square square7"></div>
          <div class="css-square square8"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-20">
          <div class="css-diamond"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loader loader-21">
          <div class="css-times times1"></div>
          <div class="css-times times2"></div>
          <div class="css-times times3"></div>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="heart-loading flex-ct-x">
          <ul style="--line-count: 9">
            <li
              v-for="v in 9"
              :key="v"
              :class="`line-${v}`"
              :style="`--line-index: ${v}`"
            ></li>
          </ul>
        </div>
      </div>
      <div class="loader-content-box">
        <ul class="initial-keyframe">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="loader-content-box">
        <ul class="reflect-loading">
          <li v-for="v in 10" :key="'reflect' + v"></li>
        </ul>
      </div>
      <div class="loader-content-box">
        <div id="container">
          <div class="stick" v-for="v in 6" :key="'stick' + v"></div>
          <h1>Loading...</h1>
        </div>
      </div>
      <div class="loader-content-box">
        <div class="loading-indicator">加载中<span></span></div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "各种风格加载动效",
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
@import "style/loading/styleLoading.scss";
.loadbox-content {
  padding: 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  .loader-content-box {
    width: 19%;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 5px;
    background-color: rgba(2, 13, 70, 0.9);
    // 心形加载动效
    .heart-loading {
      width: 100%;
      height: 100%;
      ul {
        display: flex;
        justify-content: space-between;
        width: 150px;
        height: 10px;
        margin: 80px auto 0;
      }
      li {
        --Θ: calc(var(--line-index) / var(--line-count) * 0.5turn);
        --time: calc((var(--line-index) - 1) * 40ms);
        border-radius: 5px;
        width: 10px;
        height: 10px;
        background-color: #3c9;
        filter: hue-rotate(var(--Θ));
        animation-duration: 1s;
        animation-delay: var(--time);
        animation-iteration-count: infinite;
      }
      .line-1,
      .line-9 {
        animation-name: line-move-1;
      }
      .line-2,
      .line-8 {
        animation-name: line-move-2;
      }
      .line-3,
      .line-7 {
        animation-name: line-move-3;
      }
      .line-4,
      .line-6 {
        animation-name: line-move-4;
      }
      .line-5 {
        animation-name: line-move-5;
      }
      @keyframes line-move-1 {
        0%,
        10%,
        90%,
        100% {
          height: 10px;
        }

        45%,
        55% {
          height: 30px;
          transform: translate3d(0, -15px, 0);
        }
      }
      @keyframes line-move-2 {
        0%,
        10%,
        90%,
        100% {
          height: 10px;
        }

        45%,
        55% {
          height: 60px;
          transform: translate3d(0, -30px, 0);
        }
      }
      @keyframes line-move-3 {
        0%,
        10%,
        90%,
        100% {
          height: 10px;
        }

        45%,
        55% {
          height: 80px;
          transform: translate3d(0, -40px, 0);
        }
      }
      @keyframes line-move-4 {
        0%,
        10%,
        90%,
        100% {
          height: 10px;
        }

        45%,
        55% {
          height: 90px;
          transform: translate3d(0, -30px, 0);
        }
      }
      @keyframes line-move-5 {
        0%,
        10%,
        90%,
        100% {
          height: 10px;
        }

        45%,
        55% {
          height: 90px;
          transform: translate3d(0, -20px, 0);
        }
      }
    }
    // 三个圆转圈动效
    .initial-keyframe {
      position: relative;
      width: 30px;
      height: 30px;
      li {
        position: absolute;
        border-radius: 100%;
        width: 100%;
        height: 100%;
        background-color: #3c9;
        transform: rotate(0) translate(-30px, 0);
        animation: rotate 3s linear infinite;
        &:nth-child(2) {
          animation-delay: -1s;
        }
        &:nth-child(3) {
          animation-delay: -2s;
        }
      }
      @keyframes rotate {
        to {
          transform: rotate(1turn) translate(-30px, 0);
        }
      }
    }
    // 倒影加载动效
    .reflect-loading {
      $count: 10;
      $color: #66f #09f;
      display: flex;
      height: 60px;
      margin-top: -20px;
      -webkit-box-reflect: below 0
        linear-gradient(rgba(#fff, 0), rgba(#fff, 0.7));
      li {
        width: 15px;
        @for $i from 0 to $count {
          $args: append($color, $i * 100% / ($count - 1));
          &:nth-child(#{$i + 1}) {
            background-color: mix($args...);
            animation: rotate2 3s cubic-bezier(0.81, 0.04, 0.4, 0.7) infinite;
            animation-delay: $i * 50ms;
          }
        }
      }
      @keyframes rotate2 {
        0% {
          transform: rotate(-0.5turn) rotateX(-1turn);
        }
        75%,
        100% {
          transform: none;
        }
      }
    }
    // 曲线加载动效
    #container {
      .stick {
        width: 30px;
        height: 3px;
        background: white;
        display: inline-block;
        margin-left: -3px;
        &:nth-child(n) {
          transform: rotate(30deg);
          animation: fall 2s infinite;
        }
        &:nth-child(2n) {
          transform: rotate(-30deg);
          animation: rise 2s infinite;
        }
      }
      h1 {
        font-family: "Lato";
        color: white;
        text-transform: uppercase;
        font-size: 1em;
        letter-spacing: 1.5px;
        text-align: center;
        width: 155px;
        margin-top: 20px;
        padding-left: 12px;
        animation: fade 2s infinite;
        box-sizing: border-box;
      }
      @keyframes fall {
        50% {
          transform: rotate(-30deg);
        }
      }
      @keyframes rise {
        50% {
          transform: rotate(30deg);
        }
      }
      @keyframes fade {
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    }
    // 文字加载中样式
    .loading-indicator {
      font-size: 18px;
      color: #09ff;
      span {
        display: inline-block;
        overflow: hidden;
        height: 1em;
        line-height: 1;
        vertical-align: -0.25em;
        &::after {
          display: block;
          white-space: pre-wrap;
          content: "...\A..\A.";
          animation: loading 3s infinite step-start both;
        }
      }
      @keyframes loading {
        33% {
          transform: translate3d(0, -2em, 0);
        }
        66% {
          transform: translate3d(0, -1em, 0);
        }
      }
    }
  }
}
</style>
