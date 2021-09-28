const person = {
    name:"saad,rohan,rapin",
    age:6
}
const getItem = property =>{
    for(const key in person){
        if (key === property) {
            console.log(person[key]);
        }
    }
}
// getItem("name");

const person2 ={
    name:"rapin",
    age : 5
}
const setItem = (property,value) =>{
    person2[property] = value;
}
setItem("color","white");
console.log(person2); 














// const displayLocalStorageCart = () =>{
//     const cart  = getCart();
//     // cart objects
//     for(const name in cart){
//         console.log(name);
//         displayProduct(name);
//     }
// }

// const addProduct = () =>{
//     const nameField = document.getElementById("product-name");
//     const name = nameField.value;
//     console.log(name)

//     if (!name) {
//         return;
//     }
//     // display in the UI
//     displayProduct(name);

//     // addProduct to cart
//     addProductToCart(name);

//     // clear
//     nameField.value = '';
// }

// const displayProduct = name =>{
//     const ul = document.getElementById("products");
//     const li = document.createElement('li');
//     li.innerText = name;
//     ul.appendChild(li);
// }

// const getCart = () =>{
//     const cart = localStorage.getItem("cart");

//     let cartObj;
//     if (cart) {
//         cartObj = JSON.parse(cart);
//     }
//     else {
//         cartObj = {};
//     }
//     return cartObj ;
// }

// const addProductToCart = name =>{
//     const cart = getCart();
//     if (cart[name]) {
//         cart[name] = cart[name] + 1;
//     }
//     else{
//         cart[name] = 1;
//     }
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart',cartStringified);
// }

// const orderProduct = () =>{
//     console.log("order product")
// }