<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="container-box">
      <div class="container">
        <div class="brand-logo"></div>
        <div class="brand-title">ECHARTS</div>
        <div class="inputs">
          <label>用户名</label>
          <input type="text" placeholder="请输入用户名" />
          <label>密码</label>
          <input type="password" placeholder="大于6个字符" />
          <button type="submit">登录</button>
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
  margin: 0;
  background: #ecf0f3;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  place-items: center;
  overflow: hidden;
  font-family: poppins;
  box-sizing: border-box;
  .container {
    position: relative;
    width: 350px;
    height: 500px;
    border-radius: 20px;
    padding: 40px;
    box-sizing: border-box;
    background: #ecf0f3;
    box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
    .brand-logo {
      height: 100px;
      width: 100px;
      background: url("https://img.icons8.com/color/100/000000/twitter--v2.png");
      // background: url("../../../../src/assets/img/echarts_logo.png") no-repeat center;
      margin: auto;
      border-radius: 50%;
      box-sizing: border-box;
      box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
    }
    .brand-title {
      margin-top: 10px;
      font-weight: 900;
      font-size: 1.8rem;
      color: #1da1f2;
      letter-spacing: 1px;
    }
    .inputs {
      text-align: left;
      margin-top: 30px;
      label,
      input,
      button {
        display: block;
        width: 100%;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
      }
      label {
        margin-bottom: 4px;
        &:nth-of-type(2) {
          margin-top: 12px;
        }
      }
      input {
        background: #ecf0f3;
        padding: 10px;
        padding-left: 20px;
        height: 50px;
        font-size: 14px;
        border-radius: 50px;
        box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;
        &::placeholder {
          color: gray;
        }
      }
      button {
        margin-top: 30px;
        background: #1da1f2;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 16px;
        color: #fff;
        box-shadow: 6px 6px 6px #cbced1, -6px -6px 6px white;
        transition: 0.3s;
        &:active {
          box-shadow: none;
        }
      }
    }
  }
}
</style>