
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { SocialLoginModule } from '@abacritt/angularx-social-login';





@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
  ],
})
export class PopupModule { }
