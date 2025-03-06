const product =[
    {id: 1, name: 'samsung', color: 'black',price: 1220, country: 'viatNum'},
    {id: 2, name: 'iphon', color: 'black',price: 1120, country: 'Usa'},
    {id: 3, name: 'xiomy', color: 'gray',price: 120, country: 'chaina'},
    {id: 4, name: 'walton', color: 'bangla',price: 120, country: 'Bangladesh'},
    {id: 5, name: 'motorola', color: 'white',price: 120, country: 'china'},
]
//! map 
const prodct = product.map(element=>{
  
      console.log(element);

})

// !foreach 
product.forEach(Element=>{
    if(Element.color==='black'){
        // console.log(Element);
    }
})
 
product.forEach(products=>{
    if(products.price>1100){
        // console.log(products);
    }
})

// !filter 
const productFiltering = product.filter(Element=>{
    if(Element.price>=1100){
        // console.log(Element);
    }
})

const newProducnt = product.filter(p=>p.id !=3);
// console.log(newProducnt);
// !find 
const productFind = product.find(prodct => prodct.id===4);
// console.log(productFind);

const producColorfind = product.find(product=>product.color==='black');
// console.log(producColorfind);
