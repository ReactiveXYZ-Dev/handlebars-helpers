/**
 * Handlebars Helpers Tests: Math Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

var context = {
  value: 5
};

describe('add', function() {
  describe('{{add value 5}}', function() {
    it('should return the sum of two numbers.', function() {
      var source = '{{add value 5}}';
      var template = Handlebars.compile(source);
      return template(context).should.equal('10');
    });
  });
});

describe('subtract', function() {
  describe('{{subtract value 5}}', function() {
    it('should return the difference of two numbers.', function() {
      var source = '{{subtract value 5}}';
      var template = Handlebars.compile(source);
      return template(context).should.equal('0');
    });
  });
});

describe('divide', function() {
  describe('{{divide value 5}}', function() {
    it('should return the division of two numbers.', function() {
      var source = '{{divide value 5}}';
      var template = Handlebars.compile(source);
      return template(context).should.equal('1');
    });
  });
});

describe('multiply', function() {
  describe('{{multiply value 5}}', function() {
    it('should return the multiplication of two numbers.', function() {
      var source = '{{multiply value 5}}';
      var template = Handlebars.compile(source);
      return template(context).should.equal('25');
    });
  });
});

describe('floor', function() {
  describe('{{floor 5}}', function() {
    it('should return the value rounded down to the nearest integer.', function() {
      var source = '{{floor value}}';
      var template = Handlebars.compile(source);
      return template(context = {
        value: 5.6
      }).should.equal('5');
    });
  });
});

describe('ceil', function() {
  describe('{{ceil 5}}', function() {
    it('should return the value rounded up to the nearest integer.', function() {
      var source = '{{ceil value}}';
      var template = Handlebars.compile(source);
      return template(context = {
        value: 5.6
      }).should.equal('6');
    });
  });
});

describe('round', function() {
  describe('{{round 5}}', function() {
    it('should return the value rounded to the nearest integer.', function() {
      var source = '{{round value}}';
      var template = Handlebars.compile(source);
      return template(context = {
        value: 5.69
      }).should.equal('6');
    });
  });
});

describe('remainder', function() {
  describe('{{remainder value 5}}', function() {
    it('should return the first operand modulo the second operand.', function() {
      var source = '{{remainder value 5}}';
      var template = Handlebars.compile(source);
      return template(context = {
        value: 12
      }).should.equal('2');
    });
  });
});
