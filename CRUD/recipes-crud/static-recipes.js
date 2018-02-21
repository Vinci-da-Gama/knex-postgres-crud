const consts = require('./consts/consts');

const initRecipes = [
    {
        title: 'recipe_title_1',
        description: 'recipe description 1.',
        image: 'http://devstickers.com/assets/img/pro/i4eg.png',
        directions: 'recipe_direction_1',
        nutrition: {
            "data": [
            {
                "id": 33,
                "name": "Fat per serve",
                "value": "15.1",
                "unit": "g",
                "createdAt": consts.date,
                "updatedAt": consts.date
            },
            {
                "id": 66,
                "name": "Kilojoules per serve",
                "value": "1490",
                "unit": "kj",
                "createdAt": consts.date,
                "updatedAt": consts.date
            }
        ]},
        ingredients: {
            "data": [
            {
                "id": 99,
                "ingredientName": "1 tbsp. olive oil",
                "createdAt": consts.date,
                "updatedAt": consts.date
            },
            {
                "id": 81,
                "ingredientName": "500g beef mince",
                "createdAt": consts.date,
                "updatedAt": consts.date
            }
        ]}
    },
    {
        title: 'Recipe_title_2',
        description: 'recipe description 2.',
        image: 'http://devstickers.com/assets/img/cat/react-js.png',
        directions: 'REcipe_direction_2',
        nutrition: {
            "data": [
            {
                "id": 49,
                "name": "recipesName2",
                "value": "25.1",
                "unit": "g",
                "createdAt": consts.date,
                "updatedAt": consts.date
            },
            {
                "id": 3,
                "name": "Fat recipesname2 per serve",
                "value": "1490",
                "unit": "kj",
                "createdAt": consts.date,
                "updatedAt": consts.date
            }
        ]},
        ingredients: {
            "data": [
            {
                "id": 6,
                "ingredientName": "recipesIngre2 tbsp. olive oil",
                "createdAt": consts.date,
                "updatedAt": consts.date
            },
            {
                "id": 77,
                "ingredientName": "recipes Name 2 500g beef mince",
                "createdAt": consts.date,
                "updatedAt": consts.date
            }
        ]}
    }
];

module.exports = initRecipes;