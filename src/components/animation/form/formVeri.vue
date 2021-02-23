<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <form class="form-validation">
      <div>
        <label>名字</label>
        <input
          type="text"
          placeholder="请输入你的名字(1到10个中文)"
          pattern="^[\u4e00-\u9fa5]{1,10}$"
          required
        />
      </div>
      <div>
        <label>手机</label>
        <input
          type="text"
          placeholder="请输入你的手机"
          pattern="^1[3456789]\d{9}$"
          required
        />
      </div>
      <div>
        <label>简介</label>
        <textarea required></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "表单校验动效",
      type: String,
    },
    deploy: {
      type: Object,
    },
  },
  data() {
    return {};
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
.form-validation {
  width: 80%;
  margin: 50px auto 0;
  div + div {
    margin-top: 10px;
  }
  label {
    display: block;
    padding-bottom: 8px;
    font-weight: bold;
    font-size: 16px;
    color: #333;
  }
  input,
  textarea {
    display: block;
    padding: 0 20px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    width: 100%;
    height: 40px;
    outline: none;
    font-size: 16px;
    caret-color: #09f;
    transition: all 300ms;
    box-sizing: border-box;
    &:valid {
      border-color: #3c9;
    }
    &:invalid {
      border-color: #f66;
    }
    &::placeholder {
      font-size: 16px;
    }
  }
  textarea {
    height: 122px;
    resize: none;
    line-height: 30px;
    font-size: 16px;
  }
}
</style>
