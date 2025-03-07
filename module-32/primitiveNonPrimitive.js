//!primitiv pass by value
let primitive = 'tanjil';
let newPrimitiv = primitive;

console.log(newPrimitiv);
primitive =  'tanvir';
console.log(newPrimitiv);

//! non primitv pass by referanch
let nonPrimitiv = {
    name : 'nonPrimitiv tanjil',
}
console.log(nonPrimitiv.name);

let newNonPrimitiv = nonPrimitiv;
nonPrimitiv.name= 'non primitiv tanvir'

console.log(newNonPrimitiv);