import { Pizzaria } from "./Pizzaria"


export type Ingredients = {
    id?: string,
    name: string
}

export class Pizza extends Pizzaria {
    private ingredients: Ingredients[]

    constructor(
        id: string,
        name: string,
        price: number,
        photo: string,
        ingredients: Ingredients[]
    ) {
        super(id, name, price, photo)
        this.ingredients = ingredients
    }
    public getIngredients(): Ingredients[] {
        return this.ingredients
    }
}