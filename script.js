/*lesson*/
const sayHello = () => alert('Hello world!');
sayHello();

/*task 1*/
console.log('Task 1');
const hello = 'Hello';
const world = 'World!';
const write = (s1, s2) => `${s1} ${s2}`;
console.log(write(hello, world));

/*task 2*/
console.log('Task 2');
const multiply = (x, y = 1) => x * y;
console.log(multiply(5, 5));

/*task 3*/
console.log('Task 3');
const average = (...args) => {
    let licznik = 0;
    let suma = args.forEach(arg => licznik += arg);
    return licznik / args.length;
}
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

/*task 4*/
console.log('Task 4');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
console.log(average(...grades));

/*task 5*/
console.log('Task 5');
const tab = [1, 4, 'Iwona', false, 'Nowak'];
const [, , name, , last] = tab;
console.log(name, last);

/*codewars task 1*/
function buildString(...template) {
    return `I like ${template.join(', ')}!`;
}

/*codewars task 2*/
function shuffleIt(arr, ...tab) {
    let pomoc = arr;
    tab.forEach(arg => {
        let pamiec = [];
        pomoc.forEach(a => pamiec.push(a));
        let [a, b] = arg;
        [b, a] = [a, b];
        pomoc[b] = pamiec[a];
        pomoc[a] = pamiec[b];


    })
    return pomoc;
}
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));
