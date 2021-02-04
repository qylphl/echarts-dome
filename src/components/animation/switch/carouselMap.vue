<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="pie-content">
      <ul class="pic" :style="{'width': 400 * (bgColor.length + 1) + 'px'}">
        <li v-for="(list, index) in bgColor" :key="index" :style="{'background-color': list}">{{ index + 1 }}</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "轮播图动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      bgColor: ["#ff8dcd", "#77ffae", '#b594ff'],
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
.pie-content {
  margin: 50px auto;
  width: 500px;
  height: 250px;
  position: relative;
  overflow: hidden;
  .pic {
    position: absolute;
    left: 0;
    animation-name: aa;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    li {
      float: left;
      width: 500px;
      height: 250px;
      line-height: 250px;
      list-style: none;
      font-size: 34px;
      color: #fff;
      text-align: center;
      background-color: #ff8dcd;
    }
  }
}

@keyframes aa {
  0%,30%{ left: 0 }
  35%,65%{ left: -500px }
  70%,90%{ left: -1000px }
  95%,100%{ left: -1500px }
}
</style>
