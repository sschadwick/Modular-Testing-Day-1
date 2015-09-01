'use strict';

var assignment = require('../assignment');
var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('assignment', function() {
  it('should return hello + name', function() {
    expect(assignment.greet('test')).to.eql('hello ' + 'test');
  });
});

describe('assignment', function() {
  it('should return undefined if no parameter is given', function () {
    expect(assignment.greet()).to.eql(undefined);
  });
});

describe('command line greeting', function() {
  it('should take the argument and say hello + arg', function() {

    expect(assignment.greet(process.argv[2])).to.eql('hello ' + process.argv[2]);

  });
});
