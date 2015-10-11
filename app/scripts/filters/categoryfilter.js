'use strict';

/**
 * @ngdoc filter
 * @name eeaDoerApp.filter:categoryFilter
 * @function
 * @description
 * # categoryFilter
 * Filter in the eeaDoerApp.
 */
angular.module('eeaDoerApp')
  .filter('categoryFilter', function () {
    return function (items, categories) {
     
      var categoried = [];

      angular.forEach(items, function(item){
        debugger;
    	  if (categories.appliances === false && categories.construction === false) {
    		categoried.push(item);
    	  }else if(categories.appliances === true && categories.construction === false && item.category === 'appliances'){
    		categoried.push(item);
         }else if(categories.construction === true && categories.appliances === false && item.category === 'construction'){
    		categoried.push(item);
    	  }

      });
      return categoried;
     };
  });
