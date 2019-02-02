import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private dataService:DataService, private router:Router) { }
  cart = []
  cartStatus:string
  cartPrice:number = 0

  ngOnInit() {
    
    this.cart = JSON.parse(localStorage.getItem("cart"))
    this.cart.forEach(element => {
       this.cartPrice += parseInt(element.price)
    });
    this.setEmptyMessage()
  }

  onDelete(id) {
    this.cart.forEach(element => {
      if(element.id == id){
        this.cart.splice(element, 1)
      }
    });
    localStorage.setItem('cart', JSON.stringify(this.cart))
    this.setEmptyMessage();
    this.cartPrice = 0
    this.cart.forEach(element => {
       this.cartPrice += element.price
    });
  }

  setEmptyMessage() {
    if(this.cart.length < 1){
      this.cartStatus = "Looks like Cart is Empty, Go to Home"
    }
  }

  onCheckout() {
    this.router.navigate(['/checkout']);
  }

}
