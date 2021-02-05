<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="card-box flex-box">
      <div
        :class="{ service: true, active: chooseType == index }"
        v-for="(msg, index) in listInfo"
        :key="index"
        @click="chooseType = index"
      >
        <div class="icon-holder"></div>
        <h3 class="heading">{{ msg.title }}</h3>
        <div class="description">
          <div class="txt" v-for="(txt, i) in msg.inner" :key="'inner' + i">
            {{ txt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "卡片详情动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      chooseType: 0,
      listInfo: [
        { title: "色系", inner: ["偏黄", "偏棕", "红色"] },
        { title: "风格", inner: ["现代简约", "欧式风格", "复古风格"] },
        { title: "空间", inner: ["客厅", "厨房", "卧室"] },
        { title: "工艺", inner: ["仿古", "平面", "锯齿纹"] },
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
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.card-box {
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px 0;
  box-sizing: border-box;
  flex-wrap: wrap;
  .service {
    width: 18%;
    min-width: 230px;
    height: 240px;
    text-align: center;
    border: 1px solid #eaeaea;
    background: #f4faff;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-bottom: 40px;
    cursor: pointer;
    .icon-holder {
      position: relative;
      top: 40px;
      display: inline-block;
      margin-bottom: 0px;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      font-size: 50px;
      color: #f2f2f2;
      width: 50px;
      height: 50px;
      background: #2878ff;
    }
    .heading {
      font-size: 24px;
      position: relative;
      font-weight: normal;
      top: 85px;
      color: #333;
      -webkit-transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    .description {
      width: 80%;
      margin: 0 auto;
      margin-top: 7px;
      opacity: 1;
      -webkit-transition: all 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transition: all 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
      .txt {
        font-size: 16px;
        color: #666;
        display: inline-block;
        width: 100%;
        line-height: 40px;
        border: none;
        a {
          text-decoration: none;
        }
      }
    }
  }
  .active {
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
    .icon-holder {
      top: -30px;
    }
    .heading {
      top: -8px;
    }
    .description {
      opacity: 1;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }
}
</style>
