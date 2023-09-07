<template>
  <div class="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader  from "./components/Header/Header.vue";
import AppFooter  from "./components/Footer/Footer.vue";
export default {
  name: 'App',
  components: {
        AppHeader,
        AppFooter
    },
}
</script>

<style>
@import './assets/css/main.css';
@import './assets/css/styles.css';
.app {
  position: relative;
  min-height: 100vh; 
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}
app-footer {
  /* 这里可以添加页脚的样式 */
  position: fixed;
  bottom: 0; /* 将页脚固定在底部 */
  left: 0;
  right: 0;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

</style>
