import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js';
import { createPinia } from 'pinia'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

const pinia = createPinia()
const app = createApp(App)
app
	.use(pinia)
	.use(router)
	.mount('#app')

