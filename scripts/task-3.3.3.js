function calculator (number1 , number2, operator) {

switch(operator) {
    case '+':
        result = number1 + number2;
       console.log( number1 + '+' + number2 + '=' + result1);
        break;
    
    case '*' :
        result = number1 * number2;
       console.log( number1 + '*' + number2 + '=' + result1);
             break;

    case '-' :
        result = number1 - number2;
        console.log( number1 + '-' + number2 + '=' + result1);
        break;

    case '/' :
        result = number1 / number2;
        console.log( number1 + '/' + number2 + '=' + result1);
        break;
    
    case '%' :
        result = number1 % number2;
        console.log( number1 + '%' + number2 + '=' + result1);
        break;

    default: 
    //ERROR MESSAGE

}

}
