import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  constructor( private headerService:HeaderService) { 
    headerService.headerData = {
      title: 'Vendas',
      icon: ' local_grocery_store',
      routeUrl:'/vendas'
    }
  }
  ngOnInit(): void {
  }

}
