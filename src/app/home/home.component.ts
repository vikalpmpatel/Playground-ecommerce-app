import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any
  constructor(private dataService:DataService) { }
  cart = []
  
  ngOnInit() {
    this.products = this.dataService.arrayOfProducts()
    this.cart = JSON.parse(localStorage.getItem("cart"))

  }

  onAdd(id) {
    this.cart.push(this.products[id])
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

}
