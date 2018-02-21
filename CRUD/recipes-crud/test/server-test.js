const fixture = require('./fixtures');
const consts = require('../consts/consts');

const request = require('supertest');
const expect = require('chai').expect;
const http = require('http');

const testInstance = require('../db/knex-env');
const app = require('../app');
const server = http.createServer(app);

describe('CRUD Recipes Test', () => {
    before((done) => {
        testInstance.migrate.latest()
            .then(() => {
                return testInstance.seed.run();
            })
            .then(() => done())
            .catch((err) => {
                console.log('20 -- err : ', err);
            });
    });

    after(() => {
        server.close();
    });

    const ra = request(app);
    it('List All Recipes', (done) => {
        ra
        .get(consts.baseApiStr)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.length(2);
            expect(res.body[0].id).equal(1);
            done();
        });
    });

    it('Get first Recipe -- Id = 1', (done) => {
        const obj1st = fixture.recipesData[0];
        ra
        .get(consts.baseApiStr+'/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).to.be.a('object');
            expect(res.body.id).equal(obj1st.id);
            expect(res.body.title).equal(obj1st.title);
            expect(res.body.description).equal(obj1st.description);
            expect(res.body.image).equal(obj1st.image);
            expect(res.body.directions).equal(obj1st.directions);
            expect(res.body.nutrition.data).to.have.length(2);
            expect(res.body.ingredients.data).to.have.length(2);
            done();
        });
    });

    it('Create New Recipe.', (done) => {
        ra
        .post(consts.baseApiStr)
        .send(fixture.sigRecipe)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).to.be.a('object');
            expect(res.body.id).equal(3);
            expect(res.body.title).equal(fixture.sigRecipe.title);
            expect(res.body.description).equal(fixture.sigRecipe.description);
            expect(res.body.image).equal(fixture.sigRecipe.image);
            expect(res.body.directions).equal(fixture.sigRecipe.directions);
            expect(res.body.nutrition.data).to.have.length(2);
            expect(res.body.ingredients.data).to.have.length(2);
            done();
        });
    });

    it('Update recipe 1st.', (done) => {
        const nr = fixture.newRecipe;
        ra
        .put(consts.baseApiStr+'/1')
        .send(nr)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).to.be.a('object');
            expect(res.body.id).equal(1);
            expect(res.body.title).equal(nr.title);
            expect(res.body.description).equal(nr.description);
            expect(res.body.image).equal(nr.image);
            expect(res.body.directions).equal(nr.directions);
            expect(res.body.nutrition.data).to.have.length(2);
            expect(res.body.ingredients.data).to.have.length(2);
            done();
        });
    });

    it('delete recipe --> Id = 3', (done) => {
        ra
        .delete(consts.baseApiStr+'/3')
        .send(fixture.sigRecipe)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body).to.be.a('object');
            expect(res.body).to.deep.equal(consts.successMsg);
            done();
        });
    });

});