'use strict';

/**
 * @ngdoc filter
 * @name eeaDoerApp.filter:typeFilter
 * @function
 * @description
 * # typeFilter
 * Filter in the eeaDoerApp.
 */
angular.module('eeaDoerApp')
  .filter('typeFilter', function () {
    return function (items, types) {

      var filtered = [];
      
      angular.forEach(items, function(item){
    	  if (types.renewables === false && types.efficiency === false) {
    		filtered.push(item);
    	  }else if(types.renewables === true && types.efficiency === false && item.incentiveType === 'renewables'){
    		filtered.push(item);
         }else if(types.efficiency === true && types.renewables === false && item.incentiveType === 'efficiency'){
    		filtered.push(item);
    	  }

      });


      return filtered;
      //'typeFilter filter: ' + items;

    };
  });
