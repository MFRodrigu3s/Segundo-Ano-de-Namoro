const cantadas = [{
    id: 1,
    verso: "Pandora",
    artista: 'DJ Matt D',
    link: 'https://open.spotify.com/track/0yL7K9MzC20uBesZTPY81r?si=G9TF3tHKTvWGKERRjwwsnw',
},
{
    id: 2,
    verso: "Surreal",
    artista: 'Luísa Sonza ft Baco Exu',
    link: 'https://open.spotify.com/track/1dv8qeBPtLAli7J3xNeTDR?si=TEwXjEN0Q4CD4sIKTY9eKQ',
},
{
    id: 3,
    verso: "Vestido da Fendi",
    artista: 'KayBlack',
    link: 'https://open.spotify.com/track/0pZIBIJ253pH9gJtXE0Ouf?si=vrOdpnyZROObQbGdwVizsQ',
},
{
    id: 4,
    verso: "Samba In Paris",
    artista: 'Baco Exu ft. Gloria Groove',
    link: 'https://open.spotify.com/track/3nlhqZHMXG2A5UkW633wwx?si=i4fNNm4jRMONQlJD5Sn9fA',
},
{
    id: 5,
    verso: "Brinca Demais",
    artista: 'Wiu ft. Matue e Teto',
    link: 'https://open.spotify.com/track/1JzMOnuyabzpRuSudDD4Cq?si=PPN3UeogRuSon_8ThwMcMQ&context=spotify%3Aplaylist%3A37i9dQZF1DZ06evO2cAFVL',
},
{
    id: 6,
    verso: "Dá Pra Ser?",
    artista: 'Djonga',
    link: 'https://open.spotify.com/track/7jdP9m9lpNp51ainfora8t?si=vqLOK9LGQLu5JgFTaRrtNw',
},
{
    id: 7,
    verso: "It Will Rain",
    artista: 'Bruno Mars',
    link: 'https://open.spotify.com/track/0M3HkE321xpCbCYqVKzr1q?si=BfZoXNtJRJO6xYz0wtozFA',
},
{
    id: 8,
    verso: "Tem Café",
    artista: 'Gaab ft. Hariel',
    link: 'https://open.spotify.com/track/6EfnotM8sRsjXEsOgtZbCG?si=0tFzOoP5RlC4mA-4n9Ezjw',
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
    let artistA = document.getElementById('texto-artista')
    let textoLink = document.getElementById('texto-linkMusica')

//-----------------------------------------------------------------------------

// ARMAZENANDO O VALOR DO INPUT E COMPARANDO ELE COM OS IDS DAS MUSICAS -------

    let valorInput = input.value - 1

    if(valorInput = ids[valorInput]) {

        let cantada = cantadas[valorInput-1]['verso']
        let nomeArtista = cantadas[valorInput-1]['artista']
        let linkMusica = cantadas[valorInput-1]['link']

        if(divContainer.style.display = "none"){
            divContainer.style.display = "flex"
            texto.innerText = cantada
            artistA.innerText = nomeArtista
            textoLink.href = linkMusica
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