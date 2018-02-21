const express = require('express');
const router = express.Router();

const queries = require('../db/queries');
const helpers = require('../helpers/helpers');
const consts = require('../consts/consts');

router.get('/', (req, res) => {
    queries.getAll()
    .then((recipes) => {
        res.json(recipes);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/:id', helpers.isValidiId, (req, res, next) => {
    queries.getOne(req.params.id)
    .then((recipe) => {
        if (recipe) {
            res.json(recipe);
        } else {
            next();
        }
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/', helpers.isValidRecipe, (req, res, next) => {
    queries.createRecipe(req.body)
    .then((recipes) => {
        res.json(recipes[0]);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.put('/:id', helpers.isValidiId, helpers.isValidRecipe, (req, res, next) => {
    queries.updateRecipe(req.params.id, req.body)
    .then((recipes) => {
        res.json(recipes[0]);
    })
    .catch((err) => {
        console.log(err);
    });
});

router.delete('/:id', helpers.isValidiId, (req, res) => {
    const id = req.params.id;
    queries.deleteById(id)
    .then(() => {
        res.json(consts.successMsg);
    })
    .catch((err) => {
        console.log(err);
    });
});

module.exports = router;