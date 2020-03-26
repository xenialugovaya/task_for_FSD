// JS


import 'jquery.mmenu/dist/jquery.mmenu.all.css'
import 'jquery.mmenu/dist/jquery.mmenu.all.js'
import 'mburger-css/dist/mburger.js'
import 'mburger-css/dist/mburger.css'


// SCSS
import './assets/scss/main.scss'

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./project/modules', true, /\.js$/)); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(require.context('./project/pages', true, /\.js$/));