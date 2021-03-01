<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div id="boxes">
      <div
        v-for="(item, index) in colorList"
        :key="index"
        :style="{ '--color': item }"
      ></div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "果冻按钮动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      colorList: [
        "#f44336",
        "#e91e63",
        "#9c27b0",
        "#2196f3",
        "#4caf50",
        "#ff9800",
      ],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var boxes = document.querySelectorAll("#boxes > div");
      [].forEach.call(boxes, (box) => {
        box.addEventListener("mousemove", (e) => {
          document.body.style.setProperty(
            "--bg-color",
            box.style.getPropertyValue("--color")
          );

          var size = parseInt(getComputedStyle(box).width);

          // scaling
          var x = size * 0.3 * 0.7 + 0.7 * e.offsetX;
          var y = size * 0.3 * 0.7 + 0.7 * e.offsetY;

          box.style.setProperty("--x", x);
          box.style.setProperty("--y", y);
          box.style.setProperty("--size", size);
        });
      });
    },
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
#boxes {
  counter-reset: number;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 100px;
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    counter-increment: number;
    width: 5vw;
    height: 5vw;
    min-width: 5em;
    min-height: 5em;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    background: var(--color, #aaa);
    border: 0 solid transparent;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 50%;
    opacity: 0.7;
    --dx: calc(var(--size) - var(--x));
    --dy: calc(var(--size) - var(--y));
    &:first-child {
      --x: 84;
      --y: 75;
      --size: 128;
    }
    &:first-child,
    &:hover {
      opacity: 1;
      cursor: pointer;
      border: calc(2px + 0.85vw) solid rgba(255, 255, 255, 0.5);
      -webkit-transition: 0.5s background-color ease, 0.2s border ease;
      transition: 0.5s background-color ease, 0.2s border ease;
      border-radius: calc(var(--x) / var(--size) * 100%)
        calc(var(--dx) / var(--size) * 100%)
        calc(var(--dx) / var(--size) * 100%) calc(var(--x) / var(--size) * 100%) /
        calc(var(--y) / var(--size) * 100%) calc(var(--y) / var(--size) * 100%)
        calc(var(--dy) / var(--size) * 100%)
        calc(var(--dy) / var(--size) * 100%);
    }
  }
}

#boxes div:first-child:after,
#boxes div:after {
  content: counter(number);
  color: rgba(255, 255, 255, 0);
  font-size: calc(1vw + 1.2em);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
  -webkit-transform: translate3d(0, -0.5em, 0);
  transform: translate3d(0, -0.5em, 0);
}

#boxes div:first-child:after,
#boxes div:hover:after {
  color: rgba(255, 255, 255, 0.7);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>