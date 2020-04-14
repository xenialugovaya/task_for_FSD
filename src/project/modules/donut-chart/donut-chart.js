import DonutChart from './DonutChart';

function renderComponent() {
  $(() => {
    $('.js-donut-chart').each((index, node) => {
      const donutChart = new DonutChart($(node));
      return donutChart;
    });
  });
}

renderComponent();