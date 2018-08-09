import StoreController from './App/components/StoreController.js'

class App {
    constructor() {
        this.controllers = {
            myStore: new StoreController()
        }
    }
}


console.log('hello from main.js')
// @ts-ignore
window.app = new App();