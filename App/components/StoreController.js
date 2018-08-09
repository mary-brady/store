import StoreService from './StoreService.js'

//private parts
let myStore = new StoreService();



class StoreController {
    constructor() {

    }
    addToCart(productID) {
        myStore.addToCart(productID)
    }
    calculateSubTotal(price) {
        myStore.calculateSubTotal(price)
    }
    calculateTotal(price2) {
        myStore.calculateTotal(price2)
    }
    pay() {
        myStore.pay()
    }
}

console.log('hi from store controller')
export default StoreController