const a = 10;

const first =()=>{
    secont();
    console.log('hello iam from first ');
}
const secont = ()=>{
    third();
    console.log('hellw iam frome secont');
}
const third=()=>{
    console.log('hlww im frome third');
}
first();
console.log('execution compleated');