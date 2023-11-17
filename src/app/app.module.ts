import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SearchboxPipe } from './searchbox.pipe';
import { ProductComponent } from './component/product/product.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { SignupComponent } from './page/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SearchboxPipe,
    ProductEditComponent,
    HomePageComponent,
    DetailPageComponent,
    BaseLayoutComponent,
    AdminLayoutComponent,
    ProductAddComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
