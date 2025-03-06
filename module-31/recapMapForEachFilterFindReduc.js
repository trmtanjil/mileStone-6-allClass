const product =[
    {id: 1, name: 'samsung', color: 'black',price: 1220, country: 'viatNum'},
    {id: 2, name: 'iphon', color: 'black',price: 1120, country: 'Usa'},
    {id: 3, name: 'xiomy', color: 'gray',price: 120, country: 'chaina'},
    {id: 4, name: 'walton', color: 'bangla',price: 120, country: 'Bangladesh'},
    {id: 5, name: 'motorola', color: 'white',price: 120, country: 'china'},
]

const products = product.map(prodct=>{
    if(prodct.name==='motorola'){
        prodct.price= prodct.price+ 500;
    }
    return prodct;
})
// console.log(products);

// product.forEach(p=>console.log(p));

product.forEach(p=>{
    if(p.name=='samsung'){
        // console.log(p);
    }
})


const prodct = product.find(pp=>pp.id===1);
console.log(prodct);

const newPrduct = product.filter(p=>p.price>=1200);
console.log(newPrduct);