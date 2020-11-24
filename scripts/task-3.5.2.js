let shoppingCart = [
    {
        name:"loaf of bread",
        type:"food",
        quantity:1,
        price:.85
    },
{
        name:"multipack beans",
        type:"food",
        quantity:1,
        price:1
},
    {
        name:"mushrooms",
        type:"food",
        quantity:10,
        price:.1
    },
    {
        name:"can of beer",
        type:"alcohol",
        quantity:4,
        price:1.1
    },
    {
        name:"prosecco",
        type:"alcohol",
        quantity:1,
        price:8.99
    },
    {
        name:"steak",
        type:"food",
        quantity:2,
        price:3.99
    },
    {
        name:"blue cheese",
        type:"food",
        quantity:1,
        price:2.99
    },
    {
        name:"candles",
        type:"home",
        quantity:3,
        price:1.99
    },
    {
        name:"cheesecake",
        type:"food",
        quantity:1,
        price:4.99
    },
    {
        name:"onions",
        type:"food",
        quantity:3,
        price:.4
    }
];

function discountForFood (arr) { 
//1. create a function that takes 2 arguement (the array and variable)
    var totalPrice =0; // 2. create a variable inside the function called "total price"

    for (var i=0; i <arr.length; i++){ //3. loop through items

        if (arr[i].type === 'food' ){ //4. if item is food type, apply 20% discount

    }
var discount = (arr[i].price *20) / 100;
//5. apply discount on food items 

totalPrice = totalPrice + (arr[i].price-discount)*arr[i].quantity;

  }else{

        totalPrice = totalPrice + (arr[i].price *arr[i].quantity)

//3. Create a switch statement which has the cases ‘mode’, ‘median’ and ‘mean’

// 4. Copy and paste the functionality from your 3 previous functions into the case statement
return totalPrice.toFixed(2);

// 5. Return the required number based on the arguments passed.

}

console.log (discountForFood (shoppingCart)
);



Create a switch statement which has the cases ‘mode’, ‘median’ and ‘mean’
Copy and paste the functionality from your 3 previous functions into the case statement
Return the required number based on the arguments passed.
