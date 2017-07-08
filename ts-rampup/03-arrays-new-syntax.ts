console.log('--------------');
console.log('Array of strings');
console.log('--------------');


let actorsArr: Array<string>;
let numbersArr: Array<number>;
let boolArr: Array<boolean>;

actorsArr = ['Rock Dwayne', 'Deepika'];
for (let actor of actorsArr) {
    console.log(actor);
}


console.log('--------------');
console.log('Array of numbers');
console.log('--------------');

numbersArr = [123, 234, 456];
for (let num of numbersArr) {
    console.log(num);
}

console.log('--------------');
console.log('Array of booleans');
console.log('--------------');

boolArr = [true, true, false];
for (let flag of boolArr) {
    console.log(flag);
}