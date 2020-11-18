function drinkOrder( drink, size) {

var drinkToLowerCase = drink.toLowerCase();

switch (drink) {
   case 'cola':
   console.log('You have ordered a ' + size + '' + drinkToLowerCase  );
   break;

   case 'lemonade':
    console.log('You have ordered a ' + size + ''  + drinkToLowerCase  );
    break;

    case 'orange':
        console.log('You have ordered a ' + size + ''  + drinkToLowerCase );
        break;
}
   default:
    console.log('Sorry, that drink is not available');
    break
}
