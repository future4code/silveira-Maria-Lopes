export class Pizzaria {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private photo: string
    ) { }
    public getId() {
        return this.id
    }
    public getName() {
        return this.name
    }

    public getPrice() {
        return this.price
    }

    public getPhoto() {
        return this.photo
    }
}