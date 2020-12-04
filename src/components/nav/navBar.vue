<template>
  <div class="nav-bar-box flex-box">
    <p class="title">{{ title }}</p>
    <p class="btn" @click="viewCode">查看代码</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    viewCode() {
        this.$emit("viewCode");
    },
  },
};
</script>

<style lang="scss">
.nav-bar-box {
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background-color: #f4faff;
  border-bottom: 1px solid #eaeaea;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
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
</style>
