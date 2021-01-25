<template>
  <div :class="{ 'nav-bar-box flex-box': true, 'nav-bar-box-1': themeType == 1 }">
    <p class="title" v-html="title"></p>
    <p class="btn" @click="viewCode">查看代码</p>
    <el-dialog
      title="查看代码"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <p class="tip">
          以下代码为option配置项：<br/><span style="color: red;" v-html="'( '+tipTitle+' )'"></span>
        </p>
        <div class="textarea-box">
          <textarea readonly="readonly" v-html="optionString"></textarea>
        </div>
        
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    tipTitle: {
      default: '注："boxTitle"和"boxWidth"不是echart中option所需要的属性，可以删掉。',
      type: String,
    },
    title: {
      type: String,
    },
    optionString: {
      type: Object,
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {
    viewCode() {
      this.dialogVisible = true;
      this.$emit("viewCode");
    },
    handleClose(done) {
      done();
    },
  },
};
</script>

<style lang="scss">
.nav-bar-box {
  width: 100%;
  height: 64px;
  padding: 0 16px;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  background-color: #f4faff;
  .title {
    font-size: 18px;
    color: #000;
  }
  .btn {
    font-size: 16px;
    color: #2878ff;
    padding: 7px 16px;
    border-radius: 4px;
    border: 1px solid #2878ff;
    cursor: pointer;
  }
}
.nav-bar-box-1 {
  background-color: #010c45;
  border-color: #082b7d;
  .title {
    color: #fff;
  }
}
.dialog-content {
  padding: 10px 30px;
  color: #333;
  box-sizing: border-box;
  .tip{
    font-size: 18px;
    padding-bottom: 20px;
    line-height: 25px;
  }
  .textarea-box {
    width: 100%;
    height: 500px;
    background-color: rgb(30,31,41);
    padding: 10px 8px 10px 20px;
    border-radius: 5px;
    box-sizing: border-box;
    textarea {
      width: 100%;
      height: 100%;
      font-size: 16px;
      background-color: rgb(30,31,41);
      color: #fff;      
    }
  }
  
}
</style>
