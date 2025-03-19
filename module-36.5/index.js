// const name = 'tanjil';
// localStorage.setItem('my name is',  name)
// console.log(localStorage.getItem('my name is'));



// const product = document.getElementById('textfields');
// const productValue = product.value;

// const quantity = document.getElementById('quantityFields');
// const quantityValue = quantity.value;




function clickSetItem(){
const person={
    name:'tanjil 11',
    age: 23,
    stydy: true,
}

const converted = JSON.stringify(person)
localStorage.setItem('info', converted)
}
const data = localStorage.getItem('info')
const convertedpers = JSON.parse(data)
console.log(convertedpers);
// clickSetItem()
