import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputContainerComponent } from './components/partials/input-container/input-container.component';
import { InputValidationComponent } from './components/partials/input-validation/input-validation.component';
import { InputTextComponent } from './components/partials/input-text/input-text.component';
import { DefaultButtonComponent } from './components/partials/default-button/default-button.component';
import { RegisteraUserComponent } from './components/pages/registera-user/registera-user.component';
import { LoadingComponent } from './components/partials/loading/loading.component';

import { LoadingInterceptor } from './shared/intercetor/loading.interceptor';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { OrderListItemsComponent } from './components/partials/order-list-items/order-list-items.component';
import { MapComponent } from './components/partials/map/map.component';

import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentComponent } from './components/pages/payment/payment.component';
import { PaypalComponent } from './components/partials/paypal/paypal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    InputTextComponent,
    DefaultButtonComponent,
    RegisteraUserComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderListItemsComponent,
    MapComponent,
    
    PaymentComponent,
    PaypalComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
   
  ],

bootstrap: [AppComponent]
})
export class AppModule { }
