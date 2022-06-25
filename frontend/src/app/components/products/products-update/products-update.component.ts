import { Product } from './../products.model';
import { ProductsService } from './../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-update',
  templateUrl: './products-update.component.html',
  styleUrls: ['./products-update.component.css']
})
export class ProductsUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productservice: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productservice.readById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productservice.update(this.product).subscribe(() => {
      this.productservice.showMessage('Produto Atualizado.');
      this.router.navigate(['/products']);
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
