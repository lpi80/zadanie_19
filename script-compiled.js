'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*lesson*/
var sayHello = function sayHello() {
    return alert('Hello world!');
};
sayHello();

/*task 1*/
console.log('Task 1');
var hello = 'Hello';
var world = 'World!';
var write = function write(s1, s2) {
    return s1 + ' ' + s2;
};
console.log(write(hello, world));

/*task 2*/
console.log('Task 2');
var multiply = function multiply(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return x * y;
};
console.log(multiply(5, 5));

/*task 3*/
console.log('Task 3');
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var counter = args.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;
    });
    return counter / args.length;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

/*task 4*/
console.log('Task 4');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

/*task 5*/
console.log('Task 5');
var tab = [1, 4, 'Iwona', false, 'Nowak'];
var name = tab[2],
    last = tab[4];

console.log(name, last);

/*codewars task 1*/
function buildString() {
    for (var _len2 = arguments.length, template = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        template[_key2] = arguments[_key2];
    }

    return 'I like ' + template.join(', ') + '!';
}

/*codewars task 2*/
function shuffleIt(arr) {
    var help = arr;

    for (var _len3 = arguments.length, tab = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        tab[_key3 - 1] = arguments[_key3];
    }

    tab.forEach(function (arg) {
        var memory = [];
        help.forEach(function (a) {
            return memory.push(a);
        });

        var _arg = _slicedToArray(arg, 2),
            a = _arg[0],
            b = _arg[1];

        var _ref = [a, b];
        b = _ref[0];
        a = _ref[1];

        help[b] = memory[a];
        help[a] = memory[b];
    });
    return help;
}
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
