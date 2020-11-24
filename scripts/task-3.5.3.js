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

function discountAmount (arr, discountAmount, type) { //1
    var totalPrice =0;
    for( var i=0; i<arr.length; i++){

        if (arr[i].type === type ){//2

            var discount =( arr[i].price * discountAmount) / 100;
            
            totalPrice = totalPrice + (arr[i].price - discount) * arr[i].quantity;

        } else if (type  ==='any'){

            var discount =( arr[i].price * discountAmount) / 100;
            
            totalPrice = totalPrice + (arr[i].price - discount) * arr[i].quantity;


    } else {
        totalPrice = totalPrice (arr[i].price * arr[i].quantity)

return totalPrice.toFixed(2);
}

console.log( 'All products have 20% discount :' + discountAmount (
shoppingCart, 20,'any'));

console.log( 'All food products have 15% discount :' + discountAmount (
shoppingCart, 15,'food'));

console.log( 'All alcohol products have 15% discount :' + discountAmount (
shoppingCart, 15,'alcohol'));