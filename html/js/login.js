import { Main } from "./class/main.js";

const startLogin = () => {
    let main = new Main()

    let form = document.forms['form_cnx']
    const nameRegExp = /^[a-z]{2,}$/i
    const emailRegExp = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/

    form.addEventListener('submit', e => {
        e.preventDefault()

        let flag = true

        if(!form.elements['email'].value.trim().match(emailRegExp)){
            flag = false
        }

        if(!form.elements['password'].value.trim().match(nameRegExp)){
            flag = false
        }

        if(!flag){
            console.log("Erreur formulaire")
            return false
        }

        main.goConnect(form.elements['email'].value, form.elements['password'].value)
    })
}

window.addEventListener('load', startLogin)