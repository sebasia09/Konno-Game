
if(localStorage.getItem("gameTextAtual")=== null){
  saveLocal()
} else {
  getGameData()
}

$(document).ready(function(){
	for(var f=0; f <gameTextAtual.length; f++){
    alertText(gameTextAtual[f], 1)
  }
})


function alertText(qual, a) {
	if(a===undefined){
		gameTextAtual.push(qual)
	} else;
	

	$("#alerttxt").html(gameText[qual] +"<br><br>"+ $("#alerttxt").html())
}


//for(var f=0; f <gameTextAtual.length; f++){
//alertText(gameTextAtual[f], 1)
// }