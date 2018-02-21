const consts = require('../consts/consts');

const recipesData = [
    {
        id: 1,
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
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                },
                {
                    "id": 66,
                    "name": "Kilojoules per serve",
                    "value": "1490",
                    "unit": "kj",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                }
            ]
        },
        ingredients: {
            "data": [
                {
                    "id": 99,
                    "ingredientName": "1 tbsp. olive oil",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                },
                {
                    "id": 81,
                    "ingredientName": "500g beef mince",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                }
            ]
        }
    },
    {
        id: 2,
        title: 'Recipe_title_2',
        description: 'recipe description 2.',
        image: 'http://devstickers.com/assets/img/pro/i4eg.png',
        directions: 'recipe_direction_2',
        nutrition: {
            "data": [
                {
                    "id": 49,
                    "name": "recipesName2",
                    "value": "25.1",
                    "unit": "g",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                },
                {
                    "id": 3,
                    "name": "Fat recipesname2 per serve",
                    "value": "1490",
                    "unit": "kj",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                }
            ]
        },
        ingredients: {
            "data": [
                {
                    "id": 6,
                    "ingredientName": "recipesIngre2 tbsp. olive oil",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                },
                {
                    "id": 77,
                    "ingredientName": "recipes Name 2 500g beef mince",
                    "createdAt": consts.staticDate,
                    "updatedAt": consts.staticDate
                }
            ]
        }
    }
];

const sigRecipe = {
    id: 3,
    title: 'recipe_title_3',
    description: 'recipe description 3.',
    image: 'http://devstickers.com/assets/img/cat/vuejs.png',
    directions: 'recipe_direction_3',
    nutrition: {
        "data": [
            {
                "id": 83,
                "name": "Recipes3 per serve",
                "value": "15.1",
                "unit": "g",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            },
            {
                "id": 61,
                "name": "Recipes3 per serve",
                "value": "1490",
                "unit": "kj",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            }
        ]
    },
    ingredients: {
        "data": [
            {
                "id": 47,
                "ingredientName": "Recipes3. olive oil",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            },
            {
                "id": 96,
                "ingredientName": "Recipes3 beef mince",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            }
        ]
    }
};

const newRecipe = {
    title: 'recipe_title_4',
    description: 'recipe description 4.',
    image: 'http://devstickers.com/assets/img/cat/vuejs.png',
    directions: 'recipe_direction_4',
    nutrition: {
        "data": [
            {
                "id": 84,
                "name": "Recipes4 per serve",
                "value": "15.1",
                "unit": "g",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            },
            {
                "id": 61,
                "name": "Recipes4 per serve",
                "value": "1490",
                "unit": "kj",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            }
        ]
    },
    ingredients: {
        "data": [
            {
                "id": 47,
                "ingredientName": "Recipes4. olive oil",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            },
            {
                "id": 96,
                "ingredientName": "Recipes4 beef mince",
                "createdAt": consts.staticDate,
                "updatedAt": consts.staticDate
            }
        ]
    }
};


module.exports = {
    recipesData,
    sigRecipe,
    newRecipe
};