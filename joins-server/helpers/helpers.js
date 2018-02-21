module.exports = {
    resjson (res, returnVal) {
        res.json(returnVal);
    },
    thrwoErr (err) {
        throw err;
    }
}