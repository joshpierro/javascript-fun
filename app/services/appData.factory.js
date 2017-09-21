(function () {
    'use strict';

    angular
        .module('angularApp')
        .factory('AppData', AppData);

    AppData.$inject = ['$http'];

    function AppData($http) {

        var BASE_URL = 'https://swapi.co/api/people/';

        var service = {
            getItems: getItems,
            getItem: getItem
        };

        return service;

        /*function getItems(){
          return $http.get(BASE_URL)
               .then(function(result){
                   return result.data.results;
            });
        }*/

      /*  function getItem(itemId) {
            return  $http.get(BASE_URL + itemId + '/')
                .then(function(result){
                    return result.data;
                });
        };*/

      function getItem(){

      }

        function getItems() {

            return [
                {
                    itemId: 1,
                    name:'Find the most frequent integer in an array'
                },
                {
                    itemId: 2,
                    name: 'Write fibbonaci iteratively and recursively'
                },
                {
                    itemId: 3,
                    name: 'Count the wizards'
                }
            ];

        }; 
        




    }

})();