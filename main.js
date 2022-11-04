function play(){

  document.getElementById('menu').style.display= "none";
  document.getElementById('game').style.display= "inherit";



  var i = 0;
  var intervalo_entre_robo = setInterval(myTimer, 300);
  function myTimer() {
    robar(); 
    i++;
    if (i== 3) {  }
  }


  myFunction_set();

}
    





function acomodar_cartas(){




var height1 = document.getElementById('aspect_ratio').offsetWidth;


//contar la cantidad de cartas en mano
var count = $("#cartas carta").length;

console.log(count);

switch (count) {
case 0:
margin = 0;
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
margin =  5;
break;
case 6:
margin =  5 ;
break;
case 7:
margin =  3 ;
break;
case 8:
margin =  - 2 ;
break;
case 9:
margin =  - 5 ;
break;
case 10:
margin =  - 10;
}

// $('.carta').css('marginRight', margin +'px');
// $('.carta').css('marginLeft', margin +'px');

$("body").get(0).style.setProperty("--cards-gap", margin +'px');


}

function myFunction_set(){

  var height1 = document.getElementById('aspect_ratio').offsetHeight;
  $("body").get(0).style.setProperty("--card-height",  height1/5 +'px');

  acomodar_cartas();

}




      //arrays
  // ---------------------------------------------------------------------------------------------------
  var enemigos = [
  { nombre: 'enemigo 1', id: "enemy_1", puntos_de_vida: 1, status: "vivo",},
    { nombre: 'enemigo 2', id: "enemy_2", puntos_de_vida: 2, status: "vivo",},
    { nombre: 'mini-boss', id: "enemy_3", puntos_de_vida: 3, status: "vivo",}
  ];




  var mazo =  ["carta_1", "carta_2", "carta_3"];


  var enemigos_en_tablero = [];
 // ---------------------------------------------------------------------------------------------------
 // agregar a los enemigos en el array "enemigos_en_tablero"
  // agregar_enemigos_a_tablero("enemy_1");
  agregar_enemigos_a_tablero("enemy_2"); 
   // mostrar enemigos en el tablero
   enemigos_en_tablero.forEach(mostrar_enemigo_en_tablero);
// ---------------------------------------------------------------------------------------------------
 function agregar_enemigos_a_tablero(id){
    var enemigo = enemigos.find(enemigo => enemigo.id === id);
    enemigos_en_tablero.push(enemigo);
  }
  function mostrar_enemigo_en_tablero(enemigo, index) {document.getElementById("enemigos").innerHTML += " <enemigo id='"+ enemigo.id +"' > "+ enemigo.nombre +"</br>"+ enemigo.puntos_de_vida +" </enemigo>";}
    
   
/* var puntos_vida_enemigo = 1;
    document.getElementById("vida_enemiga").innerHTML = puntos_vida_enemigo;

    var puntos_vida_enemigo2 = 1;
    document.getElementById("vida_enemiga2").innerHTML = puntos_vida_enemigo2;

 */


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
        document.getElementById('modal_victoria').style.display ="flex";
      
      }, 300);}
    }
  }




 // ---------------------------------------------------------------------------------------------------
    // ------------------------ dragg and drop para computadora ------------------------------------------
    // ---------------------------------------------------------------------------------------------------
    var event_target;
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
    $('carta').click(function(){ 
      event_target = event.target;  
    carta_id =  event.target.id;  
    // $('#modal').css("display", "flex");  
     $("#modal_text").html( carta_id ); $(event.target).addClass("clickeado"); 
      document.getElementById('modal').style.display ="flex"; });
    //dragg start
    $( "body" ).on( "dragstart",  function( event, ui ) {   event.target.style.opacity=0.2 ;  event_target = event.target;  
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
      if ( resultadoY > -5 &&  resultadoY < 5 ) {       event_target = event.target;  
    carta_id =  event.target.id; 

    // $('#modal').css("display", "flex");  
     $("#modal_text").html( carta_id );$(event.target).addClass("clickeado"); 
      document.getElementById('modal').style.display ="flex";;  return} 
      if ( resultadoX > -5 &&  resultadoX < 5 ) {       event_target = event.target;  
    carta_id =  event.target.id;  
    // $('#modal').css("display", "flex");  
     $("#modal_text").html( carta_id );$(event.target).addClass("clickeado"); 
      document.getElementById('modal').style.display ="flex";  return} 
    
    } else if(  long_touch == true ){}
     });
    //drop
    $("enemigo").droppable({   
    
      over: function(event, ui) {  $(this).addClass("enemigo_hover"); },
      out: function(event, ui) {   $(this).removeClass("enemigo_hover"); }, 
      drop: function(event, ui) {  reducir_vida_rival( event.target.id);  $(this).removeClass("enemigo_hover");}  
    
    }); 


































    document.getElementById('modal').addEventListener('click', function(e) {


      if (e.target == this) {
        document.getElementById('modal').style.display ="none";


        $("#cartas").children().removeClass("clickeado");


            }
   
    }, false);





/*     document.getElementById('btn_robar').addEventListener('click', function() { */

 
      function robar() {



      if (mazo.length > 0) {
        document.getElementById('cartas').innerHTML += '  <carta class="carta" id="'+ mazo.pop() +'"> <div class="carta_texto "> texto </div> </carta>';



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
        
        $('carta').click(function(){ 
            event_target = event.target;  
          carta_id =  event.target.id;  
          // $('#modal').css("display", "flex");  
           $("#modal_text").html( carta_id ); $(event.target).addClass("clickeado"); 
            document.getElementById('modal').style.display ="flex"; });


      }

    }



   
 
      
      
    
      
      /*      document.getElementById('cartas').innerHTML += '  <carta class="carta" id="carta_2"> carta </carta>';
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
      */
      
       /* }, false); */




         // fullscren.js
  function fullScreen() {
    // Kind of painful, but this is how it works for now
    if (document.documentElement.requestFullscreen) {
    document.getElementById("contenedor_full").requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.getElementById("contenedor_full").mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.getElementById("contenedor_full").webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.getElementById("contenedor_full").msRequestFullscreen();
    }
}
function lock(orientation) {
  fullScreen();
   screen.orientation.lock(orientation);
}


