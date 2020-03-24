function re_mezclar(){
	//mezclar cartas_usadas y mostrarlo en el div "mazo"
    var mazo_re_mezclado = document.getElementById("cartas_usadas").innerHTML;
    var elements = $("#cartas_usadas").find(".f");
    var data = Array();
    for(var i = 0; i < elements.length; i++){
      //data.push(elements[i].innerHTML);
      //.attributes.cardvalue.value;
      data.push("<li class='f' id='"+elements[i].id+"' cardvalue='"+elements[i].attributes.cardvalue.value+"'>"+elements[i].innerHTML+"</li>");
    }
    var mazo_mezclado = data;
    mazo_mezclado.sort(function() {return Math.random() - 0.5});
    document.getElementById("mazo").innerHTML = mazo_mezclado.join('');

    document.getElementById("cartas_usadas").innerHTML=" ";//borra la lista de cartas usadas
    lengths();//averiguar cuantas cartas tienen los div "mazo" y "cartas_usadas".
    robar();
}// funcion re_mezclar();