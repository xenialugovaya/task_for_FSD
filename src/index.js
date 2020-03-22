// JS

import 'popper.js'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'

import 'air-datepicker/dist/js/datepicker.js'
import './js/'

import 'jquery.mmenu/dist/jquery.mmenu.all.css'
import 'jquery.mmenu/dist/jquery.mmenu.all.js'
import 'mburger-css/dist/mburger.js'
import 'mburger-css/dist/mburger.css'
/*
import './project/modules/ratings/rating'
import './project/modules/donut-chart/donut-chart-plugin'

import './project/modules/donut-chart/donut-chart'
import './project/modules/range_slider/multirange'
import './project/pages/landing-page/landing-page'
import './project/modules/forms/__calendar-block/form__calendar-block'
import './project/pages/registration/registration'
import './project/pages/room-details/room-details'
import './project/pages/search-room/searh-room'
import './project/pages/sign-in/sign-in'
import './project/pages/uikit-colors-type/uikit-colors-type'
import './project/pages/uikit-form-elements/uikit-form-elements'
import './project/pages/uikit-cards/uikit-cards'
import './project/pages/uikit-headers-footers/uikit-headers-footers'
import './project/modules/uikit-text/uikit-text'
import './project/modules/color-box/color-box'
import './project/modules/room-icon/room-icon'
import './project/modules/button-big/button-big'
import './project/modules/button-ghost/button-ghost'
import './project/modules/button-small/button-small'
import './project/modules/button-transparent/button-transparent'

*/

// SCSS
import './assets/scss/main.scss'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./project/modules', true, /\.js$/)); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(require.context('./project/pages', true, /\.js$/));