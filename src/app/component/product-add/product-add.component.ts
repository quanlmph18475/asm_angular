import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    price: ['', Validators.min(0)],
    desc: [''],
    imageUrl: ['']
  })
  constructor( private formBuilder: FormBuilder,
    private productService: ProductService) {
   
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

 

  onHandleSubmit() {
    if( this.productForm.valid){
          this.productService.addItem(this.productForm.value as IProduct  ).subscribe(
            {
              complete:() => {
                alert('ban da them san pham thanh cong')
              }
            }
          )
      }
  }
}
