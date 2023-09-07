import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home'; 
import Login from '../views/Login'; 
const routes = [
  {
    path: '/',
    component: Home,
    meta: { title: '赫兹' }
  },
  {
    path: '/login',
    component: Login,
    meta: { title: '登录' }
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.afterEach((to) => {
    document.title = to.meta.title || '赫兹'; // 设置页面标题
  });
export default router;