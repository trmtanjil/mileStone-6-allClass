console.log('1 hllw');
console.log(' 2 hllw');

setTimeout(()=>{
console.log('3 tanjil');
},3000)

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>console.log(data))

console.log('3 hllw');


function sum(){
console.log('tanjil');
}
sum()

