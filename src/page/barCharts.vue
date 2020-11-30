<template>
  <div class="content flex-box">
    <!-- 普通饼状图 -->
    <div class="pie-box"><pie :data="data" :color='color'></pie></div>
    <!-- 3D饼图 -->
    <div class="pie-box"><stereoscopicPie :data="data" :color='color'></stereoscopicPie></div>
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
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  overflow: visible;
  .pie-box {
    width: 30%;
    height: 500px;
    background: #fff;
    border-radius: 7px;
    box-shadow: 5px 5px 20px #b3b3b4;
    margin-left: 5%;
    &:first-child{
      margin-left: 0;
    }
  }
}
</style>
