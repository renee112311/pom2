import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './style/style.styl'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faList, faCalendarCheck, faCog, faStop } from '@fortawesome/free-solid-svg-icons'

import draggable from 'vuedraggable'

import 'noto-sans-tc/noto_sans_tc_regular/css.css'

import VueEllipseProgress from 'vue-ellipse-progress'

import VueGtag from 'vue-gtag'

import vueg from 'vueg'

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faList, faCalendarCheck, faCog, faStop)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.component('draggable', draggable)

Vue.use(VueEllipseProgress)

Vue.use(vueg, router)

Vue.use(VueGtag, {
  config: { id: 'UA-168203638-1' }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
