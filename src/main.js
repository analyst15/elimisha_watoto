import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/router'
import { MotionPlugin } from '@vueuse/motion'
import VueClickAway from "vue3-click-away";


createApp(App)
.use(router)
.use(MotionPlugin)
.use(VueClickAway)
.mount('#app')