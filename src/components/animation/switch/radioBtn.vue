<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="wrapper flex-box">
      <input type="radio" name="select" id="option-1" checked />
      <input type="radio" name="select" id="option-2" />
      <label for="option-1" class="option option-1">
        <div class="dot"></div>
        <span>学生</span>
      </label>
      <label for="option-2" class="option option-2">
        <div class="dot"></div>
        <span>教师</span>
      </label>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "单选切换动画",
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
.wrapper {
  width: 100%;
  height: calc(100% - 64px);
  min-height: calc(500px -64px);
  align-items: center;
  justify-content: center;
  .option {
    background: #fff;
    height: 60px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    cursor: pointer;
    padding: 0 10px;
    border: 2px solid lightgrey;
    transition: all 0.3s ease;
    &:first-of-type {
      margin-right: 30px;
    }
    span {
      font-size: 20px;
      color: #808080;
    }
    .dot {
      height: 20px;
      width: 20px;
      background: #d9d9d9;
      border-radius: 50%;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        top: 4px;
        left: 4px;
        width: 12px;
        height: 12px;
        background: #0069d9;
        border-radius: 50%;
        opacity: 0;
        transform: scale(1.5);
        transition: all 0.3s ease;
      }
    }
  }
}
input[type="radio"] {
  display: none;
}
#option-1:checked:checked ~ .option-1,
#option-2:checked:checked ~ .option-2 {
  border-color: #0069d9;
  background: #0069d9;
}
#option-1:checked:checked ~ .option-1 .dot,
#option-2:checked:checked ~ .option-2 .dot {
  background: #fff;
}
#option-1:checked:checked ~ .option-1 .dot::before,
#option-2:checked:checked ~ .option-2 .dot::before {
  opacity: 1;
  transform: scale(1);
}
#option-1:checked:checked ~ .option-1 span,
#option-2:checked:checked ~ .option-2 span {
  color: #fff;
}
</style>