var sinon = require('sinon'),
    should = require('should');
describe('Flatiron-Restful-Express', function () {
  var app = require('flatiron').app,
      express = require('express')();
  before(function () {
    sinon.stub(express, 'use');
  });
  describe('#attach', function () {
    it('should attach the router', function () {
      app.use(require('flatiron-express'), { instance: express });
      app.use(require('..'));
      app.router.use.calledOnce.should.be.true;
      app.router.use.args[0][0].name.should.equal('middleware');
    });
  });
  after(function () {
    express.use.restore();
  });
});
