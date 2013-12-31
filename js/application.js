$(document).ready(function() {
 
  $("#slide").owlCarousel({
      autoPlay: 8000,
      pagination: false,
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
});
 
    
$(document).ready(function(){

        $('#areaCliente').show();
        $('#areaCliente').css({margin: "-125px 0 0 -45px" });
        document.getElementById("ocultar").style.display="none";
        $('#mostrar').click(function(event){ // MOSTRA ELEMENTO
        event.preventDefault();
        $("#areaCliente").show("fast");
        $('#areaCliente').css({backgroundColor: "#ef6923", color: "#fff" });
        $('#areaCliente').animate({marginTop: "-15px"});
        document.getElementById("mostrar").style.display="none";
        document.getElementById("ocultar").style.display="";});

        $('#ocultar').click(function(event){ //OLCUTA
        event.preventDefault();
        $("#areaCliente").show("fast");
        $('#areaCliente').css({backgroundColor: "#ef6923", color: "#fff" });
        $('#areaCliente').animate({marginTop: "-125px"});
        document.getElementById("ocultar").style.display="none";
        document.getElementById("mostrar").style.display="";
        });
        });

    
    
});

$(document).ready(function() {
 
  $("#clientes").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      pagination: false,
      navigation: true,
      navigationText: ["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$(document).ready(function(){ 
    //Hide (Collapse) the toggle containers on load 
    $(".toggle_container").hide();  
    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state) 
    $("h2.trigger").click(function(){ 
        $(this).toggleClass("active").next().slideToggle("fast"); 
        return false; //Prevent the browser jump to the link anchor 
    }); 
});


$(document).ready(function(){ 
    //Hide (Collapse) the toggle containers on load 
    $(".especialidades_container").hide();  
    //Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state) 
    $("h2.especialidades").click(function(){ 
        $(this).toggleClass("active").next().slideToggle("fast"); 
        return false; //Prevent the browser jump to the link anchor 
    }); 
});


$(document).ready(function() {
 
  $("#testemunhos").owlCarousel({
    autoPlay : 3000,
    stopOnHover : true,
    navigationText: ["<i class='icon-arrow-left testemunhos-arrow'></i>","<i class='icon-arrow-right testemunhos-arrow'></i>"],
    navigation:true,
    paginationSpeed : 1000,
    goToFirstSpeed : 2000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"fade"
  });
 
});


