var input = document.querySelector('#donation')
var button = document.querySelector('#donate-button')
var raised = document.querySelector('#raised-money')

function initialize(){
    raised.innerText = '$' + Number(localStorage.getItem('donation')).toFixed(2)
}

function donate(){
    var donationValue = input.value ? Number(input.value) : 0
    if(Number(input.value) > 0){
        var money = donationValue + (!!raised.innerText ? Number(raised.innerText.split('$')[1]) : 0)
        localStorage.setItem('donation', money)
    }
    else
        window.alert('Valor inválido')
    update()
}

function verify(){
    if(input.value != 0)
        button.disabled = false;
    else
        button.disabled = true;
}

function update(){
    var money = (Number(localStorage.getItem('donation')))
    raised.innerText = '$' + money.toFixed(2);
}