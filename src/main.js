// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import vueLazyLoad from 'vue-lazyload'
import longTap from './directive/longTap'

Vue.use(vueLazyLoad, {
  preLoad: 1.3,
  attempt: 2,
  listenEvents:['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
})

Vue.directive('longTap', longTap)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
