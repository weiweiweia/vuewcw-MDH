<template>
  <header class="index-header">
    <a href="mine.html?cpid=0">
      <div class="header-user">
        <div class="user-btn"></div>
      </div>
    </a>
    <div class="header-logo"></div>
    <a href="search.html?cpid=0">
      <div class="header-search"></div>
    </a>
  </header>
</template>

<script>
export default {
  name: 'IndexHeader'
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins.scss";

.index-header {
  @include border-bottom;
  display: flex;
  justify-content: space-between;
  z-index: 9999;
  background: #fff;
  align-items: center;
  padding: 0 20px;
  height: 44px;
  box-sizing: border-box;
  // border-bottom: 1px solid #e9e9e9;
  .user-btn {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/user-btn.png") no-repeat;
    background-size: 100%;
  }
  .header-logo {
    width: 92px;
    height: 28px;
    background: url("~@/assets/logo.png") no-repeat;
    background-size: 100%;
  }
  .header-search {
    width: 25px;
    height: 25px;
    background: url("~@/assets/icon/search.png") no-repeat;
    background-size: 100%;
  }
}
</style>
