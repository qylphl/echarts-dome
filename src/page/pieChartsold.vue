<template>
  <div class="content">
    <!-- 饼图 -->
    <div class="content-box flex-box" v-if="index == 1">
      <!-- 普通饼状图 -->
      <div class="pie-box">
        <pie :data="data" :color="color"></pie>
      </div>
      <!-- 3D饼图 -->
      <div class="pie-box">
        <stereoscopicPie :data="data" :color="color"></stereoscopicPie>
      </div>
      <div class="pie-box hidden"></div>
    </div>
    <!-- 环形图 -->
    <div class="content-box flex-box" v-if="index == 2">
      <!-- 普通环形图 -->
      <div class="pie-box">
        <annularPie :data="data" :color="gradients"></annularPie>
      </div>
      <!-- 带小圆点环形图 -->
      <div class="pie-box">
        <dotAnnularPie :data="data" :color="color"></dotAnnularPie>
      </div>
      <!-- 带内边框环形图 -->
      <div class="pie-box">
        <innerBorderAnnularPie
          :data="data"
          :color="gradients"
        ></innerBorderAnnularPie>
      </div>
      <!-- 3D环形图 -->
      <div class="pie-box">
        <annularStereoscopicPie
          :data="data"
          :color="color"
        ></annularStereoscopicPie>
      </div>
      <!-- 动态环形图 -->
      <div class="pie-box">
        <motionAnnularPie :data="80"></motionAnnularPie>
      </div>
      <div class="pie-box hidden"></div>
    </div>
    <!-- 玫瑰图 -->
    <div class="content-box flex-box" v-if="index == 3">
      <!-- 普通玫瑰饼图 -->
      <div class="pie-box">
        <rosePie :data="data" :color="gradients"></rosePie>
      </div>
      <!-- 普通玫瑰环图 -->
      <div class="pie-box">
        <roseAnnularPie :data="data" :color="color"></roseAnnularPie>
      </div>
      <!-- 鸡冠玫瑰图 -->
      <div class="pie-box">
        <cockScombPie :data="data" :color="color"></cockScombPie>
      </div>
    </div>
    <!-- 环饼嵌套图 -->
    <div class="content-box flex-box" v-if="index == 4"></div>
    <!-- 旭日图 -->
    <div class="content-box flex-box" v-if="index == 5"></div>
  </div>
</template>

<script>
import pie from "components/pie/pie";
import stereoscopicPie from "components/pie/3dPie";
import annularPie from "components/pie/annularPie";
import dotAnnularPie from "components/pie/dotAnnularPie";
import innerBorderAnnularPie from "components/pie/InnerBorderAnnularPie";
import annularStereoscopicPie from "components/pie/3dAnnularPie";
import motionAnnularPie from "components/pie/motionAnnularPie";
import rosePie from "components/pie/rosePie";
import roseAnnularPie from "components/pie/roseAnnularPie";
import cockScombPie from "components/pie/cockScombPie";
export default {
  data() {
    return {
      index: this.$route.params.index, //  index值
      color: ["#328ff6", "#f56e6b", "#c956d7"],
      gradients: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#3b97fe", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#5dc8fe", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#fc6d67", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#fc896c", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#f8a928", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#fec669", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#a76dd1", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#b858d3", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "#49e0b3", // 0% 处的颜色
            },
            {
              offset: 1,
              color: "#61dcbd", // 100% 处的颜色
            },
          ],
          globalCoord: false, // 缺省为 false
        },
      ],
      data: [
        { value: 1438, name: "违纪行为" },
        { value: 1090, name: "职务违法犯罪行为" },
        { value: 2865, name: "其他违法犯罪行为" },
      ],
    };
  },
  watch: {
    $route(to, from) {
      this.index = this.$route.params.index;
    },
  },
  mounted() {},
  methods: {},
  components: {
    pie,
    stereoscopicPie,
    annularPie,
    dotAnnularPie,
    innerBorderAnnularPie,
    annularStereoscopicPie,
    motionAnnularPie,
    rosePie,
    roseAnnularPie,
    cockScombPie,
  },
};
</script>

<style lang="scss">
@import "style/charts.scss";
.content,
.content-box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.content-box {
  padding: 40px 40px 0;
  overflow-y: visible;
  flex-wrap: wrap;
  justify-content: space-between;
  .pie-box {
    width: 30%;
    height: 500px;
    background-color: transparent;
    border-radius: 7px;
    box-shadow: 5px 5px 20px #b3b3b4;
    margin-bottom: 40px;
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
