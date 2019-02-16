function doTranslate(option){
    var nav = document.querySelector("nav")
    var translateText = document.querySelectorAll("footer a")
    var infoPanel = document.querySelector("#info-panel")
    var explanationText = document.querySelector('#explanation-text')
    if(option == 1){
        nav.children[0].textContent = "Humano do Ed"
        nav.children[1].textContent = "Sobre nós"
        nav.children[2].textContent = "Amigos do Ed"
        infoPanel.children[0].textContent = "Levantado"
        infoPanel.children[2].textContent = "Meta"
        infoPanel.children[4].textContent = "Quanto deseja doar?"
        infoPanel.children[7].innerText = "DOAR"
        explanationText.textContent = "Edward é um cachoro que sofre de uma doença que pode matá-lo em breve. " +
        "Os remédios e outros custos do tratamento são muito caros e sua dona " +
        "não pode financiá-los. Por conta disso, esse site foi criado com o intuito de " +
        "manter Edward feliz e vivo. Por favor, olhe para a imagem e ajude este cachorro doente."
        translateText[0].style.display = "none"
        translateText[1].style.display = "inline"
    }else{
        nav.children[0].textContent = "Ed's Human"
        nav.children[1].textContent = "About us"
        nav.children[2].textContent = "Ed's Friends"
        infoPanel.children[0].textContent = "Raised"
        infoPanel.children[2].textContent = "Goal"
        infoPanel.children[4].textContent = "How much do you wanna donate?"
        infoPanel.children[7].innerText = "DONATE"
        explanationText.textContent = "Edward is a dog that suffers from a rare disease which may kills him soon. " +
        "The remedies and other costs of the treatment are very expensive and his owner " +
        "cannot afford it. Because of that, this site was created in order to raise money " +
        "for keep Edward alive and happy. Please, look at the picture and make a donation " +
        "for this cripple dog."
        translateText[1].style.display = "none"
        translateText[0].style.display = "inline"
    }
}