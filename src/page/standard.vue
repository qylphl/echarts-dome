<template>
  <div class="content flex-box">规范</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    themeType() {
      return this.$store.getters.getThemeTyle;
    },
  },
  watch: {
    scroll() {},
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss">
</style>
