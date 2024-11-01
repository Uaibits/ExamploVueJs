import { createApp } from 'vue'
import router from './router'
import DefaultLayout from "@/layout/DefaultLayout.vue";
const app = createApp(DefaultLayout)

app.use(router)

app.mount('#app')
