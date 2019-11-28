// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import '../project/modules/forms/__input/_masked/jquery.maskedinput.js'

$(document).ready(function($){                 // Start when document ready
    $('.star_block#star-rating').rating(); // Call the rating plugin
    $('#masked').mask("99/99/9999");
});