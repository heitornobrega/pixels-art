function changeGreen(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    document.getElementById("green").style.backgroundColor=`rgb(${r},${g}, ${b})`;
}

function changeYellow(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    document.getElementById("yellow").style.backgroundColor=`rgb(${r},${g}, ${b})`;
}

function changeRed(){
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    document.getElementById("red").style.backgroundColor=`rgb(${r},${g}, ${b})`;
}

document.getElementsByClassName('color')[0].style.backgroundColor = "black";

changeGreen();
changeYellow();
changeRed();

//Adicona os pixels padrões
addpixels()

// Seleciona o valor do input 'board-size'

inputValue = document.getElementById('board-size').value

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
    let selected = document.getElementsByClassName('selected')[0];
    let newBck = selected.style.backgroundColor;
    event.target.style.backgroundColor = newBck;


    // // let listaCores = ["green", "yellow", "red"];
    // // for (let c = 0; c)
    // for (let c = 0; c < selected.length; c++) {
    //     novaClasse = `pixel ${selected[c].id}`;
    //     console.log(novaClasse);
    // };
    // event.target.className = novaClasse;

}

// Escuta evento de click proveniente do btn id="clear-board".
let clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', clear)

// Substitui a classe 'pixel nomeDaCor' para 'pixel'.
function clear() {
    let pixel = document.getElementsByClassName('pixel');
    for (let c = 0; c < pixel.length; c++) {
        pixel[c].style.backgroundColor = "white";

        // if (pixel[c].classList.length > 1) {
        //     pixel[c].className = 'pixel';
        // };
    };
};

// Escuta evento de click proveniente do btn id="generate-board".
let generateBoard = document.getElementById('generate-board');
generateBoard.addEventListener('click', addpixels)
generateBoard.addEventListener('click', forbiddenInputs)



//Adciona diversas 'div class=pixel' como filhas de 'section id="pixel-board"' 
function addpixels() {
    let pixelBoard = document.getElementById('pixel-board');
    if (pixelBoard.children.length === 0) {
        for (c = 0; c < 25; c++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.addEventListener('click', fill)
            pixelBoard.appendChild(pixel)
        }
    }
    else{
        if(document.getElementById('board-size').value > 50){
            document.getElementById('board-size').value = 50;
        }
        let userValaue = document.getElementById('board-size').value;
        let outValue = (userValaue*userValaue) - 25
        for (c = 0; c < outValue ; c++) {
            let pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.addEventListener('click', fill)
            pixelBoard.appendChild(pixel)
        }
    }
}

//Adiciona alert para quando o input estiver fazio
function forbiddenInputs() {
    if(document.getElementById('board-size').value === ''){
        window.alert('Board inválido!');
    }
}

//Muda as cores da paleta


