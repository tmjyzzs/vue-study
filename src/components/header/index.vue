<template>
  <div>
    <header class="header">
      <!-- 头部 -->
      <div class="top">
        <!-- 欢迎字段 -->
        <p>急急急欢迎你</p>
        <!-- 注册登入 -->
        <p>
          <span>请</span>
          <a href="">请登入</a>
          <a href="">免费注册</a>
        </p>

        <!-- 分类 -->
        <div></div>
      </div>

      <!-- logo -->
      <div></div>
      <!-- 搜索 -->
      <div></div>
    </header>
  </div>
</template>

<script>
export default {

  name: "Header",
  data() {
    return {
      keyWord: ''
    }
  },
  methods: {
    goSearch() {
      console.log("vue", this);
      // 1.路径凭借传递
      // this.$router.push("/search/"+this.keyWord+'?k='+this.keyWord)
      // 2.对象传参  -- 常用
      this.$router.push({
        name: 'search', params: {
          keyWord: this.keyWord
        }, query: {
          k: this.keyWord
        }
      })
    }
  }

}
</script>

<style scoped lang="less">
.header {}
</style>