function wearACoat (temperature){
    blnFailedValidation = false;
    if (isNaN(temperature)){

        console.log ('temperature arguement must be a number');
        blnValidation = ftrue;

    }
    if (!blnValidation){
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
