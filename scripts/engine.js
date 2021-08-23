var atual = {                  // Objetos que definem todas variaveis atuais para serem executadas por outras funções
  radioMessage : "[11224] Sinal SOS recebido : 'ERR0R'",
  radioSound : "RADIO_SIGNAL"
}

var character = {
  gotRadio : false,
  gotAntena : false,
  gotRadio2 : false,
  gotLanterna : true,
  gotMapa : false,
  oxygen : 100,
    hp : 100,
  food : 0,
  sanity: 100,

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
  gotRadio2 : "Talvez alguma peça esteja faltando.",
  signal1: "A mensagem estava indecifrável",
    barulho1 : "Você encontrou um rato morto, sua carne parece deliciosa.",
    barulho2 : "Um rato demoniaco estava andando nos canos, ele te ataca, mas você consegue mata-lo.",
    barulho3 : "Antes de abrir a ventilação, você ouve canos estourando, seu rádio captou um sinal.",
    barulho4 : "Você abre a ventilação e vê um vulto passando.",
    barulho5 : "Você tenta abrir a ventilação, mas acaba danificando os canos de O2.",
      barulho6 : "Os barulhos pararam, provavelmente era só um inseto.",
      barulho7 : "Os barulhos continuaram por um tempo, mas pararam depois de alguns minutos.",
      barulho8 : "Os barulhos continuaram por um longo tempo.",
      barulho9 : "Os barulhos pararam, mas seu rádio captou um sinal de alguem.",
      barulho10 : "Os barulhos ficaram mais fortes, um cano de O2 acabou estourando.",
}

function getRandom(max, min){
   return Math.floor(Math.random() * (max - min + 1)) + min;
}