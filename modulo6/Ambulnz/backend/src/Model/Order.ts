export class Order {
    constructor(
        private quantity: number,
        private user_id: string,
        private pizza_id: string
    ) { }
    
    public getQuantity() {
        return this.quantity
    }
    public getUserId() {
        return this.user_id
    }

    public getPizzaId() {
        return this.pizza_id
    }
}