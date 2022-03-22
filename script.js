function select(event) {
    let color = document.getElementsByClassName('color');
    for (c = 0; c < color.length; c++) {
        if (color[c].classList.contains('selected')) {
            color[c].className = "color";
        }
        event.target.className = "color selected";
    }
}
function fill(event) {
    let selected = document.getElementsByClassName('selected');
    let pixel = document.getElementsByClassName('pixel');
    let novaClasse = '';
    for (c = 0; c < selected.length; c++) {
        novaClasse = `pixel ${selected[c].id}`;
        console.log(novaClasse);
    };
    event.target.className = novaClasse;
}