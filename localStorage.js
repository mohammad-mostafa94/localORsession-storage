const addLocalStorage = ()=> {
    const key = document.getElementById("keyId");
    const keyValue = key.value;

    const valueField = document.getElementById("valueId");
    const value = valueField.value; 

    const valueStringified = JSON.stringify(value);
    if (keyValue && value) {
        localStorage.setItem(keyValue,valueStringified);
    }
    
    console.log(keyValue,value);
}