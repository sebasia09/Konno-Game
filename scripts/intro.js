$(document).ready(function() {
	$("#intro1").click(function(){
	$("#intro1").hide()
	play("THEME1", musicVolume)
	setTimeout(function(){
		fechaIntro()
	},4400)
		
	})
	$(".ingame").hide()
	closeNav()

	
		
})
function abreIntro() {
	$(".intro").show()
	$("#intro1").show()
	$(".intro").css("width", "100%")
	$(".ingame").css("marginLeft", "100%")
	setTimeout(function(){
		$(".ingame").hide()
	}, 10000)
}
function fechaIntro() {
	$(".ingame").show()
	$(".intro").css("width", "0%")
	$(".ingame").css("marginLeft", "0%")
	setTimeout(function(){
		$(".intro").hide()
	}, 10000)

}

