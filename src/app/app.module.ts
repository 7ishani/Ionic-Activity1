import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecureStorage } from '@ionic-native/secure-storage/ngx';
import { SecureStorageObject} from '@ionic-native/secure-storage/ngx';

@NgModule({
  declarations: [AppComponent],

  entryComponents: [
    
  ],

  imports: [BrowserModule, 
    IonicModule.forRoot({
      
    }), 
    AppRoutingModule,
    
  ],

  providers: [
    StatusBar,
    SplashScreen,
    SecureStorage,
    
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
