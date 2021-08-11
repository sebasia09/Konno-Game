$(document).ready(function() {
	$("#intro1").click(function(){

	play("THEME1", 0.5)
	setTimeout(function(){
		fechaIntro()
	},4400)
		
	})
	$(".ingame").hide()
	closeNav()

	
		
})
function abreIntro() {
	$(".intro").show()
	$(".intro").css("width", "100%")
	$(".ingame").css("marginLeft", "100%")
	setTimeout(function(){
		$(".ingame").hide()
	}, 3000)
}
function fechaIntro() {
	$(".ingame").show()
	$(".intro").css("width", "0%")
	$(".ingame").css("marginLeft", "0%")
	setTimeout(function(){
		$(".intro").hide()
	}, 3000)

}

