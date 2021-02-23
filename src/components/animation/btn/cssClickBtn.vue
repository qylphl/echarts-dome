<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="stereo-box flex-box">
      <button class="stereo-btn">点我</button>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "立体按钮点击动效",
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
.stereo-box {
    width: 100%;
    min-height: 320px;
    align-items: center;
    justify-content: center;
  .stereo-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-image: linear-gradient(#09f, #3c9);
    box-shadow: 0 10px 0 #09f;
    cursor: pointer;
    text-shadow: 0 5px 5px #ccc;
    font-size: 50px;
    color: #fff;
    transition: all 300ms;
    &:active {
      box-shadow: 0 5px 0 #09f;
      transform: translate3d(0, 5px, 0);
    }
  }
}
</style>
