const jsonHendelUser = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(pers=> pers.json())
    .then(data=> {
        console.log(data);
        displayUser(data);
    })
}
const displayUser = (users)=>{
console.log(users[0]);
for(let user of users){
    console.log(user.name);
}
}