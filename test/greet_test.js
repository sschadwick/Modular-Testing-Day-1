'use strict';

var assignment = require('../assignment');
var chai = require('chai');
var expect = chai.expect;

process.argv = ['node', 'myprogram.js', 'johnny'];
//sample input from user
var greetProgramResult = require('../bin/greet');

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

describe('test the greet program', function() {
  it('should return hello jonny', function() {
    expect(greetProgramResult).to.eql('hello johnny');
  });
});
