<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="form-veri-content flex-box">
      <div class="exp-container">
        <div class="exp flex-box">
          <input type="text" class="exp__input" id="example" name="test" placeholder="Full Name" required=""/>
          <label class="exp__label" for="example" data-icon="" data-icon-ok="">Full Name</label>
        </div>
        <div class="exp flex-box">
          <input type="email" class="exp__input" id="example2" name="test" placeholder="Email" required=""/>
          <label class="exp__label" for="example2" data-icon="" data-icon-ok="">Email</label>
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
      default: "表单校验动效类型二",
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
.form-veri-content {
  width: 100%;
  min-height: 400px;
  align-items: center;
  justify-content: center;
  .exp-container {
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    max-width: 600px;
    .exp {
      flex-direction: column-reverse;
      width: 100%;
      margin-bottom: 30px;
      position: relative;
      flex-wrap: wrap;
      .exp__input {
        border: 1px solid #ddd;
        padding: 0 10px;
        width: 100%;
        height: 52px;
        transition: 0.3s;
        font-weight: normal;
        box-sizing: border-box;
        font-family: "Work Sans", sans-serif;
        font-size: 16px;
        outline: none;
        &:focus {
          padding-left: 42px;
          border-color: #bbb;
        }
        &:valid {
          padding-left: 42px;
          border-color: green;
        }
      }
      .exp__label {
        transition: 0.3s;
        margin-bottom: 5px;
        &:before {
          content: attr(data-icon);
          font-weight: normal;
          font-family: "Ionicons";
          font-size: 24px;
          position: absolute;
          left: 0;
          transform: rotateY(90deg);
          bottom: 0;
          height: 52px;
          background: transparent;
          color: #000;
          transform-origin: left;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s 0s ease, transform 0.3s 0s ease;
          width: 42px;
        }
      }
    }
  }
  .exp__input:focus + label:before {
    transform: rotateY(0deg);
  }
  .exp__input:valid + label {
    color: green;
  }
  .exp__input:valid + label:before {
    transform: rotateY(0deg);
    color: green;
    font-size: 34px;
    content: attr(data-icon-ok);
  }
}
</style>
