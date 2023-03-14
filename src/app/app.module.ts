import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeFeatureComponent } from './components/home/home-feature/home-feature.component';
import { ItalyFlagUiComponent } from './components/home/home-ui/italy-flag-ui/italy-flag-ui.component';
import { CustomBtnUiComponent } from './components/generals/custom-btn-ui/custom-btn-ui.component';
import { BtnGoHomeCardUiComponent } from './components/home/home-ui/btn-go-home-card-ui/btn-go-home-card-ui.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeFeatureComponent,
    ItalyFlagUiComponent,
    CustomBtnUiComponent,
    BtnGoHomeCardUiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
