const colorPalette = document.getElementById('color-palette');
// // let colors = colorPalette.children;
// function colorSelector(event) {

//     if(event.target.classList.contains('selected')){
//         event.target.classList.remove('selected');
//     }else{
//         event.target.classList.add('selected');
//     }
// }

// colorPalette.addEventListener('click', colorSelector)

function select(event){
    let color = document.getElementsByClassName('color');
    for(c = 0; c < color.length; c++){
        if(color[c].classList.contains('selected')){
            color[c].className = "color";
        }
    event.target.className = "color selected";
    }
}
