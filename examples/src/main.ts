import { createApp } from 'vue'
import App from './App.vue'
import VueSimpleDialog from 'vue-simple-dialog'
import 'vue-simple-dialog/dist/index.css'

const app = createApp(App)

app.use(VueSimpleDialog).mount('#app')
