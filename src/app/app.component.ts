import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home.page';
 
@Component({
  template: '<ion-nav [root]="rootPage" swipeBackEnabled="false"></ion-nav>'
})
export class AppComponent {
  rootPage: any;
 
  constructor(platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen)
  {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}