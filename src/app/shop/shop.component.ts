import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  Shop =[
    
    { path: "assets/images/item-5.jpg", tag1: "New", price:"$300.00", title:"Floral Dress"},
    { path: "assets/images/item-6.jpg", tag2:"Sale" , price1:"$199.00", title:"Floral Dress"},
    { path: "assets/images/item-7.jpg", tag1: "New" , price:"$300.00", title:"Floral Dress"},
    { path: "assets/images/item-8.jpg", tag2:"Sale" , price1:"$199.00", title:"Floral Dress"},
    { path: "assets/images/item-10.jpg",tag2:"Sale" , price:"$300.00", title:"Floral Dress"},
    { path: "assets/images/item-9.jpg", tag1: "New", price:"$300.00", title:"Floral Dress"},
    { path: "assets/images/item-13.jpg", tag2:"Sale" , price:"$300.00", title:"Floral Dress"},
    { path: "assets/images/item-14.jpg", tag1: "New", price:"$199.00", title:"Floral Dress"},
    { path: "assets/images/item-11.jpg", tag1: "New", price1:"$199.00", title:"Floral Dress"},
   
  
   ]



  constructor() { }

  ngOnInit() {
  }

}
