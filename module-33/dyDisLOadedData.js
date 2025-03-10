const jsonLoadedelUser=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(serv => serv.json())
    .then(data=>{
        // console.log(data);
        despers(data);
    })
}

const despers =(users)=>{

const licreat =  document.getElementById("showingUser");



for(let user of users){
    const li = document.createElement('li');
    li.innerHTML=`
    ${user.name}
`;
licreat.appendChild(li);
// console.log (user);
// console.log (user.name);
}
}
