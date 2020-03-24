function lengths(){
    //averiguar cuantas cartas tiene el div "mazo" y mostrarlo.
    var mazolength = $("#mazo").find(".f").length;
    document.getElementById("mazo_length").innerHTML = mazolength; 

    //averiguar cuantas cartas tiene el div "cartas_usadas" y mostrarlo.
    var usadaslength= $("#cartas_usadas").find(".f").length ;
    document.getElementById("usadas_length").innerHTML = usadaslength;

     //averiguar cuantas cartas tiene el div "mazo" y mostrarlo.
    var manolength = document.getElementsByClassName("dragdrop").length;
    document.getElementById("mano_length").innerHTML = manolength; 
}