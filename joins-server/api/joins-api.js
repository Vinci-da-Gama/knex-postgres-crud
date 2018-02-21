const express = require('express');
const router = express.Router();

const consts = require('../consts/consts');
const queries = require('../db/queries');
const helpers = require('../helpers/helpers');

router.get('/cross', (req, res) => {
    queries.getCrossJoin()
    .then((crossT1T2) => {
        res.json(crossT1T2);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/inner', (req, res) => {
    queries.getInnerJoin()
    .then((innerT1T2_Id) => {
        res.json(innerT1T2_Id);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/left', (req, res) => {
    queries.getLeftJoin()
    .then((ljRz) => {
        res.json(ljRz);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/leftout', (req, res) => {
    queries.getLeftOuterJoin()
    .then((lojRz) => {
        res.json(lojRz);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/right', (req, res) => {
    queries.getRightJoin()
    .then((right) => {
        res.json(right);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/rightout', (req, res) => {
    queries.getRightOuterJoin()
    .then((roRz) => {
        res.json(roRz);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/fullout', (req, res) => {
    queries.getFullOuterJoin()
    .then((foRz) => {
        res.json(foRz);
    })
    .catch((err) => {
        throw err;
    });
});

router.get('/joinraw', (req, res) => {
    queries.getJoinRaw()
    .then((jrRz) => {
        res.json(jrRz);
    })
    .catch((err) => {
        throw err;
    });
});

module.exports = router;

/*
psql -h collin.lifeiq.io -U mobecomdevops
M0bec0m17
kelin@csbengage.com
Abcd1234
*/