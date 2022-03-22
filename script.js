//Adicona classe selected nas cores da paleta

function select(event) {
    let color = document.getElementsByClassName('color');
    for (let c = 0; c < color.length; c++) {
        if (color[c].classList.contains('selected')) {
            color[c].className = "color";
        }
        event.target.className = "color selected";
    }
}

//Adiciona a classe de cor ao pixel selecionado

function fill(event) {
    let selected = document.getElementsByClassName('selected');
    let novaClasse = '';
    for (let c = 0; c < selected.length; c++) {
        novaClasse = `pixel ${selected[c].id}`;
    };
    event.target.className = novaClasse;
}
// Escuta evento de click proveniente do btn id="clear-board".
let clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', clear)

// Substitui a classe 'pixel nomeDaCor' para 'pixel'.
function clear(){
    let pixel = document.getElementsByClassName('pixel');
    for(let c = 0; c < pixel.length; c++){
        if(pixel[c].classList.length > 1){
            pixel[c].className = 'pixel';
        };
    };
};


