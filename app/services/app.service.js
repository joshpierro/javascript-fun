(function () {
    'use strict';

    angular
        .module('angularApp')
        .service('AppService', AppService);

    AppService.$inject = ['utils'];

    function AppService(utils) {

        var context = this;

        this.getQuestion = function (id) {

            var fn,
                fnExecute,
                getNumberInput,
                label,
                numberInputLabel,
                textInputLabel,
                template;

            //TODO replace with a decision object
            switch (id) {
                case '1':
                    fn = this.findMostFrequentIntegerInAnArray;
                    fnExecute = true;
                    break;
                case '2':
                    fn = this.fibonacci;
                    label = 'given a sequence such as [1,1,2,3,5,8,13,21,34,55,89,144,233,377...]';
                    numberInputLabel = 'Enter a (1 based) fibonacci index location';
                    template = "app/templates/fibonacci.html";
                    fnExecute = false;
                    break;
                case '3':
                    fn = this.countTheWizards;
                    label = 'Given a string such as “The five boxing wizards jump quickly with other wizards in a wizardly fashion” count the number of times the string “wizards” occur.';
                    fnExecute = true;
                    template = "";
                    break;
                case '4':
                    fn = this.countTheLetters;
                    label = 'Write a function that takes a string and returns the number of unique letters used in the string. That is, for the input “Hello World” it would return 7. Spaces and punctuation does not count as letters, but may be included in the test data.';
                    fnExecute = false;
                    textInputLabel = 'enter text here';
                    template = "app/templates/count-the-numbers.html";
                    break;
                case '5':
                    fn = this.joshParseInt;
                    label = 'Implement parseInt';
                    textInputLabel = 'Enter a number';
                    template = "app/templates/josh-parse-int.html";
                    fnExecute = false;
                    break;
                case '6':
                    fn = this.knowThyself;
                    label = 'Write a function that returns the number of characters in it’s own source code without using any numeric literals in your source code.';
                    fnExecute = true;
                    break;
                case '7':
                    fn = this.reverseYourself;
                    label = 'Write a function that returns a string containing itself reversed. That is “function foo(){}” should return “{}()oof noitcnuf” (I know, I know… it doesn’t, but your glorious function will!)';
                    template = "app/templates/reverse.html";
                    fnExecute = true;
                    break;
                case '8':
                    fn = this.shiftTheWizard;
                    label = 'Given a string, shift all letters one letter up, wrapping z to a. That is given “wizard” the function should return “xjabse”. Spaces and punctuation should not be changes.';
                    template = "app/templates/shift.html";
                    textInputLabel = 'enter text here';
                    fnExecute = false;
                    break;
                case '9':
                    fn = this.baseSix;
                    label = 'Base 6 is great. Assuming a base 6 number system represented by the letters W, I, Z, A, R, D representing 0-5 write a function that will take a base 6 wizard string and turn it into a regular javascript numeric value. That is IZ would return 8';
                    fnExecute = false;
                    template = "app/templates/baseSix.html";
                    textInputLabel = 'enter base six text here, only the letters W-I-Z-A-R-D allowed';
                    break;
                case '10':
                    fn = this.properCase;
                    label = 'Given a string, return the same string with the first letter in all words capitalized. That is, given “the five boxing wizards jump quickly.” it will return “The Five Boxing Wizards Jump Quickly.';
                    fnExecute = true;
                    template = "app/templates/generic-text.html";
                    textInputLabel = 'enter base text here';
                    break;

                case '11':
                    fn = this.longestWord;
                    label = 'Given a string such as “The five boxing wizards jump quickly.” Return the longest word, in this case “wizards”. If there are multiple equally long words, return the first.';
                    fnExecute = true;
                    template = "app/templates/generic-text.html";
                    textInputLabel = 'enter base text here';
                    break;
                default:
                    fn = this.helloQuestion;
                    fnExecute = false;
            }

            return {
                function: fn,
                label: label,
                numberInputLabel: numberInputLabel,
                textInputLabel: textInputLabel,
                getNumberInput: getNumberInput,
                fnExecute: fnExecute,
                template: template
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
                map.hasOwnProperty(property) && map[property] > highest ? highest = property : highest = highest;
                /*     if (map.hasOwnProperty(property)) {
                 if (map[property] > highest) {
                 highest = property;
                 }
                 }*/
            }
            console.log('the answer is ', highest);
        }

        this.fibonacciXXX = function (number, cache) {
            //F(n) = F(n-1) + F(n-2)
            cache = cache || {};
            if (cache[number]) return cache[number];
            number <= 1 ? cache[number] = 1 : cache[number] = context.fibonacci(number - 1, cache) + context.fibonacci(number - 2, cache);
            console.log(cache[number])
            return cache[number];
        }

        this.fibonacciX = function(num){
            var a = 1, b = 0, temp;
            while (num >= 0){
                temp = a;
                a = a + b;
                b = temp;
                num--;
            }
            console.log(b)
            return b;
        }

        this.fibonacci2 = function(num){
            var start = 1;
           if(num<=1){
               console.log(start)
               return start;
           }else{
               var start = 1, fibNumber = 0, currValue;
              for(var i = 0; i<=num;i++){
                  currValue = start;
                  start = start + fibNumber;
                  fibNumber = currValue;
              }
              console.log(fibNumber)
           }
        }


        this.fibonacci_rec = function(num){
            if (num <= 1) {
                console.log(1)
                return 1;
            }else{
                var answer =  this.function(num-1) + this.function(num-2);
                console.log(answer)
                return answer;
            }
        }


        this.fibonacci = function(num,cache){
            cache = cache || {};
            if(cache[num]){
                return cache[num];
            }else{
                if(num<=1){
                    return 1;
                }else{
                    cache[num] = this.function(num-1,cache[num] ) + this.function(num-2,cache[num]);
                    console.log(cache[num])
                    return cache[num];
                }
            }
        }

        //recursive
        this.fibonacci__ = function(num) {
         //   console.log(this)
            if (num <= 1) return 1;
            console.log(this.function(num - 1) + this.function(num - 2))
            return this.function(num - 1) + this.function(num - 2);
        }

        this.countTheWizards = function () {
            var string = 'The five boxing wizards jump quickly with other wizards in a wizards-ly fashion';
            ///console.log( string.match(/wizards/g))
            console.log((string.match(/wizards/g) || []).length)
        }

        this.mostFrequentLetters = function (string) {
            console.log('this is the string ' + string);
            console.log(string.replace(/[^a-zA-Z]/g, ''));

            //duplicate of above
            var map = {};
            string.replace(/[^a-zA-Z]/g, '').split('').forEach(function getCounts(letter) {
                !map[letter] ? map[letter] = 1 : map[letter]++;
            });

            var highest = {key: '', value: 0};
            for (var property in map) {
                //what if tie
                if (map[property] > highest.value) {
                    highest.key = property;
                    highest.value = map[property];
                }
                ;
            }
            console.log(highest.key + ' is the highest with ' + highest.value + ' occurrences')
        }

        this.countTheLetters = function (string) {
            console.log('this is the string ' + string);
            var map = {}, counter = 0;
            string.replace(/[^a-zA-Z]/g, '').split('').forEach(function getCounts(letter) {
                !map[letter] ? map[letter] = 1 : map[letter]++;
            });
            for (var property in map) {
                counter++;
            }
            console.log('There are ' + counter + ' unique letters');
        }


        this.knowThyself = function () {
            console.log(this.function);
            console.log('this function is this many chars;' + this.function.length);
        }

        //or in repl
        /*     'use strict';
         (function() {
         var test = function (){
         console.log(test.toString().length)
         }
         test();
         })();*/


        //use array methods
        this.reverseYourself1 = function(){console.log(this.function.toString().split('').reverse().join(''));}

        //iterate over string
        this.reverseYourself2 = function(){
            var f = this.function.toString();
            var rF = [];
            for (var c = f.length-1; c>=0 ; c--){
                rF += f[c];
            };
            console.log(rF);
        }

        //with recursion
        this.reverseYourself = function(){

        /*    var reverseString = function(string){
                if (string === ""){
                    return "";
                } else{
                    return reverseString(string.substr(1)) + string.charAt(0);
                }
            }


            reverseString("hello");*/
        }


        this.shiftTheWizard = function(wizardString){

            var output = '';
            for(var letter in wizardString){
                var shift;
                //edge cases
                if (wizardString[letter] == 'z') {
                    shift = String.fromCharCode(97);//a
                }else if(wizardString[letter]===' ' || wizardString[letter].match(/[^a-zA-Z]/)){
                    shift = String.fromCharCode(wizardString.charCodeAt(letter));
                }
                else{
                    shift = String.fromCharCode(wizardString.charCodeAt(letter) + 1);
                }
                output += shift;
            }
          console.log(output)
        }


        this.baseSix = function(inputString){

            if(!inputString){
                inputString='';
            }
            console.log('hello base six');
            //base 6
            var map = {w:0,i:1,z:2,a:3,r:4,d:5};

            var string = 'iz';
            var power = 0;
            var answer = 0;

            for(var i = inputString.length -1; i>=0; i--){
                console.log('letter: ', [inputString[i]]); //letter
                console.log('base six value: ', map[inputString[i]]); //base 6 value
                console.log('power', power);
                answer +=   map[inputString[i]] * Math.pow(6, power)
                power++;
            }

            console.log(answer)

        }


        this.joshParseInt = function (numberString) {
            //http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.2
            console.log('the thing to parse is: ' + numberString);
        }

        this.properCase = function(inputString){
            console.log('hello proper case;');
            var inputString = 'the five boxing wizards jump quickly.';
            var inputArray = inputString.split(' ')
                .map(function(w){
                    return w[0].toUpperCase() + w.substr(1);
                }).join(" ");
            console.log(inputArray);
        }

        this.longestWord = function(inputString){
            console.log('hello long word');
            var inputString = 'the five boxing wizards jump quickly.';

            var inputArray = inputString
                //strip special chars
                .replace(/[^\w\s]/gi, '')
                .split(' ')
                .map(function(w){
                    return {
                        word:w,length:w.length
                    }
                }).sort(function(curr,next){
                    // use - to sort the other way
                    return curr.length + next.length;
                });
            console.log(inputArray[0].word,'is the longest word');
           // console.table('the longest word is:',inputArray[0])
        }

        //fyiz
        //console.log(utils.unicodeEscape('i'))
        this.sayNoToI = function () {
            var e = encodeURIComponent('\x69'),
                w = 'The f' + e + 've boxing w' + e + 'zards jump qu' + e + 'ckly.'
            eval("(funct" + e + "on(){console.log( '" + w + "')})()");
        }


    }

})();