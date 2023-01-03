import { createApp } from 'vue'
import App from './App.vue'
import VueSimpleConfirm from 'vue-simple-confirm'
import 'vue-simple-confirm/dist/index.css'

const app = createApp(App)

app.use(VueSimpleConfirm).mount('#app')
