const express = require('express');
const router = express.Router();
const passportLocal = require('../auth/local');
const authHelpers = require('../auth/_helpers');

router.post('/register', authHelpers.loginRedirect, (req, res, next) => {
    return authHelpers.createUser(req, res)
    .then((response) => {
        passportLocal.authenticate('local', (err, user, info) => {
            if (user) {
                authHelpers.handleResponse(res, 200, 'Authenticated User');
            }
        })(req, res, next);
    })
    .catch((err) => {
        authHelpers.handleResponse(res, 500, 'Not Authenticated User.');
    });
});

router.post('/login', authHelpers.loginRedirect, (req, res, next) =>  {
    passportLocal.authenticate('local', (err, user, info) => {
        if (err) { authHelpers.handleResponse(res, 500, 'error'); }
        if (!user) { authHelpers.handleResponse(res, 404, 'User not found'); }
        if (user) {
            req.logIn(user, (err) => {
                if (err) { authHelpers.handleResponse(res, 500, 'error'); }
                authHelpers.handleResponse(res, 200, 'User is logged in.');
            });
        }
    })(req, res, next);
});

router.get('/logout', authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  authHelpers.handleResponse(res, 200, 'Logout Sucessfully');
});

module.exports = router;
