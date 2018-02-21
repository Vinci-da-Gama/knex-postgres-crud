// process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const passportStub = require('passport-stub');

const app = require('../../src/server/app');
const testIns = require('../../src/server/db/knex-env');
const fixture = require('./fixture');

chai.use(chaiHttp);
passportStub.install(app);

describe('routes : index', () => {

	beforeEach(() => {
		return testIns.migrate.rollback()
			.then(() => { return testIns.migrate.latest(); })
			.then(() => {
				return testIns.seed.run();
			})
			.catch((err) => {
				console.log(err);
			});
	});

	afterEach(() => {
		passportStub.logout();
		return testIns.migrate.rollback();
	});

	const cra = chai.request(app);

	describe('GET /', () => {
		it('should render the index', (done) => {
			cra
				.get('/')
				.end((err, res) => {
					res.redirects.length.should.equal(0);
					res.status.should.equal(200);
					res.type.should.equal('text/html');
					res.text.should.contain('<h1>Welcome to Express!</h1>');
					res.text.should.contain('<h2>The sum is 3</h2>');
					done();
				});
		});
	});

	describe('GET /404', () => {
		it('should throw an error', (done) => {
			cra
				.get('/404')
				.end((err, res) => {
					res.redirects.length.should.equal(0);
					res.status.should.equal(404);
					res.type.should.equal('application/json');
					res.body.message.should.eql('Not Found');
					done();
				});
		});
	});

	describe('POST /auth/register', () => {
		it('should register a new user', (done) => {
			cra
				.post('/auth/register')
				.send(fixture.registerUser)
				.end((err, res) => {
					should.not.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(200);
					res.type.should.eql('application/json');
					res.body.message.should.eql('Authenticated User');
					done();
				});
		});
		/* it('should throw an error if a user is logged in', (done) => {
				passportStub.login({
					username: 'jeremy',
					password: 'johnson123'
				});
				cra
				.post('/auth/register')
				.send({
					username: 'michael',
					password: 'herman'
				})
				.end((err, res) => {
					should.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(401);
					res.type.should.eql('application/json');
					res.body.message.should.eql('You are already logged in');
					done();
				});
		  }); */
	});

	describe('POST /auth/login', () => {
		it('should login a user', (done) => {
			cra
				.post('/auth/login')
				.send(fixture.loginUser)
				.end((err, res) => {
					should.not.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(200);
					res.type.should.eql('application/json');
					res.body.message.should.eql('User is logged in.');
					done();
				});
		});
		it('should not login an unregistered user', (done) => {
			cra
				.post('/auth/login')
				.send({
					username: 'michael',
					password: 'johnson123'
				})
				.end((err, res) => {
					should.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(404);
					res.type.should.eql('application/json');
					res.body.message.should.eql('User not found');
					done();
				});
		});
		/* it('should throw an error if a user is logged in', (done) => {
			passportStub.login({
				username: 'jeremy',
				password: 'johnson123'
			});
			cra
				.post('/auth/login')
				.send(fixture.loginUser)
				.end((err, res) => {
					should.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(401);
					res.type.should.eql('application/json');
					res.body.message.should.eql('You are already logged in');
					done();
				});
		}); */
	});

	describe('GET /auth/logout', () => {
		/* it('should logout a user', (done) => {
			passportStub.login(fixture.loginUser);
			chai.request(app)
				.get('/auth/logout')
				.end((err, res) => {
					should.not.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(200);
					res.type.should.eql('application/json');
					res.body.message.should.eql('Logout Sucessfully');
					done();
				});
		}); */
		it('should throw an error if a user is not logged in', (done) => {
			cra
				.get('/auth/logout')
				.end((err, res) => {
					should.exist(err);
					res.redirects.length.should.eql(0);
					res.status.should.eql(401);
					res.type.should.eql('application/json');
					res.body.message.should.eql('Please log in');
					done();
				});
		});
	});

	describe('GET /user', () => {
		/* it('should return a success', (done) => {
		passportStub.login(fixture.loginUser);
		cra
			.get('/user')
			.end((err, res) => {
				should.not.exist(err);
				res.redirects.length.should.eql(0);
				res.status.should.eql(200);
				res.type.should.eql('application/json');
				res.body.status.should.eql('success');
				done();
			});
		}); */
		it('should throw an error if a user is not logged in', (done) => {
		cra
			.get('/user')
			.end((err, res) => {
				should.exist(err);
				res.redirects.length.should.eql(0);
				res.status.should.eql(401);
				res.type.should.eql('application/json');
				res.body.message.should.eql('Please log in');
				done();
			});
		});
	});

	describe('GET /admin', () => {
		/* it('should return a success', (done) => {
		passportStub.login(fixture.adminUser);
		cra
			.get('/admin')
			.end((err, res) => {
				should.not.exist(err);
				res.redirects.length.should.eql(0);
				res.status.should.eql(200);
				res.type.should.eql('application/json');
				res.body.message.should.eql('u r admin');
				done();
			});
		}); */
		it('should throw an error if a user is not logged in', (done) => {
		cra
			.get('/admin')
			.end((err, res) => {
				should.exist(err);
				res.redirects.length.should.eql(0);
				res.status.should.eql(401);
				res.type.should.eql('application/json');
				res.body.message.should.eql('Please log in');
				done();
			});
		});
		/* it('should throw an error if a user is not an admin', (done) => {
		passportStub.login(fixture.loginUser);
		cra
			.get('/admin')
			.end((err, res) => {
				should.exist(err);
				res.redirects.length.should.eql(0);
				res.status.should.eql(401);
				res.type.should.eql('application/json');
				res.body.message.should.eql('You are not authorized');
				done();
			});
		}); */
	});

});
