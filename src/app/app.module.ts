import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DestinationComponent } from './destination/destination.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { GooglemapComponent } from 'src/googlemap/googlemap.component';
import { BatumiModule } from './main/batumi/batumi.module';
import { BatumiComponent } from './main/batumi/batumi.component';
import { TelaviModule } from './main/telavi/telavi.module';
import { TelaviComponent } from './main/telavi/telavi.component';
import { TbilisiComponent } from './main/tbilisi/tbilisi.component';
import { TbilisiModule } from './main/tbilisi/tbilisi.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {  SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
    AboutComponent,
    ContactComponent,
    AuthComponent,
    PopupComponent,
    MainComponent,
    GooglemapComponent,
    BatumiComponent,
    TelaviComponent,
    TbilisiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GoogleMapsModule,
    BatumiModule,
    TelaviModule,
    TbilisiModule,
    BrowserModule, 
    SlickCarouselModule,
    NgxPageScrollModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '611626701517-ansjeimq9ragotpnvtabsug3ail8a8vr.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
