import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import pianaStore from './stores/main'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/main.css'

// import {translate} from '@/translate'

/* Creating a new Vue instance. */
const app = createApp(App)
app.use(ElementPlus)
/* Attaching the store to the Vue instance. */
app.use(pianaStore)
/* Creating a new instance of Pinia and attaching it to the Vue instance. */
app.use(createPinia())
/* Attaching the translate function to the Vue instance. */
// app.use(translate)
/* Attaching the router to the Vue instance. */
app.use(router)

app.mount('#app')
