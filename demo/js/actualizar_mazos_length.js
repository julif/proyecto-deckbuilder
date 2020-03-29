function actualizar_mazos_lengths(){
    var mazolength= $("#mazo").find(".hand_card").length ;
    var manolength= $("#mano").find(".dragdrop").length ;
    var piladedescartelength= $("#pila_de_descarte").find(".pila_descarte_card").length ;

    document.getElementById("mazo_length").innerHTML= mazolength;
    document.getElementById("mano_length").innerHTML= manolength;
    document.getElementById("pila_descarte_length").innerHTML= piladedescartelength; 
}