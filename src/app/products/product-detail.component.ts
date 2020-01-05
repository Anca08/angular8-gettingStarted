import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct|undefined;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {

    console.log(this.route.snapshot.paramMap.get('id'));
    //use an observable if you want to use a next button to navigate between productList
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');//we add plus at the beginning because the parameter 'id' is provided as a string
    //the plus is a javascript shortcut to convert a parameter string to a numeric id
  //  this.pageTitle += `: ${id}`;
    if (id) {
      const param = +id;
      this.getProduct(param);
    }
  };

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  };

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
