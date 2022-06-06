import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards_one:any = [
    {id:1, image:'../../../assets/products-one/card01.webp', value:'Office equipment'},
    {id:2, image:'../../../assets/products-one/card2.webp', value:'Phones equipment'},
    {id:3, image:'../../../assets/products-one/card03.webp', value:'TV'},
    {id:4, image:'../../../assets/products-one/card4.webp', value:'Appliances'},
    {id:5, image:'../../../assets/products-one/card05.webp', value:'Photo & Video'},
    {id:6, image:'../../../assets/products-one/card06.webp', value:'Audio'},
    {id:7, image:'../../../assets/products-one/card07.webp', value:'Gaming consoles'},
    {id:8, image:'../../../assets/products-one/card08.webp', value:'Air conditioning'},
    {id:9, image:'../../../assets/products-one/card09.webp', value:'Auto Electronics'},
    {id:10, image:'../../../assets/products-one/card10.webp', value:'Portable Electronics'},
    {id:11, image:'../../../assets/products-one/card11.webp', value:'Health & Beauty'},
    {id:12, image:'../../../assets/products-one/card12.webp', value:'Lightning'},
  ]

  partners:any = [
    {id:1, partnerImage:'../../../assets/partners/brand-01.webp'},
    {id:2, partnerImage:'../../../assets/partners/brand-02.webp'},
    {id:3, partnerImage:'../../../assets/partners/brand-03.webp'},
    {id:4, partnerImage:'../../../assets/partners/brand-04.webp'},
    {id:5, partnerImage:'../../../assets/partners/brand-05.webp'},
    {id:6, partnerImage:'../../../assets/partners/brand-06.webp'},
  ]

}
