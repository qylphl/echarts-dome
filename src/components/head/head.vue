<template>
  <div class="height-box">
    <!-- 头部 -->
    <div class="header flex-box" :style="{'height': height+'px'}">
      <div class="header-left flex-box">
        <img class="echart-logo" src="../../../src/assets/img/echarts_logo.png" alt="">
        <p class="header-title">{{ headerTitle }}</p>
      </div>
      <div class="header-right flex-box">
        <p class="color-match flex-box">
          <span>图表配色选择：</span>
          <i
            v-for="(item, index) in color"
            :key="index"
            :style="{ 'background-color': item }"
          ></i>
        </p>
        <p class="instructions">
          <span class="icon-explain">?</span>
          <span class="instructions-title">使用说明</span>
        </p>
        <!-- 风格切换 -->
        <div class="style-switch">
          <span
            v-for="(item, index) in themeColor"
            :key="index"
            :class="{ 'choose-style': index == themeType }"
            :style="{ 'background-color': item }"
            @click="themeChoose(index)"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      default: 70,
      type: Number,
    },
    headerTitle: {
      default: "图表样式及代码使用规范",
      type: String,
    },
    color: {
      type: Array,
    },
    themeColor: {
      type: Array,
    },
    porpThemeType: {
      default: 0,
      type: Number,
    },
  },
  data() {
    return {
      themeType: this.porpThemeType
    };
  },
  mounted() {},
  methods: {
    themeChoose(index) {
      this.themeType = index;
      this.$emit("themeChoose", this.themeType);
    },
  },
};
</script>
<style lang="scss" scoped>
.height-box {
  .header {
    width: 100%;
    padding: 0 20px;
    background-color: #082b7d;
    box-shadow: 0 2px 6px 0 rgba(107, 107, 107, 0.17);
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    .header-left {
      align-items: center;
      .header-title {
        font-size: 28px;
        letter-spacing: 1px;
        color: #fff;
        padding-left: 17px;
      }
    }
    .header-right {
      align-items: center;
      font-size: 18px;
      color: #ffffff80;
      // 配色选择
      .color-match {
        align-items: center;
        i {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-left: 12px;
        }
      }
      // 使用说明
      .instructions {
        margin-left: 43px;
        span {
          display: inline-block;
        }
        .icon-explain {
          width: 24px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          border-radius: 50%;
          border: 1px solid #ffffff80;
          font-size: 15px;
          margin-right: 8px;
        }
        .instructions-title {
          height: 24px;
          line-height: 24px;
        }
      }
      // 风格切换
      .style-switch {
        font-size: 0;
        margin-left: 34px;
        cursor: pointer;
        span {
          display: inline-block;
          width: 16px;
          height: 32px;
          border-radius: 1px;
          box-sizing: border-box;
          margin-right: 12px;
          &:last-child {
            margin-right: 0;
          }
        }
        .choose-style {
          border: 1px solid #0091ff;
        }
      }
    }
  }
}
</style>
