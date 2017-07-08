console.log('--------------');
console.log('Array of strings');
console.log('--------------');

let actors: string[];
let magicNumbers: number[];
let magicBools: boolean[];

actors = ['Rock Dwayne', 'Deepika'];
for (let actor of actors) {
    console.log(actor);
}


console.log('--------------');
console.log('Array of numbers');
console.log('--------------');

magicNumbers = [123, 234, 456];
for (let num of magicNumbers) {
    console.log(num);
}

console.log('--------------');
console.log('Array of booleans');
console.log('--------------');

magicBools = [true, true, false];
for (let flag of magicBools) {
    console.log(flag);
}