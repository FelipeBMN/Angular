import { ProductsService } from './../products.service';
import { Product } from './../products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-read',
  templateUrl: './products-read.component.html',
  styleUrls: ['./products-read.component.css']
})
export class ProductsReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'action']
  products: Product[] = []

  constructor(private productsservice: ProductsService) { }

  ngOnInit(): void {
    this.productsservice.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
