const person = {
    name: 'tanjil',
    age : 21,
    country: 'bd',
}
// console.log(person['name']);

for(let key in person){
    let persons = `key : ${key} value : ${person[key]}`
    // console.log(persons);
}

// for of 

for(let [keys, values] of Object.entries(person)){
    console.log(`keys : ${keys} value : ${values}`);
}
