import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';

// TODO: Better importing system
import { BindableComponent } from '../components/bindable/bindable.component';
import { CategoryComponent } from '../components/category/category.component';
import { EventComponent } from '../components/event/event.component';
import { VotersComponent } from '../components/voters/voters.component';
import { HomePage } from '../pages/home/home.page';
import { EventPage } from '../pages/event/event.page';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiService } from '../services/api.service';
import { UtilsService } from '../services/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    EventPage,
    BindableComponent,
    CategoryComponent,
    VotersComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    HttpModule
  ],
  entryComponents: [
    HomePage,
    EventPage
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    ApiService,
    UtilsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
