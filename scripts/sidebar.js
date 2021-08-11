

$(document).ready(function() {
	$("#navopenbtn").click(openNav())
	$("#navclosebtn").click(closeNav())
  $("#nav4").click(function(){closeNav(); openRadio()})


})

function openNav() {               // Mostra a navegação (sidebar)
  $(".nav").css("width", "250px")
  $(".main").css("marginLeft", "250px")
  play("ZIPPER", 1)
}

function closeNav() {            // Fecha a navegação
   $(".nav").css("width", "0")
   $(".main").css("marginLeft", "0")
}
