function doTranslate(option){
    var nav = document.querySelector("nav")
    var translateText = document.querySelectorAll("footer a")
    if(option == 1){
        nav.children[0].textContent = "Humano do Ed"
        nav.children[1].textContent = "Sobre nós"
        nav.children[2].textContent = "Amigos do Ed"
        translateText[0].style.display = "none"
        translateText[1].style.display = "inline"
    }else{
        nav.children[0].textContent = "Ed's Human"
        nav.children[1].textContent = "About us"
        nav.children[2].textContent = "Ed's Friends"
        translateText[1].style.display = "none"
        translateText[0].style.display = "inline"
    }
}