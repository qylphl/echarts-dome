<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="form-wrapper">
      <div class="top" :style="{'width': topWidth, 'background': topBackgroundColor}">
        <div class="colors" v-show="isShowTop" :style="{'width': colorsWidth}"></div>
      </div>
      <ul class="nav">
        <li :class="{ 'current': chooseType == index }" @click="chooseList(index)" v-for="(msg, index) in itemList" :key="index">{{msg}}</li>
      </ul>
      <form name="form">
        <div class="form">
          <div class="form-item" v-for="(content, index) in contentList" :key="'content' + index">
            <input :type="content == 'Password' ? 'password' : 'text'" name="content" required="required" :placeholder="content" v-model.trim="contentVal[content]" autocomplete="off"/>
          </div>
          <div class="button-panel">
            <button class="button">Test It Out</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "表单填写进度提示效果",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {
      inputs: [],
      itemList: ["效果一", "效果二", "效果三", "效果四"],
      cols: [
        ["#1ABC9C", "#EC7063", "#3498DB"],
        [
          ["#1ABC9C", "0%"],
          ["#1ABC9C", "33.3%"],
          ["#EC7063", "33.3%"],
          ["#EC7063", "66.6%"],
          ["#3498DB", "66.6%"],
          ["#3498DB", "100%"]
        ]
      ],
      contentList: ['Name','Username','Password'],   // placeholder值
      contentVal: {         // v-model值
         Name: '',
         Username: '',
         Password: '',
      },
      // 头部进度条相关设置
      isShowTop: false,   // 头部进度条是否显示
      chooseType: 0,   // 选中的index值
      topWidth: 0,    // 头部进度条的宽度
      topBackgroundColor: '#009dff',    // 头部进度条的背景颜色
      colorsWidth: '100%',
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {
    this.solid();
  },
  methods: {
    solid() {
        var that = this;
        var forms = document.querySelectorAll(".form");
        that.inputs = [];
        for (var i = forms.length; i--;) {
          var els = forms[i].querySelectorAll("input, textarea, select");
          for (var j = els.length; j--;) {
            if (els[j].type != "button" && els[j].type != "submit") {
              that.inputs.push(els[j]);
              els[j].addEventListener("input", that.cback, false);
            }
          }
        }
    },
    cback(e) {
      var t = [],
          that = this;
      for (var n = that.inputs.length; n--;) {
        if (!that.inputs[n].value.length) t.push(that.inputs[n]);
      }
      var r = t.length;
      var i = that.inputs.length;
      var s = document.querySelectorAll(".top");
      for (var o = s.length; o--;) {
        // s[o].style.width = 100 - (r / i) * 100 + "%";
        that.topWidth = 100 - (r / i) * 100 + "%";
        if (that.chooseType == 1){   // 效果二
          // s[o].style.background = that.cols[0][i - r - 1];
          that.topBackgroundColor = that.cols[0][i - r - 1];
        } 
        if (that.chooseType == 3) {   // 效果四
          var box = document.getElementsByClassName("form-wrapper")[0];
          that.isShowTop = true;
          // that.colorsWidth = window.innerWidth + "px";
          that.colorsWidth = box.offsetWidth + "px";
          document.querySelector(".colors").style.background = that.generateCSSGradient(that.cols[1]);
        }
      }
    },
    generateCSSGradient(colours) {
      var l = colours.length, 
          i = 0, 
          colorList = JSON.parse(JSON.stringify(colours));
      for (i = 0; i < l; i++) colorList[i] = colorList[i].join(" ");
      return "linear-gradient( to right, " + colorList.join(", ") + ")";
    },
    chooseList(index) {
        this.chooseType = index;
        this.contentVal = {
          Name: '',
          Username: '',
          Password: '',
        }
        this.topBackgroundColor = this.chooseType == 0 ? '#009dff' : 'linear-gradient(to right,#009dff 0,#00c8ff 100%)';
        this.isShowTop = false;
        this.topWidth = 0;
    }
  },
  components: { navBar },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  border-radius: 2px;
  padding: 30px 0;
  margin: 0 auto;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  // 切换菜单样式
  .nav {
    width: max-content;
    margin: 0 auto;
    li {
      display: inline-block;
      list-style-type: none;
      text-align: center;
      margin: 5px 10px;
      color: #333;
      text-decoration: none;
    }
    .current {
      background-color: #009dff;
      color: #fff;
      padding: 10px;
    }
  }
  // 表单样式
  form {
    padding: 15px 27% 0;
    .form-item {
      margin-bottom: 10px;
      width: 100%;
      input {
        border: 1px solid #ccc;
        border-radius: 2px;
        color: #000;
        font-family: "Open Sans", sans-serif;
        font-size: 1em;
        height: 50px;
        padding: 0 16px;
        transition: background 0.3s ease-in-out;
        width: 100%;
        box-sizing: border-box;
        &:focus {
          outline: none;
          border-color: #9ecaed;
          box-shadow: 0 0 10px #9ecaed;
        }
        .button-panel {
          margin: 20px 0 0;
          width: 100%;
          .button {
            -webkit-appearance: none;
            background: #009dff;
            border: none;
            border-radius: 2px;
            color: #fff;
            cursor: pointer;
            height: 50px;
            font-family: "Open Sans", sans-serif;
            font-size: 1.2em;
            letter-spacing: 0.05em;
            text-align: center;
            text-transform: uppercase;
            transition: background 0.3s ease-in-out;
            width: 100%;
            &:hover {
              background: #00c8ff;
            }
          }
        }
      }
    }
  }
  // 顶部进度条样式
  .top {
    background: linear-gradient(to right,#009dff 0,#00c8ff 100%);
    position: absolute;
    z-index: 1031;
    top: 0;
    left: 0;
    height: 4px;
    transition: all 1s;
    width: 0;
    overflow: hidden;
    .colors {
      width: 100%;
      height: 4px;
    }
  }
  // 底部按钮样式
  .button-panel {
    margin: 20px 0 0;
    width: 100%;
    .button {
      -webkit-appearance: none;
      background: #009dff;
      border: none;
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
      height: 50px;
      font-family: "Open Sans", sans-serif;
      font-size: 1.2em;
      letter-spacing: 0.05em;
      text-align: center;
      text-transform: uppercase;
      transition: background 0.3s ease-in-out;
      width: 100%;
    }
  }
}
</style>
