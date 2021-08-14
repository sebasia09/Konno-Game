var atual = {                  // Objetos que definem todas variaveis atuais para serem executadas por outras funções
  radioMessage : "[11224] Sinal SOS recebido : 'ERR0R'",
  radioSound : "RADIO_SIGNAL"
}

var character = {
  gotRadio : false,
  gotRadio2 : false,
  gotLanterna : true,
  gotMapa : false,
  oxygen : 100 + "%"

}
var gameTextAtual= ["intro"]



function saveLocal(){
  console.log("JOGO SALVO")
  localStorage.setItem("character", JSON.stringify(character))
  localStorage.setItem("gameTextAtual", JSON.stringify(gameTextAtual))
}

function getGameData() {
  character = JSON.parse(localStorage.getItem("character"))
  gameTextAtual = JSON.parse(localStorage.getItem("gameTextAtual"))
}

if(localStorage.getItem("character")=== null){
  saveLocal()
  setInterval(saveLocal, 300000)
} else {
  getGameData()
  setInterval(saveLocal, 300000)
}


const gameText = {
  intro : "Você acorda, sua cabeça dói.",
  gotRadio : "Um rádio velho imundo esculhambado.",
  gotRadio2 : "Talvez alguma peça esteja faltando."
  

}
