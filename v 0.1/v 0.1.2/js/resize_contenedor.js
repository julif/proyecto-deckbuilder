// al cambiar de tamaño la ventana
 $(document).ready(function(){ $(window).resize(function(){  resize_contenedor(); }); }); 
  
function resize_contenedor(){
  //contenedor principal
  var div_principal_width = document.getElementById('div_principal_mockup_img').offsetWidth;
  var div_principal_height = document.getElementById('div_principal_mockup_img').offsetHeight;
  document.getElementById('div_principal').style.width=  div_principal_width +"px";
  document.getElementById('div_principal').style.height= div_principal_height +"px";
  // 16:9
  var aspect_ratio_width = document.getElementById('aspect_ratio_mockup_img').offsetWidth;
  var aspect_ratio_height = document.getElementById('aspect_ratio_mockup_img').offsetHeight;
  $('.aspect_ratio').css('width',aspect_ratio_width +'px');
  $('.aspect_ratio').css('height', aspect_ratio_height +'px');
}