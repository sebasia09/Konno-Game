$(document).ready(function(){
	$("#events").hide()



(function loop() {
    var aleatorio = getRandom(60000, 120000);
    console.log(aleatorio)
    setTimeout(function() {
    	if(!event){
    		mostraEvento("barulho");
            
            event = true;
    	} loop(); 
             
    }, aleatorio);
}());


})
var event = false;
// Esse objeto contem todos os eventos, seus títulos, textos, funções dos botões etc
var events = {
	// eventos pra aparecer aleatoriamente

//-----------------------------------------------------------------------------------------------------------
	random : {
		o : {
			title : "O EVENTO",
			text : "Um evento esta acontecendo. Funcionou?",
			btn1 : { 
				text: "Sim",
				f : function(){
						alert("Então blz")
						$(".events").hide()
						event = false;
					}
			},
			btn2 : {
				text : "Não",
				f : function(){
						alert("Vish, então n sei")
						$(".events").hide()
						event = false;
					}
			},
		},
		//-----------------------------------------------------------------------------------------------------------
		barulho : {
			title : "BARULHO",
			text : "Você escuta barulhos nas ventilações da nave, como se algo estivesse andando por ela, deseja investigar?",
			btn1 : {
				text: "Investigar",
				f : function(){
					var sorte = getRandom(0,100)
									if(sorte>=0&&sorte<=20){
										alertText("barulho1")
										character.food += getRandom(3, 7)
									}
									if(sorte>=21&&sorte<=40){
										alertText("barulho2")
										character.hp -= getRandom(1,3)
									}
									if(sorte>=41&&sorte<=60){
										alertText("barulho3")
										radioConectou = true
										atual.radioMessage = "[???] aê 06, encontrei uma nave, mas acabei quebrando a valvula de ventilação dela. -"
										character.oxygen -= getRandom(1, 5)
									}
									if(sorte>=61&&sorte<=80){
										alertText("barulho4")
										character.sanity -= getRandom(1,4)
									}
									if(sorte>=81&&sorte<=100){
										alertText("barulho5")
										character.oxygen -= getRandom(1, 10)
									}
					$(".events").hide()
					event = false;
				}
									
					

			},
			btn2 : {
				text: "Fazer nada",
				f: function(){
					var sorte = getRandom(0,100)
									if(sorte>=0&&sorte<=20){
										alertText("barulho6")	
									}
									if(sorte>=21&&sorte<=40){
										alertText("barulho7")
										character.sanity -= getRandom(1,4)
									}
									if(sorte>=41&&sorte<=60){
										alertText("barulho8")
										character.sanity -= getRandom(5,10)
									}
									if(sorte>=61&&sorte<=80){
										alertText("barulho9")
										radioConectou = true
										atual.radioMessage = "[???] 06, tá ai? Encontrei uma nave mas parece não ter nada. -"
									}
									if(sorte>=81&&sorte<=100){}
					$(".events").hide()
					event = false;
				}
			},
			
		},

		//-----------------------------------------------------------------------------------------------------------


	} // random --------------------------------------------------------------------
		
}


// Cria um evento na tela
function mostraEvento(qual){
	$(".events").show()
	$("#eventtitle").text(events.random[qual].title)
	$("#eventtxt").text(events.random[qual].text)
	$("#eventbtn1").html(events.random[qual].btn1.text)
	$("#eventbtn1").off('click').on('click', events.random[qual].btn1.f)
	$("#eventbtn2").html(events.random[qual].btn2.text)
	$("#eventbtn2").off('click').on('click', events.random[qual].btn2.f)
}

/*
									if(sorte>=0&&sorte<=20){}
									if(sorte>=21&&sorte<=40){}
									if(sorte>=41&&sorte<=60){}
									if(sorte>=61&&sorte<=80){}
									if(sorte>=81&&sorte<=100){}
					*/