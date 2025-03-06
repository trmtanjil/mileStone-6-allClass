const product =[
    {id: 1, name: 'samsung', color: 'black',price: 1220, country: 'viatNum'},
    {id: 2, name: 'iphon', color: 'black',price: 1120, country: 'Usa'},
    {id: 3, name: 'xiomy', color: 'gray',price: 1220, country: 'chaina'},
    {id: 4, name: 'walton', color: 'bangla',price: 1320, country: 'Bangladesh'},
    {id: 5, name: 'motorola', color: 'white',price: 1220, country: 'china'},
]
//! map 
// const prodct = product.map(element=>{
//     console.log(element);
// })

// !foreach 
product.forEach(Element=>{
    if(Element.color==='black'){
        console.log(Element);
    }
})
 