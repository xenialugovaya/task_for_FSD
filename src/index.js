// JS
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';

// SCSS
import './assets/scss/main.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./project/', true, /\.(scss|js)$/));
requireAll(require.context('./assets/favicons/', true, /\.js$/));