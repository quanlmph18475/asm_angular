import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent {
      product! : IProduct;

      constructor(
        private productService: ProductService,
        private route: ActivatedRoute 
        ){
         this.route.paramMap.subscribe(param => {
          const id = Number(param.get('id'))
          this.productService.getItemById(id).subscribe(product => {
            this.product = product;
          }, error => console.log(error.message)
          )
         })
       }
}
