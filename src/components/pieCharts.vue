<template>
  <div class="content flex-box">
    <!-- 普通饼状图 -->
    <div class="pie-box"><pie></pie></div>
    <!-- 3D饼图 -->
    <div class="pie-box"></div>
    <div class="pie-box"></div>
  </div>
</template>

<script>
import pie from "./pie/pie";
export default {
  data() {
    return {
      data: [
        { value: 1438, name: "违纪行为" },
        { value: 109, name: "职务违法犯罪行为" },
        { value: 2865, name: "其他违法犯罪行为" },
      ],
    };
  },
  mounted() {},
  methods: {},
  components: {pie},
};
</script>

<style lang="scss">
@import 'style/charts.scss';
.content {
  width: 100%;
  height: 100%;
  padding: 40px;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  overflow: visible;
  .pie-box {
    width: 30%;
    height: 500px;
    background: #fff;
    border-radius: 7px;
    box-shadow: 5px 5px 20px #b3b3b4;
  }
}
</style>
