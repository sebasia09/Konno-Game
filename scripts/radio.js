// Faz com que o radio seja movido ao puxar a luz
var janelah = $(window).height();
var janelaw = $(window).width();
var isDown = false;
var offset = [0,0];
var mousePosition;
var radio;
var radioluz;
$(document).ready(function() {
  if(character.gotRadio){
    $("#getRadio").hide()
     $("#getAntena").click(function(){
        radioConectou = true;
        $("#getAntena").hide()
     })
  } else{
  $("#nav4").hide()

      $(".getRadio").click(function(){
          character.gotRadio = true;
          $("#nav4").show()
          $("#getRadio").hide()
          alertText("gotRadio")
          play("ZIPPER", 1)
      })

  }
  
radio = document.getElementById("radio")
radioluz = document.getElementById("radiolight")

radioluz.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        radio.offsetLeft - e.clientX,
        radio.offsetTop - e.clientY
    ];
   
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };

        if(mousePosition.x< janelaw-10 && mousePosition.x > 10) {
          radio.style.left = (mousePosition.x + offset[0]) + 'px';
        }
      
        if(mousePosition.y< janelah-100 && mousePosition.y > 10)
        radio.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
})
})

//

$(document).ready(function(){
    $("#radiobtn").click(function(){
        apertaBotaoRadio()
        play("RADIO_NOISE",1)
    })
    closeRadio()                       
})

////
var i = 0;
var txtRadio = " "
var speed = 50;;
var radioAberto = false
var radioConectou = false;


function retornaTempoTexto() {      // retorna o tempo que o texto leva pra passar com o "efeitoRadio()" e adiciona um leve delay
  return txtRadio.length * (speed * 2)
}
function efeitoRadio() {            // mostra o texto "txt" no radio letra por letra
      if (i < txtRadio.length) {
    var radiodisplay = document.getElementById("radiodisplay")
    radiodisplay.innerHTML += txtRadio.charAt(i);
    i++;
    setTimeout(efeitoRadio, speed);

  }
  } 

function criaMensagemRadio(texto) { // Zera o contador de letras do efeitoRadio, recebe o novo texto e aplica no radioDisplay
    i=0;
    txtRadio = texto 
document.getElementById("radiodisplay").innerHTML += "<br>"
efeitoRadio()

  }

function apertaBotaoRadio() {          // Se !radioConectou, mostra FAIL | Se radioConectou, mostra atual.radioMessage e toca atual.radioSound
  play("RADIO_NOISE", 1)
  criaMensagemRadio(". . . Tentando Conectar . . .")
  if(!radioConectou) {                            
    setTimeout(function(){
      radioluz.style.backgroundColor = "yellow";
      document.getElementById("radiobtn").disabled = true;}, 1);

    setTimeout(function(){
      if(character.gotRadio2==false){
        alertText("gotRadio2")
        character.gotRadio2 = true;
      }
      radioluz.style.backgroundColor = "red" ; document.getElementById("radiobtn").disabled = false; criaMensagemRadio("FAIL"); play("RADIO_NOISE", 1)}, retornaTempoTexto());
      play("RADIO_NOISE", 1)
  } if(radioConectou) {
      radioluz.style.backgroundColor = "yellow";
      document.getElementById("radiobtn").disabled = true;

        setTimeout(function(){
          radioluz.style.backgroundColor = "green";  
          document.getElementById("radiobtn").disabled = false; 
          criaMensagemRadio(atual.radioMessage);
          retornaTempoTexto(); 
          play(atual.radioSound, 1)

            setTimeout(function(){
              radioluz.style.backgroundColor = "red"; 
              play("RADIO_NOISE", 1)
              radioConectou = false;
            }, retornaTempoTexto());
        }, retornaTempoTexto()); 
    }
}
  







function openRadio() {             // Mostra o rádio
  if(!radioAberto){
    $("#radio").show()
  play("RADIO_NOISE", 1);
  radioAberto = true;
  } else {
    closeRadio()
    play("RADIO_NOISE", 1);
    radioAberto = false;
  }
  
} 
function closeRadio() {            // Esconde o radio
  $("#radio").hide()
}



