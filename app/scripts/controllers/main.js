'use strict';

/**
 * @ngdoc function
 * @name eeaDoerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eeaDoerApp
 */

angular.module('eeaDoerApp')
    .controller('MainCtrl', function($scope, Tabletop, $window, $timeout, $q, lodash) {
  //  angular.element(document.getElementById('hiding1').show()).scope().$apply();
                   
       

        function asyncdata() {
            var deferred = $q.defer();
            $timeout(function() {
                if ($window.incentiveData) {
                    deferred.resolve({
                        iData: $window.incentiveData,
                        zdata: $window.zipcodeData
                    });
                } else {
                    deferred.reject({
                        data: "Internal error"
                    })
                }
            }, 2000)
            return deferred.promise;
        }
        var utiltiyArray = [];
        asyncdata().then(function(data) {
            $scope.tableData = data.iData;
            
            $scope.tableData2 = data.zdata;
            console.log($scope.tableData2)
        });
        // set the default sort type
        $scope.sortType = 'programName';
        // set the default sort order
        $scope.sortReverse = false;
        // set the default search/filter term

        $scope.searchIncentives = '';
        //Clear filters function
        $scope.clearFilters = function() {
            $scope.searchIncentives = '';
        };
        //Empty Array initialization
        var utilityArray = [];
        var new_comp = [];
        var extracted_info = [];
       
        //Zipcode search functionality
        $scope.zipSearch = function() {
            var textData = $scope.searchIncentives.ZIPCODE;
              console.log(textData)
            var output = lodash.where($window.zipcodeData, {
                ZIPCODE: textData
            });
            console.log(output)
            if (output.length > 0) {
                utilityArray.push(output[0]["Electric Utility 1"]);
                utilityArray.push(output[0]["Gas Utility 2"]);
                utilityArray.push(output[0]["Electric Utility 2"]);
                utilityArray.push(output[0]["GasUtility1"]);
            }
            utilityArray = lodash.without(utilityArray, '');
            var p_utility = lodash.pluck($window.incentiveData, 'participatingUtility');
            var inData = $window.incentiveData;
            for (var i = 0; i < inData.length; i++) {
                var p_utility_array = p_utility[i];
                var comp = p_utility_array.split(',')
                for (var j = 0; j < comp.length; j++) {
                    var clea = comp[j].trim();
                    new_comp.push(clea);
                }
                var combined_array = [utilityArray, new_comp];
                console.log(utilityArray);
                console.log(new_comp);
                var result = combined_array.shift().filter(function(v) {
                    return combined_array.every(function(a) {
                        return a.indexOf(v) !== -1;
                    });
                });
                if (result.length > 0) {
                   
                    console.log(inData[i]);
                    extracted_info.push(inData[i]);
                    
                }
                new_comp = [];
            }
             utilityArray=[];
              $scope.tableData3='';
            $scope.tableData3 = extracted_info;
        }

    }); //End Ctrl

/*  var count = function() {
      console.log($window.incentiveData);
      console.log($window.zipcodeData);
      $scope.tableData = $window.incentiveData;
      $scope.tableData2 = $window.zipcodeData;
  }
  $timeout(count, 2000);*/
