function play(){
  document.getElementById('menu').style.display= "none";
  document.getElementById('game').style.display= "inherit";
  /*  AL EMPEZAR EL JUEGO   ---------------------------------------------- */

  document.getElementById("mazo_lista").innerHTML = mazo;

  var i = 0;
   var intervalo_entre_robo = setInterval(myTimer, 150);
   function myTimer() {
    if (i== 3) {  clearInterval(myTimer);  }
    else{
      robar(); 
      i++;
      document.getElementById("mazo_lista").innerHTML = mazo;
    }
   

     
   }
  myFunction_set();
}
    
function acomodar_cartas(){
  var height1 = document.getElementById('aspect_ratio').offsetWidth;
  //contar la cantidad de cartas en mano
  var count = $("#cartas carta").length;
  // console.log(count);
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
} //acomodar_cartas()


function myFunction_set(){
  var height1 = document.getElementById('aspect_ratio').offsetHeight;
  $("body").get(0).style.setProperty("--card-height",  height1/5 +'px');

  $("body").get(0).style.setProperty("--dynamic-card-title-font-size",  height1/40 +'px');

  
  acomodar_cartas();
}

//arrays
// ---------------------------------------------------------------------------------------------------
  var enemigos = [
  { nombre: 'enemigo 1', id: "enemy_1", puntos_de_vida: 1,puntos_de_vida_game: 1, status: "vivo",},
    { nombre: 'enemigo 2', id: "enemy_2", puntos_de_vida: 2, puntos_de_vida_game: 2,status: "vivo",},
    { nombre: 'mini-boss', id: "enemy_3", puntos_de_vida: 3, puntos_de_vida_game: 3,status: "vivo",}
  ];

  var cartas = [
    { nombre: 'carta 1', id: "carta_1" },
      { nombre: 'carta 2', id: "carta_2" },
      { nombre: 'carta 3', id: "carta_3"}
    ];




     // crear el array  de mazo y usados ------------------
 mazo = [ ];
 usados = [ ];



  var mazo =  ["carta_1", "carta_2", "carta_3"];


  var enemigos_en_tablero = [];
 // ---------------------------------------------------------------------------------------------------
 // agregar a los enemigos en el array "enemigos_en_tablero"
   agregar_enemigos_a_tablero("enemy_1");
  agregar_enemigos_a_tablero("enemy_2"); 
   // mostrar enemigos en el tablero
   enemigos_en_tablero.forEach(mostrar_enemigo_en_tablero);
// ---------------------------------------------------------------------------------------------------
 function agregar_enemigos_a_tablero(id){
    var enemigo = enemigos.find(enemigo => enemigo.id === id);
    enemigos_en_tablero.push(enemigo);
  }
  function mostrar_enemigo_en_tablero(enemigo, index) {
    
    document.getElementById("enemigos").innerHTML += " <enemigo id='"+ enemigo.id +"' > <div class='carta_enemiga_contenedor'><div id='"+ enemigo.id +"_nombre'  class='personaje_nombre' > "+ enemigo.nombre +"</div> <div class='carta_enemiga'> <div id='dd'> </div></div><div id='"+ enemigo.id +"_vida' class='personaje_vida' ></div></div></enemigo>";
    document.getElementById(enemigo.id +"_vida").innerHTML += "<div id='" +enemigo.id+"_puntos_vida' class='personaje_puntos_vida'> "+enemigo.puntos_de_vida +"</div>";
    document.getElementById(enemigo.id +"_vida").innerHTML += "<div id='" +enemigo.id+"_vida_barra' class='personaje_vida_barra' ></div>";
  

  
  }
    
  //------------
  //a = id del enemigo
  function reducir_vida_rival(a) {
    var enemigo = enemigos_en_tablero.find(enemigo => enemigo.id === a);
    if (enemigo.puntos_de_vida > 0) {



      enemigo.puntos_de_vida = enemigo.puntos_de_vida - 1;


      var cositas= enemigo.id +"_puntos_vida";
      document.getElementById(cositas).innerHTML =  enemigo.puntos_de_vida;

       var porcentaje_pdv= parseInt(enemigo.puntos_de_vida)/parseInt(enemigo.puntos_de_vida_game)*100;

       console.log( "enemigo.puntos_de_vida: " + enemigo.puntos_de_vida );
       console.log( "enemigo.puntos_de_vida_game: " + enemigo.puntos_de_vida_game );
       console.log( "porcentaje_pdv: " +porcentaje_pdv );

      document.getElementById( enemigo.id + "_vida_barra").style.width =  porcentaje_pdv +"%"; 





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
      var carta = cartas.find( carta => carta.id === carta_id);
      carta_modal(carta);
      
     });
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
      if ( resultadoY > -5 &&  resultadoY < 5 ) { 
        event_target = event.target;
        carta_id =  event.target.id; 
        var carta = cartas.find( carta => carta.id === carta_id);
        carta_modal(carta);

      return} 
    
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

 function carta_modal(carta) {
  $("#modal_text").html( carta.nombre ); 
  $(event_target).addClass("clickeado"); 
  document.getElementById('modal').style.display ="flex"; 

  
 }
      function robar() {



      if (mazo.length > 0) {

        var carta_id =  mazo.pop();
        var carta = cartas.find( carta => carta.id === carta_id);




        document.getElementById('cartas').innerHTML += '  <carta class="carta" id="'+ carta.id +'"> <div class="carta_texto "> '+ carta.nombre +' </div> </carta>';



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
          var carta = cartas.find( carta => carta.id === carta_id);
          carta_modal(carta);
        });
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


