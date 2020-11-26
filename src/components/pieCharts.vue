<template>
  <div class="content flex-box">
    <div class="pie-box"></div>
    <div class="pie-box"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 100%;
  padding: 20px 5%;
  justify-content: space-between;
  background-color: #fff;
  box-sizing: border-box;
  overflow: visible;
  .pie-box{
    width: 45%;
    height: 500px;
    background: #fff;
    border-radius: 7px;
    box-shadow: 5px 5px 20px #b3b3b4;
  }
}
</style>
