export class Product{

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.image = data.image
        this.altText = data.altText
        this.colors = data.colors
        this.price = data.price
        this.description = data.description 
        this.like = data.like
        this.dislike = data.dislike
    }

    displayHomeProduct(){
        return `
            <a href="./product.html?id=${this.id}">
                <article>
                    <img src="${this.image}" alt="${this.altText}">
                    <h3 class="productName">${this.name}</h3>
                    <p class="productDescription">${this.description}</p>
                </article>
             </a>
        `
    }

}