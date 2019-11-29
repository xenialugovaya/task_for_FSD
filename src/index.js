// JS
import './js/'
import 'jquery'
import 'popper.js'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'
import './project/modules/forms/__input/_masked/jquery.maskedinput'


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
