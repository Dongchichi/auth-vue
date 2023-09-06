import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'; // 导入Vue Router实例
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App)
    .use(ElementPlus)
    .use(router)
    .mount('#app')
