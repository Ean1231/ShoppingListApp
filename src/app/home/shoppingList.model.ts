export class ShopList{
    item: string;
    amount: string;
    isDone: boolean;
constructor(item, amount){
     this.item = item;
     this.amount = amount;
     this.isDone = false;
    }
}