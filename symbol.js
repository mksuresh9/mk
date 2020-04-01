const sym = Symbol()

const person={
    [sym] : "chetan"
}

console.log(person[sym]);


//symbol.iterator

const iterable1 = new Object();

iterable1[Symbol.iterator] = function*(){
    yield 1;
    yield 2;
    yield 3;
};

console.log([...iterable1]);


console.log(Symbol('desc').toString());
console.log(Symbol.iterator.toString());



//get an object

const object1 ={};
const a=Symbol('a');
const b=Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);

console.log(objectSymbols.length);
console.log(objectSymbols);