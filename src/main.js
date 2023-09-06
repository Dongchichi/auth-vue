import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'; 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(vuetify)
    .mount('#app')
