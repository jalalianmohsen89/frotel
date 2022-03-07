import {createApp} from 'vue'
import {createVuetify} from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {store} from "./store";
import App from './App.vue'
import axiosService from "./plugins/axios.service";
import router from "./router";
import mockService from "./plugins/mock.service";
import './assets/css/style.css'
import middleware from "@grafikri/vue-middleware"

router.beforeEach(middleware({store}))

axiosService.init();
mockService.init();
const vuetify = createVuetify({
    components,
    directives,
})
createApp(App).use(router).use(store).use(vuetify)
    .mount('#app')
