import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AppComponent } from './app.component';

// TODO: Better importing system
import { WorkspaceComponent } from '../components/workspace/workspace.component';
import { BindableComponent } from '../components/bindable/bindable.component';
import { CategoryComponent } from '../components/category/category.component';
import { EventComponent } from '../components/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    BindableComponent,
    CategoryComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    HttpModule
  ],
  bootstrap: [IonicApp],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
