const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/_helpers');

router.get('/user', authHelpers.loginRequired, (req, res, next) => {
    authHelpers.handleResponse(res, 200, 'see user profile now');
});

router.get('/admin', authHelpers.adminRequired, (req, res, next)  => {
    authHelpers.handleResponse(res, 200, 'u r admin');
});

module.exports = router;
