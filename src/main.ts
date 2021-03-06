import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/router";
import { store } from '@/stores'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount("#app");
