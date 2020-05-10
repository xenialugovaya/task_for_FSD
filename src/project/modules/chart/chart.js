class DonutChart {
  constructor(element) {
    this.$elem = element;
    this.render();
  }

  render() {
    this.$elem.donutChart({
      chartOptions: ['Великолепно', 'Хорошо', 'Удовлетворительно', 'Разочарован'],
      amountAbs: [520, 260, 260],
      gradients: [
        ['#FFE39C', '#FFBA9C'],
        ['#6FCF97', '#66D2EA'],
        ['#BC9CFF', '#8BA4F9'],
        ['#919191', '#3D4975'],
      ],
    });
  }
}

function renderComponent() {
  $(() => {
    $('.js-chart').each((index, node) => {
      const donutChart = new DonutChart($(node));
      return donutChart;
    });
  });
}

renderComponent();
