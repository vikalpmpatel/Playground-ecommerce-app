import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
  cart = []
  cartPrice:number = 0;
  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart"))
    this.cart.forEach(element => {
      this.cartPrice += element.price
   });
  }

}
