import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  searchText: string = "";
  currentProduct!: IProduct; 

  products : IProduct[]=[]

  constructor(private productService: ProductService){
    this.productService.getAll().subscribe({
      next: (data) => {this.products = data}
         ,
         error: (error) => console.log(error)   
    })
   }
   showProduct(product:IProduct){
      this.currentProduct= product  
   }
   removeProduct(id: number | string){
    // const confirm = window.confirm("Are tou sure?")
    //  if(confirm){
    //   this.products = this.products.filter(item => item.id !== id)
    //  }
   
      const confirm = window.confirm("Are tou sure?")
    if(confirm){
      this.productService.removeItem(id).subscribe(()=> {
        this.products = this.products.filter(item => item.id != id)
      })
    }
    
  }
}
