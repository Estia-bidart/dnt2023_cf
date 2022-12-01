import { API } from "./api.js"

export class Session{
    isLogged = false
    token = ''

    constructor(){
        this.token = localStorage.getItem('tokenc')
        this.isLogged = !!this.token
        this.displayMainNav()
    }

    displayMainNav(){
        if(this.isLogged){
            document.querySelector('#main_nav').insertAdjacentHTML(
                'beforeend', this.navUser()
            )
        }else{
            document.querySelector('#main_nav').insertAdjacentHTML(
                'beforeend', this.navGuest()
            )
        }
    }

    async login(email, password){
        let Api = new API()
        let token = await Api.login({email, password})
        this.saveToken(token.access_token)
        window.location.href = 'index.html'
    }

    /**************************************************/
    /**************************************************/

    saveToken(token){
        localStorage.setItem('tokenc', token)
    }

    navGuest(){
        return `
            <ul>
                <a href="./index.html"><li>Accueil</li></a>
                <a href="./cart.html"><li>Panier</li></a>
                <a href="./login.html"><li>Login</li></a>
            </ul>
        `
    }

    navUser(){
        return `
            <ul>
                <a href="./index.html"><li>Accueil</li></a>
                <a href="./cart.html"><li>Panier</li></a>
                <a href="./ajouter.html"><li>Ajouter</li></a>
                <a href="#" id="btn_logout"><li>Logout</li></a>
            </ul>
        `
    }
}