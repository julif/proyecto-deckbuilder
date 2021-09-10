function fullScreen() {
  // Kind of painful, but this is how it works for now
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    if (document.documentElement.requestFullscreen) {
      document.getElementById("contenedor_principal").requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.getElementById("contenedor_principal").mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.getElementById("contenedor_principal").webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.getElementById("contenedor_principal").msRequestFullscreen();
    }
  }else{
    if (document.documentElement.requestFullscreen) {
      document.getElementById("contenedor").requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.getElementById("contenedor").mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.getElementById("contenedor").webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.getElementById("contenedor").msRequestFullscreen();
    }
  }
}
function lock(orientation) {
fullScreen();
screen.orientation.lock(orientation);
}




