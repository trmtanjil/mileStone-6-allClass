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

const fetchData=()=>{
  return  new Promise((resolve, reject) => {
        const status = false;
        if(status){
          const mocdata={
            json:()=>Promise.resolve({name:'tanjil'})
          }
          resolve(mocdata)
        }
        else{
            reject('server error')
        }
    })
}

fetchData()

.then(res=>res.json())
.then(data=>console.log(data))

.catch(err=>console.log(err))