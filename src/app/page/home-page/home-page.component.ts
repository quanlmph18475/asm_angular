import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products : IProduct[]=[] 

  constructor(private productService: ProductService){
    this.productService.getAll().subscribe({
      next: (data) => {this.products = data}
         ,
         error: (error) => console.log(error)   
    })
   }
}
