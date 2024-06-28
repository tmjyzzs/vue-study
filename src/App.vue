<template>
  <div>
    <Header></Header>
    <footer></footer>
    我是根组件
  </div>
</template>

<script>
import Header from './components/header'
import footer from './components/footer'
export default {
  name: 'App',
  components:{
    Header,
    footer
  }
}
</script>

<style>

</style>
