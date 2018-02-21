const helpers = {
    randomId () {
        let randomNum = Math.floor(Math.random()*100) + 1;
        return randomNum;
    },
    resetArrData (arr, objid, ct) {
        const newArr = [];
        arr.forEach((elem) => {
            const convertedElem = JSON.parse(elem);
            const selfId = helpers.randomId();
            convertedElem.id = selfId;
            convertedElem['recipeId'] = objid;
            convertedElem.createdAt = ct;
            convertedElem.updatedAt = Date.now();
            newArr.push(convertedElem);
        });
        return newArr;
    },
    isValidiId (req, res, next) {
        if (Number.isInteger(parseInt(req.params.id))) {
            return next();
        } else {
            next(new Error('Invalid Id.'));
        }
    },
    isValidRecipe (req, res, next) {
        let r = req.body;
        const hasTitle = typeof r.title === 'string' && r.title.trim() !== '';
        const hasDescription = typeof r.description === 'string' && r.description.trim() !== '';
        const hasImage = typeof r.image === 'string' && r.image.trim() !== '';
        const hasDirections = typeof r.directions === 'string' && r.directions.trim() !== '';
        const hasNutrition = r.nutrition.data.length > 0;
        const hasIngredients = r.ingredients.data.length > 0;
        let isValid = hasTitle && hasDescription && hasImage && hasDirections && hasNutrition && hasIngredients;
        if (isValid) {
            return next();
        } else {
            next(new Error('Invalid Recipe.'));
        }
    }
}

module.exports = helpers;