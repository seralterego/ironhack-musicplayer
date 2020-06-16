// /* Entendendo LET e CONST */
// let minhaPrimeiraVariavel = 4;
// console.log(minhaPrimeiraVariavel);

// minhaPrimeiraVariavel = "Agora eu quero ser um texto";
// console.log(minhaPrimeiraVariavel);

// const minhaVariavelConstante = "Eu não posso mudar nunca";
// console.log(minhaVariavelConstante);

// /* Manipulando Elementos do HTML */
// const bodyElement = document.querySelector("body");
// console.log(bodyElement);
// console.log(bodyElement.innerHTML);

// bodyElement.onclick = function() {
//   console.log("Cliquei dentro do body do nosso HTML!!!");
//   bodyElement.innerHTML = "<h1>EU FUI CRIADO DINAMICAMENTE PELO JS</h1>";
// };

// /* Manipulando Elementos do HTML - Lógica da aplicação */
// variável para enumerar a música que está sendo tocada
let currentSong = 1;
let songsList = [];

// título da página para o nome da música que está tocando
const titleSong = document.querySelector("h1");
// música que está tocando
const musicInput = document.querySelector("input");
// variável do elemento label do HTML
const labelInput = document.querySelector("label");
// variável do elemento que estará tocando a música
const player = document.querySelector("audio");
// variáveis dos botões de controle
const previousSongButton = document.querySelector("#prev");
const playSongButton = document.querySelector("#play");
const stopSongButton = document.querySelector("#stop");
const nextSongButton = document.querySelector("#next");

// Usando funções na nossa aplicação
function addSongs() {
  // pegar nossas músicas
  songsList = event.target.files;
  // guardar as músicas em uma variável
  playSong();
  // começar a tocar a primeira música
}

function playSong() {
  // pegar o nome da música e colocar no h1 do HTML
  titleSong.innerText = songsList[currentSong - 1].name;
  // colocar a primeira música dentro da tag audio para começar a tocá-la
  const musicURL = URL.createObjectURL(songsList[currentSong - 1]);
  player.setAttribute("src", musicURL);
  player.play();
  // mudar o ícone do botão play para o ícone pause
  playSongButton.innerText = "⏸";
  // fazendo o label sumir após inserir o arquivo
  labelInput.style.display = "none";
  // ao clicar, chama a função que pausa a música
  playSongButton.onclick = pauseSong;
}

function pauseSong() {
  // pausar a música
  player.pause();
  // mudar o ícone do botão pause para o ícone play
  playSongButton.innerText = "▶";
  // permitir que ao clicar novamente, a música volte a tocar
  playSongButton.onclick = continueSong;
}

function continueSong() {
  player.play();
  // mudar o ícone do botão play para o ícone pause
  playSongButton.innerText = "⏸";
  // ao clicar, chama a função que pausa a música
  playSongButton.onclick = pauseSong;
}

function stopSong() {
  // parar a música e fazer ela começar do zero
  player.pause();
  player.currentTime = 0; //volta ao início do timer
  // mudar o ícone de pause para o ícone de play ao clicar no stop
  playSongButton.innerText = "▶";
}

function nextSong() {
  // incrementa a variável com + 1 para ir para a próxima música
  currentSong = currentSong + 1;
  // verifica se o número da música atual for maior do que a quantidade de músucas carregadas, volte ao início do array
  if (currentSong > songsList.length) {
    currentSong = 1;
  }
  // chama a função playSong para tocar a próxima música
  playSong();
}

function previousSong() {
  // incrementa a variável com + 1 para ir para a próxima música
  currentSong = currentSong - 1;
  // verifica se o número da música atual for menor do que a posição da primeira música carregada, vai para o último item do array
  if (currentSong < 1) {
    currentSong = songsList.length;
  }
  // chama a função playSong para tocar a próxima música
  playSong();
}

// musicInput.onchange = function(event) {
//   console.log(event.target.files);
// };

musicInput.onchange = addSongs;
stopSongButton.onclick = stopSong;
nextSongButton.onclick = nextSong;
previousSongButton.onclick = previousSong;

/// /* Entendendo FUNÇÕES */
// function addNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addNumbers(1, 2);
// addNumbers(5, 8);

// /* Estruturas de DADOS */
// número >>> módulo
// console.log(5 % 2); // o resto da divisão de 5 e 2 é 1

// array
// const array = ['maça', 'manga', 'mamão', "melão"];
// console.log(array.length)

// boleanos
// console.log(2 > 0)
// console.log(2 > 0)
