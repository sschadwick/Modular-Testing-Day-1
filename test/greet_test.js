'use strict';

var assignment = require('../assignment');
var chai = require('chai');
var expect = chai.expect;

describe('assignment', function() {
  it('should return hello + name', function() {
    expect(assignment.greet('Steven')).to.eql('hello ' + 'Steven');
  });
});

describe('assignment', function() {
  it('should return undefined if no parameter is given', function () {
    expect(assignment.greet()).to.eql(undefined);
  });
});
