class Product {
    constructor(id, name, price, img, quantity) {
        this.id = id || ''
        this.name = name || ''
        this.price = price || 0
        this.quantity = quantity || 0
        this.img = img || ''

    }
}


console.log('hello from product.js!')

export default Product