<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="container-box">
      <div class="container">
        <form>
          <p>欢迎光临</p>
          <input type="email" placeholder="邮箱" value="admin"/><br/>
          <input type="password" placeholder="密码"/><br/>
          <input type="button" value="登录"/><br/>
          <a href="#">忘记密码?</a>
        </form>
        <div class="drops">
          <div :class="`drop drop-${v}`" v-for="v in 5" :key="v"></div>
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
      default: "登录框特效",
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
.container-box {
  height: 650px;
  position: relative;
  background: linear-gradient(45deg, #fc466b, #3f5efb);
  font-family: "Montserrat", sans-serif;
  .container {
    position: absolute;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    form {
      background: rgba(255, 255, 255, 0.3);
      padding: 3em;
      height: 320px;
      border-radius: 20px;
      border-left: 1px solid rgba(255, 255, 255, 0.3);
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
      text-align: center;
      position: relative;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      p {
        font-weight: 500;
        color: #fff;
        opacity: 0.7;
        font-size: 1.4rem;
        margin-top: 0;
        margin-bottom: 60px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      }
      input {
        background: transparent;
        width: 200px;
        padding: 1em;
        margin-bottom: 2em;
        border: none;
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 5000px;
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
        box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
        color: #fff;
        font-family: Montserrat, sans-serif;
        font-weight: 500;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        &:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
        }
      }
      input[type="email"],
      input[type="password"] {
        &:focus {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
        }
      }
      input[type="button"] {
        margin-top: 10px;
        width: 150px;
        font-size: 1rem;
        &:hover {
          cursor: pointer;
        }
        &:active {
          background: rgba(255, 255, 255, 0.2);
        }
      }
      a {
        text-decoration: none;
        color: #ddd;
        font-size: 12px;
        &:hover {
          text-shadow: 2px 2px 6px #00000040;
        }
        &:active {
          text-shadow: none;
        }
      }
      &:hover {
        margin: 4px;
      }
    }
    .drops {
      .drop {
        background: rgba(255, 255, 255, 0.3);
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        border-radius: 10px;
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
        position: absolute;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }
      .drop-1 {
        height: 80px;
        width: 80px;
        top: -20px;
        left: -40px;
        z-index: -1;
      }
      .drop-2 {
        height: 80px;
        width: 80px;
        bottom: -30px;
        right: -10px;
      }
      .drop-3 {
        height: 100px;
        width: 100px;
        bottom: 120px;
        right: -50px;
        z-index: -1;
      }
      .drop-4 {
        height: 120px;
        width: 120px;
        top: -60px;
        right: -60px;
      }
      .drop-5 {
        height: 60px;
        width: 60px;
        bottom: 170px;
        left: 90px;
        z-index: -1;
      }
    }
  }
}
::-webkit-input-placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
::-moz-placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
:-ms-input-placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
::-ms-input-placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
a,
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
</style>