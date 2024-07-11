<template>
  <div>
    <header class="header">
      <!-- 头部 -->
      <div class="top">
        <!-- 头部中间部分 -->
        <div class="container">
          <!-- 登入& 欢迎 -->
          <div class="loginList">
            <!-- 欢迎字段 -->
            <p>急急急欢迎你</p>
            <!-- 注册登入 -->
            <p>
              <span>请</span>
              <a href="">登入</a>
              <a href="" class="register">免费注册</a>
            </p>
          </div>
          <!-- 菜单 -->
          <div class="typelist">
            <a href="">我的订单</a>
            <a href="">我的购物成为</a>
            <a href="">我的商品</a>
            <a href="">合作招商</a>

          </div>

        </div>

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
.header {
  &>.top {
    background: #e4e4e4;
    height: 30px;

    .container {

      width: 750px;
      margin: 0 auto;
      line-height: 30px;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }

        }
      }

      .typelist {
        // background: red;
        float: right;

        a {
          &+a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }
}
</style>