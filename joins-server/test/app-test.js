const fixture = require('./fixtures');
const route = require('../consts/routes');

const request = require('supertest');
const http = require('http');
const expect = require('chai').expect;

const testInstance = require('../db/knex-env');
const app = require('../app');
const server = http.createServer(app);

describe('Test Join ---', () => {
    before((done) => {
        testInstance.migrate.latest()
        .then(() => {
            return testInstance.seed.run();
        })
        .then(() => done())
        .catch((err) => {
            throw err;
        });
    });
    after(() => {
        server.close();
    });

    const ra = request(app);
    it('List Cross Join', (done) => {
        ra
        .get(route.base+'/cross')
        .set('Accept','application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.deep.equal(fixture.crossJoinArr);
            done();
        });
    });
});