// const knexDbCleaner = require('knex-cleaner');
const request = require('supertest');
const expect = require('chai').expect;
const http = require('http');

const knexConn = require('../db/knex-env');
const app = require('../app');
const fixture = require('./fixture');

const server = http.createServer(app);

describe('CRUD stickers', () => {
	before((done) => {
		/* knexDbCleaner.clean(knexConn)
		.then((res) => {
			console.log(res.rows.length);
			knexConn.migrate.latest();
		})
		.then(() => {
			console.log('bb');
			return knexConn.seed.run();
		})
		.then(() => done()); */

		/* knexConn.table('sticker').del()
			.then(() => {
				knexConn.migrate.latest();
			})
			.then(() => {
				return knexConn.seed.run();
			})
			.then(() => done()); */

		knexConn.migrate.latest()
			.then(() => {
				return knexConn.seed.run();
			})
			.then(() => done());
	});

	after(() => {
		server.close();
	});

	it('List all records', (done) => {
		request(app)
			.get('/stickers')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('array');
				expect(res.body).to.deep.equal(fixture.stickers);
				done();
			});
	});

	it('Get One Sticker With Id = 3', (done) => {
		request(app)
			.get('/stickers/3')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				// console.log(res.body);
				expect(res.body).to.deep.equal(fixture.stickers[2]);
				done();
			});
	});

	it('Create one sticker', (done) => {
		request(app)
			.post('/stickers')
			.send(fixture.sticker)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				fixture.sticker.id = res.body.id;
				expect(res.body).to.deep.equal(fixture.sticker);
				done();
			});
	});

	it('Update one sticker', (done) => {
		fixture.sticker.rating = 5;
		request(app)
			.put('/stickers/9')
			.send(fixture.sticker)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				expect(res.body).to.deep.equal(fixture.sticker);
				done();
			});
	});

	it('Delete one sticker', (done) => {
		request(app)
			.delete('/stickers/9')
			.send(fixture.sticker)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then((res) => {
				expect(res.body).to.be.a('object');
				expect(res.body).to.deep.equal(fixture.successMsg);
				done();
			});
	});
});

// psql -h collin.lifeiq.io -U mobecomdevops
// M0bec0m17
// kelin@csbengage.com
// Abcd1234
