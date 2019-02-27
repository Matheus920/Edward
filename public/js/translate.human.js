function doTranslate(option){
    var nav = document.querySelector("nav")
    var translateText = document.querySelectorAll("footer a")
    var mainSec = document.querySelector('main section')
    if(option == 1){
        nav.children[0].textContent = "Amigos do Ed"
        nav.children[1].textContent = "Sobre nós"
        nav.children[2].textContent = "Humano do Edward"
        mainSec.children[0].textContent = "Humano do Edward"
        mainSec.children[1].children[1].textContent = "Esta é Josceli. Josceli é uma professora no IFSP - SPO. Ela ama Edward, e Edward a ama. Eles são muito intimos e compartilham  um vínculo muito especial; Josceli é a Humana de Ed aqui na Terra. Embora a jornada dos dois tenha sido uma bem aventuresca até agora, eles ainda tem muito o que viver juntos. Por favor, não deixe esta linda amizade morrer junto do Edward."
        mainSec.children[2].children[1].textContent = "Não deixe esse cachorro doente morrer, Josceli ficaria triste."   
        translateText[0].style.display = "none"
        translateText[1].style.display = "inline"
    }else{
        nav.children[0].textContent = "Ed's Friends"
        nav.children[1].textContent = "About us"
        nav.children[2].textContent = "Ed's Human"
        mainSec.children[0].textContent = "Edward's Human"
        mainSec.children[1].children[1].textContent = "This is Josceli. Josceli is a teacher at IFSP - SPO. She loves Edward, and Edward loves her. They are very intimate and share a very special bond; Josceli is Ed's Human here on Earth. Though their journey has been quite an adventureous one, they still have too much to live together. Please, don't let this beautiful friendship die along with Edward."
        mainSec.children[2].children[1].textContent = "Don't let this cripple dog die, Josceli would be sad."
        translateText[1].style.display = "none"
        translateText[0].style.display = "inline"
    }
}