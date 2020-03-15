// JS

import 'popper.js'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'
import './project/modules/ratings/rating'
import './project/modules/donut-chart/donut-chart'
import './project/modules/range_slider/multirange'
import 'air-datepicker/dist/js/datepicker.js'
import './js/'
import './project/modules/forms/__calendar-block/form__calendar-block' 
import 'jquery.mmenu/dist/jquery.mmenu.all.css'
import 'jquery.mmenu/dist/jquery.mmenu.all.js'
import 'mburger-css/dist/mburger.js'
import 'mburger-css/dist/mburger.css'






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
