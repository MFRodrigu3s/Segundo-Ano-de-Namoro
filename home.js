
let count = 1

setInterval (function (){
    count++
    if(count > 3){
        count = 1
    } 
    document.getElementById("input" + count).checked = true
}, 4000);

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