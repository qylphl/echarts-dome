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
          <span class="instructions-title" @click="openInstructions">使用说明</span>
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
     <el-dialog
      title="使用说明"
      :visible.sync="dialogVisible"
      width="48%"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <p class="first-title">一、简介</p>
        <p>本图表样式示例主要整理了常用echarts图表的样式及代码，方便开发人员后续使用，提高开发效率。</p>
        <p>头部右上角可以查看整体配色，也可以进行切换主题颜色，方便查看大数据系统展示的图表样式，从而选择更加合适的图表。</p>
        <p class="first-title">二、操作步骤</p>
        <p>找到需要使用的echarts图表组件，点击查看代码，展示的代码均为option设置项，根据自己的项目需要更改‘ color ’配置项为设计人员提供的颜色组；‘ data ’配置项改为动态获取的数据，只要数据格式保持一致就可以（其中‘ 键 ’的名字也尽量保持一致，否则option配置项中也需要同步变更）。其余写法与常规的echarts使用无差别。</p>
        <p style="color: red;">(注：查看代码中的option配置项是通过js渲染出来的，所以动态的color和data也被渲染成字符串了，如果需要动态传值的可以找到对应的组件或者option配置项复制代码。)</p>
        <p class="first-title">三、注意事项</p>
        <p>1、查看代码弹框中展示的仅仅是echarts的option配置项。</p>
        <p>2、option中的data数据需要根据调取接口获取，格式与例子中的保持一致即可（包括对象中的 ‘ 键 ’ 也需要保持一致，如需更改 ‘ 键 ’ ，option配置中也需要同步）。</p>
        <p>3、如果echarts图表用于大数据，需要改变轴线上文字的颜色。</p>
        <p>4、如果是vue项目的话，可以直接找到相应的组件，直接放入自己的项目，父子组件按要求传值即可。</p>
        <p class="first-title">四、组件存放位置</p>
        <p style="color:red;">(注：option配置项跟查看代码中的无太大差别，可直接查看代码复制，如果不想再根据自己项目需要去改动data和color，可以找到一下路径进行复制和传值。)</p>
        <p class="second-level">(一)、通用echarts组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/chartsPublic/charts.vue（这个是普通echarts图表的组件。）</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>通用echarts组件option配置项存放位置，详见以下option配置项存放位置。</p>
        <p class="second-level">(二)、柱状图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/bar（详见查看代码中的提示。）</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/barOption.js（文件中有注释，可以直接在文件中复制option配置项。）</p>
        <p class="second-level">(三)、饼状图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/pie</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/pieOption.js</p>
        <p class="second-level">(四)、折线图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/line</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/lineOption.js</p>
        <p class="second-level">(五)、漏斗图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/funnel</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/funnelOption.js</p>
        <p class="second-level">(六)、地图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/map</p>
        <p class="second-level">(七)、雷达图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/radar</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/radarOption.js</p>
        <p class="second-level">(八)、仪表盘组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/chartsPublic/charts.vue</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/dashboardOption.js</p>
        <p class="second-level">(九)、词云图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/word</p>
        <p class="second-level">(十)、散点气泡图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/scatter</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/scatterOption.js</p>
        <p class="second-level">(十一)、双轴图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/chartsPublic/charts.vue</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/biaxialOption.js</p>
        <p class="second-level">(十二)、水滴图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/water</p>
        <p class="second-level">(十三)、矩阵图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/chartsPublic/charts.vue</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/matrixOption.js</p>
        <p class="second-level">(十四)、热力图组件存放位置：</p>
        <p class="second-level-content"><strong>1、组件存放位置：</strong>src/components/heat</p>
        <p class="second-level-content"><strong>2、option存放位置：</strong>src/utils/heatOption.js</p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
      themeType: this.porpThemeType,
      dialogVisible: false,
    };
  },
  mounted() {},
  methods: {
    themeChoose(index) {
      this.themeType = index;
      this.$emit("themeChoose", this.themeType);
    },
    // 使用说明弹框
    openInstructions(){
      this.dialogVisible = true;
    },
    handleClose(done) {
      done();
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
  .dialog-content {
    min-height: 400px;
    max-height: 600px;
    overflow: hidden;
    overflow-y: visible;
    padding: 0 10px;
    .first-title {
      font-size: 20px;
      text-indent: 0;
      font-weight: bold;
    }
    p {
      text-indent: 2em;
      font-size: 18px;
      line-height: 30px;
      padding-bottom: 10px;
    }
    .second-level {
      font-weight: bold;
    }
    .second-level-content {
      padding-left: 48px;
      text-indent: 0;
    }
  }
}
</style>
