//version
$("div.version").html("v 0.2.25.1");





function splash_img_loaded(){
    loaded_slpash_img = true;
    //console.log( " imagen del splash: "+loaded_slpash_img);
    //setTimeout(fadediv, 2000, splash, splash_art);
 }
 var img_splash_counter = 0;
 iniciar_splash();
 function iniciar_splash() {
   var myVar = setInterval(myTimer, 3000)
   function myTimer() {
     if (img_splash_counter>10) { 
       // alert("la aplicacion esta tomando demasiado tiempo para cargar, actualizando la app");
       // location.reload();
       window.location.reload(false); 
     }
     if (loaded_slpash_img == true) { fadediv(splash, splash_art); clearInterval(myVar);}
     else if(loaded_slpash_img == false){
       //alert(" recargar ");
       img_splash_counter++;
       console.log("carga de img_splash fallido N:"+img_splash_counter);
       iniciar_splash();
     }
   }
 }//iniciar_splash