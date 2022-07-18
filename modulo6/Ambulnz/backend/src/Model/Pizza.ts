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
        ingredients: Ingredients[]
    ) {
        super(id, name, price)
        this.ingredients = ingredients
    }
    public getIngredients(): Ingredients[] {
        return this.ingredients
    }
}