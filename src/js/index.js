// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import '../project/modules/ratings/rating.js'
import '../project/modules/range_slider/multirange.js'


$(document).ready(function($){                 // Start when document ready
    $('.star_block#star-rating').rating(); // Call the rating plugin
    $.mask.definitions['y'] = '[12]';
    $.mask.definitions['m'] = '[01]';
    $.mask.definitions['d'] = '[0-3]';
    $('#masked').mask("d9.m9.y999");
});