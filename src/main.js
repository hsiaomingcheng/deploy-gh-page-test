import { ViteSSG } from 'vite-ssg/single-page'
// import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

export const createApp = ViteSSG(App)
