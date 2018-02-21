const consts = require('../constances/consts');
const devInstance = require('../db/knex-env');
let csv = require('csv');
let csvObj = csv();
const path = require("path");
const pdFile = path.resolve(__dirname, '../defaultData/products.csv');

function MyCSV(Fone, Ftwo, Fthree) {
	this.FieldOne = Fone;
	this.FieldTwo = Ftwo;
	this.FieldThree = Fthree;
};

let myData = new Array();

exports.seed = function (knex, Promise) {
	// Deletes ALL existing entries
	return knex(consts.pdtb).del()
		.then(() => {
			// Inserts seed entries
			// return knex(consts.pdtb).insert();
			return devInstance(consts.ptb).select('pId').returning('*');
		})
		.then((res) => {
			console.log(res);
			console.log('17 -- ', pdFile);
			console.log('18 -- ', csvObj);
			/* csv file could be read by d3, fast-csv, csv in Mac, but not windows,
			in windows, jq ajax is the way. */
			csvObj.from.path('../defaultData/products.csv').to.array((data) => {
				for (const index = 0; index < data.length; index++) {
					myData.push(new MyCSV(data[index][0], data[index][1], data[index][2]));
				}
				return myData;
			});
			console.log('23');
		})
		.then((res) => {
			console.log('26 ', res);
		})
		.catch((err) => {
			throw err;
		});
};
