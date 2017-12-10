import { Product } from './product';

export class Category {
    public _products: Product[]

    public constructor(
        public id: number, 
        public name: String
    ) {}

    public get products() {
        return this._products;
    }

    public set products(products: Product[]) {
        this._products = products;
    }
    
}
