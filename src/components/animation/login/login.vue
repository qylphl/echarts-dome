<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="login-content-box flex-box">
      <div id="particles-js" class="flex-box">
        <canvas
          class="particles-js-canvas-el"
          width="472"
          height="625"
        ></canvas>
      </div>
      <div class="apTitle">大数据智慧运营管理中心</div>
      <div class="logcon">
        <input type="text" placeholder="账号" />
        <input type="password" placeholder="密码" />
        <button type="button">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "登录背景动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      setList: {    // 使用particles.js，canvas配置项
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover",
        },
      },
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    // 粒子动效使用particles.js,使用npm install --save particles.js安装
    particlesJS('particles-js',this.setList);
  },
  methods: {
    changeImg() {
      let pic = document.getElementById("picture");
      console.log(pic.src);
      if (pic.getAttribute("src", 2) == "img/check.png") {
        pic.src = "img/checked.png";
      } else {
        pic.src = "img/check.png";
      }
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.login-content-box {
//   position: fixed;
//   top: 0px;
//   left: 0px;
  position: relative;
  height: 800px;
  width: 100%;
  /*Fallback if gradeints don't work */
  background: #141e6e;
  /*Linear gradient... */
  background: radial-gradient(at center, #0075c3, #000b61);
  #particles-js {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  canvas {
    display: block;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
  }
  .apTitle {
    font-size: 40px;
    color: #fff;
    position: absolute;
    top: 32%;
    width: 100%;
    text-align: center;
  }
  .logcon {
    position: absolute;
    width: 100%;
    top: 47%;
    text-align: center;
    input {
      padding: 10px 15px;
      border-radius: 3px;
      border: none;
      margin-right: 10px;
      width: 220px;
    }
    button {
      padding: 7px 20px 10px 20px;
      border: none;
      background: #fff;
      border-radius: 3px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
