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

        //fyiz
        this.unicodeEscape = function(str) {
            return str.replace(/[\s\S]/g, function(character) {
                var escape = character.charCodeAt().toString(16),
                    longhand = escape.length > 2;
                return '\\' + (longhand ? 'u' : 'x') + ('0000' + escape).slice(longhand ? -4 : -2);
            });
        }

    }

})();