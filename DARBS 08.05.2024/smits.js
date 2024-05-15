const canvas = document.getElementById("can");
const ctx = canvas.getContext("2d")



ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "#0001";
ctx.fill();

ctx.beginPath();
ctx.rect(20, 15, 60, 30);
ctx.stroke();
ctx.fillStyle = "darkgrey";
ctx.fill();



ctx.beginPath();
ctx.rect(25, 20, 50, 20);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.font = "20px Arial ";
ctx.strokeText("Techno ", 19, 70);

ctx.beginPath();
ctx.font = "20px Arial ";
ctx.strokeText("INFO ", 28, 90);

ctx.beginPath();
ctx.moveTo(15, 50);
ctx.lineTo(90, 50);
ctx.stroke();
ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.strokeStyle = "dark";
ctx.stroke();











var crrncy = { 'IPhone12': { 'EUR': 565 }, 'IPhone13': { 'EUR': 832 }, 'IPhone14': { 'EUR': 925 } }
var btn = document.querySelector('.calculate-btn');
var baseCurrencyInput = document.getElementById('currency-1');
var secondCurrencyInput = document.getElementById('currency-2');
var amountInput = document.getElementById('amount');
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');

function convertCurrency(event) {
    event.preventDefault();
    var amount = amountInput.value;
    var from = baseCurrencyInput.value;
    var to = secondCurrencyInput.value;
    var result = 0;

    try {
        if (from == to) {
            result = amount;
        } else {
            result = amount * crrncy[from][to];
        }
    }
    catch (err) {
        result = amount * (1 / crrncy[to][from]);
    }

    toShowAmount.innerHTML = amount;
    toShowBase.textContent = from + ' = ';
    toShowSecond.textContent = to;
    toShowResult.textContent = result;
}

btn.addEventListener('click', convertCurrency);