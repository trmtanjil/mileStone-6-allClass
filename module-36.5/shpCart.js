addtocart=()=>{
  const inputProduct  =   document.getElementById('inputproduct')
  const inputQuantity =  document.getElementById('inputQuantity')
    const name = inputProduct.value;
    const quantity = inputQuantity.value;
    productQuantity(name, quantity);
    saveProductLocalStorage(name,quantity)
    // containers(name, quantity)

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

const getPoductlocalStorage=()=>{
  let cart ={};
  const getProduct= localStorage.getItem("cart");
  if(getProduct){
    cart = JSON.parse(getProduct)
  } 
    return cart;
}


const displayProductLocalStorag=()=>{
  const products = getPoductlocalStorage();
   for(const productt in products){
    productQuantity(productt,products[productt])
   }
}


const saveProductLocalStorage=(pruducts,quantitys)=>{
  const cart= getPoductlocalStorage();

  cart[pruducts]= quantitys;
   const converString = JSON.stringify(cart);
   localStorage.setItem("cart",converString)
   console.log(converString);
}

displayProductLocalStorag()
 