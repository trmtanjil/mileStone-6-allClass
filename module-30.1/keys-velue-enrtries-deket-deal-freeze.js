let obkvdf= {
    name: 'tanjil',
    age: 21,
}
Object.seal(obkvdf);

obkvdf.mobile= 'not found'
console.log(Object.keys(obkvdf));
console.log(Object.values(obkvdf));
console.log(Object.entries(obkvdf));
console.log(obkvdf);