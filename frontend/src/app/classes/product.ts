import { Orders } from './orders';
import { Category } from './category';

export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _order: Orders;
    public _categories: Category[]

    public constructor(id: number, name: string, price: number, categories: Category[]) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._categories = categories;
    }

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public get categories() {
        return this._categories;
    }

    public set price(price: number){
        this._price = price;
    }

    public set order(order: Orders){
        this._order = order;
    }

    public set name(name: string){
        this._name = name;
    }


    public set categories(categories: Category[]) {
        this._categories = categories;
    }
    
}
