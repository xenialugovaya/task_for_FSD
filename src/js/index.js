// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files


import '../project/modules/checkbox-group/checkbox-expandable/checkbox-expandable'
import '../project/modules/hotel_card/hotel_card'
import 'lightslider/src/js/lightslider.js'
import 'lightslider/src/css/lightslider.css'
import '../project/modules/forms/__input/form__input'
import '../project/modules/nav/nav'

$(document).ready(function($) {
  $('.star_block#star-rating').rating();
  $('.donut-chart').donutChart({
    chartOptions: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
    amountAbs: [520, 260, 260],
    gradients: [
      ['#FFE39C', '#FFBA9C'],
      ['#6FCF97', '#66D2EA'],
      ['#BC9CFF', '#8BA4F9'],
      ['#919191', '#3D4975'],
      ['#BC9CFF', '#8BA4F9'],
    ],
  });

});