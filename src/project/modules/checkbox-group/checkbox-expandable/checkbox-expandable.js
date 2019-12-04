$(document).ready(function($){                 
    let expandElem = $( ".expandable h3, .expandable .material-icons" );
    expandElem.click(function(){ 
        $(this).parent().find( ".checkbox-elements" ).toggle(); 
        $(this).parent().find( ".material-icons" ).toggleClass('up-arrow');
        $(this).parent().find( ".material-icons" ).toggleClass('down-arrow');
        
	  });
  
});