import { Orders } from './orders';

export class User {
    public _orders: Orders[];

    public constructor(
        public id: number,
        public name: String,
        public password: String,
        public role: string,
        public orders : Orders[]
    ) {}

/*    public get orders() {
        return this._orders;
    }

    public set orders(orders: Orders[]) {
        this._orders = orders;
    }*/
}
