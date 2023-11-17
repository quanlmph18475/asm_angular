import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductComponent } from './component/product/product.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { SignupComponent } from './page/signup/signup.component';

const routes: Routes = [
  {path: "", component: BaseLayoutComponent, children:[
    {path: "", component: HomePageComponent},
    {path: "product/:id", component: DetailPageComponent },
    {path: "signup", component: SignupComponent}
  ]},
  {path: "admin", component: AdminLayoutComponent, children:[
    {path: "product", component: ProductComponent},
    {path: "product/add", component: ProductAddComponent},
    {path: "product/:id", component: ProductEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
