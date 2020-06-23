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
// import VueSweetalert2 from 'vue-sweetalert2'

import 'noto-sans-tc/noto_sans_tc_regular/css.css'

import VueEllipseProgress from 'vue-ellipse-progress'

import VueGtag from 'vue-gtag'

import vueg from 'vueg'

import VueAudio from 'vue-audio'

library.add(faCheck, faPen, faTimes, faUndo, faSave, faPlay, faPause, faStepForward, faHome, faList, faCalendarCheck, faCog, faStop)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.component('draggable', draggable)

// Vue.use(VueSweetalert2)

Vue.use(VueEllipseProgress)

Vue.use(vueg, router)

Vue.use(VueGtag, {
  config: { id: 'UA-168203638-1' }
})

Vue.use(VueAudio)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
