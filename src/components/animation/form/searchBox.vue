<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="search-box">
      <form class="inputbox">
        <input required="required" />
        <button type="reset" class="del"></button>
      </form>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "搜索框动效",
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
.search-box {
  width: 100%;
  height: calc(100% - 64px);
  min-height: 300px;
  position: relative;
  .inputbox {
    height: 55px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    input {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      font-size: 16px;
      padding: 16.5px 0;
      border: 0;
      background: none;
      width: 55px;
      position: absolute;
      top: 0;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      border-radius: 100%;
      -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
        padding 0.2s;
      transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out,
        padding 0.2s;
      -webkit-transition-delay: 0s, 0.4s, 0s;
      transition-delay: 0s, 0.4s, 0s;
      box-shadow: 0 0 0 1px currentColor;
      color: inherit;
      cursor: pointer;
      padding: 16.5px 0;
      padding-right: 50px;
      font-weight: lighter;
      font-family: "Roboto";
      color: #333;
      &:focus,
      &:valid {
        width: 100%;
        -webkit-transition-delay: 0.4s, 0s, 0.4s;
        transition-delay: 0.4s, 0s, 0.4s;
        outline: 0;
        border-radius: 0;
        cursor: text;
        padding-left: 16.5px;
        font-weight: 400;
        & + .del {
          pointer-events: all;
          left: calc(100% - 25px);
          -webkit-transition-delay: 0.4s;
          transition-delay: 0.4s;
          &:focus {
            box-shadow: 0 0 0 1px currentColor;
            height: 37.5px;
            width: 37.5px;
          }
          &:before {
            -webkit-transform: translate(-50%, -50%) rotate(-45deg) scaleY(0.7);
            -ms-transform: translate(-50%, -50%) rotate(-45deg) scaleY(0.7);
            transform: translate(-50%, -50%) rotate(-45deg) scaleY(0.7);
            -webkit-transition-delay: 0s;
            transition-delay: 0s;
          }
          &:after {
            -webkit-transform: translate(-50%, -50%) rotate(45deg) scaleY(0.7);
            -ms-transform: translate(-50%, -50%) rotate(45deg) scaleY(0.7);
            transform: translate(-50%, -50%) rotate(45deg) scaleY(0.7);
            -webkit-transition-delay: 0.2s;
            transition-delay: 0.2s;
          }
        }
      }
    }
    .del {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 50px;
      width: 50px;
      padding: 0;
      background: none;
      border-radius: 100%;
      border: 0;
      pointer-events: none;
      -webkit-transition: left 0.4s ease-in-out;
      transition: left 0.4s ease-in-out;
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
      color: inherit;
      cursor: pointer;
      &:focus {
        outline: none;
      }
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: currentColor;
        width: 1px;
        height: 37.5px;
        -webkit-transform: translate(32.25px, 32.25px) translate(-50%, -50%)
          rotate(-45deg) scaleY(1);
        -ms-transform: translate(32.25px, 32.25px) translate(-50%, -50%)
          rotate(-45deg) scaleY(1);
        transform: translate(32.25px, 32.25px) translate(-50%, -50%)
          rotate(-45deg) scaleY(1);
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        -webkit-transition-delay: 0.6s;
        transition-delay: 0.6s;
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: currentColor;
        width: 1px;
        height: 37.5px;
        -webkit-transform: translate(-50%, -50%) rotate(45deg) scaleY(0);
        -ms-transform: translate(-50%, -50%) rotate(45deg) scaleY(0);
        transform: translate(-50%, -50%) rotate(45deg) scaleY(0);
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        -webkit-transition-delay: 0.4s;
        transition-delay: 0.4s;
      }
    }
  }
}
</style>