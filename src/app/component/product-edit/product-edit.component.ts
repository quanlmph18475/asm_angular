import { Component, Input } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  
  productForm = this.formBuilder.group({
    name : ['',[Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
   price: [0],
   desc : [''],
  //  createdAt: [''],
   imageUrl: ['']
   })
   product!: IProduct;
   
   constructor(
     private formBuilder: FormBuilder,
     private router: ActivatedRoute,
     private productService: ProductService
 ){
    this.router.params.subscribe(({id})=> {
     this.productService.getItemById(id).subscribe({
       next: (product : any) => {
          this.product = product;
          this.productForm.patchValue(product);
       }
     })
    })
 }
 onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.productForm.patchValue({
        imageUrl: reader.result as string
      });
    };
  }
}
   onHandleSubmit(){
     if( this.productForm.valid){
       this.productService.updateItem({
         ...this.productForm.value, id: this.product.id
       }as IProduct).subscribe({
         complete:() => {
           alert('ban da cap nhat thanh cong')
         }
       })
     }
   }
}
