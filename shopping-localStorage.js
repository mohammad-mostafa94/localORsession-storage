const displayLocalStorageCart = () =>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name);
    }
}

const addProduct = () =>{
    const nameField = document.getElementById("product-name");
    const name = nameField.value;
    console.log(name)

    // display in the UI
    displayProduct(name);

    // addProduct to cart
    addProductToCart(name);

    // clear
    nameField.value = '';

}


const displayProduct = name =>{
    const ul = document.getElementById("products");
    const li = document.createElement('li');
    li.innerText = name; 
    ul.appendChild(li);
}

const getCart = () =>{
    const cart = localStorage.getItem("cart");
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name =>{
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] +1; 
    }
    else
    {
        cart[name] = 1;
    }

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

displayLocalStorageCart();
const orderProduct = () =>{

    localStorage.removeItem("cart");
    console.log("order product")
}