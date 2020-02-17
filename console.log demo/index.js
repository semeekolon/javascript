const foo = {name: 'Tom', age: 30, nervous: false};
const bar = {name: 'Dick', age: 40, nervous: false};
const baz = {name: 'Harry', age: 50, nervous: true};



const names = [
    {name: 'Butters', age: 09, nervous: true}, 
    {name: 'Eric', age: 09, nervous: false },
    {name: 'Kyle', age: 09, nervous: false},
    {name: 'tom', age: 30, nervous: false}, 
    {name: 'dick', age: 40, nervous: false} 
];

console.log('Bad way');

console.log(foo);
console.log(bar);
console.log(baz);

console.log('Good way 1');
console.log({foo, bar, baz});

console.log('Good way 2');
console.table([foo, bar, baz]);
console.table([foo]);
console.log('Array in table.');
console.table(names);

