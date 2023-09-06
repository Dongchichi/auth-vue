import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home'; // 导入视图组件
import Login from '../views/Login'; // 导入其他视图组件

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
    document.title = to.meta.title || '欢迎来到我的个人站'; // 设置页面标题
  });
export default router;