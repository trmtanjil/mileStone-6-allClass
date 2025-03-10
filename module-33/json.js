const person = {
    Name : "tanjil",
    age : 10,
    friends: ['sharif', "hosain", 'aziz'],
    status: true,
}
// console.log(person);

const newperson = JSON.stringify(person);
console.log(newperson);
console.log(typeof newperson);




const  jsonclick =()=>{
    const newperson1 = JSON.parse(newperson);
    console.log(newperson1);
}