import { Product } from './product';

export class Category {
    private _id: number;
    private _name: string;
    public _products: Product[]

    public constructor(id: number,name: string) {
        this._id = id;
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public get products() {
        return this._products;
    }

    public set name(name: string){
        this._name = name;
    }

    public set products(products: Product[]) {
        this._products = products;
    }
    
}
