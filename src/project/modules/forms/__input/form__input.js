import 'item-quantity-dropdown/src/index.js'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css'
import './_dropdown/_multiple-dropdown'
import './_masked/jquery.maskedinput'


$(document).ready(function($){                 


    $('.bedroom .iqdropdown').multipleDropdown({
        selectionText: ['спальня', 'кровать', 'ванная комната'],
        textPlural: ['спальни', 'кровати', 'ванные комнаты'],
        textDefault: ['спален', 'кроватей', 'ванных комнат'],
       
    });
    $('.guests .iqdropdown').iqDropdown({
        selectionText: 'гость',
        textPlural: 'гостя',
        textDefault: 'Cколько гостей',
       
    });

    $.mask.definitions['y'] = '[12]';
    $.mask.definitions['m'] = '[01]';
    $.mask.definitions['d'] = '[0-3]';
    $('#masked').mask("d9.m9.y999");
  
});