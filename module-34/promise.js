// const fetchData=()=>{
//   return  new Promise((resolve, reject) => {
//         const status = true;
//         if(status){
//             resolve({name:"tanjil"})
//         }
//         else{
//             reject('server error')
//         }
//     })
// }

// fetchData()

// .then(res=>console.log(res))
// .catch(err=>console.log(err))



                //? another way 

// const fetchData=()=>{
//   return  new Promise((resolve, reject) => {
//         const status = false;
//         if(status){
//           const mocdata={
//             json:()=>Promise.resolve({name:'tanjil'})
//           }
//           resolve(mocdata)
//         }
//         else{
//             reject('server error')
//         }
//     })
// }

// fetchData()
// .then(res=>res.json())
// .then(data=>console.log(data))

// .catch(err=>console.log(err))

const urls=[
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/comments?postId=1'
];

Promise.all(urls.map(url=>{
    return fetch(url)
    .then(res=>res.json())
    .then(data=>data)
}))
.then(res => res)
.then(data=>console.log(data))
.catch(error=>console.log('got error',error))
