<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Foolter></Foolter>
    
  </div>
</template>

<script>
import Header from './components/header/index.vue'
import Foolter from './components/footer/index.vue'
export default {
  name: 'App',
  components:{
    Header,
    Foolter,
  }
}
</script>

<style>

</style>
