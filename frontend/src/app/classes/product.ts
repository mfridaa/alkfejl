import { Orders } from './orders';
import { Category } from './category';

export class Product {
    public _categories: Category[]

    public constructor(
        public id: number, 
        public name: string, 
        public price: number
    ){}
    

    public get categories() {
        return this._categories;
    }

    public set categories(categories: Category[]) {
        this._categories = categories;
    }
    
}
