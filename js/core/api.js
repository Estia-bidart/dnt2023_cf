export class API{

    url = 'http://localhost:12000'

    async getAllProduct(){
        try{
            let res = await fetch(this.url+'/canapes')
            let data = await res.json()
            return data.data
        }catch(err){
            console.log(err)
        }
    }

    async getOneProduct(pid){
        try{
            let res = await fetch(this.url+'/'+pid)
            let data = await res.json()
            return data
        }catch(err){
            console.log(err)
        }
    }

    async login(credentials){
        try{
            let myHeaders = {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                }
            }

            let res = await fetch(this.url+'/auth/login', myHeaders)
            let data = res.json()
            return data
        }catch(err){
            console.log(err)
        }        
    }
}