import './donut-chart.scss';

$(document).ready(function($) {

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