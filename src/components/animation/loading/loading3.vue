<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="loadbox flex-box allload">
      <section v-for="(msg, index) in num" :key="index">
        <span :class="'loader-' + Number(index + 1)">
          {{
            Number(index + 1) >= 109 &&
            Number(index + 1) <= 120 &&
            Number(index + 1) != 118
              ? Number(index + 1) == 113 ||
                Number(index + 1) == 114 ||
                Number(index + 1) == 116 ||
                Number(index + 1) == 117
                ? loadingTextThree
                : Number(index + 1) == 112
                ? loadingTextTwo
                : loadingText
              : ""
          }}
        </span>
      </section>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "其他风格加载动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      num: 126,
      loadingText: "Loading",
      loadingTextTwo: `L \xa0 ading`,
      loadingTextThree: `Load ng`,
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
@import "style/loading/loading3.scss";
</style>