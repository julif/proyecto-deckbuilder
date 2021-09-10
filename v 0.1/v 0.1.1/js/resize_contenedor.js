// al cambiar de tamaño la ventana
 $(document).ready(function(){ $(window).resize(function(){  resize_contenedor(); }); }); 
  
function resize_contenedor(){
  // 16:9
  var aspect_ratio_width = document.getElementById('aspect_ratio_mockup_img').offsetWidth;
  var aspect_ratio_height = document.getElementById('aspect_ratio_mockup_img').offsetHeight;
  $('.aspect_ratio').css('width',aspect_ratio_width +'px');
  $('.aspect_ratio').css('height', aspect_ratio_height +'px');
}