<template>
  <div class="content flex-box">
    <div class="left-box"></div>
    <div class="right-box" :style="{'border-color': themeType==1 ? '#082b7d' : '#b6b6b6'}"></div>
  </div>
</template>

<script>
import pie from "components/pie/pie";
import stereoscopicPie from "components/pie/3dPie";
export default {
  data() {
    return {
      color: ["#328ff6", "#f56e6b", "#c956d7"],
      data: [
        { value: 1438, name: "违纪行为" },
        { value: 109, name: "职务违法犯罪行为" },
        { value: 2865, name: "其他违法犯罪行为" },
      ],
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {},
  components: { pie, stereoscopicPie },
};
</script>

<style lang="scss">
@import "style/charts.scss";
.content {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: visible;
  .left-box {
    flex: 1;
    height: 100%;
    .pie-box {
      width: 30%;
      height: 500px;
      background-color: transparent;
      border-radius: 7px;
      box-shadow: 5px 5px 20px #b3b3b4;
      margin-left: 5%;
      &:first-child {
        margin-left: 0;
      }
    }
  }
  .right-box {
    width: 185px;
    height: 100%;
    border-left: 1px solid transparent;
  }
}
</style>
