// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes'
import SuccessPopUp from './components/SuccessPopUp'
import WarningPopUp from './components/WarningPopUp'

Vue.config.productionTip = false

Vue.component('SuccessPopUp', SuccessPopUp)

Vue.component('WarningPopUp', WarningPopUp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
