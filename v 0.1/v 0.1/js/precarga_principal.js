/* precarga principal  */
function precarga_principal(){
   // al cargar todas las imagenes
   $('#precargador_principal').imagesLoaded( function() { 
     none_flex('precarga_principal','precarga_principal_terminada');
    });
}