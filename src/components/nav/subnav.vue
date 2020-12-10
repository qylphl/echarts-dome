<template>
  <div :class="{ 'sub-nav': true, 'nav-bar-box-1': themeType == 1 }">
    <div
      :class="{ 'subnav-title': true, 'choose-item': index == chooseIndex }"
      v-for="(item, index) of dataList"
      :key="index"
      :style="{ color: titleColor }"
      @click="chooseTitle(index)"
    >
      <el-tooltip :content="item.num" effect="light" placement="right">
        <p class="subnav-title-content">{{ item.title }}</p>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    titleColor: {
      default: "#333",
      type: String,
    },
    dataList: {
      type: Array,
    },
  },
  data() {
    return {
      chooseIndex: 0,
    };
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  mounted() {},
  methods: {
    chooseTitle(index) {
      this.chooseIndex = index;
      this.$emit("chooseTitle", this.chooseIndex);
    },
  },
};
</script>

<style lang="scss">
.sub-nav {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: transparent;
  cursor: pointer;
  .subnav-title {
    height: 28px;
    line-height: 28px;
    padding-left: 16px;
    font-size: 20px;
    color: #333;
    margin-top: 18px;
    margin-left: -2.5px;
    border-left: 5px solid transparent;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #2878ff !important;
    }
    .subnav-title-content {
      width: max-content;
      outline: none;
    }
  }
  .choose-item {
    border-left-color: #2878ff;
    color: #2878ff !important;
  }
}
</style>
