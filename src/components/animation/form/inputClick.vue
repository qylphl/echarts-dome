<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <form>
      <input required="" type="text" />
      <label alt="请输入用户名" placeholder="用户名"></label>
      <input required="" type="password" />
      <label alt="请输入密码" placeholder="密码"></label>
      <input required="" type="password" />
      <label alt="请确认密码" placeholder="确认密码"></label>
    </form>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "输入框点击动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      listNum: 12,
      listNumTwo: 4,
      isActive: 0,
      isChoose: false,
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
/* input样式 */
form {
  width: 80%;
  margin: 80px auto;
  input {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 42px;
    line-height: 42px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 30px;
    font-size: 16px;
    background: #fff;
    resize: none;
    outline: none;
    &:focus {
      border-color: #00bafa;
    }
  }
  /* label样式 */
  input + label[placeholder] {
    display: block;
    pointer-events: none;
    line-height: 42px;
    margin-top: -42px;
    margin-bottom: 40px;
    font-size: 16px;
    &:before {
      content: attr(placeholder);
      display: inline-block;
      margin: 0 20px;
      color: #898989;
      white-space: nowrap;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
      background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#fff),
        to(#fff)
      );
      background-image: -webkit-linear-gradient(top, #fff, #fff);
      background-image: linear-gradient(to bottom, #fff, #fff);
      -webkit-background-size: 100% 5px;
      background-size: 100% 5px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  input:focus + label[placeholder]:before {
    color: #00bafa;
  }

  input:focus + label[placeholder]:before,
  input:valid + label[placeholder]:before {
    -webkit-transition-duration: 0.2s;
    transition-duration: 0.2s;
    -webkit-transform: translate(0, -1.5em) scale(0.9, 0.9);
    -ms-transform: translate(0, -1.5em) scale(0.9, 0.9);
    transform: translate(0, -1.5em) scale(0.9, 0.9);
    position: relative;
    top: 3px;
  }

  input:invalid + label[placeholder][alt]:before {
    content: attr(alt);
  }
}
</style>
