$(document).ready(function(){
	closeFlashLight()
	$("#nav5").click(function(){
		if(!flashAberta){
			openFlashLight()
		} else {
			closeFlashLight()
		}
		

$(".hoverable").mouseover(function(){
  cursor.style.width = 300 + "px"
  cursor.style.height = 300 + "px"
})

$(".hoverable").mouseout(function(){
  cursor.style.width = 100 + "px"
  cursor.style.height = 100 + "px"
})


$(".nohoverable").mouseover(function(){
	$(".flashlight").hide()
	cursor.style.width = 20 + "px"
  cursor.style.height = 20 + "px"
   $("#cursor").css("z-index", "100")
	
  $("#cursor").css("background-color", "initial")
})

$(".nohoverable").mouseout(function(){
 	if(flashAberta){
 		$(".flashlight").show()
	cursor.style.width = 100 + "px"
  cursor.style.height = 100 + "px"
  
  $("#cursor").css("background-color", "white")
  $("#cursor").css("z-index", "2")
 	}
})



      var cursor = document.getElementById("cursor");

	})
})
var flashAberta = false;

function openFlashLight(){
	$(".flashlight").show()
	cursor.style.width = 100 + "px"
  cursor.style.height = 100 + "px"
  
  $("#cursor").css("background-color", "white")
  $("#cursor").css("z-index", "2")
	flashAberta = true;

  
}
function closeFlashLight(){
	$(".flashlight").hide()
	cursor.style.width = 20 + "px"
  cursor.style.height = 20 + "px"
   $("#cursor").css("z-index", "100")
	
  $("#cursor").css("background-color", "initial")
	flashAberta = false;
  
}


//-------------------


document.addEventListener("mousemove", function(e){
  var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px"
    cursor.style.top = y + "px"
   
})



