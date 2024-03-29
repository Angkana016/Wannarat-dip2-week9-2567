import { createApp } from 'vue'
import App from '../vue3-router/src/App.vue'
import router from './router'

createApp(App).use(router).mount('#app')