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
                },
                {
                    itemId: 4,
                    name: 'Count the Letters'
                },
                {
                    itemId: 5,
                    name: 'Implement parseInt'
                },
                {
                    itemId: 6,
                    name: 'Know thyself'
                },
                {
                    itemId:7,
                    name:'Reverse Yourself'
                },
                {
                    itemId:8,
                    name:'Shift The Wizard'
                },
                {
                    itemId:9,
                    name:'Base Six'
                },
                {
                    itemId:10,
                    name:'Upper Case them'
                },
                {
                    itemId:11,
                    name:'Find the longest word'
                }
            ];

        }; 
        




    }

})();