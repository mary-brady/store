import Store from "./models/Store.js"

const str = new Store()

class StoreService {
    constructor() {

    }

    addToCart(productID) {
        str.addToCart(productID)
    }
    calculateSubTotal(price) {
        str.calculateSubTotal
    }
    calculateTotal(price2) {
        str.calculateTotal
    }
    pay() {
        str.pay()
    }

}















export default StoreService