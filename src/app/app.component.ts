import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Orders',
      url: '/tabs/tab2',
      icon: 'home'
    },
    {
      title: 'My List',
      url: '/tabs/tab3',
      icon: 'list'
    },
    {
      title: 'Settings',
      url: '/tabs/tab4',
      icon: 'settings'
    },{
      title: 'Help and Support',
      url: '/tabs/help'
    }
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
