// const asyncronus =()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(sevic=>sevic.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log('error get ',error))
// }
// asyncronus()

// const num1 = 10;
// const num2 = 10;
// const result = num1+num2;

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(serv => serv.json())
// .then(data=>console.log(data))

// console.log(result);
// console.log('tanjil');


const asyncronuss =async()=>{
  try{
    const respons = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =await respons.json();
    console.log(data);
  }
  catch{
    console.log('error paichi');
  }
}
asyncronuss()