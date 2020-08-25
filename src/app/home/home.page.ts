import { Component } from '@angular/core';
import { ShopList } from './shoppingList.model';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 title = 'learning_ionic';
 shoppingList = new Array();
 item;
 amount;
 editId;
 showAddbtn = true;
 showUpdatebtn = false;
 
  addItem(){
    this.shoppingList.push(new ShopList(this.item, this.amount));
    console.log(this.shoppingList);
}
delete(i){
  this.shoppingList.splice(i, 1) ;   
}
update(){
  this.shoppingList.splice(this.editId , 1 , new ShopList(this.item, this.amount));
  this.showAddbtn = true;
  this.showUpdatebtn = false;
}
edit(i){
  this.item = this.shoppingList[i];
  this.amount = this.shoppingList[i];
  this.showAddbtn = false;
  this.showUpdatebtn = true;
  this.editId = i;
  console.log(this.item);

  }

}

