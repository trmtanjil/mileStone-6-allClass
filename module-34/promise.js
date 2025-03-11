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





const fetchData=()=>{
  return  new Promise((resolve, reject) => {
        const status = true;
        if(status){
          
        }
        else{
            reject('server error')
        }
    })
}

fetchData()

.then(res=>console.log(res))
.catch(err=>console.log(err))