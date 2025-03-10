const jsonclick = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response=> response.json())
.then(data=> console.log(data))
}



// const fetchStringyfy = JSON.stringify(fetchAPI);
// console.log(fetchStringyfy);