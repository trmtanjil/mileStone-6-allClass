const numbers = [1,2,3,4,5,6,];

let temp =[];
for(let i =0; i<numbers.length; i ++){
    const element = numbers[i];
    const sum = element+9;
    temp.push(sum)
}
console.log(temp);


const maped = numbers.map(num=>num+1);

const mapede = numbers.map(num=>{
    return num+1})
console.log(mapede);

const number = [1,2,3,4,4,3];

const arwoNumber= number.map(nmber => nmber*nmber);
const arwoNumbers= number.map(nmber => {
    return nmber*nmber;
});
console.log(arwoNumbers);

const sttng = ['tanjil','tanvir', 'hroalom'];
for(let i =0; i<sttng.length; i ++){
    let numberr = sttng[i];
    // console.log(numberr);
}
const arroStrng = sttng.map((elementt,index)=>{
    console.log(index);
    return elementt;
})
const arroStrn = sttng.map(elementt=>{
    console.log(elementt);
    return elementt;
})