import { API } from '../core/api.js'
import { Session } from '../core/session.js'
import { Product } from './c_product.js'


export class Main{
    session = null

    constructor(){
        this.session = new Session()
        console.log(this.session.isLogged)
    }

    async displayAllProduct(){                
        let Api = new API()
        let products = await Api.getAllProduct()
        console.log(products)

        let allProducts = products.map(product => new Product(product))
        return allProducts
    }

    async goConnect(email, password){
        this.session.login(email, password)
    }
}