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
        $(this).appendTo(droptarget).draggable('destroy');
        console.log(currentID);//ejecuta el codigo
        $('.drop').find('.dragdrop').remove(); // borra los elementos una vez dentro de el drop
    }
});
}//make_draggable
