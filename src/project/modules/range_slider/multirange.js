$(function() {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 16000,
    values: [5000, 10000],
    slide: function(event, ui) {
      $("#amount").val(ui.values[0].toLocaleString() + "\u20BD - " + ui.values[1].toLocaleString() + "\u20BD");
    }
  });

  $("#amount").val($("#slider-range").slider("values", 0).toLocaleString() + "\u20BD  - " +
    $("#slider-range").slider("values", 1).toLocaleString() + "\u20BD");
});