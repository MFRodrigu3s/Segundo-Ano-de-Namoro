const cantadas = [{
    id: 1,
    verso: "Quando você tenta segurar a risada enquanto eu falo bobagem pra te fazer rir, parece que eu fico feliz em dobro. Teu sorriso é lindo.",
},
{
    id: 2,
    verso: "Quando você sai do banho e vem só de toalha pro quarto, fico completamente derretido por ti.",
},
{
    id: 3,
    verso: "Quando tu tá feliz, teus olhos ficam maravilhosos. Exalam um brilho único. Coisa linda de ver.",
},
{
    id: 4,
    verso: "O beijo lento que você me dá trás uma das melhores sensações do mundo. Arrepia até a alma.",
},
{
    id: 5,
    verso: "Teu cheiro é uma das tuas característica que eu mais gosto. Sei nem descrever o quanto me faz bem.",
},
{
    id: 6,
    verso: "Às vezes, quando acorda durante uma soneca, você fica meio dengosa. Eu simplesmente AMO interagir contigo nessas horas. Acho que são os momentos onde mais trocamos carinho.",
},
{
    id: 7,
    verso: "Demorei perceber isso, mas preciso admitir que te mimar é gostoso demaaais. Você fica toda felizinha quando faço algo de surpresa ou realizo uma vontade tua. Pretendo te surpreender e mimar pro resto da vida!",
},
{
    id: 8,
    verso: "Jogar jogos contigo é ótimo. Acho que são momentos em que melhor nos conectamos, sabia? Espero fazer mais vezes. Nossa sintonia enquanto concentrados na mesma coisa me faz muito feliz.",
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