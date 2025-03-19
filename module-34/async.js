const load=async()=>{
    console.log('hey thear');
console.log('2 are you ok');

const respons =await fetch('https://jsonplaceholder.typicode.com/todos/1')
console.log(respons);



 setTimeout(() => {
    console.log('set timeput');
}, 1000);
 
console.log(10+10);
}
load()

console.log(10);



async function fetchData() {
    const responss = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data =await responss.json()
    console.log(data);
}
fetchData()
console.log('200');