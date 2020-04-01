// JS


import 'jquery.mmenu/dist/jquery.mmenu.all.css'
import 'jquery.mmenu/dist/jquery.mmenu.all.js'
import 'mburger-css/dist/mburger.js'
import 'mburger-css/dist/mburger.css'
import 'webpack-jquery-ui'
import 'webpack-jquery-ui/css'


// SCSS
import './assets/scss/main.scss'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('../src/', true, /\.js$/)); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
//requireAll(require.context('./project/pages', true, /\.js$/));
//requireAll(require.context('./project/layout', true, /\.js$/));