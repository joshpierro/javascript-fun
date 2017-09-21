(function () {
    'use strict';

    angular
        .module('angularApp')
        .service('AppService', AppService);

    AppService.$inject = [];

    function AppService() {

        var context = this;

        this.getQuestion = function (id) {
            var fn, fnExecute, getNumberInput, label, numberInputLabel;
            switch (id) {
                case '1':
                    fn = this.findMostFrequentIntegerInAnArray;
                    fnExecute = true;
                    break;
                case '2':
                    fn = this.fibonacci;
                    getNumberInput = true;
                    label = 'given a sequence such as [1,1,2,3,5,6,13,21,34,55,89,144,233,377...]';
                    numberInputLabel = 'Enter a (1 based) fibonacci index location';
                    fnExecute = false;
                    break;
                case '3':
                    fn = this.countTheWizards;
                    label = 'Given a string such as “The five boxing wizards jump quickly with other wizards in a wizardly fashion” count the number of times the string “wizards” occur.';
                    fnExecute = true;
                    break;
                default:
                    fn = this.helloQuestion;
                    fnExecute = false;

            }

            return {
                function: fn,
                label: label,
                numberInputLabel: numberInputLabel,
                getNumberInput: getNumberInput,
                fnExecute: fnExecute
            }

        }


        this.helloQuestion = function () {
            console.log('hello question');
        }

        this.findMostFrequentIntegerInAnArray = function () {
            var data = [1, 2, 2, 3, 5, 6, 9, 12, 3, 12, 1, 6, 2];
            console.log('here is the array', data);
            console.log('the answer should be 2');
            var map = {};
            data.forEach(function getCounts(item) {
                !map[item] ? map[item] = 1 : map[item]++;
            });
            var highest = 0;
            console.log('here are the counts ', map);
            for (var property in map) {
                map.hasOwnProperty(property) && map[property] > highest ?  highest = property : highest = highest;
                                /*     if (map.hasOwnProperty(property)) {
                                 if (map[property] > highest) {
                                 highest = property;
                                 }
                                 }*/
            }
            console.log('the answer is ', highest);
        }

        this.fibonacci = function (number, cache) {
            cache = cache || {};
            if (cache[number]) return cache[number];
            number <= 1 ?  cache[number] = 1 : cache[number] = context.fibonacci(number - 1, cache) + context.fibonacci(number - 2, cache);
            console.log(cache[number])
            return cache[number];
        }

        this.countTheWizards = function(){
            var string = 'The five boxing wizards jump quickly with other wizards in a wizards-ly fashion';
            console.log((string.match(/wizards/g) || []).length)
        }

    }

})();