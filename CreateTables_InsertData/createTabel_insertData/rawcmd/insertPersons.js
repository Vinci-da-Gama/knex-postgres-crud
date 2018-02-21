const devInstance = require('../db/knex-env');
const consts = require('../constances/consts');
const path = require('path');
// const file = path.relative('C:\\Users\\mebocom_csbengage\\Desktop\\a\\BackEnd\\CreateTables_InsertData\\createTabel_insertData\\defaultData\\persons.csv');
const file = path.resolve(__dirname, '../defaultData/persons.csv');

insertPersonsData();

/* \copy persons (fn, ln, dob, email, phone) FROM 'C:/Users/mebocom_csbengage/Desktop/a/BackEnd/CreateTables_InsertData/createTabel_insertData/defaultData/persons.csv' DELIMITER ',' CSV HEADER; */

function insertPersonsData () {
    console.log(file);
    /* this works in Mac, not Windows. */
    devInstance.raw(`COPY persons (fn, ln, dob, email, phone) FROM ${file} DELIMITER "," CSV HEADER`)
    .then((res) => {
        console.log('res: ', res);
    })
    .catch((err) => {
        throw err;
    })
    .finally(() => {
        devInstance.destroy();
    });
}