// const name = 'tanjil';
// localStorage.setItem('my name is',  name)
// console.log(localStorage.getItem('my name is'));



// const product = document.getElementById('textfields');
// const productValue = product.value;

// const quantity = document.getElementById('quantityFields');
// const quantityValue = quantity.value;




function clickSetItem(){
const person={
    name:'tanjil',
    age: 23,
    stydy: true,
}
const convertoStringyfy = JSON.stringify(person);
localStorage.setItem('my info',convertoStringyfy)

const convertPers= JSON.parse(convertoStringyfy)
console.log(convertPers.name);
}
clickSetItem()
