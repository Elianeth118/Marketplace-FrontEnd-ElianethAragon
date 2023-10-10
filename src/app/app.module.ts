import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderPromotionComponent } from './modules/header-promotion/header-promotion/header-promotion.component';
import { HeaderComponent } from './modules/header/header/header.component';
import { FooterComponent } from './modules/footer/footer/footer.component';
import { HeaderMovileComponent } from './modules/header-movile/header-movile/header-movile.component';
import { NewletterComponent } from './modules/newletter/newletter/newletter.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderPromotionComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMovileComponent,
    NewletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
