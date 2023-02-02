import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import pianaStore from './store'

import './assets/main.css'

const app = createApp(App)
/* Attaching the store to the Vue instance. */
app.use(pianaStore)
/* Creating a new instance of Pinia and attaching it to the Vue instance. */
app.use(createPinia())
/* Attaching the router to the Vue instance. */
app.use(router)

app.mount('#app')
