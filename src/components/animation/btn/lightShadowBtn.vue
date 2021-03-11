<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="light-shadow-btn-box flex-box">
      <button class="shiny">CSS button！</button>
      <button class="shinydarken">CSS光影按钮</button>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "光影按钮动效",
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
.light-shadow-btn-box {
  width: 100%;
  height: 100%;
  min-height: calc(500px - 64px);
  align-items: center;
  justify-content: center;
  .shiny,
  .shinydarken {
    display: block;
    position: relative;
    top: 0;
    border: 0;
    cursor: pointer;
    background: #9ccc65;
    color: white;
    border-radius: 3px;
    line-height: 1;
    font-size: 20px;
    padding: 15px 25px;
    outline: 0;
    margin: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }
  .shiny {
    background: #007eaf;
    background: linear-gradient(-45deg, #2284fb 50%, #0a0e92 60%, #2e59d4 70%);
    background-size: 600% 100%;
    -webkit-animation: shine 20s infinite;
    animation: shine 20s infinite;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  .shinydarken {
    background: #9ccc65;
    background: linear-gradient(-45deg, #9ccc65 50%, #699833 60%, #9ccc65 70%);
    background-size: 600% 100%;
    -webkit-animation: shine 20s infinite;
    animation: shine 20s infinite;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
  }
  button {
    &:active {
      top: 2px;
    }
  }

  @-webkit-keyframes shine {
    0% {
      background-position-x: 400%;
    }
    50% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: -400%;
    }
  }

  @keyframes shine {
    0% {
      background-position-x: 400%;
    }
    50% {
      background-position-x: 0%;
    }
    100% {
      background-position-x: -400%;
    }
  }
}
</style>