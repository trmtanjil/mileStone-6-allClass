addtocart=()=>{
  const inputProduct  =   document.getElementById('inputproduct')
  const inputQuantity =  document.getElementById('inputQuantity')
    const name = inputProduct.value;
    const quantity = inputQuantity.value;
    productQuantity(name, quantity);
    settoCardContainer(name,quantity)
    containers(name, quantity)

    inputProduct.value='';
    inputQuantity.value='';

}
const productQuantity =(pruducts, quantitys)=>{
  const container=  document.getElementById('productContainer');
  const li = document.createElement('li');
    li.innerText=`
    ${pruducts} : ${quantitys}
    `;
    container.appendChild(li)
}
const settoCardContainer=(pruducts,quantitys)=>{
     const newProducts = {
        name: 'tanjil',
     }
     const convert=JSON.stringify(newProducts)
     localStorage.setItem('pruducts',convert)


    console.log(pruducts,quantitys);
}


 