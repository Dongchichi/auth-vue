<template>
  
  <div clas="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader  from "./components/Header/Header.vue";
export default {
  name: 'App',
  components: {
        AppHeader
    },
}
</script>

<style>
@import './assets/css/main.css';
#app{
  width: 80%;
  margin: 0 auto; /* 使用auto值来水平居中 */
  background-color: inherit;
}
</style>
