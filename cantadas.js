const cantadas = [{
    id: 1,
    verso: "Me empresta um beijo seu? Prometo que depois devolvo com 100% de juros",
},
{
    id: 2,
    verso: "Nas curvas do teu corpo eu capoto mais fácil que Hilux fazendo teste",
},
{
    id: 3,
    verso: "Tu não é o meu tornozelo em dia de jogo de basquete, mas me deixa caidinho",
},
{
    id: 4,
    verso: "Se a vida não está fácil para você, saiba que eu estou.",
},
{
    id: 5,
    verso: "Por mensagem é ruim de conversar. Manda teu endereço aí e bora conversar na tua cama",
},
{
    id: 6,
    verso: "Hoje acordei com sono, amanhã espero acordar contigo",
},
{
    id: 7,
    verso: "Se você gosta de cantar durante o banho, me avisa. Quero muito ir no teu show.",
},
{
    id: 8,
    verso: "Acho que tô com problema de visão. Não vejo a hora de te dar uns beijos",
}
]

function exibir() {

// ACESSANDO O ARRAY DE OBJETOS E ARMAZENANDO OS IDS --------------------------

let ids = []

for (i = 0; i < cantadas.length; i++) {
    ids.push(cantadas[i]['id'])
}

// ----------------------------------------------------------------------------

// ACESSANDO ELEMENTOS DO HTML ------------------------------------------------

    let input = document.getElementById('input')
    let divContainer = document.getElementById('div-container-cantada')
    let texto = document.getElementById('texto-cantada')

//-----------------------------------------------------------------------------

// ARMAZENANDO O VALOR DO INPUT E COMPARANDO ELE COM OS IDS DAS MUSICAS -------

    let valorInput = input.value - 1

    if(valorInput = ids[valorInput]) {

        let cantada = cantadas[valorInput-1]['verso']

        if(divContainer.style.display = "none"){
            divContainer.style.display = "flex"
            texto.innerText = cantada
        }
    } else {
        divContainer.style.display = "none"
    }

        // alert(musicas[valorInput-1]['artista'])
}

function exibirMenu() {

    let botaoImg = document.getElementById("img-botao")
    let divMenu = document.getElementById("div-container-menu")

    if(divMenu.style.display != "block") {
        divMenu.style.display = "block"
        botaoImg.src = "fechar.svg"
    } else {
        divMenu.style.display = "none"
        botaoImg.src = 'menu.svg'
    }

}