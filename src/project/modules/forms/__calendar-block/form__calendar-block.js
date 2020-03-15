$(document).ready(function($){  
    $('.form__calendar-block .small-input').on( "click", function(){
        $('.calendar-dropdown').show();
        $('.datepicker-here').on( "click", function(){
            $('.form__calendar-block .small-input').val(' ');
            if($datepicker.selectedDates[0]){
                $('.form__calendar-block .small-input').eq(0).val(formatDate($datepicker.selectedDates[0]));
            } 
            if ($datepicker.selectedDates[1]){
                $('.form__calendar-block .small-input').eq(1).val(formatDate($datepicker.selectedDates[1]));
            }      
        });
      
        
    });
    $('.form__calendar-block span[data-action="add"]').on( "click", function(){
        $('.calendar-dropdown').hide();
    });
    
    $datepicker = $('.datepicker-here').datepicker().data('datepicker');
    
}); 

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
  
    return dd + '.' + mm + '.' + yy;
  }
