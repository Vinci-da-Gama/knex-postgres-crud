const consts = require('../consts/consts');
const recipesData = require('../static-recipes');
// const helpers = require('../helpers/helpers');

exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex(consts.recipes).del()
		.then(function () {
			// Inserts seed entries
			return knex(consts.recipes).insert(recipesData);
			/* .returning('*')
			.then((res) => {
				const createTime = Date.now();
				const currObjId = res[0].id;
				const ingredients = res[0].ingredients;
				const nutrition = res[0].nutrition;
				const refinedIngredients = helpers.resetArrData(ingredients, currObjId, createTime);
				const refinedNutrition = helpers.resetArrData(nutrition, currObjId, createTime);
				const refinedSeed = [{
					nutrition: refinedNutrition,
					ingredients: refinedIngredients
				}];
				return refinedSeed;
			})
			.then((res) => {
				knex(consts.recipes).insert(res);
			})
			.then(() => {
				console.log('ka');
			})
			.catch((err) => {
				console.log(err);
			}); */
		});
};
