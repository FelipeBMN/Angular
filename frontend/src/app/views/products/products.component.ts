import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private router: Router, private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl:'/products'
    }
  }
  ngOnInit(): void {

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
