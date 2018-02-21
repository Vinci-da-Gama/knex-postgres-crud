const express = require('express');
const router = express.Router();

const queries = require('../db/queries');

function IsValidId (req, res, next) {
    if (!isNaN(req.params.id)) {
        return next();
    } else {
        next(new Error('Invalid Id.'));
    }
};

function IsValidSticker (sticker) {
    const hasTitle = typeof sticker.title === 'string' && sticker.title.trim() !== '';
    const hasDescription = typeof sticker.description === 'string' && sticker.description.trim() !== '';
    const hasUrl = typeof sticker.url === 'string' && sticker.url.trim() !== '';
    const hasRating = !isNaN(sticker.rating);
    return hasTitle && hasDescription && hasUrl && hasRating;
};

router.get('/', (req, res) => {
    queries.getAll()
    .then((stickers) => {
        res.json(stickers);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get('/:id', IsValidId, (req, res, next) => {
    queries.getOneById(req.params.id)
    .then((sticker) => {
        if (sticker) {
            res.json(sticker);
        } else {
            next();
        }
    })
    .catch((err) => {
        console.log('error is: ', err);
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    if (IsValidSticker(req.body)) {
        console.log('has valid sticker');
        queries.createSticker(req.body)
        .then((stickers) => {
            res.json(stickers[0]);
        })
        .catch((err) => {
            console.log('error is: ', err);
        });
    } else {
        next(new Error('Invalid sticker.'));
    }
});

router.put('/:id', IsValidId, (req, res, next) => {
    if (IsValidSticker(req.body)) {
        queries.updateSticker(req.params.id, req.body)
        .then((stickers) => {
            res.json(stickers[0]);
        })
        .catch((err) => {
            console.log('error is: ', err);
        });
    } else {
        next(new Error('Invalid Sticker.'));
    }
});

router.delete('/:id', IsValidId, (req, res, next) => {
    queries.deleteById(req.params.id)
    .then(() => {
        res.json({
            message: true
        });
    })
    .catch((err) => {
        console.log('error is: ', err);
    });
});

module.exports = router;