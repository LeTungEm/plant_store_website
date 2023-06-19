import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App.vue'
import router from './router'
import store from "./store/index"
import vue3GoogleLogin from 'vue3-google-login'
library.add(fab)
library.add(far)
library.add(fas)

createApp(App)
    .use(router)
    .use(vue3GoogleLogin, { clientId: '709680370995-7okbok1fucb64s5volvpjnd88rmljt5c.apps.googleusercontent.com' })
    .use(store)
    .mount('#app')
