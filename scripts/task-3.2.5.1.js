var temperatureInput;
temperatureInput=-3;
console.log(wearACoat (temperatureInput));
temperatureInput=11;
console.log(wearACoat (temperatureInput));
temperatureInput=17;
console.log(wearACoat (temperatureInput));


function wearACoat (temperature){
    blnValidation = true;
    if (isNaN(temperature)){

        console.log ('temperature arguement must be a number');
        blnValidation = false;

    }
    if (blnValidation){
        if (temperature < 0){
            return 'Do not leave the house';
        } 
        if (temperature < 12){
            return'Wear a coat';
        }
        return 'You don\'t need to wear a coat';
    } else {
        return;
}


}

if (temperature < 0) {
 
    console.log ('Stay inside');

} else if (temperature < 30 ) {
 
    console.log('Put a coat on and a hat');

} else if (temperature < 50) {

      console.log('Put a coat on');

} else if (temperature > 50) {
        console.log('Wear anything you want');}