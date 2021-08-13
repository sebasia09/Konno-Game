var atual = {                  // Objetos que definem todas variaveis atuais para serem executadas por outras funções
  radioMessage : "[11224] Sinal SOS recebido : 'ERR0R'",
  radioSound : "RADIO_SIGNAL"
}

var character = {
  gotRadio : false,
  gotLanterna : true,
  gotMapa : false,
  oxygen : 100 + "%"
}


function saveLocal(){
  alert('jogo salvo')
  localStorage.setItem("character", JSON.stringify(character))
}

function getGameData() {
  character = JSON.parse(localStorage.getItem("character"))
}

if(localStorage.getItem("character")=== null){
  saveLocal()
  setInterval(saveLocal, 60000)
} else {
  getGameData()
  setInterval(saveLocal, 60000)
}

