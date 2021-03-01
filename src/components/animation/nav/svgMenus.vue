<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="nav_menu flex-box">
      <nav class="nav">
        <ul class="svg-menu-ul">
          <li>
            <a href="#" class="active">
              <svg>
                <use xlink:href="#events"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="#inbox"></use>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg>
                <use xlink:href="#profile"></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <button class="menu-btn">
        <span></span>
        <span></span>
        <div class="ring"></div>
      </button>

      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol xmlns="http://www.w3.org/2000/svg" id="events" viewBox="0 0 100 100">
          <path d="M84.027,93H15.973C11.028,93,7,88.976,7,84.027V23.143c0-4.948,4.028-8.976,8.976-8.976h68.048
		c4.948,0,8.976,4.028,8.976,8.976v60.885C93,88.976,88.976,93,84.027,93z M15.976,21.333c-0.997,0-1.809,0.814-1.809,1.809v60.885
		c0,0.997,0.809,1.806,1.806,1.806h68.055c0.997,0,1.806-0.809,1.806-1.806V23.143c0-0.997-0.814-1.809-1.809-1.809H15.976V21.333z
		 M89.417,35.667H10.583C8.605,35.667,7,34.062,7,32.084c0-1.979,1.605-3.584,3.583-3.584h78.833c1.982,0,3.584,1.605,3.584,3.583
		S91.398,35.667,89.417,35.667z M24.917,24.917c-1.978,0-3.583-1.605-3.583-3.583v-10.75c0-1.978,1.605-3.583,3.583-3.583
		S28.5,8.605,28.5,10.583v10.75C28.5,23.311,26.895,24.917,24.917,24.917z M75.083,24.917c-1.981,0-3.583-1.605-3.583-3.583v-10.75
		C71.5,8.605,73.102,7,75.083,7c1.981,0,3.583,1.605,3.583,3.583v10.75C78.667,23.311,77.065,24.917,75.083,24.917z"></path>
          <circle cx="28.5" cy="75.083" r="3.583"></circle>
          <circle cx="28.5" cy="60.75" r="3.583"></circle>
          <circle cx="39.25" cy="75.083" r="3.583"></circle>
          <circle cx="39.25" cy="60.75" r="3.583"></circle>
          <circle cx="39.25" cy="46.417" r="3.583"></circle>
          <circle cx="60.75" cy="75.083" r="3.583"></circle>
          <circle cx="60.75" cy="60.75" r="3.583"></circle>
          <circle cx="60.75" cy="46.417" r="3.583"></circle>
          <circle cx="71.5" cy="60.75" r="3.583"></circle>
          <circle cx="71.5" cy="46.417" r="3.583"></circle>
          <circle cx="50" cy="75.083" r="3.583"></circle>
          <circle cx="50" cy="60.75" r="3.583"></circle>
          <circle cx="50" cy="46.417" r="3.583"></circle>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="inbox">
          <path d="M9.28,38.83l-0.083,0.156c-0.055,0.125-0.101,0.252-0.135,0.384c0,0,0,0.083,0,0.135C9.022,39.685,9.001,39.87,9,40.055
		v43.617c0.005,4.857,3.929,8.799,8.786,8.827h64.387c4.873-0.006,8.821-3.955,8.827-8.827V40.055
		c-0.001-0.185-0.022-0.37-0.062-0.55c0,0,0-0.093,0-0.135c-0.035-0.132-0.08-0.26-0.135-0.384L90.72,38.83
		c-0.055-0.105-0.117-0.206-0.187-0.301l-0.135-0.156c-0.075-0.085-0.154-0.164-0.239-0.239l-0.073-0.073l-10.125-8.37V17.582
		c0-1.434-1.162-2.596-2.596-2.596H62.161l-6.553-5.463c-3.264-2.697-7.983-2.697-11.247,0l-6.553,5.421H22.625
		c-1.434,0-2.596,1.162-2.596,2.596v12.14l-10.125,8.37l-0.073,0.073c-0.085,0.075-0.164,0.154-0.239,0.239l-0.125,0.156
		C9.398,38.618,9.335,38.722,9.28,38.83z M82.173,87.307H17.786c-2.007,0-3.635-1.627-3.635-3.635V45.57l30.2,24.924
		c3.265,2.693,7.982,2.693,11.247,0l30.2-24.924v38.103C85.797,85.675,84.176,87.302,82.173,87.307z M84.333,40.055L79.93,43.69
		v-7.27L84.333,40.055z M47.663,13.573c1.344-1.111,3.288-1.111,4.632,0l1.714,1.412H45.95L47.663,13.573z M74.737,20.178v27.77
		L52.295,66.537c-1.344,1.111-3.288,1.111-4.632,0L25.221,47.948v-27.77C25.221,20.178,74.737,20.178,74.737,20.178z M20.029,36.42
		v7.27l-4.393-3.635L20.029,36.42z"></path>
          <path d="M39.355,36.639h21.289c1.434,0,2.596-1.162,2.596-2.596s-1.162-2.596-2.596-2.596H39.355c-1.434,0-2.596,1.162-2.596,2.596S37.921,36.639,39.355,36.639z"></path>
          <path d="M39.355,45.985h21.289c1.434,0,2.596-1.162,2.596-2.596s-1.162-2.596-2.596-2.596H39.355c-1.434,0-2.596,1.162-2.596,2.596S37.921,45.985,39.355,45.985z"></path>
          <path d="M39.355,55.332h21.289c1.434,0,2.596-1.162,2.596-2.596s-1.162-2.596-2.596-2.596H39.355c-1.434,0-2.596,1.162-2.596,2.596S37.921,55.332,39.355,55.332z"></path>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="profile">
          <path d="M50,7C26.243,7,7,26.243,7,50s19.243,43,43,43s43-19.243,43-43S73.757,7,50,7z M30.865,81.175
        C31.403,70.855,40.11,61.932,50,61.932s18.49,8.815,19.135,19.243C63.545,84.615,56.988,86.55,50,86.55
        S36.455,84.615,30.865,81.175z M50,51.612c-4.622,0-8.385-3.763-8.385-8.385S45.378,34.95,50,34.95s8.385,3.763,8.385,8.385
        S54.622,51.612,50,51.612z M75.048,76.66c-2.042-9.568-9.245-17.522-18.275-20.21c4.73-2.472,8.063-7.418,8.063-13.115
        C64.835,35.165,58.17,28.5,50,28.5s-14.835,6.665-14.835,14.835c0,5.697,3.225,10.642,8.063,13.115
        c-9.03,2.688-16.233,10.535-18.275,20.21C17.858,69.995,13.45,60.535,13.45,50c0-20.103,16.447-36.55,36.55-36.55
        S86.55,29.897,86.55,50C86.55,60.535,82.143,69.995,75.048,76.66z"></path>
        </symbol>
      </svg>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
import { TweenMax, TimelineMax, Power1, Back, Expo } from "gsap"; // gsap是一个js动画框架
export default {
  props: {
    title: {
      default: "基于GSAP的图标按钮菜单动效",
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
  mounted() {
    this.initMenus();
  },
  methods: {
    initMenus() {
      const nav = document.querySelector("nav"),
        btn = document.querySelector(".menu-btn"),
        icons = document.querySelectorAll("use"),
        btnCircle = document.querySelector(".ring");

      TweenMax.set(icons, { y: 5, opacity: 0,});

      TweenMax.set(nav, {
        opacity: 0,
        scaleY: 0,
        scaleX: 0,
        transformOrigin: "center center",
      });

      var btnTl = new TimelineMax({ paused: true });
      btnTl.to(btn, 0.45,{ rotation: 15, scale: 0.85, ease: Power1.easeOut,},"in")
        .to( btnCircle, 0.4,{ scale: 1,},"in")
        .to( btnCircle, 0.2,{ scale: 0,},"out")
        .to( btn, 0.3,{ rotation: 45, scale: 1, ease: Back.easeOut.config(4),},"out")
        .to(btn, 0.25, { rotation: 50,})
        .to(btn, 0.25, { rotation: 45,});

      var navTl = new TimelineMax({ paused: true });

      navTl.to(nav, 0.3, { y: 0, opacity: 1, visibility: "visible", scaleY: 1, scaleX: 1.02, ease: Expo.easeIn,})
        .to(nav, 0.3, { scaleX: 1, ease: Power1.easeOut,})
        .to(nav, 0.25, { scaleX: 1.015, ease: Power1.easeOut,})
        .to(nav, 0.25, { scaleX: 1,ease: Power1.easeOut,});

      navTl.timeScale(0.9);

      var iconsTl = new TimelineMax({ paused: true,
        onComplete: () => {
          TweenMax.set(icons, { clearProps: "all" });
        },
      });

      iconsTl.staggerFromTo(icons, 0.3, {y: 5,opacity: 0,},{y: -2,opacity: 1},0.05).to(icons, 0.5, {y: 0,ease: Back.easeOut.config(4)});

      var masterTl = new TimelineMax({ paused: true });
      masterTl.add(btnTl.play(), 0).add(navTl.play(), 0.3).add(iconsTl.play(), 0.55);

      // Event Listener for button
      btn.addEventListener("click", () => {
        masterTl.play();
        if (!masterTl.isActive() && masterTl.progress(1)) {
          // Out animation
          const outTl = new TimelineMax({
            onComplete: () => {
              masterTl.pause();
              masterTl.progress(0);
            },
          });

          outTl.to( nav, 0.3, { y: 110, scale: 0, opacity: 0 },"out")
            .to( btn, 0.3, { rotation: -10 }, "out")
            .to( btn, 0.3, { rotation: 0 }, "out+=0.3");
        }
      });

      // Set active nav item
      let links = document.querySelectorAll("a");

      const clickHandler = (el) => {
        links.forEach((link) => {
          link.classList.remove("active");
        });
        el.classList.add("active");
      };
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          clickHandler(e.currentTarget);
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
  font-family: sans-serif;
  flex-direction: column;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(330deg, #a63cf0 40%, #7971ff 100%);
  overflow: hidden;
  .nav {
    position: relative;
    margin-bottom: 20px;
    opacity: 0;
    -webkit-transform: translateY(110px);
    transform: translateY(110px);
    &:before {
      position: absolute;
      content: "";
      bottom: -30px;
      z-index: 1;
      left: calc(50% - 20px);
      border-width: 20px 20px 20px 20px;
      border-style: solid;
      border-color: white transparent transparent transparent;
    }
  }
  ul.svg-menu-ul {
    list-style-type: none;
    background: white;
    padding: 10px 20px;
    display: block;
    border-radius: 60px;
    li {
      display: inline-block;
      margin: 0px 15px;
      a {
        text-decoration: none;
        color: #9e61f3;
        display: inline-block;
        text-align: center;
      }
      svg {
        width: 32px;
        height: 32px;
        display: block;
        margin: 8px auto;
        fill: #e6ddfd;
        transition: 0.2s ease-in all;
      }
      .active {
        svg {
          fill: #9e61f3;
        }
      }
    }
  }
  .menu-btn {
    position: relative;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background: white;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(137, 48, 239, 0.3);
    .ring {
      position: absolute;
      top: -5px;
      left: -5px;
      width: 90px;
      height: 90px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
    &:focus {
      outline: none;
    }
    & > span {
      height: 4px;
      border-radius: 8px;
      background: #9e61f3;
      z-index: 1;
      width: 30px;
      -webkit-transform: rotate(90deg);
      transform: rotate(90deg);
      position: absolute;
      &:nth-child(2) {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }
    }
  }
}
</style>