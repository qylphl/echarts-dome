<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="nav_menu flex-box">
      <div class="nav-box" id="gsapNavBox">
        <ul>
          <li 
            v-for="(msg, index) in menuList" 
            :key="index" 
            :class="{'choose-menu': chooseType == index}"
            @click="chooseType = index"
          >{{msg}}</li>
          <div class="focus-el el--1"></div>
          <div class="focus-el el--2"></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { gsap } from "gsap"; // gsap是一个js动画框架
export default {
  props: {
    title: {
      default: "基于GSAP的文本导航滑块动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      menuList: ['音乐','电影','Apps'],
      chooseType: 0,
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.initNav();
  },
  methods: {
    initNav() {
      const liContainer = document.querySelector("#gsapNavBox ul");
      const liEls = [...document.querySelectorAll("#gsapNavBox ul li")];
      const slideEl_1 = document.querySelector(".focus-el.el--1");
      const slideEl_2 = document.querySelector(".focus-el.el--2");

      gsap.defaults({
        ease: "ease.inOut",
      });
      let tl = gsap.timeline();

      let liRect = liContainer.getBoundingClientRect();
      let slideEl_1_DefaultWidth = slideEl_1.getBoundingClientRect().width;
      let slideEl_1_DefaultLeft = slideEl_1.getBoundingClientRect().left;
      let slideEl_2_DefaultLeft = slideEl_2.getBoundingClientRect().left;

      let startPosIndex = 1;
      let reachedEnd = false;
      let activeIndex = startPosIndex;

      let animationDuration = 0.2;

      liEls.forEach((el, index) => {
        let elRect = el.getBoundingClientRect();

        el.addEventListener("mousedown", () => {
          if (reachedEnd && index + 1 == startPosIndex) {
            tl.to(slideEl_1, animationDuration, { left: `${liRect.width}px` });
            tl.to(slideEl_2, animationDuration, { left: `${elRect.left - liRect.left}px` }, `-=${animationDuration}`);
            tl.set(slideEl_1, { left: `${slideEl_1_DefaultLeft - liRect.left}px` }, `+=${animationDuration}`);
            tl.set(slideEl_2, { left: `${slideEl_2_DefaultLeft - liRect.left}px` }, `+=${animationDuration}`);
          }

          let timesWidth = index + 1 - activeIndex + 1 <= 0 ? 1 : index + 1 - activeIndex + 1;
          activeIndex = index + 1;

          tl.to(slideEl_1, animationDuration, { width: `${timesWidth * slideEl_1_DefaultWidth}px`});
          if (index + 1 != startPosIndex || reachedEnd == false) {
            tl.to(slideEl_1, animationDuration, { left: `${elRect.left - liRect.left}px`, width: `${slideEl_1_DefaultWidth}px`});
          }

          if (index + 1 == liEls.length) {
            reachedEnd = true;
          } else {
            reachedEnd = false;
          }
        });
      });
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.nav_menu {
  width: 100%;
  height: calc(500px - 64px);
  justify-content: center;
  align-items: center;
  // background-color: #1355f6;
  #gsapNavBox {
    width: 350px;
    height: 350px;
    display: grid;
    place-items: center;
    ul {
      position: relative;
      width: 350px;
      height: 50px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border-radius: 35px;
      background: rgba(255, 255, 255, 0.65);
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.08), 0 100px 80px rgba(0, 0, 0, 0.03);
      overflow: hidden;
      .choose-menu {
        color: #fff
      }
      li {
        list-style: none;
        display: grid;
        place-items: center;
        font-family: "montserrat";
        // color: #1355f6;
        color: #333;
        z-index: 10;
        cursor: pointer;
        transition: color .2s ease-in-out;
      }
      .focus-el {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% / 3);
        height: 100%;
        border-radius: 35px;
        // background: #fff;
        background-color: #2094FB;
        box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.015), 0 100px 80px rgba(0, 0, 0, 0.03);
      }
      .el--2 {
        left: calc(-100% / 3);
      }
    }
    .support {
      position: absolute;
      right: 10px;
      bottom: 10px;
      padding: 10px;
      display: flex;
      a {
        margin: 0 10px;
        color: #e1f2fb;
        font-size: 1.8rem;
        backface-visibility: hidden;
        transition: all 350ms cubic-bezier(0.38, -0.12, 0.24, 1.91);
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>