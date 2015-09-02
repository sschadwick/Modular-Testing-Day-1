'use strict';

var assignment = require('../assignment');
var expect = require('chai').expect;

var greet = require(__dirname + '/../lib/greet');

process.argv = ['node', 'myprogram.js', 'johnny'];
//sample input from user
var greetProgramResult = require('../bin/greet');

describe('greeter', function() {
  it('should return hello + name', function() {
    expect(assignment.greet('test')).to.eql('hello ' + 'test');
  });
});

describe('greeter', function() {
  it('should return undefined if no parameter is given', function () {
    expect(assignment.greet()).to.eql(undefined);
  });
});

describe('test the greet program', function() {
  it('should return hello jonny', function() {
    expect(greetProgramResult).to.eql('hello johnny');
  });
});
