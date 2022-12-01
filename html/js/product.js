import { Product } from "./class/product.js";


const displayProduct = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const pid = urlParams.get('id')

    if(!parseInt(pid)){
        window.location.href = 'index.html'
    }

    let product = new Product()
    let res = await product.getOneProduct(pid)
    console.log(res)

    document.querySelector('.item__img').innerHTML = `<img src="${res.data.image}" alt="${res.data.altText}">`
    document.querySelector('#title').textContent = res.data.name
    document.querySelector('#price').textContent = res.data.price
    document.querySelector('#description').textContent = res.data.description

    document.querySelector('#colors').insertAdjacentHTML(
        'beforeend', 
        res.data.colors.map(color => `<option value="${color}">${color}</option>`).join('')
    )

}


window.addEventListener('load', displayProduct)