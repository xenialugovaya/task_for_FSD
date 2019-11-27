// JS
import './js/'
import 'jquery'
import 'popper.js'
import './project/modules/ratings/rating.js'
import './project/modules/range_slider/multirange'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'


// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('example-component', require('./components/Example.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
