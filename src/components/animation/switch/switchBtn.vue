<template>
  <div class="chart-content">
    <navBar :title="title" :optionString="deploy"></navBar>
    <div class="switch-content-box flex-box">
      <input id="chck" type="checkbox" />
      <label for="chck" class="check-trail">
        <span class="check-handler"></span>
      </label>
    </div>
  </div>
</template>

<script>
import navBar from "components/nav/navBar";
export default {
  props: {
    title: {
      default: "关闭按钮切换动画",
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
.switch-content-box {
  width: 100%;
  height: calc(100% - 64px);
  min-height: 400px;
  align-items: center;
  justify-content: center;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .check-trail {
    display: flex;
    align-items: center;
    width: 9em;
    height: 5em;
    background: #2c3e50;
    border-radius: 2.5em;
    transition: all 0.5s ease;
    cursor: pointer;
  }
  .check-handler {
    display: flex;
    margin-left: 0.5em;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 4em;
    background: #34495e;
    border-radius: 50%;
    transition: all 0.5s ease;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    &:before {
      content: "\00D7";
      color: white;
      font-size: 2em;
      font-weight: bold;
    }
  }
}
input[type="checkbox"]:checked + .check-trail {
  background: #16a085;
}
input[type="checkbox"]:checked + .check-trail .check-handler {
  margin-left: 50%;
  background: #1abc9c;
}
input[type="checkbox"]:checked + .check-trail .check-handler::before {
  content: "✔";
}
</style>