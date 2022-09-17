









/* lo primero que hace  pagina es mostrar la imagen de guia */


 // al cargar la imagen guia
 $('#imagen_guia').imagesLoaded( function() { 
    // none_flex('precarga_principal','precarga_principal_terminada');
    // resize_contenedor();
    // resize_cartas();

    myFunction_set();
    document.getElementById('div_principal').style.display ="inherit";


   });


/* lo primero que hago en la pagina es la precarga */

  //TODO  reemplazar esto por una precarga 
 //TODO  hacer una imagen de carga transparente 
//  setTimeout(function(){     myFunction_set(); }, 100);
 
 function myFunction_set(){
    var width1 = document.getElementById('imagen_guia').offsetWidth;
    var height1 = document.getElementById('imagen_guia').offsetHeight;
    
    document.getElementById('div_principal').style.width= width1 +"px";
    document.getElementById('div_principal').style.height= height1 +"px";




    // document.getElementById('div_principal').style.width=  +"150px";
  
    $('.carta').css('height',height1/3.7 +'px');
    // $('.carta').css('boxShadow',0 0 0px 5px black);
    // $('.carta').css('box-shadow', '0 0 0px '+ height1/100 +'px black');
   
    $('.carta').css('box-shadow', ' inset  0 0 0px '+ height1/100 +'px black');
    $('.enemigo').css('height',height1/2.4 +'px');

    // $('.enemigo').css('box-shadow', '0 0 0px '+ height1/100 +'px black');



/* $(".carta").hover(function(){
$(this).css("margin-bottom",  height1/15 +'px');
}, function(){
$(this).css("margin-bottom", "0px");
});
*/





//  $("body").get(0).style.setProperty("--card-height",  height1/20 +'px');

    acomodar_cartas();


  }








document.getElementById('menu_btn').addEventListener('click', function() {
    document.getElementById('menu').style.display ="none";
    document.getElementById('game').style.display ="inherit";
  }, false);

//TODO crear funcion para ir a seccion



  document.getElementById('btn_robar').addEventListener('click', function() {
    document.getElementById('mano').innerHTML += '  <carta class="carta" id="carta_2"> carta </carta>';
    myFunction_set();


    var timer;
var touchDuration = 115;
var long_touch = false;
$('carta').draggable({
  appendTo: "body",
  containment: "window",
  cursor: "move",
  helper: "clone",
  revert: true,
  revertDuration: 0
});

$('carta').click(function(){    event_target = event.target;  
  carta_id =  event.target.id;  $('#modal').css("display", "flex");   $("#modal_text").html( carta_id ); });


 }, false);




var margin;








 
  //! arrays del juego
//arrays
// ---------------------------------------------------------------------------------------------------
var enemigos = [
  { nombre: 'enemigo 1', id: "enemy_1", puntos_de_vida: 3, status: "vivo",},
  { nombre: 'enemigo 2', id: "enemy_2", puntos_de_vida: 5, status: "vivo",},
  { nombre: 'mini-boss', id: "enemy_3", puntos_de_vida: 3, status: "vivo",}
];
var enemigos_en_tablero = [];
// ---------------------------------------------------------------------------------------------------
// agregar a los enemigos en el array "enemigos_en_tablero"
agregar_enemigos_a_tablero("enemy_1"); 
// agregar_enemigos_a_tablero("enemy_2");
// mostrar enemigos en el tablero
enemigos_en_tablero.forEach(mostrar_enemigo_en_tablero);
// ---------------------------------------------------------------------------------------------------
function agregar_enemigos_a_tablero(id){
  var enemigo = enemigos.find(enemigo => enemigo.id === id);
  enemigos_en_tablero.push(enemigo);
}
function mostrar_enemigo_en_tablero(enemigo, index) {document.getElementById("enemigos").innerHTML += " <enemigo id='"+ enemigo.id +"' class='enemigo' > "+ enemigo.nombre +"</br>"+ enemigo.puntos_de_vida +" </enemigo>";}
 
//------------
//a = id del enemigo
function reducir_vida_rival(a) {
  var enemigo = enemigos_en_tablero.find(enemigo => enemigo.id === a);
  if (enemigo.puntos_de_vida > 0) {
    enemigo.puntos_de_vida = enemigo.puntos_de_vida - 1;
    document.getElementById(enemigo.id).innerHTML = enemigo.nombre +"</br>"+ enemigo.puntos_de_vida;
    event_target.remove();
    if (enemigo.puntos_de_vida == 0){
      document.getElementById(enemigo.id).style.backgroundColor="#282930";
      // document.getElementById(enemigo.id).style.backgroundBlendMode="saturation";
      enemigo.status= "muerto";
      // document.getElementById(enemigo.id).remove();
    }
    /* console.log(enemigos_en_tablero) */
    var enemigos_vivos = enemigos_en_tablero.filter(enemigo => enemigo.status === "vivo");
 
    //console.log(enemigos_vivos.length) ; 
    if( enemigos_vivos.length == 0){ setTimeout(function(){ 
      document.getElementById('game').style.display ="none";
    document.getElementById('victoria').style.display ="flex";
    
    
    }, 500);}
  }
}
// ---------------------------------------------------------------------------------------------------
// ------------------------ dragg and drop para computadora ------------------------------------------
// ---------------------------------------------------------------------------------------------------
var event_target;
var carta_id;


//timer para click mobile
var timer;
var touchDuration = 115;
var long_touch = false;
$('carta').draggable({
  appendTo: "body",
  containment: "window",
  cursor: "move",
  helper: "clone",
  revert: true,
  revertDuration: 0
});
//click
$('carta').click(function(){    event_target = event.target;  
  carta_id =  event.target.id;  $('#modal').css("display", "flex");   $("#modal_text").html( carta_id ); });
//dragg start
$( "body" ).on( "dragstart",  function( event, ui ) {   event.target.style.opacity=0 ; 
  event_target = event.target;  
  carta_id =  event.target.id;
  firstY = event.clientY;  
  firstX = event.clientX;  
  long_touch = false; timer = setTimeout(function () {long_touch = true;}, touchDuration);  });
//dragg stop
$( "body" ).on( ".carta dragstop", function( event, ui ) { event.target.style.opacity=1; ui.helper.remove(); if (timer) { clearTimeout(timer);} if(  long_touch == false ){ 
  currentY = event.clientY; 
  resultadoY = firstY-currentY; 
  currentX = event.clientX; 
  resultadoX = firstX-currentX; 
  /*  si el mouse se mueve mas de 5 pixeles */ 
  if ( resultadoY > -5 &&  resultadoY < 5 ) {    $('#modal').css("display", "flex");  return} 
  if ( resultadoX > -5 &&  resultadoX < 5 ) {     $('#modal').css("display", "flex");  return} 

} else if(  long_touch == true ){}
 });
//drop
$("enemigo").droppable({   drop: function(event, ui) {  reducir_vida_rival( event.target.id);  acomodar_cartas();}   }); 



// fullscren.js
function fullScreen() {
  // Kind of painful, but this is how it works for now
  if (document.documentElement.requestFullscreen) {
  document.getElementById("contenedor").requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) {
    document.getElementById("contenedor").mozRequestFullScreen();
  } else if (document.documentElement.webkitRequestFullscreen) {
    document.getElementById("contenedor").webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) {
    document.getElementById("contenedor").msRequestFullscreen();
  }
}
function lock(orientation) {
fullScreen();
 screen.orientation.lock(orientation);
}








function acomodar_cartas(){




var height1 = document.getElementById('aspect_ratio').offsetWidth;


//contar la cantidad de cartas en mano
var count = $("#mano carta").length;

console.log(count);

switch (count) {
case 0:
margin = 5;
break;
case 1:
margin = 5;
break;
case 2:
margin =5 ;

break;
case 3:
margin = 5 ;
break;
case 4:
margin = 5 ;
break;
case 5:
margin =  - height1/200 ;
break;
case 6:
margin =  - height1/64 ;
break;
case 7:
margin =  - height1/47 ;
break;
case 8:
margin =  - height1/44 ;
break;
case 9:
margin =  - height1/40 ;
break;
case 10:
margin =  - height1/44 ;
}

// $('.carta').css('marginRight', margin +'px');
// $('.carta').css('marginLeft', margin +'px');

$("body").get(0).style.setProperty("--cards-gap", margin +'px');


}


document.getElementById('modal').addEventListener('click', function() {
    document.getElementById('modal').style.display ="none";
  }, false);
