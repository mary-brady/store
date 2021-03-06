import Product from "./Product.js";

class Store {
    constructor() {
        this.vault = this.vault || 0.00
        this.subTotal = this.subTotal || 0.00
        this.total = this.total || 0.00
        this.tax = this.tax || 0.00
        this.cart = []
        this.products = []
        this.setUp()
    }

    setUp() {
        let mountainDew = new Product('md', 'Mountain Dew', 2.00, '../assets/mountaindew.png', 15)
        let drPepper = new Product('dp', 'Dr Pepper', 1.00, '../assets/drpepper.jpg', 3)
        let dietCoke = new Product('dc', 'Diet Coke', 1.00, '../assets/dietcoke.jpeg', 1)
        let rootBeer = new Product('rb', 'Root Beer', 2.00, '../assets/rootbeer.jpeg', 8)
        let rockstar = new Product('rs', 'Rockstar Energy', 4.00, '../assets/rockstar.jpg', 5)

        this.products.push(mountainDew, drPepper, dietCoke, rootBeer, rockstar);
        let template = `
            <div>
                <div class="pictures"><img src="${mountainDew.img}" alt="mountain dew" /></div>
                <h3>${mountainDew.name}</h3>
                <h4>$ ${mountainDew.price}</h3>
                <button onclick="app.controllers.myStore.addToCart('${mountainDew.id}')">Buy</button>
            </div>
            <div>
                <div class="pictures"><img src="${drPepper.img}" alt="dr pepper" /></div>
                <h3>${drPepper.name}</h3>
                <h4>$ ${drPepper.price}</h3>
                <button onclick="app.controllers.myStore.addToCart('${drPepper.id}')">Buy</button>
             </div>
             <div>
                <div class="pictures"><img src="${dietCoke.img}" alt="diet coke" /></div>
                <h3>${dietCoke.name}</h3>
                <h4>$ ${dietCoke.price}</h3>
                <button onclick="app.controllers.myStore.addToCart('${dietCoke.id}')">Buy</button>
            </div>
            <div>
                <div class="pictures"><img src="${rootBeer.img}" alt="root beer" /></div>
                <h3>${rootBeer.name}</h3>
                <h4>$ ${rootBeer.price}</h3>
                <button onclick="app.controllers.myStore.addToCart('${rootBeer.id}')">Buy</button>
            </div>
            <div>
                <div class="pictures"><img src="${rockstar.img}" alt="rockstar" /></div>
                <h3>${rockstar.name}</h3>
                <h4>$ ${rockstar.price}</h3>
                <button onclick="app.controllers.myStore.addToCart('${rockstar.id}')">Buy</button>
            </div>
        `
        document.getElementById("store-front").innerHTML = template
        this.draw()
    }

    addToCart(productID) {
        let item = this.products.find(i => i.id == productID)
        if (item) {
            this.cart.push(item)
        }
        this.subTotal = this.calculateSubTotal()
        this.tax = this.calculateTax()
        this.total = this.calculateTotal()
        this.draw()
    }

    calculateSubTotal() {
        this.subTotal = 0
        for (let i = 0; i < this.cart.length; i++) {
            const productPrice = this.cart[i]
            this.subTotal += productPrice.price
        }
        return this.subTotal
    }

    calculateTax() {
        this.tax = (this.subTotal * 0.06)
        return this.tax
    }

    calculateTotal() {
        this.total = (this.calculateSubTotal() + this.calculateTax())
        return this.total
    }

    pay() {
        this.vault = 0
        this.vault = this.calculateSubTotal()
        return {
            total: this.total = 0,
            tax: this.tax = 0,
            subtotal: this.subTotal = 0
        }
        this.draw()
    }
    draw() {
        let cart = `
        <div>
            <h2>SubTotal: $${this.subTotal}</h2>
            <h2>Tax: $${this.tax}</h2>
            <h2>Total: $${this.total}</h2>
            <button onclick="app.controllers.myStore.pay("")">Pay Now</button>
        </div>
        `
        document.getElementById('cart').innerHTML = cart
    }
}

console.log('hello from store.js!')

export default Store