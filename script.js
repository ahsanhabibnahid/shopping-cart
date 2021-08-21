let plusButton = document.getElementById('plusBtn');
plusButton.addEventListener('click', function(){
    plus ('inputValue',100,'iphoneCurrentPrice');
})
let casingPlusButton = document.getElementById('casingPlusBtn');
casingPlusButton.addEventListener('click',function (){
    plus ('casingInputValue',10,'casingCurrentPrice')
})

let minusButton = document.getElementById('minusBtn');
minusButton.addEventListener('click', function(){
    minus('inputValue',100,'iphoneCurrentPrice')
})

let casingMinusButton = document.getElementById('casingMinusBtn');
casingMinusButton.addEventListener('click', function(){
    minus('casingInputValue',10,'casingCurrentPrice')
})

function minus(id,value,currentPrice){
    let inputValue = document.getElementById(id).value;
    let inputNumber = parseInt(inputValue)

    let totalInput = inputNumber - 1
    document.getElementById(id).value = totalInput;

    let iphoneCurrentPrice = document.getElementById(currentPrice).innerText;
    let iphoneCurrentPriceNum = parseInt(iphoneCurrentPrice)

    let iphoneTotalPrice =  iphoneCurrentPriceNum - value;
    document.getElementById(currentPrice).innerText = iphoneTotalPrice;

    currentSum()
}

function plus(id,value,currentPrice){
    let inputValue = document.getElementById(id).value;
    let inputNumber = parseInt(inputValue);

    let totalInput = inputNumber + 1;
    document.getElementById(id).value = totalInput; 
        
    let iphoneTotalPrice = totalInput * value;
    document.getElementById(currentPrice).innerText = iphoneTotalPrice;

    currentSum()

}

function currentSum(){
    let iphoneCurrentPrice = document.getElementById('iphoneCurrentPrice').innerText;
    let iphoneCurrentPriceNumber = parseInt(iphoneCurrentPrice)

    let casingCurrentPrice = document.getElementById('casingCurrentPrice').innerText;
    let casingCurrentPriceNumber = parseInt(casingCurrentPrice)

    let sum = iphoneCurrentPriceNumber + casingCurrentPriceNumber

    document.getElementById('totalSum').innerText = sum
    document.getElementById('total').innerText = sum
}