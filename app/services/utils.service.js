(function () {
    'use strict';
    angular
        .module('angularApp')
        .service('utils', utils);

    function utils() {

        this.toUTCDate = function(date){
            var _utc = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),  date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
            return _utc;
        };

        this.truncateTestForDisplay = function(text,maxLength){
            //todo implement
        }

    }

})();