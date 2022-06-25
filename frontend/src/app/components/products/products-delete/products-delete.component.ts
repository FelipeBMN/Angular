import { Observable } from 'rxjs';
import { ProductsService } from './../products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  product: Product;
  constructor(private router: Router, private route: ActivatedRoute, private productservice: ProductsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productservice.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    this.productservice.delete(`${this.product.id}`).subscribe(() => {
      this.productservice.showMessage("Produto excluído.");
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
