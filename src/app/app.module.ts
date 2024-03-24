import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { NavbarComponent } from './components/frontend/navbar/navbar.component';
import { FooterComponent } from './components/frontend/footer/footer.component';
import { HomepageComponent } from './components/frontend/body/homepage/homepage.component';
import { CartComponent } from './components/frontend/body/cart/cart.component';
import { ProductDetailsComponent } from './components/frontend/body/product-details/product-details.component';
import { SliderComponent } from './components/frontend/body/homepage/slider/slider.component';
import { ProductsComponent } from './components/frontend/body/homepage/products/products.component';
import { ClientReviewComponent } from './components/frontend/body/homepage/client-review/client-review.component';
import { ProductItemComponent } from './components/frontend/body/homepage/products/product-item/product-item.component';
import { CartItemComponent } from './components/frontend/body/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    BodyComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    CartComponent,
    ProductDetailsComponent,
    SliderComponent,
    ProductsComponent,
    ClientReviewComponent,
    ProductItemComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
