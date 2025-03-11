const a = 10;

const first =()=>{
    secont();
    console.log( 'hello iam from first ');
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





function person1(){
    console.log(' 1 the tea is ready');
}
function person2(){
    console.log(' 2 the jalmory is ready');
}
function person3(){
setTimeout(()=>{
    console.log(' 3 fucjka ready');
}, 2000);

}
function person4(){
    console.log(' 4 the jalmory is ready');
}
function person5(){
   setTimeout(() => {
     console.log(' 5 the tea is ready');
   }, 2000);
}
person1();
person2();
person3();
person4();
person5();