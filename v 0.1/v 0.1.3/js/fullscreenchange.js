document.addEventListener('fullscreenchange', (event) => {
  if (document.fullscreenElement) {
    console.log(`Element: ${contenedor} entered full-screen mode.`);
    document.getElementById('full').style.display= "none";
  } else {
    console.log('Leaving full-screen mode.');
    document.getElementById('full').style.display= "inherit";
  }
});