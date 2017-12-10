import { User } from './user';
import { Product } from './product';

export class Orders {
    /*private _id : number;
    private _amount: number;
    private _Orderdate: Date;
    private _status: boolean;*/
    public _user: User;
    public _product: Product;

    public constructor(
        public id: number, 
        public amount: number, 
        public date: Date, 
        public status: boolean,
        public userid: number,
        public productid: number) 
    {}

    public get user() {
        return this._user;
    }

    public set user(user: User) {
        this._user = user;
    }

    public get product() {
        return this._product;
    }

    public set product(product: Product) {
        this._product = product;
    }

   /* public get id(): number {
        return this._id;
    }

    public get amount(): number {
        return this._amount;
    }

    public get orderDate(): Date {
        return this._Orderdate;
    }

    public get status(): boolean {
        return this._status;
    }
    public get user(): User {
        return this._user;
    }

    public get product(): Product {
        return this._product;
    }

    public set id(id: number){
        this._id = id;
    }

    public set amount(amount: number){
        this._amount = amount;
    }

    public set orderDate(orderDate: Date){
        this._Orderdate = orderDate;
    }

    public set status(status: boolean){
        this._status = status;
    }

    public set user(user: User){
        this._user = user;
    }

    public set product(product: Product){
        this._product = product;
    }*/
}
