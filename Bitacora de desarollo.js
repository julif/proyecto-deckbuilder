  if (window.innerWidth <= 1500) {} else {openNav();}

  function openNav() { 
    document.body.classList.add("sidenav_open");
    setTimeout(function(){ 
      document.getElementById("Sidenav").style.transition= "0.3s";
    document.getElementById("main").style.transition= "0.3s"; 
    document.getElementById("banner").style.transition= "0.3s"; 
  
  }, 500);
  }
  function closeNav(){ document.body.classList.remove("sidenav_open");}

  $('h2').each(function(){
    document.getElementById("under_banner_menu_ul").innerHTML += "<a id='"+ this.id +"link' href='#' ><li>  " + this.innerHTML +"</li></a> "; 
  });
  
  function goToByScroll(id){
    // Reove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    if (window.innerWidth <= 1200) {  var top_distance = 65; } else { var top_distance = 0; }
    $('html,body').animate({
      // scrollTop: $("#"+id).offset().top},
      scrollTop: $("#"+id).offset().top-top_distance},
      // scrollTop: $("#"+id).offset({ top: 100})  },
      'slow');
    }
    $(".under_banner_menu > ul >  a").click(function(e) { 
      // Prevent a page reload when a link is pressed
      e.preventDefault(); 
      // Call the scroll function
      goToByScroll($(this).attr("id"));        });