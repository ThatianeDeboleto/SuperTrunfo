var carta1 = {
nome:"Luffy",
foto:"https://pbs.twimg.com/profile_images/1099324861493710850/5f9j_cPp_400x400.jpg" ,
  atributos: {
  ataque: 10,
  defesa: 10,
  akumanomi: 9
    }
}
var carta2 = {
     nome: "Shanks",
  foto: "https://i.pinimg.com/originals/ac/73/e0/ac73e0a96f5ef3bbabde03533df4dd7d.jpg",
  atributos: {
  ataque:10,
  defesa:10,
  akumanomi:10
    }
}
var carta3 = {
    nome: "Barba Branca",
  foto: "https://besthqwallpapers.com/Uploads/12-7-2018/59143/thumb2-edward-newgate-4k-pirate-manga-whitebeard.jpg",
  atributos: {
  ataque:10,
  defesa:9,
  akumanomi:10
    }
}
var carta4 = {
    nome: "Ace",
  foto: "https://i.pinimg.com/originals/ac/73/e0/ac73e0a96f5ef3bbabde03533df4dd7d.jpg",
  atributos: {
    ataque:8,
    defesa:8,
    akumanomi:7
    }
}
var carta5 = {
    nome: "Chopper",
 foto:"https://http2.mlstatic.com/D_NQ_NP_693380-MLB43744403020_102020-O.jpg",
  atributos: {
  ataque:7,
  defesa:8,
  akumanomi:8

  }
}
var carta6 = {
     nome: "Barba Negra",
  foto: "https://i.pinimg.com/736x/71/c8/02/71c80234d99d7f4fe9dc6bc8ebebd00a.jpg",
  atributos: {
    ataque:10,
    defesa:9,
    akumanomi:10
    }
}

var carta7 = {
    nome: "Kaido",
  foto: "https://i2.wp.com/loucosporgeek.com.br/wp-content/uploads/2020/12/a2.jpg?resize=780%2C470&ssl=1",
  atributos: {
    ataque:8,
    defesa:9,
    akumanomi:10
    }
}

var carta8 = {
    nome: "Zoro",
 foto:"https://pbs.twimg.com/media/E4MDusNWYAANRuf.jpg",
    atributos: {
    ataque:10,
    defesa:10,
    akumanomi:0
    }
}

var baralho = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8]
var meuBaralho = []

function distribuiCartas(){
    for (let minhasCartas = 0; minhasCartas < 7; minhasCartas++){
        var indiceAleatorio = Math.floor(Math.random() * baralho.length)

        if(indiceAleatorio >= baralho.length && indiceAleatorio >= baralho.length){
        indiceAleatorio = (baralho.length-1)
        }

        meuBaralho.push(baralho.splice(indiceAleatorio, 1)[0]);

    }
}

distribuiCartas()

let cartaMaquina
let cartaJogador
let minhaCarta = document.querySelector('#cartaEscolhida')
let campoJogador = document.querySelector('.cartaJogador')
let campoMaquina = document.querySelector('.cartaMaquina')
let pontos = document.querySelector('.pontuacao')
let versus = document.querySelector('.versus')

pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`


function sortearCarta(){
        numeroCartaMaquina = Math.floor(Math.random() * baralho.length)
        numeroCartaJogador = Math.floor(Math.random() * meuBaralho.length)

        if(numeroCartaMaquina >= baralho.length && numeroCartaJogador >= meuBaralho.length){
            numeroCartaMaquina = (baralho.length-1)
        }
        cartaMaquina = baralho[numeroCartaMaquina]

        cartaJogador = meuBaralho[numeroCartaJogador]
        document.getElementById('campoBatalha').style.display="none"
        document.getElementById('btnSortear').style.display="none"
        document.getElementById('btnJogar').disabled = false
        document.getElementById('escolhaAtributo').style.display="block"

        minhaCarta.style.display = 'block'

        minhaCarta.innerHTML = `
        <div class='carta'>
        <div class="nomeCarta">${cartaJogador.nome}</div>
        <img class="imgCarta" src="${cartaJogador.foto}" alt="">
        <div class="atributosCarta">
        <div class="bg1"><span>Ataque</span><span>${cartaJogador.atributos.ataque}</span></div>
        <div class="bg2"><span>Defesa</span><span>${cartaJogador.atributos.defesa}</span></div>
        <div class="bg1"><span>Akumanomi</span><span>${cartaJogador.atributos.akumanomi}</span></div>
        </div></div>`
        exibirOpcoes()

}


function exibirOpcoes(){
    let opcoes = document.getElementById('opcoes')
    let opcoesTexto = ''
    for (let atributo in cartaJogador.atributos){
        opcoesTexto += `<div><input  type='radio' name='atributo' value='${atributo}'>${atributo}</div>`
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
    let radioAtributo = document.getElementsByName('atributo')
    for (let i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }

}

let resultado = document.querySelector('#resultado')

function jogar(){
    let atributoSelecionado =  obtemAtributoSelecionado()
    minhaCarta.innerHTML = ''
    campoJogador.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaJogador.nome}</div>
    <img class="imgCarta" src="${cartaJogador.foto}" alt="">
    <div class="atributosCarta">
    <div class="bg1"><span>Ataque</span><span>${cartaJogador.atributos.ataque}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cartaJogador.atributos.defesa}</span></div>
    <div class="bg1"><span>Akumanomi</span><span>${cartaJogador.atributos.akumanomi}</span></div>
    </div></div>`

    versus.innerHTML = `<img class="img-x" src="https://i.imgur.com/zRf2J4T.png" alt="">`

    campoMaquina.innerHTML = `
    <div class='carta'>
    <div class="nomeCarta">${cartaMaquina.nome}</div>
    <img class="imgCarta" src="${cartaMaquina.foto}" alt="">
    <div class="atributosCarta">
    <div class="bg1"><span>Ataque</span><span>${cartaMaquina.atributos.ataque}</span></div>
    <div class="bg2"><span>Defesa</span><span>${cartaMaquina.atributos.defesa}</span></div>
    <div class="bg1"><span>Akumanomi</span><span>${cartaMaquina.atributos.akumanomi}</span></div>
    </div></div>`

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        resultado.innerHTML = 'Você ganhou!'
        meuBaralho.push
        meuBaralho.push(baralho.splice(numeroCartaMaquina, 1)[0]);

    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
        resultado.innerHTML = 'Você perdeu!'
        baralho.push(meuBaralho.splice(numeroCartaJogador, 1)[0]);
    } else{
        resultado.innerHTML = 'Empate'
    }

    document.getElementById('campoBatalha').style.display="flex"
    document.getElementById('escolhaAtributo').style.display="none"
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnNovoJogo').disabled = false
    pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`
}


function novoJogo(){

    if(baralho.length == 0){
        resultado.innerHTML = `As cartas do seu oponente acabaram, e você ganhou o jogo.<br> Parabéns!`
        baralho = meuBaralho
        escodeButton()
    }else if(meuBaralho.length == 0){
        resultado.innerHTML = `As cartas acabaram, e você perdeu o jogo.<br> Boa sorte na próxima vez`
        escodeButton()
    }else{
        document.getElementById('btnNovoJogo').disabled = true
        minhaCarta.style.display = "none"
        document.getElementById('escolhaAtributo').style.display="none"
        campoJogador.innerHTML = ''
        versus.innerHTML = ''
        campoMaquina.innerHTML = ''
        resultado.innerHTML = ''
        sortearCarta()
        pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`
    }
}

function reiniciarJogo(){
    meuBaralho = []
    distribuiCartas()
    pontos.innerHTML = `Jogador possui ${meuBaralho.length} cartas | Máquina possui ${baralho.length} cartas`
    resultado.innerHTML = ''
    document.getElementById('btnNovoJogo').disabled = true
    mostraButton()

}

function escodeButton(){
    document.getElementById('reiniciarJogo').style.display="inline-block"
    document.getElementById('btnJogar').style.display="none"
    document.getElementById('btnNovoJogo').style.display="none"
    campoJogador.innerHTML = ''
    versus.innerHTML = ''
    campoMaquina.innerHTML = ''

}

function mostraButton(){
    document.getElementById('reiniciarJogo').style.display="none"
    document.getElementById('btnJogar').style.display="inline-block"
    document.getElementById('btnNovoJogo').style.display="inline-block"
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnSortear').style.display="inline-block"
    document.getElementById('reiniciarJogo').style.display="none"

}



//Criar as cartas do jogo e definir seus atributos;
//Desenvolver uma função para sortear uma carta para o jogador e outra para a máquina;
//Exibindo os atributos das cartas na tela para o jogador;
//Obter o atribudo escolhido pelo jogador e comparar com a carta da máquina;
//Comparar o atributo de ambas as cartas e definir um vencedor

//desafio-Verificar o que acontece caso você não selecione nenhum dos atributos e como solucionar
//Utilizar personagens que você gosta para criar as cartas e compartilhe com o pessoal lá na comunidade do Discord!
//Adicionar a imagem do personagem assim que você selecionar a carta dele