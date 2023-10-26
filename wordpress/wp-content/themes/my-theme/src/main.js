import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'

import VueCookies from 'vue-cookies'

import components from '@/components/UI/index'
import VaddBackgroundImage from './directives/VaddBackgroundImage'

let app = createApp(App)

// register globally

components.forEach(component => {
    app.component(component.name, component)
})

app.directive('add-background', VaddBackgroundImage)

app.use(VueCookies, {sameSite: 'None', secure: true, domain: 'legal-services.site'})

app.use(router).use(store).mount('#app')
