const bcrypt = require('bcryptjs');
const knexConn = require('../db/knex-env');
const dbConst = require('../../consts/dbs');

function comparePass (inputedPassword, databasePassword) {
    let isMatched = bcrypt.compareSync(inputedPassword, databasePassword);
    return isMatched;
}

function handleResponse (res, statusCode, msg) {
    res.status(statusCode).json({
        message: msg
    });
}

function createUser (req, res) {
    return createUserhandleErrors(req)
    .then(() => {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);
        let userObj = {
            username: req.body.username,
            password: hash
        };
        return knexConn(dbConst.ut).insert(userObj)
        .returning('*');
    })
    .catch((err) => {
        res.status(400).json({message: err.message});
    });
}

function loginRequired (req, res, next) {
    if (!req.user) return res.status(401).json({message: 'Please log in'});
    next();
}

function adminRequired(req, res, next) {
    if (!req.user) res.status(401).json({message: 'Please log in'});
    return knexConn(dbConst.ut).where({username: req.user.username}).first()
    .then((user) => {
        if (!user.isAdmin) res.status(401).json({message: 'You are not authorized'});
        next();
    })
    .catch((err) => {
        res.status(500).json({message: 'Something bad happened'});
    });
}

function loginRedirect(req, res, next) {
    if (req.user) return res.status(401).json(
    {message: 'You are already logged in'});
    next();
}

function createUserhandleErrors(req) {
    return new Promise((resolve, reject) => {
        if (req.body.username.length < 2) {
            reject({
                message: 'Username must be longer than 6 characters'
            });
        }
        else if (req.body.password.length < 3) {
            reject({
                message: 'Password must be longer than 6 characters'
            });
        } else {
            resolve();
        }
    });
}

module.exports = {
    comparePass,
    handleResponse,
    createUser,
    loginRequired,
    adminRequired,
    loginRedirect
};
