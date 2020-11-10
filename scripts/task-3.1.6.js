var preTipTotal = 31.20;
var tipPercentage = 12.5;

var percentageOfPreTip = (preTipTotal * tipPercentage) / 100;

var totalBill = preTipTotal + percentageOfPreTip;

console.log(totalBill); // Outputs 'Total Bill costs '

alert(totalBill);

document.write ( '£' + totalBill.toFixed(2) );