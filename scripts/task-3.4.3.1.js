//recipeTitle (a string)
//servings (a number)
//ingredients (an array of strings)
//directions (a string)


var objRecipe= [
    {recipeTitle: 'beans on toast',
    servings: '1',
    ingredients: ['baked beans', 'bread', 'butter', 'black pepper'],

    direction: ['microwave beans in microwave for 3 mins (900w - adjust as per tin instructions)',
'place bread in toaster',
'spread butter on toast',
'put beans onto toast',
'put blackpepper onto beans',
]

},

{recipeTitle: 'eggs on toast',
servings: '1',
ingredients: ['eggs', 'bread', 'butter', 'black pepper'],

direction: ['heat butter in frying pan and then crack the egg in. Heat for 5 mins)',
'place bread in toaster',
'spread butter on toast',
'put eggs onto toast',
'put blackpepper onto eggs',
]

}
];

for (counter=0; counter < objRecipe.length; counter++){
    recipe = objRecipe[counter];
    console.log(recipe.recipeTitle);
    console.log('serves: ' +recipe.servings);
    console.log('ingredients');

    for(i=0; i< recipe.ingredients.length; i++){
        ingredients = recipe.ingredients[i];
        console.log (ingredients);
        }
        console.log('');

    for(i=0; i< recipe.direction.length; i++){
            direction = recipe.direction[i];
            console.log (direction);
            }
            console.log('');
            console.log('');
}
