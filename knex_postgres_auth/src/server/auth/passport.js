const passport = require('passport');
const devIns = require('../db/knex-env');
const dbConst = require('../../consts/dbs');

module.exports = () => {
    // https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
    // store user obj in local sesson storage
    passport.serializeUser((user, done) => {
        // asign user from database to session
        done(null, user.id);
    });

    // retrive user from session and attach to req.user obj
    passport.deserializeUser((id, done) => {
        devIns(dbConst.ut).where({id}).first()
        .then((user) => { done(null, user); })
        .catch((err) => { done(err,null); });
    });
};
