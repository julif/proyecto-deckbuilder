function make_draggable(){
  //draggable
  $('.drag').draggable();
  $('.draggables').draggable({delegate: 'button', placeholder: true});
  $('.draghandle').draggable({handle: '.handle', placeholder: true});
  $('.dragdrop').draggable({
    revert: true,
    placeholder: true,
    droptarget: '.drop',
    drop: function(evt, droptarget) {
      var currentID = evt.target.id;/*- returns  the id. */
      var currentVALUE = evt.target.attributes.cardvalue.value;

      $(this).appendTo(droptarget).draggable('destroy');
      console.log(currentVALUE);//ejecuta el codigo
      pv = pv - currentVALUE;
      document.getElementById("enemy_bar").style.width = pv+"%";
      if (pv <= 0) { alert("victoria!");}
      //$("#cartas_usadas").append('ID:'+currentID+' Value:'+ currentVALUE +'</br>');
      $("#cartas_usadas").append(" <li id="+currentID+" class='f' cardvalue="+currentVALUE +">ID:"+currentID+" Value:"+currentVALUE+"</li>");
      $('.drop').find('.dragdrop').remove(); // borra los elementos una vez dentro de el drop
      lengths();//averiguar cuantas cartas tienen los div "mazo" y "cartas_usadas".
    }
  });
}//make_draggable