<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="noselect-box flex-box">
      <button class="noselect">
        <span class="text">Delete</span>
        <span class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "SVG删除按钮交互",
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
.noselect-box {
  height: 100%;
  min-height: 350px;
  align-items: center;
  justify-content: center;
  .noselect {
    position: relative;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: red;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    background: #e62222;
    .text {
      transform: translateX(35px);
      color: white;
      font-weight: bold;
    }
    .icon {
      position: absolute;
      border-left: 1px solid #c41b1b;
      transform: translateX(110px);
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 15px;
      fill: #eee;
    }
    &:hover {
      background: #ff3636;
      .text {
        color: transparent;
      }
      .icon {
        width: 150px;
        border-left: none;
        transform: translateX(0);
      }
    }
    &:focus {
      outline: none;
    }
  }
  button,
  button span {
    transition: 200ms;
  }
}
</style>