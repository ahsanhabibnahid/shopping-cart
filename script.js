let plusButton = document.getElementById('plusBtn');
plusButton.addEventListener('click', function(){
    let inputValue = document.getElementById('inputValue').value;
    let inputNumber = parseInt(inputValue)

    let totalInput = inputNumber + 1
    document.getElementById('inputValue').value = totalInput
        
    let iphoneTotalPrice = totalInput * 100;
    document.getElementById('iphoneCurrentPrice').innerText = iphoneTotalPrice;

})




let minusButton = document.getElementById('minusBtn');
minusButton.addEventListener('click', function(){
    let inputValue = document.getElementById('inputValue').value;
    let inputNumber = parseInt(inputValue)

    let totalInput = inputNumber - 1
    document.getElementById('inputValue').value = totalInput;

    let iphoneCurrentPrice = document.getElementById('iphoneCurrentPrice').innerText;
    let iphoneCurrentPriceNum = parseInt(iphoneCurrentPrice)

    let iphoneTotalPrice =  iphoneCurrentPriceNum - 100;
    document.getElementById('iphoneCurrentPrice').innerText = iphoneTotalPrice;
})