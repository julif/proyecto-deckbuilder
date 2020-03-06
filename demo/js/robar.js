function robar(){
  var mazolength= $("#mazo").find(".f").length ;
  if (mazolength >= 1) {
    var id = $('#mazo li:first-child').attr('id'); // id de el primer li
    //var modifier_number = $('#mazo li:first-child').attr('modifier'); // id de el primer li
    var cardvalue = $('#mazo li:first-child').attr('cardvalue'); // id de el primer li

    $('#mazo li:first-child').remove();//quita el primer elemento de mazo
    $("#mano").append('<carta id="'+id+'" cardvalue="'+cardvalue+'" class="dragdrop"  > carta id:'+ id +' value:'+cardvalue+' </carta>');// agregar el nuevo li a la mano
  }
  else if ( mazolength == 0) { re_mezclar(); }

  lengths();//averiguar cuantas cartas tienen los div "mazo" y "cartas_usadas".
  make_draggable();
    
}// funcion robar();