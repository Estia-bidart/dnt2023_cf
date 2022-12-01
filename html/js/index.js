import { Main } from "./class/main.js";

const start = async () => {
    
    let main = new Main()
    let products = await main.displayAllProduct()
    console.log(products)

    document.querySelector('#items').insertAdjacentHTML(
        'beforeend', 
        products.map(product => product.displayHomeProduct()).join('')
    )
}

window.addEventListener('load', () => start())