let distructur = {
    name: 'tanjil',
    age: 21,
    hoby : 'eating ',
};
distructur.d
let disName =distructur.name;
let disage =distructur.age;
let dishoby =distructur.hoby;
console.log(dishoby);

let {name, agee, hoby}= distructur;
console.log(agee);


// array distructuring 

let arrName = ['tanjil', 'tanvir', 'gias vai'];

let [myNmae, brotherName, InstructorName] = arrName;
console.log(myNmae);