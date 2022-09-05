function shuffle(){
    const img = document.querySelector('.image');
    let random = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `assets/${random}.png`);
}

function animation(){
    setTimeout(shuffle, 400);
    const img = document.querySelector('.image');
    img.setAttribute("src", "assets/dice-roll.gif");
}