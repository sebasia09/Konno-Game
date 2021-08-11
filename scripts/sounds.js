// Define o diretorio de cada som e da nome pra eles
var sons = {

	RADIO_NOISE : 'sounds/524205__dylanh-sound__radio-sign-off-squelch.wav',
    RADIO_SIGNAL : "sounds/COMRadio_Crackling radio 1 (ID 0312)_BSB.wav",
    ZIPPER : "sounds/536233__rudmer-rotteveel__zipper-regular-pull-02.wav",
    THEME1 : "sounds/et.wav"
}
// Pega som da classe Sons e toca

 function play(name, volume) {
  var audio = new Audio(sons[name])
  audio.volume = volume;
  audio.play();
}
