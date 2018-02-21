(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const routeStrs = require('../../consts/routes');
    const authRoutes = require('../routes/authRoutes');
    const userRoutes = require('../routes/user-profile');

    // *** register routes *** //
    app.use('/', routes);
    app.use(routeStrs.authBase, authRoutes);
    app.use('/', userRoutes);

  };

})(module.exports);
