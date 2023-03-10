const Product = require("./Product");

module.exports = class Book extends Product {
    constructor(title, synopsis, genre, pages, author, description, price, inStock) {
        super(`Livro: ${title}`, description, price, inStock)
        this.synopsis = synopsis
        this.title = title
        this.genre = genre
        this.pages = pages
        this.author = author
    }

    
}