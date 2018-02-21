const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const devIns = require('../db/knex-env');
const dbConst = require('../../consts/dbs');
const authHelpers = require('./_helpers');

const ops = {};

init();

passport.use(new LocalStrategy(ops, (username, inputedPassword, done) => {
    devIns(dbConst.ut).where({username}).first()
    .then((targetUser) => {
        if (!targetUser) return done(null, false);
        if (!authHelpers.comparePass(inputedPassword, targetUser.password)) {
            return done(null, false);
        } else {
            return done(null, targetUser);
        }
    })
    .catch((err) => done(err));
}));

module.exports = passport;
