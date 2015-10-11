'use strict';

describe('Filter: typeFilter', function () {

  // load the filter's module
  beforeEach(module('eeaDoerApp'));

  // initialize a new instance of the filter before each test
  var typeFilter;
  beforeEach(inject(function ($filter) {
    typeFilter = $filter('typeFilter');
  }));

  it('should return the input prefixed with "typeFilter filter:"', function () {
    var text = 'angularjs';
    expect(typeFilter(text)).toBe('typeFilter filter: ' + text);
  });

});
