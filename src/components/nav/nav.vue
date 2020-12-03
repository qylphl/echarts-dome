<template>
  <div
    class="nav-box"
    :style="{
      'width': width + 'px',
      'background-color': backgroundColor[themeType],
    }"
  ></div>
</template>
<script>
export default {
  props: {
    backgroundColor: {
      type: Array,
    },
    themeType: {
      default: 0,
      type: Number,
    },
    width: {
      default: 272,
      type: Number,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.nav-box {
  height: 100%;
  overflow: visible;
  box-shadow: 0 0 8px 0 rgba(98, 116, 207, 0.35);
}
</style>
