function doTranslate(option){
    var nav = document.querySelector("nav")
    var msection = document.querySelector("main section")
    var translateText = document.querySelectorAll("footer a")
    if(option == 1){
        nav.children[0].textContent = "Humano do Ed"
        nav.children[1].textContent = "Sobre nós"
        nav.children[2].textContent = "Amigos do Ed"
        msection.children[0].textContent = "Amigos do Edward"
        msection.children[2].textContent = "Sheldon é o melhor amigo de Edward! Eles se conhecem desde que eram filhotinhos. Os dois gostam de leite quente e um do outro! Por favor, não deixe que esta amizade morra!"
        translateText[0].style.display = "none"
        translateText[1].style.display = "inline"
    }else{
        nav.children[0].textContent = "Ed's Human"
        nav.children[1].textContent = "About us"
        nav.children[2].textContent = "Ed's Friends"
        msection.children[0].textContent = "Edward's Friends"
        msection.children[2].textContent = "Sheldon is Edward's best friend! They know each other since they were little puppies. They both like warm milk and each other! Please, don't let this friendship die!"
        translateText[1].style.display = "none"
        translateText[0].style.display = "inline"
    }
}